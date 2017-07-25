<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Admin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table("users",function(Blueprint $table){
            $table->boolean('is_admin')->default(FALSE)->after('id');
            $table->boolean('active')->default(FALSE)->after('password');
            $table->integer('partner_id')->unsigned()->nullable();
            $table->string('invite_token',512)->nullable();
            $table->foreign('partner_id')->references('id')->on('partners')->onDelete('cascade');
            
        });

        Schema::table("users",function(Blueprint $table){
            $sql="INSERT INTO users(email,name,password,is_admin,active) VALUES('admin@example.com','System Administrator','".Hash::make("123456")."',1,1)";
            DB::connection()->getPdo()->exec($sql);
            $sql="CREATE TRIGGER `bd_users` BEFORE DELETE ON `users` FOR EACH ROW
                    BEGIN
                        IF (OLD.id=1) THEN
                            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'You cannot delete System administrator';
                        END IF;
                    END";
             DB::connection()->getPdo()->exec($sql);   
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
    }
}
