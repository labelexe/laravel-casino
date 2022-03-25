<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => "ny_18@list.ru",
            'username' => "admin",
            'password' => Hash::make('12345'),
            'parent_id' => 0,
            'first_name' => "Алексей",
            'last_name' => "Свечников",
            //'phone' => 1,
            'wager' => 0,
            'bonus' => 0,
            'count_bonus' => 0,
            'rating' => 1,
            'total_balance' => 0,
            //'avatar' => 1,
            //'address' => 1,
            'role_id' => 1,
            'shop_id' => 1,
            //'birthday' => 1,
            'balance' => 3000000,
            'count_balance' => 0,
            'count_return' => 0,
            'total_in' => 0,
            'total_out' => 0,
            //'last_login' => 1,
            //'confirmation_token' => 1,
            'status' => "Active",
            //'api_token' => 1,
            'language' => "en",
            //'session' => ,
        ]);
        DB::table('users')->insert([
            'email' => Str::random(10).'@gmail.com',
            'username' => Str::random(10),
            'password' => Hash::make('12345'),
            'parent_id' => 1,
            'first_name' => "test",
            'last_name' => "manager",
            //'phone' => 1,
            'wager' => 0,
            'bonus' => 0,
            'count_bonus' => 0,
            'rating' => 1,
            'total_balance' => 0,
            //'avatar' => 1,
            //'address' => 1,
            'role_id' => 2,
            'shop_id' => 1,
            //'birthday' => 1,
            'balance' => 10000,
            'count_balance' => 0,
            'count_return' => 0,
            'total_in' => 0,
            'total_out' => 0,
            //'last_login' => 1,
            //'confirmation_token' => 1,
            'status' => "Active",
            //'api_token' => 1,
            'language' => "en",
            //'session' => ,
        ]);
        DB::table('users')->insert([
            'email' => Str::random(10).'@gmail.com',
            'username' => Str::random(10),
            'password' => Hash::make('12345'),
            'parent_id' => 1,
            'first_name' => "test",
            'last_name' => "player",
            //'phone' => 1,
            'wager' => 0,
            'bonus' => 0,
            'count_bonus' => 0,
            'rating' => 1,
            'total_balance' => 0,
            //'avatar' => 1,
            //'address' => 1,
            'role_id' => 3,
            'shop_id' => 1,
            //'birthday' => 1,
            'balance' => 10000,
            'count_balance' => 0,
            'count_return' => 0,
            'total_in' => 0,
            'total_out' => 0,
            //'last_login' => 1,
            //'confirmation_token' => 1,
            'status' => "Active",
            //'api_token' => 1,
            'language' => "en",
            //'session' => ,
        ]);
    }
}
