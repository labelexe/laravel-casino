<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::group(['middleware' => ['web']], function () {

    Route::post('user/check', 'AuthController@userProfile');
    Route::get('user/check', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::put('user/check', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::delete('user/check', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });


    Route::post('user/login', 'AuthController@login');
    Route::get('user/login', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::put('user/login', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::delete('user/login', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });


    Route::post('user/logout', 'AuthController@logout');
    Route::get('user/logout', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::put('user/logout', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::delete('user/logout', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });


    Route::post('user', 'AuthController@register');
    Route::get('user', 'UserController@index');
    Route::get('user/{email}', 'UserController@one');
    Route::put('user/{email}', 'UserController@update');
    Route::delete('user', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });


    Route::get('person', 'PersonController@index');
    Route::get('person/{id}', 'PersonController@one');
    Route::post('person', 'PersonController@create');
    Route::put('person/{id}', 'PersonController@update');
    Route::delete('person/{id}', 'PersonController@delete');

    Route::post('file', 'FileController@create');
    Route::delete('file', 'FileController@delete');
    Route::delete('file/url', 'FileController@deleteByUrl');

    Route::post('file/service', 'FileServiceController@create');
    Route::get('file/service', 'FileServiceController@index');
    Route::get('file/service/{id}', 'FileServiceController@one');
    Route::put('file/service/{id}', 'FileServiceController@update');
    Route::delete('file/service/{id}', 'FileServiceController@delete');

    Route::get('user/resetPassword/{email}', 'UserController@resetPassword');
    Route::post('user/resetPassword/{email}', 'UserController@resetPassword');
    Route::put('user/resetPassword/{email}', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::delete('user/resetPassword/{email}', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });


    Route::get('user/getBalance/{email}', 'UserController@getBalance');
    Route::post('user/getBalance/{email}', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::put('user/getBalance/{email}', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });
    Route::delete('user/getBalance/{email}', function() {
        $result = ['status' => false, 'message' => 405];
        return response()->json($result);
    });


    Route::post('user/test', 'UserController@postLogin');
    //Route::post('user/test2', 'AuthController@userProfile');

    Route::get('games/all', 'GamesController@getList');
    Route::get('games/{id}', 'GamesController@getOneById');

    Route::post('user/transactions', 'TransactionController@getList');
    Route::post('user/balance/add', 'TransactionController@addBalance');
    Route::post('user/balance/out', 'TransactionController@outBalance');

    Route::post('game/{game}/server', [
        'as' => 'frontend.game.server',
        'uses' => 'GamesController@server'
    ]);

});


//Route::get('user/auth', 'App\Http\Controllers\UserController@auth');
//Route::put('documents/{id}', 'DocumentsController@update');
//Route::delete('documents/{id}', 'DocumentsController@delete');

//Route::post('files/add', 'FilesController@add');
