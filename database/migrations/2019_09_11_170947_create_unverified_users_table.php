<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUnverifiedUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unverified_users', function (Blueprint $table) {
            $table->string('verfication_id',225)->unique();
            $table->uuid('proxy_code')->unique();
            $table->string('request_url',122)->nullable();
            $table->unsignedBigInteger('users_id')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->bigIncrements('id');
            $table->timestamps();
        });

        Schema::table('unverified_users', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('unverified_users', function (Blueprint $table) {
            $table->dropForeign('unverified_users_users_id_foreign');
        });

        Schema::dropIfExists('unverified_users');
    }
}
