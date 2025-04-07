<?php

use App\Http\Controllers\LinkController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\PagePositionController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\WebInfoController;
use App\Models\WebInfo;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    // Project Route
    Route::resource('admin/website_info', WebInfoController::class);
    Route::post('admin/website_info/{website_info}/update', [WebInfoController::class, 'update']);
    Route::resource('admin/links', LinkController::class);
    Route::post('admin/links/{link}/update', [LinkController::class, 'update']);
    Route::resource('admin/projects', ProjectController::class);
    Route::post('admin/projects/{project}/update', [ProjectController::class, 'update']);
    Route::post('admin/projects/{project}/update_status', [ProjectController::class, 'update_status']);
    Route::get('admin/all_projects', [ProjectController::class, 'all_projects']);
    Route::delete('admin/projects/images/{image}', [ProjectController::class, 'destroy_image']);

    // Page Position Route
    Route::resource('admin/page_positions', PagePositionController::class);
    Route::post('admin/page_positions/{pagePosition}/update', [PagePositionController::class, 'update']);
    Route::post('admin/page_positions/{pagePosition}/update_status', [PagePositionController::class, 'update_status']);

    Route::get('/ckeditor', function(){
        return Inertia::render('my_ckeditor5/CustomCKEditor');
    });
    Route::post('/upload', [FileUploadController::class, 'upload']);
});
