<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Docter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class LoginController extends Controller
{
    public function login()
    {
        return Inertia::render('Docter/Login');
    }

    public function login_post(Request $request)
    {
        // return $request;
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $docter = Docter::where('email', $data['email'])->first();

        if (!$docter) {
            return back()->withErrors(['email' => 'Email Dan Password Tidak sesuai.']);
        }
    
        if (Auth::guard('docter')->attempt($data)) {
            $request->session()->put('docter_id', $docter->docter_id);
            return to_route('doctor.dashboard');
        }
    
        return back()->withErrors(['email' => 'Email Dan Password Tidak sesuai.']);
    }

    
    public function logout()
    {
        Auth::logout();
        session()->flush();
        return redirect('/');
    }
}
