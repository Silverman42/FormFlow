@extends('layouts.auth')

@section('title','Login')

@section('illustration')
<img src="https://via.placeholder.com/1260x950" class="img-fluid" alt="">
@endsection

@section('content')
<div class="sign-wrapper mg-lg-l-50 mg-xl-l-60">
    <div class="wd-100p">
        <h3 class="tx-color-01 mg-b-5">Sign In</h3>
        <p class="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="form-group">
                <label>Email address</label>
                <input type="email" required name="email" class="form-control @error('email') is-invalid @enderror" placeholder="yourname@yourmail.com">
                @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
            <div class="form-group">
                <div class="d-flex justify-content-between mg-b-5">
                    <label class="mg-b-0-f">Password</label>
                    @if (Route::has('password.request'))
                    <a href="{{route('password.request')}}" class="tx-13">Forgot password?</a>
                    @endif
                </div>
                <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" placeholder="Enter your password">
                @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
            <div class="form-group row">
                <div class="col-md-6">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember"
                            {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-brand-02 btn-block">Sign In</button>
        </form>
        <!-- Social Login
        <div class="divider-text">or</div>
        <button class="btn btn-outline-facebook btn-block">Sign In With Facebook</button>
        <button class="btn btn-outline-twitter btn-block">Sign In With Twitter</button>
        -->
        <div class="tx-13 mg-t-20 tx-center">Don't have an account? <a href="{{ route('register') }}">Create an Account</a>
        </div>

    </div>
</div>
@endsection
