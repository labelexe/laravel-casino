<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->integer('shop_id');
            $table->integer('jpg_id');
            $table->string('label');
            $table->integer('device');
            $table->string('gamebank');
            $table->string('garant_win1');
            $table->string('garant_win3');
            $table->string('garant_win5');
            $table->string('garant_win7');
            $table->string('garant_win9');
            $table->string('garant_win10');
            $table->string('garant_bonus1');
            $table->string('garant_bonus3');
            $table->string('garant_bonus5');
            $table->string('garant_bonus7');
            $table->string('garant_bonus9');
            $table->string('garant_bonus10');
            $table->string('winline1');
            $table->string('winline3');
            $table->string('winline5');
            $table->string('winline7');
            $table->string('winline9');
            $table->string('winline10');
            $table->string('winbonus1');
            $table->string('winbonus3');
            $table->string('winbonus5');
            $table->string('winbonus7');
            $table->string('winbonus9');
            $table->string('winbonus10');
            $table->string('garant_win_bonus1');
            $table->string('garant_win_bonus3');
            $table->string('garant_win_bonus5');
            $table->string('garant_win_bonus7');
            $table->string('garant_win_bonus9');
            $table->string('garant_win_bonus10');
            $table->string('garant_bonus_bonus1');
            $table->string('garant_bonus_bonus3');
            $table->string('garant_bonus_bonus5');
            $table->string('garant_bonus_bonus7');
            $table->string('garant_bonus_bonus9');
            $table->string('garant_bonus_bonus10');
            $table->string('winline_bonus1');
            $table->string('winline_bonus3');
            $table->string('winline_bonus5');
            $table->string('winline_bonus7');
            $table->string('winline_bonus9');
            $table->string('winline_bonus10');
            $table->string('winbonus_bonus1');
            $table->string('winbonus_bonus3');
            $table->string('winbonus_bonus5');
            $table->string('winbonus_bonus7');
            $table->string('winbonus_bonus9');
            $table->string('winbonus_bonus10');
            $table->string('rezerv');
            $table->string('cask');
            $table->text('advanced');
            $table->string('bet');
            $table->enum('scaleMode',['', 'showAll', 'exactFit']);
            $table->enum('slotViewState',['', 'Normal', 'HideUI']);
            $table->integer('view');
            $table->decimal('denomination', 20, 2);
            $table->integer('original_id');
            $table->integer('bids');
            $table->decimal('stat_in', 20, 4);
            $table->decimal('stat_out', 20, 4);
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
        Schema::dropIfExists('games');
    }
}
