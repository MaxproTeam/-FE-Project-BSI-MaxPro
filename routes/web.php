<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PICController;

Route::get('/', [AuthController::class, 'login']);
Route::get('/login', [AuthController::class, 'login']);

Route::get('/dashboard-pic', [PICController::class, 'dashboard']);
Route::get('/present-pic', [PICController::class, 'present']);
Route::get('/work-schedule-pic', [PICController::class, 'work_schedule']);
Route::get('/work-order-pic', [PICController::class, 'work_order']);

Route::get('/dashboard-spv', function () {
    return view('spv.dashboard');
});

Route::get('/work-checklist-spv', function () {
    return view('spv.work-checklist');
});

Route::get('/work-check-spv/{id}', function () {
    return view('spv.work-check');
});

Route::get('/work-order-spv', function () {
    return view('spv.work-order');
});

Route::get('/work-order-check-spv/{id}', function () {
    return view('spv.work-order-check');
});

Route::get('/present-me-spv', function () {
    return view('spv.present');
});

Route::get('/present-pic-spv', function () {
    return view('spv.present-pic');
});

Route::get('/dashboard-manager', function () {
    return view('manager.dashboard');
});

Route::get('/proyek-manager', function () {
    return view('manager.proyek');
});

Route::get('/detail-proyek-manager/{id}', function () {
    return view('manager.detail-proyek');
});

Route::get('/work-order-manager', function () {
    return view('manager.work-order');
});

Route::get('/approval-manager/{id}', function () {
    return view('manager.approval');
});

Route::get('/dashboard-client', function () {
    return view('client.dashboard');
});

Route::get('/present-client-pic', function () {
    return view('client.present-pic');
});

Route::get('/present-client-supervisor', function () {
    return view('client.present-supervisor');
});

Route::get('/work-check-client', function () {
    return view('client.work-check');
});

Route::get('/work-order-client', function () {
    return view('client.work-order');
});

Route::get('/create-work-order-client', function () {
    return view('client.create-work-order');
});
