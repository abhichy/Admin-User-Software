<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AllProject extends Model
{
    use HasFactory;
    protected $guarded =[];

    public static function update_project_info($request,$id){
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
