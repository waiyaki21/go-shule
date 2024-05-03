<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Models\SchoolPhotos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SchoolPhotosController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request, School $school)
    {
        // dd($request->main_banner);

        $folder = 'School_' . $school->id;

        $request->validate([
            // 'file' => 'required|mimes:csv,txt,xlx,xls,pdf|max:2048'
            'banner'            => 'required',
            'banner_name'       => 'required',
            'main_banner'       => 'accepted',
            'carousel_banners'  => 'accepted',
            'description'       => 'required',
        ]);

        if ($request->has('carousel_banners')) {
            $carousel = true;
        } else {
            $carousel = false;
        }

        if ($request->has('main_banner')) {
            $main = true;
        } else {
            $main = false;
        }
        
        // return [$carousel];

        // upload thumbnail 
        if ($request->file('banner')) {
            // get name 
            $fileName = time() . '_' . $request->file('banner')->getClientOriginalName();

            // get path 
            $filePath = $request->file('banner')->storeAs($folder, $fileName, 'public');

            // create record 
            $photo = SchoolPhotos::create([
                'user_id'               => Auth::user()->id,
                'school_id'             => $school->id,
                'main_banner'           => $main,
                'carousel_banners'      => $carousel,
                'banner_name'           => $request->banner_name,
                'banner'                => $fileName,
                'banner_path'           => '/storage/' . $filePath,
                'description'           => $request->description,
            ]);

            if ($photo->main_banner = true) {
                $this->formUpdateBanner($photo);
            };
        }

        // flash 
        $message = 'School Photo successfully uploaded!';

        // return 
        return back()
            ->with('success', 'School Photo successfully uploaded!');
        // ->with('file', $fileName);
    }

    public function show(SchoolPhotos $schoolPhotos)
    {
        //
    }

    public function edit(SchoolPhotos $schoolPhotos)
    {
        //
    }


    public function update(Request $request, SchoolPhotos $schoolPhotos)
    {
        //get the data and update
        $schoolPhotos->update($request->all());

        $photo = SchoolPhotos::where('id', $schoolPhotos->id)
            ->first();

        return back();
    }

    public function updateBanner(Request $request, SchoolPhotos $schoolPhotos)
    {
        //get all photos
        SchoolPhotos::where('school_id', $schoolPhotos->school_id)
            ->update([
                'main_banner' => false
            ]);

        //get the data and update
        $schoolPhotos->update($request->all());

        return back();
    }

    public function makeBanner(SchoolPhotos $schoolPhotos)
    {
        //get the data and update
        SchoolPhotos::where('school_id', $schoolPhotos->school_id)
            ->update([
                'main_banner' => false
            ]);

        SchoolPhotos::where([
                        ['id', $schoolPhotos->id]
                    ])
                    ->update([
                        'main_banner' => true
                    ]);

        $photo = SchoolPhotos::where('id', $schoolPhotos->id)
            ->get();
        // return $schoolPhotos;

        return back();
    }

    public function removeBanner(SchoolPhotos $schoolPhotos)
    {
        //get the data and update
        SchoolPhotos::where('school_id', $schoolPhotos->school_id)
                    ->update([
                        'main_banner' => false
                    ]);

        $other = SchoolPhotos::where([
                                    ['school_id', $schoolPhotos->school_id],
                                    ['carousel_banners', true]
                                ])
                                ->count();

        if ($other > 0) {
            $new = SchoolPhotos::where([
                                    ['school_id', $schoolPhotos->school_id],
                                    ['carousel_banners', true]
                                ])
                                ->first();

            SchoolPhotos::where([
                            ['id', $new->id]
                        ])
                        ->update([
                            'main_banner' => true
                        ]);
        }

        return back();
    }

    public function formUpdateBanner(SchoolPhotos $schoolPhotos)
    {
        //update all photos
        SchoolPhotos::where([
                        ['school_id', $schoolPhotos->school_id],
                        ['id', '!=', $schoolPhotos->id]
                    ])
                    ->update([
                        'main_banner' => false
                    ]);
    }

    public function destroy(SchoolPhotos $schoolPhotos)
    {
        $schoolPhotos = SchoolPhotos::find($schoolPhotos->id);

        $schoolPhotos->delete();

        return back();
    }
}
