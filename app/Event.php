<?php
/**
 * Created by PhpStorm.
 * User: brunosekhosana
 * Date: 2018/03/21
 * Time: 18:57
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

    public $id;
    public $name;
    public $start_time;
    public $imageUrl;
    public $place;
    public $description;

    protected $fillable = [
        'id', 'name', 'start_time', 'imageUrl', 'description'
    ];


}