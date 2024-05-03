<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Models\BlogPhotos;
use App\Models\SchoolBlogs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SchoolBlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, School $school)
    {
        // dd($request->file('photos'));
        $folder = 'School_' . $school->id;

        // admin 
        if (Auth::user()->role == 'admin') {
            $admin = '1';
        } else {
            $admin = '0';
        }
        
        $request->validate([
            // 'file' => 'required|mimes:csv,txt,xlx,xls,pdf|max:2048'
            'thumbnail'     => 'required',
            'blog_title'    => 'required',
            'blog_body'     => 'required',
            'photos'        => 'required',
        ]);

        // upload thumbnail 
        if ($request->file('thumbnail')) {
            // get name 
            $fileName = time() . '_' . $request->file('thumbnail')->getClientOriginalName();

            // get path 
            $filePath = $request->file('thumbnail')->storeAs($folder, $fileName, 'public');

            // create record 
            $blog = SchoolBlogs::create([
                'user_id'       => Auth::user()->id,
                'school_id'     => $school->id,
                'admin_id'      => $admin,
                'blog_title'    => $request->blog_title,
                'blog_body'     => $request->blog_body,
                'thumbnail'     => $fileName,
                'thumbnail_path'=> '/storage/' . $filePath,
                'description'   => $request->description,
            ]);
        }

        // upload photos 
        if ($request->file('photos')) {
            // get all photos 
            $files = $request->file('photos');

            foreach ($files as $file) {
                // get name 
                $filename = $file->getClientOriginalName();

                // get path 
                $filePath = $file->storeAs($folder, $filename, 'public');

                // create record 
                BlogPhotos::create([
                    'blog_id'       => $blog->id,
                    'filename'      => $filename,
                    'filename_path' => '/storage/' . $filePath,
                ]);
            }
        }

        // flash 
        $message = 'School Blog successfully uploaded!';

        // return 
        return back()
            ->with('success', 'School Blog successfully uploaded!');
        // ->with('file', $fileName);
    }

    /**
     * Display the specified resource.
     */
    public function show(SchoolBlogs $schoolBlogs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SchoolBlogs $schoolBlogs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SchoolBlogs $schoolBlogs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SchoolBlogs $schoolBlogs)
    {
        //
    }
}
