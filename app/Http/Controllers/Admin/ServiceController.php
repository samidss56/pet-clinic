<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceCollection;
use App\Models\Service;
use Illuminate\Http\Request;
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
}
