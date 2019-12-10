<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Twitter -->
    <meta name="twitter:site" content="{{config('app.name')}}">
    <meta name="twitter:creator" content="Nkeze Sylvester">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!--Social Media Meta tags
        <meta name="twitter:title" content="DashForge">
        <meta name="twitter:description" content="Responsive Bootstrap 4 Dashboard Template">
        <meta name="twitter:image" content="">
    
        <meta property="og:url" content="http://themepixels.me/dashforge">
        <meta property="og:title" content="DashForge">
        <meta property="og:description" content="Responsive Bootstrap 4 Dashboard Template">
    
        <meta property="og:image" content="http://themepixels.me/dashforge/img/dashforge-social.png">
        <meta property="og:image:secure_url" content="http://themepixels.me/dashforge/img/dashforge-social.png">
        <meta property="og:image:type" content="image/png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="600">

        <meta name="description" content="Responsive Bootstrap 4 Dashboard Template">
        -->

    <!-- Meta -->
    @stack('meta')
    <meta name="author" content="Nkeze Sylvester">

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/img/favicon.png">

    <title> @yield('title', 'Default Title') </title>

    <!-- vendor css -->
    <link href="{{asset('custom/lib/jqvmap/jqvmap.min.css')}}" rel="stylesheet">

    <!-- DashForge CSS -->
    <link rel="stylesheet" href="{{asset('custom/css/dashforge.css') }}">
    <link rel="stylesheet" href="{{asset('custom/css/dashforge.dashboard.css') }}">
    <link rel="stylesheet" href="{{mix('css/app.css') }}">
</head>

