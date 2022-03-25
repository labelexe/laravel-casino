<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Person
 *
 * @package Models
 *
 * @OA\Schema(
 *     title="Person model",
 *     description="Person model",
 * )
 */
class Person extends Model
{
    use HasFactory;
    public $table = 'persons';
    public $timestamps = false;

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
     *     description="surname",
     *     title="surname",
     * )
     *
     * @var string
     */
    private $surname;

    /**
     * @OA\Property(
     *     description="patronymic",
     *     title="patronymic",
     * )
     *
     * @var string
     */
    private $patronymic;

    /**
     * @OA\Property(
     *     description="photo",
     *     title="photo",
     * )
     *
     * @var string
     */
    private $photo;

    protected $fillable = [
        'name', 'surname', 'patronymic', 'photo'
    ];
}
