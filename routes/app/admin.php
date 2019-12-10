<?php
/**
 * Admin route repository
 */

 /**
  * Admin Dashboard
  */
Route::get('dashboard/{trail}','DashboardController@index')->where('trail','.*')->name('dashboard');
