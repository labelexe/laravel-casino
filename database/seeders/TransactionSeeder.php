<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transaction')->insert([
            'user_id' => 1,
            'payeer_id' => 1,
            'system' => "stripe",
            'type' => "add",
            'summ' => 100,
            'value' => null,
            'status' => 1,
            'shop_id' => 1,
        ]);
        DB::table('transaction')->insert([
            'user_id' => 1,
            'payeer_id' => 1,
            'system' => "stripe",
            'type' => "add",
            'summ' => 130,
            'value' => null,
            'status' => 1,
            'shop_id' => 1,
        ]);
        DB::table('transaction')->insert([
            'user_id' => 1,
            'payeer_id' => 1,
            'system' => "stripe",
            'type' => "add",
            'summ' => 1200,
            'value' => null,
            'status' => 1,
            'shop_id' => 1,
        ]);
        DB::table('transaction')->insert([
            'user_id' => 2,
            'payeer_id' => 1,
            'system' => "stripe",
            'type' => "add",
            'summ' => 1000,
            'value' => null,
            'status' => 1,
            'shop_id' => 1,
        ]);
    }
}
