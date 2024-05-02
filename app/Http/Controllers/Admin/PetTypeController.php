<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PetTypeCollection;
use App\Models\PetType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetTypeController extends Controller
{
    public function index()
    {
        $petTypes = new PetTypeCollection(PetType::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/PetTypes/PetTypes', [
            'title' => 'Pet Types Management',
            'petTypes' => $petTypes
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string|max:255',
        ]);

        $petType = new PetType();
        $petType->type = $request->type;
        $petType->save();
        return redirect()->route('admin.pet-types');
    }

    public function update(Request $request, PetType $petType)
    {
        $request->validate([
            'type' => 'required|string|max:255',
        ]);

        $petType->type = $request->type;
        $petType->save();
        return redirect()->route('admin.pet-types');
    }

    public function destroy(PetType $petType)
    {
        $petType->delete();
        return redirect()->route('admin.pet-types');
    }
}
