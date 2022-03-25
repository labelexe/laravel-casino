<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FileService
 *
 * @package Models
 *
 * @OA\Schema(
 *     title="FileService model",
 *     description="FileService model",
 * )
 */
class FileService extends Model
{
    use HasFactory;
    public $table = 'file_services';

    protected $fillable = [
        'name', 'path', 'status'
    ];

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
     *     description="path",
     *     title="path",
     * )
     *
     * @var string
     */
    private $path;

    /**
     * @OA\Property(
     *     format="int64",
     *     description="status",
     *     title="status",
     * )
     *
     * @var integer
     */
    private $status;
}
