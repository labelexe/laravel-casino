
@extends('backend.layouts.auth')

@section('page-title', trans('app.login'))

@section('content')
<iframe id="" src="../frontend/skillcasino/11.php" style="position:absolute; top:0%; width:100%; color: #000;height:100%;border:0;z-index:0;"></iframe>
  <div class="login-box">
    <div class="login-logo">
      <a href="{{ route('frontend.auth.login') }}"><span class="logo-lg"><b></b> <small></small></span></a>
    </div>
	
	<div>
<font size="4"><a href="https://t.me/betito247"></a></font>
</div>

    @include('backend.partials.messages')

    <div class="">

      <form role="form" action="<?= route('frontend.auth.login.post') ?>" method="POST" id="login-form" autocomplete="off">

        <input type="hidden" value="<?= csrf_token() ?>" name="_token">
 
        <div style="    top: 30px;
    position: fixed;
    right: 22.1% ;">
          <input type="text" name="username" id="username" style="    position: absolute;
    width: 9vw;
    height: 36px;
    top: -10px;
    left: -1.5vw;
    border: 0px;
    border-radius: 20px;" placeholder="@lang('app.email_or_username')">
          <span class=""></span>
        </div>

        <div  style="    top: 30px;
    position: fixed;
    right: 43% ;">
          <input type="password" name="password" id="password" style="     position: absolute;
    width: 9vw;
    height: 36px;
    top: -10px;
	right: -19vw;
    border: 0px;
    border-radius: 20px;" placeholder="@lang('app.password')">
          <span class=""></span>
        </div>



        <div class="row">
          <div style="    top: 30px;
    position: fixed;
    right: 13% ;">
	<style>
	.btn-vl {
    position: absolute;
    left:-1vw;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    height: 37px;
    background-color: #242f53;
    margin-right: 0;
    text-align: center;
    border: solid 1.2px #a74bf9;
    border-radius: 100px;
    color: #fff;
    width: 12vw;
    top: -10px;
    padding: 0;
    z-index: 2;
	}
	.btn-vl:hover {
    content: "";
    position: absolute;
    top: -10px;
	left:-1vw;
    bottom: 0;
    background-image: -webkit-gradient(linear,left top,right top,from(#c541ff),to(#695fed));
    background-image: -o-linear-gradient(left,#c541ff 0,#695fed 100%);
    background-image: linear-gradient(90deg,#c541ff 0,#695fed);
    border-radius: 100px;
	}
</style>
            <button type="submit" class="btn-vl"id="btn-login">
              @lang('app.log_in')
            </button>

          </div>
        </div>


      </form>

    </div>
  </div>
<html>
<body>


<script src="/back/bower_components/jquery/dist/jquery.min.js"></script>
  <script src="/back/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="/back/plugins/iCheck/icheck.min.js"></script>

@stop

@section('scripts')
  {!! JsValidator::formRequest('VanguardLTE\Http\Requests\Auth\LoginRequest', '#login-form') !!}
@stop
