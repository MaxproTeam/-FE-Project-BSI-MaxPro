<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('Auth.login');
});

Route::get('/dashboard-pic', function () {
    return view('pic.dashboard');
});

Route::get('/present-pic', function () {
    return view('pic.present');
});
