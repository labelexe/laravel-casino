
function getPreloadImages( conf, slotConf, winLines, lang ) {
	var images = getPreloadImagesCommon( { 
		conf : conf,
		slotConf: slotConf,
		folder: 'oldfisherman',
		winLines: winLines,
		lang: lang
	});	
	
	// ####
	if( conf.mode( 'l' ) == 0 ) { // layout 3:2
		images.push( 'gui/picts/rest/oldfisherman/<resol>/bg_top-fg.jpg' );
		images.push( 'gui/picts/rest/oldfisherman/<resol>/bg_top-fg2.jpg' );
	}
	
	// ####
	if( conf.mode( 'c') == 0 ) { // web 
		var conImages = [
			// info sites
			'gui/picts/rest/oldfisherman/<resol>/infoSites/web/button-close.png',
			'gui/picts/rest/oldfisherman/<resol>/infoSites/web/checkbox-off.png',
			'gui/picts/rest/oldfisherman/<resol>/infoSites/web/checkbox-on.png',
			'gui/picts/rest/oldfisherman/<resol>/infoSites/web/background.png'
		];
		
		images = images.concat( conImages );
	}
	else { // mobile
		var conImages = [
	    ];
		
		images = images.concat( conImages );
		
		if( conf.mode( 'c' ) == 2 ) { // supporting portrait mode
			var portConImages = [
    		    'gui/picts/rest/oldfisherman/<resol>/console_portrait_bg-fg.png',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_top.jpg',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_top-fg.jpg',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_top_small.jpg',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_top_small-fg.jpg',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_bottom_l32.jpg',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_bottom_l32-fg.jpg',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_bottom_l169.jpg',
    		    'gui/picts/rest/oldfisherman/<resol>/portrait_bottom_l169-fg.jpg'                     
			];
			images = images.concat( portConImages );
		}		
	}
	
	var common = [
		//backgrounds
		'gui/picts/rest/oldfisherman/<resol>/bg_middle.jpg',
		'gui/picts/rest/oldfisherman/<resol>/bg_bottom.jpg',    	
		'gui/picts/rest/oldfisherman/<resol>/bg_middle-fg.jpg',
		'gui/picts/rest/oldfisherman/<resol>/bg_bottom-fg.jpg',    	
		'gui/picts/rest/oldfisherman/<resol>/fadeout.png',
		'gui/picts/rest/oldfisherman/<resol>/fadeout-fg.png',

		// linemarkers
		'gui/picts/rest/oldfisherman/<resol>/linemarker-active.png',
		'gui/picts/rest/oldfisherman/<resol>/linemarker-inactive.png',
		
		// infosites
		'gui/picts/rest/oldfisherman/<resol>/infoSites/9.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/10.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/a.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/barrels.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/boat.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/compass.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/fisherman.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/j.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/k.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/king-salmon.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/lines.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/pipe.png',
		'gui/picts/rest/oldfisherman/<resol>/infoSites/q.png',
		
		// symbols
		[ '/symbol-9.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-9.jpg' ],
		[ '/symbol-10.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-10.jpg' ],
		[ '/symbol-j.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-j.jpg' ],
		[ '/symbol-q.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-q.jpg' ],
		[ '/symbol-k.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-k.jpg' ],
		[ '/symbol-a.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-a.jpg' ],
		[ '/symbol-compass.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-compass.jpg' ],
		[ '/symbol-pipe.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-pipe.jpg' ],
		[ '/symbol-barrels.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-barrels.jpg' ],
		[ '/symbol-boat.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-boat.jpg' ],
		[ '/symbol-fish.jpg', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-fish.jpg' ],
		[ '/symbol-wild.png', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-wild.png' ],
		[ '/wild_small.png', 'gui/picts/rest/oldfisherman/<resol>/symbols/wild_small.png' ],
		[ '/wild_smallt.png', 'gui/picts/rest/oldfisherman/<resol>/symbols/wild_smallt.png' ],
		[ '/wild_smallb.png', 'gui/picts/rest/oldfisherman/<resol>/symbols/wild_smallb.png' ],
		[ '/wild_smallm.png', 'gui/picts/rest/oldfisherman/<resol>/symbols/wild_smallm.png' ],
		[ 'symBlendTop', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-wild_bot-dark.png' ],
		[ 'symBlendBottom', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-wild_top-dark.png' ],
		[ 'symBlendTopBottom', 'gui/picts/rest/oldfisherman/<resol>/symbols/symbol-wild_bot-top-dark.png' ],
		
		// freegame blending
		'gui/picts/rest/oldfisherman/<resol>/freegame/fgsign-1.jpg',
		'gui/picts/rest/oldfisherman/<resol>/freegame/fgsign-2.png'
	];
	
	images = images.concat( common );
	
	if( conf.playSymbolAnims() ) {
		var rImages = [
           	// symbol anims
    		[ 'scatterBonus_0.jpg', 'gui/picts/rest/oldfisherman/<resol>/symanim/scatterBonus_0.jpg' ],
    		[ 'scatterBonusEnd.png', 'gui/picts/rest/oldfisherman/<resol>/symanim/scatterBonusEnd.png' ],
    		[ 'wild_0.jpg', 'gui/picts/rest/oldfisherman/<resol>/symanim/wild_0.jpg' ],
    		[ 'wildMask.png', 'gui/picts/rest/oldfisherman/<resol>/symanim/wildMask.png' ]
		];
		
		images = images.concat( rImages );
	
		if( conf.mode( 'r' ) == 0 ) {
			var rImages = [
				[ 'scatterBonus_1.jpg', 'gui/picts/rest/oldfisherman/<resol>/symanim/scatterBonus_1.jpg' ],
				[ 'wild_1.jpg', 'gui/picts/rest/oldfisherman/<resol>/symanim/wild_1.jpg' ]
			];
			
			images = images.concat( rImages );
		}
	}
	else{
		var oImages = [
       		// optimal slot animations
    		[ 'wild', 'gui/picts/rest/oldfisherman/<resol>/optanim/OFi_Wild.png' ],
    		[ 'wildGlow', 'gui/picts/rest/oldfisherman/<resol>/optanim/OFi_WildGlow.png' ]               
		];
		images = images.concat( oImages );
	}	
	return images;

	
}
