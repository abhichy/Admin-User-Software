<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $guarded =[];

    public static function update_company_info($request,$id){
        $update = company::find($id);
        $update->name = $request->name;
        $update->email = $request->email;
        $update->project = $request->project;
        $update->detail = $request->detail;
        $update->type = $request->type;
        $update->save();
        return response()->json([
            'status'=>200,
           'update'=>$update 
       ]);
    }
}
