<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\HerosectionCollection;
use App\Models\Herosection;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class HerosectionController extends Controller
{
    // Tampil Halaman Manage Hero Section
    public function index()
    {
        $herosectionColection = new HerosectionCollection(Herosection::orderByDesc('created_at'));
        $herosection = $herosectionColection->first();
        return Inertia::render('Admin/Herosection/Index', [
            'title' => 'Hero Section Management',
            'herosection' => $herosection,
        ]);
    }

    // Tampil Halaman Edit Hero Section
    public function edit()
    {
        $herosectionData = Herosection::first();
        return Inertia::render('Admin/Herosection/Edit', [
            'title' => 'Update Hero Section',
            'herosection' => $herosectionData,
        ]);
    }

    // Update Hero Section
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
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->route('admin.herosection.index');
    }

}
