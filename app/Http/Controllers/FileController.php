<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\FileService;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


/**
 * @OA\Server(
 *      url=L5_SWAGGER_CONST_HOST,
 *      description="Debug server api"
 * ),
 *
 * @OA\Server(
 *      url="http://localhost:8383",
 *      description="Localhost server api"
 * )
 */


class FileController extends Controller
{

/**
 * @OA\Schema(
 *   schema="ServiceRequest",
 *   required={"products"},
 *    @OA\Property(
 *      description="service id ",
 *      property="service_id",
 *      type="integer",
 *    ),
 *
 * )
 */

/**
 * Store a newly created Products.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return \Illuminate\Http\Response
 *
 * @OA\Post(
 *     path="/api/file",
 *     tags={"Files"},
 *     @OA\Response(response="200", description="Adding a new Product."),
 *
 *
 * @OA\RequestBody(
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="multipart/form-data",
 *             @OA\Schema(
 *                  @OA\Property(
 *                      description="service id ",
 *                      property="service_id",
 *                      type="integer",
 *                  ),
 *                 @OA\Property(
 *                     description="file to upload",
 *                     property="file",
 *                     type="file",
 *                ),
 *                 required={"file"}
 *             ),
 *         )
 *     ),
 * )
 *
 */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'file' => 'required', //'required|mimes:pdf,xlx,csv|max:2048',
            //'service_id' => 'int',
        ]);

        $fileHash = hash_file('sha256', $request->file) . time();

        $exstension = $validated['file']->extension();
        $fileName = $fileHash . '.' . $exstension;

        $serviceId = 0;
        if ($request->get('service_id', null) != null) {
            $serviceId = $request->get('service_id');
        }
        $fileService = FileService::where('id', $serviceId)->firstOrFail();

        $file = File::create([
            'hash' => $fileHash,
            'extension' => $exstension,
            'name' => $validated['file']->getClientOriginalName(),
            'service_id' => $fileService->id,
        ]);

        $file->setFullPathAttribute($fileService->path);

        if(!Storage::exists($fileService->path)) {
            Storage::makeDirectory($fileService->path);
        }

        $request->file->move(public_path('uploads/'.$fileService->path), $fileName);

        return response()->json($file);
    }

    /**
     * @OA\Delete(
     *      path="/api/file",
     *      operationId="delete",
     *      tags={"Files"},

     *      summary="Удаление файла",
     *      description="Удаление файла",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     * ),
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
     *      name="service_id",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
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
    public function delete(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required', //'required|mimes:pdf,xlx,csv|max:2048',
            'service_id' => 'required',
        ]);
        $fileService = FileService::where('id', $validated['service_id'])->firstOrFail();
        $file = File::where('hash', $validated['name'])->where('service_id', $validated['service_id'])->firstOrFail();

        $filePath = public_path('uploads/'. $fileService->path.'/'. $file->hash_name);

        if(file_exists($filePath)) {
            $isFileRemoved = unlink($filePath);
            //TODO: кидаем ошибку
        }
    }

    /**
     * @OA\Delete(
     *      path="/api/file/url",
     *      operationId="delete-by-url",
     *      tags={"Files"},

     *      summary="Удаление файла",
     *      description="Удаление файла",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     * ),
     *   @OA\Parameter(
     *      name="url",
     *      in="query",
     *      required=true,
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
    public function deleteByUrl(Request $request)
    {
        $validated = $request->validate([
            'url' => 'required',
        ]);
        $fileService = FileService::where('id', $validated['service_id'])->firstOrFail();
        $file = File::where('hash', $validated['name'])->where('service_id', $validated['service_id'])->firstOrFail();

        $filePath = public_path('uploads/'. $fileService->path.'/'. $file->hash_name);

        if(file_exists($filePath)) {
            $isFileRemoved = unlink($filePath);
            //TODO: кидаем ошибку
        }
    }
}
