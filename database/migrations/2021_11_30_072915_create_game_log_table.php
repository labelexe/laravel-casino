<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_log', function (Blueprint $table) {
            $table->id();
            $table->timestamp('time')->useCurrent()->useCurrentOnUpdate();;
            //`time` timestamp NOT NULL DEFAULT current_timestamp(),
            $table->integer('game_id');
            $table->integer('user_id');
            $table->string('ip', 15);
            $table->text('str')->nullable()->default(null);
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
        Schema::dropIfExists('game_log');
    }
}
