@extends('layouts.auth_alt')
@section('title','Verify Email')
@section('content')
    <h4 class="tx-20 tx-sm-24 tx-center mg-b-10">{{ __('Verify Your Email Address') }}</h4>
    @if (session('resent'))
        <div class="alert alert-success mg-b-10 tx-center" role="alert">
            {{ __('A fresh verification link has been sent to your email address.') }}
        </div>
    @endif
    <div class="tx-center">
        <span>{{ __('Before proceeding, please check your email for a verification link.') }}
            {{ __('If you did not receive the email') }}</span>, <a href="{{ route('verification.resend') }}">{{ __('click here to request another') }}</a>.
    </div>
@endsection
