<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\School;
use App\Models\Testimonials;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestimonialsController extends Controller
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
    public function store(Request $request, User $user)
    {
        $request->validate([
            'testimonial_title'    => 'required',
            'testimonial_body'     => 'required',
        ]);

        // create record 
        $testimonial = Testimonials::create([
            'user_id'              => $user->id,
            'testimonial_title'    => $request->testimonial_title,
            'testimonial_body'     => $request->testimonial_body,
        ]);

        // flash 
        $message = 'Testimonial successfully uploaded!';

        // return 
        return back()
            ->with('success', 'Testimonial successfully uploaded!');
        // ->with('file', $fileName);
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonials $testimonials)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonials $testimonials)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonials $testimonials)
    {
        //get the data and update
        $testimonials->update($request->all());

        $testimonials = Testimonials::where('id', $testimonials->id)
            ->first();

        return back();
    }

    public function ApprovalState(Testimonials $testimonials) {
        // get the testimonial 
        $test = Testimonials::where('id', $testimonials->id)
                            ->first();

        // find approval status 
        if ($test->approved == false) {
            $new = true;
        } else {
            $new = false;
        }

        // update 
        $testn = Testimonials::where('id', $testimonials->id)
                    ->update([
                        'approved' => $new
                    ]);

        // return $testimonials;
        return back();
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonials $testimonials)
    {
        $testimonial = Testimonials::find($testimonials->id);

        $testimonial->delete();

        return back();
    }
}
