<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;

class ReportController extends Controller
{
    public function index(){

        $report = Report::all();
        return response()->json([
            'report'=>$report
        ]);
    }

    public function save_report(Request $request)
    { 
        $user = Report::create($request->all());
        return response()->json([
            'status'=>200,
            'message'=>'Report Saved  Sucessfully!!'
        ]);

        exit();

        //$user = new AllReport();
       // $user->name = $request->name;
       // $user->email = $request->email;
       // $user->description = $request->description;
        //$user->manager = $request->manager;
        //$user->status = $request->status;
        //$user->save();
        
    }

    public function edit_report($id)
    {
        $editReport = Report::find($id);
        return response()->json([
            'editReport'=>$editReport

        ]);
        
    }
    public function update_report(Request $request,$id)
    {
        $update = Report::find($id);
        $update->date = $request->date;
        $update->name = $request->name;
        $update->title = $request->title;
        $update->description = $request->description;
        $update->save();
        return response()->json([
             'status'=>200,
            'update'=>$update 
        ]);
    }


    public function search_report(Request $request)
    {
        $name = $request->name;
        $start = date($request->start_date);
        $end = date($request->end_date);

        $reports = Report::query()
            ->where(function ($filter) use ($start, $end, $name) {
                if (!empty($name)) {
                    $filter->where('name',$name);
                }
                if (!empty($start) && !empty($end)) {
                    $filter->whereBetween('created_at', [$start, $end]);
                }

            })->get();

        return response()->json([
            'status' => 200,
            'reports' => $reports,
        ]);
    }
}
