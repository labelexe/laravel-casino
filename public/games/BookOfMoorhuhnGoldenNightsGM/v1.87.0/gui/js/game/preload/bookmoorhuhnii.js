function getPreloadImages( conf, slotConf, winLines, lang, jackpotType ) {
	var images = getPreloadImagesCommon( { 
		conf : conf,
		slotConf: slotConf,
		folder: 'bookmoorhuhnii',
		loadingScreenFolder: jackpotType == 'goldennights' ? 'bookmoorhuhn' : 'bookmoorhuhnii',
		winLines: winLines,
		attentionSpin: true,
		scatterWins: true,
		bigWinFrames: true,
		jackpotType: jackpotType,
		lang: lang
	});	
	
	// ####
	if( conf.mode( 'l' ) == 0 ) { // layout 3:2
		images.push( 'gui/picts/rest/bookmoorhuhnii/<resol>/bg_top-en.jpg' );
		images.push( 'gui/picts/rest/bookmoorhuhnii/<resol>/bg_top-fg.jpg' );
		images.push( 'gui/picts/rest/bookmoorhuhnii/<resol>/bg_top-fg-en.jpg' );
		images.push( 'gui/picts/rest/bookmoorhuhnii/<resol>/bg_top-fg2.jpg' );
		images.push( 'gui/picts/rest/bookmoorhuhnii/<resol>/loading_screen_l32-en.jpg' );
	}
	else {
		images.push( 'gui/picts/rest/bookmoorhuhnii/<resol>/loading_screen_l169-en.jpg' );
	}
	
	// ####
	if( conf.mode( 'c' ) == 0 ) { // web 
		var conImages = [
			// info sites
			'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/web/button-close.png',
			'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/web/checkbox-off.png',
			'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/web/checkbox-on.png',
			'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/web/background.png'
		];
		
		images = images.concat( conImages );
	}
	else { // mobile
//		var conImages = [
//		];
//		images = images.concat( conImages );
		
		if( conf.mode( 'c' ) == 2 ) { // supporting portrait mode
			var portConImages = [
			    'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_bottom_l169.jpg',
			    'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_bottom_l169-fg.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_bottom_l32.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_bottom_l32-fg.jpg',
				
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top-en.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top-fg.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top-fg-en.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top_small.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top_small-en.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top_small-fg.jpg',
				'gui/picts/rest/bookmoorhuhnii/<resol>/portrait_top_small-fg-en.jpg'
			];
				 		
			images = images.concat( portConImages );
		}
	}
	
	var common = [
      	// backgrounds
    	'gui/picts/rest/bookmoorhuhnii/<resol>/bg_middle.jpg',
    	'gui/picts/rest/bookmoorhuhnii/<resol>/bg_bottom.jpg',    	
    	'gui/picts/rest/bookmoorhuhnii/<resol>/bg_middle-fg.jpg',
    	'gui/picts/rest/bookmoorhuhnii/<resol>/bg_bottom-fg.jpg',    	
    	'gui/picts/rest/bookmoorhuhnii/<resol>/fadeout.png',
    	'gui/picts/rest/bookmoorhuhnii/<resol>/fadeout-fg.png',
    	
    	// linemarkers
    	'gui/picts/game/<resol>/linemarker/line-number-1.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-2.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-3.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-4.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-5.jpg',
		'gui/picts/game/<resol>/linemarker/line-number-6.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-7.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-8.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-9.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-10.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-grey.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-dimm.png',
    	
    	// info sites
    	'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/book.png',
    	'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/lines.png',
    	'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/lv1.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/lv2.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/lv3.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/lv4.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/hv1.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/hv2.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/hv3.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/hv4.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/top.png',
		'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/scatter.png',
    	'gui/picts/rest/bookmoorhuhnii/<resol>/infoSites/lines.png',

    	// symbols
		[ '/symbol-j.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-j.jpg' ],
		[ '/symbol-q.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-q.jpg' ],
		[ '/symbol-k.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-k.jpg' ],
    	[ '/symbol-a.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-a.jpg' ],
		[ '/symbol-flower.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-flower.jpg' ],
		[ '/symbol-vase.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-vase.jpg' ],
		[ '/symbol-staebe.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-staebe.jpg' ],
		[ '/symbol-mummy.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-mummy.jpg' ],
    	[ '/symbol-explorer.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-explorer.jpg' ],
		[ '/symbol-scatter.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-scatter.png' ],
    	
    	
    	[ '/symbol-fg-j.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-j.jpg' ],
		[ '/symbol-fg-q.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-q.jpg' ],
		[ '/symbol-fg-k.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-k.jpg' ],
    	[ '/symbol-fg-a.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-a.jpg' ],
		[ '/symbol-fg-flower.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-flower.jpg' ],
		[ '/symbol-fg-vase.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-vase.jpg' ],
		[ '/symbol-fg-staebe.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-staebe.jpg' ],
		[ '/symbol-fg-mummy.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-mummy.jpg' ],
    	[ '/symbol-fg-explorer.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-fg-explorer.jpg' ],
    	
    	[ '/symbol-s-j.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-j.jpg' ],
		[ '/symbol-s-q.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-q.jpg' ],
		[ '/symbol-s-k.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-k.jpg' ],
    	[ '/symbol-s-a.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-a.jpg' ],
		[ '/symbol-s-flower.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-flower.jpg' ],
		[ '/symbol-s-vase.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-vase.jpg' ],
		[ '/symbol-s-staebe.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-staebe.jpg' ],
		[ '/symbol-s-mummy.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-mummy.jpg' ],
    	[ '/symbol-s-explorer.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-explorer.jpg' ],
    	
    	[ '/symbol-m-j.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-j.jpg' ],
		[ '/symbol-m-q.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-q.jpg' ],
		[ '/symbol-m-k.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-k.jpg' ],
    	[ '/symbol-m-a.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-a.jpg' ],
		[ '/symbol-m-flower.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-flower.jpg' ],
		[ '/symbol-m-vase.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-vase.jpg' ],
		[ '/symbol-m-staebe.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-staebe.jpg' ],
		[ '/symbol-m-mummy.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-mummy.jpg' ],
    	[ '/symbol-m-explorer.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-explorer.jpg' ],
		[ '/symbol-m-scatter.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-m-scatter.png' ],
    	
    	[ '/scatter_small.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/scatter_small.png' ],
    	[ '/scatter_smallb.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/scatter_smallb.png' ],
    	[ '/scatter_smallt.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/scatter_smallt.png' ],
    	[ '/scatter_smallm.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/scatter_smallm.png' ],
    	[ 'symBlendTop', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-scatter_bot-dark.png' ],
    	[ 'symBlendBottom', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-scatter_top-dark.png' ],
    	[ 'symBlendTopBottom', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-scatter_bot-top-dark.png' ],
		
    	// freegame blending
    	'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/fgsign.jpg',
    	
    	// freegame mini paytable small symbols
    	[ 'fgSymbolSmall1', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-j.jpg' ],
    	[ 'fgSymbolSmall2', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-q.jpg' ],
    	[ 'fgSymbolSmall3', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-k.jpg' ],
    	[ 'fgSymbolSmall4', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-a.jpg' ],
    	[ 'fgSymbolSmall5', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-flower.jpg' ],
    	[ 'fgSymbolSmall6', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-vase.jpg' ],
		[ 'fgSymbolSmall7', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-staebe.jpg' ],
    	[ 'fgSymbolSmall8', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-mummy.jpg' ],
    	[ 'fgSymbolSmall9', 'gui/picts/rest/bookmoorhuhnii/<resol>/freegame/symbol-s-explorer.jpg' ]
    ];
	
	images = images.concat( common );
	
	if( conf.playSymbolAnims() ) {
		var rImages = [
			//symbol anims
			[ 'symbolWin1BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin1BG_0.jpg' ],
			[ 'symbolWin1FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin1FG_0.jpg' ],
			[ 'symbolWin2BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin2BG_0.jpg' ],
			[ 'symbolWin2FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin2FG_0.jpg' ],
			[ 'symbolWin3BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin3BG_0.jpg' ],
			[ 'symbolWin3FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin3FG_0.jpg' ],
			[ 'symbolWin4BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin4BG_0.jpg' ],
			[ 'symbolWin4FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin4FG_0.jpg' ],
			[ 'symbolWin5BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin5BG_0.jpg' ],
			[ 'symbolWin5FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin5FG_0.jpg' ],
			[ 'symbolWin6BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin6BG_0.jpg' ],
			[ 'symbolWin6FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin6FG_0.jpg' ],
			[ 'symbolWin7BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin7BG_0.jpg' ],
			[ 'symbolWin7FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin7FG_0.jpg' ],
			[ 'symbolWin8BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin8BG_0.jpg' ],
			[ 'symbolWin8FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin8FG_0.jpg' ],
			[ 'symbolWin9BG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin9BG_0.jpg' ],
			[ 'symbolWin9FG_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolWin9FG_0.jpg' ],
			
			[ 'symbolTeaser10_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolTeaser10_0.jpg' ],
			[ 'symbolTeaser10End.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolTeaser10End.png' ],
			[ 'symbolTeaser10Mask.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/symbolTeaser10Mask.png' ],
			
			[ 'scatterBonus_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/scatterBonus_0.jpg' ],
			[ 'scatterBonus_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/scatterBonus_1.jpg' ],
			[ 'scatterBonusEnd.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/scatterBonusEnd.png' ],
			[ 'scatterBonusMask.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/scatterBonusMask.png' ],
			
			[ 'stampSymbolWin1_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin1_0.jpg' ],
			[ 'stampSymbolWin1_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin1_1.jpg' ],
			[ 'stampSymbolWin2_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin2_0.jpg' ],
			[ 'stampSymbolWin2_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin2_1.jpg' ],
			[ 'stampSymbolWin3_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin3_0.jpg' ],
			[ 'stampSymbolWin3_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin3_1.jpg' ],
			[ 'stampSymbolWin4_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin4_0.jpg' ],
			[ 'stampSymbolWin4_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin4_1.jpg' ],
			[ 'stampSymbolWin5_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin5_0.jpg' ],
			[ 'stampSymbolWin5_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin5_1.jpg' ],
			[ 'stampSymbolWin6_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin6_0.jpg' ],
			[ 'stampSymbolWin6_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin6_1.jpg' ],
			[ 'stampSymbolWin7_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin7_0.jpg' ],
			[ 'stampSymbolWin7_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin7_1.jpg' ],
			[ 'stampSymbolWin8_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin8_0.jpg' ],
			[ 'stampSymbolWin8_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin8_1.jpg' ],
			[ 'stampSymbolWin9_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin9_0.jpg' ],
			[ 'stampSymbolWin9_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/stampSymbolWin9_1.jpg' ],
			
			[ 'scatterWild_0.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/scatterWild_0.jpg' ],
			[ 'scatterWildMask.png', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/scatterWildMask.png' ],
		];
		if( conf.mode( 'r' ) == 0 ) {
			rImages.push( [ 'scatterWild_1.jpg', 'gui/picts/rest/bookmoorhuhnii/<resol>/symanim/scatterWild_1.jpg' ] );
		}		
		
		images = images.concat( rImages );		
		
		if( conf.mode( 'r' ) == 0 ) {
			rImages = [	
				//hype film assets
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00000.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00001.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00002.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00003.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00004.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00005.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00006.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00007.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Pageturn_00008.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00000.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00001.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00002.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00003.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00004.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00005.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00006.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00007.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00008.png',
				'gui/picts/anim/<resol>/bmnfreegame/BoM_Symbolselection_Particle_00009.png',
				'gui/picts/anim/<resol>/bmnfreegame/book.png',
				'gui/picts/anim/<resol>/bmnfreegame/HV1.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/HV2.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/HV3.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/HV4.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/LV1.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/LV2.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/LV3.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/LV4.jpg',
				'gui/picts/anim/<resol>/bmnfreegame/TOP.jpg',			
			];

			images = images.concat( rImages );
		}
		else {
			rImages = [
				[ 'book', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Book_Symbolselection.png' ],
				
				[ 'bonus_Sym_1', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-j.jpg' ],
				[ 'bonus_Sym_2', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-q.jpg' ],
				[ 'bonus_Sym_3', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-k.jpg' ],
				[ 'bonus_Sym_4', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-a.jpg' ],
				[ 'bonus_Sym_5', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-flower.jpg' ],
				[ 'bonus_Sym_6', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-vase.jpg' ],
				[ 'bonus_Sym_7', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-staebe.jpg' ],
				[ 'bonus_Sym_8', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-mummy.jpg' ],
				[ 'bonus_Sym_9', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-explorer.jpg' ]
			];
			
			images = images.concat( rImages );
		}
	}
	else {
		var oImages = [
               // optimal slot animations
			   [ 'symbolWin1BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_J_BG.png' ],
			   [ 'symbolWin1BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_J_BG_glow.png' ],
			   [ 'symbolWin1FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_J_FG.png' ],
			   [ 'symbolWin1FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_J_FG_glow.png' ],
			   
			   [ 'symbolWin2BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Q_BG.png' ],
			   [ 'symbolWin2BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Q_BG_glow.png' ],
			   [ 'symbolWin2FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Q_FG.png' ],
			   [ 'symbolWin2FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Q_FG_glow.png' ],
			   
			   [ 'symbolWin3BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_K_BG.png' ],
			   [ 'symbolWin3BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_K_BG_glow.png' ],
			   [ 'symbolWin3FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_K_FG.png' ],
			   [ 'symbolWin3FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_K_FG_glow.png' ],
			   
			   [ 'symbolWin4BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_A_BG.png' ],
			   [ 'symbolWin4BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_A_BG_glow.png' ],
			   [ 'symbolWin4FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_A_FG.png' ],
			   [ 'symbolWin4FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_A_FG_glow.png' ],
			   
			   [ 'symbolWin5BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Flower_BG.png' ],
			   [ 'symbolWin5BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Flower_BG_glow.png' ],
			   [ 'symbolWin5FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Flower_FG.png' ],
			   [ 'symbolWin5FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Flower_FG_glow.png' ],
			   
			   [ 'symbolWin6BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Vase_BG.png' ],
			   [ 'symbolWin6BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Vase_BG_glow.png' ],
			   [ 'symbolWin6FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Vase_FG.png' ],
			   [ 'symbolWin6FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Vase_FG_glow.png' ],
			   
			   [ 'symbolWin7BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_CrookFlail_BG.png' ],
			   [ 'symbolWin7BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_CrookFlail_BG_glow.png' ],
			   [ 'symbolWin7FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_CrookFlail_FG.png' ],
			   [ 'symbolWin7FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_CrookFlail_FG_glow.png' ],
			   
			   [ 'symbolWin8BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Mummy_BG.png' ],
			   [ 'symbolWin8BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Mummy_BG_glow.png' ],
			   [ 'symbolWin8FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Mummy_FG.png' ],
			   [ 'symbolWin8FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Mummy_FG_glow.png' ],
			   
			   [ 'symbolWin9BG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Top_BG.png' ],
			   [ 'symbolWin9BGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Top_BG_glow.png' ],
			   [ 'symbolWin9FG', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Top_FG.png' ],
			   [ 'symbolWin9FGGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Top_FG_glow.png' ],

		   
			   [ 'scatterTeaser', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-scatter.png' ],
			   [ 'scatterTeaserGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Scatter_Teaser_glow.png' ],
			   [ 'scatterBonus', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Scatter_Bonus.png' ],
			   [ 'scatterBonusGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Scatter_Bonus_glow.png' ],
			   [ 'scatterWild', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Scatter_Wild.png' ],
			   [ 'scatterWildGlow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Scatter_Wild_glow.png' ],
               
               [ 'stampSymbolWin1', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_J.png' ],
               [ 'stampSymbolWin1Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_J_glow.png' ],
			   [ 'stampSymbolWin2', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Q.png' ],
               [ 'stampSymbolWin2Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Q_glow.png' ],
			   [ 'stampSymbolWin3', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_K.png' ],
               [ 'stampSymbolWin3Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_K_glow.png' ],
			   [ 'stampSymbolWin4', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_A.png' ],
               [ 'stampSymbolWin4Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_A_glow.png' ],
			   [ 'stampSymbolWin5', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Flower.png' ],
               [ 'stampSymbolWin5Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Flower_glow.png' ],
			   [ 'stampSymbolWin6', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Vase.png' ],
               [ 'stampSymbolWin6Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Vase_glow.png' ],
			   [ 'stampSymbolWin7', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_CrookFlail.png' ],
               [ 'stampSymbolWin7Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_CrookFlail_glow.png' ],
			   [ 'stampSymbolWin8', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Mummy.png' ],
               [ 'stampSymbolWin8Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Mummy_glow.png' ],
			   [ 'stampSymbolWin9', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Top.png' ],
               [ 'stampSymbolWin9Glow', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Feature_Top_glow.png' ],
				
				[ 'book', 'gui/picts/rest/bookmoorhuhnii/<resol>/optanim/BoM_Book_Symbolselection.png' ],
				
				[ 'bonus_Sym_1', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-j.jpg' ],
				[ 'bonus_Sym_2', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-q.jpg' ],
				[ 'bonus_Sym_3', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-k.jpg' ],
				[ 'bonus_Sym_4', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-a.jpg' ],
				[ 'bonus_Sym_5', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-flower.jpg' ],
				[ 'bonus_Sym_6', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-vase.jpg' ],
				[ 'bonus_Sym_7', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-staebe.jpg' ],
				[ 'bonus_Sym_8', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-mummy.jpg' ],
				[ 'bonus_Sym_9', 'gui/picts/rest/bookmoorhuhnii/<resol>/symbols/symbol-s-explorer.jpg' ],
              
        ];
   		images = images.concat( oImages );
	}
	
	return images;
}
