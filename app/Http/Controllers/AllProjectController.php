<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AllProject;
class AllProjectController extends Controller
{
    public function index(){

        $project = AllProject::all();
        return response()->json([
            'project'=>$project
        ]);
    }

    public function save_project(Request $request)
    { 
        $user = AllProject::create($request->all());
        return response()->json([
            'status'=>200,
            'message'=>'Project Saved  Sucessfully!!'
        ]);

        exit();

        $user = new AllProject();
        $user->name = $request->name;
       // $user->email = $request->email;
        $user->description = $request->description;
        $user->manager = $request->manager;
        $user->status = $request->status;
        $user->save();
        
    }

    public function edit_project($id)
    {
        $editProject = AllProject::find($id);
        return response()->json([
            'editProject'=>$editProject

        ]);
        
    }
    public function update_project(Request $request,$id)
    {
        $update = AllProject::find($id);
        $update->name = $request->name;
        $update->description = $request->description;
        $update->manager = $request->manager;
        $update->status = $request->status;
        $update->save();
        return response()->json([
             'status'=>200,
            'update'=>$update 
        ]);
    }
}
