@extends('layouts.auth_alt')
@section('title','Reset Password')
@section('content')
<h4 class="tx-20 tx-sm-24">Reset your password</h4>
<p class="tx-color-03 mg-b-30 tx-center">Enter your New Password</p>
<div class="wd-100p d-flex flex-column mg-b-40">
    <form action="{{ route('password.update') }}" method="POST">
        @csrf
        <div class="form-group">
            <div class="d-flex justify-content-between mg-b-5">
                <label class="mg-b-0-f">Email</label>
            </div>
            <input type="email" name="email" value="{{ $email ?? old('email') }}" required class="form-control @error('email') is-invalid @enderror"
                placeholder="no-reply@example.com">
            @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group">
            <div class="d-flex justify-content-between mg-b-5">
                <label class="mg-b-0-f">New Password</label>
            </div>
            <input type="password" name="password" required class="form-control @error('password') is-invalid @enderror"
                placeholder="Enter your password">
            @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group">
            <div class="d-flex justify-content-between mg-b-5">
                <label for="password_confirm" class="mg-b-0-f">Confirm New Password</label>
            </div>
            <input id="password_confirm" type="password" name="password_confirmation" class="form-control"
                placeholder="Enter your password">
        </div>
        <button type="submit" class="btn btn-brand-02 mg-sm-l-10 mg-t-10 mg-sm-t-0">Reset Password</button>
    </form>
</div>
@endsection

