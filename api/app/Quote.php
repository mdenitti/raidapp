<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'quote_number', 'organisations_id', 'contacts_id', 'products_id', 'po_number','price','discount', 'transport','invoice', 'send', 'serviced', 'payed'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    /* public function contacts()
    {
        return $this->belongsToMany('App\Contact');
    } */
}