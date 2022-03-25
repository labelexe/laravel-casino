<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class JpgSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 1",
            'balance' => 1003.7167,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 1,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 2",
            'balance' => 875.2776,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.9,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 3",
            'balance' => 775.9213,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.8,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 4",
            'balance' => 674.8444,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.7,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 5",
            'balance' => 575.9182,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.6,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 6",
            'balance' => 479.9613,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.5,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 7",
            'balance' => 383.9419,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.4,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 8",
            'balance' => 287.9739,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.3,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 9",
            'balance' => 191.9708,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.2,
            'view' => 1,
            'shop_id' => 1,
        ]);
        DB::table('jpg')->insert([
            'date_time' => "2020-01-30 00:00:00",
            'name' => "JPG 10",
            'balance' => 96.0025,
            'start_balance' => 0,
            'pay_sum' => 0,
            'percent' => 0.1,
            'view' => 1,
            'shop_id' => 1,
        ]);
    }
}
