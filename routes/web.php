<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*Hide all registration routes*/
Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home');

/**
 * Admin Based Routes
 */
Route::name('admin.')
->prefix('admin')
->namespace('Admin')
->middleware([
    'role:admin',
    'verified'
])
->group(base_path('routes/app/admin.php'));


/**
 * Client Based Routes
 */
Route::name('client.')
->prefix('client')
->namespace('Client')
->middleware([
    'role:client',
    'verified'
])
->group(base_path('routes/app/client.php'));
