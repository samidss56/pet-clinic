<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\MyPetCollection;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class PetController extends Controller
{
    // Tampil Halaman Manage Pet
    public function index()
    {
        $myPets = Pet::where('user_id', Auth::user()->user_id)->paginate(10);
        $myPetCollection = new MyPetCollection($myPets);
        return Inertia::render('Owner/Pets/Index', [
            'title' => 'My Pets',
            'myPets' => $myPetCollection
        ]);
    }

    // Tampil Halaman Create Pet
    public function create()
    {
        return Inertia::render('Owner/Pets/Create', [
            'title' => 'Create Pet',
        ]);
    }

    // Create Pet
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,user_id',
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'gender' => 'required|string',
            'age' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $pet_id = 'PET-' . date('ymdhis');

        $pet = new Pet;
        $pet->pet_id = $pet_id;
        $pet->user_id = $request->user_id;
        $pet->name = $request->name;
        $pet->type = $request->type;
        $pet->gender = $request->gender;
        $pet->age = $request->age;

        if ($request->hasFile('image')) {
            $imageName = uniqid('pet_') . '.' . $request->image->getClientOriginalExtension();
            $path = $request->image->storeAs('images/pets', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            $pet->image = $path;
        }

        $pet->save();

        return redirect()->route('owner.pets');
    }

    // Tampil Halaman Update Pet
    public function edit(Pet $pet)
    {
        $petData = Pet::find($pet->pet_id);
<<<<<<< HEAD

        if (!$petData || $petData->user_id !== Auth::user()->user_id) {
            return redirect()->route('owner.pets');
        }

=======
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
        return Inertia::render('Owner/Pets/Update', [
            'title' => 'Update Pet',
            'pet' => $petData,
        ]);
    }

    // Update Pet
    public function update(Request $request, Pet $pet)
    {
        if ($request->hasFile('image')) {
            $imageName = uniqid('pet_') . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images/pets', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            Storage::disk('public')->delete($pet->image);
            $pet->image = $path;
        }

        $pet->update([
            'name' => $request->name,
            'type' => $request->type,
            'gender' => $request->gender,
            'age' => $request->age,
        ]);

        return redirect()->route('owner.pets');
    }

    // Delete Pet
    public function destroy(Pet $pet)
    {
        Storage::disk('public')->delete($pet->image);
        $pet->delete();
        return redirect()->route('owner.pets');
    }
}
