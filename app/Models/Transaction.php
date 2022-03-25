<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

/**
 * Class Transaction
 *
 * @package Models
 *
 * @OA\Schema(
 *     title="Transaction model",
 *     description="Transaction model",
 * )
 */
class Transaction extends Model implements AuthenticatableContract
{
    use HasFactory;
    use Authenticatable;
    public $table = 'transaction';

    protected $fillable = [
        'username', 'email', 'password', 'role_id', 'first_name', 'last_name', 'shop_id',
    ];


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

}
