<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\PetType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetController extends Controller
{
    public function index()
    {
        return Inertia::render('Owner/Pets/Pets', [
            'title' => 'Your Pets',
        ]);
    }

    public function createPetPage()
    {
        $petTypes = PetType::all();
        return Inertia::render('Owner/Pets/CreatePet', [
            'title' => 'Create Pet',
            'petTypes' => $petTypes
        ]);
    }
}
