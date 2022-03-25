<?php

namespace App\Http\Controllers;

use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail as Mail;


class UserController extends Controller
{

    /**
     * @OA\Info(
     *      version="1.0.0",
     *      title="Integration Swagger in Laravel with Passport Auth Documentation",
     *      description="Implementation of Swagger with in Laravel",
     *      @OA\Contact(
     *          email="admin@admin.com"
     *      ),
     *      @OA\License(
     *          name="Apache 2.0",
     *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
     *      )
     * )
     *
     * @OA\Server(
     *      url=L5_SWAGGER_CONST_HOST,
     *      description="Demo API Server"
     * )
     *
     *
     */
     /**
     * @OA\Post(
     * path="/api/user/login",
     *   tags={"Users"},
     *   summary="Login",
     *   operationId="login",
     *
     *   @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *          type="string"
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
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $userLogin = $request->get('email');
        $userPassword = $request->get('password');
        $userPasswordHash = Hash::make($userPassword);

        if (Auth::attempt(['email' => $userLogin, 'password' => $userPassword])) {
            //return redirect()->intended('dashboard');
            $result = [
                'login' => $userLogin,
                'password' => $userPassword,
                'password_hash' => $userPasswordHash,
                'session_open_ts' => time(),
                'session_expire_ts' => time() + intval(env('SESSION_LIFETIME') * 60)
            ];

            session([$result['login'] => $result]);
            return response()->json($result);
        }

        $result = ['status' => false, 'message' => 403];
        return response()->json($result);
    }


    /**
     * @OA\Post(
     * path="/api/user/logout",
     *   tags={"Users"},
     *   summary="Logout",
     *   operationId="logout",
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
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function logout(Request $request, $sessionId = null) {
        $resultStatus = null;
        //if ($currentUserLoginData) {
            if ($sessionId) {
                $currentUserLogin = $sessionId;
            } else {
                //$currentUserLogin = $currentUserLoginData['login'];
                $currentUserLogin = $request->post('login');
            }

            try {
                $request->session()->forget($currentUserLogin);
                $resultStatus = true;
            } catch (\Exception $e) {
                $resultStatus = false;
            }
        /*} else {
            $resultStatus = false;
        }*/

        $result = ['status' => $resultStatus, 'message' => 1937];
        return response()->json($result);
    }


    /**
     * @OA\Post(
     * path="/api/user/check",
     *   tags={"Users"},
     *   summary="Проверка авторизованности юзера по jwt токену",
     *   operationId="checkSession",
     *
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
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function checkSession(Request $request, $sessionId) {
        $sessionData = $request->session()->get($sessionId);
        if ($sessionData) {
            if ($sessionData['session_expire_ts'] <= time()) {
                $this->logout($request, $sessionId);
            } else {
                return response()->json($sessionData);
            }
        } else {
            $result = ['status' => 'no auth', 'message' => 403];
            return response()->json($result);
        }
    }


    /**
     * Регистрация нового пользователя
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @OA\Post(
     *     path="/api/user",
     *     tags={"Users"},
     *     @OA\Response(response="200", description="Регистрация нового пользователя"),
     *
     *
     * @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/x-www-form-urlencoded",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     description="username",
     *                     property="username",
     *                     type="string",
     *                 ),
     *                 required={"username"},
     *                 @OA\Property(
     *                     description="email",
     *                     property="email",
     *                     type="string",
     *                 ),
     *                 required={"email"},
     *                 @OA\Property(
     *                     description="password",
     *                     property="password",
     *                     type="string",
     *                 ),
     *                 required={"password"},
     *                 @OA\Property(
     *                     description="password_confirmation",
     *                     property="password_confirmation",
     *                     type="string",
     *                 ),
     *                 required={"password_confirmation"},
     *                 @OA\Property(
     *                     description="role_id",
     *                     property="role_id",
     *                     type="integer",
     *                 ),
     *             ),
     *         )
     *     ),
     * )
     *
     */
    public function create(Request $request)
    {
        return response()->json(User::create([
            'username' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'role_id' => ($request->get('role_id')) ? $request->get('role_id') : 3
        ]));
    }


    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * @OA\Get(
     *     path="/api/user/{user_email}",
     *     summary="Получение профиля пользователя по логину(email) юзера",
     *     tags={"Users"},
     *
     *     @OA\Parameter(
     *         name="email",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid username supplied"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="User not found"
     *     ),
     * )
     */
    public function one($email) {
        $user = User::where('email', $email)->first();
        return response()->json($user);
    }

    /**
     * @OA\Put(
     *      path="/api/user/{user_email}",
     *      tags={"Users"},
     *
     *      summary="Обновление профиля пользователя",
     *      description="Обновление профиля пользователя",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     * ),
     *
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *   @OA\Parameter(
     *      name="user_id",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="surname",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="patronymic",
     *      in="query",
     *      required=false,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="photo",
     *      in="query",
     *      required=false,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     * @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     * @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *  )
     */
    public function update(Request $request, $email)
    {
        $user = User::where('email', $email)->firstOrFail();
        $validated = $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
        ]);
        $user->fill($validated);
        $user->save();

        return response()->json($user);
    }


    /**
     * @OA\Post(
     *     path="/api/user/resetPassword/{user_email}",
     *     summary="Сброс пароля юзера по логину(email)",
     *     tags={"Users"},
     *
     *     @OA\Parameter(
     *         name="email",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *     ),
     *     @OA\Response(
     *         response=405,
     *         description="User not found"
     *     ),
     * )
     */
    public function resetPassword($email) {
        $user = User::where('email', $email)->first();
        if ($user) {
            $to_name = $user->first_name;
            $to_email = $user->email;
            $data = array('name'=>$to_name, "body" => "Ваш новый пароль в Casino Zero:", "pwd" => "2342344sfddf");

            try {
                Mail::send('emails', $data, function($message) use ($to_name, $to_email) {
                    $message->to($to_email, $to_name)->subject('Смена пароля в Casino Zero');
                    $message->from(env('MAIL_FROM_ADDRESS', 'admin@izicash.bet'), 'CasinoZero');
                });
                $result = ['status' => 'OK', 'message' => 200];
            } catch (\Swift_TransportException $e) {
                $result = ['status' => 'ERROR Swift Transport', 'message' => 500];
                //return $e;
            } catch (\Swift_RfcComplianceException $e) {
                $result = ['status' => 'ERROR Swift Rfc', 'message' => 508];
                //return $e;
            }

            return response()->json($result);
        } else {
            $result = ['status' => 'user not found', 'message' => 405];
            return response()->json($result);
        }
    }


    /**
     * @OA\Get(
     *     path="/api/user/getBalance/{user_email}",
     *     summary="Получение баланса юзера по логину(email)",
     *     tags={"Users"},
     *
     *     @OA\Parameter(
     *         name="email",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *     ),
     *     @OA\Response(
     *         response=405,
     *         description="User not found"
     *     ),
     * )
     */
    public function getBalance($email) {
        if ($email) {
            $user = User::where('email', $email)->first();
            if ($user) {
                return $user->balance;
            } else {
                $result = ['status' => 'user not found', 'message' => 405];
                return response()->json($result);
            }
        } else {
            $result = ['status' => 'user not found', 'message' => 405];
            return response()->json($result);
        }
    }




