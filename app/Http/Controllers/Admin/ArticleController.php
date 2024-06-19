<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleCollection;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    // Tampil Halaman Manage Article
    public function index()
    {
        $user_id = Auth::user()->user_id;
        $articles = new ArticleCollection(Article::where('user_id', $user_id)->orderByDesc('created_at')->paginate(10));

        return Inertia::render('Admin/Articles/Index', [
            'title' => 'Articles Management',
            'articles' => $articles
        ]);
    }

    // Tampil Halaman Create Article
    public function create()
    {
        return Inertia::render('Admin/Articles/Create', [
            'title' => 'Create Article'
        ]);
    }

    // Create Article
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $article_id = 'ART-' . date('ymdhis');
        $author_id = Auth::user()->user_id;

        $article = new Article;
        $article->article_id = $article_id;
        $article->user_id = $author_id;
        $article->author_name = $request->author_name;
        $article->title = $request->title;
        $article->content = $request->content;
        $article->slug = Str::slug($request->title, '-');

        if ($request->hasFile('image')) {
            $imageName = uniqid('article_') . '.' . $request->image->getClientOriginalExtension();
            $path = $request->image->storeAs('images/articles', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            $article->image = $path;
        }

        $article->save();

        return redirect('/admin/articles')->with(['message' => 'Article Added Successfully!', 'article' => $article], 201);
    }

    // Halaman Update Article
    public function edit(Article $article)
    {
        $articleData = Article::find($article->article_id);
        return Inertia::render('Admin/Articles/Edit', [
            'title' => 'Update Article',
            'article' => $articleData,
        ]);
    }

    // Update Article
    public function update(Request $request, Article $article)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'string|max:255',
            'content' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        if ($request->hasFile('image')) {
            $imageName = uniqid('article_') . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images/articles', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            Storage::disk('public')->delete($article->image);
            $article->image = $path;
        }

        $article->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect('/admin/articles')->with(['message' => 'Article Updated Successfully!', 'article' => $article], 200);
    }

    // Delete Article
    public function destroy(Article $article)
    {
        Storage::disk('public')->delete($article->image);
        $article->delete();
        return redirect('/admin/articles')->with(['message' => 'Article Deleted Successfully!', 'article' => $article], 200);
    }
}
