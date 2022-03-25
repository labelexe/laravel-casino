<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shops')->insert([
            'name' => "shop12",
            'balance' => 520000,
            'frontend' => "Default",
            'currency' => "RUB",
            'percent' => 80,
            'is_blocked' => 0,
            'orderby' => "AZ",
            'user_id' => 1,
            'pending' => 0,
        ]);
    }
}