/*
    public function delete(Request $request, $id)
    {
        $document = Documents::findOrFail($id);
        $document->delete();

        return 204;
    }*/
    protected function getLockoutErrorMessage($seconds)
    {
        return trans('auth.throttle', ['seconds' => $seconds]);
    }

    protected function sendLockoutResponse(\Illuminate\Http\Request $request)
    {
        $seconds = app('Illuminate\Cache\RateLimiter')->availableIn($request->input($this->loginUsername()) . $request->ip());
        return redirect('/backend/login')->withInput($request->only($this->loginUsername(), 'remember'))->withErrors([$this->loginUsername() => $this->getLockoutErrorMessage($seconds)]);
    }

    public function loginUsername()
    {
        return 'username';
    }

    protected function hasTooManyLoginAttempts(\Illuminate\Http\Request $request)
    {
        return app('Illuminate\Cache\RateLimiter')->tooManyAttempts($request->input($this->loginUsername()) . $request->ip(), $this->maxLoginAttempts());
    }

    protected function clearLoginAttempts(\Illuminate\Http\Request $request)
    {
        app('Illuminate\Cache\RateLimiter')->clear($request->input($this->loginUsername()) . $request->ip());
    }

    protected function handleUserWasAuthenticated(\Illuminate\Http\Request $request, $throttles, $user)
    {
        if( $throttles )
        {
            $this->clearLoginAttempts($request);
        }
        event(new \App\Events\User\LoggedIn());
        if( $request->has('to') )
        {
            return redirect()->to($request->get('to'));
        }
        if( !\Auth::user()->hasPermission('dashboard') )
        {
            return redirect()->route('backend.user.list');
        }
        return redirect()->route('backend.dashboard');
    }

    public function postLogin(\App\Http\Requests\Auth\LoginRequest $request, \App\Repositories\Session\SessionRepository $sessionRepository)
    {
        $throttles = 0;
        //$throttles = settings('throttle_enabled');
        $to = ($request->has('to') ? '?to=' . $request->get('to') : '');
        if( $throttles && $this->hasTooManyLoginAttempts($request) )
        {
            return $this->sendLockoutResponse($request);
        }
        $credentials = $request->getCredentials();
        if( settings('use_email') )
        {
            if( filter_var($credentials['username'], FILTER_VALIDATE_EMAIL) )
            {
                $credentials = [
                    'email' => $credentials['username'],
                    'password' => $credentials['password']
                ];
            }
            else
            {
                $credentials = [
                    'username' => $credentials['username'],
                    'password' => $credentials['password']
                ];
            }
        }
        if( !\Auth::validate($credentials) )
        {
            if( $throttles )
            {
                $this->incrementLoginAttempts($request);
            }
            return redirect()->to('login' . $to)->withErrors(trans('auth.failed'));
        }
        $user = \Auth::getProvider()->retrieveByCredentials($credentials);
        if( $user->hasRole([
                1,
                2,
                3
            ]) && (!$user->shop || $user->shop->is_blocked) )
        {
            return redirect()->to('backend/login' . $to)->withErrors('Your shop is blocked');
        }
        if( settings('use_email') && $user->isUnconfirmed() )
        {
            return redirect()->to('login' . $to)->withErrors(trans('app.please_confirm_your_email_first'));
        }
        if( $user->isBanned() )
        {
            return redirect()->to('login' . $to)->withErrors(trans('app.your_account_is_banned'));
        }
        if( $request->lang )
        {
            $user->update(['language' => $request->lang]);
        }
        \Auth::login($user, settings('remember_me') && $request->get('remember'));
        if( settings('reset_authentication') && count($sessionRepository->getUserSessions(\Auth::id())) )
        {
            foreach( $sessionRepository->getUserSessions($user->id) as $session )
            {
                if( $session->id != session()->getId() )
                {
                    $sessionRepository->invalidateSession($session->id);
                }
            }
        }
        return $this->handleUserWasAuthenticated($request, $throttles, $user);
    }


}
