<?php 
function ReelGen($rg)
{
    $_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11 = explode('reelStrip', file_get_contents(base_path() . '/app/Games/StarBurstNET/reels.txt'));
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011 = sha1($rg . $_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[4] . $_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[2] . $_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[3] . $GLOBALS['rgrc'] . $_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[0] . $_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[1]);
    $GLOBALS['rgrc'] = $GLOBALS['rgrc'] + 3;
    return md5($_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011);
}
function CheckReels($rc)
{
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011 = [];
    $_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11 = explode('reelStrip', file_get_contents(base_path() . '/app/Games/StarBurstNET/reels.txt'));
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel1'] = sha1($_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[0]);
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel2'] = sha1($_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[1]);
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel3'] = sha1($_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[2]);
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel4'] = sha1($_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[3]);
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel5'] = sha1($_obf_0D5B19210A2405130F0F3B361D212F371810325B2F0B11[4]);
    $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['rp'] = $GLOBALS['rgrc'];
    $_obf_0D1B240806322B3424010D301B2D371E1D170B1F2B0332 = md5($_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel1'] . $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel2'] . $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel3'] . $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel4'] . $_obf_0D2E140A1A5B3E3D3E21212C352E1B1E08243F09014011['reel5'] . $GLOBALS['rgrc'] . $rc);
    return $_obf_0D1B240806322B3424010D301B2D371E1D170B1F2B0332;
}
