<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redirect authenticated users to their respective dashboards based
     * on their roles
     * @param Illuminate\Http\Request $request
     * @param App/Models/User $user
     * @return mixed
     */
    public function authenticated(Request $request, $user){
        if($user->hasAnyRole('client')){
            return redirect()->route('client.dashboard');
        }
        if($user->hasAnyRole('admin')){
            return redirect()->route('admin.dashboard');
        }
        return redirect()->route('home');
    }
}
