<?php

namespace App\Http\Controllers;

use App\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{

    public function showAllQuotes()
    {
        return response()->json(Quote::all());
    }

    public function showOneQuote($id)
    {
        return response()->json(Quote::find($id));
    }

    public function create(Request $request)
    {
        $quote = Quote::create($request->all());

        return response()->json($quote, 201);
    }

    public function update($id, Request $request)
    {
        $quote = Quote::findOrFail($id);
        $quote->update($request->all());

        return response()->json($quote, 200);
    }

    public function delete($id)
    {
        Quote::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}