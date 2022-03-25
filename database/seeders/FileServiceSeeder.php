<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class FileServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('file_services')->insert([
            'id' => 0, 'name' => 'default', 'path' => 'default', 'status' => 1,
        ]);
        DB::table('file_services')->insert([
            'name' => 'profile', 'path' => 'profile', 'status' => 1,
        ]);
        DB::table('file_services')->insert([
            'name' => 'game_logo', 'path' => 'game_logo', 'status' => 1,
        ]);

        DB::table('files')->insert([
            'id' => 0,
            'hash' => 'e6fe96284e3eb37398af32190f2f4ec7886a014bc50e4c4237bdbb76e85e1a4e1639114394',
            'extension' =>'jpg',
            'name' => '1154961.jpg',
            'service_id' => 0,
            'created_at'=> '2021-12-10 05:33:14.000',
            'updated_at' => '2021-12-10 05:33:14.000'
        ]);

        DB::unprepared("INSERT INTO files (\"id\", \"hash\", \"extension\", \"name\", \"service_id\", \"created_at\", \"updated_at\") VALUES
            (1, '6c790d12a0cf47032696e9908f9a243412d5ab80faedff7bf6146623f07bdd7b1639122590', 'jpg', 'AmericanFootball.jpg', 2, '2021-12-10 07:49:50.000', '2021-12-10 07:49:50.000'),
            (2, '6e55fff5d982b2f0e15212bc75ffc293bc25ac181069b13fffafc82dd366625e1639122716', 'jpg', 'CrazyMonkey2IG.jpg', 2, '2021-12-10 07:51:56.000', '2021-12-10 07:51:56.000'),
            (3, '0ea83975599cc576dcad1b39e2b8639db4c847c2378fb48d04621d8981dc7a3c1639122745', 'jpg', 'JadeHeavenCT.jpg', 2, '2021-12-10 07:52:25.000', '2021-12-10 07:52:25.000'),
            (4, '2a8ccac91e2bb0cbd3cc9f214cd19750c1e0cea1fa61d48dad42681569749fba1639122825', 'jpg', 'TripleMonkey.jpg', 2, '2021-12-10 07:53:45.000', '2021-12-10 07:53:45.000'),
            (5, '4d9d07116833e632643d42b6dc04556da004c44a1302cd7110637e0c2487238b1639122840', 'jpg', 'OldFishermanGM.jpg', 2, '2021-12-10 07:54:00.000', '2021-12-10 07:54:00.000'),
            (6, 'de780d25f40646f671cd518759f0ace389779c89a24d373b12e9cbbb6235dd3e1639122854', 'jpg', 'WetAndJuicyCT.jpg', 2, '2021-12-10 07:54:14.000', '2021-12-10 07:54:14.000'),
            (7, '0c356fbd32fb9b88296219995414ce86e63367ca2be9e8f8c45fe63d2ccda8831639122869', 'jpg', 'BookOfMoorhuhnGoldenNightsGM.jpg', 2, '2021-12-10 07:54:29.000', '2021-12-10 07:54:29.000'),
            (8, 'dc09295a244b61cf2e09ba0e3fb7d226ec113fc4d6a52ed7a6622e34e5b104d11639122882', 'jpg', 'Island2IG.jpg', 2, '2021-12-10 07:54:42.000', '2021-12-10 07:54:42.000'),
            (9, 'ff7a83cc1c5631abf6090c9189b6d9c82250d28882442cb63a2dbf306ab222491639122893', 'jpg', 'GreatRhinoPM.jpg', 2, '2021-12-10 07:54:53.000', '2021-12-10 07:54:53.000'),
            (10, '9a0f393b7a85f80f2edca1e7019690ce24f4230843f79d64cc2e5365f27a9dad1639122913', 'jpg', 'FlowersChristmasNET.jpg', 2, '2021-12-10 07:55:13.000', '2021-12-10 07:55:13.000'),
            (11, 'bda7c312085fde5938df74562bc4c3e78a3332571d61e04875d67ddb9d0581c81639122925', 'jpg', 'StarBurstNET.jpg', 2, '2021-12-10 07:55:25.000', '2021-12-10 07:55:25.000'),
            (12, '53d183a8c6fbd29e5eea0a75ff94f85cff93459d83a1a5b30da778905140fc951639122936', 'jpg', 'Basketball.jpg', 2, '2021-12-10 07:55:36.000', '2021-12-10 07:55:36.000'),
            (13, '9c0a7a591886a5b37cd5d13f8031d12430545159bfa6c55350fb491ec1cd62f21639122948', 'jpg', 'BeetleMania.jpg', 2, '2021-12-10 07:55:48.000', '2021-12-10 07:55:48.000'),
            (14, '1ec77e8f8ea77db9ae83b89a44240a5687d4911c824a507f41d13e879638d9d51639122961', 'jpg', 'CashMachine.jpg', 2, '2021-12-10 07:56:01.000', '2021-12-10 07:56:01.000'),
            (15, '1fb659d190ce9f42a681c6ffd2cea2e44f46f02e6f657af0021f50d846ca1b6b1639122971', 'jpg', 'Charming.jpg', 2, '2021-12-10 07:56:11.000', '2021-12-10 07:56:11.000'),
            (16, 'c8836defa28430682aea558e6a92eff275c7b1abdcbc59acb20036afe3b719c01639122987', 'jpg', 'DeepWater.jpg', 2, '2021-12-10 07:56:27.000', '2021-12-10 07:56:27.000'),
            (17, '8e6a2c05c3d6d45ae196b2720f555b3681c3fb10c9fa377d9fba9c1f7cf8974e1639122998', 'jpg', 'FirstClassTraveller.jpg', 2, '2021-12-10 07:56:38.000', '2021-12-10 07:56:38.000'),
            (18, '61cc800e0d92a3e51010f4794cf269998e54bf4e1e5dd433561c08b8197d77291639804739','jpg','RouletteClassicPT.jpg',2,'2021-12-18 05:18:59.000','2021-12-18 05:18:59.000'),
            (19, '61cc800e0d92a3e51010f4794cf269998e54bf4e1e5dd433561c08b8197d77291639804746','jpg','RouletteClassicPTM.jpg',2,'2021-12-18 05:19:06.000','2021-12-18 05:19:06.000'),
            (20, '78240464cbbfc6eb3b32afd159808f24837ff6578d81c2993d126f624013f5e61639804751','jpg','RouletteRoyalAM.jpg',2,'2021-12-18 05:19:11.000','2021-12-18 05:19:11.000');
        ");
    }
}
