<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameWinTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*
        CREATE TABLE `w_game_win` (
  `id` int(55) NOT NULL,
  `game_id` int(55) NOT NULL,
  `winline1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline3` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline5` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline7` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline9` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline10` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus3` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus5` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus7` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus9` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus10` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline_bonus1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline_bonus3` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline_bonus5` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline_bonus7` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline_bonus9` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winline_bonus10` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus_bonus1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus_bonus3` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus_bonus5` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus_bonus7` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus_bonus9` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `winbonus_bonus10` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
          */

        Schema::create('game_win', function (Blueprint $table) {
            $table->id();
            $table->integer('game_id');
            $table->text('winline1')->nullable(false);
            $table->text('winline3')->nullable(false);
            $table->text('winline5')->nullable(false);
            $table->text('winline7')->nullable(false);
            $table->text('winline9')->nullable(false);
            $table->text('winline10')->nullable(false);
            $table->text('winbonus1')->nullable(false);
            $table->text('winbonus3')->nullable(false);
            $table->text('winbonus5')->nullable(false);
            $table->text('winbonus7')->nullable(false);
            $table->text('winbonus9')->nullable(false);
            $table->text('winbonus10')->nullable(false);
            $table->text('winline_bonus1')->nullable(false);
            $table->text('winline_bonus3')->nullable(false);
            $table->text('winline_bonus5')->nullable(false);
            $table->text('winline_bonus7')->nullable(false);
            $table->text('winline_bonus9')->nullable(false);
            $table->text('winline_bonus10')->nullable(false);
            $table->text('winbonus_bonus1')->nullable(false);
            $table->text('winbonus_bonus3')->nullable(false);
            $table->text('winbonus_bonus5')->nullable(false);
            $table->text('winbonus_bonus7')->nullable(false);
            $table->text('winbonus_bonus9')->nullable(false);
            $table->text('winbonus_bonus10')->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_win');
    }
}




