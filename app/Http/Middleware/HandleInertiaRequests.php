<?php

namespace App\Http\Middleware;

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
        $docter = Auth::guard('docter');

        return [
            ...parent::share($request),
            'auth' => $request->user() ? [
                'user' => $request->user(),
                'name' => $request->user()->name,
                'email' => $request->user()->email,
                'hasRole' => $request->user()?->hasRoles(),
                'isAdmin' => $request->user()?->hasAnyRoles(['admin']),
                'isOwner' => $request->user()?->hasAnyRoles(['owner']),
                'isSuperAdmin' => $request->user()?->hasAnyRoles(['superadmin']),
            ] : null,
            'docter' => $docter,
        ];
    }
}
