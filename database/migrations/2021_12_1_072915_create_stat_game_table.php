<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatGameTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*
        CREATE TABLE `w_stat_game` (
            `id` int(11) NOT NULL,
            `date_time` timestamp NOT NULL DEFAULT current_timestamp(),
            `user_id` int(11) NOT NULL,
            `balance` decimal(16,2) NOT NULL DEFAULT 0.00,
            `bet` decimal(20,4) NOT NULL DEFAULT 0.0000,
            `win` decimal(20,4) NOT NULL DEFAULT 0.0000,
            `game` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
            `percent` decimal(20,4) NOT NULL DEFAULT 0.0000,
            `percent_jps` decimal(20,4) NOT NULL DEFAULT 0.0000,
            `percent_jpg` decimal(20,4) NOT NULL DEFAULT 0.0000,
            `profit` decimal(20,4) NOT NULL DEFAULT 0.0000,
            `denomination` decimal(20,4) NOT NULL DEFAULT 0.0000,
            `shop_id` int(55) NOT NULL DEFAULT 0
          ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
          */

        Schema::create('stat_game', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date_time')->useCurrent()->useCurrentOnUpdate();
            $table->integer('user_id');
            $table->decimal('balance', $precision = 20, $scale = 2)->default(0);
            $table->decimal('bet', $precision = 20, $scale = 2)->default(0);
            $table->decimal('win', $precision = 20, $scale = 2)->default(0);
            $table->string('game', 50)->default('');
            $table->decimal('percent', $precision = 20, $scale = 2)->default(0);
            $table->decimal('percent_jps', $precision = 20, $scale = 2)->default(0);
            $table->decimal('percent_jpg', $precision = 20, $scale = 2)->default(0);
            $table->decimal('profit', $precision = 20, $scale = 2)->default(0);
            $table->decimal('denomination', $precision = 20, $scale = 2)->default(0);
            $table->integer('shop_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stat_game');
    }
}

