<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="description" content="Responsive Bootstrap 4 Dashboard Template">
    <meta name="author" content="ThemePixels">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/img/favicon.png">

    <title>@yield('title')</title>

    <!-- vendor css -->
    <link href="{{ asset('custom/lib/@fortawesome/fontawesome-free/css/all.min.css') }}" rel="stylesheet">
    <link href="{{ asset('custom/lib/ionicons/css/ionicons.min.css') }}" rel="stylesheet">

    <!-- DashForge CSS -->
    <link rel="stylesheet" href="{{ asset('custom/css/dashforge.css') }}">
    <link rel="stylesheet" href="{{ asset('custom/css/dashforge.auth.css') }}">
</head>

<body>
    <div class="content content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p">
                <div class="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
                    <div class="mx-lg-wd-500 mx-xl-wd-550">
                        @yield('illustration')
                    </div>
                </div><!-- media-body -->
                @yield('content')
            </div><!-- media -->
        </div><!-- container -->
    </div><!-- content -->
    <footer class="footer">
        <div>
            <span>&copy; 2019 {{config('app.name', 'Laravel')}} </span>
            <span>Created by <a href="http://themepixels.me">ThemePixels</a></span>
        </div>
        <div>
            <nav class="nav">
                <a href="https://themeforest.net/licenses/standard" class="nav-link">Licenses</a>
                <a href="../../change-log.html" class="nav-link">Change Log</a>
                <a href="https://discordapp.com/invite/RYqkVuw" class="nav-link">Get Help</a>
            </nav>
        </div>
    </footer>
    <script src="{{asset('custom/lib/jquery/jquery.min.js')}}"></script>
    <script src="{{ asset('custom/lib/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('custom/lib/feather-icons/feather.min.js') }}"></script>
    <script src="{{ asset('custom/lib/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
    <script src="{{ asset('custom/js/dashforge.js') }}"></script>
</body>

</html>
