<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Request;

class ApiSchoolController extends Controller
{
    public function getInfo() : object {
        // get all schools 
        $schools = School::orderBy('created_at', 'desc')
                        ->with('county:id,county_name','subcounty:id,name', 'ward:id,name', 'type:id,description', 'level:id,description', 'system:id,description')
                        ->get();

        return $schools;
    }
}
