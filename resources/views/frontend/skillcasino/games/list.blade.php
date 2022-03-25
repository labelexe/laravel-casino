@extends('frontend.skillcasino.layouts.app')
@section('page-title', $title)

@section('content')

		
						@php
							$return = \VanguardLTE\Returns::where('shop_id', Auth::user()->shop_id)->first();
                            $pincodes = \VanguardLTE\Pincode::where(['shop_id' => Auth::user()->shop_id, 'status' => 1, 'activated_at' => null])->count();
							$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => auth()->user()->shop_id, 'time' => date('G'), 'status' => 1])->first();
							if(!$happyhour){
								$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => auth()->user()->shop_id, 'status' => 1])->where('time', '>',date('G'))->first();
							}
							if(!$happyhour){
								$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => auth()->user()->shop_id, 'status' => 1])->first();
							}
						@endphp
  </div>
  <div class="phone-rotate">
    <div class="section"><img src="/frontend/skillcasino/images/rotate.gif" width="403"></div>
  </div>
<link href="../frontend/skillcasino/css/kzr-dd-tronic.css" rel="stylesheet" type="text/css">
  <div class="phone-rotate">
    <div class="section"><img src="/frontend/skillcasino/images/rotate.gif" width="100%"></div>
  </div>

                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
              </div>
             </a>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Not Found</title>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #000;
                color: #636b6f;
               
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
                background-color: #000;
            }

            .code {
                border-right: 2px solid;
                font-size: 26px;
                padding: 0 15px 0 15px;
                text-align: center;
            }

            .message {
                font-size: 18px;
                text-align: center;
            }
        </style>
    </head>

</html>

<!DOCTYPE html>
<html>
<body>


<iframe id="" src="../frontend/skillcasino/top.php" style="position:absolute; width:100%; color: #000;height:100%;border:0;z-index:1;"></iframe>


<script>
function myFunction() {
  var x = document.getElementById("myframe").src;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>






        <div class="div-logo-page"><img src="" width="1" class="image-2"></div>
        <h3 class="footr-down select-game"></h3>
        <div class="footer-slider">
          <div class="div-btn-exit-user">
		  <div>
		  
		  <style>
	.btn-vl {
    position: absolute;
    right: 2vw;
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
    top: 19px;
    padding: 0;
    }
	.btn-vl:hover {
    content: "";
    position: absolute;
    top: 19px;
	right: 2vw
    bottom: 0;
    background-image: -webkit-gradient(linear,left top,right top,from(#c541ff),to(#695fed));
    background-image: -o-linear-gradient(left,#c541ff 0,#695fed 100%);
    background-image: linear-gradient(90deg,#c541ff 0,#695fed);
    border-radius: 100px;
	}
</style>

<div id="txt"class="time"></div>
            <div id="gredit" class="text-gredit"></div>
			<footer class="footer">
		<div class="container">
			<div class="footer__block">
				<div class="footer__left">
					@if ( $return && auth()->user()->present()->count_return > 0 && auth()->user()->present()->balance <= $return->min_balance )
					<a href="#" data-name="modal-bonus" class="gift" id="returns">
					</a>
					@endif
					<div>
					<span style="    right: 22vw;
    position: fixed;
    top: 1vw;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    padding: 7px 15px 7px 15px;
    border: 0;
    border-radius: 25px 0 0 25px;
    color: #ffffff;
	z-index:1;"><em>ID</em> {{ Auth::user()->username }}<br> {{ number_format(Auth::user()->balance, 2,".","") }} <em>@if( auth()->user()->present()->shop )  @endif</em>€
</span>
					</div>
<span style="position: fixed;
    width: 98.9%;
    height: 78px;
    border: none;
    background: #1d2640;
    background-image: url(../frontend/skillcasino/images/logo-footer.png);
    background-repeat: no-repeat;
    background-size: 200px;
    background-position-x: 40px;
    background-position-y: 20px;
    left: 2vw;
    top: -1px;
    left: 0;">		
</div>

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">




          </div>
		  		          </div>
			            <a href="../logout"><div  style="position: fixed;
    right: 2vw;
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
    top: 3%;
    padding: 8px;">Log Out</div></a></div>
				         
					         
		
            </div>


</div>
		
			<html>


</body>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">





    <!--a href="/frontend/Ggslot/allgames.php"><img src="/frontend/Ggslot/images/allgames0.png" class="button"></a></div>
	<a href="/frontend/Ggslot/amatic.php"><img src="/frontend/Ggslot/images/amatic0.png" class="button1"></a></div>
	<a href="/frontend/Ggslot/table.php"><img src="/frontend/Ggslot/images/table0.png" class="button2"></a></div>
	<a href="/frontend/Ggslot/novomatic.php"><img src="/frontend/Ggslot/images/novomatic0.png" class="button4"></a></div>
	<a href="#"><img src="/frontend/Ggslot/images/egt1.png" class="button5"></a></div>
	<a href="/frontend/Ggslot/wazdan.php"><img src="/frontend/Ggslot/images/wazdan0.png" class="button6"></a></div-->

          </div>
		  		          </div>

          <div class="div-main-button-cat-footer">
            <!--div class="div-batton-category"><a href="#" class="link-block w-inline-block"><img src="images/ALL-GAME-3.png" class="btn-all-game img-btn-cat"></a></div>
            <div class="btn-cat-02 div-batton-category"><a href="lobby-page/Ggslot.php" class="w-inline-block"><img src="images/Ggslot-3.png" class="img-btn-cat"></a></div>
            <div class="btn-cat-03 div-batton-category"><a href="lobby-page/novomatic.php" class="w-inline-block"><img src="images/NOVOMATIC-5.png" class="img-btn-cat"></a></div>
            <div class="btn-cat-04 div-batton-category"><a href="lobby-page/netent.php" class="w-inline-block"><img src="images/NETENT-3.png" class="img-btn-cat"></a></div>
            <div class="btn-cat--5 div-batton-category"><a href="lobby-page/gaminator.php" class="w-inline-block"><img src="images/gaminator.png" class="img-btn-cat"></a></div>
            <div class="btn-cat---6 div-batton-category"><a href="lobby-page/slots.php" class="w-inline-block"><img src="images/SLOTS-2.png" class="img-btn-cat"></a></div>
            <div class="btn-cat---7 div-batton-category"><a href="lobby-page/casino.php" class="w-inline-block"><img src="images/CASINO-2.png" class="img-btn-cat"></a></div-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
  <script src="/frontend/skillcasino/js/kzr-dd-tronic.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
  <!-- ///////////////--Footer Code---//////////////////////-- -->


		
		
						
						<!-- GAMES - BEGIN -->
				@if ($games && count($games))
					@foreach ($games as $key=>$game)
 
  
  






						
					@endforeach
				@endif
						<!-- GAMES - BEGIN -->
			
			<!-- SLIDER - END -->
		</div>
	</main>

				

	<!-- /.MAIN -->


@stop
