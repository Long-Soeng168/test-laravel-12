<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::resource('admin/projects', ProjectController::class);
    Route::delete('admin/projects/images/{image}', [ProjectController::class, 'destroy_image']);
    Route::get('admin/all_projects', [ProjectController::class, 'all_projects']);
});