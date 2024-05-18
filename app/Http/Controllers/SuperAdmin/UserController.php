<?php

namespace App\Http\Controllers\Superadmin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class UserController extends Controller
{
    // Tampil Halaman Manage User
    public function index()
    {
        $users = new UserCollection(User::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Superadmin/Users/Users', [
            'title' => 'Users Management',
            'users' => $users
        ]);
    }

    // Tampil Halaman Create User
    public function createUserPage()
    {
        return Inertia::render('Superadmin/Users/CreateUser', [
            'title' => 'Create User'
        ]);
    }

    // Create User
    public function store(Request $request)
    {
        $user_id = 'USR-' . date('ymdhis');

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'role' => 'required|in:superadmin,admin,owner',
            'password' => ['required', Password::defaults()],
        ]);

        $user = User::create([
            'user_id' => $user_id,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($request->role === 'superadmin')
        {
            $role_user = new RoleUser();
            $role_user->role_id = 1;
            $role_user->user_id = $user_id;

            $role_user->save();
        }
        elseif ($request->role === 'admin')
        {
            $role_user = new RoleUser();
            $role_user->role_id = 2;
            $role_user->user_id = $user_id;

            $role_user->save();
        }
        elseif ($request->role === 'owner')
        {
            $role_user = new RoleUser();
            $role_user->role_id = 3;
            $role_user->user_id = $user_id;

            $role_user->save();
        }

        event(new Registered($user));

        return redirect()->route('superadmin.users');
    }

    // Halaman Update User
    public function updateUserPage(User $user)
    {
        $user = RoleUser::with(['user', 'role'])->find($user->user_id);
        return Inertia::render('Superadmin/Users/UpdateUser', [
            'title' => 'Update User',
            'user' => $user
        ]);
    }

    // Update User
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            // 'email' => 'required|string|email|max:255|unique:users,email,' . $user->user_id,
            'role' => 'required|in:superadmin,admin,owner',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        if ($request->role === 'superadmin')
        {
            $role_user = RoleUser::find($user->user_id);
            $role_user->role_id = 1;

            $role_user->update();
        }
        elseif ($request->role === 'admin')
        {
            $role_user = RoleUser::find($user->user_id);
            $role_user->role_id = 2;

            $role_user->update();
        }
        elseif ($request->role === 'owner')
        {
            $role_user = RoleUser::find($user->user_id);
            $role_user->role_id = 3;

            $role_user->update();
        }

        return redirect()->route('superadmin.users');
    }

    // Delete User
    public function destroy(User $user)
    {
        $user->delete();
        RoleUser::where('user_id', $user->user_id)->delete();
        return redirect()->route('superadmin.users');
    }
}
