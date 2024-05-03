<?php

namespace App\Http\Controllers;

use App\Models\EventPhotos;
use Illuminate\Http\Request;

class EventPhotosController extends Controller
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(EventPhotos $eventPhotos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EventPhotos $eventPhotos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EventPhotos $eventPhotos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EventPhotos $eventPhotos)
    {
        $photo = EventPhotos::find($eventPhotos->id);

        $photo->delete();
    }
}
