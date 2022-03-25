<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameLog extends Model
{
    protected $table = 'game_log';
    protected $fillable = [
        'time',
        'game_id',
        'user_id',
        'ip',
        'str',
        'shop_id'
    ];
    public $timestamps = false;
    public static function boot()
    {
        parent::boot();
    }
}


