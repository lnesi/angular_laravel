<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    //
	protected $table="partners";
	protected $dates=['created_at','updated_at'];
	protected $hidden=['deleted_at'];
    protected $fillable=['name','abbr'];
}
