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
    @csrf
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
