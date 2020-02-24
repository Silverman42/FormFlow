<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('last_name',122)->nullable();
            $table->string('email')->unique();
            $table->string('first_name')->unique();
            $table->boolean('active')->default(false);
            $table->string('avatar',122)->nullable();
            $table->string('password',122)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            //$table->unsignedBigInteger('plans_id');
            $table->rememberToken();
            $table->timestamps();
        });

        /*
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('plans_id')->references('id')->on('plans');
        });
        */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_plan_id_foreign');
        });
        Schema::dropIfExists('users');
    }
}
