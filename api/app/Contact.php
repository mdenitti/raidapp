<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'telephone', 'mail', 'last_contacted'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function organsisation()
    {
        return $this->belongsToMany('App\Organisation');
    }
}