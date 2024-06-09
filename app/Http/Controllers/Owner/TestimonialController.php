<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonialCollection;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    // Tampil Halaman Manage Testimonials
    public function index()
    {
        $user_id = Auth::user()->user_id;
        $testimonials = new TestimonialCollection(Testimonial::where('user_id', $user_id)->orderByDesc('created_at')->paginate(10));

        return Inertia::render('Owner/Testimonials/Index', [
            'title' => 'Your Testimonials',
            'testimonials' => $testimonials,
        ]);
    }

    // Tampil Halaman Create Testimonial
    public function create()
    {
        return Inertia::render('Owner/Testimonials/Create', [
            'title' => 'Create Testimonial',
        ]);
    }

    // Create Testimonial
    public function store(Request $request)
    {
        // $name = Auth::user()->name;
        // $profile_picture = Auth::user()->profile;

        // dd($profile_picture);

        $validator = Validator::make($request->all(), [
            'content' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $testimonial_id = 'TST-' . date('ymdhis');
        $user_id = Auth::user()->user_id;

        $testimonial = new Testimonial;
        $testimonial->testimonial_id = $testimonial_id;
        $testimonial->user_id = $user_id;
        $testimonial->name = $request->name;
        $testimonial->content = $request->content;
        $testimonial->status = 'pending';

        // $path_name = $profile_picture ? $profile_picture->storeAs('images/testimonials', $profile_picture, 'public') : null;

        // if (!is_null($profile_picture)) {
        //     Storage::copy($profile_picture, $path_name);
        // }

        // $testimonial->image = $path_name;

        $profile_picture = Auth::user()->profile;

        if ($profile_picture) {
            // Jika $profile_picture adalah path string, kita akan menggunakan Storage::copy
            $path_name = 'images/testimonials/' . basename($profile_picture);

            // Menggunakan Storage untuk menyalin file dari lokasi asal ke lokasi tujuan
            Storage::copy($profile_picture, $path_name);

            // Menyimpan path yang baru ke kolom image di tabel testimonial
            $testimonial->profile = $path_name;
        } else {
            $testimonial->profile = null;
        }

        $testimonial->save();

        return redirect()->route('owner.testimonials');
    }
}
