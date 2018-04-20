<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FacebookFeed extends Model
{
    //


    public $id;
    public $story;
    public $created_time;
    public $imageSource;

    protected $fillable = [
        'id', 'story', 'created_time', 'imageSource', 'place'
    ];

}
