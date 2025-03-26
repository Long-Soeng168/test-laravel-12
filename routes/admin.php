<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    // Project Route
    Route::resource('admin/projects', ProjectController::class);
    Route::post('admin/projects/{project}/update', [ProjectController::class, 'update']);
    Route::get('admin/all_projects', [ProjectController::class, 'all_projects']);
    Route::delete('admin/projects/images/{image}', [ProjectController::class, 'destroy_image']);
});