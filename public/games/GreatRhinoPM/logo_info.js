var UHTLogotypeInfo = {
    "ext_test2": {"src": "oneworks_logo.png", "bg": "#000000", "fit": "shrink"},
    "oneworks": {"src": "oneworks_logo.png", "bg": "#000000", "fit": "shrink"},
	"ow_cash": {"src": "oneworks_logo.png", "bg": "#000000", "fit": "shrink"}
};

var UHTLobbySeparateIcons = {
	"zh" : "_zh/",
	"zt" : "_zh/"
}

UHT_ForceClickForSounds = true;
UHT_STILLCHECKMONEYONSPIN = true;

var timeoutPatchCustomMessagesLabels = null;
function PatchCustomMessagesLabels()
{
	if (timeoutPatchCustomMessagesLabels != null)
		clearTimeout(timeoutPatchCustomMessagesLabels);
	if (window["SystemMessageManager"] == undefined)
	{
		timeoutPatchCustomMessagesLabels = setTimeout(PatchCustomMessagesLabels, 10);
		return;
	}
	var oPT = SystemMessageManager.ProcessText;
	SystemMessageManager.ProcessText = function(text)
	{
		if (text != undefined)
			return oPT.call(this, text);
		else
			return text;
	}
}
PatchCustomMessagesLabels();

var timeoutPatchColombia = null;
var rememberedPT = null;
function PatchColombia()
{
	if (timeoutPatchColombia != null)
		clearTimeout(timeoutPatchColombia);

	var fixed = false;
	
	if (rememberedPT == null)
		if (window["globalRuntime"] != undefined)
			if (window["globalRuntime"].sceneRoots.length > 1)
			{
				var root = globalRuntime.sceneRoots[1];
				var paytable = root.GetComponentsInChildren(Paytable, true);
				if (paytable.length == 0)
					paytable = root.GetComponentsInChildren(Paytable_mobile, true);
				
				if (paytable.length>0)
					rememberedPT = paytable[0];
				else
					fixed = true;
			}
	if (rememberedPT != null)
		if (rememberedPT.gameObject.activeSelf)
		{
			if (!XT.GetBool(Vars.FromServer_AllowCoins) && (window["JurisdictionCustomization"] != undefined))
			{
				var jc = rememberedPT.GetComponentsInChildren(JurisdictionCustomization, true);
				for (var jci=0; jci<jc.length; jci++)
					if (jc[jci].jurisdictionRequirement.name == "FromServer_AllowCoins")
						jc[jci].gameObject.SetActive(false);
			}
			
			fixed = true;
		}		
	if (!fixed)
	{
		timeoutPatchColombia = setTimeout(PatchColombia, 10);
		return;
	}
}
PatchColombia();


var timeoutPatchAGCC = null;
function PatchAGCC()  // AND CHINESE SOUND FOR PROMOTIONS
{
	if (timeoutPatchAGCC != null)
		clearTimeout(timeoutPatchAGCC);

	var fixed = false;
	
	if (window["globalRuntime"] != undefined)
		if (window["globalRuntime"].sceneRoots.length > 0)
		{
			var paths = [
				"UI Root/LoaderParent/Loader/AGCC", //agcc
				]
			
			var roots = globalRuntime.sceneRoots;

			for (var r = 0; r < roots.length; ++r)
			{
				for (var i = 0; i < paths.length; ++i)
				{
					var t = roots[r].transform.Find(paths[i]);
					if (t != null)
					{
						t.gameObject.transform.localScale(0.85, 0.85, 0.85);
					}
				}
			}
			
			// CHINESE SOUND
			
			if (globalRuntime.sceneRoots.length > 1)
			{
				if (window["PromotionContentSwitcher"] != undefined)
				{
					var pcs = globalRuntime.sceneRoots[1].GetComponentsInChildren(PromotionContentSwitcher, true);
					for (var s=0; s<pcs.length; s++)
					{
						var pc = pcs[s];
						for (var a=0; a<pc.asiaContents.length; a++)
						{
							var asp = pc.asiaContents[a].GetComponent(SoundPlayer);
							if (asp != null && a<pc.europeContents.length)
							{
								var esp = pc.europeContents[a].GetComponent(SoundPlayer);
								if (esp != null)
									asp.audioClip = esp.audioClip;
							}
						}
					}
				}
				fixed = true; //move this outside when reverting - this must remain
			}
		}
		
	if (!fixed)
	{
		timeoutPatchAGCC = setTimeout(PatchAGCC, 10);
		return;
	}
}
PatchAGCC();

var timeoutPatchCFullscreen = null;
function PatchCFullscreen()
{
	if (timeoutPatchCFullscreen != null)
		clearTimeout(timeoutPatchCFullscreen);
	
	if (window["screenfull"] != undefined)
		if (window["UHT_UA_INFO"] != undefined)
			if (window["_number"] != undefined)
			{
				var isAndroidChrome71Plus = UHT_UA_INFO.os.name == "Android" && UHT_UA_INFO.browser.name == "Chrome" && _number.otoui(UHT_UA_INFO.browser.version) >= 71;
				if (isAndroidChrome71Plus)
				{
					window["screenfull"]["request"] = function(elem)
					{
						document.documentElement["requestFullscreen"]({navigationUI: "hide"});
					}
				}
				return;
			}
	timeoutPatchCFullscreen = setTimeout(PatchCFullscreen, 10);
}
PatchCFullscreen();


