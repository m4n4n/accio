<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class RequestController extends Controller
{
    public static function carrier()
    {
        $user = Auth::user();
        $info = DB::table('request')->where('carrier_id', $user->id);
        return $info; 

    }
    public static function sender()
    {
        $user = Auth::user();
        $info = DB::table('request')->where('sender_id', $user->id);
        return $info;    

    }

    public static function details(Request $request)
    {
        $req = App::make(App\Models\Request::class);
        $req->sender_id = Auth::user()->id;
        $req->carrier_id = DB::table('user')->where('username', $request->carrier_name)->first()->value('id');
        $req->eth_id = $request->eth_id;
        $req->route_id = DB::table('carrier')->where('origin', src)->where('dest', dest)->where('user_id',$req->carrier_id)->first()->value('id');         
        $req->save();

        return $req;
    }

    public static function updateState(App\Models\Request $req, Request $request) 
    {
        DB::table('request')->where('id', $req->id)->update(['state' => $request->state]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
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
