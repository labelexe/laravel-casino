<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class GameBankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('game_bank')->insert([
            'slots' => 22837.8892,
            'little' => 4.7468,
            'table_bank' => 403.9172,
            'fish' => 24.7340,
            'bonus' => 204.4418,
            'shop_id' => 1,
        ]);
    }
}
