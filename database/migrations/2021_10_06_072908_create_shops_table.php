<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('balance', 20, 4);
            $table->string('frontend');
            $table->string('currency')->nullable();
            $table->integer('percent');
            $table->integer('is_blocked');
            $table->enum('orderby', ['AZ', 'Rand', 'RTP', 'Count', 'Date'])->default('AZ');
            $table->integer('user_id');
            $table->integer('pending');

            $table->index('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shops');
    }
}
