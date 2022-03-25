<?php

namespace App\Http\Controllers;

use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail as Mail;
use Validator;


class TransactionController extends Controller
{

    /**
     * @OA\Post(
     ** path="/api/user/transactions",
     *   summary="Получение списка транзакций",
     *   tags={"Transactions"},
     *   operationId="transactions",
     *
     *   @OA\Parameter(
     *      name="user_email",
     *      in="query",
     *      required=false,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="Not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    /**
     * transaction list api
     *
     * @return \Illuminate\Http\Response
     */
    public function getList(Request $request)
    {
        $user = auth()->user();
        if (!$user) {
            $result = ['status' => 'user not auth', 'message' => 403];
            return response()->json($result);
        } else {
            if ($user->role_id == 1 or $user->role_id == 2) {
                if ($request->post('user_email') && strval($request->post('user_email')) !== "") {
                    $transaction = Transaction::all()->where('user_id', intval(User::getUserId(strval($request->post('user_email')))));
                    if ($transaction) {
                        return response()->json($transaction);
                    } else {
                        $result = ['status' => 'user not found', 'message' => 404];
                        return response()->json($result);
                    }
                } else {
                    return response()->json(Transaction::all());
                }
            } else {
                $transaction = Transaction::all()->where('user_id', intval($user->id));
                if ($transaction) {
                    return response()->json($transaction);
                } else {
                    $result = ['status' => 'transactions not found', 'message' => 404];
                    return response()->json($result);
                }
            }
        }
    }


    /**
     * @OA\Post(
     ** path="/api/user/balance/add",
     *   summary="Пополнение баланса юзера",
     *   tags={"Transactions"},
     *   operationId="transactionsAdd",
     *   @OA\Parameter(
     *      name="user_email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="summ",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="Not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    /**
     * add user balance api
     *
     * @return \Illuminate\Http\Response
     */
    public function addBalance(Request $request)
    {
        $user = auth()->user();
        if (!$user) {
            $result = ['status' => 'user not auth', 'message' => 403];
            return response()->json($result);
        } else {
            if ($user->role_id == 1 or $user->role_id == 2) {
                if ($request->post('user_email') && strval($request->post('user_email')) !== "") {
                    $transaction = new Transaction();
                    $transaction->user_id = intval(User::getUserId(strval($request->post('user_email'))));
                    $transaction->payeer_id = intval(User::getUserId(strval($request->post('user_email'))));
                    $transaction->system = "stripe";
                    $transaction->type = "add";
                    $transaction->summ = intval(($request->post('summ')) ? $request->post('summ') : 0);
                    $transaction->status = 1;
                    $transaction->shop_id = intval(User::getUserShopId(strval($request->post('user_email'))));

                    $userModel = User::find(intval(User::getUserId(strval($request->post('user_email')))));
                    $userModel->balance = $userModel->balance + $transaction->summ;
                    $userModel->save();

                    return response()->json($transaction->save());
                } else {
                    $result = ['status' => 'bad request', 'message' => 503];
                    return response()->json($result);
                }
            } else {
                if ($request->post('user_email') && strval($request->post('user_email')) !== "") {
                    $result = ['status' => 'bad request', 'message' => 503];
                    return response()->json($result);
                } else {
                    $transaction = new Transaction();
                    $transaction->user_id = intval($user->id);
                    $transaction->payeer_id = intval($user->id);
                    $transaction->system = "stripe";
                    $transaction->type = "add";
                    $transaction->summ = intval(($request->post('summ')) ? $request->post('summ') : 0);
                    $transaction->status = 1;
                    $transaction->shop_id = intval($user->shop_id);

                    $userModel = User::find(intval($user->id));
                    $userModel->balance = $user->balance + $transaction->summ;
                    $userModel->save();

                    return response()->json($transaction->save());
                }
            }
        }
    }


    /**
     * @OA\Post(
     ** path="/api/user/balance/out",
     *   summary="Вывод баланса юзера",
     *   tags={"Transactions"},
     *   operationId="transactionsOut",
     *   @OA\Parameter(
     *      name="user_email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="summ",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="Not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    /**
     * out user balance api
     *
     * @return \Illuminate\Http\Response
     */
    public function outBalance(Request $request)
    {
        $user = auth()->user();
        if (!$user) {
            $result = ['status' => 'user not auth', 'message' => 403];
            return response()->json($result);
        } else {
            if ($user->role_id == 1 or $user->role_id == 2) {
                if ($request->post('user_email') && strval($request->post('user_email')) !== "") {
                    $transaction = new Transaction();
                    $transaction->user_id = intval(User::getUserId(strval($request->post('user_email'))));
                    $transaction->payeer_id = intval(User::getUserId(strval($request->post('user_email'))));
                    $transaction->system = "bank card";
                    $transaction->type = "out";
                    $transaction->summ = intval(($request->post('summ')) ? $request->post('summ') : 0);
                    $transaction->status = 1;
                    $transaction->shop_id = intval(User::getUserShopId(strval($request->post('user_email'))));

                    $userModel = User::find(intval(User::getUserId(strval($request->post('user_email')))));
                    if (intval($userModel->balance) >= $transaction->summ) {
                        $userModel->balance = intval($userModel->balance) - $transaction->summ;
                        $userModel->save();
                    } else {
                        $result = ['status' => 'Bad Request Summ', 'message' => 400];
                        return response()->json($result);
                    }

                    return response()->json($transaction->save());
                } else {
                    $result = ['status' => 'bad request', 'message' => 503];
                    return response()->json($result);
                }
            } else {
                if ($request->post('user_email') && strval($request->post('user_email')) !== "") {
                    $result = ['status' => 'bad request', 'message' => 503];
                    return response()->json($result);
                } else {
                    $transaction = new Transaction();
                    $transaction->user_id = intval($user->id);
                    $transaction->payeer_id = intval($user->id);
                    $transaction->system = "bank card";
                    $transaction->type = "out";
                    $transaction->summ = intval(($request->post('summ')) ? $request->post('summ') : 0);
                    $transaction->status = 1;
                    $transaction->shop_id = $user->shop_id;

                    $userModel = User::find(intval($user->id));
                    if (intval($user->balance) >= $transaction->summ) {
                        $userModel->balance = intval($user->balance) - $transaction->summ;
                        $userModel->save();
                    } else {
                        $result = ['status' => 'Bad Request Summ', 'message' => 400];
                        return response()->json($result);
                    }

                    return response()->json($transaction->save());
                }
            }
        }
    }
    
}
