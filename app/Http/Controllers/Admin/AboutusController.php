<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Aboutus;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class AboutusController extends Controller
{
    // Tampil Halaman Manage Transaction
    // public function index()
    // {
    //     $trans = Transaction::latest()->paginate(5);
    //     return Inertia::render('Superadmin/Transaction/Index', [
    //         'title' => 'Transaction Management',
    //         'transaction' => TransactionSuperAdminResource::collection($trans),
    //     ]);
    // }

    /**
     * Display the about us form.
     */
    public function edit(): Response
    {
        $aboutusData = Aboutus::first();
        return Inertia::render('Admin/Aboutus/Edit', [
            'title' => 'About Us Management',
            'aboutus' => $aboutusData,
        ]);
    }

    /**
     * Update the about us information.
     */
    public function update(Request $request): RedirectResponse
    {
        $aboutus = Aboutus::first();

        if ($request->hasFile('image')) {
            $imageName = uniqid('aboutus_') . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images/aboutus', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            if (!empty($aboutus->image)) {
                Storage::disk('public')->delete($aboutus->image);
            }
            $aboutus->image = $path;
        }

        $aboutus->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->route('admin.aboutus.edit');
    }

    /**
     * Delete the aboutus account.
     */
    // public function destroy(): RedirectResponse
    // {
    //     $aboutus = Aboutus::first();

    //     Storage::disk('public')->delete($aboutus->image);
    //     $aboutus->delete();

    //     return Redirect::to('/');

    //     // return redirect()->route('admin.aboutus.edit');
    // }

}
