<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
/*
Route::options('game/{game}', function (\Illuminate\Http\Request $request) {
    \Illuminate\Http\Response::header('Access-Control-Allow-Origin', '*');
    \Illuminate\Http\Response::header('Allow', 'GET,HEAD,OPTIONS');
    return '';
});
*/
Route::options('game/{game}', function (\Illuminate\Http\Request $request) {
    $response = new Response(null, 200);
    $response->header('Allow', 'GET,HEAD,OPTIONS');
    $response->header('Access-Control-Allow-Origin', '*');
    return $response;

});
Route::get('game/{game}', [
    'as' => 'frontend.game.go',
    'uses' => 'GamesController@go'
]);
Route::post('game/{game}/server', [
    'as' => 'frontend.game.server',
    'uses' => 'GamesController@server'
]);

