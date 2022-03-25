<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class User
 *
 * @package Models
 *
 * @OA\Schema(
 *     title="User model",
 *     description="User model",
 * )
 */
//class User extends Model implements AuthenticatableContract
class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;
    //use Authenticatable;
    public $table = 'users';

    protected $fillable = [
        'id', 'username', 'email', 'password', 'role_id', 'first_name', 'last_name', 'shop_id', 'balance'
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier() {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }


    /**
     * @OA\Property(
     *     description="username",
     *     title="username",
     * )
     *
     * @var string
     */
    private $username;

    /**
     * @OA\Property(
     *     description="email",
     *     title="email",
     * )
     *
     * @var string
     */
    private $email;

    /**
     * @OA\Property(
     *     description="balance",
     *     title="balance",
     * )
     *
     * @var string
     */
    private $balance;

    static function getUserId($user_mail)
    {
        return User::all()->where('email', $user_mail)->first()->id;
    }

    static function getUserShopId ($user_mail)
    {
        return User::all()->where('email', $user_mail)->first()->shop_id;
    }

}
