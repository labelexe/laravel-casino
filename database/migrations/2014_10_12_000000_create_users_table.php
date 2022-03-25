<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('username')->nullable();
            //$table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('parent_id')->default(0);
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->nullable();
            $table->decimal('wager', 20, 4)->default(0);
            $table->decimal('bonus', 20, 4)->default(0);
            $table->decimal('count_bonus', 20, 4)->default(0);
            $table->integer('rating')->default(1);
            $table->decimal('total_balance', 20, 4)->default(0);
            $table->string('avatar')->nullable();
            $table->string('address')->nullable();
            $table->integer('role_id')->default(3);
            $table->integer('shop_id')->default(1);
            $table->date('birthday')->nullable();
            //TODO: выпилить
            $table->decimal('balance', 20, 4)->default(10000);
            $table->decimal('count_balance', 20, 4)->default(0);
            $table->decimal('count_return', 20, 4)->default(0);
            $table->float('total_in')->default(0);
            $table->float('total_out')->default(0);
            $table->timestamp('last_login')->nullable();
            $table->string('confirmation_token')->nullable();
            $table->string('status')->default('Active');
            $table->rememberToken();
            $table->text('api_token')->nullable();
            $table->string('language')->nullable();
            $table->mediumText('session')->nullable();
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
        Schema::dropIfExists('users');
    }
}
