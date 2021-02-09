<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\Admin\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});
*/

// Route::get('/','TemplateController@index');
Route::get('/dashboard', [TemplateController::class, 'ind1']);
Route::get('/task/createTask', [TemplateController::class, 'createTask']);


 //Route::resource("/contact", "contactController");

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/', [LoginController::class, 'login_form'])->name('login-form');
Route::post('/admin-login', [LoginController::class, 'login'])->name('admin-login');
Route::get('/admin-dashboard', [LoginController::class, 'dashboard'])->name('admin-dashboard');

Route::get('/admin-register', [LoginController::class, 'register_form'])->name('register');
Route::post('/admin-register', [LoginController::class, 'register'])->name('admin-register');
Route::get('/admin-logout', [LoginController::class, 'logout'])->name('admin-logout');



Route::get('{ReactRoutePath}', function ()
{
    return view('FrontEnd.task.newTask');
    //return redirect('/task/createTask');
})->where("ReactRoutePath",".*");
