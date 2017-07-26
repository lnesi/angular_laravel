<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Partner;
class PartnersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Partner::get();
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
        $partner=new Partner($request->input());
        $partner->save();
        return $partner;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        //
        return Partner::findOrFail($id);
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
        $p=Partner::findOrFail($id);
        dd($request->input());
        $p->fill($request->input());
        $p->save();
        return $p;
    }

    public function toggle(Request $request, $id){
        $p=Partner::findOrFail($id);
        $p->active=$request->input('active');
        $p->save();
        return $p;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $p=Partner::findOrFail($id);
        $p->delete();
        return Partner::get();
    }
}
