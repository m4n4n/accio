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
