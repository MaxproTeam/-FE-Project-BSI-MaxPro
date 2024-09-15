<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
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

Route::get('/work-checklist-spv', function () {
    return view('spv.work-checklist');
});

Route::get('/work-check-spv', function () {
    return view('spv.work-check');
});

Route::get('/work-order-spv', function () {
    return view('spv.work-order');
});

Route::get('/work-order-check-spv', function () {
    return view('spv.work-order-check');
});

Route::get('/present-me-spv', function () {
    return view('spv.present');
});

Route::get('/present-pic-spv', function () {
    return view('spv.present-pic');
});
