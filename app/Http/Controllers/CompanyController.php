<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\AllProject;
use DB;
class CompanyController extends Controller
{
    public function index(){

        // $company = Company::all();
        $company = DB::table('companies')
            ->join('all_projects','companies.project_id','all_projects.id')
            ->select('companies.*','all_projects.name as project_name')
            ->get();
            
        $allproject = AllProject::all();

        return response()->json([
            'company'=>$company,
            'allproject'=>$allproject
        ]);
    }

    public function save_company(Request $request)
    { 
        $user = Company::create($request->all());
        return response()->json([
            'status'=>200,
            'message'=>'Company Saved  Sucessfully!!'
        ]);

        exit();

        $user = new Company();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->project = $request->project;
        $user->detail = $request->detail;
        $user->type = $request->type;
        $user->save();
        
    }

    public function edit_company($id)
    {
        $editCompany = Company::find($id);
        $allproject = AllProject::all();

        return response()->json([
            'editCompany'=>$editCompany,
            'allproject'=>$allproject

        ]);
        
    }
    public function update_company(Request $request,$id)
    {
        $update = company::find($id);
        $update->name = $request->name;
        $update->email = $request->email;
        $update->project_id = $request->project_id;
        $update->detail = $request->detail;
        $update->type = $request->type;
        $update->save();
        return response()->json([
             'status'=>200,
            'update'=>$update 
        ]);
    }


}
