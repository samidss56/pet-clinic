<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WhyUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WhyUsController extends Controller
{
    public function index()
    {
        $whyUs = WhyUs::first();
        return Inertia::render('Admin/WhyUs/Index', [
            'title' => 'Why Us Management',
            'whyUs' => $whyUs
        ]);
    }

    public function edit()
    {
        $whyUs = WhyUs::first();
        return Inertia::render('Admin/WhyUs/Edit', [
            'title' => 'Update Why Us',
            'whyUs' => $whyUs
        ]);
    }

    public function update(Request $request)
    {
        $whyUs = WhyUs::first();

        if ($request->hasFile('image')) {
            $imageName = uniqid('whyus_') . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images/whyus', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            if (!empty($whyUs->image)) {
                Storage::disk('public')->delete($whyUs->image);
            }
            $whyUs->image = $path;
        }

        $whyUs->update([
            'title' => $request->title,
            'description' => $request->description,
            'list_items' => $request->list_items,
        ]);

        return redirect('/admin/whyus')->with(['message' => 'Why Us Section Updated Successfully!', 'whyUs' => $whyUs], 200);
    }
}
