<?php

namespace App\Http\Controllers\Home;

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
        return Inertia::render('Home/Articles/Index', [
            'title' => 'All Articles',
            'articles' => $articles
        ]);
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)->first();

        if (!$article) {
            return abort(404, 'Article not found');
        }

        $relatedArticles = Article::limit(3)->inRandomOrder()->get();
        return Inertia::render('Home/Articles/Show', [
            'title' => 'Detail Article',
            'article' => $article,
            'articles' => $relatedArticles
        ]);
    }
}
