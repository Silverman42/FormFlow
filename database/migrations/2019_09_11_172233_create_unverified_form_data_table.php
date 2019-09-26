<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUnverifiedFormDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unverified_form_data', function (Blueprint $table) {
            $table->string('input_name',122);
            $table->string('input_value',122);
            $table->unsignedBigInteger('unverified_users_id');
            $table->bigIncrements('id');
            $table->timestamps();
        });

        //Create foreign key 
        Schema::table('unverified_form_data', function (Blueprint $table) {
            $table->foreign('unverified_users_id')
            ->references('id')->on('unverified_users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('unverified_form_data', function (Blueprint $table) {
            $table->dropForeign('unverified_form_data_unverified_users_id_foreign');
        });

        Schema::dropIfExists('unverified_form_data');
    }
}
