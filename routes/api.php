<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AllProjectController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TicketController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/save-contact', [TemplateController::class, 'save_contact']);
Route::get('/all-contact', [TemplateController::class, 'all_contact']);
Route::get('/edit-contact/{id}', [TemplateController::class, 'edit_contact']);
Route::patch('/update-contact/{id}', [TemplateController::class, 'update_contact']);
Route::get('/delete-contact/{id}', [TemplateController::class, 'delete_contact']);
Route::post('/all-user', [TemplateController::class, 'all_user']);
Route::post('/save-user', [TemplateController::class, 'save_user']);

Route::get('/edit-user/{id}', [TemplateController::class, 'edit_user']);
Route::patch('/update-user/{id}', [TemplateController::class, 'update_user']);




// company
Route::get('/all-company', [CompanyController::class, 'index']);
Route::get('/edit-company/{id}', [CompanyController::class, 'edit_company']);
Route::patch('/update-company/{id}', [CompanyController::class, 'update_company']);
Route::post('/save-company', [CompanyController::class, 'save_company']);

// project
Route::get('/all-project', [AllProjectController::class, 'index']);
Route::get('/edit-project/{id}', [AllProjectController::class, 'edit_project']);
Route::patch('/update-project/{id}', [AllProjectController::class, 'update_project']);
Route::post('/save-project', [AllProjectController::class, 'save_project']);

// report
Route::get('/all-report', [ReportController::class, 'index']);
Route::get('/edit-report/{id}', [ReportController::class, 'edit_report']);
Route::patch('/update-report/{id}', [ReportController::class, 'update_report']);
Route::post('/save-report', [ReportController::class, 'save_report']);
Route::post('/search-report', [ReportController::class, 'search_report']);
Route::post('/save-ticket', [TicketController::class, 'save_ticket']);
