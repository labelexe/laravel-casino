<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('games', function (Blueprint $table) {
            $table->after('title', function ($table) {
                $table->string('url')->nullable();
                $table->integer('logo_id')->default(0);
                $table->foreign('logo_id')->references('id')->on('files');
            });
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('games', function(Blueprint $table)
        {
            $table->dropForeign('logo_id');
        });
        Schema::dropColumns('games', ['url', 'logo_id']);
    }
}
