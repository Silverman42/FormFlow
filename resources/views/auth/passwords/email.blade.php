@extends('layouts.auth_alt')
@section('title','Send Reset Link')
@section('content')
<h4 class="tx-20 tx-sm-24 mg-b-10">Reset your password</h4>
@if (session('status'))
    <div class="alert alert-success mg-b-10" role="alert">
        {{ session('status') }}
    </div>
@endif
<p class="tx-color-03 mg-b-30 tx-center">Enter your email address and we will send you a link to reset your
    password.</p>
<form method="POST" class="wd-100p" action="{{ route('password.email') }}">
    <div class="wd-100p d-flex flex-column mg-b-40">
        <div class="form-group">
            <div class="d-flex justify-content-between mg-b-5">
                <label for="email" class="mg-b-0-f">Email</label>
            </div>
            <input type="text" id="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="no-reply@example.com">
            @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <button class="btn btn-brand-02 mg-t-10 btn-block">Reset Password</button>
    </div>
</form>

@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Reset Password') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Send Password Reset Link') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
