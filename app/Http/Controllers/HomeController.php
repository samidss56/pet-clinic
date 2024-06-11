<?php

namespace App\Http\Controllers;

use App\Models\Aboutus;
use App\Models\Article;
use App\Models\Docter;
use App\Models\Herosection;
use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $hero = Herosection::first();
        $services = Service::limit(6)->get();
        $doctors = Docter::limit(4)->get();
        $about = Aboutus::first();
        $articles = Article::limit(3)->get();
        $testimonials = Testimonial::where('status', 'accepted')->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'hero' => $hero,
            'services' => $services,
            'doctors' => $doctors,
            'about' => $about,
            'articles' => $articles,
            'testimonials' => $testimonials
        ]);
    }
}
