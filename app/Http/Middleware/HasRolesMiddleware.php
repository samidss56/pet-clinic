<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HasRolesMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // if($request->user()->hasRoles()){
        //     return $next($request);
        // }
        // abort(404);
        if ($request->user() && $request->user()->hasRole(['owner'])) {
            return $next($request);
        }
        abort(404);
    }
}
