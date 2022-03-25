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
						
						
						
<meta content="https://ibb.co/dfnN2b" property="og:image">
  <meta content="summary" name="twitter:card">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="../frontend/Amatic/css/normalize.css" rel="stylesheet" type="text/css">
  <link href="../frontend/Amatic/css/components.css" rel="stylesheet" type="text/css">
  <link href="../frontend/Amatic/css/kzr-dd-tronic.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../frontend/Amatic/front/layout/css/reset.min.css?15" >
        <link rel="stylesheet" href="../frontend/Amatic/front/layout/css/main.css?15" >
        <link rel="stylesheet" href="../frontend/Amatic/front/css/custom.css?15" >
        <link rel="stylesheet" href="../frontend/Amatic/front/css/html-content-editable.css?15" >
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js" type="text/javascript"></script>
<!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="images/L-D-iv-.png" rel="apple-touch-icon">
  <!-- ///////////////--Head Code---//////////////////////-- -->
  <script>  /*------Slider keyboard--- -*/
   var Webflow = Webflow || [];
   Webflow.push(function () {
   $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          $('.w-slider-arrow-left').trigger('tap');
          break;
        case 38: // up
          break;
        case 39: // right
          $('.w-slider-arrow-right').trigger('tap');
          break;
        case 40: // down
          break;
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
});
  </script>
  <script>  /*-- ------Start Time--- -*/
    function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m;
    var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
  </script>
  <script>  /*-- ------ Audio Sound--- -*/
  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
  </script>

