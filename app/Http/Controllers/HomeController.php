<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\School;
use Illuminate\View\View;
use App\Models\SchoolBlogs;
use App\Models\SchoolEvent;
use App\Models\Testimonials;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {

        // get schools 
        $schools = School::orderBy('created_at', 'desc')
                        ->take(8)
                        ->get();

        // get events 
        $events = SchoolEvent::orderBy('created_at', 'desc')
                        ->take(8)
                        ->get();

        // get blogs 
        $blogs = SchoolBlogs::orderBy('created_at', 'desc')
                        ->take(4)
                        ->get();

        // get testimonials 
        $testimonials = Testimonials::orderBy('created_at', 'desc')
                                    ->where('approved', 1)
                                    ->inRandomOrder()
                                    ->take(2)
                                    ->get();
        
        // return the view 
        return view('welcome', compact('schools', 'events', 'blogs', 'testimonials'));
    }

    public function dashboard() {

        // get schools 
        $schools = School::orderBy('created_at', 'desc')
                            ->get();

        // get parents 
        $parents = User::where('role', 'parent')
                            ->orderBy('created_at', 'desc')
                            ->get();

        // get events 
        $events = SchoolEvent::orderBy('created_at', 'desc')
                            ->get();

        // get blogs 
        $blogs = SchoolBlogs::orderBy('created_at', 'desc')
                            ->get();

        // get testimonials 
        $testimonials = Testimonials::orderBy('created_at', 'desc')
                                    ->get();

        // return $types;
        
        // return the view 
        return view('dashboard', compact('schools', 'events', 'blogs', 'testimonials', 'parents'));
    }
}
