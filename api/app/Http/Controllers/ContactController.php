<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

    public function showAllContacts()
    {
        return response()->json(Contact::all());
    }

    public function showOneContact($id)
    {
        return response()->json(Contact::find($id));
    }

    public function create(Request $request)
    {
        //dd($request->organisation);
        $contact = Contact::create($request->all())->organisations()->attach($request->organisation);

        return response()->json($contact, 201);
    }

    public function update($id, Request $request)
    {
        $contact = Contact::findOrFail($id);
        $contact->update($request->all());

        return response()->json($contact, 200);
    }

    public function delete($id)
    {
        Contact::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}