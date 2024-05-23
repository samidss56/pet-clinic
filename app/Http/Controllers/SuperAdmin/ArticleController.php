<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleCollection;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = new ArticleCollection(Article::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Superadmin/Articles/Index', [
            'title' => 'Articles Management',
            'articles' => $articles,
        ]);
    }
}