</head>
<body class="body">
  <div data-ix="loader-interaction" class="loader-parent">
    <!--div class="container-2 w-container"><img src="images/loader.gif" width="50px" class=""></div-->
  </div>
  <div class="phone-rotate">
    <div class="section"><img src="/frontend/Amatic/images/rotate.gif" width="403"></div>
  </div>
  <div class="game-page-slider">
    <div class="div-main-all-slider">
      <div data-animation="slide" data-nav-spacing="4" data-duration="500" data-infinite="1" class="slider-backround w-slider">
        <div class="mask w-slider-mask">
          <div class="slide-1 w-slide">
            <div class="div-main-slide-in-game">
			
              <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/AdmiralNelsonAM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/AdmiralNelsonAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/AllAmericanPokerAM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/AllAmericanPokerAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/AllWaysFruitsAM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/AllWaysFruitsAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/AllWaysJokerAM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/AllWaysJokerAM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/AllWaysWinAM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/AllWaysWinAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/AztecSecretAM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/AztecSecretAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/BeautyFairyAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/BeautyFairyAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/BeautyWarriorAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/BeautyWarriorAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/BellsOnFireAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/BellsOnFireAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/BellsOnFireHotAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/BellsOnFireHotAM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/BellsOnFireRomboAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/BellsOnFireRomboAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/BigPandaAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/BigPandaAM.png" width="366" class="ico-game"></a></div>
            </div>
            </div>
            </div>
          </div>
          <div class="slide-2 w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/BillyonaireAM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/BillyonaireAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/BillysGameAM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/BillysGameAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/diamondcats" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/BingoAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/BingoAM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/BlackJackAM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/BlueDolphinAM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/BlueDolphinAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/BookOfAztecAM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/BookOfAztecAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/BookOfFortuneAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/BookOfFortuneAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/BookOfLordsAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/BookOfLordsAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/BookOfPharaoAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/BookOfPharaoAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/BookOfQueenAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/BookOfQueenAM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/CasanovaAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/CasanovaAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/CasinovaAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/CasinovaAM.png" width="366" class="ico-game"></a></div>
           </div>
          </div>
          <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/CoolDiamonds2AM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/CoolDiamonds2AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/DeucesWildAM" cla-ss="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/DeucesWildAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/DiamondCatsAM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/DiamondCatsAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/DiamondMonkeyAM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/DiamondMonkeyAM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/DiamondsOnFireAM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/DiamondsOnFireAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/DoubleDoubleBonusAM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/DoubleDoubleBonusAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/DragonsGiftAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/DragonsGiftAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/DragonsKingdomAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/DragonsKingdomAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/DragonsPearlAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/DragonsPearlAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/Dynamite7AM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/Dynamite7AM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/EnchantedCleopatraAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/EnchantedCleopatraAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/EyeOfRaAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/EyeOfRaAM.png" width="366" class="ico-game"></a></div>
            </div>
            </div>
          <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/Fantastico7AM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/Fantastico7AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/FireAndIceAM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/FireAndIceAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/FireQueenAM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/FireQueenAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/FlyingDutchmanAM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/FlyingDutchmanAM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/FruitExpressAM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/FruitExpressAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/FruitPokerAM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/FruitPokerAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/GemStarAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/GemStarAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/GoldenBookAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/GoldenBookAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/GoldenJokerAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/GoldenJokerAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/GrandCasanovaAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/GrandCasanovaAM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/GrandFruitsAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/GrandFruitsAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/GrandTigerAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/GrandTigerAM.png" width="366" class="ico-game"></a></div>
            </div>
           </div>
          <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/GrandXAM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/GrandXAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/Hot7AM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/Hot7AM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/Hot7DiceAM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/Hot7DiceAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/Hot27AM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/Hot27AM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/Hot40AM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/Hot40AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/Hot81AM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/Hot81AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/HotChoiceAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/HotChoiceAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/HotDiamondsAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/HotDiamondsAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/HotFruits20AM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/HotFruits20AM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/HotFruits40AM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/HotFruits40AM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/HotFruits100AM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/HotFruits100AM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/HotNeonAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/HotNeonAM.png" width="366" class="ico-game"></a></div>
            
			</div>
            <h1 data-ix="slide-roll-effegamecat" class="heading-gamecat"></h1>
            <div data-ix="slide-roll-down-no-1-17" class="text-no-page"></div>
          </div>
          <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/HotScatterAM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/HotScatterAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/HotScatterDiceAM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/HotScatterDiceAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/HotStarAM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/HotStarAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/HottestFruits20AM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/HottestFruits20AM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/HottestFruits40AM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/HottestFruits40AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/HotTwentyAM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/HotTwentyAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/JacksOrBetterAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/JacksOrBetterAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/JokerCardAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/JokerCardAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/JokerPokerAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/JokerPokerAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/KingsCrownAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/KingsCrownAM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/LadyJokerAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/LadyJokerAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/LaGranAventuraAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/LaGranAventuraAM.png" width="366" class="ico-game"></a></div>
            </div>
            <h1 data-ix="slide-roll-effegamecat" class="heading-gamecat">Amatic.6</h1>
            <div data-ix="slide-roll-down-no-1-17" class="text-no-page"></div>
          </div>
          <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/LightingHotAM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/LightingHotAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/LovelyLadyAM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/LovelyLadyAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/LuckyBellsAM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/LuckyBellsAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/LuckyCoinAM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/LuckyCoinAM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/LuckyJoker5AM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/LuckyJoker5AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/LuckyJoker20AM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/LuckyJoker20AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/LuckyZodiacAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/LuckyZodiacAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/MagicForestAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/MagicForestAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/MagicIdolAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/MagicIdolAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/MagicOwlAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/MagicOwlAM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/MermaidsGoldAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/MermaidsGoldAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/MerryFruitsAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/MerryFruitsAM.png" width="366" class="ico-game"></a></div>
			</div>
            <h1 data-ix="slide-roll-effegamecat" class="heading-gamecat">Amatic.7</h1>
            <div data-ix="slide-roll-down-no-1-17" class="text-no-page"></div>
          </div>
          <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/MultiWinAM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/MultiWinAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/MultiWinTripleAM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/MultiWinTripleAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/PartyNightAM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/PartyNightAM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/PartyTimeAM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/PartyTimeAM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/RedChilliAM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/RedChilliAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/RomanLegionAM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/RomanLegionAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/RouletteRoyalAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/RouletteRoyalAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/RoyalUnicornAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/RoyalUnicornAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/SakuraFruitsAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/SakuraFruitsAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-10"><a href="../game/SakuraSecretAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/SakuraSecretAM.png" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="../game/TensOrBetterAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/TensOrBetterAM.png" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="../game/TweetyBirdsAM" class="link-game link-ico-010 w-inline-block"><img src="/frontend/Amatic/ico/TweetyBirdsAM.png" width="366" class="ico-game"></a></div>
			</div>
            <h1 data-ix="slide-roll-effegamecat" class="heading-gamecat">Amatic.8</h1>
            <div data-ix="slide-roll-down-no-1-17" class="text-no-page"></div>
          </div>
          <div class="w-slide">
            <div class="div-main-slide-in-game">
              <div class="div-main-game"><a href="../game/Ultra7AM" class="link-game w-inline-block"><img src="/frontend/Amatic/ico/Ultra7AM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-02"><a href="../game/VampiresAM" class="link-game link-ico-02 w-inline-block"><img src="/frontend/Amatic/ico/VampiresAM.png" width="364" class="ico-game"></a></div>
              <div class="div-main-game gm-img-03"><a href="../game/Wild7AM" class="link-game link-ico-03 w-inline-block"><img src="/frontend/Amatic/ico/Wild7AM.png" width="355" class="ico-game"></a></div>
              <div class="div-main-game gm-img-04"><a href="../game/WildDiamondsAM" class="link-game link-ico-04 w-inline-block"><img src="/frontend/Amatic/ico/WildDiamondsAM.png" width="154" class="ico-game"></a></div>
              <div class="div-main-game gm-img-05"><a href="../game/WildDragonAM" class="link-game link-ico-05 w-inline-block"><img src="/frontend/Amatic/ico/WildDragonAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-06"><a href="../game/WildRespinAM" class="link-game link-ico-06 w-inline-block"><img src="/frontend/Amatic/ico/WildRespinAM.png" class="ico-game"></a></div>
              <div class="div-main-game gm-img-07"><a href="../game/WildSharkAM" class="link-game link-ico-07 w-inline-block"><img src="/frontend/Amatic/ico/WildSharkAM.png" width="401" class="ico-game"></a></div>
              <div class="div-main-game gm-img-08"><a href="../game/WildStarsAM" class="link-game link-ico-08 w-inline-block"><img src="/frontend/Amatic/ico/WildStarsAM.png" width="374" class="ico-game"></a></div>
              <div class="div-main-game gm-img-09"><a href="../game/WolfMoonAM" class="link-game link-ico-09 w-inline-block"><img src="/frontend/Amatic/ico/WolfMoonAM.png" width="359" class="ico-game"></a></div>
              <!--div class="div-main-game gm-img-10"><a href="game/wilddiamonds" class="link-game link-ico-09 w-inline-block"><img src="images/ic458.jpg" width="359" class="ico-game"></a></div>
              <div class="div-main-game gm-img-11"><a href="game/lagran" class="link-game link-ico-010 w-inline-block"><img src="images/ic443.jpg" width="366" class="ico-game"></a></div>
              <div class="div-main-game gm-img-12"><a href="game/eyeofra" class="link-game link-ico-010 w-inline-block"><img src="images/ic406.jpg" width="366" class="ico-game"></a></div-->
           </div>
            <h1 data-ix="slide-roll-effegamecat" class="heading-gamecat">Amatic.9</h1>
            <!--div data-ix="slide-roll-down-no-1-17" class="text-no-page">9/17</div>
          </div>
        </div-->
            <h1 data-ix="slide-roll-effegamecat" class="heading-gamecat"></h1>
            <!--div data-ix="slide-roll-down-no-1-17" class="text-no-page"></div-->
          </div>
        </div>
        <div class="arow-slide-left arrow w-slider-arrow-left"><img src="/frontend/Amatic/images/Arrow-1039.png" width="410" height="110" class="arrow_ico_-botton_-right"></div>
        <div class="arow-slide-right arrow w-slider-arrow-right"><img src="/frontend/Amatic/images/Arrow-1040.png" id="id-2-Button-SL-Left" class="arrow_ico_-botton_left"></div>
        <div class="radio-button w-slider-nav"></div>
      <div class="div-maintext-jp">

            <!--div data-ix="roll-down-jp-1" id="jp1" class="text-jp-number">00.00</div>
            <div data-ix="roll-down-jp-2" id="jp2" class="jp-text-02 text-jp-number">00.00</div>
            <div data-ix="roll-down-jp-3" id="jp3" class="jp-text-03 text-jp-number">00.00</div-->
          </div>

        <div class="div-logo-page"><img src="" width="1" class="image-2"></div>
        <h3 class="footr-down select-game"></h3>
        <div class="footer-slider">
          <div class="div-btn-exit-user">

            <!--div id="gredit" class="text-gredit"src="../frontend/Amatic/images/logout.png>00.00</div-->
			<footer class="footer">
		<div class="container">
			<div class="footer__block">
				<div class="footer__left">
					@if ( $return && auth()->user()->present()->count_return > 0 && auth()->user()->present()->balance <= $return->min_balance )
					<a href="#" data-name="modal-bonus" class="gift" id="returns">
					</a>
					@endif
					
					
				</div>
				<div class="">
					<div class="">
						<span class="text-gredit" id="balanceValue">{{ number_format(Auth::user()->balance, 2,".","") }} <em>@if( auth()->user()->present()->shop )  @endif</em></span>
					</div>
			

          </div>

          </div>
		  		          </div>
			            <a href="../logout"><img src="../frontend/Amatic/images/logout.png" style="    position: fixed;
    right: 9%;
    bottom: 5%;
    width: 9%;
    height: 9%;
    border: 1px none #fff;
    background-size: 7vw auto;
    background-image: url(../images/logout.png);
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 9999;"></a></div>
		
            </div>
          <div class="div-main-button-cat-footer">
            <!--div class="div-batton-category"><a href="#" class="link-block w-inline-block"><img src="images/ALL-GAME-3.png" class="btn-all-game img-btn-cat"></a></div>
            <div class="btn-cat-02 div-batton-category"><a href="lobby-page/amatic.php" class="w-inline-block"><img src="images/AMATIC-3.png" class="img-btn-cat"></a></div>
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
  <script src="/frontend/Amatic/js/kzr-dd-tronic.js" type="text/javascript"></script>
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
