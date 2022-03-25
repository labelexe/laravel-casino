<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJpgTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jpg', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date_time');
            $table->string('name');
            $table->decimal('balance', 20, 4);
            $table->decimal('start_balance', 20, 4);
            $table->decimal('pay_sum', 20, 4);
            $table->decimal('percent', 3, 2);
            $table->integer('view');
            $table->integer('shop_id');
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jpg');
    }
}
