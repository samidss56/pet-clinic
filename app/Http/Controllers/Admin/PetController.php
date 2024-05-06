<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PetCollection;
use App\Models\Pet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetController extends Controller
{
    public function index()
    {
        $pets = Pet::with(['petType', 'owner'])->paginate(10);
        $petCollection = new PetCollection($pets);
        return Inertia::render('Admin/Pets/Pets', [
            'title' => 'Pets Management',
            'pets' => $petCollection,
        ]);
    }
}
