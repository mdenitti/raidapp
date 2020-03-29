<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organisation extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'organisation', 'street', 'number', 'postalcode', 'city','btwnr','last_assignment'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function contacts()
    {
        return $this->belongsToMany('App\Contact');
    }
}