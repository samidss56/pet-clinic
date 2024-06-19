<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\Docter;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        $docter = Auth::guard('docter')->user();
        $carts_new = $request->user() ? Cart::whereBelongsTo($request->user())->whereNull('paid_at')->count() : null;
        return [
            ...parent::share($request),
            'auth' => $request->user() ? [
                'user' => $request->user(),
                'user_id' => $request->user()->user_id,
                'name' => $request->user()->name,
                'email' => $request->user()->email,
                'hasRole' => $request->user()?->hasRoles(),
                'isAdmin' => $request->user()?->hasAnyRoles(['admin']),
                'isOwner' => $request->user()?->hasAnyRoles(['owner']),
                'isSuperAdmin' => $request->user()?->hasAnyRoles(['superadmin']),
            ] : null,
            'docter' => $docter ? [
                'docter_id' => $docter->docter_id,
                'name' => $docter->name,
                'no_telp' => $docter->no_telp,
                'alamat' => $docter->alamat,
                'email' => $docter->email,
                'profile' => $docter->profile,
            ] : null,
            'flash' => [
                'message' => $request->session()->get('message'),
            ],
            'carts_global' => $carts_new,
        ];
    }
}
