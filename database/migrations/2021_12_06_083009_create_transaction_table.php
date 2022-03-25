<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('payeer_id');
            $table->string('system', 55)->default("");
            $table->enum('type',['add', 'out'])->default('add');
            //$table->decimal('summ', 20, 4);
            $table->integer('summ');
            $table->string('value', 255)->nullable();
            $table->integer('status')->default(1);
            $table->integer('shop_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('shop_id')->references('id')->on('shops');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaction');
    }
}
