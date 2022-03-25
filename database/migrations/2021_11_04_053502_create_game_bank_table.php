<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameBankTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_bank', function (Blueprint $table) {
            $table->id();
            $table->decimal('slots', 20, 4);
            $table->decimal('little', 20, 4);
            $table->decimal('table_bank', 20, 4);
            $table->decimal('fish', 20, 4);
            $table->decimal('bonus', 20, 4);
            $table->integer('shop_id');
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
        Schema::dropIfExists('game_bank');
    }
}
