<?php

use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PagePositionController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    // Project Route
    Route::resource('admin/projects', ProjectController::class);
    Route::post('admin/projects/{project}/update', [ProjectController::class, 'update']);
    Route::post('admin/projects/{project}/update_status', [ProjectController::class, 'update_status']);
    Route::get('admin/all_projects', [ProjectController::class, 'all_projects']);
    Route::delete('admin/projects/images/{image}', [ProjectController::class, 'destroy_image']);

    // Page Position Route
    Route::resource('admin/page_positions', PagePositionController::class);
    Route::post('admin/page_positions/{pagePosition}/update', [PagePositionController::class, 'update']);
    Route::post('admin/page_positions/{pagePosition}/update_status', [PagePositionController::class, 'update_status']);

    // Page Route
    Route::resource('admin/pages', PageController::class);
    Route::post('admin/pages/{page}/update', [ProjectController::class, 'update']);
    Route::post('admin/pages/{page}/update_status', [ProjectController::class, 'update_status']);
    Route::get('admin/all_pages', [ProjectController::class, 'all_pages']);
    Route::delete('admin/pages/images/{image}', [ProjectController::class, 'destroy_image']);

    // File Upload Route
    Route::get('/admin/ckeditor5', function(){
        return Inertia::render('plugins/ckeditor5/Index');
    });
    Route::get('/admin/my_file_manager', function(){
        return Inertia::render('plugins/file-manager/MyFileManager');
    });
    // Route::post('/upload', [FileUploadController::class, 'upload']);
    
});
