@extends('layouts.client')

@section('title','Client Dashboard')

@section('content')
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
@endsection

@push('script_import')
<script src="{{ asset('custom/lib/jquery.flot/jquery.flot.js') }}"></script>
<script src="{{ asset('custom/lib/jquery.flot/jquery.flot.stack.js') }}"></script>
<script src="{{ asset('custom/lib/jquery.flot/jquery.flot.resize.js') }}"></script>
<script src="{{ asset('custom/lib/chart.js/Chart.bundle.min.js') }}"></script>
<script src="{{ asset('custom/lib/jqvmap/jquery.vmap.min.js') }}"></script>
<script src="{{ asset('custom/lib/jqvmap/maps/jquery.vmap.usa.js')}}"></script>
@endpush

@push('script')
    
@endpush