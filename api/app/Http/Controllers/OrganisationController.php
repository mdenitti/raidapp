<?php

namespace App\Http\Controllers;

use App\Organisation;
use Illuminate\Http\Request;

class OrganisationController extends Controller
{

    public function showAllOrganisations()
    {
        return response()->json(Organisation::all());
    }

    public function showOneOrganisation($id)
    {
        return response()->json(Organisation::find($id));
    }

    public function create(Request $request)
    {
        $organisation = Organisation::create($request->all());

        return response()->json($organisation, 201);
    }

    public function update($id, Request $request)
    {
        $organisation = Organisation::findOrFail($id);
        $organisation->update($request->all());

        return response()->json($organisation, 200);
    }

    public function delete($id)
    {
        Organisation::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}