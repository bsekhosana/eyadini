<?php

namespace App\Http\Controllers;

use App\Album;
use App\Event;
use App\Http\Requests;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use App\FacebookFeed;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;


class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = new Client();
//        $request = new \GuzzleHttp\Psr7\Request('GET', 'https://graph.facebook.com/eyadini?fields=access_token&access_token=564202827266707|a142d6093609903a733d60797255520f');
//        $promise = $client->sendAsync($request)->then(function ($response) {
//            $feed = json_decode($response->getBody(), true);
//            $pageAccessToken= collect($feed)->first();
//
//            dd($pageAccessToken);
//
//            $client1 = new Client();
//            $request2 = new \GuzzleHttp\Psr7\Request('GET', 'https://graph.facebook.com/eyadini/ratings?access_token='.$pageAccessToken);
//            $promise2 = $client1->sendAsync($request2)->then(function ($response) {
//                $events = json_decode($response->getBody(), true);
//                $reviewsArray= collect($events)->first();
//
//                dd($reviewsArray);
//            });
//            $promise2->wait();
//
////            $facebookFeeds = array();
////            foreach ($feedArray as $singleFeed) {
////                    $facebookFeed = new FacebookFeed();
////                    $facebookFeed->id = $singleFeed["id"];
////                    $facebookFeed->created_time = $singleFeed["created_time"];
////                    if (!empty($singleFeed["message"])) {
////                        $facebookFeed->story = $singleFeed["message"];
////                    }
////
////                    if (!empty($singleFeed["attachments"])) {
////                        $attachment = collect($singleFeed["attachments"])->first();
////                        $facebookFeed->imageSource = collect(collect(collect($attachment)[0])->first())->first()["src"];
////                    }
////                    if ($facebookFeed != null) {
////                        array_push($facebookFeeds, $facebookFeed);
////                    }
////
////            }
////
////            Session::put('facebookFeed', $facebookFeeds);
//
//
//
//        });
//        $promise->wait();


//        $request1 = new \GuzzleHttp\Psr7\Request('GET', 'https://graph.facebook.com/eyadini/albums?access_token=564202827266707|a142d6093609903a733d60797255520f&fields=created_time,picture,cover_photo,name');
//        $promise1 = $client->sendAsync($request1)->then(function ($response) {
//            $albums = json_decode($response->getBody(), true);
//            $albumsArray= collect($albums)->first();
//            $allAlbums = array();
//            foreach ($albumsArray as $singleAlbum) {
//                $album = new Album();
//                $album->id = $singleAlbum["id"];
//                $album->created_time = $singleAlbum["created_time"];
//                if (!empty($singleFeed["name"])) {
//                    $album->name = $singleAlbum["name"];
//                }
//
//                if (!empty($singleAlbum["picture"])) {
//                    $picture = collect($singleAlbum["picture"])->first();
//                    $album->pictureUrl = collect($picture)["url"];
//                }
//                if ($album != null) {
//                    array_push($allAlbums, $album);
//                }
//
//            }
//
//            Session::put('allAlbums', $allAlbums);
//
//        });
//        $promise1->wait();

        $request2 = new \GuzzleHttp\Psr7\Request('GET', 'https://graph.facebook.com/eyadini/events?access_token=564202827266707|a142d6093609903a733d60797255520f&fields=start_time,place,cover,name,description&limit=4');
        $promise2 = $client->sendAsync($request2)->then(function ($response) {
            $events = json_decode($response->getBody(), true);
            $ventsArray= collect($events)->first();
            $allEvents = array();
            foreach ($ventsArray as $singleEvent) {
                $event = new Event();
                $event->id = $singleEvent["id"];
                $event->start_time = $singleEvent["start_time"];
                $event->place = $singleEvent["place"]['name'];
                $event->name = $singleEvent["name"];

                if (!empty($singleEvent["description"])){
                    $event->description = $singleEvent["description"];
                }

                $event->imageUrl = collect($singleEvent["cover"])["source"];
                if ($event != null) {
                    array_push($allEvents, $event);
                }

            }

            Session::put('allEvents', $allEvents);

        });
        $promise2->wait();

        return view('home');
    }





}