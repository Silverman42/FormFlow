<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_values', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->string('value')->nullable();
            $table->string('validation_rule')->nullable();
            $table->unsignedBigInteger('forms_id')->nullable();
            $table->timestamps();
        });

        Schema::table('form_values', function (Blueprint $table) {
            $table->foreign('forms_id')->references('id')->on("forms");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('form_values', function (Blueprint $table) {
            $table->dropForeign('form_values_forms_id_foreign');
        });

        Schema::dropIfExists('form_values');
    }
}
