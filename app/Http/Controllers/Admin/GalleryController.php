<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\GalleryCollection;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    // Tampil Halaman Manage Galleries
    public function index()
    {
        $galleries = new GalleryCollection(Gallery::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/Galleries/Index', [
            'title' => 'Galleries Management',
            'galleries' => $galleries,
        ]);
    }

    // Tampil Halaman Create Gallery
    public function create()
    {
        return Inertia::render('Admin/Galleries/Create', [
            'title' => 'Create Gallery'
        ]);
    }

    // Create Gallery
    public function store(Request $request)
    {
        $gallery_id = 'GLL-' . date('ymdhis');

        $gallery = new Gallery;
        $gallery->gallery_id = $gallery_id;

        if ($request->hasFile('image')) {
            $imageName = uniqid('gallery_') . '.' . $request->image->getClientOriginalExtension();
            $path = $request->image->storeAs('images/galleries', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            $gallery->image = $path;
        }

        $gallery->save();

        return redirect()->route('admin.galleries');
    }

    // Tampil Halaman Update Gallery
    public function edit(Gallery $gallery)
    {
        $galleryData = Gallery::find($gallery->gallery_id);
        return Inertia::render('Admin/Galleries/Edit', [
            'title' => 'Update Gallery',
            'gallery' => $galleryData,
        ]);
    }

    // Update Gallery
    public function update(Request $request, Gallery $gallery)
    {
        if ($request->hasFile('image')) {
            $imageName = uniqid('gallery_') . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images/galleries', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            Storage::disk('public')->delete($gallery->image);
            $gallery->image = $path;
        }

        return redirect()->route('admin.galleries');
    }

    // Delete Gallery
    public function destroy(Gallery $gallery)
    {
        Storage::disk('public')->delete($gallery->image);
        $gallery->delete();
        return redirect()->route('admin.galleries');
    }
}
