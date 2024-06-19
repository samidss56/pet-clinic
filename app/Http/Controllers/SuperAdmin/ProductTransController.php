<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductTransResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\PDF;

class ProductTransController extends Controller
{
    public function index()
    {
        $transaction = Transaction::where('appointmen_id', '=', null)->latest()->paginate(5);
        return Inertia::render('Superadmin/ProductTrans/Index', [
            'title' => 'Product Transaction Management',
            'transactions' => ProductTransResource::collection($transaction),
        ]);
    }

    public function show(Transaction $transaction)
    {
        return Inertia::render('Superadmin/ProductTrans/Show', [
            'title' => 'Detail Transaction',
            'transaction' => new ProductTransResource($transaction),
        ]);
    }

    public function downloadReport(Request $request)
    {
        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $transactions = Transaction::with(['details.product', 'user'])
            ->where('appointmen_id', '=', null)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->get();
        // dd($transactions);
        $pdf = PDF::loadView('pdf.productTransactionReport', compact('transactions', 'startDate', 'endDate'));
        return $pdf->download('product-transaction-report.pdf');
    }

    public function downloadDetailPDF(Transaction $transaction)
    {
        $transaction->load('details.product', 'user');
        $pdf = PDF::loadView('pdf.productTransactionDetail', compact('transaction'));
        return $pdf->download('transaction-inovoice-' . $transaction->invoice . '.pdf');
    }
}
