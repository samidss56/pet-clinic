<?php

namespace App\Http\Controllers\SuperAdmin;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Service;
use App\Models\Appointmen;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Events\TransactionPaid;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\TransactionDetail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Http\Resources\TransactionSuperAdminResource;

class TransactionController extends Controller
{
    // Tampil Halaman Manage Transaction
    public function index()
    {
        $trans = Transaction::where('appointmen_id', '!=', null)->latest()->paginate(5);
        return Inertia::render('Superadmin/Transaction/Index', [
            'title' => 'Transaction Management',
            'transaction' => TransactionSuperAdminResource::collection($trans),
        ]);
    }

    public function show(Transaction $transaction)
    {
        $transaction->load(['user', 'appoitment.docter', 'appoitment.pet', 'details']);

        // return new TransactionSuperAdminResource($transaction);

        return inertia('Superadmin/Transaction/Show', [
            'transaction' => new TransactionSuperAdminResource($transaction),
            'title' => 'Inovoice',
        ]);
    }

    public function downloadlaporan(Request $request)
    {
        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $transactions = Transaction::with(['details.product', 'details.service'])->where('appointmen_id', '!=', null)
            ->whereBetween('date_transaction', [$startDate, $endDate])
            ->get();

        $pdf = Pdf::loadView('pdf.transactions', compact('transactions', 'startDate', 'endDate'));

        return $pdf->download('laporan-transaksi.pdf');
    }

    public function downloaddetailPDF(Transaction $transaction)
    {
        $transaction->load(['user', 'appoitment.docter', 'appoitment.pet', 'details']);
        // return $transaction;
        $pdf = PDF::loadView('pdf.transactiondetail', compact('transaction'));
        return $pdf->download('transaction-inovoice-' . $transaction->invoice . '.pdf');
    }
}
