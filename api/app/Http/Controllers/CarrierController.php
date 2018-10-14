<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use App\Models\Carrier;
use Auth;


class CarrierController extends Controller
{
    public static function isCarrier()
    {
        $user = Auth::user();

        if(!$user || !$user->isCarrier())
        {
            return;
        }
        
        return "isCarrier";

    }
    public static function info()
    {
        $user = Auth::user();
        $info = DB::table('carrier')->where('user_id', $user->id);
        return $info;    

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $carrier = App::make(Carrier::class);
        
        if($request->dest)
            $carrier = $carrier->where('dest', $request->dest);
        
        if($request->origin)
            $carrier = $carrier->where('origin', $request->origin);

        $carrier = $carrier->get();
        return $carrier;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $carrier = App::make(Carrier::class);
        $carrier->user_id = Auth::user()->id;   
        $carrier->date = $request->date;
        $carrier->origin = $request->origin;
        $carrier->dest = $request->dest;
        $carrier->save();
        return $carrier;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
