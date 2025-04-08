<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('westec/Index');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('westec/Contact');
})->name('contact');

Route::get('/solutions', function () {
    return Inertia::render('westec/SolutionsPage');
})->name('solutions');

Route::get('/detail/{id}', function ($id) {
    return Inertia::render('westec/Detail', [
        'id' => $id,
    ]);
})->name('detail');
