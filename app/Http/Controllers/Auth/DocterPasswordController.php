<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Models\Docter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;

class DocterPasswordController extends Controller
{
    public function update(Request $request)
    {
        // return $request;
        // Validate the incoming request
        // $validated = $request->validate([
        //     'current_password' => ['required', 'current_password'],
        //     'password' => ['required', Password::defaults(), 'confirmed'],
        // ]);

        // Get the authenticated user
        $user = Auth::guard('docter')->user();

        // return $user;
        // Update the docter's password
        $user->update([
            'password' => Hash::make($request->password),
        ]);

        // Debugging statement to ensure update logic is hit
        // Remove this line in production
        // Log::info('Password updated for docter: ' . $user->docter_id);

        return Inertia::location(route('docter.profile.edit'));
        // return back()->with('status', 'Password updated successfully.');
    }
}
