<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;
class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::get();
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
        $user=new User($request->input());
        $user->partner_id=$request->input('partner_id');
        $user->save();
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        //
        return User::findOrFail($id);
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        //
        $u=User::findOrFail($id);
        $u->fill($request->input());
        $u->save();
        return $u;
    }

    public function toggle(Request $request, $id){
        $u=User::findOrFail($id);
        $u->active=$request->input('active');
        $u->save();
        return $u;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $u=User::findOrFail($id);
        $u->delete();
        return User::get();
    }
}
