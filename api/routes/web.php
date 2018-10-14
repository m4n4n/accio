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

Route::get('login','LoginController@login');
Route::get('checklogin', 'LoginController@checklogin');

Route::get('register', 'RegistrationController@store');

Route::get('logout', 'LoginController@logout');

Route::get('iscarrier', 'CarrierController@isCarrier');

Route::get('carrier/', 'CarrierController@index');

Route::get('carrier/info', 'CarrierController@info');

Route::get('carrier/store', 'CarrierController@store');

Route::get('request/carrier','RequestController@carrier');

Route::get('request/sender','RequestController@sender');

Route::get('request/details','RequestController@details');

Route::get('request/update/{req}','RequestController@updateState');

Route::get('packagerequest','PackageRequestController@save');