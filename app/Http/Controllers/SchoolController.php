<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\School;
use App\Models\Languages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\FormDetailsController;

class SchoolController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // dd($request);
        if (Auth::user()->role = 'admin') {
            $admin_id = Auth::user()->id;
        } else {
            $admin_id = '1';
        }
        
        // validate 
        $request->validate([
            'name'         => 'required',
            'short_name'   => 'required',
            'type_id'      => 'required',
            'level_id'     => 'required',
            'system_id'    => 'required',
            'county_id'    => 'required',
            'subcounty_id' => 'required',
            'ward_id'      => 'required',
            'phone_number' => 'required',
            'email'        => 'required',
            'website'      => 'required',
            // 'fee_range'    => 'required',
            // 'classes'      => 'required',
            // 'pupils'       => 'required',
            // 'established'  => 'required',
            'transport'    => 'required',
            'lunch'        => 'required',
            'trips'        => 'required',
            'computer'     => 'required',
            'swimming'     => 'required',
            'foreign'      => 'required',
            // 'times'        => 'required',
            // 'bio'          => 'required',
        ]);

        // create record 
        School::create([
            'user_id'      => Auth::user()->id,
            'admin_id'     => $admin_id,
            'name'         => $request->name,
            'short_name'   => $request->short_name,
            'type_id'      => $request->type_id,
            'level_id'     => $request->level_id,
            'system_id'    => $request->system_id,
            'county_id'    => $request->county_id,
            'subcounty_id' => $request->subcounty_id,
            'ward_id'      => $request->ward_id,
            'phone_number' => $request->phone_number,
            'email'        => $request->email,
            'website'      => $request->website,
            // 'fee_range'    => $request->fee_range,
            // 'classes'      => $request->classes,
            // 'pupils'       => $request->pupils,
            // 'established'  => $request->established,
            'transport'    => $request->transport,
            'lunch'        => $request->lunch,
            'trips'        => $request->trips,
            'computer'     => $request->computer,
            'swimming'     => $request->swimming,
            'foreign'      => $request->foreign,
            // 'times'        => $request->times,
            // 'bio'          => $request->bio,
        ]);

        // flash 
        $message = 'School entered successfully!';

        return response()->json([null, 200, $message]);
    }

    public function storeLanguage(Request $request, School $school){
        // validate 
        $request->validate([
            'name'          => 'required',
        ]);

        // create record 
        Languages::create([
            'name'          => $request->name,
            'school_id'     => $school->id,
        ]);

        // flash 
        $message = 'Language entered successfully!';

        return back();
    }

    public function show(School $school)
    {
        // get info from forms controller 
        $info = new FormDetailsController();
        $data = $info->getInfo();

        // get form info 
        $types          = $data[0];
        $levels         = $data[1];
        $systems        = $data[2];
        $counties       = $data[3];
        $subcounties    = $data[4];
        $wards          = $data[5];
        $languages      = $data[6];

        // $school = School::with('languages')->get();
        // return $school;

        return view('school', compact('school', 'types', 'levels', 'systems', 'counties', 'subcounties', 'wards', 'languages'));
    }

    public function dashboard()
    {
        $school = School::where('user_id', Auth::user()->id)
                        ->with('bannerPhoto')
                        ->first();

        // get info from forms controller 
        $info = new FormDetailsController();
        $data = $info->getInfo();

        // get form info 
        $types          = $data[0];
        $levels         = $data[1];
        $systems        = $data[2];
        $counties       = $data[3];
        $subcounties    = $data[4];
        $wards          = $data[5];
        $languages      = $data[6];

        // $school = School::with('languages')->get();
        // return $school;

        return view('school.schoolDashboard', compact('school', 'types', 'levels', 'systems', 'counties', 'subcounties', 'wards', 'languages'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(School $school)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, School $school)
    {
        // return $request;

        //get the data and update
        $school->update($request->all());

        $school = School::where('id', $school->id)
            ->first();

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(School $school)
    {
        //
    }
}
