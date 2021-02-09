<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
class contactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return response()->json(['status' => 200, 'contacts' => $contacts]);
    }

    public function edit($id)
    {
        $contact = Contact::find($id);
        return response()->json(['status' => 200, 'contact' => $contact]);
    }
    
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->fullName = $request->fullName;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        if($contact->save()){
            return response()->json(['status' => 200]);
        } 
    }

    public function store(Request $request)
    {
        $newContact = Contact::create([
           'Full Name' => $request->fullName,
           'email' => $request->email,
           'phone' => $request->phone
        ]);
        if($newContact){
            return response()->json(['status' => 200]);
        }
    }
    
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if($contact->delete()){
            return response()->json(['status' => 200]);
        }
    }


}

  
