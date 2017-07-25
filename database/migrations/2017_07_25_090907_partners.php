<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Partners extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create("partners",function(Blueprint $table){
            $table->increments('id');
            $table->string('name');
            $table->string('url');
            $table->string('abbr',10);
            $table->boolean('active')->default(false);
            $table->softDeletes();
            $table->timeStamps();
           
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('partners');
    }
}
