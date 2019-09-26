<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Index action which direct to the admin dashboard
     */
    public function index(){
        return view('admin.dashboard.index');
    }
}
