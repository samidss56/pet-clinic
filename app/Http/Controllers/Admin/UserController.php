<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Models\Doctor;
use App\Models\Owner;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = new UserCollection(User::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/Users', [
            'title' => 'Users Management',
            'users' => $users
        ]);
    }

    public function createUserPage()
    {
        return Inertia::render('Admin/CreateUser', [
            'title' => 'Create User'
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'role' => 'required|in:admin,doctor,owner',
            'password' => ['required', Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        if ($request->role === 'doctor') {
            $doctor = new Doctor(['doctor_id' => $user->id]);
            $user->doctor()->save($doctor);
        } elseif ($request->role === 'owner') {
            $owner = new Owner(['owner_id' => $user->id]);
            $user->owner()->save($owner);
        }

        event(new Registered($user));
        return redirect()->route('admin.users');
    }
}
