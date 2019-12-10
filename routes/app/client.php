<?php
/**
 * Client route repository
 */

 /**
  * Client Dashboard
  */
Route::get('dashboard/{trail}','DashboardController@index')->where('trail','.*')->name('dashboard');
