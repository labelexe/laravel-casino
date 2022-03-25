<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

    class GameBank extends Model
    {
        protected $table = 'game_bank';
        protected $fillable = [
            'slots', 
            'little', 
            'table_bank', 
            'fish', 
            'bonus', 
            'shop_id'
        ];
        public static function boot()
        {
            parent::boot();
        }
        public function shop()
        {
            return $this->belongsTo('VanguardLTE\Shop');
        }
    }

//}
