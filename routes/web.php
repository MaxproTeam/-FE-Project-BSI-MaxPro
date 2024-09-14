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

Route::get('/work-schedule-pic', function () {
    return view('pic.work-schedule');
});

Route::get('/work-order-pic', function () {
    return view('pic.work-order');
});

Route::get('/dashboard-spv', function () {
    return view('spv.dashboard');
});
