<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PICController extends Controller
{
    public function dashboard(Request $request) {
        return view('pic.dashboard'); 
    }

    public function present(Request $request) {
        return view('pic.present'); 
    }

    public function work_schedule(Request $request) {
        return view('pic.work-schedule'); 
    }

    public function work_order(Request $request) {
        return view('pic.work-order'); 
    }
}
