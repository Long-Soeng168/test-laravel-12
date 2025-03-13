<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('/normalblade', function () {
    return view('normalblade');
})->name('normalblade');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('items', function () {
        return Inertia::render('admin/items/page');
    });
});

Route::get('/homepage', function () {
    return Inertia::render('HomePage');
})->name('homepage');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
