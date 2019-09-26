<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlanCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('plans_id')->unsigned()->nullable();
            $table->string('name',122)->nullable();
            $table->unsignedDecimal('price',20,2)->nullable();
            $table->unsignedBigInteger('month_duration')->nullable();
            $table->enum('currency',['naira','dollar'])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('plan_categories', function (Blueprint $table) {
            $table->dropForeign('plan_categories_plans_foreign');
        });
        Schema::dropIfExists('plan_categories');
    }
}
