<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class File
 *
 * @package Models
 *
 * @OA\Schema(
 *     title="File model",
 *     description="File model",
 * )
 */
class File extends Model
{
    use HasFactory;
    public $table = 'files';

    protected $appends = ['hash_name', 'full_path'];

    protected $fillable = [
        'name', 'extension', 'service_id', 'hash'
    ];

    public function getHashNameAttribute()
    {
        if ($this->attributes['extension'] == null) {
            return $this->attributes['hash'];
        }
        return $this->attributes['hash']. '.' . $this->attributes['extension'];
    }

    public function service()
    {
        return $this->hasOne('App\Models\FileService', 'id', 'service_id');
    }

    public function setFullPathAttribute(string $service_path)
    {
        return $this->service->path . DIRECTORY_SEPARATOR . $this->hash_name;
    }

    public function getFullPathAttribute()
    {
        return DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . $this->service->path . DIRECTORY_SEPARATOR . $this->attributes['hash']. '.' . $this->attributes['extension'];
    }

    /**
     * @OA\Property(
     *     format="int64",
     *     description="id",
     *     title="id",
     * )
     *
     * @var integer
     */
    private $id;

    /**
     * @OA\Property(
     *     description="name",
     *     title="name",
     * )
     *
     * @var string
     */
    private $name;

    /**
     * @OA\Property(
     *     description="extension",
     *     title="extension",
     * )
     *
     * @var string
     */
    private $extension;

    /**
     * @OA\Property(
     *     format="int64",
     *     description="service_id",
     *     title="service_id",
     * )
     *
     * @var integer
     */
    private $service_id;

    /**
     * @OA\Property(
     *     description="hash",
     *     title="hash",
     * )
     *
     * @var string
     */
    private $hash;

    /**
     * @OA\Property(
     *     description="hash_name",
     *     title="hash_name",
     * )
     *
     * @var string
     */
    public $hash_name;

    /**
     * @OA\Property(
     *     description="full_path",
     *     title="full_path",
     * )
     *
     * @var string
     */
    public $full_path;


    public function games()
    {
        return $this->belongsTo(Games::class);
    }

}
