<?php

namespace App\Http\Controllers\SuperAdmin;

use Inertia\Inertia;
use App\Models\Docter;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\User;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Super Admin
    public function index(Request $request)
    {
        $transaction = Transaction::where('status_payment', 'settlement')->count();
        $pendapatan = Transaction::where('status_payment', 'settlement')->sum('subtotal');
        $owner = User::whereHas('roles', function ($query) {
            $query->where('role_id', 3);
        })->count();
        // dd($owner)
;        $transactionPerbulan = Transaction::query()
        ->select(DB::raw('MONTH(date_transaction) as month'), DB::raw('SUM(subtotal) as total'), DB::raw('count(*) as count'))
        ->groupBy(DB::raw('MONTH(date_transaction)'))
        ->get();
        
        $appointmentsAdmin = Transaction::join('users', 'transactions.user_id', '=', 'users.user_id')
        ->select('transactions.user_id', 'users.name', DB::raw('count(*) as total_transaction'),   DB::raw('SUM(subtotal) as total'))
        ->where('status_payment','settlement')
        ->groupBy('transactions.user_id', 'users.name')
        ->get();

        // return $appointmentsAdmin;

        return Inertia::render('Superadmin/Dashboard', [
            'title' => 'Super Admin Dashboard',
            'docter' => Docter::count(),
            'transaction' => $transaction,
            'pendapatan' => $pendapatan,
            'transactionPerbulan' => $transactionPerbulan,
            'owner' => $owner,
            'appointmentsAdmin' => $appointmentsAdmin
        ]);
    }
}
