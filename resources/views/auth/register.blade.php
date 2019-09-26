@extends('layouts.auth')

@section('title','Sign Up')

@section('illustration')
<img src="https://via.placeholder.com/1260x950" class="img-fluid" alt="">
@endsection

@section('content')
<div class="sign-wrapper mg-lg-l-50 mg-xl-l-60">
    <form method="POST" action="{{ route('register') }}">
        @csrf
        <div class="pd-t-20 wd-100p">
            <h4 class="tx-color-01 mg-b-5">Create New Account</h4>
            <p class="tx-color-03 tx-16 mg-b-40">It's free to signup and only takes a minute.</p>
            <div class="d-flex justify-content-between">
                <div class="form-group wd-45p">
                    <label for="first_name">Firstname</label>
                    <input type="text" required id="first_name" name="first_name"
                        class="form-control @error('first_name') is-invalid @enderror"
                        placeholder="Enter your firstname">
                    @error('first_name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group wd-45p">
                    <label for="last_name">Lastname</label>
                    <input type="text" required id="last_name" name="last_name"
                        class="form-control @error('last_name') is-invalid @enderror" placeholder="Enter your lastname">
                    @error('last_name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" id="email" required class="form-control @error('email') is-invalid @enderror" name="email"
                    placeholder="Enter your email address">
                @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
            <div class="form-group">
                <div class="d-flex justify-content-between mg-b-5">
                    <label class="mg-b-0-f">Password</label>
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
                    <label for="password_confirm" class="mg-b-0-f">Confirm Password</label>
                </div>
                <input id="password_confirm" type="password" name="password_confirmation" class="form-control"
                    placeholder="Enter your password">
            </div>

            <div class="form-group tx-12">
                By clicking <strong>Create an account</strong> below, you agree to our terms of service and privacy
                statement.
            </div><!-- form-group -->

            <button type="submit" class="btn btn-brand-02 btn-block">Create Account</button>
            <!-- Social Sign Up
            <div class="divider-text">or</div>
            <button class="btn btn-outline-facebook btn-block">Sign Up With Facebook</button>
            <button class="btn btn-outline-twitter btn-block">Sign Up With Twitter</button>
            -->
            <div class="tx-13 mg-t-20 tx-center">Already have an account? <a href="{{ route('login') }}">Sign In</a></div>
        </div>
    </form>
</div><!-- sign-wrapper -->
@endsection
