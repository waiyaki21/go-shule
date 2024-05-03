<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Models\EventPhotos;
use App\Models\SchoolEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class SchoolEventController extends Controller
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

        $request->validate([
            // 'file' => 'required|mimes:csv,txt,xlx,xls,pdf|max:2048'
            'thumbnail'     => 'required',
            'name'          => 'required',
            'date'          => 'required',
            'attendees'     => 'required',
            'number'        => 'required',
            'photos'        => 'required',
            'description'   => 'required',
        ]);

        // upload thumbnail 
        if ($request->file('thumbnail')) {
            // get name 
            $fileName = time() . '_' . $request->file('thumbnail')->getClientOriginalName();

            // get path 
            $filePath = $request->file('thumbnail')->storeAs($folder, $fileName, 'public');

            // create record 
            $event = SchoolEvent::create([
                'user_id'       => Auth::user()->id,
                'school_id'     => $school->id,
                'name'          => $request->name,
                'date'          => $request->date,
                'attendees'     => $request->attendees,
                'number'        => $request->number,
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
                EventPhotos::create([
                    'event_id'      => $event->id,
                    'filename'      => $filename,
                    'filename_path' => '/storage/' . $filePath,
                ]);
            }
        }

        // flash 
        $message = 'School Event successfully uploaded!';

        // return 
        return back()
            ->with('success', 'School Event successfully uploaded!');
            // ->with('file', $fileName);

    }

    /**
     * Display the specified resource.
     */
    public function show(SchoolEvent $schoolEvent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SchoolEvent $schoolEvent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SchoolEvent $schoolEvent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SchoolEvent $schoolEvent)
    {
        // $url = Storage::download('public/School_' . $schoolEvent->school_id . '/' . $schoolEvent->thumbnail_name);
        // return File::download($schoolEvent->thumbnail_path);

        $schoolEvent = SchoolEvent::find($schoolEvent->id);

        $photos = EventPhotos::where('event_id', $schoolEvent->id)->get();

        foreach ($photos as $photo) {
            # code...
            $new = new EventPhotosController();
            $delete = $new->destroy($photo);
        }
        

        // if (Storage::exists('public/School_'. $schoolEvent->school_id . '/'. $schoolEvent->thumbnail_name)) {
        //     Storage::delete('public/School_' . $schoolEvent->school_id . '/' . $schoolEvent->thumbnail_name);
        //     /*
        //         Delete Multiple files this way
        //         Storage::delete(['upload/test.png', 'upload/test2.png']);
        //     */
        // } else {
        //     dd('File does not exist.');
        // }

        $schoolEvent->delete();

        return back();
    }
}