<body class="page-profile">
    <div id="client">
        <header class="navbar navbar-header navbar-header-fixed">
            <a href="" id="mainMenuOpen" class="burger-menu"><i data-feather="menu"></i></a>
            <div class="navbar-brand">
                <a href="../../index.html" class="df-logo">dash<span>forge</span></a>
            </div><!-- navbar-brand -->
            <div id="navbarMenu" class="navbar-menu-wrapper">
                <div class="navbar-menu-header">
                    <a href="../../index.html" class="df-logo">dash<span>forge</span></a>
                    <a id="mainMenuClose" href=""><i data-feather="x"></i></a>
                </div><!-- navbar-menu-header -->
                <ul class="nav navbar-menu" id="navbarMenu">
                    <li class="nav-label pd-l-20 pd-lg-l-25 d-lg-none">Main Navigation</li>

                    <router-link tag="li" :to='{path: "/home"}' active-class="active" class="nav-item"><a  class="nav-link"><i data-feather="box"></i>
                            Dashboard</a></router-link>
                    <router-link tag="li" :to='{path: "/forms"}' active-class="active" class="nav-item"><a  class="nav-link"><i data-feather="archive"></i>
                            Forms</a></router-link>
                    <router-link tag="li" :to='{path: "/integrations"}' active-class="active" class="nav-item"><a href="#" class="nav-link"><i data-feather="refresh-ccw"></i>
                            Integrations</a></router-link>
                    <router-link tag="li" :to='{path: "/balance"}' active-class="active" class="nav-item"><a href="#" class="nav-link"><i data-feather="dollar-sign"></i>
                            Balance</a></router-link>
                </ul>
            </div><!-- navbar-menu-wrapper -->
            <div class="navbar-right">
                <a id="navbarSearch" href="" class="search-link"><i data-feather="search"></i></a>
                <div class="dropdown dropdown-message custom-dropdown">
                    <a href="" class="dropdown-link new-indicator" data-toggle="dropdown">
                        <i data-feather="message-square"></i>
                        <span>5</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-header">New Messages</div>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/350"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <strong>Socrates Itumay</strong>
                                    <p>nam libero tempore cum so...</p>
                                    <span>Mar 15 12:32pm</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <strong>Joyce Chua</strong>
                                    <p>on the other hand we denounce...</p>
                                    <span>Mar 13 04:16am</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/600"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <strong>Althea Cabardo</strong>
                                    <p>is there anyone who loves...</p>
                                    <span>Mar 13 02:56am</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <strong>Adrian Monino</strong>
                                    <p>duis aute irure dolor in repre...</p>
                                    <span>Mar 12 10:40pm</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <div class="dropdown-footer"><a href="">View all Messages</a></div>
                    </div><!-- dropdown-menu -->
                </div><!-- dropdown -->
                <div class="dropdown dropdown-notification custom-dropdown">
                    <a href="" class="dropdown-link new-indicator" data-toggle="dropdown">
                        <i data-feather="bell"></i>
                        <span>2</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-header">Notifications</div>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/350"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                                    <span>Mar 15 12:32pm</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <p><strong>Joyce Chua</strong> just created a new blog post</p>
                                    <span>Mar 13 04:16am</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/600"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                                    <span>Mar 13 02:56am</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <a href="" class="dropdown-item">
                            <div class="media">
                                <div class="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                                        class="rounded-circle" alt=""></div>
                                <div class="media-body mg-l-15">
                                    <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                                    <span>Mar 12 10:40pm</span>
                                </div><!-- media-body -->
                            </div><!-- media -->
                        </a>
                        <div class="dropdown-footer"><a href="">View all Notifications</a></div>
                    </div><!-- dropdown-menu -->
                </div><!-- dropdown -->
                <div class="dropdown dropdown-profile custom-dropdown">
                    <a href="" class="dropdown-link" data-toggle="dropdown" data-display="static">
                        <div class="avatar avatar-sm"><img src="https://via.placeholder.com/500" class="rounded-circle"
                                alt=""></div>
                    </a><!-- dropdown-link -->
                    <div class="dropdown-menu dropdown-menu-right tx-13">
                        <div class="avatar avatar-lg mg-b-15"><img src="https://via.placeholder.com/500"
                                class="rounded-circle" alt=""></div>
                        <h6 class="tx-semibold mg-b-5">{{auth()->user()->first_name}}&nbsp;{{auth()->user()->last_name}}
                        </h6>
                        <p class="mg-b-25 tx-12 tx-color-03">Administrator</p>

                        <a href="" class="dropdown-item"><i data-feather="edit-3"></i> Edit Profile</a>
                        <a href="page-profile-view.html" class="dropdown-item"><i data-feather="user"></i> View
                            Profile</a>
                        <div class="dropdown-divider"></div>
                        <a href="page-help-center.html" class="dropdown-item"><i data-feather="help-circle"></i> Help
                            Center</a>
                        <a href="" class="dropdown-item"><i data-feather="life-buoy"></i> Forum</a>
                        <a href="" class="dropdown-item"><i data-feather="settings"></i>Account Settings</a>
                        <a href="" class="dropdown-item"><i data-feather="settings"></i>Privacy Settings</a>
                        <form action="{{route('logout')}}" method="post">
                            @csrf
                            <button class="btn btn-block btn-primary mg-t-5" type="submit"><i
                                    data-feather="log-out"></i>&nbsp; Sign Out</button>
                        </form>
                    </div><!-- dropdown-menu -->
                </div><!-- dropdown -->
            </div><!-- navbar-right -->
            <div class="navbar-search">
                <div class="navbar-search-header">
                    <input type="search" class="form-control" placeholder="Type and hit enter to search...">
                    <button class="btn"><i data-feather="search"></i></button>
                    <a id="navbarSearchClose" href="" class="link-03 mg-l-5 mg-lg-l-10"><i data-feather="x"></i></a>
                </div><!-- navbar-search-header -->
                <div class="navbar-search-body">
                    <label
                        class="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">Recent
                        Searches</label>
                    <ul class="list-unstyled">
                        <li><a href="dashboard-one.html">modern dashboard</a></li>
                        <li><a href="app-calendar.html">calendar app</a></li>
                        <li><a href="../../collections/modal.html">modal examples</a></li>
                        <li><a href="../../components/el-avatar.html">avatar</a></li>
                    </ul>

                    <hr class="mg-y-30 bd-0">

                    <label
                        class="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">Search
                        Suggestions</label>

                    <ul class="list-unstyled">
                        <li><a href="dashboard-one.html">cryptocurrency</a></li>
                        <li><a href="app-calendar.html">button groups</a></li>
                        <li><a href="../../collections/modal.html">form elements</a></li>
                        <li><a href="../../components/el-avatar.html">contact app</a></li>
                    </ul>
                </div><!-- navbar-search-body -->
            </div><!-- navbar-search -->
        </header><!-- navbar -->

        <!--Content Start-->
        <div class="content content-fixed" style="min-height: 100vh">
            <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                @yield('content')
            </div>
        </div>

        <!--footer-->
        <footer class="footer">
            <div>
                <span>&copy; 2019 {{config('app.name')}} </span>
                <span>Created with &nbsp; <i class=" text-primary" data-feather="heart"></i> &nbsp; by <a href="http://silverman42.github.io">Nkeze Sylvester</a></span>
            </div>
            <div>
                <nav class="nav">
                    <a href="https://themeforest.net/licenses/standard" class="nav-link">Licenses</a>
                    <a href="../../change-log.html" class="nav-link">Change Log</a>
                    <a href="https://discordapp.com/invite/RYqkVuw" class="nav-link">Get Help</a>
                </nav>
            </div>
        </footer>
    </div>

    <script src="{{asset('custom/lib/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('custom/lib/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('custom/lib/feather-icons/feather.min.js')}}"></script>
    <script src="{{asset('custom/lib/perfect-scrollbar/perfect-scrollbar.min.js')}}"></script>
    @stack('script_import')
    <script src="{{ asset('custom/js/dashforge.js')}}"></script>
    <script src="{{asset('custom/js/dashforge.sampledata.js')}}"></script>
    @stack('script')
    <script src="{{mix('js/client.js') }}"></script>
</body>

</html>
