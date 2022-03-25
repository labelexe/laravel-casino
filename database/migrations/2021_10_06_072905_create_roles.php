<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    protected $connection = 'pgsql';
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            //$table->charset = 'utf8mb4';
            //$table->collation = 'utf8mb4_unicode_ci';

            $table->id();
            $table->string('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
