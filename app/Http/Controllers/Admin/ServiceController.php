<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceCollection;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // Tampil Halaman Manage Service
    public function index()
    {
        $services = new ServiceCollection(Service::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/Services/Services', [
            'title' => 'Services Management',
            'services' => $services
        ]);
    }

    // Tampil Halaman Create Service
    public function createServicePage()
    {
        return Inertia::render('Admin/Services/CreateService', [
            'title' => 'Create Service'
        ]);
    }

    // Create Service
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name_service' => 'required|string|max:255',
            'price_service' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $service_id = 'SRV-' . date('ymdhis');

        $service = new Service;
        $service->service_id = $service_id;
        $service->name_service = $request->name_service;
        $service->price_service = $request->price_service;

        $service->save();

        return redirect()->route('admin.services');
    }

    // Tampil Halaman Update Service
    public function updateServicePage(Service $service)
    {
        $serviceData = Service::find($service->id);
        return Inertia::render('Admin/Services/UpdateService', [
            'title' => 'Update Service',
            'service' => $serviceData
        ]);
    }

    // Update Service
    public function update(Request $request, Service $service)
    {
        $service->update([
            'name_service' => $request->name_service,
            'price_service' => $request->price_service,
        ]);

        return redirect()->route('admin.services');
    }

    // Delete Service
    public function destroy(Service $service)
    {
        $service->delete();
        return redirect()->route('admin.services');
    }
}
