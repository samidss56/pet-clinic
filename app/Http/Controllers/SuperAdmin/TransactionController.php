<?php

namespace App\Http\Controllers\SuperAdmin;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Service;
use App\Models\Appointmen;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Events\TransactionPaid;
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
        $trans = Transaction::latest()->paginate(5);
        return Inertia::render('Superadmin/Transaction/Index', [
            'title' => 'Transaction Management',
            'transaction' => TransactionSuperAdminResource::collection($trans),
        ]);
    }

    public function show(Transaction $transaction)
    {  
        $transaction->load(['user', 'appoitment.docter', 'appoitment.pet', 'details']);

        // return new TransactionSuperAdminResource($transaction);

        return inertia('Superadmin/Transaction/Show',[
            'transaction' => new TransactionSuperAdminResource($transaction),
        ]);
    }

}
