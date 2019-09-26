<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Index action which direct to the client dashboard
     */
    public function index(){
        return view('client.dashboard.index');
    }
}
