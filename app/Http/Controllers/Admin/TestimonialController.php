<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonialCollection;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    // Tampil Halaman Manage Testimonials
    public function index()
    {
        $testimonials = new TestimonialCollection(Testimonial::orderByDesc('created_at')->paginate(10));

        return Inertia::render('Admin/Testimonials/Index', [
            'title' => 'Testimonials Management',
            'testimonials' => $testimonials,
        ]);
    }

    // Halaman Update Testimonial
    public function edit(Testimonial $testimonial)
    {
        $testimonialData = Testimonial::find($testimonial->testimonial_id);
        return Inertia::render('Admin/Testimonials/Edit', [
            'title' => 'Update Testimonial',
            'testimonial' => $testimonialData,
        ]);
    }

    // Update Testimonial
    public function update(Request $request, Testimonial $testimonial)
    {
        // dd($request->all());

        $testimonial->update([
            'status' => $request->status,
        ]);

        return redirect()->route('admin.testimonials');
    }

    // Delete Testimonial
    public function destroy(Testimonial $testimonial)
    {
        if (!is_null($testimonial->profile)) {
            Storage::disk('public')->delete($testimonial->profile);
        }
        $testimonial->delete();
        return redirect()->route('admin.testimonials');
    }
}
