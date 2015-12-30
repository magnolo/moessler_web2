<?php

/*
 |--------------------------------------------------------------------------
 | Client Routes
 |--------------------------------------------------------------------------
*/
Route::group(['namespace' => 'Client'], function (){
  Route::get('/', 'PageController@index');
  Route::any('{path?}', function () {
      return View('client.layouts.master');
  });
});
