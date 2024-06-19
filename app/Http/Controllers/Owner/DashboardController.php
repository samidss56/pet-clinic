<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Appointmen;
use App\Models\Pet;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Owner
    public function index(Request $request)
    {
        $pets = Pet::where('user_id', Auth::user()->user_id)->count();
        $appointments = Appointmen::query()
            ->whereHas('pet', function ($query) {
                $query->where('user_id', Auth::id());
            })->count();

        $transactions = Transaction::whereBelongsTo($request->user())->where('status_payment', 'settlement')->sum('subtotal');
        $productTrans = Transaction::whereBelongsTo($request->user())->where('status_payment', 'settlement')->whereNull('appointmen_id')->count();
        // dd($transactions);
        return Inertia::render('Owner/Dashboard', [
            'title' => 'Dashboard',
            'pets' => $pets,
            'appointments' => $appointments,
            'transactions' => $transactions,
            'productTrans' => $productTrans
        ]);
    }
}
