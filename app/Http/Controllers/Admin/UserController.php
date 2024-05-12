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
    // Tampil Halaman Manage User
    public function index()
    {
        $users = new UserCollection(User::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/Users/Users', [
            'title' => 'Users Management',
            'users' => $users
        ]);
    }

    // Tampil Halaman Create User
    public function createUserPage()
    {
        return Inertia::render('Admin/Users/CreateUser', [
            'title' => 'Create User'
        ]);
    }

    // Create User
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

        // if ($request->role === 'doctor') {
        //     $doctor = new Doctor(['doctor_id' => $user->id]);
        //     $user->doctor()->save($doctor);
        // } elseif ($request->role === 'owner') {
        //     $owner = new Owner(['owner_id' => $user->id]);
        //     $user->owner()->save($owner);
        // }

        event(new Registered($user));
        return redirect()->route('admin.users');
    }

    // Halaman Update User
    public function updateUserPage(User $user)
    {
        $userData = $user->find($user->id);
        return Inertia::render('Admin/Users/UpdateUser', [
            'title' => 'Update User',
            'user' => $userData
        ]);
    }

    // Update User
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'role' => 'required|in:admin,doctor,owner',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role
        ]);

        // if ($request->role === 'owner' && $user->doctor) {
        //     $owner = new Owner(['owner_id' => $user->id]);
        //     $user->owner()->save($owner);
        //     $user->doctor()->delete();
        // } elseif ($request->role === 'doctor' && $user->owner) {
        //     $doctor = new Doctor(['doctor_id' => $user->id]);
        //     $user->doctor()->save($doctor);
        //     $user->owner()->delete();
        // }

        return redirect()->route('admin.users');
    }

    // Delete User
    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('admin.users');
    }
}
