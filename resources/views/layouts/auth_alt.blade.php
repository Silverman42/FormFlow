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
    <div class="content content-auth-alt">
        <div class="container d-flex justify-content-center ht-100p">
          <div class="mx-wd-300 wd-sm-450 ht-100p d-flex flex-column align-items-center justify-content-center">
            <div class="wd-80p wd-sm-300 mg-b-15"><img src="https://via.placeholder.com/2083x1466" class="img-fluid" alt=""></div>
            @yield('content') 
          </div>
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
