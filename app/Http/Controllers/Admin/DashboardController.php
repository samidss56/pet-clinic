<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Article;
use App\Models\Appointmen;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Admin
    public function index(Request $request)
    {
        $transaction = Transaction::whereBelongsTo($request->user())->where('status_payment', 'settlement')->count();
        $pendapatan = Transaction::whereBelongsTo($request->user())->where('status_payment', 'settlement')->sum('subtotal');
        $transactionPerbulan = Transaction::whereBelongsTo($request->user())
        ->select(DB::raw('MONTH(date_transaction) as month'), DB::raw('SUM(subtotal) as total'), DB::raw('count(*) as count'))
        ->groupBy(DB::raw('MONTH(date_transaction)'))
        ->get();

        $appointmentsPerDoctor = Appointmen::join('docters', 'appointmens.docter_id', '=', 'docters.docter_id')
        ->select('appointmens.docter_id', 'docters.name', DB::raw('count(*) as total_appointments'))
        ->where('status','finished')
        ->groupBy('appointmens.docter_id', 'docters.name')
        ->get();
        // dd($appointmentsPerDoctor);
        return Inertia::render('Admin/Dashboard', [
            'title' => 'Admin Dashboard',
            'article' => Article::count(),
            'transaction' => $transaction,
            'pendapatan' => $pendapatan,
            'transactionPerbulan' => $transactionPerbulan,
            'appointmentsPerDoctor' => $appointmentsPerDoctor
        ]);
    }
}
