<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Auth;

class LoginController extends Controller
{
    function checklogin()
    {
        return Auth::user();
    }
    function login(Request $request)
    {
    	$this->validate($request, [
    		'email' => 'required|email',
    		'password'=> 'required|alphaNum|min:3'
    	]);

    	$user_data = array(
    		'email' => $request->get('email'),
    		'password'=> $request->get('password')
    	);

    	if(!Auth::attempt($user_data))
    	{
    		abort(401, "Wrong Credentials");
    	}

        return Auth::user();
    }


    function logout()
    {
    	Auth::logout();
        return;
    }
}

