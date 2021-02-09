<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\contact;
use App\Models\User;
use DB;
class TemplateController extends Controller
{
    public function ind1(){
        return view('FrontEnd.home');
    }

    public function createTask(Request $req){
        return view('FrontEnd.task.newTask ');

    }


    public function save_contact(Request $request)
    {
        $addContact = new contact();
        $addContact->full_name = $request->full_name;
        $addContact->Email = $request->email;
        $addContact->Phone = $request->phone;
        $addContact->save();

        $allContact = contact::all();

        return response()->json([
            'status'=>200,
            'message'=>"Contact Saved Succesfully!!",
            'addContact'=>$addContact,
            "all" => $allContact,
        ]);
    }


    public function all_contact(){
        $allContact = contact::all();

        return response()->json([
            'allContact'=>$allContact,
        ]);

    }

    public function edit_contact($id)
    {
        $editContact = contact::find($id);
        return response()->json([
            'editContact'=>$editContact

        ]);

    }

    public function update_contact(Request $request,$id)
    {
        $update = contact::find($id);
        $update->full_name = $request->full_name;
        $update->Email = $request->Email;
        $update->Phone = $request->Phone;
        $update->save();
        return response()->json([
             'status'=>200,
            'update'=>$update
        ]);
    }

    public function delete_contact($id)
    {
        $delete = contact::find($id);
        $delete->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Contact Delete Sucessfully!!'
        ]);
    }

    public function all_user(Request $request)
    {
        // $user = DB::table('users')->get();
        // return $request->all();
        // exit();
        $name = $request->name;
        $email = $request->email;
        $company = $request->company;
        $productReport = User::query()
            ->where(function ($filter) use ($name, $email, $company) {
                if (!empty($name)) {
                    $filter->where('name', '=', $name);
                }
                if (!empty($email)) {
                    $filter->where('email', '=', $email);
                }
                if (!empty($company)) {
                    $filter->where('company', '=', $company);
                }
            })->orderBy('id', 'desc')->get();
        return response()->json([
            'status'=>200,
            'productReport'=>$productReport
        ]);
    }


    public function save_user(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->company = $request->company;
        $user->save();
        return response()->json([
            'status'=>200,
            'message'=>'User Saved  Sucessfully!!'
        ]);
    }

    public function edit_user($id)
    {
        $editUser = User::find($id);
        return response()->json([
            'editUser'=>$editUser

        ]);

    }


    public function update_user(Request $request,$id)
    {
        $update = user::find($id);
        $update->name = $request->name;
        $update->email = $request->email;
        $update->company = $request->company;
        $update->save();
        return response()->json([
             'status'=>200,
            'update'=>$update
        ]);
    }

    // public function all_company(Request $request)
    // {
    //     // $user = DB::table('users')->get();
    //     // return $request->all();
    //     // exit();
    //     $name = $request->name;
    //     $email = $request->email;
    //     $project = $request->project;
    //     $detail = $request->detail;
    //     $productReport = Company::query()
    //         ->where(function ($filter) use ($name, $email, $project,$detail) {
    //             if (!empty($name)) {
    //                 $filter->where('name', '=', $name);
    //             }
    //             if (!empty($email)) {
    //                 $filter->where('email', '=', $email);
    //             }
    //             if (!empty($project)) {
    //                 $filter->where('project', '=', $project);
    //             }
    //             if (!empty($detail)) {
    //                 $filter->where('detail', '=', $detail);
    //             }
    //         })->orderBy('id', 'desc')->get();
    //     return response()->json([
    //         'status'=>200,
    //         'productReport'=>$productReport
    //     ]);
    // }




    public function edit_company($id)
    {
        $editCompany = Company::find($id);
        return response()->json([
            'editCompany'=>$editCompany

        ]);

    }


    public function update_company(Request $request,$id)
    {
        $update = company::find($id);
        $update->name = $request->name;
        $update->email = $request->email;
        $update->project = $request->project;
        $update->detail = $request->detail;
        $update->save();
        return response()->json([
             'status'=>200,
            'update'=>$update
        ]);
    }


}
