<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Http\Resources\HomeDoctorResource;
use App\Models\Docter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    public function index()
    {
        $doctors = Docter::latest()->paginate(6);
        return Inertia::render('Home/Doctors/Index', [
            "title" => "Doctor Management",
            "doctors" => HomeDoctorResource::collection($doctors),
        ]);
    }
}
