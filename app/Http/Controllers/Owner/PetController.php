<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\MyPetCollection;
use App\Models\Pet;
use App\Models\PetType;
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
        $myPets = Pet::with(['petType', 'owner'])->where('owner_id', Auth::user()->owner->owner_id)->paginate(10);

        $myPetCollection = new MyPetCollection($myPets);
        return Inertia::render('Owner/Pets/Pets', [
            'title' => 'Your Pets',
            'myPets' => $myPetCollection
        ]);
    }

    // Tampil Halaman Create Pet
    public function createPetPage()
    {
        return Inertia::render('Owner/Pets/CreatePet', [
            'title' => 'Create Pet',
        ]);
    }

    // Create Pet
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'age' => 'required|integer',
            'gender' => 'required|string|in:male,female',
            'color' => 'required|string',
            'pet_type_id' => 'required|exists:pet_types,id',
            'owner_id' => 'required|exists:owners,owner_id'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $pet = new Pet;
        $pet->name = $request->name;
        $pet->age = $request->age;
        $pet->gender = $request->gender;
        $pet->color = $request->color;
        $pet->jenis = $request->jenis_pet;
        $pet->owner_id = $request->owner_id;

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
    public function updatePetPage(Pet $pet)
    {
        $petData = Pet::with(['petType'])->find($pet->id);
        return Inertia::render('Owner/Pets/UpdatePet', [
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
            'age' => $request->age,
            'gender' => $request->gender,
            'color' => $request->color,
            'pet_type_id' => $request->pet_type_id,
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
