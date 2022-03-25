<?php

namespace App\Games\FlowersChristmasNET;

use App\Games\FlowersChristmasNET\SlotSettings as SlotSettings;

include('CheckReels.php');
class Server
{
    public function get($request, $game)
    {
        /*
        if( config('LicenseDK.APL_INCLUDE_KEY_CONFIG') != 'wi9qydosuimsnls5zoe5q298evkhim0ughx1w16qybs2fhlcpn' )
        {
            return false;
        }
        if( md5_file(base_path() . '/config/LicenseDK.php') != '27f30d89977203af2f6822e48707425d' )
        {
            return false;
        }
        if( md5_file(base_path() . '/app/Lib/LicenseDK.php') != '22dde427cc10243ac0c7a3a625518e6f' )
        {
            return false;
        }
        $checked = new \VanguardLTE\Lib\LicenseDK();
        $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
        if( $license_notifications_array['notification_case'] != 'notification_license_ok' )
        {
            $response = '{"responseEvent":"error","responseType":"error","serverResponse":"Error LicenseDK"}';
            exit( $response );
        }
        */
        \DB::beginTransaction();
        //TODO: исправить
        $userId = \Auth::id();
        if( $userId == null )
        {
            $response = '{"responseEvent":"error","responseType":"","serverResponse":"invalid login"}';
            exit( $response );
        }
        $slotSettings = new SlotSettings($game, $userId);
        $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22 = $_GET;
        $_obf_0D1713290429323C0B2B02212E103E165B173416383632 = round($slotSettings->GetBalance() * $slotSettings->CurrentDenom * 100);
        $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201 = [];
        $_obf_0D36302910132C2C39290C27155B093F1526105B2A2C22 = '';
        $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'bet';
        if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'] == 'freespin' )
        {
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'freespin';
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'] = 'spin';
        }
        if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'] == 'init' || $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'] == 'reloadbalance' )
        {
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'] = 'init';
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'init';
        }
        if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'] == 'paytable' )
        {
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'paytable';
        }
        if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'] == 'initfreespin' )
        {
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'initfreespin';
        }
        if( isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination']) && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'] >= 1 )
        {
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'] = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'] / 100;
            $slotSettings->CurrentDenom = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
            $slotSettings->CurrentDenomination = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
            $slotSettings->SetGameData($slotSettings->slotId . 'GameDenom', $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination']);
        }
        else if( $slotSettings->HasGameData($slotSettings->slotId . 'GameDenom') )
        {
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'] = $slotSettings->GetGameData($slotSettings->slotId . 'GameDenom');
            $slotSettings->CurrentDenom = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
            $slotSettings->CurrentDenomination = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
        }
        if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'bet' )
        {
            $lines = 30;
            $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_betlevel'];
            if( $lines <= 0 || $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 <= 0.0001 )
            {
                $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid bet state"}';
                exit( $response );
            }
            if( $slotSettings->GetBalance() < ($lines * $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811) )
            {
                $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid balance"}';
                exit( $response );
            }
        }
        if( $slotSettings->GetGameData($slotSettings->slotId . 'FreeGames') < $slotSettings->GetGameData($slotSettings->slotId . 'CurrentFreeGame') && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' )
        {
            $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid bonus state"}';
            exit( $response );
        }
        $_obf_0D36302910132C2C39290C27155B093F1526105B2A2C22 = (string)$_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['action'];
        switch( $_obf_0D36302910132C2C39290C27155B093F1526105B2A2C22 )
        {
            case 'init':
                $_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932 = $slotSettings->Bet;
                $lastEvent = $slotSettings->GetHistory();
                $slotSettings->SetGameData('FlowersChristmasNETBonusWin', 0);
                $slotSettings->SetGameData('FlowersChristmasNETFreeGames', 0);
                $slotSettings->SetGameData('FlowersChristmasNETCurrentFreeGame', 0);
                $slotSettings->SetGameData('FlowersChristmasNETTotalWin', 0);
                $slotSettings->SetGameData('FlowersChristmasNETFreeBalance', 0);
                $freeState = '';
                if( $lastEvent != 'NULL' )
                {
                    $slotSettings->SetGameData($slotSettings->slotId . 'BonusWin', $lastEvent->serverResponse->bonusWin);
                    $slotSettings->SetGameData($slotSettings->slotId . 'FreeGames', $lastEvent->serverResponse->totalFreeGames);
                    $slotSettings->SetGameData($slotSettings->slotId . 'CurrentFreeGame', $lastEvent->serverResponse->currentFreeGames);
                    $slotSettings->SetGameData($slotSettings->slotId . 'TotalWin', $lastEvent->serverResponse->bonusWin);
                    $slotSettings->SetGameData($slotSettings->slotId . 'FreeBalance', $lastEvent->serverResponse->Balance);
                    $freeState = $lastEvent->serverResponse->freeState;
                    $reels = $lastEvent->serverResponse->reelsSymbols;
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 = '&rs.i0.r.i0.syms=SYM' . $reels->reel1[0] . '%2CSYM' . $reels->reel1[1] . '%2CSYM' . $reels->reel1[2] . '';
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i1.syms=SYM' . $reels->reel2[0] . '%2CSYM' . $reels->reel2[1] . '%2CSYM' . $reels->reel2[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i2.syms=SYM' . $reels->reel3[0] . '%2CSYM' . $reels->reel3[1] . '%2CSYM' . $reels->reel3[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i3.syms=SYM' . $reels->reel4[0] . '%2CSYM' . $reels->reel4[1] . '%2CSYM' . $reels->reel4[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i4.syms=SYM' . $reels->reel5[0] . '%2CSYM' . $reels->reel5[1] . '%2CSYM' . $reels->reel5[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i0.syms=SYM' . $reels->reel1[0] . '%2CSYM' . $reels->reel1[1] . '%2CSYM' . $reels->reel1[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i1.syms=SYM' . $reels->reel2[0] . '%2CSYM' . $reels->reel2[1] . '%2CSYM' . $reels->reel2[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i2.syms=SYM' . $reels->reel3[0] . '%2CSYM' . $reels->reel3[1] . '%2CSYM' . $reels->reel3[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i3.syms=SYM' . $reels->reel4[0] . '%2CSYM' . $reels->reel4[1] . '%2CSYM' . $reels->reel4[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i4.syms=SYM' . $reels->reel5[0] . '%2CSYM' . $reels->reel5[1] . '%2CSYM' . $reels->reel5[2] . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i0.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i1.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i2.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i3.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i4.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i0.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i1.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i2.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i3.pos=' . $reels->rp[0]);
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i4.pos=' . $reels->rp[0]);
                }
                else
                {
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 = '&rs.i0.r.i0.syms=SYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '';
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i1.syms=SYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i2.syms=SYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i3.syms=SYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i4.syms=SYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '%2CSYM' . rand(1, 7) . '');
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i0.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i1.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i2.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i3.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i4.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i0.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i1.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i2.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i3.pos=' . rand(1, 10));
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i1.r.i4.pos=' . rand(1, 10));
                }
                for( $d = 0; $d < count($slotSettings->Denominations); $d++ )
                {
                    $slotSettings->Denominations[$d] = $slotSettings->Denominations[$d] * 100;
                }
                if( $slotSettings->GetGameData('FlowersChristmasNETCurrentFreeGame') < $slotSettings->GetGameData('FlowersChristmasNETFreeGames') && $slotSettings->GetGameData('FlowersChristmasNETFreeGames') > 0 )
                {
                    $freeState = 'previous.rs.i0=freespin&rs.i1.r.i0.syms=SYM8%2CSYM9%2CSYM11&bl.i6.coins=1&bl.i17.reelset=ALL&rs.i0.nearwin=4%2C2%2C3&bl.i15.id=15&rs.i0.r.i1.attention.i0=1&rs.i0.r.i4.hold=false&gamestate.history=basic%2Cfreespin&rs.i1.r.i2.hold=false&bl.i21.id=21&game.win.cents=300&staticsharedurl=https%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent&bl.i23.reelset=ALL&bl.i10.line=1%2C2%2C1%2C2%2C1&bl.i0.reelset=ALL&bl.i20.coins=1&bl.i18.coins=1&bl.i10.id=10&freespins.initial=10&bl.i3.reelset=ALL&bl.i4.line=2%2C1%2C0%2C1%2C2&bl.i13.coins=1&bl.i26.reelset=ALL&bl.i24.line=2%2C0%2C1%2C2%2C0&bl.i27.id=27&rs.i0.r.i0.syms=SYM8%2CSYM9%2CSYM11&bl.i2.id=2&rs.i1.r.i1.pos=68&rs.i0.r.i0.pos=66&bl.i14.reelset=ALL&game.win.coins=60&bl.i28.line=2%2C1%2C0%2C0%2C0&rs.i1.r.i0.hold=false&bl.i3.id=3&bl.i22.line=2%2C2%2C0%2C2%2C2&bl.i12.coins=1&bl.i8.reelset=ALL&clientaction=init&rs.i0.r.i2.hold=false&bl.i16.id=16&casinoID=netent&bl.i5.coins=1&bl.i8.id=8&rs.i0.r.i3.pos=77&bl.i6.line=2%2C2%2C1%2C2%2C2&bl.i22.id=22&rs.i1.r.i2.attention.i0=1&bl.i12.line=2%2C1%2C2%2C1%2C2&bl.i0.line=1%2C1%2C1%2C1%2C1&bl.i29.reelset=ALL&rs.i0.r.i2.syms=SYM15%2CSYM10%2CSYM12&game.win.amount=3.00&betlevel.all=1%2C2%2C3%2C4%2C5&denomination.all=' . implode('%2C', $slotSettings->Denominations) . '&bl.i27.coins=1&current.rs.i0=freespin&bl.i1.id=1&bl.i25.id=25&rs.i1.r.i4.pos=11&denomination.standard=' . ($slotSettings->CurrentDenomination * 100) . '&multiplier=3&bl.i14.id=14&bl.i19.line=0%2C2%2C2%2C2%2C0&freespins.denomination=5.000&bl.i12.reelset=ALL&bl.i2.coins=1&bl.i6.id=6&bl.i21.reelset=ALL&autoplay=10%2C25%2C50%2C75%2C100%2C250%2C500%2C750%2C1000&freespins.totalwin.coins=0&freespins.total=10&bl.i20.id=20&gamestate.stack=basic%2Cfreespin&rs.i1.r.i4.syms=SYM1%2CSYM1%2CSYM1&gamesoundurl=&bet.betlevel=1&bl.i5.reelset=ALL&bl.i24.coins=1&bl.i19.coins=1&bl.i7.id=7&bl.i18.reelset=ALL&playercurrencyiso=' . $slotSettings->slotCurrency . '&bl.i1.coins=1&rs.i0.r.i2.attention.i0=2&bl.i14.line=1%2C1%2C2%2C1%2C1&freespins.multiplier=3&playforfun=false&jackpotcurrencyiso=' . $slotSettings->slotCurrency . '&rs.i0.r.i4.syms=SYM14%2CSYM1%2CSYM16&bl.i25.coins=1&rs.i0.r.i2.pos=10&bl.i13.line=1%2C1%2C0%2C1%2C1&bl.i24.reelset=ALL&rs.i1.r.i0.pos=45&bl.i0.coins=1&bl.i2.reelset=ALL&rs.i1.r.i4.hold=false&freespins.left=8&bl.i26.coins=1&bl.i27.reelset=ALL&bl.standard=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29&bl.i29.line=1%2C0%2C1%2C2%2C1&bl.i23.line=0%2C2%2C1%2C0%2C2&bl.i26.id=26&bl.i15.reelset=ALL&rs.i0.r.i3.hold=false&bet.denomination=' . ($slotSettings->CurrentDenomination * 100) . '&g4mode=false&bl.i11.line=0%2C1%2C0%2C1%2C0&freespins.win.coins=0&historybutton=false&bl.i25.line=1%2C0%2C2%2C0%2C1&bl.i5.id=5&gameEventSetters.enabled=false&next.rs=freespin&rs.i1.r.i3.pos=26&rs.i0.r.i1.syms=SYM11%2CSYM12%2CSYM9&bl.i3.coins=1&bl.i10.coins=1&bl.i18.id=18&rs.i1.r.i3.hold=false&totalwin.coins=60&bl.i5.line=0%2C0%2C1%2C0%2C0&gamestate.current=freespin&bl.i28.coins=1&bl.i27.line=0%2C1%2C2%2C2%2C2&jackpotcurrency=%26%23x20AC%3B&bl.i7.line=1%2C2%2C2%2C2%2C1&bet.betlines=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29&rs.i0.r.i3.syms=SYM1%2CSYM3%2CSYM13&rs.i1.r.i1.syms=SYM8%2CSYM9%2CSYM3&bl.i16.coins=1&freespins.win.cents=0&bl.i9.coins=1&bl.i7.reelset=ALL&isJackpotWin=false&bl.i24.id=24&freespins.betlines=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29&rs.i0.r.i1.pos=9&bl.i22.coins=1&rs.i1.r.i3.syms=SYM3%2CSYM10%2CSYM9&bl.i29.coins=1&bl.i13.id=13&rs.i0.r.i1.hold=false&bl.i9.line=1%2C0%2C1%2C0%2C1&betlevel.standard=1&bl.i10.reelset=ALL&gameover=false&bl.i25.reelset=ALL&bl.i23.coins=1&bl.i11.coins=1&bl.i22.reelset=ALL&bl.i13.reelset=ALL&bl.i0.id=0&nextaction=freespin&bl.i15.line=0%2C1%2C1%2C1%2C0&bl.i3.line=0%2C1%2C2%2C1%2C0&bl.i19.id=19&bl.i4.reelset=ALL&bl.i4.coins=1&bl.i18.line=2%2C0%2C2%2C0%2C2&freespins.totalwin.cents=0&bl.i9.id=9&bl.i17.line=0%2C2%2C0%2C2%2C0&bl.i11.id=11&freespins.betlevel=1&playercurrency=%26%23x20AC%3B&bl.i9.reelset=ALL&bl.i17.coins=1&bl.i28.id=28&bl.i19.reelset=ALL&bl.i11.reelset=ALL&bl.i16.line=2%2C1%2C1%2C1%2C2&rs.i0.id=basic&credit=' . $_obf_0D1713290429323C0B2B02212E103E165B173416383632 . '&bl.i21.line=0%2C0%2C2%2C0%2C0&bl.i1.reelset=ALL&last.rs=freespin&bl.i21.coins=1&bl.i28.reelset=ALL&bl.i1.line=0%2C0%2C0%2C0%2C0&bl.i17.id=17&rs.i1.r.i2.pos=27&bl.i16.reelset=ALL&nearwinallowed=true&bl.i8.line=1%2C0%2C0%2C0%2C1&freespins.wavecount=1&bl.i8.coins=1&bl.i23.id=23&bl.i15.coins=1&bl.i2.line=2%2C2%2C2%2C2%2C2&rs.i1.r.i2.syms=SYM16%2CSYM0%2CSYM15&totalwin.cents=300&rs.i0.r.i0.hold=false&restore=true&rs.i1.id=freespin&bl.i12.id=12&bl.i29.id=29&bl.i4.id=4&rs.i0.r.i4.pos=39&bl.i7.coins=1&bl.i6.reelset=ALL&bl.i20.line=2%2C0%2C0%2C0%2C2&bl.i20.reelset=ALL&wavecount=1&bl.i14.coins=1&rs.i1.r.i1.hold=false&bl.i26.line=1%2C2%2C0%2C2%2C1' . $_obf_0D3E331C040E390B031B03100422040311293E023E0322 . $freeState;
                }
                $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = 'rs.i1.r.i0.syms=SYM6%2CSYM9%2CSYM11&bl.i6.coins=1&g4mode=false&bl.i11.line=0%2C1%2C0%2C1%2C0&bl.i17.reelset=ALL&historybutton=false&bl.i15.id=15&bl.i25.line=1%2C0%2C2%2C0%2C1&rs.i0.r.i4.hold=false&bl.i5.id=5&gameEventSetters.enabled=false&rs.i1.r.i2.hold=false&rs.i1.r.i3.pos=0&rs.i0.r.i1.syms=SYM9%2CSYM17%2CSYM10&bl.i3.coins=1&bl.i21.id=21&bl.i10.coins=1&bl.i18.id=18&game.win.cents=0&staticsharedurl=https%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent&bl.i23.reelset=ALL&bl.i10.line=1%2C2%2C1%2C2%2C1&bl.i0.reelset=ALL&bl.i20.coins=1&rs.i1.r.i3.hold=false&totalwin.coins=0&bl.i18.coins=1&bl.i5.line=0%2C0%2C1%2C0%2C0&gamestate.current=basic&bl.i10.id=10&bl.i28.coins=1&bl.i3.reelset=ALL&bl.i4.line=2%2C1%2C0%2C1%2C2&bl.i27.line=0%2C1%2C2%2C2%2C2&jackpotcurrency=%26%23x20AC%3B&bl.i7.line=1%2C2%2C2%2C2%2C1&bl.i13.coins=1&bl.i26.reelset=ALL&bl.i24.line=2%2C0%2C1%2C2%2C0&bl.i27.id=27&rs.i0.r.i0.syms=SYM6%2CSYM8%2CSYM10&rs.i0.r.i3.syms=SYM8%2CSYM6%2CSYM5&rs.i1.r.i1.syms=SYM9%2CSYM17%2CSYM10&bl.i2.id=2&bl.i16.coins=1&rs.i1.r.i1.pos=0&bl.i9.coins=1&bl.i7.reelset=ALL&isJackpotWin=false&rs.i0.r.i0.pos=0&bl.i14.reelset=ALL&bl.i24.id=24&rs.i0.r.i1.pos=0&bl.i22.coins=1&rs.i1.r.i3.syms=SYM8%2CSYM6%2CSYM5&game.win.coins=0&bl.i29.coins=1&bl.i13.id=13&bl.i28.line=2%2C1%2C0%2C0%2C0&rs.i1.r.i0.hold=false&rs.i0.r.i1.hold=false&bl.i3.id=3&bl.i22.line=2%2C2%2C0%2C2%2C2&bl.i12.coins=1&bl.i8.reelset=ALL&clientaction=init&bl.i9.line=1%2C0%2C1%2C0%2C1&rs.i0.r.i2.hold=false&bl.i16.id=16&casinoID=netent&betlevel.standard=1&bl.i5.coins=1&bl.i10.reelset=ALL&gameover=true&bl.i25.reelset=ALL&bl.i8.id=8&bl.i23.coins=1&rs.i0.r.i3.pos=0&bl.i11.coins=1&bl.i22.reelset=ALL&bl.i13.reelset=ALL&bl.i0.id=0&bl.i6.line=2%2C2%2C1%2C2%2C2&bl.i22.id=22&bl.i12.line=2%2C1%2C2%2C1%2C2&bl.i0.line=1%2C1%2C1%2C1%2C1&nextaction=spin&bl.i15.line=0%2C1%2C1%2C1%2C0&bl.i29.reelset=ALL&bl.i3.line=0%2C1%2C2%2C1%2C0&bl.i19.id=19&bl.i4.reelset=ALL&bl.i4.coins=1&rs.i0.r.i2.syms=SYM8%2CSYM13%2CSYM11&bl.i18.line=2%2C0%2C2%2C0%2C2&game.win.amount=0&betlevel.all=1%2C2%2C3%2C4%2C5&bl.i9.id=9&bl.i17.line=0%2C2%2C0%2C2%2C0&denomination.all=' . implode('%2C', $slotSettings->Denominations) . '&bl.i11.id=11&playercurrency=%26%23x20AC%3B&bl.i27.coins=1&bl.i9.reelset=ALL&bl.i17.coins=1&bl.i28.id=28&bl.i1.id=1&bl.i19.reelset=ALL&bl.i25.id=25&bl.i11.reelset=ALL&bl.i16.line=2%2C1%2C1%2C1%2C2&rs.i0.id=freespin&credit=' . $_obf_0D1713290429323C0B2B02212E103E165B173416383632 . '&rs.i1.r.i4.pos=0&denomination.standard=' . ($slotSettings->CurrentDenomination * 100) . '&bl.i21.line=0%2C0%2C2%2C0%2C0&bl.i1.reelset=ALL&multiplier=1&bl.i14.id=14&bl.i19.line=0%2C2%2C2%2C2%2C0&bl.i21.coins=1&bl.i28.reelset=ALL&bl.i12.reelset=ALL&bl.i2.coins=1&bl.i6.id=6&bl.i1.line=0%2C0%2C0%2C0%2C0&bl.i21.reelset=ALL&autoplay=10%2C25%2C50%2C75%2C100%2C250%2C500%2C750%2C1000&bl.i20.id=20&rs.i1.r.i4.syms=SYM1%2CSYM3%2CSYM14&bl.i17.id=17&gamesoundurl=&rs.i1.r.i2.pos=0&bl.i16.reelset=ALL&nearwinallowed=true&bl.i5.reelset=ALL&bl.i24.coins=1&bl.i19.coins=1&bl.i7.id=7&bl.i18.reelset=ALL&bl.i8.line=1%2C0%2C0%2C0%2C1&playercurrencyiso=' . $slotSettings->slotCurrency . '&bl.i1.coins=1&bl.i14.line=1%2C1%2C2%2C1%2C1&playforfun=false&jackpotcurrencyiso=' . $slotSettings->slotCurrency . '&rs.i0.r.i4.syms=SYM1%2CSYM1%2CSYM1&bl.i8.coins=1&bl.i23.id=23&bl.i15.coins=1&bl.i25.coins=1&rs.i0.r.i2.pos=0&bl.i2.line=2%2C2%2C2%2C2%2C2&bl.i13.line=1%2C1%2C0%2C1%2C1&rs.i1.r.i2.syms=SYM8%2CSYM13%2CSYM10&bl.i24.reelset=ALL&rs.i1.r.i0.pos=0&totalwin.cents=0&bl.i0.coins=1&bl.i2.reelset=ALL&rs.i0.r.i0.hold=false&restore=false&rs.i1.id=basic&bl.i12.id=12&bl.i29.id=29&rs.i1.r.i4.hold=false&bl.i4.id=4&rs.i0.r.i4.pos=0&bl.i7.coins=1&bl.i26.coins=1&bl.i27.reelset=ALL&bl.standard=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29&bl.i29.line=1%2C0%2C1%2C2%2C1&bl.i6.reelset=ALL&bl.i20.line=2%2C0%2C0%2C0%2C2&bl.i23.line=0%2C2%2C1%2C0%2C2&bl.i20.reelset=ALL&bl.i26.id=26&wavecount=1&bl.i14.coins=1&bl.i15.reelset=ALL&rs.i1.r.i1.hold=false&rs.i0.r.i3.hold=false&bl.i26.line=1%2C2%2C0%2C2%2C1' . $_obf_0D3E331C040E390B031B03100422040311293E023E0322 . $freeState;
                break;
            case 'paytable':
                $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = 'pt.i0.comp.i46.n=3&pt.i0.comp.i54.symbol=SYM11&bl.i17.reelset=ALL&pt.i1.comp.i47.multi=20&pt.i0.comp.i55.multi=2&bl.i15.id=15&pt.i0.comp.i29.type=betline&pt.i0.comp.i17.symbol=SYM4&pt.i0.comp.i5.freespins=0&pt.i0.comp.i23.n=7&pt.i1.comp.i34.multi=1400&pt.i0.comp.i13.symbol=SYM4&pt.i1.comp.i8.type=betline&pt.i1.comp.i4.n=4&pt.i0.comp.i15.multi=350&bl.i10.line=1%2C2%2C1%2C2%2C1&pt.i1.comp.i27.symbol=SYM6&pt.i1.comp.i60.n=8&pt.i0.comp.i28.multi=25&pt.i1.comp.i43.freespins=0&bl.i18.coins=1&pt.i1.comp.i29.freespins=0&pt.i1.comp.i30.symbol=SYM6&pt.i1.comp.i3.multi=20&pt.i0.comp.i11.n=3&pt.i0.comp.i57.n=5&pt.i1.comp.i23.symbol=SYM5&bl.i4.line=2%2C1%2C0%2C1%2C2&bl.i13.coins=1&bl.i27.id=27&pt.i0.id=basic&pt.i0.comp.i1.type=betline&pt.i1.comp.i60.symbol=SYM0&bl.i2.id=2&pt.i0.comp.i58.type=scatter&pt.i0.comp.i34.n=10&pt.i1.comp.i10.type=betline&pt.i0.comp.i42.multi=1200&pt.i0.comp.i34.type=betline&pt.i0.comp.i4.symbol=SYM3&pt.i1.comp.i5.freespins=0&pt.i1.comp.i8.symbol=SYM3&bl.i14.reelset=ALL&pt.i1.comp.i19.n=3&pt.i1.comp.i52.freespins=0&pt.i0.comp.i17.freespins=0&pt.i0.comp.i50.symbol=SYM10&pt.i0.comp.i8.symbol=SYM3&pt.i0.comp.i58.symbol=SYM0&pt.i0.comp.i0.symbol=SYM1&pt.i0.comp.i47.symbol=SYM9&pt.i1.comp.i36.freespins=0&pt.i0.comp.i3.freespins=0&pt.i0.comp.i10.multi=2000&pt.i0.comp.i47.n=4&pt.i1.id=freespin&bl.i3.id=3&bl.i22.line=2%2C2%2C0%2C2%2C2&pt.i1.comp.i34.freespins=0&pt.i1.comp.i34.type=betline&pt.i0.comp.i24.n=8&bl.i8.reelset=ALL&clientaction=paytable&pt.i1.comp.i57.symbol=SYM0&pt.i1.comp.i27.freespins=0&bl.i16.id=16&pt.i0.comp.i50.multi=15&pt.i1.comp.i5.n=5&bl.i5.coins=1&pt.i1.comp.i8.multi=600&pt.i1.comp.i51.type=betline&pt.i1.comp.i42.multi=1200&pt.i0.comp.i22.type=betline&pt.i0.comp.i24.freespins=0&pt.i0.comp.i58.n=6&pt.i1.comp.i38.type=betline&pt.i1.comp.i60.type=scatter&pt.i0.comp.i21.multi=120&pt.i1.comp.i13.multi=140&pt.i1.comp.i54.freespins=0&pt.i1.comp.i41.freespins=0&pt.i0.comp.i12.n=4&pt.i0.comp.i35.n=3&pt.i0.comp.i13.type=betline&bl.i0.line=1%2C1%2C1%2C1%2C1&pt.i1.comp.i47.freespins=0&pt.i1.comp.i53.multi=15&pt.i1.comp.i7.freespins=0&pt.i0.comp.i31.freespins=0&pt.i0.comp.i3.multi=20&pt.i0.comp.i51.type=betline&pt.i1.comp.i50.n=4&pt.i1.comp.i22.type=betline&pt.i0.comp.i21.n=5&pt.i0.comp.i42.freespins=0&pt.i1.comp.i6.n=6&pt.i0.comp.i36.symbol=SYM7&pt.i0.comp.i39.symbol=SYM7&pt.i1.comp.i31.type=betline&pt.i1.comp.i50.multi=15&bl.i1.id=1&pt.i0.comp.i44.n=4&pt.i0.comp.i37.type=betline&pt.i0.comp.i10.type=betline&pt.i0.comp.i55.type=scatter&pt.i0.comp.i35.freespins=0&pt.i1.comp.i11.symbol=SYM4&pt.i1.comp.i49.symbol=SYM10&bl.i25.id=25&pt.i1.comp.i46.symbol=SYM9&pt.i1.comp.i46.type=betline&pt.i0.comp.i5.multi=160&pt.i0.comp.i32.n=8&pt.i0.comp.i56.freespins=10&pt.i1.comp.i1.freespins=0&bl.i14.id=14&pt.i1.comp.i16.symbol=SYM4&pt.i1.comp.i23.multi=300&pt.i1.comp.i4.type=betline&pt.i1.comp.i18.multi=1800&bl.i2.coins=1&bl.i21.reelset=ALL&pt.i0.comp.i55.n=3&pt.i1.comp.i26.type=betline&pt.i0.comp.i57.multi=2&pt.i0.comp.i8.multi=600&pt.i0.comp.i34.multi=1400&pt.i0.comp.i49.freespins=0&pt.i1.comp.i51.n=5&pt.i0.comp.i1.freespins=0&bl.i5.reelset=ALL&bl.i24.coins=1&pt.i1.comp.i49.freespins=0&pt.i0.comp.i22.n=6&pt.i0.comp.i28.symbol=SYM6&pt.i0.comp.i45.n=5&pt.i1.comp.i17.type=betline&pt.i1.comp.i0.symbol=SYM1&pt.i1.comp.i7.n=7&pt.i1.comp.i5.multi=160&pt.i1.comp.i39.multi=200&bl.i14.line=1%2C1%2C2%2C1%2C1&pt.i0.comp.i21.type=betline&jackpotcurrencyiso=' . $slotSettings->slotCurrency . '&pt.i0.comp.i8.type=betline&pt.i0.comp.i7.freespins=0&pt.i1.comp.i15.multi=350&pt.i0.comp.i13.multi=140&pt.i1.comp.i45.multi=200&pt.i0.comp.i17.type=betline&bl.i13.line=1%2C1%2C0%2C1%2C1&pt.i0.comp.i30.type=betline&pt.i1.comp.i22.symbol=SYM5&pt.i1.comp.i30.freespins=0&pt.i1.comp.i40.n=8&bl.i24.reelset=ALL&pt.i1.comp.i38.symbol=SYM7&pt.i0.comp.i40.multi=400&pt.i1.comp.i56.freespins=10&bl.i0.coins=1&bl.i2.reelset=ALL&pt.i0.comp.i10.n=10&pt.i0.comp.i33.n=9&pt.i0.comp.i56.n=4&pt.i1.comp.i41.symbol=SYM7&pt.i1.comp.i6.multi=250&pt.i0.comp.i36.multi=20&pt.i1.comp.i19.symbol=SYM5&pt.i0.comp.i22.freespins=0&pt.i1.comp.i52.symbol=SYM11&bl.i26.coins=1&bl.i27.reelset=ALL&pt.i0.comp.i20.symbol=SYM5&pt.i1.comp.i55.type=scatter&bl.i29.line=1%2C0%2C1%2C2%2C1&pt.i0.comp.i15.freespins=0&pt.i0.comp.i31.symbol=SYM6&bl.i23.line=0%2C2%2C1%2C0%2C2&bl.i26.id=26&pt.i0.comp.i28.freespins=0&pt.i0.comp.i0.n=3&pt.i1.comp.i21.multi=120&pt.i1.comp.i52.n=3&pt.i0.comp.i42.symbol=SYM7&pt.i1.comp.i30.type=betline&pt.i1.comp.i50.freespins=0&pt.i0.comp.i46.type=betline&pt.i0.comp.i0.type=betline&pt.i0.comp.i53.symbol=SYM11&pt.i1.comp.i0.multi=250&g4mode=false&pt.i1.comp.i8.n=8&pt.i0.comp.i25.multi=800&pt.i1.comp.i37.multi=80&pt.i0.comp.i38.freespins=0&bl.i25.line=1%2C0%2C2%2C0%2C1&pt.i0.comp.i16.symbol=SYM4&pt.i1.comp.i21.freespins=0&pt.i0.comp.i1.multi=1000&pt.i0.comp.i27.n=3&pt.i0.comp.i53.freespins=0&pt.i1.comp.i9.type=betline&pt.i0.comp.i32.multi=450&pt.i1.comp.i24.multi=500&pt.i1.comp.i44.multi=20&pt.i1.comp.i59.freespins=25&pt.i1.comp.i23.type=betline&pt.i1.comp.i26.n=10&pt.i1.comp.i49.n=3&bl.i18.id=18&pt.i1.comp.i28.symbol=SYM6&pt.i1.comp.i17.multi=900&pt.i0.comp.i18.multi=1800&pt.i0.comp.i33.type=betline&bl.i5.line=0%2C0%2C1%2C0%2C0&bl.i28.coins=1&pt.i1.comp.i33.symbol=SYM6&pt.i1.comp.i35.type=betline&pt.i0.comp.i9.n=9&bl.i27.line=0%2C1%2C2%2C2%2C2&pt.i1.comp.i21.type=betline&bl.i7.line=1%2C2%2C2%2C2%2C1&pt.i0.comp.i28.type=betline&pt.i1.comp.i31.multi=250&pt.i1.comp.i18.type=betline&pt.i1.comp.i58.freespins=20&pt.i0.comp.i10.symbol=SYM3&pt.i0.comp.i38.n=6&pt.i0.comp.i45.type=betline&pt.i0.comp.i15.n=7&pt.i0.comp.i39.freespins=0&pt.i0.comp.i21.symbol=SYM5&bl.i7.reelset=ALL&pt.i0.comp.i31.type=betline&pt.i1.comp.i15.n=7&pt.i1.comp.i38.n=6&isJackpotWin=false&pt.i1.comp.i20.freespins=0&pt.i0.comp.i52.freespins=0&pt.i1.comp.i7.type=betline&pt.i0.comp.i10.freespins=0&pt.i0.comp.i20.multi=30&pt.i0.comp.i44.symbol=SYM8&pt.i0.comp.i17.multi=900&pt.i1.comp.i56.type=scatter&bl.i29.coins=1&pt.i1.comp.i25.type=betline&pt.i1.comp.i9.n=9&pt.i0.comp.i28.n=4&bl.i9.line=1%2C0%2C1%2C0%2C1&pt.i1.comp.i39.symbol=SYM7&pt.i0.comp.i2.multi=5000&pt.i1.comp.i27.n=3&pt.i0.comp.i0.freespins=0&pt.i1.comp.i25.multi=800&pt.i0.comp.i33.multi=700&pt.i1.comp.i16.freespins=0&pt.i0.comp.i51.freespins=0&pt.i1.comp.i5.type=betline&pt.i1.comp.i35.symbol=SYM7&bl.i25.reelset=ALL&pt.i1.comp.i24.symbol=SYM5&pt.i0.comp.i37.freespins=0&pt.i1.comp.i50.symbol=SYM10&pt.i1.comp.i13.symbol=SYM4&pt.i1.comp.i17.symbol=SYM4&pt.i0.comp.i54.freespins=0&pt.i0.comp.i16.n=8&pt.i0.comp.i39.n=7&bl.i13.reelset=ALL&bl.i0.id=0&pt.i1.comp.i16.n=8&pt.i0.comp.i5.symbol=SYM3&bl.i15.line=0%2C1%2C1%2C1%2C0&pt.i1.comp.i7.symbol=SYM3&pt.i1.comp.i39.n=7&bl.i19.id=19&pt.i0.comp.i38.type=betline&pt.i0.comp.i35.type=betline&pt.i0.comp.i48.symbol=SYM9&pt.i1.comp.i57.freespins=15&pt.i0.comp.i1.symbol=SYM1&pt.i0.comp.i59.symbol=SYM0&pt.i0.comp.i55.symbol=SYM0&pt.i1.comp.i36.multi=20&pt.i1.comp.i31.freespins=0&bl.i9.id=9&bl.i17.line=0%2C2%2C0%2C2%2C0&pt.i1.comp.i9.freespins=0&pt.i0.comp.i48.n=5&playercurrency=%26%23x20AC%3B&pt.i0.comp.i38.symbol=SYM7&pt.i0.comp.i33.symbol=SYM6&pt.i1.comp.i40.multi=400&bl.i28.id=28&pt.i1.comp.i30.multi=175&bl.i19.reelset=ALL&pt.i0.comp.i25.n=9&pt.i1.comp.i58.type=scatter&pt.i1.comp.i28.n=4&pt.i1.comp.i32.freespins=0&pt.i0.comp.i9.freespins=0&pt.i1.comp.i45.symbol=SYM8&credit=500000&pt.i0.comp.i5.type=betline&pt.i0.comp.i11.freespins=0&pt.i0.comp.i26.multi=1600&pt.i0.comp.i25.type=betline&pt.i0.comp.i59.n=7&bl.i1.reelset=ALL&pt.i1.comp.i40.symbol=SYM7&pt.i1.comp.i18.symbol=SYM4&pt.i0.comp.i31.multi=250&pt.i1.comp.i12.symbol=SYM4&pt.i0.comp.i13.freespins=0&pt.i1.comp.i15.type=betline&pt.i0.comp.i26.freespins=0&pt.i0.comp.i53.type=betline&pt.i1.comp.i13.type=betline&pt.i1.comp.i1.multi=1000&pt.i1.comp.i51.symbol=SYM10&pt.i0.comp.i36.n=4&pt.i1.comp.i8.freespins=0&pt.i0.comp.i13.n=5&pt.i1.comp.i46.freespins=0&pt.i1.comp.i33.freespins=0&pt.i1.comp.i17.n=9&pt.i0.comp.i23.type=betline&pt.i0.comp.i32.symbol=SYM6&bl.i17.id=17&pt.i0.comp.i43.symbol=SYM8&pt.i1.comp.i17.freespins=0&pt.i1.comp.i26.multi=1600&pt.i0.comp.i43.type=betline&pt.i1.comp.i32.multi=450&pt.i1.comp.i0.type=betline&pt.i1.comp.i1.symbol=SYM1&pt.i1.comp.i29.multi=100&pt.i0.comp.i25.freespins=0&pt.i0.comp.i49.n=3&pt.i0.comp.i60.symbol=SYM0&pt.i0.comp.i40.freespins=0&pt.i0.comp.i26.n=10&pt.i0.comp.i27.symbol=SYM6&pt.i1.comp.i56.symbol=SYM0&pt.i1.comp.i45.freespins=0&pt.i1.comp.i29.n=5&pt.i0.comp.i23.multi=300&bl.i2.line=2%2C2%2C2%2C2%2C2&pt.i0.comp.i30.multi=175&pt.i1.comp.i34.symbol=SYM6&pt.i1.comp.i43.type=betline&pt.i1.comp.i60.freespins=30&pt.i1.comp.i28.multi=25&bl.i29.id=29&pt.i1.comp.i33.multi=700&pt.i1.comp.i18.freespins=0&pt.i0.comp.i14.n=6&pt.i0.comp.i37.n=5&pt.i0.comp.i0.multi=250&bl.i6.reelset=ALL&pt.i0.comp.i19.multi=15&bl.i20.line=2%2C0%2C0%2C0%2C2&pt.i1.comp.i18.n=10&pt.i1.comp.i33.type=betline&bl.i20.reelset=ALL&pt.i0.comp.i12.freespins=0&pt.i0.comp.i24.multi=500&pt.i1.comp.i53.type=betline&pt.i0.comp.i19.symbol=SYM5&bl.i6.coins=1&pt.i0.comp.i15.type=betline&pt.i0.comp.i23.freespins=0&pt.i0.comp.i32.type=betline&pt.i0.comp.i35.multi=10&pt.i1.comp.i36.type=betline&pt.i0.comp.i4.multi=40&pt.i0.comp.i15.symbol=SYM4&pt.i1.comp.i14.multi=225&pt.i0.comp.i22.multi=200&pt.i1.comp.i54.multi=100&pt.i1.comp.i51.freespins=0&bl.i21.id=21&pt.i1.comp.i19.type=betline&pt.i0.comp.i11.symbol=SYM4&pt.i0.comp.i48.multi=150&pt.i1.comp.i27.multi=10&bl.i23.reelset=ALL&bl.i0.reelset=ALL&bl.i20.coins=1&pt.i0.comp.i16.freespins=0&pt.i1.comp.i6.freespins=0&pt.i1.comp.i29.symbol=SYM6&pt.i1.comp.i22.n=6&pt.i1.comp.i45.n=5&bl.i10.id=10&pt.i0.comp.i4.freespins=0&pt.i1.comp.i25.symbol=SYM5&bl.i3.reelset=ALL&pt.i0.comp.i30.freespins=0&bl.i26.reelset=ALL&bl.i24.line=2%2C0%2C1%2C2%2C0&pt.i1.comp.i24.type=betline&pt.i0.comp.i19.n=3&pt.i1.comp.i57.n=5&pt.i0.comp.i2.symbol=SYM1&pt.i0.comp.i20.type=betline&pt.i1.comp.i48.type=betline&pt.i0.comp.i49.symbol=SYM10&pt.i0.comp.i6.symbol=SYM3&pt.i0.comp.i56.symbol=SYM0&pt.i0.comp.i52.symbol=SYM11&pt.i1.comp.i11.n=3&pt.i1.comp.i34.n=10&pt.i0.comp.i5.n=5&pt.i1.comp.i2.symbol=SYM1&pt.i0.comp.i3.type=betline&pt.i1.comp.i19.multi=15&bl.i28.line=2%2C1%2C0%2C0%2C0&pt.i1.comp.i6.symbol=SYM3&pt.i0.comp.i27.multi=10&pt.i1.comp.i59.multi=4&pt.i0.comp.i9.multi=1000&bl.i12.coins=1&pt.i0.comp.i22.symbol=SYM5&pt.i0.comp.i26.symbol=SYM5&pt.i1.comp.i19.freespins=0&pt.i0.comp.i14.freespins=0&pt.i0.comp.i21.freespins=0&pt.i1.comp.i35.multi=10&pt.i1.comp.i46.n=3&pt.i1.comp.i4.freespins=0&pt.i0.comp.i44.type=betline&pt.i0.comp.i43.multi=5&pt.i0.comp.i48.type=betline&pt.i1.comp.i12.type=betline&pt.i1.comp.i57.type=scatter&pt.i1.comp.i36.symbol=SYM7&pt.i1.comp.i21.symbol=SYM5&pt.i1.comp.i23.n=7&pt.i1.comp.i32.symbol=SYM6&bl.i8.id=8&pt.i0.comp.i16.multi=550&pt.i1.comp.i48.multi=150&pt.i1.comp.i37.freespins=0&pt.i1.comp.i43.symbol=SYM8&pt.i1.comp.i41.multi=600&pt.i0.comp.i56.multi=2&pt.i0.comp.i50.n=4&pt.i0.comp.i41.freespins=0&bl.i6.line=2%2C2%2C1%2C2%2C2&bl.i22.id=22&pt.i1.comp.i35.n=3&pt.i1.comp.i41.type=betline&bl.i12.line=2%2C1%2C2%2C1%2C2&pt.i1.comp.i9.multi=1000&pt.i1.comp.i58.n=6&bl.i29.reelset=ALL&pt.i0.comp.i19.type=betline&pt.i0.comp.i6.freespins=0&pt.i1.comp.i2.multi=5000&pt.i1.comp.i44.freespins=0&pt.i0.comp.i6.n=6&pt.i1.comp.i12.n=4&pt.i1.comp.i3.type=betline&pt.i1.comp.i10.freespins=0&pt.i1.comp.i55.freespins=0&pt.i0.comp.i57.freespins=15&pt.i1.comp.i28.type=betline&bl.i27.coins=1&pt.i0.comp.i34.symbol=SYM6&pt.i0.comp.i40.type=betline&pt.i1.comp.i45.type=betline&pt.i0.comp.i37.symbol=SYM7&pt.i0.comp.i29.n=5&pt.i1.comp.i20.multi=30&pt.i0.comp.i27.freespins=0&pt.i0.comp.i34.freespins=0&pt.i1.comp.i24.n=8&pt.i1.comp.i47.n=4&pt.i1.comp.i47.symbol=SYM9&pt.i1.comp.i27.type=betline&pt.i1.comp.i48.freespins=0&pt.i1.comp.i2.type=betline&pt.i0.comp.i41.type=betline&pt.i0.comp.i2.freespins=0&pt.i1.comp.i38.multi=150&pt.i0.comp.i7.n=7&pt.i0.comp.i43.freespins=0&pt.i0.comp.i11.multi=15&pt.i0.comp.i36.type=betline&pt.i1.comp.i14.symbol=SYM4&pt.i0.comp.i56.type=scatter&pt.i1.comp.i44.symbol=SYM8&pt.i0.comp.i7.type=betline&pt.i1.comp.i43.multi=5&bl.i19.line=0%2C2%2C2%2C2%2C0&bl.i12.reelset=ALL&pt.i0.comp.i17.n=9&bl.i6.id=6&pt.i1.comp.i55.symbol=SYM0&pt.i0.comp.i29.multi=100&pt.i1.comp.i13.n=5&pt.i1.comp.i36.n=4&pt.i1.comp.i59.n=7&pt.i0.comp.i8.freespins=0&bl.i20.id=20&pt.i1.comp.i4.multi=40&gamesoundurl=&pt.i1.comp.i46.multi=5&pt.i0.comp.i12.type=betline&pt.i0.comp.i36.freespins=0&pt.i0.comp.i14.multi=225&pt.i1.comp.i7.multi=400&pt.i0.comp.i45.symbol=SYM8&bl.i19.coins=1&bl.i7.id=7&bl.i18.reelset=ALL&pt.i1.comp.i11.type=betline&pt.i0.comp.i6.multi=250&pt.i0.comp.i55.freespins=0&playercurrencyiso=' . $slotSettings->slotCurrency . '&bl.i1.coins=1&pt.i1.comp.i42.freespins=0&pt.i0.comp.i37.multi=80&pt.i0.comp.i60.n=8&pt.i1.comp.i5.symbol=SYM3&pt.i0.comp.i18.type=betline&pt.i0.comp.i23.symbol=SYM5&playforfun=false&pt.i1.comp.i25.n=9&pt.i1.comp.i48.n=5&pt.i0.comp.i48.freespins=0&pt.i0.comp.i2.type=betline&pt.i1.comp.i20.type=betline&bl.i25.coins=1&pt.i1.comp.i22.multi=200&pt.i0.comp.i8.n=8&pt.i1.comp.i22.freespins=0&pt.i0.comp.i11.type=betline&pt.i1.comp.i35.freespins=0&pt.i0.comp.i18.n=10&pt.i1.comp.i14.n=6&pt.i1.comp.i16.multi=550&pt.i1.comp.i37.n=5&pt.i1.comp.i15.freespins=0&pt.i0.comp.i27.type=betline&pt.i0.comp.i41.multi=600&pt.i1.comp.i28.freespins=0&pt.i0.comp.i7.symbol=SYM3&pt.i0.comp.i59.multi=4&bl.i15.reelset=ALL&pt.i0.comp.i50.freespins=0&pt.i1.comp.i0.freespins=0&pt.i0.comp.i45.multi=200&pt.i1.comp.i57.multi=2&bl.i11.line=0%2C1%2C0%2C1%2C0&historybutton=false&bl.i5.id=5&pt.i0.comp.i18.symbol=SYM4&pt.i0.comp.i42.n=10&pt.i0.comp.i46.freespins=0&pt.i0.comp.i12.multi=35&pt.i1.comp.i14.freespins=0&bl.i3.coins=1&bl.i10.coins=1&pt.i0.comp.i12.symbol=SYM4&pt.i0.comp.i14.symbol=SYM4&pt.i0.comp.i38.multi=150&pt.i0.comp.i58.multi=2&pt.i1.comp.i13.freespins=0&pt.i0.comp.i45.freespins=0&pt.i0.comp.i59.type=scatter&pt.i1.comp.i40.type=betline&pt.i0.comp.i14.type=betline&pt.i1.comp.i41.n=9&pt.i1.comp.i54.type=betline&pt.i1.comp.i0.n=3&pt.i1.comp.i26.symbol=SYM5&pt.i1.comp.i31.symbol=SYM6&pt.i0.comp.i7.multi=400&pt.i1.comp.i51.multi=125&pt.i0.comp.i30.n=6&jackpotcurrency=%26%23x20AC%3B&pt.i0.comp.i47.type=betline&pt.i0.comp.i50.type=betline&pt.i0.comp.i53.n=4&bl.i16.coins=1&bl.i9.coins=1&pt.i1.comp.i37.type=betline&bl.i24.id=24&pt.i1.comp.i11.multi=15&pt.i1.comp.i30.n=6&pt.i0.comp.i1.n=4&pt.i1.comp.i53.n=4&bl.i22.coins=1&pt.i0.comp.i20.n=4&pt.i0.comp.i29.symbol=SYM6&pt.i1.comp.i3.symbol=SYM3&pt.i1.comp.i50.type=betline&pt.i0.comp.i57.type=scatter&pt.i1.comp.i23.freespins=0&bl.i13.id=13&pt.i0.comp.i25.symbol=SYM5&pt.i0.comp.i26.type=betline&pt.i1.comp.i49.multi=5&pt.i0.comp.i9.type=betline&pt.i1.comp.i58.symbol=SYM0&pt.i0.comp.i43.n=3&pt.i1.comp.i47.type=betline&pt.i1.comp.i16.type=betline&pt.i0.comp.i60.type=scatter&pt.i0.comp.i60.multi=10&pt.i1.comp.i20.symbol=SYM5&bl.i10.reelset=ALL&pt.i1.comp.i12.multi=35&pt.i0.comp.i29.freespins=0&pt.i1.comp.i1.n=4&pt.i1.comp.i42.n=10&pt.i1.comp.i52.multi=5&pt.i1.comp.i11.freespins=0&pt.i0.comp.i31.n=7&pt.i0.comp.i9.symbol=SYM3&bl.i23.coins=1&bl.i11.coins=1&pt.i1.comp.i54.symbol=SYM11&bl.i22.reelset=ALL&pt.i0.comp.i54.n=5&pt.i0.comp.i47.freespins=0&pt.i1.comp.i44.type=betline&pt.i0.comp.i16.type=betline&pt.i0.comp.i39.multi=200&bl.i3.line=0%2C1%2C2%2C1%2C0&bl.i4.reelset=ALL&bl.i4.coins=1&pt.i0.comp.i2.n=5&pt.i0.comp.i40.symbol=SYM7&bl.i18.line=2%2C0%2C2%2C0%2C2&pt.i0.comp.i44.freespins=0&pt.i0.comp.i51.symbol=SYM10&pt.i1.comp.i31.n=7&pt.i0.comp.i44.multi=20&pt.i0.comp.i54.type=betline&pt.i1.comp.i54.n=5&pt.i0.comp.i19.freespins=0&pt.i1.comp.i14.type=betline&bl.i11.id=11&pt.i0.comp.i6.type=betline&pt.i1.comp.i2.freespins=0&pt.i0.comp.i35.symbol=SYM7&pt.i1.comp.i25.freespins=0&bl.i9.reelset=ALL&bl.i17.coins=1&pt.i0.comp.i40.n=8&pt.i1.comp.i40.freespins=0&pt.i1.comp.i60.multi=10&pt.i1.comp.i10.multi=2000&pt.i1.comp.i10.symbol=SYM3&pt.i1.comp.i48.symbol=SYM9&bl.i11.reelset=ALL&bl.i16.line=2%2C1%2C1%2C1%2C2&pt.i1.comp.i2.n=5&pt.i1.comp.i20.n=4&pt.i1.comp.i43.n=3&pt.i1.comp.i24.freespins=0&bl.i21.line=0%2C0%2C2%2C0%2C0&pt.i1.comp.i32.type=betline&pt.i0.comp.i39.type=betline&pt.i1.comp.i42.symbol=SYM7&pt.i1.comp.i39.freespins=0&pt.i1.comp.i53.symbol=SYM11&pt.i0.comp.i4.type=betline&pt.i0.comp.i58.freespins=20&bl.i21.coins=1&bl.i28.reelset=ALL&pt.i1.comp.i26.freespins=0&pt.i0.comp.i51.n=5&pt.i1.comp.i1.type=betline&pt.i1.comp.i58.multi=2&pt.i0.comp.i46.multi=5&bl.i1.line=0%2C0%2C0%2C0%2C0&pt.i0.comp.i42.type=betline&pt.i0.comp.i20.freespins=0&pt.i0.comp.i33.freespins=0&pt.i0.comp.i51.multi=125&pt.i1.comp.i29.type=betline&pt.i0.comp.i30.symbol=SYM6&bl.i16.reelset=ALL&pt.i0.comp.i41.symbol=SYM7&pt.i0.comp.i49.multi=5&pt.i0.comp.i54.multi=100&pt.i1.comp.i32.n=8&pt.i1.comp.i55.n=3&pt.i0.comp.i3.n=3&pt.i1.comp.i59.type=scatter&pt.i1.comp.i6.type=betline&pt.i0.comp.i46.symbol=SYM9&pt.i0.comp.i49.type=betline&pt.i1.comp.i4.symbol=SYM3&pt.i1.comp.i38.freespins=0&bl.i8.line=1%2C0%2C0%2C0%2C1&pt.i1.comp.i39.type=betline&pt.i0.comp.i24.symbol=SYM5&pt.i1.comp.i53.freespins=0&pt.i0.comp.i47.multi=20&pt.i0.comp.i41.n=9&pt.i1.comp.i42.type=betline&pt.i1.comp.i59.symbol=SYM0&pt.i0.comp.i59.freespins=25&pt.i1.comp.i55.multi=2&bl.i8.coins=1&pt.i0.comp.i32.freespins=0&bl.i23.id=23&bl.i15.coins=1&pt.i0.comp.i52.type=betline&pt.i0.comp.i53.multi=15&pt.i1.comp.i37.symbol=SYM7&pt.i1.comp.i3.n=3&pt.i1.comp.i21.n=5&pt.i1.comp.i44.n=4&pt.i0.comp.i18.freespins=0&bl.i12.id=12&pt.i1.comp.i15.symbol=SYM4&pt.i1.comp.i49.type=betline&pt.i1.comp.i3.freespins=0&bl.i4.id=4&bl.i7.coins=1&pt.i1.comp.i52.type=betline&pt.i0.comp.i52.n=3&pt.i0.comp.i60.freespins=30&pt.i0.comp.i52.multi=5&pt.i1.comp.i9.symbol=SYM3&pt.i0.comp.i3.symbol=SYM3&pt.i0.comp.i24.type=betline&bl.i14.coins=1&pt.i0.comp.i57.symbol=SYM0&pt.i1.comp.i12.freespins=0&pt.i0.comp.i4.n=4&pt.i1.comp.i10.n=10&pt.i1.comp.i56.n=4&bl.i26.line=1%2C2%2C0%2C2%2C1&pt.i1.comp.i56.multi=2&pt.i1.comp.i33.n=9';
            case 'initfreespin':
                $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = 'rs.i1.r.i0.syms=SYM5%2CSYM0%2CSYM6&freespins.betlevel=1&g4mode=false&freespins.win.coins=0&playercurrency=%26%23x20AC%3B&historybutton=false&rs.i0.r.i4.hold=false&gamestate.history=basic&rs.i1.r.i2.hold=false&rs.i1.r.i3.pos=18&rs.i0.r.i1.syms=SYM5%2CSYM5%2CSYM7&game.win.cents=0&rs.i0.id=freespin&rs.i1.r.i3.hold=false&totalwin.coins=0&credit=497520&rs.i1.r.i4.pos=30&gamestate.current=freespin&freespins.initial=15&jackpotcurrency=%26%23x20AC%3B&multiplier=1&bet.betlines=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&rs.i0.r.i0.syms=SYM2%2CSYM7%2CSYM7&freespins.denomination=2.000&rs.i0.r.i3.syms=SYM4%2CSYM4%2CSYM4&rs.i1.r.i1.syms=SYM2%2CSYM3%2CSYM3&rs.i1.r.i1.pos=3&freespins.win.cents=0&freespins.totalwin.coins=0&freespins.total=15&isJackpotWin=false&gamestate.stack=basic%2Cfreespin&rs.i0.r.i0.pos=3&rs.i1.r.i4.syms=SYM1%2CSYM7%2CSYM7&freespins.betlines=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&gamesoundurl=&rs.i1.r.i2.pos=15&bet.betlevel=1&rs.i1.nearwin=4%2C3&rs.i0.r.i1.pos=18&rs.i1.r.i3.syms=SYM4%2CSYM0%2CSYM6&game.win.coins=0&playercurrencyiso=' . $slotSettings->slotCurrency . '&rs.i1.r.i0.hold=false&rs.i0.r.i1.hold=false&freespins.wavecount=1&freespins.multiplier=1&playforfun=false&jackpotcurrencyiso=' . $slotSettings->slotCurrency . "&clientaction=initfreespin&rs.i0.r.i2.hold=false&rs.i0.r.i4.syms=SYM6%2CSYM5%2CSYM5&rs.i0.r.i2.pos=0&rs.i1.r.i2.syms=SYM6%2CSYM6%2CSYM0&rs.i1.r.i0.pos=24&totalwin.cents=0&gameover=false&rs.i0.r.i0.hold=false&rs.i1.id=basic&rs.i0.r.i3.pos=3&rs.i1.r.i4.hold=false&freespins.left=15&rs.i0.r.i4.pos=20&rs.i1.r.i2.attention.i0=2&rs.i1.r.i0.attention.i0=1&rs.i1.r.i3.attention.i0=1&nextaction=freespin&wavecount=1&rs.i0.r.i2.syms=SYM3%2CSYM3%2CSYM3&rs.i1.r.i1.hold=false&rs.i0.r.i3.hold=false&game.win.amount=0.00&bet.denomination=2&freespins.totalwin.cents=0\n";
                break;
            case 'spin':
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501 = [];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[0] = [
                    2,
                    2,
                    2,
                    2,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[1] = [
                    1,
                    1,
                    1,
                    1,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[2] = [
                    3,
                    3,
                    3,
                    3,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[3] = [
                    1,
                    2,
                    3,
                    2,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[4] = [
                    3,
                    2,
                    1,
                    2,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[5] = [
                    1,
                    1,
                    2,
                    1,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[6] = [
                    3,
                    3,
                    2,
                    3,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[7] = [
                    2,
                    3,
                    3,
                    3,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[8] = [
                    2,
                    1,
                    1,
                    1,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[9] = [
                    2,
                    1,
                    2,
                    1,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[10] = [
                    2,
                    3,
                    2,
                    3,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[11] = [
                    1,
                    2,
                    1,
                    2,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[12] = [
                    3,
                    2,
                    3,
                    2,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[13] = [
                    2,
                    2,
                    1,
                    2,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[14] = [
                    2,
                    2,
                    3,
                    2,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[15] = [
                    1,
                    2,
                    2,
                    2,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[16] = [
                    3,
                    2,
                    2,
                    2,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[17] = [
                    1,
                    3,
                    1,
                    3,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[18] = [
                    3,
                    1,
                    3,
                    1,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[19] = [
                    1,
                    3,
                    3,
                    3,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[20] = [
                    3,
                    1,
                    1,
                    1,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[21] = [
                    1,
                    1,
                    3,
                    1,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[22] = [
                    3,
                    3,
                    1,
                    3,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[23] = [
                    1,
                    3,
                    2,
                    1,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[24] = [
                    3,
                    1,
                    2,
                    3,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[25] = [
                    2,
                    1,
                    3,
                    1,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[26] = [
                    2,
                    3,
                    1,
                    3,
                    2
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[27] = [
                    1,
                    2,
                    3,
                    3,
                    3
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[28] = [
                    3,
                    2,
                    1,
                    1,
                    1
                ];
                $_obf_0D06173B1D170C012431323E04263E1407291B0F093501[29] = [
                    2,
                    1,
                    2,
                    3,
                    2
                ];
                $lines = 30;
                $slotSettings->CurrentDenom = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
                $slotSettings->CurrentDenomination = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] != 'freespin' )
                {
                    $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_betlevel'];
                    $allbet = $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 * $lines;
                    $slotSettings->UpdateJackpots($allbet);
                    if( !isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) )
                    {
                        $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'bet';
                    }
                    $slotSettings->SetBalance(-1 * $allbet, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $_obf_0D2A0526273612293511363C26193E1C130B2719192611 = $allbet / 100 * $slotSettings->GetPercent();
                    $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), $_obf_0D2A0526273612293511363C26193E1C130B2719192611, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $slotSettings->UpdateJackpots($allbet);
                    $slotSettings->SetGameData('FlowersChristmasNETBonusWin', 0);
                    $slotSettings->SetGameData('FlowersChristmasNETFreeGames', 0);
                    $slotSettings->SetGameData('FlowersChristmasNETCurrentFreeGame', 0);
                    $slotSettings->SetGameData('FlowersChristmasNETTotalWin', 0);
                    $slotSettings->SetGameData('FlowersChristmasNETBet', $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811);
                    $slotSettings->SetGameData('FlowersChristmasNETDenom', $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination']);
                    $slotSettings->SetGameData('FlowersChristmasNETFreeBalance', sprintf('%01.2f', $slotSettings->GetBalance()) * 100);
                    $_obf_0D122B3D2D04293233283B3C1E0E09121B342D17370101 = 1;
                }
                else
                {
                    $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'] = $slotSettings->GetGameData('FlowersChristmasNETDenom');
                    $slotSettings->CurrentDenom = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
                    $slotSettings->CurrentDenomination = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet_denomination'];
                    $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 = $slotSettings->GetGameData('FlowersChristmasNETBet');
                    $allbet = $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 * $lines;
                    $slotSettings->SetGameData('FlowersChristmasNETCurrentFreeGame', $slotSettings->GetGameData('FlowersChristmasNETCurrentFreeGame') + 1);
                    $_obf_0D122B3D2D04293233283B3C1E0E09121B342D17370101 = $slotSettings->slotFreeMpl;
                }
                $_obf_0D360F0140113330275B14311E3516150112390A0F1B22 = $slotSettings->GetSpinSettings($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'], $allbet, $lines);
                $winType = $_obf_0D360F0140113330275B14311E3516150112390A0F1B22[0];
                $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $_obf_0D360F0140113330275B14311E3516150112390A0F1B22[1];
                $_obf_0D1713290429323C0B2B02212E103E165B173416383632 = round($slotSettings->GetBalance() * $slotSettings->CurrentDenom * 100);
                if( $winType == 'bonus' && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' )
                {
                    $winType = 'win';
                }
                $_obf_0D132A30270211073E401007170115293E100D24231E01 = rand(1, 500);
                $_obf_0D1418182C1C192421092931083D040815011D042E3C11 = '';
                for( $i = 0; $i <= 2000; $i++ )
                {
                    $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 = 0;
                    $_obf_0D3B0D253C3727143F3F143321312E110B0F291F090B32 = [];
                    $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001 = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ];
                    $wild = ['1'];
                    $_obf_0D14312A1B060A05121A06051D19073F21010A22051E11 = '0';
                    $reels = $slotSettings->GetReelStrips($winType, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $_obf_0D2D0B033233160E211539060836280D0C162309355C32 = 0;
                    for( $k = 0; $k < $lines; $k++ )
                    {
                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '';
                        for( $j = 0; $j < count($slotSettings->SymbolGame); $j++ )
                        {
                            $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 = (string)$slotSettings->SymbolGame[$j];
                            if( $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 == $_obf_0D14312A1B060A05121A06051D19073F21010A22051E11 || !isset($slotSettings->Paytable['SYM_' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11]) )
                            {
                            }
                            else
                            {
                                $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311 = [];
                                $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0] = $reels['reel1'][$_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][0] - 1];
                                $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1] = $reels['reel2'][$_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][1] - 1];
                                $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2] = $reels['reel3'][$_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][2] - 1];
                                $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3] = $reels['reel4'][$_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][3] - 1];
                                $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[4] = $reels['reel5'][$_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][4] - 1];
                                if( ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild)) )
                                {
                                    $mpl = 1;
                                    $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32 = 2;
                                    if( $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 >= 3 && $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 <= 7 )
                                    {
                                        $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 + 10;
                                        for( $_obf_0D25163B233C13071A0429055C12312F0F351930391632 = 0; $_obf_0D25163B233C13071A0429055C12312F0F351930391632 < 2; $_obf_0D25163B233C13071A0429055C12312F0F351930391632++ )
                                        {
                                            if( $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[$_obf_0D25163B233C13071A0429055C12312F0F351930391632] == $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 )
                                            {
                                                $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32++;
                                            }
                                        }
                                    }
                                    if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) )
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) )
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable['SYM_' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][$_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32] * $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 * $mpl * $_obf_0D122B3D2D04293233283B3C1E0E09121B342D17370101;
                                    if( $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 )
                                    {
                                        $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.reelset=basic&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.coins=' . $_obf_0D365B172533170712222423300A1B092C161521071B32 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i0=0%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][0] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i1=1%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][1] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i2=2%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][2] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.wintype=coins&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.betline=' . $k . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.sym=SYM' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.direction=left_to_right&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.cents=' . ($_obf_0D365B172533170712222423300A1B092C161521071B32 * $slotSettings->CurrentDenomination * 100) . '';
                                        $_obf_0D1418182C1C192421092931083D040815011D042E3C11 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11;
                                    }
                                }
                                if( ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild)) )
                                {
                                    $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32 = 3;
                                    if( $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 >= 3 && $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 <= 7 )
                                    {
                                        $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 + 10;
                                        for( $_obf_0D25163B233C13071A0429055C12312F0F351930391632 = 0; $_obf_0D25163B233C13071A0429055C12312F0F351930391632 < 3; $_obf_0D25163B233C13071A0429055C12312F0F351930391632++ )
                                        {
                                            if( $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[$_obf_0D25163B233C13071A0429055C12312F0F351930391632] == $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 )
                                            {
                                                $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32++;
                                            }
                                        }
                                    }
                                    $mpl = 1;
                                    if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild) )
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild) )
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable['SYM_' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][$_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32] * $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 * $mpl * $_obf_0D122B3D2D04293233283B3C1E0E09121B342D17370101;
                                    if( $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 )
                                    {
                                        $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.reelset=basic&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.coins=' . $_obf_0D365B172533170712222423300A1B092C161521071B32 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i0=0%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][0] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i1=1%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][1] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i2=2%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][2] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.wintype=coins&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.betline=' . $k . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.sym=SYM' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.direction=left_to_right&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.cents=' . ($_obf_0D365B172533170712222423300A1B092C161521071B32 * $slotSettings->CurrentDenomination * 100) . '';
                                        $_obf_0D1418182C1C192421092931083D040815011D042E3C11 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11;
                                    }
                                }
                                if( ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3], $wild)) )
                                {
                                    $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32 = 4;
                                    if( $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 >= 3 && $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 <= 7 )
                                    {
                                        $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 + 10;
                                        for( $_obf_0D25163B233C13071A0429055C12312F0F351930391632 = 0; $_obf_0D25163B233C13071A0429055C12312F0F351930391632 < 4; $_obf_0D25163B233C13071A0429055C12312F0F351930391632++ )
                                        {
                                            if( $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[$_obf_0D25163B233C13071A0429055C12312F0F351930391632] == $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 )
                                            {
                                                $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32++;
                                            }
                                        }
                                    }
                                    $mpl = 1;
                                    if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3], $wild) )
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3], $wild) )
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable['SYM_' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][$_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32] * $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 * $mpl * $_obf_0D122B3D2D04293233283B3C1E0E09121B342D17370101;
                                    if( $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 )
                                    {
                                        $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.reelset=basic&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.coins=' . $_obf_0D365B172533170712222423300A1B092C161521071B32 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i0=0%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][0] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i1=1%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][1] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i2=2%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][2] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i3=3%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][3] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.wintype=coins&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.betline=' . $k . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.sym=SYM' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.direction=left_to_right&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.cents=' . ($_obf_0D365B172533170712222423300A1B092C161521071B32 * $slotSettings->CurrentDenomination * 100) . '';
                                        $_obf_0D1418182C1C192421092931083D040815011D042E3C11 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11;
                                    }
                                }
                                if( ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3], $wild)) && ($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[4] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[4], $wild)) )
                                {
                                    $mpl = 1;
                                    $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32 = 5;
                                    if( $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 >= 3 && $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 <= 7 )
                                    {
                                        $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 + 10;
                                        for( $_obf_0D25163B233C13071A0429055C12312F0F351930391632 = 0; $_obf_0D25163B233C13071A0429055C12312F0F351930391632 < 5; $_obf_0D25163B233C13071A0429055C12312F0F351930391632++ )
                                        {
                                            if( $_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[$_obf_0D25163B233C13071A0429055C12312F0F351930391632] == $_obf_0D161F315C3E07403D2840193C06352D1F072417280611 )
                                            {
                                                $_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32++;
                                            }
                                        }
                                    }
                                    if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3], $wild) && in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[4], $wild) )
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[0], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[1], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[2], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[3], $wild) || in_array($_obf_0D17352F2F5B270D3714303C08381901210F1B150D1311[4], $wild) )
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable['SYM_' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][$_obf_0D071B212611040A1736371C140F1C5B1A31143B3F1A32] * $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 * $mpl * $_obf_0D122B3D2D04293233283B3C1E0E09121B342D17370101;
                                    if( $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 )
                                    {
                                        $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.reelset=basic&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.coins=' . $_obf_0D365B172533170712222423300A1B092C161521071B32 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i0=0%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][0] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i1=1%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][1] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i2=2%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][2] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i3=3%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][3] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.pos.i4=4%2C' . ($_obf_0D06173B1D170C012431323E04263E1407291B0F093501[$k][4] - 1) . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.wintype=coins&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.betline=' . $k . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.sym=SYM' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 . '&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.direction=left_to_right&ws.i' . $_obf_0D2D0B033233160E211539060836280D0C162309355C32 . '.types.i0.cents=' . ($_obf_0D365B172533170712222423300A1B092C161521071B32 * $slotSettings->CurrentDenomination * 100) . '';
                                        $_obf_0D1418182C1C192421092931083D040815011D042E3C11 = $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11;
                                    }
                                }
                            }
                        }
                        if( $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k] > 0 && $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 != '' )
                        {
                            array_push($_obf_0D3B0D253C3727143F3F143321312E110B0F291F090B32, $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32);
                            $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 += $_obf_0D18173F3929380B1C1D380D0F145B1215283B39164001[$k];
                            $_obf_0D2D0B033233160E211539060836280D0C162309355C32++;
                        }
                    }
                    $_obf_0D2E3D09151B313613081436311018092C1A183E252501 = 0;
                    $_obf_0D0A0E21363702180C2B17091035152718314008033222 = '';
                    $_obf_0D02342539051D31282637403B161036163E0B2D301401 = 0;
                    $_obf_0D2A350433382703193E3D095B5C3B160A253E01191622 = [];
                    for( $r = 1; $r <= 5; $r++ )
                    {
                        for( $_obf_0D31403C0837332A1A1711312A3415151610280F122122 = 0; $_obf_0D31403C0837332A1A1711312A3415151610280F122122 <= 2; $_obf_0D31403C0837332A1A1711312A3415151610280F122122++ )
                        {
                            if( $reels['reel' . $r][$_obf_0D31403C0837332A1A1711312A3415151610280F122122] == $_obf_0D14312A1B060A05121A06051D19073F21010A22051E11 )
                            {
                                $_obf_0D02342539051D31282637403B161036163E0B2D301401++;
                                $_obf_0D2A350433382703193E3D095B5C3B160A253E01191622[] = '&ws.i0.pos.i' . ($r - 1) . '=' . ($r - 1) . '%2C' . $_obf_0D31403C0837332A1A1711312A3415151610280F122122 . '';
                            }
                        }
                    }
                    if( $_obf_0D02342539051D31282637403B161036163E0B2D301401 >= 4 )
                    {
                        $_obf_0D0A0E21363702180C2B17091035152718314008033222 = '&ws.i0.types.i0.freespins=' . $slotSettings->slotFreeCount[$_obf_0D02342539051D31282637403B161036163E0B2D301401] . '&ws.i0.reelset=basic&ws.i0.betline=null&ws.i0.types.i0.wintype=freespins&ws.i0.direction=none' . implode('', $_obf_0D2A350433382703193E3D095B5C3B160A253E01191622);
                    }
                    $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 += $_obf_0D2E3D09151B313613081436311018092C1A183E252501;
                    if( $i > 1000 )
                    {
                        $winType = 'none';
                    }
                    if( $slotSettings->increaseRTP && $winType == 'win' && $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 < ($allbet * rand(2, 5)) )
                    {
                    }
                    else if( !$slotSettings->increaseRTP && $winType == 'win' && $allbet < $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 )
                    {
                    }
                    else
                    {
                        if( $i > 1500 )
                        {
                            $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"Bad Reel Strip"}';
                            exit( $response );
                        }
                        if( $_obf_0D02342539051D31282637403B161036163E0B2D301401 >= 4 && $winType != 'bonus' )
                        {
                        }
                        else if( $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 <= $_obf_0D3030072F273706293C133F2F072B113B383322291201 && $winType == 'bonus' )
                        {
                            $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 = $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''));
                            if( $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 < $_obf_0D3030072F273706293C133F2F072B113B383322291201 )
                            {
                                $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001;
                            }
                            else
                            {
                                break;
                            }
                        }
                        else if( $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 > 0 && $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 <= $_obf_0D3030072F273706293C133F2F072B113B383322291201 && $winType == 'win' )
                        {
                            $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 = $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''));
                            if( $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 < $_obf_0D3030072F273706293C133F2F072B113B383322291201 )
                            {
                                $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001;
                            }
                            else
                            {
                                break;
                            }
                        }
                        else if( $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 == 0 && $winType == 'none' )
                        {
                            break;
                        }
                    }
                }
                $freeState = '';
                if( $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 > 0 )
                {
                    $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), -1 * $_obf_0D223D300733143F3C15321D250D060F0C19322E043522);
                    $slotSettings->SetBalance($_obf_0D223D300733143F3C15321D250D060F0C19322E043522);
                }
                $_obf_0D0C361D2E35362209025C2317232809271D34270D3232 = $_obf_0D223D300733143F3C15321D250D060F0C19322E043522;
                $_obf_0D3E331C040E390B031B03100422040311293E023E0322 = '&rs.i0.r.i0.syms=SYM' . $reels['reel1'][0] . '%2CSYM' . $reels['reel1'][1] . '%2CSYM' . $reels['reel1'][2] . '';
                $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i1.syms=SYM' . $reels['reel2'][0] . '%2CSYM' . $reels['reel2'][1] . '%2CSYM' . $reels['reel2'][2] . '');
                $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i2.syms=SYM' . $reels['reel3'][0] . '%2CSYM' . $reels['reel3'][1] . '%2CSYM' . $reels['reel3'][2] . '');
                $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i3.syms=SYM' . $reels['reel4'][0] . '%2CSYM' . $reels['reel4'][1] . '%2CSYM' . $reels['reel4'][2] . '');
                $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= ('&rs.i0.r.i4.syms=SYM' . $reels['reel5'][0] . '%2CSYM' . $reels['reel5'][1] . '%2CSYM' . $reels['reel5'][2] . '');
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' )
                {
                    $slotSettings->SetGameData('FlowersChristmasNETBonusWin', $slotSettings->GetGameData('FlowersChristmasNETBonusWin') + $_obf_0D223D300733143F3C15321D250D060F0C19322E043522);
                    $slotSettings->SetGameData('FlowersChristmasNETTotalWin', $slotSettings->GetGameData('FlowersChristmasNETTotalWin') + $_obf_0D223D300733143F3C15321D250D060F0C19322E043522);
                }
                else
                {
                    $slotSettings->SetGameData('FlowersChristmasNETTotalWin', $_obf_0D223D300733143F3C15321D250D060F0C19322E043522);
                }
                $fs = 0;
                if( $_obf_0D02342539051D31282637403B161036163E0B2D301401 >= 4 )
                {
                    $slotSettings->SetGameData('FlowersChristmasNETFreeStartWin', $_obf_0D223D300733143F3C15321D250D060F0C19322E043522);
                    $slotSettings->SetGameData('FlowersChristmasNETBonusWin', $_obf_0D223D300733143F3C15321D250D060F0C19322E043522);
                    $slotSettings->SetGameData('FlowersChristmasNETFreeGames', $slotSettings->slotFreeCount[$_obf_0D02342539051D31282637403B161036163E0B2D301401]);
                    $fs = $slotSettings->GetGameData('FlowersChristmasNETFreeGames');
                    $freeState = '&freespins.betlines=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&freespins.totalwin.cents=0&nextaction=freespin&freespins.left=' . $fs . '&freespins.wavecount=1&freespins.multiplier=1&gamestate.stack=basic%2Cfreespin&freespins.totalwin.coins=0&freespins.total=' . $fs . '&freespins.win.cents=0&gamestate.current=freespin&freespins.initial=' . $fs . '&freespins.win.coins=0&freespins.betlevel=' . $slotSettings->GetGameData('FlowersChristmasNETBet') . '&totalwin.coins=' . $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 . '&credit=' . $_obf_0D1713290429323C0B2B02212E103E165B173416383632 . '&totalwin.cents=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 * $slotSettings->CurrentDenomination * 100) . '&game.win.amount=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 / $slotSettings->CurrentDenomination) . '';
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= $freeState;
                }
                $_obf_0D5B5C2E0D1C3D1F232F3E051D3225380127293C2A2432 = implode('', $_obf_0D3B0D253C3727143F3F143321312E110B0F291F090B32);
                $_obf_0D273522403840350F0A36072E150A0524143F382C3B32 = '' . json_encode($reels) . '';
                $_obf_0D28393910101E062539311B3F371C121912162B061E32 = '' . json_encode($slotSettings->Jackpots) . '';
                $_obf_0D5C11261E1F38095C0E0E235C4034360E2A030D101632 = '';
                $slotSettings->SetGameData('FlowersChristmasNETGambleStep', 5);
                $_obf_0D0B38261D090527042502043006023133212F0F040922 = $slotSettings->GetGameData('FlowersChristmasNETCards');
                $_obf_0D09180D0504183B32303915040A05153C2D3D5C2D3422 = 'false';
                if( $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 > 0 )
                {
                    $state = 'gamble';
                    $_obf_0D363C3707403E05343C1627072C373E38181F31364032 = 'false';
                    $_obf_0D2C2D2C19193E0B19041D32270410071A0A03145B0E11 = 'spin';
                    $_obf_0D363C3707403E05343C1627072C373E38181F31364032 = 'true';
                }
                else
                {
                    $state = 'idle';
                    $_obf_0D363C3707403E05343C1627072C373E38181F31364032 = 'true';
                    $_obf_0D2C2D2C19193E0B19041D32270410071A0A03145B0E11 = 'spin';
                }
                $_obf_0D363C3707403E05343C1627072C373E38181F31364032 = 'true';
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' )
                {
                    $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 = $slotSettings->GetGameData('FlowersChristmasNETBonusWin');
                    if( $slotSettings->GetGameData($slotSettings->slotId . 'FreeGames') <= $slotSettings->GetGameData($slotSettings->slotId . 'CurrentFreeGame') )
                    {
                        $_obf_0D2C2D2C19193E0B19041D32270410071A0A03145B0E11 = 'spin';
                        $_obf_0D0427341C061A1F18081137180E140139312F32403E22 = 'basic';
                        $_obf_0D060B0B1301311C1A0515383B145B2F182B37341C3401 = 'basic';
                    }
                    else
                    {
                        $_obf_0D060B0B1301311C1A0515383B145B2F182B37341C3401 = 'freespin';
                        $_obf_0D2C2D2C19193E0B19041D32270410071A0A03145B0E11 = 'freespin';
                        $_obf_0D0427341C061A1F18081137180E140139312F32403E22 = 'basic%2Cfreespin';
                    }
                    $fs = $slotSettings->GetGameData('FlowersChristmasNETFreeGames');
                    $_obf_0D264018360F28122511082B2E351904260803132F2732 = $slotSettings->GetGameData('FlowersChristmasNETFreeGames') - $slotSettings->GetGameData('FlowersChristmasNETCurrentFreeGame');
                    $freeState = '&freespins.betlines=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&freespins.totalwin.cents=0&nextaction=' . $_obf_0D2C2D2C19193E0B19041D32270410071A0A03145B0E11 . '&freespins.left=' . $_obf_0D264018360F28122511082B2E351904260803132F2732 . '&freespins.wavecount=1&freespins.multiplier=1&gamestate.stack=' . $_obf_0D0427341C061A1F18081137180E140139312F32403E22 . '&freespins.totalwin.coins=' . $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 . '&freespins.total=' . $fs . '&freespins.win.cents=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 / $slotSettings->CurrentDenomination * 100) . '&gamestate.current=' . $_obf_0D060B0B1301311C1A0515383B145B2F182B37341C3401 . '&freespins.initial=' . $fs . '&freespins.win.coins=' . $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 . '&freespins.betlevel=' . $slotSettings->GetGameData('FlowersChristmasNETBet') . '&totalwin.coins=' . $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 . '&credit=' . $_obf_0D1713290429323C0B2B02212E103E165B173416383632 . '&totalwin.cents=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 * $slotSettings->CurrentDenomination * 100) . '&game.win.amount=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 / $slotSettings->CurrentDenomination) . '';
                    $_obf_0D3E331C040E390B031B03100422040311293E023E0322 .= $freeState;
                }
                $response = '{"responseEvent":"spin","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":{"freeState":"' . $freeState . '","slotLines":' . $lines . ',"slotBet":' . $_obf_0D3D290805232F1F3530185B0D2E05022C1E020B3F3811 . ',"totalFreeGames":' . $slotSettings->GetGameData('FlowersChristmasNETFreeGames') . ',"currentFreeGames":' . $slotSettings->GetGameData('FlowersChristmasNETCurrentFreeGame') . ',"Balance":' . $_obf_0D1713290429323C0B2B02212E103E165B173416383632 . ',"afterBalance":' . $_obf_0D1713290429323C0B2B02212E103E165B173416383632 . ',"bonusWin":' . $slotSettings->GetGameData('FlowersChristmasNETBonusWin') . ',"totalWin":' . $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 . ',"winLines":[],"Jackpots":' . $_obf_0D28393910101E062539311B3F371C121912162B061E32 . ',"reelsSymbols":' . $_obf_0D273522403840350F0A36072E150A0524143F382C3B32 . '}}';
                $slotSettings->SaveLogReport($response, $allbet, $lines, $_obf_0D0C361D2E35362209025C2317232809271D34270D3232, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                $_obf_0D1713290429323C0B2B02212E103E165B173416383632 = round($slotSettings->GetBalance() * $slotSettings->CurrentDenom * 100);
                $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = 'rs.i0.r.i1.pos=18&g4mode=false&game.win.coins=' . $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 . '&playercurrency=%26%23x20AC%3B&playercurrencyiso=' . $slotSettings->slotCurrency . '&historybutton=false&rs.i0.r.i1.hold=false&rs.i0.r.i4.hold=false&gamestate.history=basic&playforfun=false&jackpotcurrencyiso=' . $slotSettings->slotCurrency . '&clientaction=spin&rs.i0.r.i2.hold=false&game.win.cents=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 * $slotSettings->CurrentDenomination * 100) . '&rs.i0.r.i2.pos=47&rs.i0.id=basic&totalwin.coins=' . $_obf_0D223D300733143F3C15321D250D060F0C19322E043522 . '&credit=' . $_obf_0D1713290429323C0B2B02212E103E165B173416383632 . '&totalwin.cents=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 * $slotSettings->CurrentDenomination * 100) . '&gamestate.current=basic&gameover=true&rs.i0.r.i0.hold=false&jackpotcurrency=%26%23x20AC%3B&multiplier=1&rs.i0.r.i3.pos=4&rs.i0.r.i4.pos=5&isJackpotWin=false&gamestate.stack=basic&nextaction=spin&rs.i0.r.i0.pos=7&wavecount=1&gamesoundurl=&rs.i0.r.i3.hold=false&game.win.amount=' . ($_obf_0D223D300733143F3C15321D250D060F0C19322E043522 / $slotSettings->CurrentDenomination) . '' . $_obf_0D3E331C040E390B031B03100422040311293E023E0322 . $_obf_0D5B5C2E0D1C3D1F232F3E051D3225380127293C2A2432;
                break;
        }
        $response = $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[0];
        $slotSettings->SaveGameData();
        \DB::commit();
        return $response;
    }
}

