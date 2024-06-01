<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\AboutusCollection;
use App\Models\Aboutus;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class AboutusController extends Controller
{
    // Tampil Halaman Manage About Us
    public function index()
    {
        $aboutusColection = new AboutusCollection(Aboutus::orderByDesc('created_at'));
        // dd($aboutusColection);
        // $aboutus = new AboutusCollection(Aboutus::first());
        $aboutus = $aboutusColection->first();
        // dd($aboutus);
        return Inertia::render('Admin/Aboutus/Index', [
            'title' => 'About Us Management',
            'aboutus' => $aboutus,
        ]);
    }

    // Tampil Halaman Edit About Us
    public function edit()
    {
        $aboutusData = Aboutus::first();
        return Inertia::render('Admin/Aboutus/Edit', [
            'title' => 'Update About Us',
            'aboutus' => $aboutusData,
        ]);
    }

    // Update About Us
    public function update(Request $request): RedirectResponse
    {
        $aboutus = Aboutus::first();

        if ($request->hasFile('image')) {
            $imageName = uniqid('aboutus_') . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images/aboutus', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            if (!empty($aboutus->image)) {
                Storage::disk('public')->delete($aboutus->image);
            }
            $aboutus->image = $path;
        }

        $aboutus->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->route('admin.aboutus.index');
    }

    // public function destroy(): RedirectResponse
    // {
    //     $aboutus = Aboutus::first();

    //     $aboutus->update([
    //         'title' => '',
    //         'content' => '',
    //         'image' => '',
    //     ]);

    //     return redirect()->route('admin.aboutus.index');
    // }

}
