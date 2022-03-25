@extends('frontend.Amatic.layouts.app')
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
						
						
						



		
		
		
		
						
						<!-- GAMES - BEGIN -->
				@if ($games && count($games))
					@foreach ($games as $key=>$game)
 
  
 

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb" lang="en-gb" slick-uniqueid="3">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
		
	<title>Lobby</title>
	<meta name="description" content="AdmiralGames++ :: AdmiralGames++ ">
	<meta name="keywords" content="AdmiralGames++ :: AdmiralGames++ ">
	<meta name="robots" content="all">
	<meta name="revisit-after" content="1 days">
    <meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="shortcut icon" href="../frontend/BMultyGame/template/images/favicon.png" type="image/x-icon">
    <link rel="icon" href="../frontend/BMultyGame/template/images/favicon.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800" rel="stylesheet">
	
	<link rel="stylesheet" href="../frontend/BMultyGame/template/style.css" type="text/css">
	<link rel="stylesheet" href="../frontend/BMultyGame/template/hmb.css" type="text/css">
	<link rel="stylesheet" href="../frontend/BMultyGame/template/jp.css" type="text/css">
	<style>
      #game_pixel {
        width: 2px;
        height: 2px;
        top: 0px;
        right: 0px;
        display: none;
        position: absolute;
        z-index: 10000;
        background-color: green;
      }
   </style>
 <script type="text/javascript" src="../frontend/BMultyGame/js/device.min.js"></script>
	<script type="text/javascript" src="../frontend/BMultyGame/js/jquery.min.js"></script>
	<script type="text/javascript" src="../frontend/BMultyGame/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="../frontend/BMultyGame/js/jackpot.js"></script>
	<script type="text/javascript" src="../frontend/BMultyGame/js/functions.js?346346"></script>
	<script type="text/javascript" src="../frontend/BMultyGame/js/config.js?346346"></script>
	<script type="text/javascript" src="../frontend/BMultyGame/js/code.js"></script>
</head>
<body>   
<img src="../frontend/BMultyGame/template/images/body_games.png" style="display: none;">  

<div id="game_pixel"></div>
<div id="divFon" style="
         display:none;
         position:fixed;
         margin:0;
         padding:0;
         top:0;
         left:0;
         z-index:999;
         background-color:#000;
         width:100%;
         height:100%; 
         opacity: 0.7;
         filter: alpha(Opacity=70);
         "></div>
      <script type="text/javascript">
         var DIGITS = {
                  0:"-522", 
                  1:"-464", 
                  2:"-406",
                  3:"-348",
                  4:"-290",
                  5:"-232",
                  6:"-174",
                  7:"-116",
                  8:"-58",
                  9:"0"
                };
      </script>

      
      <div id="DIVjackpotWin" class="resize">
         <div id="jp_bar1">
            <div class="jp jp_bronze" id="jpType">
               <div class="digits">
                  <div class="jpdigitsbox">
                     <div class="jpdigits" id="digits_10"></div>
                     <div class="jpdigits" id="digits_9"></div>
                     <div class="jpdigits" id="digits_8"></div>
                     <div class="jpdigits" id="digits_7"></div>
                     <div class="jpdigits" id="digits_6"></div>
                     <div class="jpdigits" id="digits_5"></div>
                     <div class="jpdigits" id="digits_4"></div>
                     <div class="jpdigits" id="digits_3"></div>
                     <div class="sss"></div>
                     <div class="jpdigits" id="digits_2"></div>
                     <div class="jpdigits" id="digits_1"></div>
                  </div>
               </div>
            </div>
              <center>
                 <a href="#" onclick="DIVjackpotWinClose()">
                    <img src="../frontend/BMultyGame/template/images/jackpot_close.png" class="jackpot_close">
                 </a>
              </center>
         </div>
      </div>   
<div id="body" class="resize">



</div>

<iframe id="lobbyHover" style="display:none;position:absolute; border:0px; width:100%;height:100%;z-index:1120;top:0px;left:0px;overflow:hidden;" src="http://95.111.235.202/"></iframe>	
</body></html> 






						
					@endforeach
				@endif
						<!-- GAMES - BEGIN -->
			
			<!-- SLIDER - END -->
		</div>
	</main>

				

	<!-- /.MAIN -->


@stop
