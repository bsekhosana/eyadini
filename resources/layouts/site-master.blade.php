<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="author" content="Denis Samardjiev" />
    <meta name="description" content="Particles - Personal + Agency Template">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Strap Blaque</title>

    <!-- Royal Preloader CSS -->
{!! Html::style("css/royal_preloader.css") !!}

<!-- jQuery Files -->
{!! Html::script("http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js") !!}

<!-- Parallax File -->
{!! Html::script("js/parallax.min.js") !!}

<!-- Royal Preloader -->
    {!! Html::script("js/royal_preloader.min.js") !!}
    <script type="text/javascript">
        Royal_Preloader.config({
            mode:           'number',
            showProgress:   true,
            background:     '#1d1d1d'
        });
    </script>

    <!-- Stylesheets -->
    {!! Html::style("css/bootstrap.min.css") !!}
    {!! Html::style("css/ionicons.min.css") !!}
    {!! Html::style("css/pe-icon-7-stroke.css") !!}
    {!! Html::style("css/magnific-popup.css") !!}
    {!! Html::style("css/logoiconfont.css") !!}
    {!! Html::style("css/style.css", ["title"=>"main-css"]) !!}

<!-- Style Switcher / remove for production -->
    {!! Html::style("css/style-switcher.css") !!}

    @yield('styles')

</head>
<body class="royal_preloader" data-spy="scroll" data-target=".navbar" data-offset="70">
<div id="royal_preloader"></div>

@yield('header')

@yield('content')

@yield('contact')

@yield('map')

@yield('footer')


<!-- Javascript Files -->
<script type="text/javascript" src="js/bootstrap.min.js"></script>
{!! Html::script("js/particles.min.js") !!}
{!! Html::script("js/particlesRun.js") !!}
{!! Html::script("js/jquery.mixitup.js") !!}
{!! Html::script("js/form-validator.min.js") !!}
{!! Html::script("js/jquery.inview.min.js") !!}
{!! Html::script("js/jquery.countTo.js") !!}
{!! Html::script("js/jquery.magnific-popup.min.js") !!}
{!! Html::script("js/scrollreveal.min.js") !!}
{!! Html::script("js/main.js") !!}

@yield('scripts')

</body>
</html>
