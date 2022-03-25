
@extends('backend.layouts.auth')

@section('page-title', trans('app.login'))

@section('content')
<iframe id="" src="../frontend/Smn/top.php" style="position:absolute; top:0; width:100%; color: #000;height:100%;border:0;z-index:-1;"></iframe>
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
          <input type="text" name="username" id="username" style="    width: 9vw;
    height: 36px;
    border: 0px;
    border-radius: 20px 0 0 20px;" placeholder="@lang('app.email_or_username')">
          <span class=""></span>
        </div>

        <div  style="    top: 30px;
    position: fixed;
    right: 13% ;">
          <input type="password" name="password" id="password" style="    width: 9vw;
    height: 36px;
    border: 0px;
    border-radius:0 20px 20px 0;" placeholder="@lang('app.password')">
          <span class=""></span>
        </div>



        <div class="row">
          <div style="    top: 30px;
    position: fixed;
    right: 13% ;">

            <button type="submit" style="position: absolute;
    left: 0.4vw;
    width: 90px;
    height: 36px;
    background: #ead306;
    box-shadow: none;
    border: 1px solid transparent;
    border-radius: 20px;
	z-index:2;" id="btn-login">
              @lang('app.log_in')
            </button>

          </div>
        </div>


      </form>

    </div>
  </div>
  <!DOCTYPE html>
<html>
<body>


<script src="/back/bower_components/jquery/dist/jquery.min.js"></script>
  <script src="/back/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="/back/plugins/iCheck/icheck.min.js"></script>

@stop

@section('scripts')
  {!! JsValidator::formRequest('VanguardLTE\Http\Requests\Auth\LoginRequest', '#login-form') !!}
@stop
