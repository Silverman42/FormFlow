@extends('layouts.admin')

@section('title','Admin Dashboard')

@section('content')
<div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
    <div>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-style1 mg-b-10">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        </ol>
        </nav>
        <h4 class="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
    </div>
    <div class="d-none d-md-block">
        <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><i data-feather="file" class="wd-10 mg-r-5"></i> Generate Report</button>
    </div>
    </div>
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