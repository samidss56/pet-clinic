<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceCollection;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // Tampil Halaman Manage Service
    public function index()
    {
        $services = new ServiceCollection(Service::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/Services/Index', [
            'title' => 'Services Management',
            'services' => $services
        ]);
    }

    // Tampil Halaman Create Service
    public function create()
    {
        return Inertia::render('Admin/Services/Create', [
            'title' => 'Create Service'
        ]);
    }

    // Create Service
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name_service' => 'required|string|max:255',
            'price_service' => 'required|integer',
            'image_service' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $service_id = 'SRV-' . date('ymdhis');

        $service = new Service;
        $service->service_id = $service_id;
        $service->name_service = $request->name_service;
        $service->price_service = $request->price_service;

        if ($request->hasFile('image_service')) {
            $imageName = uniqid('service_') . '.' . $request->image_service->getClientOriginalExtension();
            $path = $request->image_service->storeAs('images/services', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            $service->image_service = $path;
        }

        $service->save();

        return redirect('/admin/services')->with(['message' => 'Service Added Successfully!', 'service' => $service], 201);
    }

    // Tampil Halaman Update Service
    public function edit(Service $service)
    {
        $serviceData = Service::find($service->service_id);
        return Inertia::render('Admin/Services/Edit', [
            'title' => 'Update Service',
            'service' => $serviceData
        ]);
    }

    // Update Service
    public function update(Request $request, Service $service)
    {
        if ($request->hasFile('image_service')) {
            $imageName = uniqid('service_') . '.' . $request->file('image_service')->getClientOriginalExtension();
            $path = $request->file('image_service')->storeAs('images/services', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            Storage::disk('public')->delete($service->image_service);
            $service->image_service = $path;
        }

        $service->update([
            'name_service' => $request->name_service,
            'price_service' => $request->price_service,
        ]);

        return redirect('/admin/services')->with(['message' => 'Service Updated Successfully!', 'service' => $service], 200);
    }

    // Delete Service
    public function destroy(Service $service)
    {
        Storage::disk('public')->delete($service->image_service);
        $service->delete();
        return redirect('/admin/services')->with(['message' => 'Service Deleted Successfully!', 'service' => $service], 200);
    }
}
