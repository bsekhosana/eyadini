<?php
/**
 * Created by PhpStorm.
 * User: brunosekhosana
 * Date: 2018/03/21
 * Time: 18:56
 */

namespace App;

use Illuminate\Database\Eloquent\Model;


class Album extends Model
{

    public $id;
    public $name;
    public $created_time;
    public $pictureUrl;

    protected $fillable = [
        'id', 'name', 'created_time', 'pictureUrl'
    ];


}