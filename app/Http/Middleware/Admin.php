<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::user()->role != 'admin') {
            if (Auth::user()->role == 'doctor') {
                return redirect()->route('doctor.dashboard');
            } else {
                return redirect()->route('owner.dashboard');
            }
        }
        return $next($request);
    }
}