var timeoutPatchFFSound = null;
var oCSR = null;
function PatchFFSound()
{
	if (timeoutPatchFFSound != null)
		clearTimeout(timeoutPatchFFSound);
	if (window["createjs"] != undefined)
		if (window["createjs"]["Sound"] != undefined)
			if (window["createjs"]["Sound"]["registerPlugins"] != undefined)
			{
				oCSR = createjs.Sound.registerPlugins;
				createjs.Sound.registerPlugins = function(arg)
				{
					if (arg.length > 1)
						return oCSR(arg);
					return false;
				};
				return;
			}
	timeoutPatchFFSound = setTimeout(PatchFFSound, 10);
}
PatchFFSound();


var timeoutPatchXTVars = null;
function PatchXTVars()
{
	if (timeoutPatchXTVars != null)
		clearTimeout(timeoutPatchXTVars);
	if (window["XT"] == undefined || window["UHT_GAME_CONFIG"] == undefined)
	{
		timeoutPatchXTVars = setTimeout(PatchXTVars, 10);
		return;
	}
	var oXTRAI = XT.RegisterAndInit;
	XT.RegisterAndInit = function(go)
	{
		oXTRAI.call(this,go);
		
		// Disable autoplay
		var DisableAutoplay = false;
		if (UHT_GAME_CONFIG.STYLENAME == "NYX939")
			DisableAutoplay = true;

		if (DisableAutoplay)
			if (Vars.Jurisdiction_DisableAutoplay != undefined)
				XT.SetBool(Vars.Jurisdiction_DisableAutoplay, true);

		// Instant autoplay
		var InstantAutoplay = false;
		if (UHT_GAME_CONFIG.STYLENAME == "_??????????????????????????????_")
			InstantAutoplay = true;

		if (InstantAutoplay)
			if (Vars.InstantAutoplay != undefined)
				XT.SetBool(Vars.InstantAutoplay, true);

			
	}
}
PatchXTVars();

var timeoutPatchCloseEvent = null;
function PatchCloseEvent()
{
	if (timeoutPatchCloseEvent != null)
		clearTimeout(timeoutPatchCloseEvent);
	if (window["UHTInterfaceBOSS"] == undefined)
	{
		timeoutPatchCloseEvent = setTimeout(PatchCloseEvent, 100);
		return;
	}
	var oOBU = window.onbeforeunload;
	window.onbeforeunload = function()
	{
		UHTInterfaceBOSS.PostMessage("notifyCloseContainer");
		oOBU.call(this);
	}
}
PatchCloseEvent();


var timeoutPatchZeroSizeScreen = null;
function PatchZeroSizeScreen()
{
	if (timeoutPatchZeroSizeScreen != null)
		clearTimeout(timeoutPatchZeroSizeScreen);
	if (window["Camera"] == undefined)
	{
		timeoutPatchZeroSizeScreen = setTimeout(PatchZeroSizeScreen, 100);
		return;
	}
	var oCU = Camera.prototype.Update;
	Camera.prototype.Update = function()
	{
		if (UHTScreen.height == 0) UHTScreen.height = 1;
		if (UHTScreen.width == 0) UHTScreen.width = 1;
		oCU.call(this);
	}
}
PatchZeroSizeScreen();

var timeoutPatchHidePPlogo = null;
function PatchHidePPlogo()
{
	if (window["UHT_GAME_CONFIG"] == undefined)
	{
		timeoutPatchHidePPlogo = setTimeout(PatchHidePPlogo, 10);
		return;
	}
	var HideLogo = false;
	if (UHT_GAME_CONFIG.STYLENAME == "ebetgrp_ebet")
		HideLogo = true;

	if (UHT_GAME_CONFIG.STYLENAME == "vb-dafa")
		HideLogo = true;

	if (UHT_GAME_CONFIG.STYLENAME == "SBO")
		HideLogo = true;
	
	if (UHT_GAME_CONFIG.STYLENAME == "SB2")
		HideLogo = true;
	
	if (!HideLogo)
		return;
		
	if (timeoutPatchHidePPlogo != null)
		clearTimeout(timeoutPatchHidePPlogo);

	if (window["globalRuntime"] == undefined)
	{
		timeoutPatchHidePPlogo = setTimeout(PatchHidePPlogo, 10);
		return;
	}
	
	var paths = [
		"UI Root/XTRoot/Root/GUI/PragmaticPlayAnchor", //hide desktop tm
		"UI Root/XTRoot/Root/GUI_mobile/PragmaticPlayAnchor", //hide mobile tm
		"UI Root/LoaderParent/Loader/Logo", //hide client logo
		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_portrait/Page2/Content/RealContent/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_portrait/Page4/Content/RealContent/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_portrait/Page6/Content/RealContent/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_portrait/Page8/Content/RealContent/CopyrightHolder", // hide QoG copyright

		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_landscape/Page2/Content/RealContent/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_landscape/Page4/Content/RealContent/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_landscape/Page6/Content/RealContent/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable_mobile/Paytable_landscape/Page8/Content/RealContent/CopyrightHolder", // hide QoG copyright
		
		"UI Root/XTRoot/Root/Paytable/Pages/Page1/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable/Pages/Page2/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable/Pages/Page3/CopyrightHolder", // hide QoG copyright
		"UI Root/XTRoot/Root/Paytable/Pages/Page4/CopyrightHolder" // hide QoG copyright

		]
	
	var roots = globalRuntime.sceneRoots;

    for (var r = 0; r < roots.length; ++r)
    {
        for (var i = 0; i < paths.length; ++i)
        {
            var t = roots[r].transform.Find(paths[i]);
            if (t != null)
                t.gameObject.SetActive(false);
        }
    }
	
	if (globalRuntime.sceneRoots.length < 2)
	{
		timeoutPatchHidePPlogo = setTimeout(PatchHidePPlogo, 10);
	}
}
PatchHidePPlogo();