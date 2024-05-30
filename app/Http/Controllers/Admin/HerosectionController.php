<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Herosection;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class HerosectionController extends Controller
{
    // Tampil Halaman Manage Transaction
    public function edit(): Response
    {
        $herosectionData = Herosection::first();
        return Inertia::render('Admin/Herosection/Edit', [
            'title' => 'Hero Section Management',
            'herosection' => $herosectionData,
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $herosection = Herosection::first();

        if ($request->hasFile('image')) {
            $imageName = uniqid('herosection_') . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images/herosection', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            if (!empty($herosection->image)) {
                Storage::disk('public')->delete($herosection->image);
            }
            $herosection->image = $path;
        }

        $herosection->Update([
            'herosection_id' => $request->herosection_id,
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->route('admin.herosection.edit');
    }

}
