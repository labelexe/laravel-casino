<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class PersonController extends Controller
{

    /**
     * @OA\Post(
     *      path="/api/person",
     *      operationId="create",
     *      tags={"Persons"},

     *      summary="Создание профиля пользователя",
     *      description="Создание профиля пользователя",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     * ),
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
     *
     *   @OA\Parameter(
     *      name="surname",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *
     *   @OA\Parameter(
     *      name="patronymic",
     *      in="query",
     *      required=false,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *
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
    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
        ]);
        $result = Person::create($validated);

        return response()->json($result);
    }


    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * @OA\Get(
     *     path="/api/person/{user_id}",
     *     summary="Получение профиля пользователя по ид юзера",
     *     operationId="one",
     *     tags={"Persons"},
     *
     *     @OA\Parameter(
     *         name="user_id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Person"),
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
    public function one($id) {
        $person = Person::where('id', $id)->firstOrFail();
        return response()->json($person);
    }

    /**
     * @OA\Put(
     *      path="/api/person/{id}",
     *      operationId="update",
     *      tags={"Persons"},

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
    public function update(Request $request, $id)
    {
        $person = Person::where('id', $id)->firstOrFail();
        $validated = $request->validate([
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
        ]);
        $person->fill($validated);
        $person->save();

        return response()->json($person);
    }

    public function delete(Request $request, $id)
    {
        #$document = Documents::findOrFail($id);
        #$document->delete();

        return 204;
    }
}
