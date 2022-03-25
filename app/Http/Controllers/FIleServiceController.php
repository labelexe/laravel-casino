<?php

namespace App\Http\Controllers;

use App\Models\FileService;
use App\Models\Person;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class FileServiceController extends Controller
{

    /**
     * @OA\Post(
     *      path="/api/file/service",
     *      operationId="create",
     *      tags={"FileService"},
     *      summary="Создание сервиса",
     *      description="Создание сервиса",
     *      @OA\Parameter(
     *         name="name",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *      ),
     *      @OA\Parameter(
     *         name="path",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *      ),
     *      @OA\Parameter(
     *          name="status",
     *          in="query",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/FileService"),
     *      ),
     *      @OA\Response(
     *         response=403,
     *         description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="not found"
     *      ),
     * )
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'path' => 'required',
            'status' => 'required'
        ]);
        $fileService = FileService::create($validated);

        return response()->json($fileService);
    }


    /**
     * @OA\Get(
     *      path="/api/file/service",
     *      operationId="getAll",
     *      tags={"FileService"},
     *      summary="Получение файловых сервисов",
     *      description="Получение файловых сервисов",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(
     *               type="array",
     *              @OA\Items(ref="#/components/schemas/FileService"),
     *          )
     *      ),
     *      @OA\Response(
     *         response=403,
     *         description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="not found"
     *      ),
     * )
     */
    public function index()
    {
        return response()->json(FileService::all());
    }

    /**
     * @OA\Get(
     *      path="/api/file/service/{id}",
     *      operationId="one",
     *      tags={"FileService"},
     *      summary="Получение одного сервиса",
     *      description="Получение одного сервиса",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/FileService"),
     *      ),
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="string"
     *          )
     *      ),
     *      @OA\Response(
     *         response=403,
     *         description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="not found"
     *      ),
     *  )
     */
    public function one($id) {
        $fileService = FileService::where('id', $id)->firstOrFail();
        return response()->json($fileService);
    }

    /**
     * @OA\Put(
     *      path="/api/file/service/{id}",
     *      operationId="update",
     *      tags={"FileService"},
     *      summary="Обновление одного сервиса",
     *      description="Обновление одного сервиса",
     *      @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *      ),
     *      @OA\Parameter(
     *         name="name",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *      ),
     *      @OA\Parameter(
     *         name="path",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *      ),
     *      @OA\Parameter(
     *          name="status",
     *          in="query",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/FileService"),
     *      ),
     *      @OA\Response(
     *         response=403,
     *         description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="not found"
     *      ),
     * )
     */
    public function update(Request $request, $id)
    {
        $fileService = FileService::where('id', $id)->firstOrFail();
        $validated = $request->validate([
            'name' => 'required',
            'path' => 'required',
            'status' => 'required'
        ]);
        $fileService->fill($validated);
        $fileService->save();

        return response()->json($fileService);
    }

    /**
     * @OA\Delete(
     *      path="/api/file/service/{id}",
     *      operationId="delete",
     *      tags={"FileService"},
     *      summary="Получение одного сервиса",
     *      description="Получение одного сервиса",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(),
     *      ),
     *      @OA\Response(
     *         response=403,
     *         description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="not found"
     *      ),
     * )
     */
    public function delete(Request $request, $id)
    {
        #$document = Documents::findOrFail($id);
        #$document->delete();

        return 204;
    }
}
