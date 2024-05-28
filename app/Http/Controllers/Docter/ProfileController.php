<?php

namespace App\Http\Controllers\Docter;

use App\Http\Controllers\Controller;
use App\Models\Docter;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function edit()
    {
        return Inertia::render('Docter/Settings/Edit', [
            'title' => 'Profile Settings',
            'status' => session('status'),
        ]);
    }

    public function update(Request $request, Docter $docter)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'docter_id' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'no_telp' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
            'profile' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Handle the profile picture upload
        if ($request->hasFile('profile')) {
            $picture = $request->file('profile');
            $path = $picture->storeAs('images/docters', $request->docter_id . '.' . $picture->extension(), 'public');
            $validatedData['profile'] = $path;
        }

        // Update the docter data
        $docter->update($validatedData);

        return Redirect::route('docter.profile.edit')->with('status', 'Profile updated successfully.');
    }
}
