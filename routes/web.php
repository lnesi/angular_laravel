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



Auth::routes();

Route::get('/', 'HomeController@index')->name('home');


Route::group(['prefix' => 'ajax','middleware' => 'auth'],function(){
	Route::get("/user",function(){
		return Auth::user();
	});
	
	
	Route::group(['prefix' => 'admin','middleware' => ['auth','auth.admin']],function(){
		Route::post("/partners/{partner_id}/toggle","PartnersController@toggle");
		Route::resource("/partners",PartnersController::class,['except' => ['create', 'edit']]);
		Route::resource("/users",UsersController::class,['except' => ['create', 'edit']]);
		Route::post("/users/invite","UsersController@invite");
	});
	Route::post('/users/validate','UsersController@validateEmail');
});
