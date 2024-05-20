<?php

namespace App\Http\Controllers\SuperAdmin;

use Inertia\Inertia;
use App\Models\Docter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\DocterResource;
use App\Models\Jadwal;
use Illuminate\Support\Facades\Storage;

class DocterController extends Controller
{
    // Tampil Halaman Manage Docter
    public function index()
    {
        $docter = Docter::latest()->paginate(5);
        return Inertia::render('Superadmin/Docters/Index', [
            'title' => 'Docters Management',
            'docters' => DocterResource::collection($docter),
        ]);
    }

    public function create()
    {
        return inertia('Superadmin/Docters/Create');
    }

    public function store(Request $request)
    {
        // return $request->all();

        $request->validate([
            'profile' => ['nullable', 'mimes:png,jpg,jpeg', 'image'],
            'name' => ['required', 'string', 'min:3'],
            'email' => 'required|string|lowercase|email|max:255|unique:'.Docter::class,
            'password' => ['required', 'string', 'min:3'],
            'no_telp' => ['required'],
            'alamat' => ['required', 'string', 'min:3'],
        ]);

        $picture = $request->file('profile');
        $docter_id = 'dr-' .date('ymdhis');

        Docter::create([
            'docter_id' => $docter_id,
            'name' => $nama = $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'no_telp' => $request->no_telp,
            'alamat' => $request->alamat,
            'profile' => $request->hasFile('profile') ? $picture->storeAs('images/docters', $docter_id . '.' . $picture->extension(), 'public') : null,
        ]);

        $jadwal = new Jadwal();
        $jadwal->docter_id = $docter_id;
        $jadwal->save();

        return to_route('superadmin.docters');
    }

    public function edit(Docter $docter)
    {
        // return new DocterResource($docter);
        return inertia('Superadmin/Docters/Edit',[
            'docters' => new DocterResource($docter),
        ]);
    }

    public function update(Request $request, Docter $docter)
    {
        // return $request;
        // $request->validate([
        //     'profile' => ['nullable', 'mimes:png,jpg,jpeg', 'image'],
        //     'name' => ['string', 'min:3'],
        //     'email' => 'string|lowercase|email|max:255|unique:'.Docter::class,
        //     'no_telp' => ['string', 'min:3'],
        //     'alamat' => ['string', 'min:3'],
        // ]);

        $picture = $request->file('profile');

        $docter->update([
            'docter_id' => $docter_id = $request->docter_id,
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'no_telp' => $request->no_telp,
            'alamat' => $request->alamat,
            'profile' => $request->hasFile('profile') ? $picture->storeAs('images/docters', $docter_id . '.' . $picture->extension(),'public') : $docter->profile,
        ]);

        return Inertia::location(route('superadmin.docters'));
    }

    public function delete(Docter $docter)
    {
        if($docter->profile){
            Storage::disk('public')->delete($docter->profile);
        }
        $docter->delete();

        return Inertia::location(route('superadmin.docters'));
    }
}
