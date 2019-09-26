<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlansFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plans_features', function (Blueprint $table) {
            $table->bigInteger('plans_id')->unsigned()->nullable();
            $table->bigInteger('features_id')->unsigned()->nullable();
            $table->string('value',225)->nullable();
            $table->enum('value_type',['string','integer','json','boolean'])->default('string');
            $table->bigIncrements('id');
            $table->timestamps();
        });

        Schema::table('plans_features', function (Blueprint $table) {
            $table->foreign('plans_id')->references('id')->on('plans')->onDelete('cascade');
            $table->foreign('features_id')->references('id')->on('features')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('plans_features', function (Blueprint $table) {
           $table->dropForeign(['plans_features_plans_id_foreign','plans_features_features_id_foreign']); 
        });
        Schema::dropIfExists('plans_features');
    }
}
