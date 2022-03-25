<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
class Shop extends Model
{

    use HasFactory;
    public $table = 'shops';
    public $timestamps = false;

    protected $fillable = [
        "name" ,
        "balance" ,
        "frontend" ,
        "currency" ,
        "percent",
        "is_blocked" ,
        "orderby" ,
        "user_id" ,
        "pending",
    ];

}
