<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Session;
class LoginController extends Controller
{
    

    public function login_form(){
        return view('Admin.login');
    }

    public function login(Request $request)
    {   
        $admin = Admin::where('email', $request->email)->first();
        if ($admin) {
            if (password_verify($request->password, $admin->password)) {
        
                    Session::put('admin_id', $admin->id);
                    Session::put('admin_email', $admin->email);
                    return redirect('/task/createTask');
            
            } else {
                return redirect('/')->with('message', 'Wrong Password!!');
            }
        } else {
            return redirect('/')->with('message', 'Invalid email!!');
        }
    }


    public function dashboard()
    {
        return "hello dashboard";
    }


    public function register_form()
    {
        return view('Admin.register');
    }

    public function register(Request $request)
    {
        // $this->validate($request, [
        //     'full_name' => 'required',
        //     'email' => 'required|unique:clients',
        //     'contact_no' => 'required',
        //     'password' => 'required'
        // ]);

        $client = new Admin();
        $client->email = $request->email;
        $client->password = bcrypt($request->password);
        $client->save();
        return redirect('admin-login')->with("message","Registration Complete!!");
    }

    public function logout()
    {
        Session::forget('admin_id');
        Session::forget('admin_email');
        return redirect('/')->with('message','Logout Successfully!!');

    }
}
