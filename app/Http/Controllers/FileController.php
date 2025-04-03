<?php

namespace App\Http\Controllers;

use App\Helpers\FileHelper;
use App\Helpers\ImageHelper;
use App\Http\Requests\StoreFileRequest;
use App\Http\Requests\UpdateFileRequest;
use App\Models\File as FileModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');

        $query = FileModel::query();

        $query->with('created_by', 'updated_by');

        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('code', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->paginate(perPage: 20)->onEachSide(1);

        return response()->json($tableData);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'folder_id' => 'nullable|integer|max:255|exists:folders,id',
            'files' => 'required|array',
            'files.*' => 'mimes:jpeg,png,jpg,gif,svg,webp,pdf,doc,docx,xls,xlsx,txt|max:10240', // 10MB
        ]);

        $files = $request->file('files');
        unset($validated['files']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }

        $folder = 'assets/files/file_manager';
        $allExistFileNames = [];

        if (count($files) > 0) {
            try {
                foreach ($files as $file) {
                    $mimeType = $file->getMimeType();
                    $size = $file->getSize(); // Get file size in bytes
                    $extension = $file->getClientOriginalExtension();
                    $fileName = $file->getClientOriginalName();

                    // Generate the full file path
                    $file_path_name = public_path("$folder/$fileName");

                    // Check if the file already exists
                    if (File::exists($file_path_name)) {
                        $allExistFileNames[] = $fileName;
                    } else {
                        // Determine file type
                        if (str_starts_with($mimeType, 'image/')) {
                            $created_file_name = ImageHelper::uploadAndResizeImage($file, $folder, 600, false);
                            // Get Image Dimensions
                            [$width, $height] = getimagesize($file);
                        } else {
                            $created_file_name = FileHelper::uploadFile($file, $folder);

                            // Non-image files have no dimensions
                            $width = null;
                            $height = null;
                        }

                        $createdItem = FileModel::create([
                            'name' => $created_file_name,
                            'path' => $folder,
                            'mime_type' => $mimeType,
                            'extension' => $extension,
                            'size' => round($size / 1024, 2), // Convert bytes to KB
                            'width' => $width,
                            'height' => $height,
                            'folder_id' => $request->folder_id ?? null,
                            'created_by' => $request->user()->id,
                            'updated_by' => $request->user()->id,
                        ]);
                    }
                }
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload files: ' . $e->getMessage());
            }
        }

        if (count($allExistFileNames) > 0) {
            $response = redirect()->back()->with('warning', $allExistFileNames);

            if (count($allExistFileNames) < count($files)) {
                $response->with('success', 'Some files uploaded successfully.');
            }

            return $response;
        }

        return redirect()->back()->with('success', 'All files uploaded successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(FileModel $file)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FileModel $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFileRequest $request, FileModel $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FileModel $file)
    {
        $folder = 'assets/files/file_manager';
        FileHelper::deleteFile($file->name, $folder);
        $file->delete();
        return redirect()->back();
    }
}
