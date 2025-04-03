<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFolderRequest;
use App\Http\Requests\UpdateFolderRequest;
use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        dd($request->all());
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
    public function show(Folder $folder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Folder $folder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFolderRequest $request, Folder $folder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Folder $folder)
    {
        //
    }
}
