<?php

namespace App\Http\Controllers;

use App\Models\Aboutus;
use App\Models\Article;
use App\Models\Docter;
use App\Models\Herosection;
use App\Models\Service;
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
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'hero' => $hero,
            'services' => $services,
            'doctors' => $doctors,
            'about' => $about,
            'articles' => $articles
        ]);
    }
}
