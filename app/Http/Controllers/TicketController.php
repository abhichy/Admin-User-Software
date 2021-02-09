<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use Image;
class TicketController extends Controller
{

    public function save_ticket(Request $request)
    {
        $strpos = strpos($request->image, ';');
        $sub = substr($request->image, 0, $strpos);
        $Ex = explode('/', $sub)[1];
        $name = time() . "." . $Ex;
        $img = Image::make($request->image)->resize(300, 200);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);

        $ticket = new Ticket();
        // $ticket->type_id = $request->type_id;
        $ticket->company_id = $request->company_id;
        $ticket->subject = $request->subject;
        $ticket->description = $request->description;
        $ticket->image = $name;
        $ticket->save();

        return response()->json([
            'status' => 200,
            'message' => "Ticket Saved Successfully!!",
        ]);
    }
}
