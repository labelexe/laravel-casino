
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
	   
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"RouletteRoyalAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){

		var tmpMess=k.data.split("#");
		
			if(tmpMess[0]=='UPDATE' && gameController.parent.gnj.ldp!=undefined){
			
			if(gameController.parent.xab!=parseInt(tmpMess[1])){
				
			gameController.parent.xab=parseInt(tmpMess[1]);	
			gameController.parent.qlu.gef("rinfo", "#jst", [gameController.parent.xab]);
			
			
			}
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////

function wjg() {
    this.fni = "Info";
    this.obo = "DEPOSIT";
    this.audio = "AUDIO";
    this.den = "TIP";
    this.urq = "TURBO";
    this.qyn = "STATISTIC";
    this.wqz = "HISTORY";
    this.vrm = "SHORTCUTS";
    this.fow = "HELP";
    this.ayp = "PAYTABLE";
    this.language = "LANGUAGE";
    this.ali = ">>";
    this.nje = "<<";
    this.unj = "Fullscreen is not supported!"
}

function zoa() {
    this.duc = "MINIMUM BET IS";
    this.sxq = "MAX BET";
    this.nji = "MIN.BET";
    this.sfz = "MAX.BET";
    this.zjv = "BET";
    this.start = "START";
    this.fow = "HELP";
    this.ayp = "PAYTABLE";
    this.vtb = "MENU";
    this.cxs = "MORE|GAMES";
    this.znt = "STOP";
    this.jbw = "CREDIT";
    this.rpy = "GAME OVER";
    this.oxs = "WINNER!";
    this.ckx = "GOOD LUCK!";
    this.win = "WIN";
    this.bhc = "LAST WIN";
    this.bxs = "COLLECT";
    this.eno = "COLLECT";
    this.bbk = "GAMBLE";
    this.iti = "AUTO|START";
    this.lxf = "HALF|GAMBLE";
    this.ego = "EXIT";
    this.hky = "START GAME";
    this.gur = "CHOOSE BET";
    this.hdr = "HALF";
    this.ret = "RETURN|TO GAME";
    this.trg = "Total Win";
    this.imb = "Warning";
    this.exe = "TOTAL";
    this.mil = "PLEASE WAIT ...";
    this.unb = "More Games";
    this.urq = "SPEED";
    this.xvw = "Malfunction voids all pays and plays.";
    this.nhc = "CONTINUE";
    this.rvj = "AUTOSTART";
    this.nqd = "PAYTABLE";
    this.ztw = "GAMBLE";
    this.left = "LEFT";
    this.mym = "RIGHT";
    this.ok = "OK";
    this.msa = "CANCEL";
    this.sni = "Gamble";
    this.lqa = "Half";
    this.bcx = "GAME RULES";
    this.ikl = "GAME RULES";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "PRESS ANY KEY TO CONTINUE";
    this.mvx = "NOT ENOUGH CREDIT!";
    this.rjk = "wins";
    this.mos = "V A L U E";
    this.of = "OF";
    this.jud = "TOUCH THE SCREEN TO CONTINUE";
    this.tqn = "LOADING ...";
    this.lad = "LOADING HISTORY ...";
    this.uvs = "Communication Error";
    this.uzq = "You have reached one of the limits!";
    this.fjr = "You have reached the maximum amount of free games!";
    this.jnz = "Game will be closed";
    this.dag = "Game will be restarted";
    this.bzj = "WON";
    this.error = "ERROR";
    this.rtx = "FREEPLAY";
    this.xye = "AUTO";
    this.arj = "GAME ID";
    this.qjs = "Playing Time";
    this.coe = "last";
    this.kjq = "games";
    this.obo = "DEPOSIT";
    this.audio = "AUDIO";
    this.jlp = "MUSIC";
    this.nhf = "FULLSCREEN";
    this.asz = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.gzs = "Do not show again";
    this.iyk = "Sounds can not be loaded!";
    this.wdo = "Resources missing!";
    this.ouf = "Play without sound?";
    this.cdl = "SETTINGS";
    this.fom = "Please turn your device!";
    this.fni = "INFO";
    this.svd = "Please disable PRIVATE MODE in your browser to play the game.";
    this.mkx = "This game is optimized for Google Chrome.";
    this.ili = "Please use the current version of";
    this.ffi = "Unfortunately this browser is not fully supported.";
    this.rbv = "This game can not be started in freeplay mode!";
    this.hpg = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.kko = "Adjust the game interface to your needs!";
    this.wmb = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.qmz = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.shu = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.qyn = "Statistic";
    this.qaa = "Total Games";
    this.ypo = "Total Bets";
    this.kgl = "Total Wins";
    this.bqa = "Total Play Time";
    this.iok = "I have read this message";
    this.iyq = "EXIT|GAME";
    this.wqz = "History";
    this.jlk = "No games played.";
    this.state = "STATE";
    this.hsf = "Main Game";
    this.nbs = "Auto Collected";
    this.rwd = "Collected";
    this.wpj = "Bonusspins";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "First Deal";
    this.nmx = "Second Deal";
    this.udi = "Third Deal";
    this.hle = "AUTOSTART SETTINGS";
    this.yis = "Amount of games:";
    this.tnf = "Stop autostart";
    this.drf = "Credit lower than:";
    this.ndj = "Credit higher than:";
    this.whm = "Win higher than:";
    this.tjm = "The autostart will be stopped at the beginning of the bonus.";
    this.lgc = "Share on Facebook";
    this.hbn = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.pis = "Reality Check";
    this.btw = "You have requested a Reality Check.";
    this.kmq = "Press HISTORY to view your game history.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "No connection to the gaming server!";
    this.fet = "Connection attempts";
    this.qjy = "Login failed!";
    this.zuf = "Active session already exists!";
    this.nei = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
zoa.prototype = new wjg;

function jie() {
    this.duc = "МИНИМАЛЬНАЯ СТАВКА -";
    this.sxq = "МАКС.|СТАВКА";
    this.nji = "МИН.СТAВКА";
    this.sfz = "МАКС.СТAВКА";
    this.zjv = "СТАВКА";
    this.start = "СТАРТ";
    this.fow = "ПОМОЩЬ";
    this.ayp = "ТАБЛИЦА ВЫПЛАТ";
    this.vtb = "МЕНЮ";
    this.cxs = "ДРУГИЕ|ИГРЫ";
    this.znt = "СТОП";
    this.jbw = "КРЕДИТ";
    this.rpy = "КОНЕЦ ИГРЫ";
    this.oxs = "ПОБЕДИТЕЛЬ!";
    this.ckx = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.bhc = "ПОСЛЕД. ВЫИГРЫШ";
    this.rjk = "выйгрыши";
    this.bxs = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.eno = "ЗАБРАТЬ ВЫИГРЫШ";
    this.bbk = "ИГРА|НА|РИСК";
    this.iti = "АВТО|ИГРА";
    this.lxf = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.ego = "ВЫХОД";
    this.hky = "НАЖМИТЕ СТАРТ";
    this.gur = "ВЫБЕРИТЕ СТАВКУ";
    this.hdr = "ВЗЯТЬ|1/2";
    this.jeh = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.jud = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.teb = "Множитель для Бонуса";
    this.ukh = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.trg = "ОБЩИЙ ВЫИГРЫШ";
    this.tqn = "Загрузка ...";
    this.lad = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.mvx = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.uzq = "Достигнут один из лимитов!";
    this.imb = "Внимание";
    this.uvs = "ошибка обмена данных";
    this.fjr = "Вы получили максимальное количество свободных игр!";
    this.jnz = "Игра заканчивается";
    this.dag = "Игра начинается заново";
    this.dcz = "Бонус!";
    this.xoc = "БОНУС";
    this.bzj = "ВЫИГРЫШ";
    this.exe = "ВСЕГО";
    this.mil = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.rtx = "FREEPLAY";
    this.unb = "ВЫБОР ИГРЫ";
    this.arj = "GAME ID";
    this.qjs = "Playing Time";
    this.coe = "последняя";
    this.kjq = "игры";
    this.obo = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.jlp = "МУЗЫКА";
    this.urq = "СКОРОСТЬ";
    this.nhf = "ПОЛНОЭКРАННЫЙ";
    this.asz = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.xvw = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.nhc = "ПРОДОЛЖИТЬ";
    this.gzs = "Больше не показывать";
    this.rvj = "АВТОИГРА";
    this.nqd = "ТАБЛИЦА ВЫПЛАТ";
    this.ztw = "ИГРА НА РИСК";
    this.iyk = "Звук не загружается!";
    this.wdo = "Ресурсы отсутствуют!";
    this.ouf = "Играть без звука?";
    this.cdl = "НАСТРОЙКА";
    this.fom = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.mym = "ПРАВО";
    this.xye = "АВТО";
    this.mos = "V A L U E";
    this.fni = "ИНФОРМАЦИЯ";
    this.svd = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.mkx = "Настоящая игра оптимизирована для Google Chrome.";
    this.ili = "Используйте, пожалуйста, актуальную версию";
    this.ffi = "К сожалению нет полной поддержки браузера.";
    this.rbv = "Запуск этой игры в режиме свободных игр невозможен!";
    this.hpg = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.kko = "Приспособь интерфейс к своим потребностям!";
    this.hbn = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.pis = "Проверку реальности";
    this.btw = "Вы запросили проверку реальности.";
    this.kmq = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Нет связи с игровым сервером!";
    this.fet = "Попытки связи";
    this.qjy = "ошибка при входе в систему!";
    this.zuf = "Сеанс игры уже начался!";
    this.bcx = "ПРАВИЛА ИГРЫ";
    this.ikl = "ПРАВИЛА ИГРЫ";
    this.wmb = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.qmz = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.shu = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.qyn = "Статус";
    this.qaa = "количество игр";
    this.ypo = "вся ставка";
    this.kgl = "общий выигрыш";
    this.bqa = "общее время игры";
    this.iok = "Я сообщение прочитал.";
    this.iyq = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.wqz = "История";
    this.jlk = "нет истории.";
    this.state = "STATE";
    this.hsf = "Main Game";
    this.nbs = "Auto Collected";
    this.rwd = "Collected";
    this.wpj = "Bonusspins";
    this.sni = "Gamble";
    this.lqa = "Half";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "First Deal";
    this.nmx = "Second Deal";
    this.udi = "Third Deal";
    this.msa = "ИЗМЕНИТЬ";
    this.hle = "НАСТРОЙКА АВТОСТАРТА";
    this.yis = "Количество игр:";
    this.tnf = "Автостарт остановить";
    this.drf = "Кредит ниже, чем:";
    this.ndj = "Кредит выше, чем:";
    this.whm = "Выигрыш выше, чем:";
    this.tjm = "Автостарт прерывается, если начинается бонусная игра.";
    this.lgc = "Поделись в фейсбук";
    this.nei = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
jie.prototype = new wjg;

function tzw() {
    this.duc = "APUESTA MÍNIMA ES";
    this.sxq = "APUESTA|MÁXIMA";
    this.nji = "APUESTA MÍN.";
    this.sfz = "APUESTA MÁX.";
    this.zjv = "APUESTA";
    this.start = "JUGAR";
    this.fow = "AYUDA";
    this.ayp = "PLAN DE|GANANCIAS";
    this.vtb = "MENU";
    this.cxs = "MAS|JUEGOS";
    this.znt = "PARADA";
    this.jbw = "CREDITOS";
    this.rpy = "FIN DEL JUEGO";
    this.oxs = "¡GANADOR!";
    this.ckx = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.bhc = "ULTIMOS PREMIO";
    this.rjk = "gana";
    this.bxs = "COBRAR";
    this.eno = "COBRAR";
    this.bbk = "RIESGO";
    this.iti = "AUTO|JUGAR";
    this.lxf = "MEDIA|APUESTA";
    this.of = "DE";
    this.ego = "SALIR";
    this.hky = "¡PULSE JUGAR!";
    this.gur = "ELIJA SU APUESTA";
    this.hdr = "MITAD";
    this.jeh = "PULSE UNA TECLA PARA CONTINUAR";
    this.jud = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.trg = "Premio total";
    this.tqn = "CARGANDO ...";
    this.lad = "CARGANDO HISTORIAL ...";
    this.mvx = "No hay bastante CREDITO";
    this.uzq = "¡Ha alcanzado uno de los limites!";
    this.imb = "Advertencia";
    this.uvs = "Error de comunicación";
    this.fjr = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.jnz = "El juego se cerrará";
    this.dag = "El juego se reiniciará";
    this.dcz = "¡BONUS!";
    this.xoc = "BONUS";
    this.bzj = "GANADO";
    this.exe = "TOTAL";
    this.meg = "TURBO SI";
    this.hls = "TURBO NO";
    this.mil = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.rtx = "FREEPLAY";
    this.unb = "MAS JUEGOS";
    this.arj = "ID DE JUEGO";
    this.qjs = "Playing Time";
    this.coe = "ultimos";
    this.kjq = "juegos";
    this.obo = "DEPÓSITO";
    this.audio = "AUDIO";
    this.jlp = "MÚSICA";
    this.urq = "VELOCIDAD";
    this.nhf = "PANTALLA COMPLETA";
    this.asz = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.xvw = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.nhc = "ADELANTE";
    this.gzs = "No mostrar de nuevo";
    this.rvj = "AUTOJUGAR";
    this.nqd = "PLAN DE GANANCIAS";
    this.ztw = "RIESGO";
    this.iyk = "No se pueden cargar los sonidos.";
    this.wdo = "Faltan recursos.";
    this.ouf = "¿Jugar sin sonido?";
    this.cdl = "AJUSTES";
    this.mos = "V A L U E";
    this.fom = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.mym = "DERECHA";
    this.xye = "AUTOMÁTICO";
    this.fni = "INFORMACIÓN";
    this.svd = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.mkx = "Este juego está optimizado para Google Chrome.";
    this.ili = "Use la versión actual de";
    this.ffi = "Desafortunadamente, este explorador no es compatible.";
    this.rbv = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.hpg = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.kko = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.hbn = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.pis = "Reality Check";
    this.btw = "Has solicitado un Reality Check.";
    this.kmq = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "¡No hay conexión con el servidor de juegos!";
    this.fet = "Intentos de conexión";
    this.qjy = "¡No pudo iniciarse la sesión!";
    this.zuf = "¡Ya existe una sesión activa!";
    this.bcx = "REGLAS DEL JUEGO";
    this.ikl = "REGLAS|DEL JUEGO";
    this.wmb = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.qmz = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.shu = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.qyn = "ESTADO";
    this.qaa = "Número de juegos";
    this.ypo = "Apuesta total";
    this.kgl = "Ganancia total";
    this.bqa = "Tiempo total de juego";
    this.iok = "He leído el mensaje.";
    this.iyq = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.wqz = "HISTORIAL";
    this.jlk = "Aún no hay juegos.";
    this.state = "Estado";
    this.hsf = "Juego principal";
    this.nbs = "Ganancia automática";
    this.rwd = "Ganancia";
    this.wpj = "BONUSSPINS";
    this.sni = "Apuesta";
    this.lqa = "Mitad";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "Primera mano";
    this.nmx = "Segunda mano";
    this.udi = "Tercera mano";
    this.msa = "CANCELAR";
    this.hle = "CONFIGURACIONES DE JUEGO AUTOMÁTICO";
    this.yis = "Cantidad de juegos:";
    this.tnf = "Detener juego automático";
    this.drf = "Crédito menor que:";
    this.ndj = "Crédito mayor que:";
    this.whm = "Ganancia mayor que:";
    this.tjm = "El juego automático se detendrá al principio del bonus.";
    this.lgc = "Compartir en Facebook";
    this.nei = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
tzw.prototype = new wjg;

function qop() {
    this.duc = "MINIMALER EINSATZ IST";
    this.sxq = "MAX. EINSATZ";
    this.nji = "MIN. EINSATZ";
    this.sfz = "MAX. EINSATZ";
    this.zjv = "EINSATZ";
    this.start = "START";
    this.fow = "HILFE";
    this.ayp = "GEWINNPLAN";
    this.vtb = "MENÜ";
    this.cxs = "MEHR|SPIELE";
    this.jbw = "GUTHABEN";
    this.rpy = "SPIEL ENDE";
    this.oxs = "GEWINNER!";
    this.ckx = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.bhc = "LETZTER GEWINN";
    this.rjk = "gewinnt";
    this.bxs = "NEHMEN";
    this.eno = "NEHMEN";
    this.bbk = "RISIKO";
    this.iti = "AUTO|START";
    this.lxf = "HALF|GAMBLE";
    this.znt = "STOP";
    this.of = "VON";
    this.ego = "EXIT";
    this.hky = "START DRÜCKEN";
    this.gur = "EINSATZ WÄHLEN";
    this.hdr = "TEILEN";
    this.jeh = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.jud = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.trg = "Gesamt Gewinn";
    this.tqn = "LÄDT ...";
    this.lad = "LÄDT HISTORIE ...";
    this.mvx = "NICHT GENUG GUTHABEN!";
    this.imb = "Achtung";
    this.uvs = "Kommunikationsfehler";
    this.uzq = "Sie haben eines der Limits erreicht!";
    this.fjr = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.jnz = "Das Spiel wird beendet";
    this.dag = "Das Spiel wird neu gestartet";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.bzj = "GEWONNEN";
    this.exe = "TOTAL";
    this.mil = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.rtx = "FREEPLAY";
    this.unb = "MEHR|SPIELE";
    this.arj = "SPIEL ID";
    this.qjs = "Spielzeit";
    this.coe = "Letzten";
    this.kjq = "Spiele";
    this.obo = "GUTHABEN";
    this.audio = "AUDIO";
    this.jlp = "MUSIK";
    this.urq = "SPEED";
    this.nhf = "VOLLBILD";
    this.asz = "VOLLBILD";
    this.language = "SPRACHE";
    this.xvw = "Bei Gerätestörung keine Haftung.";
    this.nhc = "WEITER";
    this.gzs = "Nicht noch einmal anzeigen";
    this.rvj = "AUTOSTART";
    this.ztw = "RISIKO";
    this.nqd = "GEWINNPLAN";
    this.iyk = "Sounds können nicht geladen werden!";
    this.wdo = "Ressourcen fehlen!";
    this.ouf = "Ohne Ton spielen?";
    this.cdl = "EINSTELL.";
    this.fom = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.mym = "RECHTS";
    this.xye = "AUTOM.";
    this.mos = "V A L U E";
    this.fni = "INFO";
    this.svd = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.mkx = "Dieses Spiel ist optimiert für Google Chrome.";
    this.ili = "Bitte benutzen sie die aktuelle Version von";
    this.ffi = "Leider wird dieser Browser nicht unterstützt.";
    this.rbv = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.hpg = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.kko = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.hbn = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.pis = "Reality Check";
    this.btw = "Du hast einen Reality Check angefordert.";
    this.kmq = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.war = "Spielpause";
    this.rnr = "Spiellimits";
    this.aqe = "Selbsttest";
    this.abb = "Keine Verbindung zum Gameserver!";
    this.fet = "Verbindungsversuche";
    this.qjy = "Anmeldung fehlgeschlagen!";
    this.zuf = "Es ist bereits eine Session aktiv!";
    this.bcx = "SPIELREGELN";
    this.ikl = "SPIELREGELN";
    this.wmb = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.qmz = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.shu = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.qyn = "Statistik";
    this.qaa = "Anzahl der Spiele";
    this.ypo = "Gesamteinsatz";
    this.kgl = "Gesamtgewinn";
    this.bqa = "Gesamtspielzeit";
    this.iok = "Ich habe die Nachricht gelesen";
    this.iyq = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.wqz = "Historie";
    this.jlk = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.hsf = "Hauptspiel";
    this.nbs = "Auto. Nehmen";
    this.rwd = "Genommen";
    this.wpj = "Bonusspins";
    this.sni = "Risiko";
    this.lqa = "Halb";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "Erster Deal";
    this.nmx = "Zweiter Deal";
    this.udi = "Dritter Deal";
    this.msa = "ABBRUCH";
    this.hle = "AUTOSTART EINSTELLUNGEN";
    this.yis = "Anzahl der Spiele: ";
    this.tnf = "Autostart anhalten";
    this.drf = "Guthaben niedriger als:";
    this.ndj = "Guthaben höher als:";
    this.whm = "Gewinn höher als:";
    this.tjm = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.lgc = "Auf Facebook teilen";
    this.nei = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
qop.prototype = new wjg;

function gvl() {
    this.duc = "MINIMUM BANKO";
    this.sxq = "MAKS. BANKO";
    this.nji = "MIN. BANKO";
    this.sfz = "MAKS. BANKO";
    this.zjv = "BANKO";
    this.start = "BAŞLAT";
    this.fow = "YARDIM";
    this.ayp = "Kazanç planı";
    this.vtb = "MENÜ";
    this.cxs = "DAHA ÇOK|OYUN";
    this.znt = "DUR";
    this.jbw = "KREDI";
    this.rpy = "OYUN BİTTİ";
    this.oxs = "KAZANDINIZ!";
    this.ckx = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.bhc = "SON KAZANÇ";
    this.rjk = "kazanır";
    this.bxs = "ALMAK";
    this.eno = "ALMAK";
    this.bbk = "RIZIKO";
    this.iti = "OTOMATİK|BAŞLATMA";
    this.lxf = "YARI|RIZIKO";
    this.of = "VEREN";
    this.ego = "ÇIKIŞ";
    this.hky = "BAŞLAT TUŞUNA BASINIZ";
    this.gur = "BANKO SEÇİNİZ";
    this.hdr = "ALMAK|1/2";
    this.jeh = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.jud = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.trg = "Toplam kazanç";
    this.tqn = "YÜKLÜYOR ...";
    this.lad = "GEÇMIŞI YÜKLÜYOR ...";
    this.mvx = "YETERSİZ KREDİ.";
    this.uzq = "Limitlerin birine ulaştınız!";
    this.imb = "Dikkat";
    this.uvs = "İletişim hatası";
    this.fjr = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.jnz = "Oyun sonlandırılıyor";
    this.dag = "Oyun yeniden başlatılıyor";
    this.dcz = "Bedava oyun primi!";
    this.xoc = "PRİM";
    this.bzj = "KAZANDINIZ";
    this.exe = "TOPLAM";
    this.mil = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.rtx = "FREEPLAY";
    this.unb = "DAHA ÇOK OYUN";
    this.arj = "OYUN ID";
    this.qjs = "OYUN SÜRESİ";
    this.coe = "Son";
    this.kjq = "oyun";
    this.obo = "BAKIYE";
    this.audio = "AUDIO";
    this.jlp = "MÜZIK";
    this.urq = "HıZ";
    this.nhf = "TAM EKRAN";
    this.asz = "TAM EKRAN";
    this.language = "LISAN";
    this.xvw = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.nhc = "DEVAM";
    this.gzs = "Tekrar gösterme";
    this.rvj = "OTOMATİK|BAŞLATMA";
    this.ztw = "RIZIKO";
    this.nqd = "Kazanç planı";
    this.iyk = "Sesler yüklenemiyorlar!";
    this.wdo = "Kaynaklar eksik!";
    this.ouf = "Sessiz oynayacak mısınız?";
    this.cdl = "AYARLAR";
    this.fom = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.mym = "SAĞ";
    this.xye = "OTOMATIK";
    this.mos = "V A L U E";
    this.fni = "BILGI";
    this.svd = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.mkx = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.ili = "'nin güncel versiyonunu kullanın";
    this.ffi = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.rbv = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.hpg = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.kko = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.hbn = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.pis = "Reality Check";
    this.btw = "Reality Check talebinde bulundun.";
    this.kmq = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Oyun server'ine bağlantı yok!";
    this.fet = "Bağlantı denemeleri";
    this.qjy = "Giriş hatası!";
    this.zuf = "Aktif bir oturumunuz bulunuyor!";
    this.bcx = "OYUNUN KURALLARı";
    this.ikl = "OYUNUN|KURALLARı";
    this.wmb = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.qmz = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.shu = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.qyn = "İstatistik";
    this.qaa = "Toplam oyunlar";
    this.ypo = "Toplam bankolar";
    this.kgl = "Toplam kazançlar";
    this.bqa = "Toplam oyun süresi";
    this.iok = "Bu mesajı okudum.";
    this.iyq = "OYUNU|KAPAT";
    this.ok = "OK";
    this.wqz = "GEÇMİŞ";
    this.jlk = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.hsf = "Ana oyun";
    this.nbs = "Otomatik olarak kazandınız";
    this.rwd = "Toplandı";
    this.wpj = "Prim oyunlar";
    this.sni = "Riziko";
    this.lqa = "Yarım";
    this.mkz = "Respin";
    this.tam = "Prim";
    this.cgk = "İlk anlaşma";
    this.nmx = "İkinci anlaşma";
    this.udi = "Üçüncü anlaşma";
    this.msa = "İPTAL";
    this.hle = "OTOMATIK BAŞLAT AYARLARı";
    this.yis = "Oyun sayısı:";
    this.tnf = "Otomatik başlatmayı durdur";
    this.drf = "Kredi bundan düşüktür:";
    this.ndj = "Kredi bundan yüksektir:";
    this.whm = "Kazanç bundan yüksektir:";
    this.tjm = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.lgc = "Facebook'ta paylaş";
    this.nei = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
gvl.prototype = new wjg;

function yem() {
    this.duc = "MINIMÁLNÍ SÁZKA JE";
    this.sxq = "MAX. SÁZKA";
    this.nji = "MIN. SÁZKA";
    this.sfz = "MAX. SÁZKA";
    this.zjv = "SÁZKA";
    this.start = "START";
    this.fow = "POMOC";
    this.ayp = "VÝHERNÍ PLÁN";
    this.vtb = "MENU";
    this.cxs = "DALŠÍ|HRY";
    this.znt = "STOP";
    this.jbw = "KREDIT";
    this.rpy = "KONEC HRY";
    this.oxs = "VÍTEZ!";
    this.ckx = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.bhc = "POSL. VÝHRA";
    this.rjk = "vyhrává";
    this.bxs = "VEZMI";
    this.eno = "VEZMI";
    this.bbk = "HRA";
    this.iti = "AUTO|START";
    this.lxf = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.ego = "VÝSTUP";
    this.hky = "START HRY";
    this.gur = "VYBRAT SÁZKU";
    this.hdr = "POLOVINA";
    this.jeh = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.jud = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.trg = "Celková výhra";
    this.tqn = "NAHRÁVÁM ...";
    this.lad = "NAHRÁVÁM HISTORII ...";
    this.mvx = "Nedostatecný kredit.";
    this.uzq = "Dosáhli jste jednoho z limitů!";
    this.imb = "Varování";
    this.uvs = "Chyba komunikace";
    this.fjr = "Dosáhli jste maximálního počtu her zdarma!";
    this.jnz = "Hra se zavře";
    this.dag = "Hra se restartuje";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.bzj = "VYHRÁL";
    this.exe = "CELKOVÁ";
    this.mil = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.rtx = "FREEPLAY";
    this.unb = "DALŠÍ HRY";
    this.arj = "ID HRY";
    this.qjs = "HRACÍ DOBA";
    this.coe = "Poslední";
    this.kjq = "hry";
    this.obo = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.jlp = "MUZIKA";
    this.urq = "RYCHLOST";
    this.nhf = "FULLSCREEN";
    this.asz = "FULLSCREEN";
    this.language = "ŘEČ";
    this.xvw = "Při poruše jsou všechny hry a výhry neplatné.";
    this.nhc = "POKRAČUJ";
    this.gzs = "Nezobrazujte znovu";
    this.rvj = "AUTOSTART";
    this.ztw = "HRA";
    this.nqd = "VÝHERNÍ PLÁN";
    this.iyk = "Zvuk nelze nahrát!";
    this.wdo = "Chybí zdroje!";
    this.ouf = "Hrát bez zvuku?";
    this.cdl = "NASTAVENÍ";
    this.mos = "V A L U E";
    this.fom = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.mym = "VPRAVO";
    this.xye = "AUTO";
    this.fni = "INFORMACE";
    this.svd = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.mkx = "Tato hra je optimalizovaná pro Google Chrome.";
    this.ili = "Použijte aktuální verzi";
    this.ffi = "Tento prohlížeč není bohužel plně podporován.";
    this.rbv = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.hpg = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.kko = "Nastavte rozhraní hry svým potřebám!";
    this.hbn = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.pis = "Reality Check";
    this.btw = "Požádali jste o kontrolu reality.";
    this.kmq = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Žádné připojení k hernímu serveru!";
    this.fet = "Pokusy o připojení";
    this.qjy = "Přihlášení se nezdařilo!";
    this.zuf = "Aktivní relace již existuje!";
    this.bcx = "PRAVIDLA HRY";
    this.ikl = "PRAVIDLA HRY";
    this.wmb = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.qmz = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.shu = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.qyn = "Statistika";
    this.qaa = "Celkem hry";
    this.ypo = "Celkem sázky";
    this.kgl = "Celkem výhry";
    this.bqa = "Celková hrací doba";
    this.iok = "Zprávu jsem četl/a.";
    this.iyq = "UKONČIT|HRU";
    this.ok = "OK";
    this.wqz = "HISTORIE";
    this.jlk = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.hsf = "Hlavní hra";
    this.nbs = "Automaticky vybráno";
    this.rwd = "Vybráno";
    this.wpj = "Bonusspins";
    this.sni = "Hra";
    this.lqa = "Polovina";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "První vyložení";
    this.nmx = "Druhé vyložení";
    this.udi = "Třetí vyložení";
    this.msa = "ZRUŠIT";
    this.hle = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.yis = "Množství her:";
    this.tnf = "Zastavit automatický start";
    this.drf = "Kredit nižší než:";
    this.ndj = "Kredit vyšší než:";
    this.whm = "Výhra vyšší než:";
    this.tjm = "Automatický start se zastaví na začátku bonusu.";
    this.lgc = "Sdílet na Facebooku";
    this.nei = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
yem.prototype = new wjg;

function ekq() {
    this.duc = "MIINIMUMPANUS ON";
    this.sxq = "MAX PANUS";
    this.nji = "MIN PANUS";
    this.sfz = "MAX PANUS";
    this.zjv = "PANUS";
    this.start = "START";
    this.fow = "ABI";
    this.ayp = "VÕIDU TABEL";
    this.vtb = "MENÜÜ";
    this.cxs = "VALI|MÄNG";
    this.znt = "STOPP";
    this.jbw = "KREDIIT";
    this.rpy = "MÄNG ON LÕPPENUD!";
    this.oxs = "OLED VÕITNUD!";
    this.ckx = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.bhc = "EELMINE VÕIT";
    this.bxs = "VÕTA|VÕIT";
    this.eno = "VÕTA VÕIT";
    this.bbk = "DUUBEL|DAMINE";
    this.iti = "AUTO|START";
    this.lxf = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.ego = "VÄLJA";
    this.hky = "ALUSTA MÄNGU";
    this.gur = "VALI PANUS";
    this.hdr = "POOLIK";
    this.jeh = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.trg = "Koguvõit";
    this.mvx = "POLE PIISAVALT KREDIITI.";
    this.dcz = "Boonus!";
    this.xoc = "BOONUS";
    this.mil = "PALUN OODAKE ...";
    this.unb = "Vali Mäng";
    this.audio = "HELI";
    this.jlp = "MUUSIKA";
    this.urq = "KIIRUS";
    this.nhf = "TÄISEKRAAN";
    this.asz = "TÄISEKRAAN";
    this.xvw = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.bhp = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.bcx = "MÄNGUREEGLID";
    this.ikl = "MÄNGUREEGLID";
    this.tqn = "LAADIMINE ...";
    this.lad = "AJALOO LAADIMINE ...";
    this.uzq = "Oled saavutanud ühe limiitidest!";
    this.imb = "Hoiatus";
    this.uvs = "Ühenduse viga";
    this.fjr = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.jnz = "Mäng suletakse";
    this.dag = "Mäng taaskäivitatakse";
    this.jud = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.cdl = "SÄTTED";
    this.mos = "V A L U E";
    this.fom = "Pöörake oma seadet!";
    this.fni = "INFO";
    this.svd = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.mkx = "See mäng on optimeeritud Google Chrome jaoks.";
    this.ili = "Palun kasutage praeguse versiooni";
    this.ffi = "Kahjuks ei toetata seda brauserit täielikult.";
    this.rbv = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.mym = "PAREM";
    this.xye = "AUTOMAATNE";
    this.bzj = "VÕITIS";
    this.rjk = "võidetud";
    this.exe = "KOKKU";
    this.error = "VIGA";
    this.rtx = "TASUTA MÄNG";
    this.arj = "MÄNGU ID";
    this.qjs = "MÄNGUAEG";
    this.coe = "Viimased";
    this.kjq = "mängu";
    this.obo = "SISSEMAKSE";
    this.wmb = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.qmz = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.shu = "RISKI, ET SUURENDADA OMA VÕITU";
    this.qyn = "Statistika";
    this.qaa = "Mänge kokku";
    this.ypo = "Kogupanus";
    this.kgl = "Koguvõit";
    this.bqa = "Mänguaeg kokku";
    this.iok = "Olen seda teadet lugenud.";
    this.iyq = "MÄNGU|LÕPP";
    this.wqz = "Ajalugu";
    this.jlk = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.hsf = "Põhimäng";
    this.nbs = "Automaatne väljavõtt";
    this.rwd = "Välja võetud";
    this.wpj = "Bonusspins";
    this.sni = "Gamble";
    this.lqa = "Pool";
    this.mkz = "Respin";
    this.tam = "Boonus";
    this.cgk = "Esimene jagamine";
    this.nmx = "Teine jagamine";
    this.udi = "Kolmas jagamine";
    this.nhc = "JÄTKA";
    this.gzs = "Ära seda enam näita";
    this.rvj = "AUTOSTART";
    this.ztw = "DUUBEL DAMINE";
    this.nqd = "VÕIDU TABEL";
    this.iyk = "Helisid ei saa laadida!";
    this.wdo = "Ressursid puuduvad!";
    this.ouf = "Soovid mängida ilma helideta?";
    this.hpg = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.kko = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.hbn = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.msa = "TÜHISTA";
    this.hle = "AUTOMAATKÄIVITUSE SÄTTED";
    this.yis = "Mängude arv:";
    this.tnf = "Peata automaatkäivitus";
    this.drf = "Krediit madalam kui:";
    this.ndj = "Krediit kõrgem kui:";
    this.whm = "Võit suurem kui:";
    this.tjm = "Automaatkäivitus peatatakse boonuse alguses.";
    this.lgc = "Jaga Facebookis";
    this.ok = "OK";
    this.pis = "Reality Check";
    this.btw = "Olete soovinud reaalsuskontrolli.";
    this.kmq = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Puudub ühendus mänguserveriga!";
    this.fet = "Ühenduskatsed";
    this.qjy = "Sisselogimine nurjus!";
    this.zuf = "Aktiivne seanss on juba olemas!";
    this.nei = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
ekq.prototype = new wjg;

function uyy() {
    this.duc = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.sxq = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.nji = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.sfz = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.zjv = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.fow = "ΒΟHΘΕΙΑ";
    this.ayp = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.vtb = "ΜΕΝΟY";
    this.cxs = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.znt = "ΣΤΟΠ";
    this.jbw = "ΠIΣΤΩΣΗ";
    this.rpy = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.oxs = "ΝΙΚΗΤΗΣ!";
    this.ckx = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.bhc = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.bxs = "ΠΑΡΑΛΑΒH";
    this.eno = "ΠΑΡΑΛΑΒH";
    this.bbk = "ΤΖΟΓAΡΩ";
    this.iti = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.lxf = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.ego = "EΞΟΔΟΣ";
    this.hky = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.gur = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.hdr = "ΠΑΡΑΛΑΒH|1/2";
    this.jeh = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.trg = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.mvx = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.dcz = "Μπόνουσ!";
    this.xoc = "ΜΠOΝΟΥΣ";
    this.mil = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.unb = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.jlp = "ΜΟΥΣΙΚΉ";
    this.urq = "ΤΑΧYΤΗΤΑ";
    this.nhf = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.asz = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.xvw = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.exe = "ΣYΝΟΛΟ";
    this.bcx = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.ikl = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.tqn = "ΦΟΡΤΩΣΗ ...";
    this.lad = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.uzq = "Ξεπεράσατε κάποιο όριο!";
    this.imb = "Προειδοποίηση";
    this.uvs = "Σφάλμα επικοινωνίας";
    this.fjr = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.jnz = "Το παιχνίδι θα τερματιστεί";
    this.dag = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.jud = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.cdl = "ΡΥΘΜΙΣΕΙΣ";
    this.mos = "V A L U E";
    this.fom = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.fni = "ΠΛΗΡΟΦΟΡΊΕς";
    this.svd = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.mkx = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.ili = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.ffi = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.rbv = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.mym = "ΔΕΞΙA";
    this.xye = "AΥΤOΜΑΤΟ";
    this.bzj = "ΚEΡΔΙΣΕ";
    this.rjk = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.rtx = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.arj = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.qjs = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.coe = "Τελευταία";
    this.kjq = "παιχνίδια";
    this.obo = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.wmb = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.qmz = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.shu = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.qyn = "Στατιστικά";
    this.qaa = "Σύνολο παιχνιδιών";
    this.ypo = "Συνολικό ποντάρισμα";
    this.kgl = "Συνολικό κέρδος";
    this.bqa = "Συνολικός χρόνος παιχνιδιού";
    this.iok = "Eχω διαβάσει το μήνυμα.";
    this.iyq = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.wqz = "ΙΣΤΟΡΙΚΟ";
    this.jlk = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.hsf = "Κύριο παιχνίδι";
    this.nbs = "Αυτόματη λήψη";
    this.rwd = "Ελήφθησαν";
    this.wpj = "Bonusspins";
    this.sni = "Τζογάρω";
    this.lqa = "Hμισυ";
    this.mkz = "Respin";
    this.tam = "Μπόνουσ";
    this.cgk = "Πρώτο μοίρασμα";
    this.nmx = "Δεύτερο μοίρασμα";
    this.udi = "Τρίτο μοίρασμα";
    this.nhc = "ΣΥΝΈΧΕΙΑ";
    this.gzs = "Να μην προβληθεί ξανά";
    this.rvj = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.ztw = "ΤΖΟΓAΡΩ";
    this.nqd = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.iyk = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.wdo = "Λείπουν πόροι!";
    this.ouf = "Παιχνίδι χωρίς ήχο?";
    this.hpg = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.kko = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.hbn = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.msa = "ΑΚΎΡΩΣΗ";
    this.hle = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.yis = "Αριθμός παιχνιδιών:";
    this.tnf = "Διακοπή autostart";
    this.drf = "Μονάδες χαμηλότερα από:";
    this.ndj = "Μονάδες υψηλότερες από:";
    this.whm = "Κέρδος υψηλότερο από:";
    this.tjm = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.lgc = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.pis = "έλεγχο πραγματικότητας";
    this.btw = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.kmq = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Δεν υπάρχει σύνδεση με το διακομιστή παιχνιδιού!";
    this.fet = "Προσπάθειες σύνδεσης";
    this.qjy = "Η σύνδεση απέτυχε!";
    this.zuf = "Η ενεργή συνεδρία υπάρχει ήδη!";
    this.nei = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
uyy.prototype = new wjg;

function rbo() {
    this.duc = "МИН. ЗАЛОГ Е";
    this.sxq = "МАКС. ЗАЛОГ";
    this.nji = "МИНИМ. ЗАЛОГ";
    this.sfz = "МАКС. ЗАЛОГ";
    this.zjv = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.fow = "ПОМОЩ";
    this.ayp = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.vtb = "МЕНЮ";
    this.cxs = "ПОВЕЧЕ|ИГРИ";
    this.znt = "СТОП";
    this.jbw = "КРЕДИТ";
    this.rpy = "ИГРАТА ЗАВЪРШИ";
    this.oxs = "ПЕЧЕЛИТЕ!";
    this.ckx = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.bhc = "ПОСЛ.ПЕЧАЛБА";
    this.bxs = "ПРИБИРАНЕ";
    this.eno = "ПРИБИРАНЕ";
    this.bbk = "ДУБЛИРАНЕ";
    this.iti = "АВТО|СТАРТ";
    this.lxf = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.ego = "ИЗХОД";
    this.hky = "ЗАПОЧНЕТЕ ИГРАТА";
    this.gur = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.hdr = "ДЕЛЕНЕ";
    this.jeh = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.trg = "ОБЩА ПЕЧАЛБА";
    this.mvx = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.dcz = "Бонус!";
    this.xoc = "БОНУС";
    this.mil = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.unb = "Повече Игри";
    this.urq = "ТУРБО";
    this.xvw = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.bcx = "ПРАВИЛА НА ИГРАТА";
    this.ikl = "ПРАВИЛА|НА ИГРАТА";
    this.tqn = "ЗАРЕЖДАНЕ ...";
    this.lad = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.uzq = "Достигна един от лимитите!";
    this.imb = "Предупреждение";
    this.uvs = "Комуникационна грешка";
    this.fjr = "Достигнали сте максималния брой безплатни игри!";
    this.jnz = "Играта ще бъде затворена";
    this.dag = "Играта ще бъде рестартирана";
    this.jud = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.cdl = "НАСТРОЙКИ";
    this.mos = "V A L U E";
    this.fom = "Моля, включете устройството!";
    this.fni = "ИНФОРМАЦИЯ";
    this.svd = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.mkx = "Тази игра е оптимизирана за Google Chrome.";
    this.ili = "Моля, използвайте текущата версия на";
    this.ffi = "За съжаление този браузър не се поддържа напълно.";
    this.rbv = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.mym = "ДЯСНА";
    this.xye = "АВТО";
    this.bzj = "СПЕЧЕЛЕНО";
    this.rjk = "печалби";
    this.exe = "ОБЩО";
    this.error = "ГРЕШКА";
    this.rtx = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.jlp = "МУЗИКА";
    this.nhf = "ПЪЛЕН ЕКРАН";
    this.asz = "ПЪЛЕН|ЕКРАН";
    this.arj = "ИД НА ИГРА";
    this.qjs = "ВРЕМЕ НА ИГРА";
    this.coe = "Последни";
    this.kjq = "игри";
    this.obo = "ДЕПОЗИТ";
    this.wmb = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.qmz = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.shu = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.qyn = "Статистика";
    this.qaa = "Общо игри";
    this.ypo = "Общо залог";
    this.kgl = "Общо печалби";
    this.bqa = "Общо време на игра";
    this.iok = "Прочетох това съобщение.";
    this.iyq = "ИЗХОД|ОТ|ИГРАТА";
    this.wqz = "ИСТОРИЯ";
    this.jlk = "Няма играни игри.";
    this.state = "СТАТУС";
    this.hsf = "Основна игра";
    this.nbs = "Автоматично събрани";
    this.rwd = "Събрани";
    this.wpj = "Бонус-игри";
    this.sni = "Дублиране";
    this.lqa = "Половина";
    this.mkz = "Respin";
    this.tam = "Бонус";
    this.cgk = "Първо раздаване";
    this.nmx = "Второ раздаване";
    this.udi = "Трето раздаване";
    this.nhc = "ПРОДЪЛЖЕНИЕ";
    this.gzs = "Не показвай отново";
    this.rvj = "AUTOSTART";
    this.ztw = "ДУБЛИРАНЕ";
    this.nqd = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.iyk = "Звукът не може да бъде зареден!";
    this.wdo = "Липсват ресурси!";
    this.ouf = "Игра без звук?";
    this.hpg = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.kko = "Настройте интерфейса на играта според своите нужди!";
    this.hbn = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.msa = "ИЗЧИСТВАНЕ";
    this.hle = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.yis = "Брой игри:";
    this.tnf = "Спри автоматичния старт";
    this.drf = "Кредит по-малък от:";
    this.ndj = "Кредит по-висок от:";
    this.whm = "Спечели повече от:";
    this.tjm = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.lgc = "Сподели във Facebook";
    this.ok = "OK";
    this.pis = "Reality Check";
    this.btw = "Заявили сте проверка на реалността.";
    this.kmq = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Няма връзка с гейминг сървъра!";
    this.fet = "Опити за свързване";
    this.qjy = "Неуспешно влизане!";
    this.zuf = "Вече съществува активна сесия!";
    this.nei = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
rbo.prototype = new wjg;

function yhy() {
    this.duc = "მინიმალური ფსონი არის";
    this.sxq = "მაქსიმალური ფსონი";
    this.nji = "მინიმალური ფსონი";
    this.sfz = "მაქსიმალური ფსონი";
    this.zjv = "ფსონი";
    this.start = "დაწყება";
    this.fow = "დახმარება";
    this.ayp = "გადახდის მრიცხველი";
    this.vtb = "მენიუ";
    this.cxs = "მეტი|თამაშები";
    this.znt = "გაჩერება";
    this.jbw = "კრედიტი";
    this.rpy = "თამაში დასრულებულია";
    this.oxs = "გამარჯვებული!";
    this.ckx = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.bhc = "ბოლო მოგება";
    this.bxs = "შეგროვება";
    this.eno = "შეგროვება";
    this.bbk = "აზარტი";
    this.iti = "ავტო|დაწყება";
    this.lxf = "ნახევარი";
    this.ego = "გამოსვლა";
    this.hky = "თამაშის დაწყება";
    this.gur = "აირჩიეთ ფსონი";
    this.hdr = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.trg = "მთლიანი მოგება";
    this.imb = "გაფრთხილება";
    this.exe = "მთლიანი";
    this.mil = "გთხოვთ, დაელოდოთ ...";
    this.unb = "მეტი თამაშები";
    this.urq = "ტურბო";
    this.xvw = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.nhc = "გაგრძელება";
    this.rvj = "ავტო დაწყება";
    this.nqd = "გადახდის მრიცხველი";
    this.ztw = "აზარტი";
    this.left = "მარცხნივ";
    this.mym = "მარჯვნივ";
    this.xye = "ავტომატურად";
    this.ok = "კი";
    this.msa = "გაუქმება";
    this.sni = "აზარტი";
    this.lqa = "ნახევარი";
    this.bcx = "თამაშის წესები";
    this.ikl = "თამაშის წესები";
    this.dcz = "BONUS!";
    this.xoc = "ბონუს";
    this.jeh = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.mvx = "არა საკმარისი კრედიტი.";
    this.jud = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.tqn = "ჩატვირთვის  ...";
    this.lad = "ჩატვირთვის  ისტორია  ...";
    this.uvs = "საკომუნიკაციო შეცდომა";
    this.uzq = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.fjr = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.jnz = "თამაში დასრულდება";
    this.dag = "თამაში გადაიტვირთება";
    this.bzj = "მოგებულია";
    this.rjk = "wins";
    this.mos = "V A L U E";
    this.error = "შეცდომა";
    this.rtx = "უფასო თამაში";
    this.arj = "თამაშის  ნომერი";
    this.qjs = "სათამაშო დრო";
    this.coe = "ბოლო ";
    this.kjq = "თამაშები";
    this.obo = "დეპოზიტი";
    this.audio = "ხმა";
    this.jlp = "მუსიკა";
    this.nhf = "სრული ეკრანი";
    this.asz = "სრული ეკრანი";
    this.language = "ენის";
    this.gzs = "მომავალში აღარ ჩვენება";
    this.iyk = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.wdo = "არასაკმარისი რესურსები!";
    this.ouf = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.fom = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.svd = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.mkx = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.ike = "გთხოვთ გამოიყენოთ";
    this.oaq = "-ის მიმდინარე ვერსია";
    this.ffi = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.rbv = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.hpg = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.kko = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.wmb = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.qmz = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.shu = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.qaa = "მთლიანი თამაშები";
    this.ypo = "ფსონი მთლიანად";
    this.kgl = "მთლიანი მოგება";
    this.bqa = "მთლიანი სათამაშო დრო";
    this.iok = "მე გავეცანი ამ გზავნილს.";
    this.iyq = "თამაშის|დამთავრება";
    this.wqz = "მოვლენების ჩანაწერი";
    this.jlk = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.hsf = "ძირითადი თამაში";
    this.nbs = "ავტომატურად შეგროვება";
    this.rwd = "აღებულ იქნა";
    this.cgk = "პირველი დარიგება";
    this.nmx = "მეორე დარიგება";
    this.udi = "მესამე დარიგება";
    this.hle = "ავტოგამშვების პარამეტრები";
    this.yis = "თამაშების რაოდენობა:";
    this.tnf = "შეაჩერეთ ავტოგამშვები";
    this.drf = "კრედიტი უფრო დაბალი ვიდრე:";
    this.ndj = "კრედიტი უფრო მაღალი ვიდრე:";
    this.whm = "მოიგეთ უფრო მეტი ვიდრე:";
    this.tjm = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.lgc = "გააზიარეთ ფეისბუქზე";
    this.qyn = "სტატისტიკა";
    this.of = "/";
    this.wpj = "Bonus თამაში";
    this.tam = "ბონუსი";
    this.fni = "ინფორმაცია";
    this.cdl = "პარამეტრ.";
    this.mkz = "ხელახლა დატრიალების";
    this.hbn = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.pis = "რეალობის შემოწმება";
    this.btw = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.kmq = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "სათამაშო სერვერზე დაკავშირება ვერ მოხერხდა!";
    this.fet = "დაკავშირების მცდელობები";
    this.qjy = "შესვლა ვერ მოხერხდა!";
    this.zuf = "აქტიური სესია უკვე არსებობს!";
    this.nei = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
yhy.prototype = new wjg;

function nez() {
    this.duc = "A MINIMUM TÉT";
    this.sxq = "MAXIMUM TÉT";
    this.nji = "MIN. TÉT";
    this.sfz = "MAX. TÉT";
    this.zjv = "TÉT";
    this.start = "START";
    this.fow = "SÚGÓ";
    this.ayp = "SÚGÓ";
    this.vtb = "MENÜ";
    this.cxs = "MENÜ";
    this.znt = "STOP";
    this.jbw = "HITEL";
    this.rpy = "A JÁTÉKNAK VÉGE";
    this.oxs = "NYEREMÉNY!";
    this.ckx = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.bhc = "UTOLSÓ NYER.";
    this.bxs = "FELÍR";
    this.eno = "FELÍR";
    this.bbk = "SZORZÁS";
    this.iti = "AUTO|START";
    this.lxf = "FELEZÉS";
    this.ego = "KILÉPÉS";
    this.hky = "START";
    this.gur = "VÁLASSZON TÉTET";
    this.hdr = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.trg = "Összes Nyeremény";
    this.imb = "Figyelmeztetés";
    this.exe = "ÖSSZES";
    this.mil = "KÉREM VÁRJON ...";
    this.unb = "Menü";
    this.urq = "SEBESSÉG";
    this.xvw = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.nhc = "TOVÁBB";
    this.rvj = "AUTOSTART";
    this.nqd = "SÚGÓ";
    this.ztw = "SZORZÁS";
    this.left = "BAL";
    this.mym = "JOBB";
    this.ok = "OK";
    this.msa = "MÉGSEM";
    this.sni = "Szorzás";
    this.lqa = "Felezés";
    this.bcx = "JÁTÉKSZABÁLYOK";
    this.ikl = "JÁTÉKSZABÁLYOK";
    this.dcz = "Bónusz!";
    this.xoc = "BÓNUSZ";
    this.jeh = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.mvx = "NINCS ELÉG HITEL";
    this.mos = "V A L U E";
    this.rjk = "nyeremények";
    this.of = "/";
    this.jud = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.tqn = "BETÖLTÉSE ...";
    this.lad = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.uvs = "Kommunikációs hiba";
    this.uzq = "Elérte az egyik limitet!";
    this.fjr = "Elérte a szabad játékok maximum számát!";
    this.jnz = "A játék megállítva";
    this.dag = "Játék újraindul";
    this.bzj = "NYERT";
    this.error = "HIBA";
    this.rtx = "FREEPLAY";
    this.xye = "AUTO";
    this.arj = "JÁTÉK ID";
    this.qjs = "Játék Idő";
    this.coe = "utolsó";
    this.kjq = "játék";
    this.obo = "HITEL";
    this.audio = "HANG";
    this.jlp = "ZENE";
    this.nhf = "TELJES KÉPERNYŐ";
    this.asz = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.gzs = "Ne mutassa mégegyszer";
    this.iyk = "A hangot nem lehet betölteni!";
    this.wdo = "Források hiányoznak!";
    this.ouf = "Játék hang nélkül?";
    this.cdl = "BEÁLLÍTÁS";
    this.fom = "Kérjük fordítsa el a készüléket!";
    this.fni = "INFÓ";
    this.svd = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.mkx = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.ike = "Kérjük használja a(z)";
    this.oaq = " legújabb verzióját!";
    this.ffi = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.rbv = "Ez a játék nem indítható FreePlay módban!";
    this.hpg = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.kko = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.wmb = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.qmz = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.shu = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.qyn = "Statisztika";
    this.qaa = "Összes Játék";
    this.ypo = "Összes Tét";
    this.kgl = "Összes Nyeremény";
    this.bqa = "Összes Játék Idő";
    this.iok = "Elolvastam az üzenetet.";
    this.iyq = "KILÉPÉS";
    this.wqz = "Előzmények";
    this.jlk = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.hsf = "Fő Játék";
    this.nbs = "Autom. Felírás";
    this.rwd = "Felírva";
    this.wpj = "Bónusz játék";
    this.mkz = "Respin";
    this.tam = "Bónusz";
    this.cgk = "Első Leosztás";
    this.nmx = "Második Leosztás";
    this.udi = "Harmadik Leosztás";
    this.hle = "AUTOSTART BEÁLLÍTÁS";
    this.yis = "Játékok száma:";
    this.tnf = "Stop autostart";
    this.drf = "A hitel kevesebb, mint:";
    this.ndj = "A hitel több, mint:";
    this.whm = "A nyeremény több, mint:";
    this.tjm = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.lgc = "Megosztás a Facebook-on";
    this.hbn = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.pis = "Reality Check";
    this.btw = "Ön egy valóság-ellenőrzést kért.";
    this.kmq = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Nincs kapcsolat a játék-szerverrel!";
    this.fet = "Kapcsolódási próbálkozás";
    this.qjy = "Bejelentkezési hiba!";
    this.zuf = "Egy szekció már aktív!";
    this.nei = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
nez.prototype = new wjg;

function lqf() {
    this.duc = "MIZA MINIMĂ ESTE";
    this.sxq = "MIZA MAXIMĂ";
    this.nji = "MIZA MIN.";
    this.sfz = "MIZA MAX.";
    this.zjv = "MIZĂ";
    this.start = "START";
    this.fow = "AJUTOR";
    this.ayp = "LISTA|CÂŞTIGURI";
    this.vtb = "MENIU";
    this.cxs = "MENIUL|JOCULUI";
    this.znt = "STOP";
    this.jbw = "CREDIT";
    this.rpy = "SFÂRŞIT JOCUL";
    this.oxs = "CÂŞTIGĂTOR!";
    this.ckx = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.bhc = "ULTIMUL CÂŞTIG";
    this.bxs = "COLECTA";
    this.eno = "COLECTA";
    this.bbk = "JOC";
    this.iti = "AUTO|START";
    this.lxf = "COLECTARE|1/2";
    this.ego = "IEŞIRE";
    this.hky = "APĂSAŢI START";
    this.gur = "ALEGEŢI MIZA";
    this.hdr = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.trg = "Câştig total";
    this.imb = "Avertizare";
    this.exe = "TOTAL";
    this.mil = "AŞTEPTAŢI VĂ ROG ...";
    this.unb = "Meniul Jocului";
    this.urq = "VITEZĂ";
    this.xvw = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.nhc = "CONTINUARE";
    this.rvj = "AUTOSTART";
    this.nqd = "LISTA CÂŞTIGURI";
    this.ztw = "JOC";
    this.left = "STÂNGA";
    this.mym = "DREAPTA";
    this.ok = "OK";
    this.msa = "ÎNTRERUPERE";
    this.sni = "Joc";
    this.lqa = "Colectare 1/2";
    this.bcx = "REGULILE JOCULUI";
    this.ikl = "REGULILE|JOCULUI";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.mvx = "CREDIT INSUFICIENT.";
    this.rjk = "câştigă";
    this.mos = "V A L U E";
    this.of = "DIN";
    this.jud = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.tqn = "ÎNCARCĂ ...";
    this.lad = "ÎNCARCĂ ISTORIC ...";
    this.uvs = "Eroare de comunicare";
    this.uzq = "Aţi atins una dintre limite!";
    this.fjr = "Aţi atins numărul maxim de jocuri gratis!";
    this.jnz = "Jocul se încheie";
    this.dag = "Jocul se restartează";
    this.bzj = "CÂŞTIGAT";
    this.error = "EROARE";
    this.rtx = "FREEPLAY";
    this.xye = "AUTO";
    this.arj = "ID JOC";
    this.qjs = "TIMP DE JOC";
    this.coe = "ultimele";
    this.kjq = "jocuri";
    this.obo = "CREDIT";
    this.audio = "AUDIO";
    this.jlp = "MUZICĂ";
    this.nhf = "ECRAN COMPLET";
    this.asz = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.gzs = "Nu reafișați";
    this.iyk = "Sunetele nu pot fi încărcate!";
    this.wdo = "Lipsesc resurse!";
    this.ouf = "Jucaţi fără sunet?";
    this.cdl = "SETĂRI";
    this.fom = "Vă rugăm opriţi aparatul!";
    this.fni = "INFO";
    this.svd = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.mkx = "Acest joc este optimizat pentru Google Chrome.";
    this.ili = "Vă rugăm utilizaţi versiunea actuală";
    this.ffi = "Din păcate acest browser nu este sprijinit complet.";
    this.rbv = "Acest joc nu poate fi pornit în modul freeplay!";
    this.hpg = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.kko = "Ajustează interfaţa de joc nevoilor dvs!";
    this.wmb = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.qmz = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.shu = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.qyn = "Statistică";
    this.qaa = "Număr jocuri";
    this.ypo = "Pariuri totale";
    this.kgl = "Câştig total";
    this.bqa = "Timp total de joc";
    this.iok = "Am citit mesajul.";
    this.iyq = "ÎNCHEIERE|JOC";
    this.wqz = "ISTORIC";
    this.jlk = "Nu există jocuri.";
    this.state = "STATUT";
    this.hsf = "Joc principal";
    this.nbs = "Auto colectare";
    this.rwd = "Colectat";
    this.wpj = "Bonusspins";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "Primul Deal";
    this.nmx = "Al doilea deal";
    this.udi = "Al treilea deal";
    this.hle = "SETĂRI AUTOSTART";
    this.yis = "Numărul jocurilor:";
    this.tnf = "Oprire autostart";
    this.drf = "Credit sub:";
    this.ndj = "Credit peste:";
    this.whm = "Câștig peste:";
    this.tjm = "Autostart se va opti la începerea bonusului.";
    this.lgc = "Distribuie Facebook";
    this.hbn = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.pis = "Reality Check";
    this.btw = "Ai cerut un Reality Check.";
    this.kmq = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Fără conexiune la serverul de jocuri!";
    this.fet = "Tentative de conectare";
    this.qjy = "Conectare nereuşită!";
    this.zuf = "Există deja o sesiune activă!";
    this.nei = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
lqf.prototype = new wjg;

function ucv() {
    this.duc = "MÍNIMA APOSTA É";
    this.sxq = "MÁX. APOSTA";
    this.nji = "MÍN. APOSTA";
    this.sfz = "MÁX. APOSTA";
    this.zjv = "APOSTA";
    this.start = "PARTIDA";
    this.fow = "AJUDA";
    this.ayp = "ESQUEMA|DE PAGOS";
    this.vtb = "MENU";
    this.cxs = "SELEÇÃO|DE JOGOS";
    this.znt = "PARADA";
    this.jbw = "CRÉDITO";
    this.rpy = "FIM DO JOGO";
    this.oxs = "VENCEDOR!";
    this.ckx = "BOA SORTE!";
    this.win = "GANHO";
    this.bhc = "ULTIMO GANHO";
    this.bxs = "COLETAR";
    this.eno = "COLETAR";
    this.bbk = "JOGADA";
    this.iti = "AUTO|PARTIDA";
    this.lxf = "METADE";
    this.ego = "SAÍDA";
    this.hky = "PREMIR PARTIDA";
    this.gur = "SELECIONAR APOSTA";
    this.hdr = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.trg = "Ganho total";
    this.imb = "Aviso";
    this.exe = "TOTAL";
    this.mil = "AGUARDE POR FAVOR ...";
    this.unb = "Seleção de jogos";
    this.urq = "VELOCIDADE";
    this.xvw = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.nhc = "CONTINUAR";
    this.rvj = "AUTOPARTIDA";
    this.nqd = "ESQUEMA DE PAGOS";
    this.ztw = "JOGADA";
    this.left = "ESQUERDA";
    this.mym = "DIREITA";
    this.ok = "OK";
    this.msa = "CANCELAR";
    this.sni = "Jogada";
    this.lqa = "Metade";
    this.bcx = "REGRAS DO JOGO";
    this.ikl = "REGRAS|DO JOGO";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.mvx = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.rjk = "ganha";
    this.mos = "V A L U E";
    this.of = "DE";
    this.jud = "TOCAR NA TELA PARA CONTINUAR";
    this.tqn = "CARREGANDO ...";
    this.lad = "CARREGANDO HISTÓRICO ...";
    this.uvs = "Erro de comunicação";
    this.uzq = "Alcançou um dos limities!";
    this.fjr = "Alcançou a quantidade máxima de jogos livres!";
    this.jnz = "O jogo será encerrado";
    this.dag = "O jogo será reiniciado";
    this.bzj = "GANHOU";
    this.error = "ERRO";
    this.rtx = "FREEPLAY";
    this.xye = "AUTO";
    this.arj = "ID JOGO";
    this.qjs = "Playing Time";
    this.coe = "Últimos";
    this.kjq = "jogos";
    this.obo = "DEPOSIT";
    this.audio = "AUDIO";
    this.jlp = "MUSIC";
    this.nhf = "TELA CHEIA";
    this.asz = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.gzs = "Não exibir novamente";
    this.iyk = "Sounds não podem ser carregados!";
    this.wdo = "Faltam recursos!";
    this.ouf = "Jogar sem som?";
    this.cdl = "AJUSTES";
    this.fom = "Favor girar o seu aparelho!";
    this.fni = "INFORMAÇÃO";
    this.svd = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.mkx = "Este jogo é otimizado por Google Chrome.";
    this.ili = "Favor usar a versão atual de";
    this.ffi = "Infelizmente este browser não é completamente suportado.";
    this.rbv = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.hpg = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.kko = "Adapte a interface do jogo às suas necessidades!";
    this.wmb = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.qmz = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.shu = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.qyn = "Estatísticas";
    this.qaa = "Número de jogos";
    this.ypo = "Aposta total";
    this.kgl = "Ganho total";
    this.bqa = "Tempo total do jogo";
    this.iok = "Eu lí esta mensagem.";
    this.iyq = "ENCERRAR|JOGO";
    this.wqz = "HISTÓRICO";
    this.jlk = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.hsf = "Jogo principal";
    this.nbs = "Coletado automaticamente";
    this.rwd = "Coletado";
    this.wpj = "Bonusspins";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "Primeiro Deal";
    this.nmx = "Segundo Deal";
    this.udi = "Terceiro Deal";
    this.hle = "AJUSTES AUTOPARTIDA";
    this.yis = "Número de jogos:";
    this.tnf = "Parar autopartida";
    this.drf = "Crédito menor do que:";
    this.ndj = "Crédito maior do que:";
    this.whm = "Ganho maior do que:";
    this.tjm = "O autopartida será parado no início do bonus.";
    this.lgc = "Participar no Facebook";
    this.hbn = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.pis = "Reality Check";
    this.btw = "Solicitaste um Reality Check.";
    this.kmq = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Nenhuma conexão com o servidor do jogo!";
    this.fet = "Tentativas de conexão";
    this.qjy = "Login falhou!";
    this.zuf = "Ja existe uma sessão ativa!";
    this.nei = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
ucv.prototype = new wjg;

function rig() {
    this.duc = "LA MISE MINIMALE EST DE";
    this.sxq = "MISE MAX.";
    this.nji = "MISE MINI";
    this.sfz = "MISE MAX.";
    this.zjv = "MISE";
    this.start = "DEPART";
    this.fow = "AIDE";
    this.ayp = "TABLEAU|DES PAIEMENTS";
    this.vtb = "MENU";
    this.cxs = "PLUS|DE JEUX";
    this.znt = "ARRÊTEZ";
    this.jbw = "CRÉDIT";
    this.rpy = "FIN DU JEU";
    this.oxs = "GAGNANT!";
    this.ckx = "BONNE CHANCE!";
    this.win = "GAIN";
    this.bhc = "DERNIER GAIN";
    this.bxs = "ENCAISSER";
    this.eno = "ENCAISSER";
    this.bbk = "DOUBLER";
    this.iti = "AUTO|LANCER";
    this.lxf = "ENCAISSER|MOITIÉ";
    this.ego = "SORTIE";
    this.hky = "APPUYEZ SUR START";
    this.gur = "CHOISIR LA MISE";
    this.hdr = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.trg = "Gain total";
    this.imb = "Avertissement";
    this.exe = "TOTALE";
    this.mil = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.unb = "Plus de jeux";
    this.urq = "VITESSE";
    this.xvw = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.nhc = "CONTINUER";
    this.rvj = "AUTO LANCER";
    this.nqd = "TABLEAU DES PAIEMENTS";
    this.ztw = "DOUBLER";
    this.left = "GAUCHE";
    this.mym = "DROITE";
    this.ok = "OK";
    this.msa = "ANNULER";
    this.sni = "Doubler";
    this.lqa = "Encaisser moitié";
    this.bcx = "RÈGLES DU JEU";
    this.ikl = "RÈGLES DU JEU";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.mvx = "PAS ASSEZ DE CRÉDIT";
    this.rjk = "gagne";
    this.mos = "V A L U E";
    this.of = "SUR";
    this.jud = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.tqn = "CHARGEMENT EN COURS ...";
    this.lad = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.uvs = "Erreur de communication";
    this.uzq = "Vous avez atteint une des limites!";
    this.fjr = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.jnz = "Le jeu sera terminé";
    this.dag = "Le jeu sera démarré de nouveau";
    this.bzj = "GAGNÉ";
    this.error = "ERREUR";
    this.rtx = "JEU GRATUIT";
    this.xye = "AUTO";
    this.arj = "ID DU JEU";
    this.qjs = "TEMPS DE JEU";
    this.coe = "Les";
    this.kjq = "derniers jeux";
    this.obo = "AVOIR";
    this.audio = "AUDIO";
    this.jlp = "MUSIQUE";
    this.nhf = "PLEIN ÉCRAN";
    this.asz = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.gzs = "Ne pas afficher encore une fois";
    this.iyk = "Impossible de charger des sounds!";
    this.wdo = "Manque de ressources!";
    this.ouf = "Jouer sans son?";
    this.cdl = "CONFIGUR.";
    this.fom = "Merci de tourner votre matériel!";
    this.fni = "INFO";
    this.svd = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.mkx = "Ce jeu est optimisé pour Google Chrome.";
    this.ili = "Veuilllez utiliser la version à jour de";
    this.ffi = "Malheureusement, ce browser n'est intégralement supporté.";
    this.rbv = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.hpg = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.kko = "Adapte l'interface de jeu à tes besoins!";
    this.wmb = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.qmz = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.shu = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.qyn = "Statistiques";
    this.qaa = "Nombre des jeux";
    this.ypo = "Total des mises";
    this.kgl = "Gain total";
    this.bqa = "Temps total du jeu";
    this.iok = "J'ai lu le message";
    this.iyq = "TERMINER|LE JEU";
    this.wqz = "Historique";
    this.jlk = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.hsf = "Jeu principal";
    this.nbs = "Pris automatiquement";
    this.rwd = "Pris";
    this.wpj = "Bonusspins";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "Premier Deal";
    this.nmx = "Deuxième Deal";
    this.udi = "Troisième Deal";
    this.hle = "AUTOSTART CONFIGURATION";
    this.yis = "Nombre des jeux:";
    this.tnf = "Arrêter autostart";
    this.drf = "Crédit inférieur à:";
    this.ndj = "Crédit supérieur à:";
    this.whm = "Gain supérieur à:";
    this.tjm = "L'autostart est arrêté au début du bonus.";
    this.lgc = "Partager sur Facebook";
    this.hbn = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.pis = "Reality Check";
    this.btw = "Tu as demandé un Reality Check.";
    this.kmq = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Aucune connexion avec le gaming serveur!";
    this.fet = "Tentatives de connexion";
    this.qjy = "Connexion échouée!";
    this.zuf = "Il y a déjà une session active!";
    this.nei = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
rig.prototype = new wjg;

function mwj() {
    this.duc = "NAJMANJI ULOG JE";
    this.sxq = "MAX ULOG";
    this.nji = "MIN. ULOG";
    this.sfz = "MAKS. ULOG";
    this.zjv = "ULOG";
    this.start = "START";
    this.fow = "POMOĆ";
    this.ayp = "LISTA DOBITAKA";
    this.vtb = "IZBORNIK";
    this.cxs = "VIŠE|IGARA";
    this.znt = "STOP";
    this.jbw = "KREDIT";
    this.rpy = "KRAJ IGRE";
    this.oxs = "DOBITAK!";
    this.ckx = "SRETNO!";
    this.win = "DOBITAK";
    this.bhc = "ZADNJI DOBITAK";
    this.bxs = "UPIŠI";
    this.eno = "UPIŠI";
    this.bbk = "DUPLANJE";
    this.iti = "AUTO|START";
    this.lxf = "UZMI|1/2";
    this.ego = "IZLAZ";
    this.hky = "PRITISNITE START";
    this.gur = "BIRAJTE ULOG";
    this.hdr = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.trg = "Ukupni dobitci";
    this.imb = "Upozorenje";
    this.exe = "UKUPNI";
    this.mil = "MOLIMO PRIČEKAJTE ...";
    this.unb = "Više igara";
    this.urq = "BRZINA";
    this.xvw = "Kod kvara na uređaju nema jamstva.";
    this.nhc = "DALJE";
    this.rvj = "AUTOSTART";
    this.nqd = "LISTA DOBITAKA";
    this.ztw = "DUPLANJE";
    this.left = "LIJEVA";
    this.mym = "DESNA";
    this.ok = "OK";
    this.msa = "PREKID";
    this.sni = "Duplanje";
    this.lqa = "Uzmi 1/2";
    this.bcx = "PRAVILA IGRE";
    this.ikl = "PRAVILA IGRE";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.mvx = "NEMATE DOVOLJNO KREDITA.";
    this.rjk = "dobici";
    this.mos = "V A L U E";
    this.of = "OD";
    this.jud = "ZA NASTAVAK DODIRNITE ZASLON";
    this.tqn = "UČITAVANJA ...";
    this.lad = "POVIJEST UČITAVANJA ...";
    this.uvs = "Komunikacijska pogreška";
    this.uzq = "Dostigli ste jednu od graničnih vrijednosti!";
    this.fjr = "Dostigli ste maksimum besplatnih igara!";
    this.jnz = "Igra se zatvara";
    this.dag = "Igra se iznova učitava";
    this.bzj = "OSVOJENO";
    this.error = "POGREŠKA";
    this.rtx = "FREEPLAY";
    this.xye = "AUTO";
    this.arj = "ID IGRE";
    this.qjs = "Vrijeme igre";
    this.coe = "posljednjih";
    this.kjq = "igara";
    this.obo = "DEPOZIT";
    this.audio = "ZVUKA";
    this.jlp = "GLAZBA";
    this.nhf = "PUN ZASLON";
    this.asz = "PUN ZASLON";
    this.language = "JEZIKA";
    this.gzs = "Ne prikazuj ponovo";
    this.iyk = "Zvukovi se ne mogu učitati!";
    this.wdo = "Nedostaju resursi!";
    this.ouf = "Želite li igrati uz zvuk?";
    this.cdl = "POSTAVKE";
    this.fom = "Uključite svoj uređaj!";
    this.fni = "INFORMACIJE";
    this.svd = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.mkx = "Ova igra je optimizirana za Google Chrome.";
    this.ili = "Molimo koristite se trenutnom inačicom";
    this.ffi = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.rbv = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.hpg = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.kko = "Prilagodite sučelje igre svojim potrebama!";
    this.wmb = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.qmz = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.shu = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.qyn = "Statistike";
    this.qaa = "Ukupno igara";
    this.ypo = "Ukupni ulog";
    this.kgl = "Ukupno dobitaka";
    this.bqa = "Ukupno vrijeme igre";
    this.iok = "Pročitao sam ovu poruku";
    this.iyq = "IZLAZ|IZ IGRE";
    this.wqz = "Povijest";
    this.jlk = "Nema odigranih igara.";
    this.state = "STANJE";
    this.hsf = "Glavna igra";
    this.nbs = "Auto. pokupljeno";
    this.rwd = "Pokupljeno";
    this.wpj = "Besplatne igre";
    this.mkz = "Dodatne okretaje";
    this.tam = "Bonus";
    this.cgk = "Prvo dijeljenje";
    this.nmx = "Drugo dijeljenje";
    this.udi = "Treće dijeljenje";
    this.hle = "POSTAVKE AUTOMATSKE IGRE";
    this.yis = "Ukupno igara:";
    this.tnf = "Zaustavljanje automatske igre";
    this.drf = "Kredit manji od:";
    this.ndj = "Kredit veći od:";
    this.whm = "Dobitak veći od:";
    this.tjm = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.lgc = "Podijeli na Facebooku";
    this.hbn = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.pis = "Reality Check";
    this.btw = "Zatražili ste Reality Check.";
    this.kmq = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Nema konekcije sa serverom za igranje!";
    this.fet = "Pokušaji povezivanja";
    this.qjy = "Prijavljivanje nije uspjelo!";
    this.zuf = "Aktivna sesija već postoji!";
    this.nei = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
mwj.prototype = new wjg;

function svn() {
    this.duc = "MINIMA PUNTATA È";
    this.sxq = "PUNTATA MASSIMA";
    this.nji = "MIN. PUNTATA";
    this.sfz = "MASS. PUNTATA";
    this.zjv = "PUNTATA";
    this.start = "START";
    this.fow = "AIUTO";
    this.ayp = "TABELLA VINCITE";
    this.vtb = "MENU";
    this.cxs = "SCELTA|GIOCHI";
    this.znt = "STOP";
    this.jbw = "CREDITO";
    this.rpy = "FINE PARTITA";
    this.oxs = "VINCITORE!";
    this.ckx = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.bhc = "ULTIMA VINCITA";
    this.bxs = "INCASSA";
    this.eno = "INCASSA";
    this.bbk = "GAMBLE";
    this.iti = "AUTO|START";
    this.lxf = "METÀ";
    this.ego = "FINE";
    this.hky = "PREMI START";
    this.gur = "SCEGLI PUNTATA";
    this.hdr = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.trg = "Totale vincita";
    this.imb = "Attenzione";
    this.exe = "TOTALE";
    this.mil = "ATTENDERE PREGO ...";
    this.unb = "Scelta Giochi";
    this.urq = "VELOCITÀ";
    this.xvw = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.nhc = "CONTINUA";
    this.rvj = "AUTOSTART";
    this.nqd = "TABELLA VINCITE";
    this.ztw = "GAMBLE";
    this.left = "SINISTRA";
    this.mym = "DESTRA";
    this.ok = "OK";
    this.msa = "CANCELLA";
    this.sni = "Gamble";
    this.lqa = "Metà";
    this.bcx = "REGOLAMENTO";
    this.ikl = "REGOLAMENTO";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "PREMI UN TASTO PER CONTINUARE";
    this.mvx = "CREDITO INSUFFICIENTE!";
    this.rjk = "vince";
    this.mos = "V A L U E";
    this.of = "DI";
    this.jud = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.tqn = "STA CARICANDO ...";
    this.lad = "STA CARICANDO LA CRONACA ...";
    this.uvs = "Errore di comunicazione";
    this.uzq = "Hai raggiunto uno dei limiti!";
    this.fjr = "Hai raggiunto il numero massimo di free games!";
    this.jnz = "La partita sta terminando";
    this.dag = "La partita sta ripartendo";
    this.bzj = "VINTO";
    this.error = "ERRORE";
    this.rtx = "FREEPLAY";
    this.xye = "AUTO";
    this.arj = "GAME ID";
    this.qjs = "Durata del gioco";
    this.coe = "Ultime partite";
    this.kjq = "";
    this.obo = "DEPOSITO";
    this.audio = "AUDIO";
    this.jlp = "MUSICA";
    this.nhf = "SCHERMO INTERO";
    this.asz = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.gzs = "Non mostrare di nuovo";
    this.iyk = "Suoni non caricabili!";
    this.wdo = "Mancano risorse!";
    this.ouf = "Giocare senza suoni?";
    this.cdl = "SETTAGGI";
    this.fom = "Prego girare l'apparecchio!";
    this.fni = "INFO";
    this.svd = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.mkx = "La partita è ottimizzata per Google Chrome.";
    this.ili = "Prego utilizzare la versione attuale di";
    this.ffi = "Purtroppo il presente browser non viene supportato interamente";
    this.rbv = "Impossibile avviare questa partita nel modo freeplay!";
    this.hpg = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.kko = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.wmb = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.qmz = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.shu = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.qyn = "Statistica";
    this.qaa = "Totale partite";
    this.ypo = "Totale puntata";
    this.kgl = "Totale vincita";
    this.bqa = "Totale durata del gioco";
    this.iok = "Ho letto il messaggio";
    this.iyq = "TERMINARE|LA PARTITA";
    this.wqz = "Cronaca";
    this.jlk = "Nessuna partita giocata.";
    this.state = "STATO";
    this.hsf = "Partita principale";
    this.nbs = "Raccolto autom.";
    this.rwd = "Raccolto";
    this.wpj = "Bonusspin";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "Primo deal";
    this.nmx = "Secondo deal";
    this.udi = "Terzo deal";
    this.hle = "SETTAGGI AUTOSTART";
    this.yis = "Numero di partite:";
    this.tnf = "Fermare l'autostart";
    this.drf = "Credito più basso di:";
    this.ndj = "Credito più alto di:";
    this.whm = "Vincita più alta di:";
    this.tjm = "L'autostart si ferma all'inizio del bonus.";
    this.lgc = "Dividi su facebook";
    this.hbn = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.pis = "Reality Check";
    this.btw = "Avete richiesto un Reality Check.";
    this.kmq = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Nessuna connessione al gaming server!";
    this.fet = "Tentativi di connessione";
    this.qjy = "Login fallito!";
    this.zuf = "È già attiva una seduta!";
    this.nei = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
svn.prototype = new wjg;

function xuo() {
    this.duc = "MIN. INSATSEN ÄR";
    this.sxq = "MAXIMAL INSATS";
    this.nji = "MIN. INSATS";
    this.sfz = "MAX. INSATS";
    this.zjv = "INSATS";
    this.start = "STARTA";
    this.fow = "HJÄLP";
    this.ayp = "VINSTTABELL";
    this.vtb = "MENY";
    this.cxs = "FLER|SPEL";
    this.znt = "STOPP";
    this.jbw = "KREDIT";
    this.rpy = "SPELET ÄR SLUT";
    this.oxs = "VINNARE!";
    this.ckx = "LYCKA TILL!";
    this.win = "VINN";
    this.bhc = "SENASTE VINSTEN";
    this.bxs = "INKASSERA";
    this.eno = "INKASSERA";
    this.bbk = "DUBBLERA";
    this.iti = "AUTO|START";
    this.lxf = "HÄLFTEN|1/2";
    this.ego = "AVSLUTA";
    this.hky = "TRYCK PÅ STARTA";
    this.gur = "VÄLJ INSATS";
    this.hdr = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.trg = "Total Vinst";
    this.imb = "Varning";
    this.exe = "TOTALT";
    this.mil = "VAR VÄNLIG VÄNTA ...";
    this.unb = "Fler spel";
    this.urq = "TEMPO";
    this.xvw = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.nhc = "FORTSÄTT";
    this.rvj = "AUTOSTART";
    this.nqd = "VINSTTABELL";
    this.ztw = "DUBBLERA";
    this.left = "VÄNSTER";
    this.mym = "HÖGER";
    this.ok = "OK";
    this.msa = "AVBRYT";
    this.sni = "Dubblering";
    this.lqa = "Hälften";
    this.bcx = "SPELREGLER";
    this.ikl = "SPELREGLER";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.mvx = "FÖR LÅGT SALDO!";
    this.rjk = "vinster";
    this.mos = "V A L U E";
    this.of = "AV";
    this.jud = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.tqn = "LÄSER ...";
    this.lad = "LÄSER IN HISTORIKEN ...";
    this.uvs = "Kommunikationsfel";
    this.uzq = "Du har nått en av gränserna!";
    this.fjr = "Du har nått det maximala antalet gratisspel!";
    this.jnz = "Spelet avslutas";
    this.dag = "Spelet startas om";
    this.bzj = "VUNNA";
    this.error = "FEL";
    this.rtx = "GRATISSPEL";
    this.xye = "AUTO";
    this.arj = "SPEL-ID";
    this.qjs = "SPELTID";
    this.coe = "senaste";
    this.kjq = "spelen";
    this.obo = "INSÄTTNING";
    this.audio = "LJUD";
    this.jlp = "MUSIK";
    this.nhf = "HELSKÄRM";
    this.asz = "HELSKÄRM";
    this.language = "SPRÅK";
    this.gzs = "Visa inte igen";
    this.iyk = "Ljud kan inte laddas!";
    this.wdo = "Resurser saknas!";
    this.ouf = "Spela utan ljud?";
    this.cdl = "INSTÄLLN.";
    this.fom = "Vänd din enhet!";
    this.fni = "INFO";
    this.svd = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.mkx = "Det här spelet är optimerat för Google Chrome.";
    this.ili = "Använd den senaste versionen av";
    this.ffi = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.rbv = "Det här spelet kan inte startas i gratisspelsläget!";
    this.hpg = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.kko = "Anpassa spelgränssnittet efter dina behov!";
    this.wmb = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.qmz = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.shu = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.qyn = "Statistik";
    this.qaa = "Totalt antal spel";
    this.ypo = "Totalinsats";
    this.kgl = "Totalvinst";
    this.bqa = "Total speltid";
    this.iok = "Jag har läst detta meddelande";
    this.iyq = "AVSLUTA|SPELET";
    this.wqz = "Historik";
    this.jlk = "Inga spel har spelats.";
    this.state = "STATUS";
    this.hsf = "Huvudspel";
    this.nbs = "Auto. Inkasserat";
    this.rwd = "Inkasserat";
    this.wpj = "Bonusspinn";
    this.mkz = "Respin";
    this.tam = "Bonus";
    this.cgk = "Första given";
    this.nmx = "Andra given";
    this.udi = "Tredje given";
    this.hle = "AUTOSPELINSTÄLLNINGAR";
    this.yis = "Antal spelrundor:";
    this.tnf = "Stoppa automatiskt spel";
    this.drf = "Saldo lägre än:";
    this.ndj = "Saldo högre än:";
    this.whm = "Vinst högre än:";
    this.tjm = "Autospelen kommer att stoppas då bonusen startar.";
    this.lgc = "Dela på Facebook";
    this.hbn = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.pis = "Reality Check";
    this.btw = "Du har begärt att få en statusuppdatering.";
    this.kmq = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.war = "Spelpaus";
    this.rnr = "Spelgränser";
    this.aqe = "Självtest";
    this.abb = "Ingen anslutning till spelservern!";
    this.fet = "Anslutningsförsök";
    this.qjy = "Inloggningen misslyckades!";
    this.zuf = "Det finns redan en aktiv session!";
    this.nei = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
xuo.prototype = new wjg;

function kap() {
    this.duc = "МИНИМАЛЕН ВЛОГ Е";
    this.sxq = "МАКС. ВЛОГ";
    this.nji = "МИН. ВЛОГ";
    this.sfz = "МАКС. ВЛОГ";
    this.zjv = "ВЛОГ";
    this.start = "СТАРТ";
    this.fow = "ПОМОШ";
    this.ayp = "ТАБЕЛА НА|ДОБИВКИ";
    this.vtb = "МЕНИ";
    this.cxs = "ДРУГИ|ИГРИ";
    this.znt = "СТОП";
    this.jbw = "КРЕДИТ";
    this.rpy = "КРАЈ НА ИГРАТА";
    this.oxs = "ДОБИВКА!";
    this.ckx = "СО СРЕЌА!";
    this.win = "ДОБИВКА";
    this.bhc = "ПОСЛ. ДОБИВКА";
    this.bxs = "СОБЕРИ";
    this.eno = "СОБЕРИ";
    this.bbk = "НА СРЕЌА";
    this.iti = "АВТОМ.|СТАРТ";
    this.lxf = "ПРЕПОЛОВИ";
    this.ego = "ИЗЛЕЗ";
    this.hky = "ПРИТИСНИ НА СТАРТ";
    this.gur = "ОДБЕРИ ВЛОГ";
    this.hdr = "ПРЕПОЛОВИ";
    this.ret = "ВРАЌАЊЕ|ВО ИГРА";
    this.trg = "Вкупна добивка";
    this.imb = "Предупредување";
    this.exe = "ВКУПНО";
    this.mil = "ПОЧЕКАЈ ...";
    this.unb = "Други игри";
    this.urq = "ТУРБО";
    this.xvw = "При дефект се избегнува гаранција.";
    this.nhc = "ПРОДОЛЖИ";
    this.rvj = "АВТОМ. СТАРТ";
    this.nqd = "ТАБЕЛА НА ДОБИВКИ";
    this.ztw = "НА СРЕЌА";
    this.left = "ЛЕВА";
    this.mym = "ДЕСНА";
    this.ok = "ВО РЕД";
    this.msa = "ОТКАЖИ";
    this.sni = "На среќа";
    this.lqa = "Преполови";
    this.bcx = "ПРАВИЛА НА ИГРАТА";
    this.ikl = "ПРАВИЛА|НА ИГРАТА";
    this.dcz = "Бонус!";
    this.xoc = "БОНУС";
    this.jeh = "ПРИТИСНИ НЕКОЕ КОПЧЕ ЗА ДА ПРОДОЛЖИШ";
    this.mvx = "НЕМАТЕ ДОВОЛНО КРЕДИТИ!";
    this.rjk = "добива";
    this.mos = "V A L U E";
    this.of = "OД";
    this.jud = "ДОПРИ ГО ЕКРАНОТ ЗА ДА ПРОДОЛЖИШ";
    this.tqn = "ВЧИТУВАЊЕ ...";
    this.lad = "ВЧИТУВАЊЕ ИСТОРИЈА ...";
    this.uvs = "Комуникациска грешка";
    this.uzq = "Достигнавте еден од лимитите!";
    this.fjr = "Го достигнавте максималниот број бесплатни игри!";
    this.jnz = "Играта завршува";
    this.dag = "Играта стартува одново";
    this.bzj = "ДОБИЕНО";
    this.error = "ГРЕШКА";
    this.rtx = "БЕСПЛАТНА ИГРА";
    this.xye = "АВТО";
    this.arj = "ИД НА ИГРА";
    this.qjs = "ВРЕМЕ НА ИГРАЊЕ";
    this.coe = "Последни";
    this.kjq = "игри";
    this.obo = "КРЕДИТ";
    this.audio = "АУДИО";
    this.jlp = "МУЗИКА";
    this.nhf = "ЦЕЛ ЕКРАН";
    this.asz = "ЦЕЛ ЕКРАН";
    this.language = "ЈАЗИК";
    this.gzs = "Нe прикажувај повторно";
    this.iyk = "Звуците не може да се вчитаат!";
    this.wdo = "Недостасуваат ресурси!";
    this.ouf = "Игра без звук?";
    this.cdl = "ПОСТАВКИ";
    this.fom = "Завртете го уредот!";
    this.fni = "ИНФО";
    this.svd = "Деактивирајте го ПРИВАТНИОТ РЕЖИМ во пребарувачот за да ја започнете играта.";
    this.mkx = "Оваа игра е оптимизирана за Google Chrome.";
    this.ili = "Користете ја актуелната верзија на";
    this.ffi = "За жал, овој пребарувач не е целосно поддржан.";
    this.rbv = "Оваа игра не може да се стартува во режимот на бесплатно играње!";
    this.hpg = "Завртете го уредот во режим на портрет за да играте како на вистински автомат!";
    this.kko = "Прилагоди го интерфејсот на играта на твоите потреби!";
    this.wmb = "ОДБЕРИ ТОЧНА БОЈА ЗА ДУПЛИРАЊЕ НА ДОБИВКАТА";
    this.qmz = "ОДБЕРИ ТОЧНА БОЈА НА КАРТА ЗА ЧЕТВОРНО ЗГОЛЕМУВАЊЕ НА ДОБИВКАТА";
    this.shu = "ИГРАЈ ЗА ШАНСА ЗА ЗГОЛЕМУВАЊЕ НА ДОБИВКАТА";
    this.qyn = "Статистика";
    this.qaa = "Вкупно игри";
    this.ypo = "Вкупен влог";
    this.kgl = "Вкупна добивка";
    this.bqa = "Вкупно време на играње";
    this.iok = "Ја прочитав пораката";
    this.iyq = "ЗАВРШИ|ИГРА";
    this.wqz = "Историја";
    this.jlk = "Нема играни игри.";
    this.state = "СТАТУС";
    this.hsf = "Главна игра";
    this.nbs = "Автоматски собрано";
    this.rwd = "Собрани";
    this.wpj = "Бонус вртења";
    this.mkz = "Respin";
    this.tam = "Бонус";
    this.cgk = "Прво делење";
    this.nmx = "Второ делење";
    this.udi = "Трето делење";
    this.hle = "ПОСТАВКИ ЗА АВТОМАТСКИ СТАРТ";
    this.yis = "Број игри:";
    this.tnf = "Запри автоматски старт";
    this.drf = "Кредитот е помал од:";
    this.ndj = "Кредитот е поголем од:";
    this.whm = "Добивка поголема од:";
    this.tjm = "Автоматскиот старт ќе запре на почетокот на бонусот.";
    this.lgc = "Сподели на Facebook";
    this.hbn = "ДОПОЛНИТЕЛНИ ИНФОРМАЦИИ ЌЕ НАЈДЕТЕ ВО ПРАВИЛАТА ЗА ИГРА.";
    this.pis = "Reality Check";
    this.btw = "Побара проверка на реалноста.";
    this.kmq = "Притисни ИСТОРИЈА за да ја прикажеш историјата на играње.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Нема конекција со серверот за играње!";
    this.fet = "Обиди за поврзување";
    this.qjy = "Неуспешна пријава!";
    this.zuf = "Веќе постои активна сесија!";
    this.nei = "ТЕОРЕТСКАТА ИСПЛАТА НА ИГРАЧОТ ЗА ОВАА ИГРА ИЗНЕСУВА XY."
}
kap.prototype = new wjg;

function cae() {
    this.duc = "MINIMALNY ZAKŁAD TO";
    this.sxq = "MAKS. ZAKŁAD";
    this.nji = "MIN. ZAKŁAD";
    this.sfz = "MAKS. ZAKŁAD";
    this.zjv = "ZAKŁAD";
    this.start = "START";
    this.fow = "POMOC";
    this.ayp = "TABELA WYPŁAT";
    this.vtb = "MENU";
    this.cxs = "WIĘCEJ|GIER";
    this.znt = "STOP";
    this.jbw = "KREDYT";
    this.rpy = "KONIEC GRY";
    this.oxs = "ZWYCIĘZCA!";
    this.ckx = "POWODZENIA!";
    this.win = "WYGRANA";
    this.bhc = "OSTATNIA WYGRANA";
    this.bxs = "ZABRAĆ";
    this.eno = "ZABRAĆ";
    this.bbk = "RYZYKA";
    this.iti = "AUTO|START";
    this.lxf = "WEŹ|1/2";
    this.ego = "WYJŚCIE";
    this.hky = "NACIŚNIJ START";
    this.gur = "WYBIERZ ZAKŁAD";
    this.hdr = "WEŹ|1/2";
    this.ret = "POWRÓT|DO GRY";
    this.trg = "Wygrana łączna";
    this.imb = "Ostrzeżenie";
    this.exe = "ŁĄCZNIE";
    this.mil = "CZEKAJ ...";
    this.unb = "Więcej gier";
    this.urq = "PRĘDKOŚĆ";
    this.xvw = "Nie ponosimy odpowiedzialności za awarie urządzenia.";
    this.nhc = "DALEJ";
    this.rvj = "AUTOSTART";
    this.nqd = "TABELA WYPŁAT";
    this.ztw = "RYZYKA";
    this.left = "NA LEWO";
    this.mym = "NA PRAWO";
    this.ok = "OK";
    this.msa = "ANULUJ";
    this.sni = "Ryzyka";
    this.lqa = "Weź 1/2";
    this.bcx = "ZASADY GRY";
    this.ikl = "ZASADY GRY";
    this.dcz = "Bonus!";
    this.xoc = "BONUS";
    this.jeh = "DOTKNIJ EKRAN, BY KONTYNUOWAĆ";
    this.mvx = "ZBYT MAŁO KREDYTU!";
    this.rjk = "wygrywa";
    this.mos = "V A L U E";
    this.of = "Z";
    this.jud = "DOTKNIJ EKRANU, BY KONTYNUOWAĆ";
    this.tqn = "WCZYTYWANIE ...";
    this.lad = "WCZYTYWANIE HISTORII ...";
    this.uvs = "Błąd w komunikacji";
    this.uzq = "Osiągnąłeś jeden z limitów!";
    this.fjr = "Osiągnąłeś maksymalną liczbę darmowych gier!";
    this.jnz = "Zakończenie gry";
    this.dag = "Gra zostanie uruchomiona ponownie";
    this.bzj = "WYGRAŁEŚ";
    this.error = "BŁĄD";
    this.rtx = "DARMOWA GRA";
    this.xye = "AUTO";
    this.arj = "ID GRY";
    this.qjs = "Czas gry";
    this.coe = "ostatnie ";
    this.kjq = "gry";
    this.obo = "KREDYT";
    this.audio = "AUDIO";
    this.jlp = "MUZYKA";
    this.nhf = "PEŁNY EKRAN";
    this.asz = "PEŁNY EKRAN";
    this.language = "JĘZYK";
    this.gzs = "Nie pokazuj ponownie";
    this.iyk = "Nie można załadować dźwięków!";
    this.wdo = "Brakuje zasobów!";
    this.ouf = "Chcesz grać bez dźwięku?";
    this.cdl = "USTAW.";
    this.fom = "Obróć swoje urządzenie!";
    this.fni = "INFO";
    this.svd = "Wyłącz TRYB PRYWATNY w przeglądarce, by rozpocząć grę.";
    this.mkx = "Ta gra jest zoptymalizowana dla Google Chrome.";
    this.ili = "Proszę użyć aktualnej wersji";
    this.ffi = "Niestety ta przeglądarka nie jest w pełni obsługiwana.";
    this.rbv = "Tej gry nie można uruchomić w trybie darmowym!";
    this.hpg = "Obróć urządzenie w tryb pionowy, aby grać jak na prawdziwym automacie!";
    this.kko = "Dostosuj interfejs gry do swoich potrzeb!";
    this.wmb = "WYBIERZ ODPOWIEDNI KOLOR, BY PODWOIĆ WYGRANĄ";
    this.qmz = "WYBIERZ ODPOWIEDNI KOLOR KART, BY ZWIĘKSZYĆ WYGRANĄ x4";
    this.shu = "ZARYZYKUJ, BY ZYSKAĆ SZANSĘ NA ZWIĘKSZENIE WYGRANEJ";
    this.qyn = "Statystyki";
    this.qaa = "Liczba gier";
    this.ypo = "Łączny zakład";
    this.kgl = "Całkowita wygrana";
    this.bqa = "Całkowity czas gry";
    this.iok = "Przeczytałem wiadomość";
    this.iyq = "ZAKOŃCZ|GRĘ";
    this.wqz = "Historia";
    this.jlk = "Jeszcze nie ma tu gier.";
    this.state = "STATUS";
    this.hsf = "Gra główna";
    this.nbs = "Zebrano autom.";
    this.rwd = "Zebrano";
    this.wpj = "Spiny bonusowe";
    this.mkz = "Ponowny spin";
    this.tam = "Bonus";
    this.cgk = "Pierwszy deal";
    this.nmx = "Drugi deal";
    this.udi = "Trzeci deal";
    this.hle = "USTAWIENIA AUTOSTART";
    this.yis = "Liczba gier:";
    this.tnf = "Zatrzymaj autostart";
    this.drf = "Kredyt niższy niż:";
    this.ndj = "Kredyt większy niż:";
    this.whm = "Wygrana większa niż:";
    this.tjm = "Autostart zatrzymuje się na początku bonusu.";
    this.lgc = "Udostępnij na Facebooku";
    this.hbn = "DODATKOWE INFORMACJE ZNAJDZIESZ W REGUŁACH GRY.";
    this.pis = "Reality Check";
    this.btw = "Poprosiłeś o Reality Check.";
    this.kmq = "Naciśnij HISTORIA, by wyświetlić swoją historię gry.";
    this.war = "Game break";
    this.rnr = "Game limits";
    this.aqe = "Self test";
    this.abb = "Brak połączenia z serwerem gry!";
    this.fet = "Próby połączenia";
    this.qjy = "Logowanie nie powiodło się!";
    this.zuf = "Już jakaś sesja jest aktywna!";
    this.nei = "TEORETYCZNA WYPŁATA DLA GRACZA W TEJ GRZE WYNOSI XY."
}
cae.prototype = new wjg;

function bkq() {
    this.fge = "MIN";
    this.max = "MAX";
    this.clear = "CLEAR";
    this.gyg = "Table closed!";
    this.ghv = "Table closed,|credit will be returned!";
    this.fcs = "Waiting for next game ...";
    this.qpf = "TABLE CLOSED";
    this.tbu = "TABLE CLOSED, CREDIT RETURNED";
    this.fub = "BETS ACCEPTED";
    this.zbd = "BETS NOT ACCEPTED";
    this.uqc = "GAME RESULT";
    this.vzb = "Bets accepted!";
    this.yvk = "Bets not accepted!";
    this.ykw = "AUTO|REPEAT";
    this.zuc = "MY|BET";
    this.hkn = "CASH|IN";
    this.edy = "RISE|BET";
    this.nqe = "REPEAT|BET";
    this.eaa = "Game in progress, please wait!";
    this.ize = "AUTO";
    this.save = "SAVE";
    this.load = "LOAD";
    this.cbm = "Operation";
    this.ryu = "Win plan";
    this.ptj = "Exit";
    this.kyl = "Main menu";
    this.oft = "You can now select jetons with different colours. The active jeton has a yellow border around it.";
    this.zxq = "To place your bet you can either touch the area or you can drag the coin into position (possible areas light up).";
    this.eqv = "You can move the jetons you bet at any time by dragging them to another position.";
    this.szz = "You can also cancel the jetons you bet by taking them and dragging them off the table.";
    this.jbe = "If you drag a jeton to one of the series, this series is bet automatically for you.";
    this.gqh = "UNDO|TABLE";
    this.zwt = "CLEAR|TABLE";
    this.tfn = "Finish placing your bets!";
    this.nof = "Place your bets please!";
    this.fra = "No more bets!";
    this.dje = "You win!";
    this.xbi = "TABLE";
    this.quo = "RACE|BET";
    this.dhy = "BET|NEIGHB.";
    this.bjz = "STATIST.";
    this.rgj_help_btn_serie_big = "The Big Series uses 9 chips to cover the following numbers: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "The series 'Orphelins cheval' uses 5 chips to cover the following numbers: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' uses 8 chips to cover the following numbers: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "The zero game uses 4 chips to cover the following numbers: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Series 5/8, uses 6 chips to cover the following numbers: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Column";
    this.sso = "Corner";
    this.mpn = "Dozen";
    this.ubo = "Even chances";
    this.dde = "Odd / Even";
    this.lmz = "Full Number";
    this.ygb = "Low / High";
    this.dgs = "Red / Black";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "Malfunction voids all pays";
    this.fjb = "Maximum field limit";
    this.fqj = "Maximum table limit";
    this.civ = "Minimum field limit";
    this.jjt = "Minimum table limit";
    this.eic = "Rare Numbers";
    this.xcv = "Frequent Numbers";
    this.bfk = "Series";
    this.opl = "Serie 5/8";
    this.obn = "Big Serie";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero Game"
}
bkq.prototype = new zoa;

function juv() {
    this.hkn = "ВНЕСТИ|ДЕНЬГИ|НА СЧЕТ";
    this.fge = "MIN";
    this.max = "MAX";
    this.gyg = "Стол закрыт!";
    this.ghv = "Стол закрыт,|кредит возвращен назад!";
    this.fub = "СТАВКИ ПРИЗНАНЫ";
    this.zbd = "СТАВКИ НЕ ПРИЗНАНЫ";
    this.qpf = "СТОЛ ЗАКРЫТ";
    this.tbu = "СТОЛ ЗАКРЫТ, КРЕДИТ ВОЗВРАЩЕН НАЗАД";
    this.uqc = "РЕЗУЛЬТАТ ИГРЫ";
    this.fcs = "Ждите следующей игры ...";
    this.gqh = "ОТМЕНИТЬ";
    this.edy = "ПОДНЯТЬ|СТАВКУ";
    this.zwt = "УДАЛИТЬ|СТАВКИ";
    this.nqe = "ПОВТОРИТЬ|СТАВКИ";
    this.vzb = "Ставки признаны!";
    this.yvk = "Ставки не признаны!";
    this.eaa = "Игра в процессе, пожалуйста, подождите...";
    this.tfn = "Игра сейчас начнется!";
    this.nof = "Сделайте ставку, пожалуйста!";
    this.fra = "Ставок больше нет!";
    this.dje = "Вы выиграли!";
    this.ykw = "АВТОМАТ.|ПОВТОР.";
    this.zuc = "МОИ|СТАВКИ";
    this.ize = "AUTO";
    this.save = "СОХРАНИТЬ";
    this.load = "ЗАГРУЗИТЬ";
    this.clear = "УДАЛИТЬ";
    this.xbi = "СТОЛ";
    this.quo = "ОБЗОР|КОЛЕСА";
    this.dhy = "СТАВКИ НА|СОСЕДЕЙ";
    this.bjz = "СТАТИСТИКА";
    this.rgj_help_btn_serie_big = "При большой серии следующие номера должны быть покрыты 9 фишками: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "При серии Орфолайнс на пары следующие числа покрыты 5 фишками: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "При серии Орфолайнс на одно число следующие числа покрыты 8 фишками: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "Игра зеро покрывает 4 фишками следующие номера: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "При сериях 5/8 следующие номера покрываются 6 фишками: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Столбец";
    this.sso = "Угол";
    this.mpn = "Дюжина";
    this.ubo = "Простые шансы";
    this.dde = "Нечет / Чет";
    this.lmz = "Все число";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Красные / Черные";
    this.efk = "6 чисел";
    this.rka = "Сплит";
    this.lyo = "Стрит";
    this.vpd = "При неисправности аннулируются все выплаты";
    this.fjb = "Максимальное ограничение для поля";
    this.fqj = "Максимальное ограничение для стола";
    this.civ = "Минимальное ограничение для поля";
    this.jjt = "Минимальное ограничение для стола";
    this.eic = "Выпавшие реже всего числа";
    this.xcv = "Выпавшие чаще всего числа";
    this.cbm = "Рассчет";
    this.bfk = "Серии";
    this.ryu = "Выигрышные|комбинации";
    this.ptj = "Выход";
    this.opl = "Серия 5/8 (Малая серия)";
    this.obn = "Большая серия";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero Game";
    this.kyl = "Главное меню";
    this.oft = "Теперь выбираются фишки с различным номиналом. Активная фишка подсвечена  желтым цветом.";
    this.zxq = "Для того, чтобы сделать ставку, можно непосредственно коснуться поля (возможные поля подсвечиваются).";
    this.eqv = "Вы можете в любое время переместить поставленные фишки в другое место.";
    this.szz = "Вы можете также убрать ваши фишки, сдвинув их со стола.";
    this.jbe = "Когда вы одну фишку тяните к одной серии, вы делаете ставку на эту серию."
}
juv.prototype = new jie;

function wde() {
    this.hkn = "EFECTIVO|ENTRADA";
    this.fge = "MIN";
    this.max = "MAX";
    this.gyg = "¡Mesa cerrada!";
    this.ghv = "Mesa cerrada,|el crédito se ha cancelado.";
    this.fub = "ACEPTAR APUESTAS";
    this.zbd = "APUESTAS RECHAZADAS";
    this.qpf = "MESA CERRADA";
    this.tbu = "MESA CERRADA, CRÉDITO DEVUELTO";
    this.uqc = "RESULTADO DEL JUEGO";
    this.fcs = "Esperando el próximo juego ...";
    this.gqh = "ANULAR|TABLERO";
    this.edy = "AUMENTAR|APUESTA";
    this.zwt = "LIMPIAR|TABLERO";
    this.nqe = "REPITE|APUESTA";
    this.vzb = "Aceptar apuestas!";
    this.yvk = "Apuestas rechazadas!";
    this.eaa = "El juego no ha concluido, por favor espere!";
    this.tfn = "El juega va a comenzar!";
    this.nof = "Haga juego!";
    this.fra = "No más apuestas!";
    this.dje = "Ha ganado!";
    this.ykw = "REPETIC.|AUTOM.";
    this.zuc = "MI|APUESTA";
    this.ize = "AUTO";
    this.save = "GUARDAR";
    this.load = "CARGAR";
    this.clear = "ANULAR";
    this.xbi = "MESA";
    this.quo = "CIRCUITO|APUESTA";
    this.dhy = "APUESTA|VECINOS";
    this.bjz = "ESTADÍSTICA";
    this.rgj_help_btn_serie_big = "La Grand Serie cubre con 9 fichas los siguientes números: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "La serie Huérfanos a Caballo cubre con 5 fichas los siguientes números: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "Los Huérfanos a Pleno cubren con 8 fichas los siguientes números: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "El Jugar al Cero cubre con 4 fichas en los siguientes números: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "En la Serie 5/8 se cubren con 6 fichas los siguientes números: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Columna";
    this.sso = "Rincón";
    this.mpn = "Docena";
    this.ubo = "Oportunidades sencillas";
    this.dde = "Impar / Par";
    this.lmz = "Número total";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Rojo / Negro";
    this.efk = "Transversal simple";
    this.rka = "A Caballo";
    this.lyo = "Transversal plena";
    this.vpd = "Un mal funcionamiento anula todos los pagos";
    this.fjb = "Máximo límite de casillero";
    this.fqj = "Máximo límite de mesa";
    this.civ = "Mínimo límite de casillero";
    this.jjt = "Mínimo límite de mesa";
    this.eic = "Números menos frecuentes";
    this.xcv = "Números más frecuentes";
    this.cbm = "Funcionamiento";
    this.bfk = "Series";
    this.ryu = "Plan de|ganancias";
    this.ptj = "Salida";
    this.opl = "Serie 5/8";
    this.obn = "Gran Serie";
    this.jdj = "Huérfanos a Pleno";
    this.aow = "Huérfanos a Caballo";
    this.vri = "Jugar al Cero";
    this.kyl = "Menú Principal";
    this.oft = "Ahora puedes seleccionar fichas de diferentes colores. La ficha activa tiene un borde amarillo.";
    this.zxq = "Para colocar tu apuesta, puedes tocar el área directamente o arrastrar la moneda a su posición. Las posibles áreas se iluminan.";
    this.eqv = "Puedes mover tus apuestas arrastrándolas a otra posición.";
    this.szz = "Puedes cancelar las apuestas arrastrándolas fuera de la mesa.";
    this.jbe = "Si arrastras una ficha a una de las series, ésta se apuesta automáticamente."
}
wde.prototype = new tzw;

function pxp() {
    this.hkn = "AUF-|BUCHEN";
    this.fge = "MIN";
    this.max = "MAX";
    this.gyg = "Tisch geschlossen!";
    this.ghv = "Tisch geschlossen,|Kredit wird zurückgebucht!";
    this.fub = "EINSÄTZE AKZEPTIERT";
    this.zbd = "EINSÄTZE NICHT AKZEPTIERT";
    this.qpf = "TISCH GESCHLOSSEN";
    this.tbu = "TISCH GESCHLOSSEN, KREDIT ZURÜCKGEBUCHT";
    this.uqc = "SPIELERGEBNIS";
    this.fcs = "Warte auf nächstes Spiel ...";
    this.gqh = "EINSATZ|RÜCK-|GÄNGIG";
    this.edy = "ERHÖHE|EINSATZ";
    this.zwt = "LÖSCHE|EINSÄTZE";
    this.nqe = "GLEICHE|EINSÄTZE";
    this.vzb = "Einsätze akzeptiert!";
    this.yvk = "Einsätze nicht akzeptiert!";
    this.eaa = "Spiel läuft, bitte warten!";
    this.tfn = "Das Spiel beginnt gleich!";
    this.nof = "Ihre Einsätze bitte!";
    this.fra = "Keine weiteren Einsätze!";
    this.dje = "Sie haben gewonnen!";
    this.ykw = "AUTOM.|WIEDERH.";
    this.zuc = "MEINE|EINSÄTZE";
    this.ize = "AUTO";
    this.save = "SPEICHERN";
    this.load = "LADEN";
    this.clear = "LÖSCHEN";
    this.xbi = "TISCH";
    this.quo = "RENN-|BAHN";
    this.dhy = "NACHBARN|SETZEN";
    this.bjz = "STATISTIKEN";
    this.rgj_help_btn_serie_big = "Die Große Serie deckt mit 9 Chips folgende Zahlen ab: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Die Serie 'Orphelins cheval' deckt mit 5 Chips folgende Zahlen ab: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "Die 'Orphelins Plein' decken mit 8 Chips folgende Zahlen ab: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "Das 'Zero Spiel' setzt mit 4 Chips folgende Zahlen: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Bei der kleinen Serie werden mit 6 Chips folgende Zahlen gesetzt: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Kolonne";
    this.sso = "Corner";
    this.mpn = "Dutzend";
    this.ubo = "Einfache Chancen";
    this.dde = "Ungerade / Gerade";
    this.lmz = "Full Number";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Rot / Schwarz";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "Malfunction voids all pays";
    this.fjb = "Maximales Feld Limit";
    this.fqj = "Maximales Tisch Limit";
    this.civ = "Minimales Feld Limit";
    this.jjt = "Minimales Tisch Limit";
    this.eic = "Seltene Zahlen";
    this.xcv = "Häufige Zahlen";
    this.cbm = "Bedienung";
    this.bfk = "Serien";
    this.ryu = "Gewinnplan";
    this.ptj = "Exit";
    this.opl = "Serie 5/8";
    this.obn = "Big Serie";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero Game";
    this.kyl = "Hauptmenü";
    this.oft = "Nun können Jetons mit unterschiedlichen Werten ausgewählt werden. Der aktive Jeton ist gelb umrahmt.";
    this.zxq = "Um zu Setzen kann ein Feld direkt berührt werden, oder man zieht die Münze zum Feld (mögliche Felder leuchten).";
    this.eqv = "Sie können jederzeit Ihre gesetzten Jetons verschieben, indem Sie sie an eine andere Position ziehen.";
    this.szz = "Sie können Ihre gesetzten Jetons auch löschen, indem Sie sie nehmen und vom Tisch ziehen.";
    this.jbe = "Wie Sie einen Jeton auf eine der Serien ziehen, wird automatisch diese Serie für Sie gesetzt."
}
pxp.prototype = new qop;

function ejt() {
    this.hkn = "PARAYA|ÇEVİR";
    this.fge = "MIN";
    this.max = "MAX";
    this.gyg = "Masa kapandı!";
    this.ghv = "Masa kapandı,|kredi geri havale edildi!";
    this.fub = "BAHISLER KABUL EDILDI";
    this.zbd = "BAHISLER KABUL EDILMEDI";
    this.qpf = "MASA KAPANDI";
    this.tbu = "MASA KAPANDI, KREDİ GERİ VERİLDİ";
    this.uqc = "OYUN SONUCU";
    this.fcs = "Bir sonraki oyun bekleniyor ...";
    this.gqh = "BANKO|IPTAL ET";
    this.edy = "BANKOLARI|YÜKSELT";
    this.zwt = "BANKOLARI|SIL";
    this.nqe = "BANKOLARI|TEKRARLA";
    this.vzb = "Bahisler kabul edildi!";
    this.yvk = "Bahisler kabul edilmedi!";
    this.eaa = "Oyun oynanmakta, lütfen bekleyin!";
    this.tfn = "Oyun başlamak üzere!";
    this.nof = "Bankolarınız lütfen!";
    this.fra = "Daha fazla banko mümkün değil!";
    this.dje = "Kazandiniz!";
    this.ykw = "OTOMATIK|TEKRAR";
    this.zuc = "BAHİSLERİM";
    this.ize = "AUTO";
    this.save = "KAYDET";
    this.load = "INDIR";
    this.clear = "SILMEK";
    this.xbi = "MASA";
    this.quo = "KOŞU|PISTI";
    this.dhy = "KOMŞULARA|KOY";
    this.bjz = "İSTATISTIK";
    this.rgj_help_btn_serie_big = "Büyük Seri 9 çip ile şu rakamları kapsamakta: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "'Orphelins cheval' serisi 5 çip ile şu rakamları kapsamakta: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' serisi 8 çip ile şu rakamları kapsamakta: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "Zero oyunu 4 çip ile şu rakamları kapsamakta: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Küçük seride 6 çip ile şu rakamlar kapsanmaktadırlar: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Kolon";
    this.sso = "Köşe";
    this.mpn = "Düzine";
    this.ubo = "Kolay şanslar";
    this.dde = "Tek sayılı / Çift sayılı";
    this.lmz = "Full rakam";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Kırmızı / Siyah";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "Arıza tüm ödemeleri iptal etti";
    this.fjb = "Maksimum alan limiti";
    this.fqj = "Maksimum masa limiti";
    this.civ = "Minimum alan limiti";
    this.jjt = "Minimum masa limiti";
    this.eic = "Nadir gelen sayılar";
    this.xcv = "En sık çıkan sayılar";
    this.cbm = "Servis";
    this.bfk = "Seriler";
    this.ryu = "Kazanç planı";
    this.ptj = "Çıkış";
    this.opl = "Seri 5/8";
    this.obn = "Big seri";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero Game";
    this.kyl = "Ana menü";
    this.oft = "Şimdi farklı değerlere sahip jetonlar seçilebilirler. Aktüel jeton sarı çerçevelidir.";
    this.zxq = "Bir alana oynamak için, o alana direkt dokunulabilir veya madeni para alana çekilir (oynanabilecek alanların tümü aydınlıktır).";
    this.eqv = "İstediğiniz zaman, oynadığınız jetonun yerini değiştirerek başka alana kaydırabilirsiniz.";
    this.szz = "Oynamak için koyduğunuz jetonu, masadan çekerek silebilirsiniz.";
    this.jbe = "Serilerden biri üzerine bir jeton çekerseniz, otomatik olarak sizin için bu seriye oynanır."
}
ejt.prototype = new gvl;

function pim() {
    this.hkn = "HOTOVOST|DO";
    this.fge = "MIN";
    this.max = "MAX";
    this.gyg = "Stůl uzavřen!";
    this.ghv = "Stůl uzavřen,|Kredit se vrátí!";
    this.fub = "SÁZKY BYLY AKCEPTOVÁNY";
    this.zbd = "SÁZKY NEBYLY AKCEPTOVÁNY";
    this.qpf = "STŮL ZAVŘEN";
    this.tbu = "STŮL ZAVŘEN, KREDIT VRÁCEN";
    this.uqc = "VÝSLEDEK HRY";
    this.fcs = "Čekání na další hru ...";
    this.gqh = "SÁZKA|ZPET";
    this.edy = "ZVYŠ|SÁZKU";
    this.zwt = "VYCISTI|STUL";
    this.nqe = "OPAKUJ|SÁZKU";
    this.ykw = "AUT.|OPAKOVAT";
    this.zuc = "MOJE|SÁZKA";
    this.ize = "AUTO";
    this.save = "ULOŽIT";
    this.load = "NAHRÁT";
    this.clear = "SMAZAT";
    this.vzb = "Sázky byly akceptovány!";
    this.yvk = "Sázky nebyly akceptovány!";
    this.eaa = "Hra probíhá, počkejte prosím!";
    this.tfn = "Hra Se Hned Spustí!";
    this.nof = "Vaše sázky prosím!";
    this.fra = "Žádné další sázky.";
    this.dje = "Vyhrali jste!";
    this.xbi = "STŮL";
    this.quo = "ZÁVODNÍ|DRÁHA";
    this.dhy = "VSADIT|NA SOUSEDY";
    this.bjz = "STATISTIKY";
    this.rgj_help_btn_serie_big = "'Velká série' kryje s 9ti žetony následující čísla: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Série 'Orphelins cheval' kryje s 5ti žetony následující čísla: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' kryje s 8mi žetony následující čísla: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "'Nulová hra' kryje se 4mi žetony následující čísla: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "U malé série se se 6ti žetony vsází na následující čísla: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Kolonka";
    this.sso = "Corner";
    this.mpn = "Tucet";
    this.ubo = "Jednoduché šance";
    this.dde = "Lichá / Sudá";
    this.lmz = "Full Number";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Červená / Černá";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "Malfunction voids all pays";
    this.fjb = "Maximální limit políčka";
    this.fqj = "Maximální limit stolu";
    this.civ = "Minimální limit políčka";
    this.jjt = "Minimální limit stolu";
    this.eic = "Málo tažená čísla";
    this.xcv = "Často tažená čísla";
    this.cbm = "Obsluha";
    this.bfk = "Série";
    this.ryu = "Výherní plán";
    this.ptj = "Konec";
    this.opl = "Série 5 / 8";
    this.obn = "Velká  série";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Nulová hra";
    this.kyl = "Hlavní menu";
    this.oft = "Nyní si můžete vybrat žetony různé barvy. Aktivní žeton je žlutě ohraničen.";
    this.zxq = "Sázku uzavřete tak, že se buď přímo dotknete příslušné plochy, anebo posunete mince na žádoucí pozici (plochy na něž lze vsázet se rozsvítí).";
    this.eqv = "Žetony, které jste vsadili, můžete kdykoliv posunout do jiné pozice.";
    this.szz = "Žetony, které byli již vsazeny, lze vzít zpět tak, že je přesunete pryč ze stolu.";
    this.jbe = "Posunete - li žeton do jedné ze sérií, tato série se automaticky stává Vaší sázkou."
}
pim.prototype = new yem;

function uee() {
    this.hkn = "VÕTA|VÄLJA";
    this.fge = "MIN";
    this.max = "MAX";
    this.gyg = "Laud suletud!";
    this.ghv = "Laud suletud,|krediit tagastatakse!";
    this.fub = "PANUSED AKTSEPTEERITUD";
    this.zbd = "PANUSEID EI AKTSEPTEERITUD";
    this.qpf = "LAUD SULETUD";
    this.tbu = "LAUD SULETUD, KREDIIT TAGASTATUD";
    this.uqc = "MÄNGUTULEMUS";
    this.fcs = "Järgmise mängu ootamine ...";
    this.gqh = "TÜHISTA|TABEL";
    this.edy = "TÕSTA|PANUST";
    this.zwt = "PUHASTA|MÄNGUVÄLI";
    this.nqe = "KORDA|PANUST";
    this.vzb = "Panused aktsepteeritud!";
    this.yvk = "Panuseid ei aktsepteeritud!";
    this.ykw = "AUTOM.|KORDUS";
    this.zuc = "MINU|PANUS";
    this.ize = "AUTO";
    this.save = "SALVESTA";
    this.load = "LAE";
    this.clear = "TÜHISTA";
    this.xbi = "LAUD";
    this.quo = "OVAAL";
    this.dhy = "PANUSTA|NAABER";
    this.bjz = "STATISTIKA";
    this.eaa = "Mäng algab, palun oodake...";
    this.tfn = "Lõpeta panuste tegemine!";
    this.nof = "Asetage palun panused!";
    this.fra = "Panuste tegemine lõppenud";
    this.dje = "Sa võitsid!";
    this.rgj_help_btn_serie_big = "'Big Series' katab 9 žetooniga järgmised numbrid: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "'Orphelins cheval' katab 5 žetooniga järgmised numbrid: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' katab 8 žetooniga järgmised numbrid: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "'Zero Game' katab 4 žetooniga järgmised numbrid: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Seeriaga 5/8 kaetakse 6 žetooniga järgmised numbrid: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Veerg";
    this.sso = "Corner";
    this.mpn = "Tosin";
    this.ubo = "Võrdsed võimalused";
    this.dde = "Paaritu / Paaris";
    this.lmz = "Full Number";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Punane / Must";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Tänav";
    this.vpd = "Rikke korral kõik võidud tühistatakse";
    this.fjb = "Maksimaalne|välja limiit";
    this.fqj = "Maksimaalne laua limiit";
    this.civ = "Miinimaalne välja limiit";
    this.jjt = "Minimaalne laua limiit";
    this.eic = "Kõige harvemad numbrid";
    this.xcv = "Kõige sagedasemad numbrid";
    this.cbm = "Operatsioon";
    this.bfk = "Seeria";
    this.ryu = "Võiduplaan";
    this.ptj = "Välju";
    this.opl = "Seeria 5/8";
    this.obn = "Suur seeria";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Nullmäng";
    this.kyl = "Peamenüü";
    this.oft = "Nüüd saad valida erinevat värvi zetoone. Aktiivse zetooni ümber on kollane joon.";
    this.zxq = "Panustamiseks puuduta vastavat ala või tõmba zetoon õigele alale (võimalikud alad on valgustatud).";
    this.eqv = "Panustatud zetoone saab igal ajahetkel liigutada, tõmmates nad teisele väljale.";
    this.szz = "Samuti saab asetatud zetoone eemaldada, tõmmates need mänguväljalt ära.";
    this.jbe = "Kui mängija tõmbab zetooni teatud seeriasse, on see seeria tema poolt automaatselt panustatud."
}
uee.prototype = new ekq;

function vbb() {
    this.hkn = "ΕΙΣ|ΠΡΑΞΗ";
    this.fge = "MIN";
    this.max = "MAX";
    this.gyg = "Κλειστό τραπέζι!";
    this.ghv = "Κλειστό τραπέζι,|επιστροφή υπολοίπου!";
    this.fub = "ΓΊΝΟΝΤΑΙ ΑΠΟΔΕΚΤΆ ΠΟΝΤΑΡΊΣΜΑΤΑ";
    this.zbd = "ΠΟΝΤΑΡΊΣΜΑΤΑ ΔΕ ΓΊΝΟΝΤΑΙ ΑΠΟΔΕΚΤΆ";
    this.qpf = "ΚΛΕΙΣΤΟ ΤΡΑΠΕΖΙ";
    this.tbu = "ΚΛΕΙΣΤΟ ΤΡΑΠΕΖΙ, ΠΙΣΤΩΣΗ ΠΟΣΟΥ ΟΛΟΚΛΗΡΩΘΗΚΕ";
    this.uqc = "ΑΠΟΤΕΛΕΣΜΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.fcs = "Περιμένετε για το επόμενο παιχνίδι ...";
    this.gqh = "ΑΚYΡΩΣΗ|ΣΤΟΙΧHΜΑΤΟΣ";
    this.edy = "ΑYΞΗΣΗ|ΣΤΟΙΧHΜΑΤΟΣ";
    this.zwt = "ΚΑΘΑΡΙΣΜOΣ|ΤΡΑΠΕΖΙΟY";
    this.nqe = "ΕΠΑΝAΛΗΨΗ|ΣΤΟΙΧΗΜAΤΩΝ";
    this.vzb = "Γίνονται αποδεκτά πονταρίσματα!";
    this.yvk = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.eaa = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.tfn = "Το παιχνίδι ξεκινά σε λίγο!";
    this.nof = "Το ποντάρισμα σας, παρακαλώ!";
    this.fra = "Ποντάρισμα τέλος!";
    this.dje = "ΣΥΓΧΑΡΗΤHΡΙΑ, ΚΕΡΔIΣΑΤΕ!";
    this.ykw = "ΑΥΤΟΜ.|ΕΠΑΝΑΛΗΨΗ";
    this.zuc = "ΤΟ|ΣΤΟΊΧΗΜΆ|ΜΟΥ";
    this.ize = "AUTO";
    this.save = "ΑΠΟΘΗΚΕΥΣΗ";
    this.load = "ΦΟΡΤΏΝΩ";
    this.clear = "ΔΙΑΓΡΑΦΉ";
    this.xbi = "ΤΡΑΠEΖΙ";
    this.quo = "ΔΙΑΤΑΞΗ|ΤΡΟΧΟΥ";
    this.dhy = "ΠΟΝΤAΡΙΣΜΑ|ΓΕΙΤOΝΩΝ";
    this.bjz = "ΣΤΑΤΙΣΤΙΚA";
    this.rgj_help_btn_serie_big = "Η Μεγάλη Σειρά καλύπτει με 9 τσιπ τους εξής αριθμούς: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Η σειρά 'Orphelins cheval' καλύπτει με 5 τσιπ τους εξής αριθμούς: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "Η σειρά 'Orphelins Plein' καλύπτει με 8 τσιπ τους εξής αριθμούς: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "Το παιχνίδι 'Zero' τοποθετεί 4 τσιπ στους εξής αριθμούς: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Η Σειρά 5/8 τοποθετεί 6 τσιπ στους εξής αριθμούς: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Στήλη";
    this.sso = "Γωνία";
    this.mpn = "Ντουζίνα";
    this.ubo = "Απλές ευκαιρίες";
    this.dde = "Μονά / ζυγά";
    this.lmz = "Πλήρης";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Κόκκινο / Μαύρο";
    this.efk = "Έξι γραμμή";
    this.rka = "Διαίρεση";
    this.lyo = "δρόμο";
    this.vpd = "Η δυσλειτουργία ακυρώνει όλες τις πληρωμές";
    this.fjb = "Μέγιστο όριο πεδίου";
    this.fqj = "Μέγιστο όριο τραπεζιού";
    this.civ = "Ελάχιστο όριο πεδίου";
    this.jjt = "Ελάχιστο όριο τραπεζιού";
    this.eic = "Σπάνιοι Αριθμοί";
    this.xcv = "Συχνότεροι αριθμοί";
    this.cbm = "Χειρισμός";
    this.bfk = "Τόξα";
    this.ryu = "Σχέδιο κερδών";
    this.ptj = "Έξοδος";
    this.opl = "Τόξο 5/8";
    this.obn = "Μεγάλο τόξο";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Παιχνίδι Zero";
    this.kyl = "Κύριο μενού";
    this.oft = "Τώρα μπορούν να επιλεχθούν μάρκες διαφορετικής αξίας. Η ενεργοποιημένη μάρκα είναι πλαισιωμένη με κίτρινο χρώμα.";
    this.zxq = "Για να ποντάρετε μπορείτε να ακουμπίσετε απευθείας ένα πεδίο, ή να μετακινήσετε τη μάρκα προς αυτό (τα πιθανά πεδία φωτίζονται).";
    this.eqv = "Μπορείτε ανά πάσα στιγμή να μετακινήσετε τις μάρκες που ποντάρατε, τοποθετώντας τες σε κάποια άλλη θέση.";
    this.szz = "Μπορείτε και να ακυρώσετε τις μάρκες που ποντάρατε αποσύροντάς τες από το τραπέζι.";
    this.jbe = "Αν τραβήξετε μια μάρκα σε ένα από τα τόξα, τότε αυτομάτως ποντάρεται αυτό το τόξο για εσάς."
}
vbb.prototype = new uyy;

function hro() {
    this.hkn = "ПАРИ|В";
    this.fge = "MIN";
    this.max = "MAX";
    this.gqh = "ОТМЕНЯНЕ";
    this.edy = "УВЕЛ. НА|ЗАЛОГА";
    this.zwt = "ИЗЧИСТВ.| НА МАСАТА";
    this.nqe = "ПОВТОРИ|ЗАЛОГА";
    this.vzb = "Залозите са приети!";
    this.yvk = "Залозите не са приети!";
    this.gyg = "Масата е затворена!";
    this.ghv = "Масата е затворена,|кредитът ще бъде върнат!";
    this.fub = "ЗАЛОЗИТЕ СА ПРИЕТИ";
    this.zbd = "ЗАЛОЗИТЕ НЕ СА ПРИЕТИ";
    this.qpf = "МАСАТА Е ЗАТВОРЕНА";
    this.tbu = "МАСАТА Е ЗАТВОРЕНА, КРЕДИТЪТ Е ВЪРНАТ";
    this.uqc = "РЕЗУЛТАТ ОТ ИГРАТА";
    this.fcs = "Изчакване за следващата игра ...";
    this.ykw = "АВТО|ПОВТОРЕНИЕ";
    this.zuc = "МОЯТ|ЗАЛОГ";
    this.ize = "AUTO";
    this.save = "ЗАПАЗИ";
    this.load = "ЗАРЕЖДАМ";
    this.clear = "ИЗЧИСТВАНЕ";
    this.xbi = "МАСА";
    this.quo = "СЪСТЕЗАТЕЛЕН|ЗАЛОГ";
    this.dhy = "ЗАЛОГ НА|СЪСЕДНИ";
    this.bjz = "СТАТИСТИКА";
    this.eaa = "Затворено за залози!";
    this.tfn = "Приключете със залозите!";
    this.nof = "Поставете своите залози!";
    this.fra = "Край на залозите!";
    this.dje = "Печелиш!";
    this.rgj_help_btn_serie_big = "Голямата серия използва 9 чипа за покриване на следните номера: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Серията 'Orphelins cheval' използва 5 чипа за покриване на следните номера: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' използва 8 чипа за покриване на следните номера: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "Нулевата игра използва 4 чипа за покриване на следните номера: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Серия 5/8 използва 6 чипа за покриване на следните номера: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Колона";
    this.sso = "Ъгъл";
    this.mpn = "Дузина";
    this.ubo = "Равни шансове";
    this.dde = "нечетно / четно";
    this.lmz = "Пълен номер";
    this.ygb = "1-18 / 19-36";
    this.dgs = "червено / черно";
    this.efk = "Шест линия";
    this.rka = "Сплит";
    this.lyo = "Стрийт";
    this.vpd = "При неизправност се анулират всички игри и плащания";
    this.fjb = "Максимален лимит за полето";
    this.fqj = "Максимален лимит на маса";
    this.civ = "Минимален лимит за поле";
    this.jjt = "Минимален лимит за маса";
    this.eic = "Редки номера";
    this.xcv = "Чести номера";
    this.cbm = "Действия";
    this.bfk = "Серии";
    this.ryu = "План на|печалбите";
    this.ptj = "Изход";
    this.opl = "Tiers du Cylindre 5/8";
    this.obn = "Voisins du Zero";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero-Spiel";
    this.kyl = "Главно меню";
    this.oft = "Играчът избира жетони с различен цвят. Избраният жетон е в жълто от страни.";
    this.zxq = "Залагането става като се докосне желаното поле или като се плъзне жетон до полето (избраното поле или област се осветява).";
    this.eqv = "Заложените жетони могат да се преместят по всяко време, чрез плъзгане до друго поле.";
    this.szz = "Отказът от направен залог може да стане чрез извличането им от масата.";
    this.jbe = "Ако се постави жетон на една от сериите, залогат е направен автоматично."
}
hro.prototype = new rbo;

function rpe() {
    this.fge = "MIN";
    this.max = "MAX";
    this.clear = "გასუფთავება";
    this.gqh = "ბოლო|ოპერაციის|გაუქმება";
    this.tfn = "დაასრულე ფსონის დადება!";
    this.nof = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.fra = "ფსონები აღარ მიიღება!";
    this.dje = "თქვენ გაიმარჯვეთ!";
    this.zwt = "გაასუფთავეთ|დაფა";
    this.xbi = "მაგიდა";
    this.quo = "შეჯიბრის|ფსონი";
    this.dhy = "ფსონი|მეზობლებზე";
    this.bjz = "სტატისტიკა";
    this.rgj_help_btn_serie_big = "დიდი რიგები იყენებენ 9 ჩიპს რომ მოიცვან შემდეგი ნომრები: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "'ობოლი ცხენის' რიგები, იყენებენ 5 ჩიპს რომ დაფარონ შემდეგი ნომრები: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "ობოლი ყველა, იყენებს 8 ჩიპს რომ დაფაროს შემდეგი ნომრები: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "zero თამაში იყენებს 4 ჩიპს რომ დაფაროს შემდეგი ნომრები: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "5/8 რიგები, იყენებენ 6 ჩიპს რომ დაფარონ შემდეგი ნომრები: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "სვეტი";
    this.sso = "კუთხე";
    this.mpn = "ათეული";
    this.ubo = "უბრალო შანსები";
    this.dde = "კენტი / ლუწი";
    this.lmz = "სრული ნომერი";
    this.ygb = "დაბალი / მაღალი";
    this.dgs = "წითელი / შავი";
    this.efk = "ექვსი ხაზი";
    this.rka = "გაყოფა";
    this.lyo = "ქუჩა";
    this.vpd = "სათამაშოს ნებისმიერი გაუმართაობა აბათილებს ყველა ნათამაშებს და მოგებას";
    this.fjb = "ველის მაქსიმალური ლიმიტი";
    this.fqj = "მაგიდის მაქსიმალური ლიმიტი";
    this.civ = "ველის მინიმალური ლიმიტი";
    this.jjt = "მაგიდის მინიმალური ლიმიტი";
    this.eic = "იშვიათი ნომრები";
    this.xcv = "ხშირი ნომრები";
    this.bfk = "რიგები";
    this.opl = "რიგი 5/8";
    this.obn = "დიდი რიგი";
    this.jdj = "ობოლი ყველა";
    this.aow = "ობოლი ცხენი";
    this.vri = "თამაში Zero";
    this.gyg = "მაგიდა დაიხურა!";
    this.ghv = "მაგიდა დაიხურა,|კრედიტი დაბრუნებულია!";
    this.fcs = "დაელოდეთ მომავალ თამაშს ...";
    this.qpf = "მაგიდა დაიხურა";
    this.tbu = "მაგიდა დაიხურა, კრედიტი დაბრუნებულია";
    this.vzb = "ფსონები მიღებულ იქნა!";
    this.yvk = "ფსონები არ იქნა მიღებული!";
    this.fub = "ფსონები მიღებულ იქნა";
    this.zbd = "ფსონები არ იქნა მიღებული";
    this.ykw = "ავტო|გამეორება";
    this.zuc = "ჩემი|ფსონი";
    this.hkn = "ფულის|აღება";
    this.uqc = "თამაშის შედეგი";
    this.edy = "ფსონის|გაზრდა";
    this.nqe = "გაიმეორეთ|ფსონი";
    this.eaa = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.ize = "ავტომატური";
    this.save = "შენახვა";
    this.load = "დატვირთვა";
    this.ptj = "დამთავრება";
    this.cbm = "მოქმედება";
    this.ryu = "მოგების გეგმა";
    this.kyl = "მთავარი მენიუ";
    this.oft = "თქვენ ახლა შეგიძლიათ აირჩიოთ სხვადასხვა ფერის ჟეტონები. აქტიურ ჟეტონს აქვს ყვითელი გარე ზოლი.";
    this.zxq = "თქვენი ფსონის დასადებათ შეგიძლიათ ან შეეხოთ იმ ადგილს ან დადოთ მონეტა პოზიციაზე (შესაძლო ადგილები აინთება).";
    this.eqv = "თქვენ შეგიძლიათ გადააადგილოთ ჟეტონები რომელსაც თქვენ ფსონად დებთ ნებისმიერ დროს მათი სხვა პოზიციაზე განთავსებით.";
    this.szz = "თქვენ ასევე შეგიძლიათ გააუქმოთ ჟეტონები რომელსაც თქვენ ფსონად დებთ და გადადოთ ისინი მაგიდიდან.";
    this.jbe = "როდესაც ჟეტონს სხვა რიგზე დებთ, ამ რიგზე ფსონი იდება ავტომატურად თქვენთვის."
}
rpe.prototype = new yhy;

function afo() {
    this.fge = "MIN";
    this.max = "MAX";
    this.clear = "TÖRLÉS";
    this.gyg = "Asztal zárva!";
    this.ghv = "Asztal zárva,|a tét visszaírásra kerül a hitelbe!";
    this.fcs = "Várakozás a következő játékra ...";
    this.qpf = "ASZTAL ZÁRVA";
    this.tbu = "ASZTAL ZÁRVA, HITEL VISSZAADVA";
    this.fub = "TÉTEK ELFOGADVA";
    this.zbd = "NEM LEHET TÉTET RAKNI";
    this.uqc = "JÁTÉK EREDMÉNY";
    this.vzb = "Tétek elfogadva!";
    this.yvk = "Nem lehet tétet rakni!";
    this.ykw = "AUTO|ISMÉTLÉS";
    this.zuc = "SAJÁT|TÉT";
    this.hkn = "BE|FIZET";
    this.edy = "TÉT|EMELÉS";
    this.nqe = "TÉT|ISMÉTLÉS";
    this.eaa = "Játék folyamatban, kérem várjon!";
    this.ize = "AUTO";
    this.save = "MENTÉS";
    this.load = "BETÖLT";
    this.cbm = "Működés";
    this.ryu = "Nyeremény tábla";
    this.ptj = "Kijárat";
    this.kyl = "Fő menü";
    this.oft = "Most kiválaszthatja a zsetonokat különböző értékekkel. A kiválasztott zsetonnak sárga körvonala van.";
    this.zxq = "Tétrakáshoz érintse meg a a kívánt területet vagy húzza a zsetont a kívánt helyre (a megjátszható területek világosak).";
    this.eqv = "Bármikor mozgathatja, arrébb rakhatja egy másik helyre a már lerakott zsetonokat.";
    this.szz = "Bármikor törölheti a zsetonjait, ha lehúzza azt a tábláról.";
    this.jbe = "Ha egy zsetont valamelyik Szériára rak, az a Széria automatikusan megjátszásra kerül.";
    this.gqh = "TÖRLÉS";
    this.zwt = "MINDENT|TÖRÖL";
    this.tfn = "Tétek lezárva!";
    this.nof = "Kérem tegyék meg tétjeiket!";
    this.fra = "A játék elkezdődött, kérem várjon!";
    this.dje = "Ön nyert!";
    this.xbi = "ASZTAL";
    this.quo = "VERSENY|PÁLYA";
    this.dhy = "TÉT|SZOMSZÉDOK";
    this.bjz = "STATISZT.";
    this.rgj_help_btn_serie_big = "A Nagy Széria 9 zsetonnal lefedi a következő számokat: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Az 'Orphelins Cheval' széria 8 zsetonnal lefedi a következő számokat: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "Az 'Orphelins Plein' 8 zsetonnal lefedi a következő számokat: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "A Zero game (Nulla Játék) 4 zsetonnal lefedi a következő számokat: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Az 5/8 (Kis) Széria 6 zsetonnal lefedi a következő számokat: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Sor";
    this.sso = "Sarok";
    this.mpn = "Tucat";
    this.ubo = "Egyszerű esélyek";
    this.dde = "Páratlan / Páros";
    this.lmz = "Teli Szám";
    this.ygb = "Alacsony / Magas";
    this.dgs = "Piros / Fekete";
    this.efk = "Hatos";
    this.rka = "Split";
    this.lyo = "Utca";
    this.vpd = "A meghibásodás érvénytelenít minden játékot és kifizetést";
    this.fjb = "Mező maximum tétje";
    this.fqj = "Asztal maximum tétje";
    this.civ = "Mező minimum tétje";
    this.jjt = "Asztal minimum tétje";
    this.eic = "Legritkább számok";
    this.xcv = "Leggyakoribb számok";
    this.bfk = "Széria";
    this.opl = "5/8 széria";
    this.obn = "Nagy széria";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Nulla Játék"
}
afo.prototype = new nez;

function kyd() {
    this.fge = "MIN";
    this.max = "MAX";
    this.clear = "ŞTERGERE";
    this.gyg = "Masă închisă!";
    this.ghv = "Masă închisă,|credit rerturnat!";
    this.fcs = "Așteptăm următorul joc ...";
    this.qpf = "MASĂ ÎNCHISĂ";
    this.tbu = "MASĂ ÎNCHISĂ, CREDIT RERTURNAT";
    this.fub = "PARIURI ACCEPTATE";
    this.zbd = "PARIURI NEACCEPTATE";
    this.uqc = "REZULTAT JOC";
    this.vzb = "Pariuri acceptate!";
    this.yvk = "Pariuri neacceptate!";
    this.ykw = "REPETARE|AUTOM.";
    this.zuc = "PARIURILE|MELE";
    this.hkn = "ÎNCASARE";
    this.edy = "CREȘTE|PARIU";
    this.nqe = "REPETĂ|PARIU";
    this.eaa = "Joc în derulare, vă rugăm așteptați!";
    this.ize = "AUTO";
    this.save = "SALVEAZĂ";
    this.load = "ÎNCARCĂ";
    this.cbm = "Operare";
    this.ryu = "Plan de câștig";
    this.ptj = "Încheiere";
    this.kyl = "Meniu principal";
    this.oft = "Puteți selecta jetoane de culori diferite. Jetonul activ are o margine galbenă de jur împrejur.";
    this.zxq = "Pentru a plasa pariul dvs. fie atingeți direct un câmp sau trageți o monedă pe poziție (zonele posibile se iluminează).";
    this.eqv = "Puteți muta jetoanele pe care pariați oricând trăgându-le în altă poziție.";
    this.szz = "De asemenea, puteți anula jetoanele pe care pariați luându-le și trăgându-le de pe masă.";
    this.jbe = "Dacă trageți de un jeton spre una dintre serii, această serie este pariată automat pentru dvs.";
    this.gqh = "ANU-|LARE";
    this.zwt = "ANULARE|MIZE";
    this.tfn = "Jocul începe imediat!";
    this.nof = "Rugăm mizele dv.!";
    this.fra = "Nu alte mize!";
    this.dje = "Aţi câştigat!";
    this.xbi = "TABLĂ";
    this.quo = "CALEA|CURSEI";
    this.dhy = "PLASARE|VECINI";
    this.bjz = "STATISTICĂ";
    this.rgj_help_btn_serie_big = "'Seria Mare' acoperă cu 9 jetoane următoarele numere: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Seria 'Orphelins Cheval' acoperă cu 5 jetoane următoarele numere: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' acoperă cu 8 jetoane următoarele numere: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "'Jocul Zero' pariază cu 4 jetoane pe următoarele numere: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "La seria mică se pariază cu 6 jetoane pe următoarele numere: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Coloană";
    this.sso = "Corner";
    this.mpn = "Duzină";
    this.ubo = "Şanse simple";
    this.dde = "Impar / Par";
    this.lmz = "Full Number";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Roşu /Negru";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "Fără garanţie la defectarea aparatului";
    this.fjb = "Câmp maxim limită";
    this.fqj = "Tablă maximă limită";
    this.civ = "Câmp minim limită";
    this.jjt = "Tablă minimă limită";
    this.eic = "Numere rare";
    this.xcv = "Numere frecvente";
    this.bfk = "Serii";
    this.opl = "Serie Mică";
    this.obn = "Serie Mare";
    this.jdj = "Orphelin Plein";
    this.aow = "Orphelin Cheval";
    this.vri = "Joc Zero"
}
kyd.prototype = new lqf;

function vot() {
    this.fge = "MIN";
    this.max = "MAX";
    this.clear = "APAGAR";
    this.gyg = "Mesa fechada!";
    this.ghv = "Mesa fechada,|o crédito é devolvido!";
    this.fcs = "Esperando pelo próximo jogo ...";
    this.qpf = "MESA FECHADA";
    this.tbu = "MESA FECHADA, CRÉDITO DEVOLVIDO";
    this.fub = "APOSTAS ACEITAS";
    this.zbd = "APOSTAS NÃO ACEITAS";
    this.uqc = "RESULTADO DO JOGO";
    this.vzb = "Apostas aceitas!";
    this.yvk = "Apostas não aceitas!";
    this.ykw = "REPET.|AUTOM.";
    this.zuc = "MINHAS|APOSTAS";
    this.hkn = "EM|RESERVA";
    this.edy = "AUMENTAR|APOSTA";
    this.nqe = "REPETIR|APOSTA";
    this.eaa = "Jogo em andamento, aguarde por favor!";
    this.ize = "AUTO";
    this.save = "SALVAR";
    this.load = "CARREGAR";
    this.cbm = "Operação";
    this.ryu = "Plano de ganhos";
    this.ptj = "Encerrar";
    this.kyl = "Menu principal";
    this.oft = "Agora poderá selecionar jetons com valores diferentes. O jeton ativo tem uma borda amarela.";
    this.zxq = "Para colocar sua aposta poderá tocar, diretamente, na área ou puxar a moeda para a posição (possíveis áreas se iluminam).";
    this.eqv = "Os jetos colocados podem ser deslocados a qualquer momento, puxando-os para uma outra posição.";
    this.szz = "Os jetons colocados também podem ser cancelados, puxando-os da mesa.";
    this.jbe = "Se puxar um jeton para uma série, esta série é colocada automaticamente para você.";
    this.gqh = "DES|FAZER";
    this.zwt = "APAGAR|APOSTAS";
    this.tfn = "O jogo começa em breve!";
    this.nof = "Suas apostas por favor!";
    this.fra = "Nenhuma aposta mais!";
    this.dje = "Ganhou!";
    this.xbi = "MESA";
    this.quo = "APOSTA|CORRIDA";
    this.dhy = "APOSTAR|VIZINHOS";
    this.bjz = "ESTATÍSTICA";
    this.rgj_help_btn_serie_big = "A grande série usa 9 fichas para cobrir os seguintes números: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "A série 'Orphelins cheval' usa 5 fichas para cobrir os seguintes números: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' usa 8 fichas para cobrir os seguintes números: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "O jogo zero usa 4 fichas para cobrir os seguintes números: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "A série 5/8, usa 6 fichas para cobrir os seguintes números: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Coluna";
    this.sso = "Canto";
    this.mpn = "Dúzia";
    this.ubo = "Chances simples";
    this.dde = "Ímpar / par";
    this.lmz = "Número inteiro";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Vermelho / preto";
    this.efk = "Linha seis";
    this.rka = "Dividir";
    this.lyo = "Sequência";
    this.vpd = "Nenhuma responsabilidade se o aparelho estiver avariado";
    this.fjb = "Máximo limite do campo";
    this.fqj = "Máximo limite da mesa";
    this.civ = "Mínimo limite campo";
    this.jjt = "Mínimo limite mesa";
    this.eic = "Números raros";
    this.xcv = "Números frequêntes";
    this.bfk = "Série";
    this.opl = "Série 5/8";
    this.obn = "Grande série";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero Jogo"
}
vot.prototype = new ucv;

function rdp() {
    this.fge = "MIN";
    this.max = "MAX";
    this.clear = "ANNULER";
    this.gyg = "Table fermée!";
    this.ghv = "Table fermée,|le crédit a été retourné!";
    this.fcs = "En attente du jeu suivant...";
    this.qpf = "TABLE FERMÉE";
    this.tbu = "TABLE FERMÉE, CRÉDIT ANNULÉ";
    this.fub = "MISES ACCEPTÉES";
    this.zbd = "MISES REFUSÉES";
    this.uqc = "RÉSULTAT DU JOUEUR";
    this.vzb = "Mises acceptées!";
    this.yvk = "Mises refusées!";
    this.ykw = "RÉINIT.|AUTOM";
    this.zuc = "MES|MISES";
    this.hkn = "COMPTAB.|SUR";
    this.edy = "AUGMENTE|LA MISE";
    this.nqe = "MISES|IDEN-|TIQUES";
    this.eaa = "Jeu en cours, merci de patienter!";
    this.ize = "AUTO";
    this.save = "SAUVE-|GARDER";
    this.load = "CHARGER";
    this.cbm = "Opération";
    this.ryu = "Plan|des gains";
    this.ptj = "Sortie";
    this.kyl = "Menu principal";
    this.oft = "Vous pouvez alors sélectionner des jetons à des valeurs différents. Le jeton actif présente un cadre jaune.";
    this.zxq = "Afin de miser, on peut toucher un champ directement ou bien on tire la pièce directement vers le champ (les champs possibles sont illuminés).";
    this.eqv = "Vous pouvez déplacer vos jetons placés à tout moment en les tirant sur une autre position.";
    this.szz = "Vous pouvez également supprimer vos jetons placés en les prenant et les tirant de la table.";
    this.jbe = "Si vous tirez un jeton sur une des séries, cette série est misée automatiquement pour vous.";
    this.gqh = "ANNULER";
    this.zwt = "EFFACER|MISE";
    this.tfn = "Le jeu va commencer tout de suite!";
    this.nof = "Faites vos jeux s'il vous plaît!";
    this.fra = "Rien ne va plus!";
    this.dje = "Vous avez gagné!";
    this.xbi = "TABLE";
    this.quo = "MISE|CIRCUIT";
    this.dhy = "MISER SUR|VOISIN";
    this.bjz = "STATIST.";
    this.rgj_help_btn_serie_big = "La grande série couvre avec 9 jetons les nombres suivants: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "La série 'Orphelins cheval' couvre avec 5 jetons les nombres suivants: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' couvre avec 8 jetons les nombres suivants: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "Le zero jeu couvre avec 4 jetons les nombres: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "La série 5/8 couvre avec 6 jetons les nombres suivants: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Colonne";
    this.sso = "Carré";
    this.mpn = "Douzaine";
    this.ubo = "Chance simple";
    this.dde = "Impair/ Pair";
    this.lmz = "Plein";
    this.ygb = "Manque / Passe";
    this.dgs = "Rouge / Noir";
    this.efk = "Transversale Simple";
    this.rka = "Cheval";
    this.lyo = "Transversale Pleine";
    this.vpd = "Dysfonctionnement évite tous payments";
    this.fjb = "Limit maximum de la case";
    this.fqj = "Limit maximum de la table";
    this.civ = "Limit minimum de la case";
    this.jjt = "Limit minimum de la table";
    this.eic = "Les nombres les plus rares";
    this.xcv = "Les nombres les plus frequents";
    this.bfk = "Séries";
    this.opl = "Serie 5/8";
    this.obn = "Grande Série";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelin Cheval";
    this.vri = "Zero Jeu"
}
rdp.prototype = new rig;

function smw() {
    this.fge = "MIN";
    this.max = "MAKS";
    this.clear = "PONIŠTI";
    this.gyg = "Stol zatvoren!";
    this.ghv = "Stol zatvoren,|kredit vraćen!";
    this.fcs = "Čekanje na sljedeću igru ...";
    this.qpf = "STOL ZATVOREN";
    this.tbu = "STOL ZATVOREN, KREDIT VRAĆEN";
    this.fub = "ULOZI SU PRIHVAĆENI";
    this.zbd = "ULOZI NISU PRIHVAĆENI";
    this.uqc = "REZULTAT IGRE";
    this.vzb = "Ulozi su prihvaćeni!";
    this.yvk = "Ulozi nisu prihvaćeni!";
    this.ykw = "AUTO|PONAVLJANJE";
    this.zuc = "MOJ|ULOG";
    this.hkn = "ISPLATA";
    this.edy = "PREUZIMANJE|ULOG";
    this.nqe = "PONAVLJANJE|ULOG";
    this.eaa = "Igra je u tijeku, sačekajte!";
    this.ize = "AUTO";
    this.save = "POHRANA";
    this.load = "UČITAVANJE";
    this.cbm = "Postupak";
    this.ryu = "Plan dobitaka";
    this.ptj = "Izlaz";
    this.kyl = "Glavni izbornik";
    this.oft = "Sada možete odabrati žetone različitih boja. Aktivni žeton ima žuti obrub.";
    this.zxq = "Kako biste postavili ulog možete dotaknuti to područje ili prevući novčić na odgovarajući položaj (određena područja svijetle).";
    this.eqv = "Možete pomaknuti žetone koje ulažete u bilo kom trenutku tako što ćete ih prevući na drugo mjesto.";
    this.szz = "Također možete otkazati uložene žetone tako što ćete ih skinuti sa stola.";
    this.jbe = "Kada prevučete žeton na neki od nizova, automatski postavljate svoj ulog na taj niz.";
    this.gqh = "POVRAT";
    this.zwt = "BRISATI|ULOGE";
    this.tfn = "Završte ulaganje!";
    this.nof = "Molimo Vaše uloge!";
    this.fra = "Nema daljnjih uloga!";
    this.dje = "Dobitak!";
    this.xbi = "STOL";
    this.quo = "STAZA|ZA ULOGE";
    this.dhy = "ULOŽI|SUSJEDE";
    this.bjz = "STATIST.";
    this.rgj_help_btn_serie_big = "'Velika serija' pokriva s 9 čipova sljedeće brojeve: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Serija 'Orphelins cheval' pokriva s 5 čipova sljedeće brojeve: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' pokriva s 8 čipova sljedeće brojeve: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "'Zero igra' pokriva sa 4 čipa sljedeće brojeve: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Kod male serije pokrivaju se sa 6 čipova sljedeći brojevi: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Kolona";
    this.sso = "Kut";
    this.mpn = "Tucet";
    this.ubo = "Jednostavne šanse";
    this.dde = "Nepar / Par";
    this.lmz = "Cijeli broj";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Crveno / Crno";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "Kod kvara na uređaju nema jamstva";
    this.fjb = "Maksimalni limit polja";
    this.fqj = "Maksimalni limit stola";
    this.civ = "Minimalni limit polja";
    this.jjt = "Minimalni limit stola";
    this.eic = "Rijetki brojevi";
    this.xcv = "Brojevi koji se|najčešće pojavljuju";
    this.bfk = "Serije";
    this.opl = "Mala serija";
    this.obn = "Velika serija";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero igra"
}
smw.prototype = new mwj;

function vht() {
    this.fge = "MINIMA";
    this.max = "MASSIMA";
    this.clear = "CANCELLA";
    this.gyg = "Tavolo chiuso!";
    this.ghv = "Tavolo chiuso,|credito rientrato!";
    this.fcs = "Aspettando la prossima partita ...";
    this.qpf = "TAVOLO CHIUSO";
    this.tbu = "TAVOLO CHIUSO, CREDITO RIENTRATO";
    this.fub = "PUNTATE ACCETTATE";
    this.zbd = "PUNTATE NON ACCETTATE";
    this.uqc = "RISULTATO PARTITA";
    this.vzb = "Puntate accettate!";
    this.yvk = "Puntate non accettate!";
    this.ykw = "RIPETERE|AUTOM.";
    this.zuc = "LE MIE|PUNTATE";
    this.hkn = "CONTAB.|IN ENTRATA";
    this.edy = "AUMENTARE|PUNTATA";
    this.nqe = "RIPETERE|PUNTATA";
    this.eaa = "Partita in corso, prego attendere!";
    this.ize = "AUTO";
    this.save = "SALVARE";
    this.load = "CARICARE";
    this.cbm = "Uso";
    this.ryu = "Piano di vincita";
    this.ptj = "Terminare";
    this.kyl = "Menu principale";
    this.oft = "Puoi scegliere ora dei gettoni di diversi colori. Il gettone attivo è provvisto di un bordo giallo.";
    this.zxq = "Per piazzare la tua puntata devi toccare direttamente il campo oppure trainare il gettone sul campo (campi possibili illuminati).";
    this.eqv = "Puoi spostare i gettoni piazzati in ogni momento trainandoli su un'altra posizione.";
    this.szz = "Puoi anche annullare i gettoni raccogliendoli e trainandoli via dal tavolo.";
    this.jbe = "Quando sposti uno dei gettoni su un'altra serie, tale serie verrà automaticamente messa in puntata per te.";
    this.gqh = "CANCELLARE|LE|PUNTATE";
    this.zwt = "CANCELLARE|IL|TAVOLO";
    this.tfn = "Completare le puntate prego!";
    this.nof = "Prego puntare!";
    this.fra = "Fine puntate!";
    this.dje = "Hai vinto!";
    this.xbi = "TAVOLO";
    this.quo = "CORSIA|PUNTATA";
    this.dhy = "PUNTARE|VICINI";
    this.bjz = "STATIST.";
    this.rgj_help_btn_serie_big = "La Grande Serie copre i seguenti numeri usando 9 chip: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "La serie 'Orphelins cheval' copre i seguenti numeri usando 5 chip: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' copre i seguenti numeri usando 8 chip: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "Il Gioco Zero copre i seguenti numeri usando 4 chip: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "La Serie Piccola copre i seguenti numeri usando 6 chip: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Colonna";
    this.sso = "Corner";
    this.mpn = "Dozzina";
    this.ubo = "Chance semplice";
    this.dde = "Dispari / Pari";
    this.lmz = "Numero pieno";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Rosso / Nero";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "In caso di malfunzionamento nessuna responsabilità assunta";
    this.fjb = "Limite massimo del campo";
    this.fqj = "Limite massimo tavolo";
    this.civ = "Limite minimo del campo";
    this.jjt = "Limite minimo del tavolo";
    this.eic = "Più raro";
    this.xcv = "Più frequente";
    this.bfk = "Serie";
    this.opl = "Piccola Serie";
    this.obn = "Grande Serie";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero Partita"
}
vht.prototype = new svn;

function uxi() {
    this.fge = "MIN";
    this.max = "MAX";
    this.clear = "TÖM";
    this.gyg = "Bordet är stängt!";
    this.ghv = "Bordet är stängt,|beloppet har återförts!";
    this.fcs = "Väntar på nästa spel ...";
    this.qpf = "BORDET ÄR STÄNGT";
    this.tbu = "BORDET ÄR STÄNGT, BELOPPET HAR ÅTERFÖRTS";
    this.fub = "INSATSERNA ACCEPTERADE";
    this.zbd = "INSATSERNA EJ ACCEPTERADE";
    this.uqc = "SPELRESULTAT";
    this.vzb = "Insatserna accepterade!";
    this.yvk = "Insatserna ej accepterade!";
    this.ykw = "AUTO|OMSATSNING";
    this.zuc = "MIN|INSATS";
    this.hkn = "INKASSERA";
    this.edy = "ÖKA|INSATSEN";
    this.nqe = "UPPREPA|INSATSEN";
    this.eaa = "Spelet pågår, var vänlig vänta!";
    this.ize = "AUTO";
    this.save = "SPARA";
    this.load = "LADDA";
    this.cbm = "Service";
    this.ryu = "Vinstplan";
    this.ptj = "Avsluta";
    this.kyl = "Huvudmeny";
    this.oft = "Du kan nu välja marker med olika färg. Aktiva marker har en gul kant runt sig.";
    this.zxq = "För att placera insatsen kan du antingen klicka på ett insatsfält eller dra myntet på plats (spelbara platser tänds).";
    this.eqv = "Du kan flytta om de satsade markerna när som helst genom att dra dem till en annan plats.";
    this.szz = "Du kan också annullera din insats och ta tillbaka markerna genom att dra bort dem från bordet.";
    this.jbe = "Om du drar en marker till en av serierna, satsas denna serie automatiskt åt dig.";
    this.gqh = "ÅNGRA|INSATS";
    this.zwt = "RENSA|BORDET";
    this.tfn = "Spelet har börjat!";
    this.nof = "Placera dina insatser, tack!";
    this.fra = "Inga fler insatser!";
    this.dje = "Du vann!";
    this.xbi = "BORD";
    this.quo = "TÄVLINGS|BANA";
    this.dhy = "SATSA PÅ|GRANNAR";
    this.bjz = "STATIST.";
    this.rgj_help_btn_serie_big = "I den stora serien används 9 marker för att täcka följande nummer: 0/2/3 (två marker), 4/7, 12/15, 18/21, 19/22, 25/26/28/29 (två marker) och 32/35";
    this.rgj_help_btn_serie_orphch = "I serien 'Orphelins Cheval' används 5 marker för att täcka följande nummer: 1, 6/9, 14/17, 17/20 och 31/34";
    this.rgj_help_btn_serie_orphpl = "I serien 'Orphelins Plein' används 8 marker för att täcka följande nummer:|1, 6, 9, 14, 17, 20, 31, 34";
    this.rgj_help_btn_serie_zero = "I nollspelet används 4 marker för att täcka följande nummer: 0/3, 12/15, 26, 32/35";
    this.rgj_help_btn_serie_58 = "I den lilla serien används 6 marker för att täcka följande nummer: 5/8, 10/11, 13/16, 23/24, 27/30 och 33/36";
    this.ipl = "Kolonn";
    this.sso = "Hörn";
    this.mpn = "Dussin";
    this.ubo = "Enkla chanser";
    this.dde = "Udda / Jämna";
    this.lmz = "Enkelnummer";
    this.ygb = "Låg / Hög";
    this.dgs = "Rött / Svart";
    this.efk = "Dubbelrad";
    this.rka = "Två nummer";
    this.lyo = "Rad";
    this.vpd = "Vid tekniskt fel annulleras alla insatser och resultat";
    this.fjb = "Maximal gräns för spelfältet";
    this.fqj = "Maximal bordsgräns";
    this.civ = "Minimigräns för spelfältet";
    this.jjt = "Minimigräns för bordet";
    this.eic = "Ovanliga";
    this.xcv = "Vanliga";
    this.bfk = "Serier";
    this.opl = "Lilla serien";
    this.obn = "Stora serien";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Noll spel"
}
uxi.prototype = new xuo;

function ywf() {
    this.fge = "МИН.";
    this.max = "МАКС.";
    this.clear = "ПОНИШТИ";
    this.gyg = "Масата е затворена!";
    this.ghv = "Маса затворена,|кредит вратен!";
    this.fcs = "Почекај до следна игра ...";
    this.qpf = "МАСАТА Е ЗАТВОРЕНА";
    this.tbu = "МАСА ЗАТВОРЕНА, КРЕДИТ ВРАТЕН";
    this.fub = "ВЛОГОВИ ПРИФАТЕНИ";
    this.zbd = "ВЛОГОВИТЕ НЕ СЕ ПРИФАТЕНИ";
    this.uqc = "РЕЗУЛТАТ ОД ИГРА";
    this.vzb = "Влогови прифатени!";
    this.yvk = "Влоговите не се прифатени!";
    this.ykw = "АВТ.|ПОВТОРУВАЊЕ";
    this.zuc = "МОИ|ВЛОГОВИ";
    this.hkn = "ИС|ПЛАТА";
    this.edy = "ЗГОЛЕМИ|ВЛОГ";
    this.nqe = "ПОВТОРИ|ВЛОГ";
    this.eaa = "Играта е во тек, почекајте!";
    this.ize = "АВТО";
    this.save = "СОЧУВАЈ";
    this.load = "ВЧИТАЈ";
    this.cbm = "Постапка";
    this.ryu = "План за добивка";
    this.ptj = "Излез";
    this.kyl = "Главно мени";
    this.oft = "Сега може да се одберат жетони со различни вредности. Активниот жетон има жолта рамка.";
    this.zxq = "За поставување влог, допрете го полето или повлечете ја монетата на полето (можните полиња светат).";
    this.eqv = "Во секое време можете да ги преместувате жетоните, така што ќе ги повлечете на друга позиција.";
    this.szz = "Поставените жетони можете и да ги откажете, така што ќе ги земете и ќе ги повлечете од масата.";
    this.jbe = "Ако повлечете жетон на некоја од сериите, таа серија автоматски се обложува за вас.";
    this.gqh = "ВРАТИ|ГО ВЛОГОТ";
    this.zwt = "ИСЧИСТИ|МАСА";
    this.tfn = "Завршете со поставувањето на влоговите!";
    this.nof = "Внесете ги вашите влогови ве молам!";
    this.fra = "Вложувањето е завршено!";
    this.dje = "Вие победивте!";
    this.xbi = "МАСА";
    this.quo = "ТРКА|ВЛОГ";
    this.dhy = "ВЛОЖИ|СОСЕДИ";
    this.bjz = "СТАТ-КА";
    this.rgj_help_btn_serie_big = "Големата серија користи 9 чипа за да ги покрие следните броеви 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Серијата 'Орфелин Шавал' користи 5 чипа за да ги покрие следните бројки 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Орфелин Плен' користи 8 чипа за ги покрие следните бројки 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "'Зеро Играта' користи 4 чипа за да ги покрие следните бројки 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "Серија 5/8 користи 6 чипа за да ги покрие следните бројки: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Колона";
    this.sso = "Агол";
    this.mpn = "Дванаесет";
    this.ubo = "Едноставна шанса";
    this.dde = "Непар / Пар";
    this.lmz = "Цел Број";
    this.ygb = "Мали / Големи";
    this.dgs = "Црвено / Црно";
    this.efk = "Шест Линија";
    this.rka = "Подели";
    this.lyo = "Улица";
    this.vpd = "При дефект се избегнува гаранција";
    this.fjb = "Максимален влог на поле";
    this.fqj = "Максимален влог на масата";
    this.civ = "Минимален лимит на полиња";
    this.jjt = "Минимален лимит на масата";
    this.eic = "Најретки";
    this.xcv = "Најчести";
    this.bfk = "Серии";
    this.opl = "Мала Серија";
    this.obn = "Голема Серија";
    this.jdj = "Орфелин Плен";
    this.aow = "Орфелин Шавал";
    this.vri = "Зеро Игра"
}
ywf.prototype = new kap;

function cnv() {
    this.fge = "MIN";
    this.max = "MAKS";
    this.clear = "USUŃ";
    this.gyg = "Stół zamknięty!";
    this.ghv = "Stół zamknięty,|kredyt zwrócony!";
    this.fcs = "Poczekaj na następną grę ...";
    this.qpf = "STÓŁ ZAMKNIĘTY";
    this.tbu = "STÓŁ ZAMKNIĘTY, KREDYT ZWRÓCONY";
    this.fub = "ZAKŁAD ZAAKCEPTOWANO";
    this.zbd = "NIE ZAAKCEPTOWANO ZAKŁADU";
    this.uqc = "WYNIK GRY";
    this.vzb = "Zakład zaakceptowano!";
    this.yvk = "Nie zaakceptowano zakładu!";
    this.ykw = "AUTOM.|POWT.";
    this.zuc = "MOJE|ZAKŁADY";
    this.hkn = "W|PŁATA";
    this.edy = "ZWIĘKSZ|STAWKĘ";
    this.nqe = "POWTÓRZ|STAWKĘ";
    this.eaa = "Gra uruchomiona, proszę czekać!";
    this.ize = "AUTO";
    this.save = "ZACHOWAJ";
    this.load = "WCZYTAJ";
    this.cbm = "Obsługa";
    this.ryu = "Plan wygranych";
    this.ptj = "Wyjście";
    this.kyl = "Menu główne";
    this.oft = "Teraz możesz wybrać żetony o różnych wartościach. Aktywny żeton jest obramowany na żółto.";
    this.zxq = "Aby postawić zakład, można bezpośrednio dotknąć pola lub przeciągnąć na nie monetę (możliwe pola podświetlą się).";
    this.eqv = "Możesz przenieść swoje zainwestowane żetony w dowolnym momencie, przeciągając je na inną pozycję.";
    this.szz = "Możesz także usunąć swoje żetony, przeciągając je na obszar poza stołem.";
    this.jbe = "Gdy przeciągniesz żeton na jedną z serii, seria ta zostanie dla Ciebie automatycznie ustawiona.";
    this.gqh = "COFNIĘCIE|STAWEK";
    this.zwt = "USUNIĘCIE|STOŁU";
    this.tfn = "Gra zaraz się zacznie!";
    this.nof = "Podaj swoje stawki!";
    this.fra = "Brak kolejnych stawek!";
    this.dje = "Wygrałeś!";
    this.xbi = "STÓŁ";
    this.quo = "TOR|WYŚCIGOWY";
    this.dhy = "POSTAW NA|SĄSIEDNIE";
    this.bjz = "STATIST.";
    this.rgj_help_btn_serie_big = "'Duża seria' obstawia 9 żetonami następujące liczby: 0/2/3 4/7 12/15 18/21 19/22 25/26/28/29 32/35";
    this.rgj_help_btn_serie_orphch = "Seria 'Orphelins Cheval' obstawia 5 żetonami następujące liczby: 1 6/9 14/17 17/20 31/34";
    this.rgj_help_btn_serie_orphpl = "'Orphelins Plein' obstawia 8 żetonami następujące liczby: 1 6 9 14 17 20 31 34";
    this.rgj_help_btn_serie_zero = "'Zero Gra' obstawia 4 żetonami następujące liczby: 0/3 12/15 26 32/35";
    this.rgj_help_btn_serie_58 = "W małej serii 6 żetonami obstawia się następujące liczby: 5/8 10/11 13/16 23/24 27/30 33/36";
    this.ipl = "Kolumna";
    this.sso = "Corner";
    this.mpn = "Tuzin";
    this.ubo = "Pojedyncze szanse";
    this.dde = "Nieparzyste/Parzyste";
    this.lmz = "Full Number";
    this.ygb = "1-18 / 19-36";
    this.dgs = "Czerwone / Czarne";
    this.efk = "Six Line";
    this.rka = "Split";
    this.lyo = "Street";
    this.vpd = "Nie odpowiadamy za awarię automatu";
    this.fjb = "Maksymalny limit pola";
    this.fqj = "Maksymalny limit stołu";
    this.civ = "Minimalny limit pola";
    this.jjt = "Minimalny limit stołu";
    this.eic = "Najrzadsze";
    this.xcv = "Najczęstsze";
    this.bfk = "Serie";
    this.opl = "Mała seria";
    this.obn = "Duża seria";
    this.jdj = "Orphelins Plein";
    this.aow = "Orphelins Cheval";
    this.vri = "Zero Gra"
}
cnv.prototype = new cae;

function gkt() {
    this.gkr = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.xiv = {
        backgroundColor: "rgb(0,0,0)",
        lyn: "rgba(0,0,0,0.3)"
    };
    this.itu = {
        xiv: {
            font: "arial",
            stb: "bold",
            backgroundColor: "black",
            zso: "rgb(0,100,10)",
            ham: "rgb(80,255,100)",
            yba: "rgb(120,120,120)",
            qwd: "red",
            sah: "white",
            gmj: "white",
            rlq: null
        },
        tdz: {
            font: "arial",
            stb: "bold",
            backgroundColor: "black",
            zso: "rgb(0,100,10)",
            ham: "rgb(80,255,100)",
            yba: "rgb(120,120,120)",
            qwd: "red",
            sah: "white",
            gmj: "rgb(230,190,10)",
            rlq: null
        }
    };
    this.gdk = {
        font: "arial",
        stb: "bold",
        backgroundColor: "rgb(0,0,0)",
        okc: null,
        gmj: "rgb(255,255,255)",
        orn: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.ivg = {
        font: "arial",
        stb: "bold",
        backgroundColor: "black",
        dwu: "rgb(50,50,50)",
        yih: "rgb(255,255,255)",
        gmj: "white",
        vne: 0.8,
        bnl: {
            npg: {
                font: "sanf-serif",
                stb: "",
                textAlign: "center",
                cbb: "round",
                backgroundColor: "black",
                gmj: "white",
                borderColor: null,
                orn: null,
                wks: 1
            }
        }
    };
    this.wqz = {
        font: "arial",
        stb: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        dbm: "rgba(255,255,255,0.2)",
        gmj: "rgb(255,255,255)",
        cqc: "rgba(0,0,0,0.3)",
        display: {
            tmt: "arial",
            wrh: "arial",
            stb: "bold",
            gmj: "rgb(255,255,255)",
            zqa: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        npg: {
            font: "arial",
            stb: "bold",
            gmj: "rgb(0,0,0)",
            kmf: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            okc: "rgba(255,255,255,1)",
            jko: "rgba(255,255,255,0.8)",
            glo: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            cbb: "rect",
            dsi: -1
        }
    };
    this.qyn = {
        font: "arial",
        stb: "bold",
        xnp: "rgb(0,0,200)",
        uoj: "rgb(255,255,255)",
        sny: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        wkd: "rgb(180,220,255)",
        gyc: "rgb(10,20,25)",
        mrj: "rgb(130,220,255)",
        jyw: "rgb(130,190,255)",
        gmj: "rgb(255,255,255)",
        xrx: "rgb(130,190,255)",
        fsa: "rgb(100,160,255)",
        wzu: "rgb(255,255,255)",
        npg: {
            cbb: "rect",
            font: "arial",
            stb: "bold",
            gmj: "rgb(255,255,255)",
            pso: null,
            backgroundColor: "rgb(90,160,255)",
            oiw: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            orn: "rgb(40,80,140)"
        },
        vxl: {
            cbb: "round",
            font: "arial",
            stb: "bold",
            gmj: "rgb(255,255,255)",
            pso: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            oiw: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            orn: "rgb(40,80,140)"
        }
    };
    this.ftt = {};
    this.mya = {
        efj: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.fdp = {
        type: "left",
        font: "arial",
        stb: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        okc: null,
        borderColor: "rgb(0,0,0)",
        orn: "rgb(180,180,180)",
        wkd: "rgba(0,0,0,0.6)",
        grq: null,
        zqa: "rgb(255,200,0)",
        gmj: "white",
        hqp: {
            font: "arial",
            stb: "bold",
            backgroundColor: "rgb(100,100,100)",
            okc: "rgb(100,100,100)",
            jko: null,
            glo: null,
            borderColor: "rgb(100,100,100)",
            gmj: "rgb(255,255,255)",
            kmf: "rgb(255,200,0)",
            cbb: "triangle",
            dsi: 1
        },
        kqu: {
            font: "arial",
            stb: "bold",
            backgroundColor: "rgb(100,100,100)",
            okc: "rgb(100,100,100)",
            jko: null,
            glo: null,
            borderColor: "rgb(100,100,100)",
            gmj: "rgb(255,255,255)",
            kmf: "rgb(255,200,0)",
            cbb: "triangle",
            dsi: 0
        },
        lyc: {
            font: "arial",
            stb: "bold",
            backgroundColor: "rgb(100,100,100)",
            okc: "rgb(15,15,15)",
            jko: "rgb(100,100,100)",
            glo: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            gmj: "rgb(255,255,255)",
            kmf: "rgb(255,200,0)",
            cbb: "rect",
            dsi: -1
        },
        display: {
            wrh: "sans-serif",
            tmt: "sans-serif",
            stb: "bold",
            zqa: null,
            gmj: "yellow",
            borderColor: "rgb(100,100,100)",
            orn: null,
            backgroundColor: "black"
        },
        wcg: {
            font: "arial",
            stb: "bold",
            backgroundColor: null,
            okc: null,
            gmj: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.nwv = {
        font: "arial",
        stb: "bold",
        backgroundColor: "rgb(180,180,180)",
        okc: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        orn: "rgb(30,30,30)",
        gmj: "white",
        gdy: {
            font: "arial",
            stb: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            okc: null,
            jko: "rgba(100,100,100,0.5)",
            glo: null,
            borderColor: null,
            gmj: "white",
            cbb: "rect",
            dsi: -1
        },
        hqp: {
            font: "arial",
            stb: "bold",
            backgroundColor: "rgb(255,255,255)",
            okc: "rgb(255,255,255)",
            jko: null,
            glo: null,
            borderColor: "rgb(255,255,255)",
            gmj: "rgb(0,0,0)",
            kmf: "rgb(0,0,0)",
            cbb: "triangle",
            dsi: 1
        },
        kqu: {
            font: "arial",
            stb: "bold",
            backgroundColor: "rgb(255,255,255)",
            okc: "rgb(255,255,255)",
            jko: null,
            glo: null,
            borderColor: "rgb(255,255,255)",
            gmj: "rgb(0,0,0)",
            kmf: "rgb(0,0,0)",
            cbb: "triangle",
            dsi: 0
        },
        rbk: {
            cbb: "rect",
            font: "arial",
            stb: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            gmj: "white",
            wks: 1,
            borderColor: "rgb(255,255,255)",
            orn: "rgb(220,220,220)"
        },
        display: {
            wrh: "sans-serif",
            tmt: "sans-serif",
            stb: "bold",
            zqa: null,
            gmj: "white",
            borderColor: "white",
            orn: null,
            backgroundColor: "rgb(0,0,0)"
        },
        wcg: {
            font: "arial",
            stb: "bold",
            backgroundColor: null,
            okc: null,
            gmj: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.szg = {
        smc: [{
            wrh: "sans-serif",
            dgx: "verdana",
            stb: "bold",
            zqa: "rgb(255,255,100)",
            ylu: "rgb(210,190,40)",
            pso: "rgb(252,247,0)",
            vng: "rgb(220,200,0)",
            dwu: "rgb(0,0,0)"
        }, {
            wrh: "sans-serif",
            dgx: "verdana",
            stb: "bold",
            zqa: "rgb(250,250,250)",
            ylu: "rgb(210,210,210)",
            pso: "rgb(255,255,255)",
            vng: "rgb(220,220,220)",
            dwu: "rgb(0,0,0)"
        }, {
            wrh: "sans-serif",
            dgx: "verdana",
            stb: "bold",
            zqa: "rgb(230,230,230)",
            ylu: "rgb(190,190,190)",
            pso: "rgb(255,255,255)",
            vng: "rgb(220,220,220)",
            dwu: "rgb(0,0,0)"
        }, {
            wrh: "sans-serif",
            dgx: "verdana",
            stb: "bold",
            zqa: "rgb(230,230,230)",
            ylu: "rgb(190,190,190)",
            pso: "rgb(255,255,255)",
            vng: "rgb(220,220,220)",
            dwu: "rgb(0,0,0)"
        }],
        mve: {
            wrh: "sans-serif",
            dgx: "sans-serif",
            stb: "bold",
            zqa: "rgb(236,225,207)",
            ylu: "rgb(214,170,102)",
            pso: "rgb(245,220,148)",
            vng: "rgb(190,137,40)"
        },
        xdt: {}
    };
    this.edd = {
        fas: "rgb(240,240,240)",
        fkr: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        cqc: "rgba(0,80,150,0.6)",
        display: {
            tmt: "arial",
            wrh: "arial",
            stb: "bold",
            gmj: "rgb(0,80,151)",
            zqa: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function jym() {
    this.gkr = {
        backgroundColor: "rgb(0, 40, 20)"
    };
    this.oav = {
        backgroundColor: "rgb(0,255,0)",
        okc: null,
        npg: {
            font: "verdana",
            stb: "bold",
            backgroundColor: "rgb(160,147,98)",
            oiw: "rgb(180,180,0)",
            gmj: "rgb(0,0,0)"
        }
    };
    this.ykd = {
        backgroundColor: "rgb(11,59,28)",
        borderColor: "rgb(184,188,120)"
    };
    this.faj = {
        ciq: {
            gmj: "black",
            font: "sans-serif",
            stb: ""
        }
    };
    this.fvf = {
        font: "sans-serif",
        stb: "",
        backgroundColor: "rgb(21,69,38)",
        borderColor: "rgb(220,210,140)",
        gmj: "white",
        krj: "rgb(219,159,159)",
        ajd: "rgb(202,95,95)",
        zhl: "rgb(186,31,31)",
        gsf: "rgb(120,0,0)",
        jtr: "rgb(219,159,159)",
        qrb: "rgb(202,95,95)",
        gxw: "rgb(186,31,31)",
        ivd: "rgb(120,0,0)",
        mrg: "rgb(21,69,38)",
        hdn: "rgb(21,69,38)",
        abg: "rgb(21,69,38)",
        bqf: "rgb(21,69,38)"
    };
    this.fow = {
        font: "sans-serif",
        stb: "",
        gmj: "rgb(255,255,110)",
        aai: {
            font: "verdana",
            stb: "bold",
            gmj: "rgb(255,255,110)",
            kmf: "rgb(255,255,0)",
            backgroundColor: "rgb(34,60,33)",
            okc: null,
            borderColor: "rgb(138,124,20)"
        },
        kih: {
            font: "verdana",
            stb: "bold",
            gmj: "rgb(255,255,110)",
            kmf: "rgb(255,255,0)",
            backgroundColor: "rgb(34,60,33)",
            okc: null,
            borderColor: "rgb(174,179,143)"
        }
    };
    this.ciq = {
        font: "sans-serif",
        stb: "",
        gmj: "rgb(0,0,0)",
        borderColor: "rgb(255,255,255)"
    }
}
jym.prototype = new gkt;

function eki() {
    this.gkr = {
        backgroundColor: "rgb(0, 40, 20)"
    };
    this.oav = {
        backgroundColor: null,
        okc: null,
        npg: {
            font: "verdana",
            stb: "bold",
            backgroundColor: "rgb(216, 194, 123)",
            okc: "rgb(200, 164, 54)",
            borderColor: "rgb(112, 97, 59)",
            gmj: "rgb(0, 0, 0)",
            kmf: "rgb(0,0,0)",
            cbb: "rect",
            dsi: -1
        }
    };
    this.ykd = {
        backgroundColor: "rgb(11,59,28)",
        borderColor: "rgb(174, 185, 139)"
    };
    this.faj = {
        ciq: {
            gmj: "black",
            font: "sans-serif",
            stb: ""
        },
        win: {
            font: "sans-serif",
            stb: "",
            gmj: "rgb(255, 255, 255)",
            kmf: "rgb(255, 255, 0)",
            backgroundColor: "rgb(0, 0, 0)",
            borderColor: "rgb(255, 255, 255)",
            wks: 0.8
        },
        qyn: {
            font: "sans-serif",
            stb: "bold",
            gmj: "rgb(255,230,160)"
        },
        pak: {
            font: "arial",
            stb: "bold",
            gmj: "rgb(255,255,255)",
            kmf: "rgb(255,255,255)",
            backgroundColor: "rgb(54,99,55)",
            okc: null,
            jko: "rgb(76,125,100)",
            glo: null,
            borderColor: "rgb(174,185,139)",
            cbb: "rect",
            dsi: -1
        }
    };
    this.gik = {
        gqw: "rgb(255, 0, 0)",
        ciq: {
            font: "sans-serif",
            stb: "",
            gmj: "black"
        },
        win: {
            font: "sans-serif",
            stb: "",
            gmj: "rgb(255, 255, 255)",
            backgroundColor: "rgb(0, 0, 0)",
            borderColor: "rgb(255, 255, 255)",
            wks: 0.8
        }
    };
    this.fvf = {
        type: "rect",
        font: "sans-serif",
        stb: "bold",
        backgroundColor: "rgb(21,69,38)",
        borderColor: "rgb(174, 185, 139)",
        orn: null,
        gmj: "white",
        krj: "rgb(219,159,159)",
        ajd: "rgb(202,95,95)",
        zhl: "rgb(186,31,31)",
        gsf: "rgb(120,0,0)",
        jtr: "rgb(219,159,159)",
        qrb: "rgb(202,95,95)",
        gxw: "rgb(186,31,31)",
        ivd: "rgb(120,0,0)",
        mrg: "rgb(21,69,38)",
        hdn: "rgb(21,69,38)",
        abg: "rgb(21,69,38)",
        bqf: "rgb(21,69,38)"
    };
    this.fni = {
        font: "sans-serif",
        stb: "bold",
        gmj: "rgb(255, 255, 100)",
        backgroundColor: "rgb(20, 70, 40)",
        borderColor: "rgb(174, 185, 139)"
    };
    this.thb = {
        font: "sans-serif",
        stb: "",
        gmj: "white",
        backgroundColor: "rgb(20, 70, 40)",
        zvd: "rgb(255, 0, 0)",
        borderColor: "rgb(174, 185, 139)"
    };
    this.kto = {};
    this.dut = {
        backgroundColor: "rgb(20, 70, 40)",
        borderColor: "rgb(155, 172, 140)"
    };
    this.rlb = {
        font: "sans-serif",
        stb: "bold",
        gmj: "rgb(255, 255, 0)",
        backgroundColor: "rgb(50, 90, 50)",
        okc: "rgb(25, 45, 25)",
        borderColor: "rgb(174, 185, 139)"
    };
    this.ivg.bnl.npg.backgroundColor = "rgb(20, 70, 40)";
    this.fow = {
        font: "sans-serif",
        stb: "",
        gmj: "rgb(255,255,110)",
        aai: {
            font: "verdana",
            stb: "bold",
            gmj: "rgb(255,255,110)",
            kmf: "rgb(255,255,0)",
            backgroundColor: "rgb(34,60,33)",
            okc: null,
            borderColor: "rgb(138,124,20)",
            cbb: "rect",
            dsi: -1
        },
        kih: {
            font: "verdana",
            stb: "bold",
            gmj: "rgb(255,255,110)",
            kmf: "rgb(255,255,0)",
            backgroundColor: "rgb(34,60,33)",
            okc: null,
            borderColor: "rgb(174,179,143)",
            cbb: "rect",
            dsi: -1
        }
    };
    this.ciq = {
        font: "sans-serif",
        stb: "",
        gmj: "rgb(0,0,0)",
        borderColor: "rgb(173,180,115)"
    };
    this.wqz = {
        font: "verdana",
        stb: "bold",
        backgroundColor: "rgb(20, 70, 40)",
        xqh: "rgb(10, 50, 30)",
        borderColor: "rgb(184, 188, 120)",
        gmj: "rgb(255, 255, 180)",
        npg: {
            font: "verdana",
            stb: "bold",
            backgroundColor: "rgb(20,100,60)",
            okc: "rgb(10,50,30)",
            borderColor: "rgb(0,0,0)",
            gmj: "rgb(255, 255, 180)",
            kmf: "rgb(255,255,0)",
            cbb: "rect",
            dsi: -1
        },
        fni: {
            backgroundColor: "rgb(20, 70, 40)",
            gmj: "rgb(255, 255, 255)",
            borderColor: "rgb(155, 172, 140)"
        }
    };
    this.ljs = {
        font: "verdana",
        stb: "bold",
        gmj: "white",
        zqa: "rgb(220, 0, 50)",
        borderColor: "rgb(200, 200, 200)",
        backgroundColor: "rgb(0, 0, 0)",
        wks: 1
    }
}
eki.prototype = new jym;

function hjr() {
    this.type = "800_600";
    this.lye = true;
    this.csm = false;
    this.ulu = false;
    this.jjg = true;
    this.fbn = false;
    this.fbx = false;
    this.era = false;
    this.utu = false
}

function gpc() {
    this.lye = false;
    this.canvas = {
        eso: new qsz(0, 0, 800, 620)
    };
    this.gfy = {
        eso: new qsz(),
        iwp: 0
    };
    this.xiv = {
        eso: new qsz(0, 20, 800, 600),
        nlj: 0
    };
    this.pbw = {
        pwt: new qsz(0, 40, 440, 36),
        rgi: new qsz(5, 2, 140, 30),
        aft: new qsz(150, 2, 140, 30),
        dqc: new qsz(295, 2, 140, 30),
        pak: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.itu = {
        xiv: {
            eso: new qsz(0, 0, 500, 360),
            qmj: new qsz(5, 325, 490, 30),
            opv: new qsz(5, 329, 490, 14),
            mvo: new qsz(50, 345, 400, 6),
            oyb: new qsz(5, 285, 490, 70),
            rtn: new qsz(120, 300, 260, 55),
            fontSize: 14,
            wam: 18,
            eai: 26,
            nnz: 5,
            mjg: 12,
            zaf: 5,
            ehq: 2
        },
        tdz: {
            eso: new qsz(0, 0, 800, 620),
            qmj: new qsz(),
            opv: new qsz(),
            mvo: new qsz(200, 425, 400, 8),
            oyb: new qsz(100, 372, 600, 84),
            rtn: new qsz(270, 394, 260, 70),
            fontSize: 18,
            wam: 24,
            eai: 20,
            nnz: 0,
            mjg: 12,
            zaf: 7,
            ehq: 0
        }
    };
    this.gdk = {
        eso: new qsz(0, 0, 800, 20),
        fontSize: 12,
        cqo: 19,
        vvz: 15,
        ayo: 120,
        mjg: 2,
        zaf: 2,
        gjq: 2,
        vcs: 40
    };
    this.ivg = {
        eso: new qsz(0, 20, 800, 70),
        fontSize: 10,
        gcg: 10,
        eql: 20,
        fad: 40,
        nlj: 4,
        mjg: 10,
        zaf: 5,
        nnz: 10,
        pak: {
            fontSize: 17,
            nnz: 2
        }
    };
    this.qyn = {
        eso: new qsz(0, 20, 800, 600),
        pwt: new qsz(),
        pak: {
            jal: 20,
            dhi: 0,
            mjg: 0,
            pzu: 0,
            uqx: 0,
            ccr: 8,
            foy: 8,
            nlj: 0
        },
        dci: new qsz(0, 20, 800, 40),
        poj: new qsz(0, 100, 800, 40),
        pvw: new qsz(0, 140, 800, 40),
        hjg: new qsz(0, 180, 800, 40),
        rsu: new qsz(225, 275, 350, 100),
        iou: new qsz(200, 480, 400, 40),
        vxj: {
            gjj: new qsz(340, 540, 120, 55)
        },
        ysu: {
            gjj: new qsz(250, 540, 120, 55),
            bgx: new qsz(430, 540, 120, 55)
        },
        fbk: 36,
        fontSize: 30,
        dfv: 22,
        zaf: 3,
        mjg: 5,
        nlj: 2,
        dir: 3,
        ect: 10
    };
    this.ftt = {
        eso: new qsz(-10, 25, 310, 50),
        dci: new qsz(10, 4, 240, 24),
        opv: new qsz(10, 28, 240, 18),
        ftx: new qsz(260, 10, 40, 30),
        ulf: new qsz(7, 2, 26, 26),
        zyc: 16,
        jal: 12,
        mpi: 18
    };
    this.mya = {
        eso: new qsz(150, 160, 500, 280),
        zyc: 26,
        fontSize: 20,
        tck: new qsz(465, 5, 30, 30),
        dci: new qsz(30, 5, 440, 30),
        iou: new qsz(20, 40, 460, 160),
        azb: new qsz(20, 230, 460, 40),
        pak: {
            fontSize: 20
        }
    };
    this.fdp = {
        eso: new qsz(0, 55, 560, 430),
        nlj: 2,
        hfl: 0,
        zax: 5,
        vzz: 10,
        zyc: 26,
        qvj: 20,
        dci: new qsz(30, 15, 500, 30),
        qpb: new qsz(20, 50, 520, 60),
        xaq: new qsz(40, 60, 220, 40),
        lpq: new qsz(328, 60, 30, 40),
        sas: new qsz(360, 60, 120, 40),
        jdi: new qsz(482, 60, 30, 40),
        vmu: new qsz(20, 120, 520, 200),
        fqu: new qsz(40, 120, 480, 40),
        rhj: new qsz(30, 160, 280, 40),
        dsn: new qsz(328, 160, 30, 40),
        ggu: new qsz(360, 160, 120, 40),
        lpl: new qsz(482, 160, 30, 40),
        dxn: new qsz(30, 215, 280, 40),
        iry: new qsz(328, 215, 30, 40),
        wcm: new qsz(360, 215, 120, 40),
        oye: new qsz(482, 215, 30, 40),
        vbz: new qsz(30, 270, 280, 40),
        xge: new qsz(328, 270, 30, 40),
        one: new qsz(360, 270, 120, 40),
        fxa: new qsz(482, 270, 30, 40),
        qmj: new qsz(30, 330, 500, 30),
        nsq: new qsz(210, 370, 140, 50),
        sce: new qsz(),
        wcg: {
            opv: new qsz(40, 0, 240, 40),
            jqp: new qsz(7, 12, 16, 16),
            fontSize: 20,
            ccr: 0,
            nlj: 2
        },
        kqu: {
            ccr: 3,
            mjg: -5,
            zaf: -1,
            foy: 6,
            fontSize: 20,
            nlj: 0
        },
        hqp: {
            ccr: 3,
            mjg: 5,
            zaf: 0,
            foy: 6,
            fontSize: 20,
            nlj: 0
        },
        lyc: {
            ccr: 6,
            mjg: 0,
            zaf: 0,
            foy: 6,
            fontSize: 26,
            nlj: 2
        },
        display: {
            zyc: 16,
            jal: 24,
            tdr: 0,
            pzu: 0,
            nlj: 2,
            fbv: 3,
            zfx: 3,
            mqj: 3,
            rwu: 3
        }
    };
    this.szg = {
        eso: [
            [new qsz(668, 20, 130, 44)],
            [new qsz(668, 20, 130, 44), new qsz(2, 20, 130, 44)],
            [new qsz(668, 20, 130, 23), new qsz(2, 20, 130, 23), new qsz(2, 41, 130, 23)],
            [new qsz(668, 20, 130, 23), new qsz(2, 20, 130, 23), new qsz(668, 41, 130, 23), new qsz(2, 41, 130, 23)]
        ],
        display: {
            jhf: new qsz(0, 0, 130, 44),
            ink: new qsz(0, 0, 130, 44),
            ikb: new qsz(),
            dci: new qsz(2, 3, 126, 19),
            jth: new qsz(8, 24, 114, 19),
            zyc: 16,
            dhi: 18,
            ahs: 0
        },
        vfx: {
            jhf: new qsz(0, 0, 130, 23),
            ink: new qsz(0, 0, 130, 23),
            ikb: new qsz(2, 2, 19, 19),
            dci: new qsz(),
            jth: new qsz(22, 3, 100, 19),
            zyc: 14,
            dhi: 18,
            ahs: 0
        },
        mve: {
            eso: new qsz(62, 100, 676, 372),
            jhf: new qsz(32, 10, 612, 351),
            ink: new qsz(0, 0, 676, 372),
            ikb: new qsz(301, 263, 74, 74),
            dci: new qsz(120, 58, 436, 56),
            jth: new qsz(32, 140, 612, 96),
            zyc: 68,
            dhi: 100,
            ahs: 0
        },
        xdt: {
            eso: new qsz(38, 80, 724, 369),
            vlb: new qsz(100, 53, 525, 50),
            jth: new qsz(186, 153, 332, 94),
            tgy: 340,
            bpu: 30,
            vlv: {
                _0: new qsz(2, 0, 90, 94),
                _1: new qsz(98, 0, 90, 94),
                _2: new qsz(194, 0, 90, 94),
                _3: new qsz(290, 0, 90, 94),
                _4: new qsz(386, 0, 90, 94),
                _5: new qsz(482, 0, 90, 94),
                _6: new qsz(578, 0, 90, 94),
                _7: new qsz(674, 0, 90, 94),
                _8: new qsz(770, 0, 90, 94),
                _9: new qsz(866, 0, 90, 94),
                _cm: new qsz(962, 0, 28, 94),
                _dt: new qsz(999, 0, 28, 94),
                _sp: new qsz(1036, 0, 28, 94)
            }
        }
    }
}
gpc.prototype = new hjr;

function lnx() {
    this.csm = true
}
lnx.prototype = new gpc;

function zgu() {
    this.fbn = true;
    this.ulu = true;
    this.lye = false;
    this.csm = true;
    this.canvas = {
        eso: new qsz(0, 0, 800, 1165)
    };
    this.gfy = {
        eso: new qsz(),
        iwp: 0
    };
    this.xiv = {
        eso: new qsz(0, 550, 800, 615),
        nlj: 10
    };
    this.pbw = {
        pwt: new qsz(0, 330, 440, 36),
        rgi: new qsz(5, 2, 140, 30),
        aft: new qsz(150, 2, 140, 30),
        dqc: new qsz(295, 2, 140, 30),
        pak: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.itu = {
        xiv: {
            eso: new qsz(0, 0, 500, 360),
            qmj: new qsz(5, 325, 490, 30),
            opv: new qsz(5, 329, 490, 14),
            mvo: new qsz(50, 345, 400, 6),
            oyb: new qsz(5, 285, 490, 70),
            rtn: new qsz(120, 300, 260, 55),
            fontSize: 14,
            wam: 18,
            eai: 26,
            nnz: 5,
            mjg: 12,
            zaf: 5,
            ehq: 2
        },
        tdz: {
            eso: new qsz(0, 0, 800, 600),
            qmj: new qsz(),
            opv: new qsz(),
            mvo: new qsz(200, 411, 400, 8),
            oyb: new qsz(100, 360, 600, 110),
            rtn: new qsz(270, 380, 260, 70),
            fontSize: 18,
            wam: 24,
            eai: 20,
            nnz: 0,
            mjg: 12,
            zaf: 7,
            ehq: 0
        }
    };
    this.top = {
        eso: new qsz(0, 20, 800, 520)
    };
    this.gdk = {
        eso: new qsz(0, 0, 800, 20),
        fontSize: 12,
        cqo: 19,
        vvz: 15,
        ayo: 120,
        mjg: 2,
        zaf: 2,
        gjq: 2,
        vcs: 60
    };
    this.ivg = {
        eso: new qsz(0, 20, 800, 70),
        fontSize: 10,
        gcg: 10,
        eql: 20,
        fad: 40,
        nlj: 4,
        mjg: 10,
        zaf: 5,
        nnz: 10,
        pak: {
            fontSize: 17,
            nnz: 2
        }
    };
    this.qyn = {
        eso: new qsz(0, 550, 800, 615),
        pwt: new qsz(),
        pak: {
            jal: 26,
            dhi: 0,
            mjg: 0,
            pzu: 0,
            uqx: 0,
            ccr: 10,
            foy: 10,
            nlj: 2
        },
        dci: new qsz(0, 20, 800, 40),
        poj: new qsz(0, 100, 800, 40),
        pvw: new qsz(0, 140, 800, 40),
        hjg: new qsz(0, 180, 800, 40),
        rsu: new qsz(225, 275, 350, 100),
        iou: new qsz(200, 480, 400, 40),
        vxj: {
            gjj: new qsz(340, 540, 120, 68)
        },
        ysu: {
            gjj: new qsz(250, 540, 120, 68),
            bgx: new qsz(430, 540, 120, 68)
        },
        fbk: 36,
        fontSize: 30,
        dfv: 22,
        zaf: 3,
        mjg: 5,
        nlj: 2,
        dir: 3,
        ect: 10,
    };
    this.ftt = {
        eso: new qsz(-10, 545, 310, 50),
        dci: new qsz(10, 4, 240, 24),
        opv: new qsz(10, 28, 240, 18),
        ftx: new qsz(260, 10, 40, 30),
        ulf: new qsz(7, 2, 26, 26),
        zyc: 16,
        jal: 12,
        mpi: 18
    };
    this.mya = {
        eso: new qsz(150, 690, 500, 280),
        zyc: 26,
        fontSize: 20,
        tck: new qsz(465, 5, 30, 30),
        dci: new qsz(30, 5, 440, 40),
        iou: new qsz(20, 40, 460, 160),
        azb: new qsz(20, 230, 460, 40),
        pak: {
            fontSize: 20
        }
    };
    this.fdp = {
        eso: new qsz(0, 585, 560, 430),
        nlj: 2,
        hfl: 0,
        zax: 5,
        vzz: 10,
        zyc: 26,
        qvj: 20,
        dci: new qsz(30, 15, 500, 30),
        qpb: new qsz(20, 50, 520, 60),
        xaq: new qsz(40, 60, 220, 40),
        lpq: new qsz(328, 60, 30, 40),
        sas: new qsz(360, 60, 120, 40),
        jdi: new qsz(482, 60, 30, 40),
        vmu: new qsz(20, 120, 520, 200),
        fqu: new qsz(40, 120, 480, 40),
        rhj: new qsz(30, 160, 280, 40),
        dsn: new qsz(328, 160, 30, 40),
        ggu: new qsz(360, 160, 120, 40),
        lpl: new qsz(482, 160, 30, 40),
        dxn: new qsz(30, 215, 280, 40),
        iry: new qsz(328, 215, 30, 40),
        wcm: new qsz(360, 215, 120, 40),
        oye: new qsz(482, 215, 30, 40),
        vbz: new qsz(30, 270, 280, 40),
        xge: new qsz(328, 270, 30, 40),
        one: new qsz(360, 270, 120, 40),
        fxa: new qsz(482, 270, 30, 40),
        qmj: new qsz(30, 330, 500, 30),
        nsq: new qsz(210, 370, 140, 50),
        sce: new qsz(),
        wcg: {
            opv: new qsz(40, 0, 240, 40),
            jqp: new qsz(7, 12, 16, 16),
            fontSize: 20,
            ccr: 0,
            nlj: 2
        },
        kqu: {
            ccr: 3,
            mjg: -5,
            zaf: -1,
            foy: 6,
            fontSize: 20,
            nlj: 0
        },
        hqp: {
            ccr: 3,
            mjg: 5,
            zaf: 0,
            foy: 6,
            fontSize: 20,
            nlj: 0
        },
        lyc: {
            ccr: 6,
            mjg: 0,
            zaf: 0,
            foy: 6,
            fontSize: 26,
            nlj: 2
        },
        display: {
            zyc: 16,
            jal: 24,
            tdr: 0,
            pzu: 0,
            nlj: 2,
            fbv: 3,
            zfx: 3,
            mqj: 3,
            rwu: 3
        }
    };
    this.szg = {
        eso: [
            [new qsz(668, 550, 130, 44)],
            [new qsz(668, 550, 130, 44), new qsz(2, 550, 130, 44)],
            [new qsz(668, 550, 130, 23), new qsz(2, 550, 130, 23), new qsz(2, 571, 130, 23)],
            [new qsz(668, 550, 130, 23), new qsz(2, 550, 130, 23), new qsz(668, 571, 130, 23), new qsz(2, 571, 130, 23)]
        ],
        display: {
            jhf: new qsz(0, 0, 130, 44),
            ink: new qsz(0, 0, 130, 44),
            ikb: new qsz(),
            dci: new qsz(2, 3, 126, 19),
            jth: new qsz(8, 24, 114, 19),
            zyc: 16,
            dhi: 18,
            ahs: 0
        },
        vfx: {
            jhf: new qsz(0, 0, 130, 23),
            ink: new qsz(0, 0, 130, 23),
            ikb: new qsz(2, 2, 19, 19),
            dci: new qsz(),
            jth: new qsz(22, 3, 100, 19),
            zyc: 14,
            dhi: 18,
            ahs: 0
        },
        mve: {
            eso: new qsz(62, 640, 676, 372),
            jhf: new qsz(32, 10, 612, 351),
            ink: new qsz(0, 0, 676, 372),
            ikb: new qsz(301, 263, 74, 74),
            dci: new qsz(120, 58, 436, 56),
            jth: new qsz(32, 140, 612, 96),
            zyc: 68,
            dhi: 100,
            ahs: 0
        },
        xdt: {
            eso: new qsz(38, 610, 724, 369),
            vlb: new qsz(100, 53, 525, 50),
            jth: new qsz(186, 153, 332, 94),
            tgy: 360,
            bpu: 30,
            vlv: {
                _0: new qsz(2, 0, 90, 94),
                _1: new qsz(98, 0, 90, 94),
                _2: new qsz(194, 0, 90, 94),
                _3: new qsz(290, 0, 90, 94),
                _4: new qsz(386, 0, 90, 94),
                _5: new qsz(482, 0, 90, 94),
                _6: new qsz(578, 0, 90, 94),
                _7: new qsz(674, 0, 90, 94),
                _8: new qsz(770, 0, 90, 94),
                _9: new qsz(866, 0, 90, 94),
                _cm: new qsz(962, 0, 28, 94),
                _dt: new qsz(999, 0, 28, 94),
                _sp: new qsz(1036, 0, 28, 94)
            }
        }
    }
}
zgu.prototype = new hjr;

function upk() {
    this.lye = false;
    this.fbx = true;
    this.era = true;
    this.canvas = {
        eso: new qsz(0, 0, 960, 630)
    };
    this.gfy = {
        eso: new qsz(),
        iwp: 0,
        xbz: 0
    };
    this.xiv = {
        eso: new qsz(160, 30, 800, 600),
        nlj: 0
    };
    this.pbw = {
        pwt: new qsz(460, 25, 500, 34),
        rgi: new qsz(5, 2, 160, 30),
        aft: new qsz(170, 2, 160, 30),
        dqc: new qsz(335, 2, 160, 30),
        pak: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.itu = {
        xiv: {
            eso: new qsz(0, 0, 640, 460),
            qmj: new qsz(6, 416, 628, 38),
            opv: new qsz(6, 420, 628, 17),
            mvo: new qsz(64, 442, 512, 7),
            oyb: new qsz(6, 364, 628, 90),
            rtn: new qsz(140, 384, 360, 70),
            fontSize: 18,
            wam: 20,
            eai: 30,
            nnz: 6,
            mjg: 12,
            zaf: 6,
            ehq: 3
        },
        tdz: {
            eso: new qsz(0, 0, 960, 630),
            qmj: new qsz(),
            opv: new qsz(),
            mvo: new qsz(280, 431, 400, 8),
            oyb: new qsz(180, 380, 600, 90),
            rtn: new qsz(350, 400, 260, 70),
            fontSize: 18,
            wam: 24,
            eai: 20,
            nnz: 0,
            mjg: 12,
            zaf: 7,
            ehq: 0
        }
    };
    this.gdk = {
        eso: new qsz(160, 0, 800, 30),
        fontSize: 16,
        cqo: 26,
        vvz: 15,
        ayo: 160,
        mjg: 2,
        zaf: 2,
        gjq: 2,
        vcs: 0
    };
    this.ivg = {};
    this.qyn = {
        eso: new qsz(0, 0, 960, 630),
        pwt: new qsz(0, 0, 160, 630),
        pak: {
            jal: 0,
            dhi: 0,
            mjg: 0,
            pzu: 0,
            uqx: 0,
            foy: 8,
            ccr: 16,
            nlj: 4
        },
        dci: new qsz(160, 50, 800, 40),
        poj: new qsz(160, 130, 800, 40),
        pvw: new qsz(160, 170, 800, 40),
        hjg: new qsz(160, 210, 800, 40),
        rsu: new qsz(385, 305, 350, 100),
        iou: new qsz(360, 510, 400, 40),
        vxj: {
            gjj: new qsz(10, 455, 140, 100),
        },
        ysu: {
            gjj: new qsz(10, 355, 140, 100),
            bgx: new qsz(10, 165, 140, 100)
        },
        fbk: 36,
        fontSize: 30,
        dfv: 22,
        zaf: 3,
        mjg: 5,
        nlj: 2,
        dir: 3,
        ect: 10
    };
    this.nwv = {
        eso: new qsz(160, 30, 800, 600),
        nlj: 0,
        ccr: 0,
        duk: 50,
        zyi: 30,
        qvj: 30,
        nqm: new qsz(30, 180, 410, 60),
        mgm: new qsz(460, 180, 50, 60),
        yjz: new qsz(512, 180, 210, 60),
        lii: new qsz(724, 180, 50, 60),
        acv: new qsz(30, 310, 410, 60),
        zac: new qsz(460, 310, 50, 60),
        phn: new qsz(512, 310, 210, 60),
        agr: new qsz(724, 310, 50, 60),
        iop: new qsz(30, 440, 410, 60),
        rnn: new qsz(512, 440, 210, 60),
        vmy: new qsz(40, 530, 720, 50),
        xaq: new qsz(30, 120, 360, 60),
        lpq: new qsz(460, 120, 50, 60),
        sas: new qsz(512, 120, 210, 60),
        jdi: new qsz(724, 120, 50, 60),
        fgz: new qsz(40, 200, 760, 70),
        rhj: new qsz(30, 280, 410, 60),
        dsn: new qsz(460, 280, 50, 60),
        ggu: new qsz(512, 280, 210, 60),
        lpl: new qsz(724, 280, 50, 60),
        dxn: new qsz(30, 360, 410, 60),
        iry: new qsz(460, 360, 50, 60),
        wcm: new qsz(512, 360, 210, 60),
        oye: new qsz(724, 360, 50, 60),
        vbz: new qsz(30, 440, 410, 60),
        xge: new qsz(460, 440, 50, 60),
        one: new qsz(512, 440, 210, 60),
        fxa: new qsz(724, 440, 50, 60),
        qmj: new qsz(40, 530, 720, 50),
        goa: {
            txi: new qsz(0, 0, 267, 90),
            gyu: new qsz(267, 0, 266, 90),
            qia: new qsz(533, 0, 267, 90),
            mxm: new qsz()
        },
        ydk: {
            txi: new qsz(0, 0, 200, 90),
            cel: new qsz(200, 0, 200, 90),
            gyu: new qsz(400, 0, 200, 90),
            qia: new qsz(600, 0, 200, 90),
            mxm: new qsz()
        },
        usq: [new qsz(132, 205, 200, 160), new qsz(464, 205, 200, 160)],
        del: [new qsz(50, 205, 200, 160), new qsz(300, 205, 200, 160), new qsz(550, 205, 200, 160)],
        yed: [new qsz(132, 130, 200, 160), new qsz(464, 130, 200, 160), new qsz(132, 360, 200, 160), new qsz(464, 360, 200, 160)],
        vol: [new qsz(50, 130, 200, 160), new qsz(300, 130, 200, 160), new qsz(550, 130, 200, 160), new qsz(50, 360, 200, 160), new qsz(300, 360, 200, 160), new qsz(550, 360, 200, 160)],
        kqu: {
            ccr: 3,
            mjg: -10,
            zaf: -1,
            foy: 6,
            fontSize: 36,
            nlj: 0
        },
        hqp: {
            ccr: 3,
            mjg: 10,
            zaf: -1,
            foy: 6,
            fontSize: 36,
            nlj: 0
        },
        gdy: {
            fontSize: 36,
            mjg: 0,
            zaf: 0,
            foy: 10,
            ccr: 0,
            nlj: 0
        },
        rbk: {
            fontSize: 26,
            nnz: 5,
            ccr: 26,
            nlj: 4,
            ffx: 40
        },
        msq: {
            zyc: 16,
            jal: 40,
            tdr: 0,
            pzu: 0,
            nlj: 2,
            nnz: 3
        },
        efd: {
            zyc: 16,
            jal: 40,
            tdr: 0,
            pzu: 0,
            nlj: 2,
            nnz: 3
        },
        wcg: {
            opv: new qsz(50, 0, 360, 60),
            jqp: new qsz(0, 13, 30, 30),
            fontSize: 30,
            ccr: 0,
            nlj: 2
        }
    };
    this.ftt = {
        eso: new qsz(660, 30, 310, 60),
        dci: new qsz(60, 6, 240, 26),
        opv: new qsz(60, 34, 240, 20),
        ftx: new qsz(5, 11, 50, 38),
        ulf: new qsz(8, 2, 34, 34),
        zyc: 16,
        jal: 12,
        mpi: 24
    };
    this.mya = {
        eso: new qsz(280, 150, 560, 330),
        zyc: 26,
        fontSize: 20,
        tck: new qsz(515, 5, 40, 40),
        dci: new qsz(40, 5, 480, 30),
        iou: new qsz(20, 40, 520, 195),
        azb: new qsz(20, 265, 520, 54),
        pak: {
            fontSize: 20
        }
    };
    this.szg = {
        eso: [
            [new qsz(828, 30, 130, 44)],
            [new qsz(828, 30, 130, 44), new qsz(162, 30, 130, 44)],
            [new qsz(828, 30, 130, 23), new qsz(162, 30, 130, 23), new qsz(162, 51, 130, 23)],
            [new qsz(828, 30, 130, 23), new qsz(162, 30, 130, 23), new qsz(828, 51, 130, 23), new qsz(162, 51, 130, 23)]
        ],
        display: {
            jhf: new qsz(0, 0, 130, 44),
            ink: new qsz(0, 0, 130, 44),
            ikb: new qsz(),
            dci: new qsz(2, 3, 126, 19),
            jth: new qsz(8, 24, 114, 19),
            zyc: 16,
            dhi: 18,
            ahs: 0
        },
        vfx: {
            jhf: new qsz(0, 0, 130, 23),
            ink: new qsz(0, 0, 130, 23),
            ikb: new qsz(2, 2, 19, 19),
            dci: new qsz(),
            jth: new qsz(22, 3, 100, 19),
            zyc: 14,
            dhi: 18,
            ahs: 0
        },
        mve: {
            eso: new qsz(222, 110, 676, 372),
            jhf: new qsz(32, 10, 612, 351),
            ink: new qsz(0, 0, 676, 372),
            ikb: new qsz(301, 263, 74, 74),
            dci: new qsz(120, 58, 436, 56),
            jth: new qsz(32, 140, 612, 96),
            zyc: 68,
            dhi: 100,
            ahs: 0
        },
        xdt: {
            eso: new qsz(198, 90, 724, 369),
            vlb: new qsz(100, 53, 525, 50),
            jth: new qsz(186, 153, 332, 94),
            tgy: 340,
            bpu: 30,
            vlv: {
                _0: new qsz(2, 0, 90, 94),
                _1: new qsz(98, 0, 90, 94),
                _2: new qsz(194, 0, 90, 94),
                _3: new qsz(290, 0, 90, 94),
                _4: new qsz(386, 0, 90, 94),
                _5: new qsz(482, 0, 90, 94),
                _6: new qsz(578, 0, 90, 94),
                _7: new qsz(674, 0, 90, 94),
                _8: new qsz(770, 0, 90, 94),
                _9: new qsz(866, 0, 90, 94),
                _cm: new qsz(962, 0, 28, 94),
                _dt: new qsz(999, 0, 28, 94),
                _sp: new qsz(1036, 0, 28, 94)
            }
        }
    }
}
upk.prototype = new hjr;

function jhp() {
    this.lye = false;
    this.fbx = true;
    this.era = true;
    this.canvas = {
        eso: new qsz(0, 0, 960, 630)
    };
    this.gfy = {
        eso: new qsz(),
        iwp: 0,
        xbz: 0
    };
    this.xiv = {
        eso: new qsz(0, 30, 800, 600),
        nlj: 0
    };
    this.pbw = {
        pwt: new qsz(0, 25, 500, 34),
        rgi: new qsz(5, 2, 160, 30),
        aft: new qsz(170, 2, 160, 30),
        dqc: new qsz(335, 2, 160, 30),
        pak: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.itu = {
        xiv: {
            eso: new qsz(0, 0, 640, 460),
            qmj: new qsz(6, 416, 628, 38),
            opv: new qsz(6, 420, 628, 17),
            mvo: new qsz(64, 442, 512, 7),
            oyb: new qsz(6, 364, 628, 90),
            rtn: new qsz(140, 384, 360, 70),
            fontSize: 18,
            wam: 20,
            eai: 30,
            nnz: 6,
            mjg: 12,
            zaf: 6,
            ehq: 3
        },
        tdz: {
            eso: new qsz(0, 0, 960, 630),
            qmj: new qsz(),
            opv: new qsz(),
            mvo: new qsz(280, 431, 400, 8),
            oyb: new qsz(180, 380, 600, 90),
            rtn: new qsz(350, 400, 260, 70),
            fontSize: 18,
            wam: 24,
            eai: 20,
            nnz: 0,
            mjg: 12,
            zaf: 7,
            ehq: 0
        }
    };
    this.gdk = {
        eso: new qsz(0, 0, 800, 30),
        fontSize: 16,
        cqo: 26,
        vvz: 15,
        ayo: 160,
        mjg: 2,
        zaf: 2,
        gjq: 2,
        vcs: 0
    };
    this.ivg = {};
    this.qyn = {
        eso: new qsz(0, 0, 960, 630),
        pwt: new qsz(800, 0, 160, 630),
        pak: {
            jal: 0,
            dhi: 0,
            mjg: 0,
            pzu: 0,
            uqx: 0,
            foy: 8,
            ccr: 16,
            nlj: 4
        },
        dci: new qsz(0, 50, 800, 40),
        poj: new qsz(0, 130, 800, 40),
        pvw: new qsz(0, 170, 800, 40),
        hjg: new qsz(0, 210, 800, 40),
        rsu: new qsz(225, 305, 350, 100),
        iou: new qsz(200, 510, 400, 40),
        vxj: {
            gjj: new qsz(810, 455, 140, 100),
        },
        ysu: {
            gjj: new qsz(810, 355, 140, 100),
            bgx: new qsz(810, 165, 140, 100)
        },
        fbk: 36,
        fontSize: 30,
        dfv: 22,
        zaf: 3,
        mjg: 5,
        nlj: 2,
        dir: 3,
        ect: 10
    };
    this.nwv = {
        eso: new qsz(0, 30, 800, 600),
        nlj: 0,
        ccr: 0,
        duk: 50,
        zyi: 30,
        qvj: 30,
        nqm: new qsz(30, 180, 410, 60),
        mgm: new qsz(460, 180, 50, 60),
        yjz: new qsz(512, 180, 210, 60),
        lii: new qsz(724, 180, 50, 60),
        acv: new qsz(30, 310, 410, 60),
        zac: new qsz(460, 310, 50, 60),
        phn: new qsz(512, 310, 210, 60),
        agr: new qsz(724, 310, 50, 60),
        iop: new qsz(30, 440, 410, 60),
        rnn: new qsz(512, 440, 210, 60),
        vmy: new qsz(40, 530, 720, 50),
        xaq: new qsz(30, 120, 360, 60),
        lpq: new qsz(460, 120, 50, 60),
        sas: new qsz(512, 120, 210, 60),
        jdi: new qsz(724, 120, 50, 60),
        fgz: new qsz(40, 200, 760, 70),
        rhj: new qsz(30, 280, 410, 60),
        dsn: new qsz(460, 280, 50, 60),
        ggu: new qsz(512, 280, 210, 60),
        lpl: new qsz(724, 280, 50, 60),
        dxn: new qsz(30, 360, 410, 60),
        iry: new qsz(460, 360, 50, 60),
        wcm: new qsz(512, 360, 210, 60),
        oye: new qsz(724, 360, 50, 60),
        vbz: new qsz(30, 440, 410, 60),
        xge: new qsz(460, 440, 50, 60),
        one: new qsz(512, 440, 210, 60),
        fxa: new qsz(724, 440, 50, 60),
        qmj: new qsz(40, 530, 720, 50),
        goa: {
            txi: new qsz(0, 0, 267, 90),
            gyu: new qsz(267, 0, 266, 90),
            qia: new qsz(533, 0, 267, 90),
            mxm: new qsz()
        },
        ydk: {
            txi: new qsz(0, 0, 200, 90),
            cel: new qsz(200, 0, 200, 90),
            gyu: new qsz(400, 0, 200, 90),
            qia: new qsz(600, 0, 200, 90),
            mxm: new qsz()
        },
        usq: [new qsz(132, 205, 200, 160), new qsz(464, 205, 200, 160)],
        del: [new qsz(50, 205, 200, 160), new qsz(300, 205, 200, 160), new qsz(550, 205, 200, 160)],
        yed: [new qsz(132, 130, 200, 160), new qsz(464, 130, 200, 160), new qsz(132, 360, 200, 160), new qsz(464, 360, 200, 160)],
        vol: [new qsz(50, 130, 200, 160), new qsz(300, 130, 200, 160), new qsz(550, 130, 200, 160), new qsz(50, 360, 200, 160), new qsz(300, 360, 200, 160), new qsz(550, 360, 200, 160)],
        kqu: {
            ccr: 3,
            mjg: -10,
            zaf: -1,
            foy: 6,
            fontSize: 36,
            nlj: 0
        },
        hqp: {
            ccr: 3,
            mjg: 10,
            zaf: -1,
            foy: 6,
            fontSize: 36,
            nlj: 0
        },
        gdy: {
            fontSize: 36,
            mjg: 0,
            zaf: 0,
            foy: 10,
            ccr: 0,
            nlj: 0
        },
        rbk: {
            fontSize: 26,
            nnz: 5,
            ccr: 26,
            nlj: 4,
            ffx: 40
        },
        msq: {
            zyc: 16,
            jal: 40,
            tdr: 0,
            pzu: 0,
            nlj: 2,
            nnz: 3
        },
        efd: {
            zyc: 16,
            jal: 40,
            tdr: 0,
            pzu: 0,
            nlj: 2,
            nnz: 3
        },
        wcg: {
            opv: new qsz(50, 0, 360, 60),
            jqp: new qsz(0, 13, 30, 30),
            fontSize: 30,
            ccr: 0,
            nlj: 2
        }
    };
    this.ftt = {
        eso: new qsz(-10, 30, 310, 60),
        dci: new qsz(10, 6, 240, 26),
        opv: new qsz(10, 34, 240, 20),
        ftx: new qsz(255, 11, 50, 38),
        ulf: new qsz(8, 2, 34, 34),
        zyc: 16,
        jal: 12,
        mpi: 24
    };
    this.mya = {
        eso: new qsz(120, 150, 560, 330),
        zyc: 26,
        fontSize: 20,
        tck: new qsz(515, 5, 40, 40),
        dci: new qsz(40, 5, 480, 30),
        iou: new qsz(20, 40, 520, 195),
        azb: new qsz(20, 265, 520, 54),
        pak: {
            fontSize: 20
        }
    };
    this.szg = {
        eso: [
            [new qsz(668, 30, 130, 44)],
            [new qsz(668, 30, 130, 44), new qsz(2, 30, 130, 44)],
            [new qsz(668, 30, 130, 23), new qsz(2, 30, 130, 23), new qsz(2, 51, 130, 23)],
            [new qsz(668, 30, 130, 23), new qsz(2, 30, 130, 23), new qsz(668, 51, 130, 23), new qsz(2, 51, 130, 23)]
        ],
        display: {
            jhf: new qsz(0, 0, 130, 44),
            ink: new qsz(0, 0, 130, 44),
            ikb: new qsz(),
            dci: new qsz(2, 3, 126, 19),
            jth: new qsz(8, 24, 114, 19),
            zyc: 16,
            dhi: 18,
            ahs: 0
        },
        vfx: {
            jhf: new qsz(0, 0, 130, 23),
            ink: new qsz(0, 0, 130, 23),
            ikb: new qsz(2, 2, 19, 19),
            dci: new qsz(),
            jth: new qsz(22, 3, 100, 19),
            zyc: 14,
            dhi: 18,
            ahs: 0
        },
        mve: {
            eso: new qsz(62, 110, 676, 372),
            jhf: new qsz(32, 10, 612, 351),
            ink: new qsz(0, 0, 676, 372),
            ikb: new qsz(301, 263, 74, 74),
            dci: new qsz(120, 58, 436, 56),
            jth: new qsz(32, 140, 612, 96),
            zyc: 68,
            dhi: 100,
            ahs: 0
        },
        xdt: {
            eso: new qsz(38, 90, 724, 369),
            vlb: new qsz(100, 53, 525, 50),
            jth: new qsz(186, 153, 332, 94),
            tgy: 340,
            bpu: 30,
            vlv: {
                _0: new qsz(2, 0, 90, 94),
                _1: new qsz(98, 0, 90, 94),
                _2: new qsz(194, 0, 90, 94),
                _3: new qsz(290, 0, 90, 94),
                _4: new qsz(386, 0, 90, 94),
                _5: new qsz(482, 0, 90, 94),
                _6: new qsz(578, 0, 90, 94),
                _7: new qsz(674, 0, 90, 94),
                _8: new qsz(770, 0, 90, 94),
                _9: new qsz(866, 0, 90, 94),
                _cm: new qsz(962, 0, 28, 94),
                _dt: new qsz(999, 0, 28, 94),
                _sp: new qsz(1036, 0, 28, 94)
            }
        }
    }
}
jhp.prototype = new hjr;

function pfg() {
    this.csm = true;
    this.lye = true
}
pfg.prototype = new gpc;

function ctj() {
    this.gfy = {
        eso: new qsz(0, 20, 800, 600),
        iwp: 0,
        xbz: 0
    };
    this.gzh = {
        eso: new qsz(88, 70, 310, 310),
        pnd: 155,
        guo: 87,
        dws: 112.5,
        uxz: 17,
        iep: 78,
        zpk: 76,
        tdk: -1
    };
    this.oav = {
        eso: new qsz(0, 570, 800, 50),
        npg: {
            fontSize: 14,
            mjg: 0,
            zaf: 0,
            ccr: 6,
            foy: 6,
            nlj: 2
        },
        ptd: {
            tck: new qsz(5, 2, 70, 46),
            oil: new qsz(420, 2, 80, 46),
            pul: new qsz(515, 2, 80, 46),
            vii: new qsz(610, 2, 80, 46),
            nsq: new qsz(705, 2, 90, 46)
        },
        zxs: {
            jvh: new qsz(5, 2, 70, 46),
            tck: new qsz(80, 2, 70, 46),
            oil: new qsz(420, 2, 80, 46),
            pul: new qsz(515, 2, 80, 46),
            vii: new qsz(610, 2, 80, 46),
            nsq: new qsz(705, 2, 90, 46)
        }
    };
    this.ykd = {
        eso: new qsz(5, 20, 60, 550),
        vup: 54,
        nfe: 34,
        nlj: 2,
        kui: 4,
    };
    this.rcg = {
        eso: new qsz(133, 35, 220, 40)
    };
    this.fpa = {
        eso: new qsz(88, 90, 310, 310),
        pnd: 155,
        guo: 87,
        dws: 112.5,
        uxz: 17,
        iep: 78,
        zpk: 76,
        tdk: -1
    };
    this.fvf = {
        eso: new qsz(75, 415, 340, 25),
        opv: new qsz(0, 0, 340, 25),
        ohk: new qsz(0, 0, 340, 25),
        fontSize: 12,
        ogq: 4,
        prh: 3,
        kui: 2,
        nlj: 1
    };
    this.thb = {
        eso: new qsz(75, 486, 340, 22),
        fontSize: 12,
        nlj: 2,
        kui: 2
    };
    this.fni = {
        eso: new qsz(75, 440, 340, 46),
        qur: new qsz(0, 0, 130, 46),
        rsh: new qsz(130, 0, 135, 46),
        hwr: new qsz(265, 0, 75, 46),
        zyc: 14,
        jal: 22,
        nlj: 2,
        kui: 2,
        ogq: 3
    };
    this.kto = {
        eso: new qsz(75, 510, 340, 49),
        dxy: new qsz(0, 0, 68, 48),
        wle: new qsz(69, 0, 67, 48),
        ugu: new qsz(137, 0, 66, 48),
        dzl: new qsz(204, 0, 67, 48),
        zzh: new qsz(272, 0, 66, 48)
    };
    this.dut = {
        eso: new qsz(146, 415, 188, 92),
        kui: 3,
        nlj: 2
    };
    this.rlb = {
        eso: new qsz(133, 25, 220, 50),
        fontSize: 46,
        nlj: 2,
        kui: 3
    };
    this.faj = {
        eso: new qsz(420, 20, 377, 552),
        cou: new qsz(),
        mjg: 6,
        zaf: 3,
        vqg: 89,
        epd: 39,
        oni: 50,
        bzz: 39,
        ysy: 12,
        nmg: 8,
        ciq: {
            eso: new qsz(0, 0, 40, 40),
            fontSize: 12,
            ogq: 8
        },
        win: {
            width: 0,
            height: 0,
            fontSize: 0,
            nlj: 0,
            kui: 0
        },
        qyn: {
            fontSize: 12,
            nnz: 2
        },
        pak: {
            fontSize: 16,
            mjg: 0,
            zaf: 0,
            foy: 6,
            ccr: 3,
            nlj: 3
        }
    };
    this.gik = {
        eso: new qsz(420, 20, 377, 552),
        ciq: {
            eso: new qsz(0, 0, 40, 40),
            fontSize: 12,
            ogq: 8
        },
        win: {
            width: 30,
            height: 16,
            fontSize: 12,
            nlj: 0,
            kui: 2
        },
        ggh: [{
            rdl: new qsz(318, 261, 54, 34),
            ded: new qsz(286, 261, 31, 34),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 7,
                y: 86
            }, {
                x: 62,
                y: 94
            }, {
                x: 59,
                y: 102
            }, {
                x: 59,
                y: 122
            }, {
                x: 5,
                y: 122
            }, {
                x: 5,
                y: 95
            }],
            ded: [{
                x: 63,
                y: 95
            }, {
                x: 90,
                y: 99
            }, {
                x: 88,
                y: 104
            }, {
                x: 88,
                y: 122
            }, {
                x: 60,
                y: 122
            }, {
                x: 60,
                y: 102
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 316,
                y: 460
            }, {
                x: 370,
                y: 467
            }, {
                x: 366,
                y: 479
            }, {
                x: 358,
                y: 494
            }, {
                x: 348,
                y: 505
            }, {
                x: 300,
                y: 484
            }, {
                x: 306,
                y: 476
            }, {
                x: 312,
                y: 467
            }],
            ded: [{
                x: 283,
                y: 456
            }, {
                x: 314,
                y: 460
            }, {
                x: 311,
                y: 467
            }, {
                x: 304,
                y: 478
            }, {
                x: 298,
                y: 484
            }, {
                x: 270,
                y: 470
            }, {
                x: 277,
                y: 464
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 192, 54, 34),
            ded: new qsz(286, 192, 31, 34),
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 397, 54, 34),
            ded: new qsz(286, 397, 31, 34),
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 236, 54, 37),
            ded: new qsz(60, 236, 29, 37),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 178,
                y: 513
            }, {
                x: 178,
                y: 546
            }, {
                x: 125,
                y: 546
            }, {
                x: 136,
                y: 511
            }, {
                x: 148,
                y: 513
            }],
            ded: [{
                x: 178,
                y: 491
            }, {
                x: 178,
                y: 512
            }, {
                x: 146,
                y: 512
            }, {
                x: 137,
                y: 510
            }, {
                x: 144,
                y: 489
            }, {
                x: 155,
                y: 491
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 302,
                y: 69
            }, {
                x: 347,
                y: 47
            }, {
                x: 358,
                y: 58
            }, {
                x: 367,
                y: 73
            }, {
                x: 371,
                y: 85
            }, {
                x: 316,
                y: 92
            }, {
                x: 310,
                y: 81
            }],
            ded: [{
                x: 274,
                y: 82
            }, {
                x: 301,
                y: 70
            }, {
                x: 310,
                y: 80
            }, {
                x: 315,
                y: 952
            }, {
                x: 283,
                y: 96
            }, {
                x: 279,
                y: 90
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 348, 54, 37),
            ded: new qsz(60, 348, 29, 37),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 145,
                y: 38
            }, {
                x: 132,
                y: 3
            }, {
                x: 186,
                y: 3
            }, {
                x: 186,
                y: 37
            }, {
                x: 154,
                y: 37
            }],
            ded: [{
                x: 152,
                y: 60
            }, {
                x: 144,
                y: 39
            }, {
                x: 186,
                y: 39
            }, {
                x: 186,
                y: 60
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 273, 54, 37),
            ded: new qsz(60, 273, 29, 37),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 5,
                y: 424
            }, {
                x: 59,
                y: 424
            }, {
                x: 59,
                y: 446
            }, {
                x: 61,
                y: 454
            }, {
                x: 6,
                y: 461
            }, {
                x: 5,
                y: 454
            }],
            ded: [{
                x: 60,
                y: 424
            }, {
                x: 89,
                y: 424
            }, {
                x: 89,
                y: 444
            }, {
                x: 90,
                y: 451
            }, {
                x: 62,
                y: 454
            }, {
                x: 60,
                y: 448
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 124, 54, 34),
            ded: new qsz(286, 124, 31, 34),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 26,
                y: 501
            }, {
                x: 74,
                y: 479
            }, {
                x: 85,
                y: 489
            }, {
                x: 98,
                y: 498
            }, {
                x: 66,
                y: 530
            }, {
                x: 53,
                y: 523
            }, {
                x: 37,
                y: 512
            }],
            ded: [{
                x: 75,
                y: 479
            }, {
                x: 100,
                y: 468
            }, {
                x: 108,
                y: 474
            }, {
                x: 117,
                y: 480
            }, {
                x: 99,
                y: 498
            }, {
                x: 87,
                y: 490
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 73,
                y: 18
            }, {
                x: 106,
                y: 49
            }, {
                x: 92,
                y: 57
            }, {
                x: 78,
                y: 68
            }, {
                x: 29,
                y: 47
            }, {
                x: 40,
                y: 36
            }, {
                x: 58,
                y: 25
            }],
            ded: [{
                x: 107,
                y: 50
            }, {
                x: 125,
                y: 66
            }, {
                x: 114,
                y: 73
            }, {
                x: 104,
                y: 79
            }, {
                x: 78,
                y: 68
            }, {
                x: 87,
                y: 61
            }, {
                x: 96,
                y: 55
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 329, 54, 34),
            ded: new qsz(286, 329, 31, 34),
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 162, 54, 37),
            ded: new qsz(60, 162, 29, 37),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 222,
                y: 514
            }, {
                x: 238,
                y: 512
            }, {
                x: 253,
                y: 509
            }, {
                x: 264,
                y: 506
            }, {
                x: 294,
                y: 537
            }, {
                x: 277,
                y: 542
            }, {
                x: 252,
                y: 547
            }, {
                x: 234,
                y: 547
            }],
            ded: [{
                x: 215,
                y: 491
            }, {
                x: 230,
                y: 489
            }, {
                x: 244,
                y: 485
            }, {
                x: 263,
                y: 505
            }, {
                x: 250,
                y: 509
            }, {
                x: 233,
                y: 512
            }, {
                x: 222,
                y: 512
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 244,
                y: 4
            }, {
                x: 270,
                y: 7
            }, {
                x: 302,
                y: 16
            }, {
                x: 270,
                y: 47
            }, {
                x: 258,
                y: 44
            }, {
                x: 244,
                y: 40
            }, {
                x: 231,
                y: 38
            }],
            ded: [{
                x: 230,
                y: 39
            }, {
                x: 244,
                y: 40
            }, {
                x: 258,
                y: 44
            }, {
                x: 269,
                y: 49
            }, {
                x: 250,
                y: 67
            }, {
                x: 238,
                y: 63
            }, {
                x: 223,
                y: 60
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 362, 54, 34),
            ded: new qsz(286, 362, 31, 34),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 28,
                y: 48
            }, {
                x: 78,
                y: 69
            }, {
                x: 68,
                y: 80
            }, {
                x: 62,
                y: 93
            }, {
                x: 7,
                y: 85
            }, {
                x: 15,
                y: 66
            }],
            ded: [{
                x: 78,
                y: 69
            }, {
                x: 104,
                y: 80
            }, {
                x: 97,
                y: 88
            }, {
                x: 92,
                y: 97
            }, {
                x: 62,
                y: 93
            }, {
                x: 68,
                y: 81
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 318,
                y: 431
            }, {
                x: 373,
                y: 431
            }, {
                x: 373,
                y: 455
            }, {
                x: 371,
                y: 467
            }, {
                x: 316,
                y: 458
            }, {
                x: 318,
                y: 448
            }],
            ded: [{
                x: 286,
                y: 432
            }, {
                x: 318,
                y: 432
            }, {
                x: 318,
                y: 451
            }, {
                x: 315,
                y: 458
            }, {
                x: 283,
                y: 454
            }, {
                x: 286,
                y: 446
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 187,
                y: 4
            }, {
                x: 244,
                y: 4
            }, {
                x: 230,
                y: 38
            }, {
                x: 187,
                y: 38
            }],
            ded: [{
                x: 187,
                y: 38
            }, {
                x: 230,
                y: 38
            }, {
                x: 222,
                y: 60
            }, {
                x: 187,
                y: 60
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 311, 54, 37),
            ded: new qsz(60, 311, 29, 37),
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 199, 54, 37),
            ded: new qsz(60, 199, 29, 37),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 299,
                y: 484
            }, {
                x: 347,
                y: 506
            }, {
                x: 333,
                y: 518
            }, {
                x: 312,
                y: 530
            }, {
                x: 294,
                y: 538
            }, {
                x: 264,
                y: 506
            }, {
                x: 275,
                y: 500
            }, {
                x: 288,
                y: 493
            }],
            ded: [{
                x: 270,
                y: 472
            }, {
                x: 298,
                y: 484
            }, {
                x: 287,
                y: 493
            }, {
                x: 276,
                y: 499
            }, {
                x: 264,
                y: 505
            }, {
                x: 245,
                y: 485
            }, {
                x: 254,
                y: 482
            }, {
                x: 263,
                y: 476
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 226, 54, 34),
            ded: new qsz(286, 226, 31, 34),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 136,
                y: 510
            }, {
                x: 124,
                y: 546
            }, {
                x: 103,
                y: 544
            }, {
                x: 86,
                y: 538
            }, {
                x: 66,
                y: 530
            }, {
                x: 100,
                y: 498
            }, {
                x: 110,
                y: 504
            }, {
                x: 124,
                y: 508
            }],
            ded: [{
                x: 143,
                y: 488
            }, {
                x: 136,
                y: 510
            }, {
                x: 124,
                y: 508
            }, {
                x: 110,
                y: 504
            }, {
                x: 100,
                y: 498
            }, {
                x: 118,
                y: 480
            }, {
                x: 126,
                y: 483
            }, {
                x: 136,
                y: 486
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 316,
                y: 93
            }, {
                x: 372,
                y: 86
            }, {
                x: 374,
                y: 94
            }, {
                x: 374,
                y: 124
            }, {
                x: 318,
                y: 124
            }, {
                x: 318,
                y: 102
            }],
            ded: [{
                x: 283,
                y: 98
            }, {
                x: 315,
                y: 93
            }, {
                x: 318,
                y: 101
            }, {
                x: 318,
                y: 124
            }, {
                x: 286,
                y: 124
            }, {
                x: 286,
                y: 105
            }],
            wwa: new qsz()
        }, {
            rdl: [{
                x: 270,
                y: 48
            }, {
                x: 303,
                y: 17
            }, {
                x: 318,
                y: 24
            }, {
                x: 337,
                y: 36
            }, {
                x: 348,
                y: 46
            }, {
                x: 300,
                y: 68
            }, {
                x: 290,
                y: 60
            }, {
                x: 280,
                y: 54
            }],
            ded: [{
                x: 251,
                y: 67
            }, {
                x: 270,
                y: 49
            }, {
                x: 281,
                y: 54
            }, {
                x: 292,
                y: 61
            }, {
                x: 300,
                y: 69
            }, {
                x: 272,
                y: 82
            }, {
                x: 267,
                y: 77
            }, {
                x: 259,
                y: 72
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 386, 54, 37),
            ded: new qsz(60, 386, 29, 37),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 132,
                y: 4
            }, {
                x: 144,
                y: 39
            }, {
                x: 131,
                y: 41
            }, {
                x: 116,
                y: 45
            }, {
                x: 107,
                y: 49
            }, {
                x: 73,
                y: 17
            }, {
                x: 89,
                y: 12
            }, {
                x: 112,
                y: 6
            }],
            ded: [{
                x: 144,
                y: 39
            }, {
                x: 152,
                y: 61
            }, {
                x: 138,
                y: 63
            }, {
                x: 126,
                y: 67
            }, {
                x: 107,
                y: 49
            }, {
                x: 117,
                y: 46
            }, {
                x: 131,
                y: 42
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 295, 54, 34),
            ded: new qsz(286, 295, 31, 34),
            wwa: new qsz()
        }, {
            rdl: new qsz(5, 124, 54, 37),
            ded: new qsz(60, 124, 29, 37),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 221,
                y: 512
            }, {
                x: 233,
                y: 547
            }, {
                x: 178,
                y: 547
            }, {
                x: 178,
                y: 512
            }],
            ded: [{
                x: 214,
                y: 490
            }, {
                x: 221,
                y: 512
            }, {
                x: 178,
                y: 512
            }, {
                x: 178,
                y: 490
            }],
            wwa: new qsz()
        }, {
            rdl: new qsz(318, 158, 54, 34),
            ded: new qsz(286, 158, 31, 34),
            wwa: new qsz()
        }, {
            rdl: [{
                x: 6,
                y: 461
            }, {
                x: 62,
                y: 455
            }, {
                x: 64,
                y: 463
            }, {
                x: 69,
                y: 472
            }, {
                x: 74,
                y: 479
            }, {
                x: 25,
                y: 500
            }, {
                x: 18,
                y: 490
            }, {
                x: 10,
                y: 476
            }],
            ded: [{
                x: 62,
                y: 455
            }, {
                x: 90,
                y: 451
            }, {
                x: 94,
                y: 459
            }, {
                x: 101,
                y: 467
            }, {
                x: 75,
                y: 478
            }, {
                x: 69,
                y: 472
            }, {
                x: 64,
                y: 462
            }],
            wwa: new qsz()
        }, ],
        xyn: [{
            rdl: [{
                x: 185,
                y: 59
            }, {
                x: 223,
                y: 59
            }, {
                x: 236,
                y: 64
            }, {
                x: 241,
                y: 63
            }, {
                x: 261,
                y: 71
            }, {
                x: 274,
                y: 81
            }, {
                x: 281,
                y: 91
            }, {
                x: 286,
                y: 108
            }, {
                x: 286,
                y: 123
            }, {
                x: 244,
                y: 124
            }, {
                x: 236,
                y: 130
            }, {
                x: 231,
                y: 139
            }, {
                x: 231,
                y: 349
            }, {
                x: 243,
                y: 361
            }, {
                x: 285,
                y: 363
            }, {
                x: 285,
                y: 447
            }, {
                x: 281,
                y: 460
            }, {
                x: 261,
                y: 478
            }, {
                x: 247,
                y: 487
            }, {
                x: 177,
                y: 277
            }]
        }, {
            rdl: [{
                x: 88,
                y: 123
            }, {
                x: 177,
                y: 276
            }, {
                x: 142,
                y: 490
            }, {
                x: 128,
                y: 486
            }, {
                x: 109,
                y: 477
            }, {
                x: 97,
                y: 466
            }, {
                x: 88,
                y: 450
            }]
        }, {
            rdl: [{
                x: 88,
                y: 122
            }, {
                x: 89,
                y: 102
            }, {
                x: 103,
                y: 78
            }, {
                x: 124,
                y: 66
            }, {
                x: 150,
                y: 60
            }, {
                x: 185,
                y: 60
            }, {
                x: 177,
                y: 276
            }]
        }, {
            rdl: [{
                x: 143,
                y: 491
            }, {
                x: 178,
                y: 279
            }, {
                x: 245,
                y: 488
            }, {
                x: 215,
                y: 492
            }]
        }, {
            rdl: [{
                x: 287,
                y: 122
            }, {
                x: 287,
                y: 363
            }, {
                x: 247,
                y: 363
            }, {
                x: 236,
                y: 356
            }, {
                x: 230,
                y: 349
            }, {
                x: 230,
                y: 137
            }, {
                x: 236,
                y: 128
            }, {
                x: 246,
                y: 122
            }]
        }, ]
    };
    this.ciq = {
        fontSize: 14,
        dcp: 4,
        ogq: 10,
        nlj: 2,
        kui: 6
    };
    this.nmy = {
        eso: new qsz(86, 564, 54, 54)
    };
    this.xvm = {
        eso: new qsz(152, 564, 54, 54)
    };
    this.ual = {
        eso: new qsz(218, 564, 54, 54)
    };
    this.xgx = {
        eso: new qsz(284, 564, 54, 54)
    };
    this.php = {
        eso: new qsz(350, 564, 54, 54)
    };
    this.ayr = {
        eso: new qsz(0, 0, 40, 40),
        fontSize: 12,
        dcp: 0,
        ogq: 8,
        nlj: 0,
        kui: 0
    };
    this.fow = {
        eso: new qsz(0, 20, 800, 600),
        zyc: 30,
        slb: 20,
        npg: {
            fontSize: 20,
            mjg: 0,
            zaf: 0,
            foy: 4,
            ccr: 6,
            nlj: 2
        },
        dci: new qsz(0, 5, 800, 50),
        tck: new qsz(250, 529, 300, 45),
        bnj: new qsz(250, 529, 300, 45),
        pnv: new qsz(420, 180, 300, 50),
        tqd: new qsz(420, 260, 300, 50),
        cou: new qsz(420, 340, 300, 50),
        oha: new qsz(430, 120, 300, 50),
        efr: new qsz(430, 185, 300, 50),
        tty: new qsz(430, 250, 300, 50),
        ddz: new qsz(430, 315, 300, 50),
        tec: new qsz(430, 380, 300, 50),
        vtb: {
            rxj: new qsz(70, 140, 332, 334),
            vnf: new qsz(80, 152, 311, 311),
            rcm: new qsz(137, 100, 219, 40)
        },
        fcx: {
            nen: 22,
            aji: new qsz(100, 120, 600, 50),
            blx: new qsz(100, 200, 600, 50),
            pbp: new qsz(100, 280, 600, 50),
            pls: new qsz(100, 360, 600, 50),
            oqk: new qsz(100, 440, 600, 50),
        },
        xyn: {
            lcz: new qsz(90, 80, 300, 300),
            nen: 20,
            opv: new qsz(90, 430, 300, 80)
        },
        pes: {
            lcz: new qsz(60, 53, 673, 475),
            aft: new qsz(655, 66, 80, 34),
            rtr: [new qsz(367, 102, 30, 34), new qsz(412, 102, 220, 34), new qsz(615, 102, 50, 34), new qsz(655, 102, 80, 34)],
            nux: [new qsz(367, 138, 30, 34), new qsz(412, 138, 220, 34), new qsz(615, 138, 50, 34), new qsz(655, 138, 80, 34)],
            wsv: [new qsz(367, 174, 30, 34), new qsz(412, 174, 220, 34), new qsz(615, 174, 50, 34), new qsz(655, 174, 80, 34)],
            bln: [new qsz(367, 210, 30, 34), new qsz(412, 210, 220, 34), new qsz(615, 210, 50, 34), new qsz(655, 210, 80, 34)],
            xul: [new qsz(367, 246, 30, 34), new qsz(412, 246, 220, 34), new qsz(615, 246, 50, 34), new qsz(655, 246, 80, 34)],
            wru: [new qsz(367, 282, 30, 34), new qsz(412, 282, 220, 34), new qsz(615, 282, 50, 34), new qsz(655, 282, 80, 34)],
            nmr: [new qsz(367, 318, 30, 34), new qsz(412, 318, 220, 34), new qsz(615, 318, 50, 34), new qsz(655, 318, 80, 34)],
            yeq: [new qsz(367, 354, 30, 34), new qsz(412, 354, 220, 34), new qsz(615, 354, 50, 34), new qsz(655, 354, 80, 34)],
            oxw: [new qsz(367, 390, 30, 34), new qsz(412, 390, 220, 34), new qsz(615, 390, 50, 34), new qsz(655, 390, 80, 34)],
            zgt: [new qsz(367, 426, 30, 34), new qsz(412, 426, 220, 34), new qsz(615, 426, 50, 34), new qsz(655, 426, 80, 34)],
            pyr: new qsz(380, 484, 342, 40)
        }
    };
    this.wqz = {
        eso: new qsz(180, 70, 440, 500),
        rcm: new qsz(),
        opv: new qsz(50, 10, 340, 30),
        knm: new qsz(0, 40, 440, 400),
        jbb: new qsz(10, 84, 150, 40),
        qur: new qsz(10, 133, 150, 40),
        hwr: new qsz(10, 182, 150, 40),
        ksi: new qsz(10, 231, 150, 40),
        fontSize: 28,
        kui: 10,
        nlj: 3,
        kvh: new qsz(),
        wtw: new qsz(183, 445, 75, 48),
        xyi: new qsz(295, 445, 75, 48),
        ecr: new qsz(70, 445, 75, 48),
        npg: {
            fontSize: 14,
            mjg: 0,
            zaf: 0,
            ccr: 4,
            foy: 3,
            nlj: 2
        },
        kbl: {
            fontSize: 12,
            mjg: 0,
            zaf: 0,
            ccr: 3,
            foy: 3,
            nlj: 0
        },
        fni: {
            zyc: 12,
            jal: 18,
            kui: 3,
            nlj: 2
        },
        faj: {
            eso: new qsz(350, 126, 260, 368),
            cou: new qsz(),
            mjg: 3,
            zaf: 3,
            vqg: 61,
            epd: 26,
            oni: 36,
            bzz: 26,
            ysy: 5,
            nmg: 7,
            ciq: {
                eso: new qsz(0, 0, 26, 26),
                fontSize: 9,
                ogq: 4
            },
            win: {
                width: 0,
                height: 0,
                fontSize: 0,
                nlj: 0,
                kui: 0
            },
            qyn: {
                fontSize: 0,
                nnz: 0
            },
            pak: {
                fontSize: 16,
                mjg: 0,
                zaf: 0,
                foy: 6,
                ccr: 5,
                nlj: 3
            }
        },
        dut: {
            eso: new qsz(190, 350, 150, 116),
            kui: 3,
            nlj: 2
        }
    };
    this.ljs = {
        eso: new qsz(275, 185, 250, 150),
        dci: new qsz(10, 5, 230, 30),
        opv: new qsz(10, 50, 230, 90),
        zyc: 24,
        jal: 18,
        kui: 4,
        nlj: 2
    }
}
ctj.prototype = new pfg;
var tlg = {
    language: {
        EN: "en",
        RU: "ru",
        EE: "et",
        ES: "es",
        DE: "de",
        TR: "tr",
        CZ: "cs",
        GR: "el",
        AT: "at",
        US: "us",
        BG: "bg",
        CO: "co",
        CL: "cl",
        MX: "mx",
        VE: "ve",
        BR: "br",
        GE: "ka",
        HU: "hu",
        RO: "ro",
        PT: "pt",
        FR: "fr",
        HR: "hr",
        IT: "it",
        SE: "sv",
        MK: "mk",
        PL: "pl"
    },
    fcw: {
        fch: 0,
        pcn: 1,
        cce: 2,
        vli: 3,
        ulq: 4,
        yfz: 5,
        lvx: 10,
        pdc: 11,
        qqh: 12,
        llm: 13,
        zxb: 14,
        rkz: 15,
        tzt: 16
    },
    os: {
        fwm: 0,
        ywk: 1,
        oru: 2,
        tly: 3,
        ltz: 4
    },
    ore: {
        usd: 1,
        lqr: 3,
        ugy: 4,
        stl: 5,
        lwq: 7,
        njn: 8,
        dnt: 11,
        slp: 13,
        dwt: 14,
        xky: 6,
        ksk: 9,
        twg: 10
    },
    itx: {
        wmc: 1,
        dmo: 2,
        plz: 4,
        qvb: 8,
        zol: 16,
        vir: 32
    },
    cvg: {
        wox: 1,
        tnc: 2,
        zmu: 3,
        suk: 4,
        yur: 5,
        bue: 6,
        qki: 7,
        sgv: 94,
        uag: 95,
        pvd: 96,
        feu: 97,
        hxy: 98,
        tsh: 99,
        roulette: {
            okt: 2,
            dhe: 9,
            oxf: 10
        }
    },
    ui: {
        ydh: "minimal",
        gwg: "modern",
        ugy: "classic"
    },
    leb: {
        hdh: "auto",
        bzu: "left",
        dxt: "right"
    },
    itu: {
        cii: 0,
        epi: 4
    },
    szg: {
        egr: {
            vly: "ji",
            wfk: "jv",
            ygs: "jh"
        }
    },
    sob: {
        ccp: {
            img: 1,
            hdg: 2
        },
        upa: {
            nyj: 1,
            yqp: 2,
            aup: 3
        }
    },
    nmm: {
        flq: 0,
        mbg: 1
    }
};
tlg.shx = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += tlg.itx.wmc
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += tlg.itx.dmo
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += tlg.itx.qvb
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.zfz = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.zfz();
                if (!e.start) {
                    e.start = e.noteOn
                }
                if (!e.stop) {
                    e.stop = e.noteOff
                }
                return e
            }
        }
        if (window.requestAnimationFrame) {
            window.upo = window.requestAnimationFrame;
            window.onu = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.upo; ++a) {
            window.upo = window[g[a] + "RequestAnimationFrame"];
            window.onu = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.upo || !window.onu) {
            window.upo = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.onu) {
            window.onu = function(e) {
                clearTimeout(e)
            }
        }
        if (window.MozWebSocket) {
            window.WebSocket = window.MozWebSocket
        }
        if (navigator.browserLanguage) {
            navigator.language = navigator.browserLanguage
        }
    } catch (c) {
        console.error(c.cvg)
    }
    return f
})();

function sqn() {
    var a = {};
    this.err = 1;
    this.shf = 1;
    this.phz = 0.6;
    this.tlr = 0.4;
    this.wem = function() {};
    this.rvg = function(b, c) {
        a[b] = c
    };
    this.oih = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.err
        }
    }
}

function qkd() {
    this.audio = {
        iih: 65,
        ydo: -1,
        value: "A",
        oyy: null
    };
    this.nhf = {
        iih: 70,
        ydo: 122,
        value: "F",
        oyy: "F11"
    };
    this.wqz = {
        iih: 72,
        ydo: -1,
        value: "H",
        oyy: null
    };
    this.qyn = {
        iih: 83,
        ydo: -1,
        value: "S",
        oyy: null
    };
    this.obo = {
        iih: 68,
        ydo: -1,
        value: "D",
        oyy: null
    };
    this.ok = {
        iih: 13,
        ydo: -1,
        value: "OK",
        oyy: null
    };
    this.gzt = [this.audio, this.nhf, this.wqz, this.qyn, this.obo, this.ok]
}

function pgw() {
    var o = this;
    this.pmx = false;
    this.yji = null;
    this.cgo = false;
    this.ypk = false;
    var f = {};
    var i = {};
    var d = [];
    var a = [];
    var k = [];
    var j = 30;
    var g = 0;
    var b = 0;
    var e = 0;
    var m = [];
    var l = null;
    var c = false;
    var n = false;
    this.wem = function() {
        this.ddy();
        this.tks();
        this.cgo = false;
        this.ypk = false
    };
    this.ddy = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.yji = webAudioEngine.createGain();
            this.yji.connect(webAudioEngine.destination);
            this.pmx = true
        } catch (p) {
            this.pmx = false
        }
    };
    this.tks = function() {
        m = tlg.tpm.qmt()
    };
    this.ice = function(p) {
        l = p
    };
    this.bgn = function(p) {
        c = p
    };
    this.cla = function(t, s, p, q) {
        var r = new ecj(t);
        r.wem(this.pmx, s, p, l.oih(t));
        i[t] = r;
        k.push(r);
        d.push({
            zrn: r,
            rdl: q,
            nfl: o.iff,
            nbf: m
        })
    };
    this.sco = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            zrn: p,
            rdl: q,
            nfl: null
        })
    };
    this.ixz = function(q, p) {
        d.unshift({
            zrn: null,
            rdl: q,
            nfl: o.wba,
            dpf: p
        })
    };
    this.yqj = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.isz(d.shift())
        }
    };
    this.start = function() {
        if (!o.cgo) {
            return
        }
        o.cgo = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.isz(a.shift())
        }
    };
    this.qxr = function() {
        b++;
        if (o.tyq()) {
            o.cgo = true;
            tlg.xiv.glu()
        }
    };
    this.hcx = function() {
        o.kxg()
    };
    this.ybp = function() {
        o.ypk = true;
        o.kxg()
    };
    this.kxg = function() {
        b++;
        o.xva();
        if (o.tyq()) {
            o.wub()
        } else {
            o.zqx()
        }
    };
    this.xva = function() {
        var p = tlg.xiv.hhv.djj("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.jlg(e)
            }
        }
    };
    this.wub = function() {
        var q = tlg.xiv.hhv.djj("loading");
        if (o.ypk) {
            tlg.xiv.huc(tlg.xiv.language.iyk);
            var p = confirm(tlg.xiv.language.ouf);
            if (p == true) {
                tlg.xiv.skp = false;
                o.pzb();
                tlg.xiv.zze()
            } else {
                if (tlg.xiv.hqn) {
                    tlg.xiv.hqn.hef({
                        sender: tlg.xiv.zyr,
                        lang: tlg.tcn.jlu("sessionValue1").toUpperCase(),
                        data: {
                            success: false
                        }
                    })
                }
                setTimeout(tlg.xiv.bri, 1000)
            }
        } else {
            if (!tlg.xiv.zpe) {
                e = 100;
                if (q) {
                    q.jlg(e)
                }
                if (c === true) {
                    q.aks()
                } else {
                    setTimeout(tlg.xiv.zze, 200)
                }
            }
        }
    };
    this.pmy = function() {
        return e
    };
    this.zqx = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].zrn instanceof Image || a[0].zrn instanceof ecj)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.isz(a.shift())
        }
    };
    this.tyq = function() {
        return (g > 0 && b == g)
    };
    this.isz = function(p) {
        if (p.zrn instanceof Image) {
            if (n === true) {
                this.uht(p.zrn, p.rdl)
            } else {
                this.rbp(p.zrn, p.rdl)
            }
        } else {
            if (p.zrn instanceof ecj) {
                this.pwo(p.zrn, p.rdl, p.nfl, p.nbf)
            } else {
                this.ewz(p.rdl, p.dpf, p.nfl)
            }
        }
    };
    this.uht = function(q, p) {
        q.onload = function() {
            tlg.xiv.dul.qxr()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + tlg.xiv.lsu
    };
    this.rbp = function(q, p) {
        q.onload = function() {
            tlg.xiv.dul.hcx()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            tlg.xiv.huc(tlg.xiv.language.wdo);
            setTimeout(tlg.xiv.bri, 3000)
        };
        q.src = p + "?v=" + tlg.xiv.lsu
    };
    this.pwo = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.ewz = function(s, p, t) {
        var q = new XMLHttpRequest();
        q.open("GET", s + p, true);
        q.responseType = "text";
        q.onreadystatechange = function() {
            if (q.readyState == 4 && (q.status == 200 || (q.status == 0 && q.responseText.length > 0))) {
                var u = JSON.parse(q.responseText);
                t(s, u)
            }
        };
        q.onerror = function() {
            console.error("can not load " + s + p);
            tlg.xiv.huc(tlg.xiv.language.wdo);
            setTimeout(tlg.xiv.bri, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            tlg.xiv.huc(tlg.xiv.language.wdo);
            setTimeout(tlg.xiv.bri, 3000)
        }
    };
    this.iff = function(q, p) {
        i[q].wzt = p
    };
    this.wba = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.yvc(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            tlg.xiv.huc(tlg.xiv.language.wdo);
            setTimeout(tlg.xiv.bri, 3000)
        };
        p.src = r + q.src + "?v=" + tlg.xiv.lsu
    };
    this.yvc = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.jcq(u[t].id, s)
        }
        tlg.xiv.dul.hcx()
    };
    this.ghm = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.jcq = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.mza = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.sil = function(p) {
        if (!i) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (i[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.une = function(p) {
        if (!f) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (f[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.ikn = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.hku = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.mpq = function(q, p) {
        if (i && i[q]) {
            i[q].yew(p)
        } else {}
    };
    this.htp = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].ish(l.oih(s) * q, r, p)
        }
    };
    this.jiv = function(p) {
        if (i && i[p]) {
            return i[p].xtc()
        }
        return 0
    };
    this.clu = function(p) {
        if (this.pmx) {
            this.yji.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.nqv = function(q) {
        if (this.pmx) {
            this.yji.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].yew(q)
                }
            }
        }
    };
    this.pzb = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function eds() {
    this.pdt = {};
    this.roh = {};
    this.ddm = [];
    this.wem = function() {
        this.pdt = {};
        this.roh = {};
        this.ddm = []
    };
    this.zss = function(b) {
        this.pdt[b] = b
    };
    this.sqh = function(f, e, d) {
        this.roh[f] = e;
        this.roh[f].fdn = [];
        if (d && this.pdt) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.pdt[d[c]]) {
                    this.roh[f].fdn.push(d[c])
                } else {}
            }
        }
        this.ddm.push(this.roh[f])
    };
    this.pfa = function() {
        var c = [];
        for (var d = 0, b = this.ddm.length; d < b; d++) {
            if (this.ddm[d] != null) {
                c.push(this.ddm[d])
            }
        }
        return c
    };
    this.djj = function(b) {
        if (this.roh && this.roh[b]) {
            return this.roh[b]
        }
        return null
    };
    this.tsx = function(g) {
        if (this.pdt && this.pdt[g]) {
            var d = [];
            for (var f = 0, b = this.ddm.length; f < b; f++) {
                for (var e = 0, c = this.ddm[f].fdn.length; e < c; e++) {
                    if (this.ddm[f].fdn[e] == g) {
                        d.push(this.ddm[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.bmk = function() {
        return this.pdt
    };
    this.cff = function(e) {
        var d = -1;
        if (this.roh && this.roh[e]) {
            for (var c = 0, b = this.ddm.length; c < b; c++) {
                if (this.ddm[c] == this.roh[e]) {
                    d = c;
                    this.roh[e] = null
                }
            }
        }
        if (d >= 0) {
            this.ddm.splice(d, 1)
        }
    };
    this.nfn = function(f) {
        if (this.pdt && this.pdt[f]) {
            this.pdt[f] = null;
            for (var e = 0, b = this.ddm.length; e < b; e++) {
                for (var d = 0, c = this.ddm[e].fdn.length; d < c; d++) {
                    if (this.ddm[e].fdn[d] == f) {
                        this.ddm[e].fdn.splice(d, 1)
                    }
                }
            }
        }
    };
    this.psg = function(e, d, c, b) {
        return a(this.djj(e), d, c, b)
    };
    this.ycc = function(f, d, c) {
        for (var e = 0, b = this.ddm.length; e < b; e++) {
            a(this.ddm[e], f, d, c)
        }
    };
    this.dsj = function(k, l, f, e) {
        if (this.pdt && this.pdt[k]) {
            for (var g = 0, b = this.ddm.length; g < b; g++) {
                for (var d = 0, c = this.ddm[g].fdn.length; d < c; d++) {
                    if (this.ddm[g].fdn[d] == k) {
                        a(this.ddm[g], l, f, e)
                    }
                }
            }
        }
    };
    
    function a(d, g, c, b) {
        if (!b) {
            b = Object
        }
        try {
            if ((d) && (d instanceof b) && (typeof g === "string" && g.indexOf("#") == 0)) {
                g = d[g.substring(1, g.length)];
                if (typeof g === "function") {
                    if (c) {
                        return g.apply(d, c)
                    } else {
                        return g.call(d)
                    }
                }
            }
        } catch (f) {
            console.error(f)
        }
    }
}

function ecj(b) {
    var a = this;
    this.llt = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.dar = false;
    this.wzt = null;
    this.pff = null;
    this.gqd = 0;
    this.tbr = 0;
    this.mrk = 0;
    this.okn = 0;
    this.ats = 30000;
    this.gle = "";
    this.ilr = "";
    this.isg = "";
    this.ilo = null;
    this.byj = 1;
    this.uoq = 0;
    this.vcw = -1;
    this.zxa = 0;
    this.hdl = 0;
    this.ewn = false;
    this.wem = function(c, f, d, e) {
        this.dar = c;
        if (e) {
            this.byj = e;
            this.volume = e
        }
        if (f) {
            this.llt = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.dar) {
            clearTimeout(this.vcw);
            if (this.wzt) {
                this.volume = (this.muted === true) ? 0 : tlg.fxx.value40 * this.byj;
                this.ewn = false;
                this.pff = webAudioEngine.createBufferSource();
                this.pff.buffer = this.wzt;
                this.pff.loop = this.loop;
                this.gqd = webAudioEngine.createGain();
                this.gqd.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.pff.connect(this.gqd);
                this.gqd.connect(tlg.xiv.dul.yji);
                this.pff.start(0, c);
                this.uoq = webAudioEngine.currentTime;
                if (this.llt) {
                    this.tbr = setTimeout(a.llt, a.wzt.duration * 1000)
                }
            }
        } else {
            if (this.pff) {
                if (this.loop) {
                    if (tlg.tpm.hyz != tlg.fcw.ulq && tlg.tpm.hyz != tlg.fcw.zxb) {
                        this.mrk = setInterval(a.uwu, a.pff.duration * 1000)
                    }
                }
                this.pff.currentTime = 0;
                this.pff.play()
            }
        }
    };
    this.uwu = function() {
        if (!a.pff.paused || (tlg.tpm.hyz != tlg.fcw.cce && tlg.tpm.hyz != tlg.fcw.qqh)) {
            a.pff.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.dar) {
                a.uoq = 0;
                if (a.pff) {
                    a.pff.stop(0);
                    a.pff = null
                }
                clearTimeout(a.tbr);
                if (a.vcw >= 0) {
                    clearTimeout(a.vcw);
                    a.vcw = -1
                }
            } else {
                if (a.pff) {
                    a.pff.currentTime = 0;
                    a.pff.pause();
                    clearInterval(a.mrk);
                    if (a.vcw >= 0) {
                        clearTimeout(a.vcw);
                        a.vcw = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.gle = d[0];
        if (d.length >= 2) {
            this.ilr = d[1];
            this.isg = e;
            this.ilo = c
        }
        e += this.gle + "?v=" + tlg.xiv.lsu;
        if (this.dar) {
            this.jbu(e, c)
        } else {
            this.khb(e)
        }
    };
    this.bxb = function() {
        if (this.dar) {
            this.jbu(this.isg + this.ilr + "?v=" + tlg.xiv.lsu, this.ilo)
        }
    };
    this.khb = function(c) {
        this.pff = new Audio();
        this.okn = setTimeout(function() {
            console.error("can not load audio " + c);
            tlg.xiv.dul.ybp()
        }, this.ats);
        this.pff.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.okn);
            tlg.xiv.dul.hcx();
            a.xln()
        }, false);
        this.pff.addEventListener("error", function() {
            clearTimeout(a.okn);
            console.error("can not load audio " + c);
            tlg.xiv.dul.ybp()
        }, false);
        this.pff.volume = tlg.fxx.value40 * this.volume;
        this.pff.src = c;
        this.pff.load()
    };
    this.jbu = function(f, g) {
        var c = new XMLHttpRequest();
        c.open("GET", f, true);
        c.responseType = "arraybuffer";
        c.onload = function() {
            webAudioEngine.decodeAudioData(c.response, function(e) {
                if (g) {
                    if (a.id) {
                        g(a.id, e)
                    } else {
                        g(e)
                    }
                }
                tlg.xiv.dul.hcx()
            }, function() {
                a.kfl("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.kfl("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.kfl("can not load audio from ", f)
        }
    };
    this.kfl = function(d, c) {
        console.error(d + c);
        if (a.ilr != "" && c.indexOf(a.ilr) < 0) {
            a.bxb()
        } else {
            tlg.xiv.dul.ybp()
        }
    };
    this.gbk = function(c) {
        this.llt = c;
        this.xln()
    };
    this.xln = function() {
        if (!this.dar) {
            if (this.llt) {
                if (this.pff) {
                    this.pff.addEventListener("ended", function() {
                        a.llt()
                    }, false)
                }
            }
            if (tlg.tpm.hyz == tlg.fcw.ulq || tlg.tpm.hyz == tlg.fcw.zxb) {
                if (this.loop) {
                    if (this.pff) {
                        this.pff.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.cwr = function() {
        if (!this.enq) {
            if (this.llt) {
                if (this.pff) {
                    this.pff.removeEventListener("ended", function() {
                        a.llt()
                    }, false)
                }
            }
            if (tlg.tpm.hyz == tlg.fcw.ulq || tlg.tpm.hyz == tlg.fcw.zxb) {
                if (this.loop) {
                    if (this.pff) {
                        this.pff.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ish = function(d, e, c) {
        if (this.dar === true && this.gqd) {
            this.volume = (this.muted === true) ? 0 : tlg.fxx.value40 * d * this.byj;
            if (e > 0) {
                this.gqd.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.gqd.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.vcw = setTimeout(this.stop, e)
            }
        } else {
            if (!this.dar && c === true) {
                this.vcw = setTimeout(this.stop, e)
            }
        }
    };
    this.yew = function(c) {
        this.muted = c;
        if (!this.dar) {
            if (this.pff && this.pff.readyState > 0) {
                this.pff.muted = c
            }
        } else {
            if (this.gqd) {
                this.gqd.gain.linearRampToValueAtTime((this.muted === true) ? 0 : tlg.fxx.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.dar) {
            if (this.pff) {
                this.pff.stop(0);
                clearTimeout(this.tbr);
                this.pff = null
            }
        } else {
            if (this.pff && this.pff.readyState > 0) {
                this.pff.currentTime = 0;
                this.pff.pause();
                if (this.llt) {
                    this.cwr(this.llt)
                }
                this.pff = null
            }
        }
    };
    this.xtc = function() {
        if (this.dar && this.uoq > 0) {
            return (webAudioEngine.currentTime - this.uoq) % this.wzt.duration
        }
        return 0
    }
}

function ufb() {
    var a = null;
    this.zho = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.zho = c;
        b = new WebSocket(this.zho);
        b.onopen = function(d) {
            a.zxo(d)
        };
        b.onclose = function(d) {
            a.cdm(d)
        };
        b.onmessage = function(d) {
            a.tfw(d)
        };
        b.onerror = function(d) {
            a.vul(d)
        }
    };
    this.eqm = function(c) {};
    this.udj = function(c) {
        b.send(c)
    };
    this.zxo = function(c) {
        this.udj("A/u25vlt")
    };
    this.cdm = function(c) {};
    this.tfw = function(c) {
        this.eqm(c.data)
    };
    this.vul = function(c) {}
}

function xtb() {
    var b = null;
    this.imc = null;
    this.shx = 0;
    this.aqt = -1;
    this.cvg = -1;
    this.hpn = -1;
    this.svg = 0;
    this.zho = "";
    this.bli = "";
    this.njy = "";
    this.lft = "";
    this.zyr = "";
    this.lsu = "";
    this.tie = "";
    this.qka = "";
    this.lne = [];
    this.lkc = [];
    this.tsc = [];
    this.jwl = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.wem = function(i) {
        this.imc = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.zho);
        c.onopen = function(j) {
            b.zxo(j)
        };
        c.onclose = function(j) {
            b.cdm(j)
        };
        c.onmessage = function(j) {
            b.tfw(j)
        };
        c.onerror = function(j) {
            b.vul(j)
        }
    };
    this.wge = function(i) {
        var j = parseInt(i.charAt(this.svg), 16);
        this.svg++;
        return j
    };
    this.ckg = function(i) {
        var k = 0;
        var j = i.charAt(this.svg);
        j += i.charAt(this.svg + 1);
        this.svg += 2;
        k = parseInt(j, 16);
        return k
    };
    this.lpp = function(m) {
        var j = this.yqf(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.svg), 16);
            this.svg += 1
        }
        return n
    };
    this.yqf = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.svg), 16);
        this.svg++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.svg);
            this.svg += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.qpt = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.svg), 16);
        this.svg++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.svg);
            this.svg += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.rhb = function(i) {
        var j = "";
        if (this.svg < i.length) {
            j = i.substring(this.svg, i.length)
        }
        return j
    };
    this.eqm = function(i) {};
    this.zyw = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === tlg.szg.egr.vly || u === tlg.szg.egr.wfk) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === tlg.szg.egr.vly && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.lne[p] = {
                                frt: t[0],
                                value: Number(t[1]),
                                ssd: t[2]
                            };
                            if (t.length >= 5) {
                                this.lne[p].ypt = t[3];
                                this.lne[p].iva = t[4]
                            }
                        }
                    } else {
                        if (u === tlg.szg.egr.wfk && t.length >= 2) {
                            for (var p = 0, r = this.lne.length; p < r; p++) {
                                if (this.lne[p].frt === t[0]) {
                                    this.lne[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === tlg.szg.egr.vly) {
                    s = [];
                    for (var p = 0, r = this.lne.length; p < r; p++) {
                        s.push({
                            frt: this.lne[p].frt,
                            value: (Number)(this.lne[p].frt.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.lne.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.lne[p].frt == s[n].frt) {
                                this.lne[p].eso = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === tlg.szg.egr.wfk) {
                        this.imc.ocz(this.lne)
                    }
                }
            } else {
                if (u === tlg.szg.egr.ygs) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            frt: t[0],
                            value: Number(t[1]),
                            jbw: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.bli = t[3];
                            q.dmg = t[4]
                        }
                        this.imc.gzj(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.imc.qtq.zzt()
        } else {
			window.parent.postMessage('CloseGame',"*");
            b.udj("A/u260");
            if (tlg.fxx.value66 > 0) {
                setTimeout(b.jzw, tlg.fxx.value66)
            }
        }
    };
    this.ndf = function(i) {
        if (this.imc.qtq.sjr) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.imc.qtq.iqa(e);
            setTimeout(function() {
                if (e < tlg.fxx.value46) {
                    b.imc.qtq.connect();
                    e++
                } else {
                    b.imc.qtq.ndx()
                }
            }, i)
        }
    };
    this.acz = function() {
        return g
    };
    this.div = function() {
        g = true;
        d = true;
        this.udj("A/u260");
		window.parent.postMessage('CloseGame',"*");
        if (tlg.fxx.value66 > 0) {
            setTimeout(this.jzw, tlg.fxx.value66)
        }
    };
    this.tmn = function() {
        g = true;
        f = true;
        this.udj("A/u260");
		window.parent.postMessage('CloseGame',"*");
        if (tlg.fxx.value66 > 0) {
            setTimeout(this.jzw, tlg.fxx.value66)
        }
    };
    this.zxo = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (tlg.xiv) ? tlg.tpm.hyz + "|" + tlg.xiv.xdi + "|" + j + "|" + m : "",
            k = (tlg.xiv && tlg.xiv.bna > 0) ? "," + tlg.xiv.bna : "";
        a = false;
        this.imc.foi();
        this.udj("A/u25" + this.bli + "," + this.njy + "," + this.lft + "," + this.zyr + "," + this.lsu + "," + this.tie + "," + this.qka + "," + l + k)
    };
    this.cdm = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (tlg.tpm.hyz == tlg.fcw.fch || tlg.tpm.hyz == tlg.fcw.lvx) {
                setTimeout(b.pvl, 500)
            } else {
                this.imc.krt()
            }
        } else {
            if (d) {
                this.imc.qtq.bkb()
            } else {
                if (f) {
                    this.imc.qtq.khf()
                } else {
                    this.imc.qtq.bri()
                }
            }
        }
    };
    this.tfw = function(i) {
        this.eqm(i.data)
    };
    this.vul = function(i) {};
    this.udj = function(i) {
        if (c.readyState >= 2) {
            this.cdm()
        }
        this.shx = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"RouletteRoyalAM"}';i=tmpPar;
        c.send(i)
    };
    this.pvl = function() {
        b.imc.krt()
    };
    this.jzw = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.cdm()
    }
}

function tbm() {
    this.qtq = null;
    this.eyb = null;
    this.zho = "";
    this.bli = "";
    this.njy = "";
    this.lft = "";
    this.zyr = "";
    this.tie = "";
    this.qka = "";
    this.foi = function() {};
    this.tfw = function(a) {
        this.qtq.wcn(a)
    };
    this.hdb = function() {};
    this.krt = function() {
        if (tlg.tcn.jlu("sessionActive")) {
            return
        }
        if (this.qtq != null && !this.eyb.acz()) {
            this.qtq.kut(this.qtq.language.abb, true)
        }
    };
    this.vul = function(a) {
        if (this.eyb.shx == 1 && a.toLowerCase().indexOf("active") == 0) {
            tlg.tcn.yjp("sessionActive", true)
        }
        if (this.qtq != null) {
            if (this.qtq.hqn) {
                this.qtq.hqn.hef({
                    sender: this.qtq.zyr,
                    lang: tlg.tcn.jlu("sessionValue1").toUpperCase(),
                    data: {
                        success: false
                    }
                })
            }
            this.qtq.kut(a, true)
        }
    };
    this.ndf = function(a) {
        this.eyb.ndf(a)
    };
    this.cih = function() {
        this.qtq.mli(this.eyb.jbw)
    };
    this.ocz = function(a) {
        this.qtq.ocz(a)
    };
    this.gzj = function(a) {
        this.qtq.gzj(a)
    };
    this.vgy = function() {};
    this.eyi = function() {
        this.qtq.eyi()
    };
    this.mfw = function() {
        this.qtq.mfw()
    }
}

function vzr() {
    var b = null;
    this.qtq = null;
    this.zho = "";
    this.bli = "";
    this.njy = "";
    this.lft = "";
    this.zyr = "";
    this.lsu = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.uqf = true;
    this.wav = false;
    this.zpi = false;
    this.svg = 0;
    this.nkc = 0;
    this.jnd = 0;
    this.gvo = 0;
    this.gbx = 0;
    this.wem = function(f, g) {
        this.zho = g;
        this.qtq = f;
        this.zpi = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.bli = j;
        this.njy = i;
        this.lft = k;
        this.zyr = g;
        this.lsu = f;
        this.uqf = true;
        this.wav = l;
        c = new WebSocket(this.zho);
        c.onopen = function(m) {
            b.zxo(m)
        };
        c.onclose = function(m) {
            b.cdm(m)
        };
        c.onmessage = function(m) {
            b.tfw(m)
        };
        c.onerror = function(m) {
            b.vul(m)
        }
    };
    this.wge = function(f) {
        var g = parseInt(f.charAt(this.svg), 16);
        this.svg++;
        return g
    };
    this.yqf = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.svg), 16);
        this.svg++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.svg);
            this.svg += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.eqm = function(i) {
        var k = this.qtq.hhv.djj("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.hpd()
            } else {
                this.svg = 0;
                this.hpn = this.wge(i);
                if (this.hpn == 0) {
                    var j = [];
                    j[0] = this.yqf(i);
                    j[1] = this.yqf(i);
                    j[2] = this.yqf(i);
                    j[3] = this.yqf(i);
                    j[4] = this.yqf(i);
                    j[5] = this.yqf(i);
                    j[6] = this.yqf(i);
                    if (tlg.fxx.value36) {
                        this.jnd = j[0];
                        this.gvo = j[1];
                        this.gbx = j[2]
                    } else {
                        if (tlg.fxx.value37) {
                            var g = tlg.fxx.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.wav) ? 100 : g * 60000 : (g - f) * 60000;
                            this.nkc = j[3] * 60000;
                            this.gvo = j[5];
                            this.gbx = j[6];
                            this.qtq.gir(f);
                            if (!this.zpi) {
                                this.zpi = true;
                                this.qtq.ztx(j[3] * 60000)
                            }
                            if (this.wav) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.wav) {
                        if (k) {
                            k.qld(this.jnd, this.gvo, this.gbx, this.nkc)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.wav) {
                        if (k) {
                            k.qld(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.hpd = function() {
        this.udj("A/u270," + this.zyr)
    };
    this.udj = function(f) {
        if (c && !e) {
            this.shx = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.uqf = f;
        if (c && c.readyState >= 2) {
            if (this.qtq && this.uqf) {
                this.qtq.uqf()
            }
        } else {
			window.parent.postMessage('CloseGame',"*");
            this.udj("A/u260");
            if (tlg.fxx.value66 > 0) {
                setTimeout(this.jzw, tlg.fxx.value66)
            }
        }
        e = true
    };
    this.zxo = function(f) {
        a = false;
        this.udj("A/u25" + this.bli + "," + this.njy + "," + this.lft + "," + d + "," + this.lsu)
    };
    this.cdm = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.wav) {
                if (this.qtq && this.uqf) {
                    this.qtq.uqf()
                }
            }
        }
    };
    this.tfw = function(f) {
        this.eqm(f.data)
    };
    this.vul = function(f) {};
    this.jzw = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.cdm()
    }
}

function tbo() {
    var a = null;
    this.qtq = null;
    this.zho = "";
    this.bli = "";
    this.njy = "";
    this.lft = "";
    this.zyr = "";
    this.tie = "";
    this.qka = "";
    this.gym = false;
    this.kvk = 0;
    this.ajr = -1;
    this.akn = "null";
    this.closed = false;
    var b = null;
    var e = false;
    var d = "HistoryManager";
    var c = 1;
    this.connect = function(i, l, k, m, f, j, g) {
        a = this;
        this.bli = l;
        this.njy = k;
        this.lft = m;
        this.zyr = i;
        this.lsu = f;
        this.tie = j;
        this.qka = g;
        e = false;
        this.closed = false;
        b = new WebSocket(this.zho);
        b.onopen = function(n) {
            a.zxo(n)
        };
        b.onclose = function(n) {
            a.cdm(n)
        };
        b.onmessage = function(n) {
            a.tfw(n)
        };
        b.onerror = function(n) {
            a.vul(n)
        }
    };
    this.eqm = function(f) {};
    this.sjz = function(f) {
        if (!tlg.fxx.value19) {
            this.udj("A/u259," + this.lft + "," + f)
        } else {
            if (tlg.tcn.jlu("sessionValue3")) {
                this.udj("A/u259," + tlg.tcn.jlu("sessionValue3") + "," + f)
            } else {
                this.udj("A/u259," + this.bli + "," + f)
            }
        }
    };
    this.emt = function(f) {
        if (!tlg.fxx.value19) {
            this.udj("A/u259," + this.lft + ",l" + f)
        } else {
            if (tlg.tcn.jlu("sessionValue3")) {
                this.udj("A/u259," + tlg.tcn.jlu("sessionValue3") + ",l" + f)
            } else {
                this.udj("A/u259," + this.bli + ",l" + f)
            }
        }
    };
    this.opi = function(f) {
        if (!tlg.fxx.value19) {
            this.udj("A/u259," + this.lft + ",n" + f)
        } else {
            if (tlg.tcn.jlu("sessionValue3")) {
                this.udj("A/u259," + tlg.tcn.jlu("sessionValue3") + ",n" + f)
            } else {
                this.udj("A/u259," + this.bli + ",n" + f)
            }
        }
    };
    this.xoe = function(f) {
        if (!tlg.fxx.value19) {
            this.udj("A/u259," + this.lft + ",p" + f)
        } else {
            if (tlg.tcn.jlu("sessionValue3")) {
                this.udj("A/u259," + tlg.tcn.jlu("sessionValue3") + ",p" + f)
            } else {
                this.udj("A/u259," + this.bli + ",p" + f)
            }
        }
    };
    this.udj = function(f) {
        this.shx = 0;
        b.send(f)
    };
    this.close = function() {
        e = true;
        if (b.readyState >= 2) {
            this.qtq.zzt()
        } else {
			window.parent.postMessage('CloseGame',"*");
            this.udj("A/u260");
            if (tlg.fxx.value66 > 0) {
                setTimeout(this.jzw, tlg.fxx.value66)
            }
        }
    };
    this.ndf = function() {
        if (this.qtq.sjr) {
            window.location.reload()
        } else {
            this.qtq.iqa(c);
            setTimeout(function() {
                if (c < tlg.fxx.value46) {
                    a.qtq.connect();
                    c++
                } else {
                    a.qtq.ndx()
                }
            }, tlg.fxx.value47)
        }
    };
    this.zxo = function(f) {
        this.closed = false;
        this.udj("A/u25" + this.bli + "," + this.njy + "," + this.lft + "," + d + "," + this.lsu + "," + this.tie + "," + this.qka)
    };
    this.cdm = function(f) {
        var g = "./" + this.zyr.toLowerCase() + ".html";
        if (this.closed) {
            return
        }
        this.closed = true;
        if (!e) {
            if (this.qtq != null) {
                this.qtq.kut(this.qtq.language.abb, true)
            }
        } else {
            if (tlg.fxx.value50.h === true && tlg.tcn.jlu("sessionValue5") != null) {
                window.location.href = decodeURIComponent(tlg.tcn.jlu("sessionValue5"))
            } else {
                g += tlg.tcn.cvo();
                window.location.href = g
            }
        }
    };
    this.tfw = function(f) {
        this.eqm(f.data)
    };
    this.vul = function(f) {};
    this.jzw = function() {
        if (b.readyState < 2) {
            b.close()
        }
        a.cdm()
    }
}

function qsz(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.ntk = function() {
        return this.x + this.width
    };
    this.yhj = function() {
        return this.y + this.height
    };
    this.zbx = function() {
        return this.x + this.width / 2
    };
    this.glw = function() {
        return this.y + this.height / 2
    };
    this.okq = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.btr = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function uma() {
    this.hyz = -1;
    this.nhu = -1;
    this.wgc = false;
    this.zwx = false;
    this.mql = false;
    this.qsy = false;
    this.bmp = false;
    this.ihc = false;
    this.jmr = false;
    this.wbj = true;
    this.lpf = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.wgc = true;
            this.mql = true;
            this.hyz = tlg.fcw.cce
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.mql = true
                }
                this.hyz = tlg.fcw.yfz
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.hyz = tlg.fcw.qqh;
                        this.mql = true
                    } else {
                        this.hyz = tlg.fcw.cce
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0 || this.hbi()) {
                            if (a.indexOf("Android") >= 0) {
                                this.hyz = tlg.fcw.tzt;
                                this.mql = true
                            } else {
                                this.hyz = tlg.fcw.pdc;
                                this.mql = true;
                                this.qsy = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.bmp = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.ihc = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.hyz = tlg.fcw.pcn
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.hyz = tlg.fcw.vli
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.hyz = tlg.fcw.rkz;
                                    this.mql = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.hyz = tlg.fcw.zxb;
                                        this.mql = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.hyz = tlg.fcw.zxb;
                                            this.mql = true
                                        } else {
                                            this.hyz = tlg.fcw.ulq
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.hyz = tlg.fcw.pdc;
                                    this.zwx = true;
                                    this.mql = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.hyz = tlg.fcw.pdc;
                                        this.zwx = true;
                                        this.mql = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.hyz = tlg.fcw.lvx;
                                            this.mql = true
                                        } else {
                                            this.hyz = tlg.fcw.fch
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.sys = function() {
        var a = navigator.language.split("-")[0];
        return a
    };
    this.xbs = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.nhu = tlg.os.fwm;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.jmr = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0 || (a.indexOf("Mac") >= 0 && this.hbi())) {
                this.nhu = tlg.os.tly
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.nhu = tlg.os.oru
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.nhu = tlg.os.ltz;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.wbj = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.nhu = tlg.os.ywk
                        }
                    }
                }
            }
        }
    };
    this.kff = function() {
        return this.ihc
    };
    this.uxv = function() {
        return (this.bmp && !this.ihc)
    };
    this.elh = function() {
        return this.qsy
    };
    this.adw = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.moy = function() {
        if (this.hyz == tlg.fcw.pdc) {
            return false
        }
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.hbi = function() {
        if (("ontouchstart" in window) || window.TouchEvent) {
            return true
        }
        return false
    };
    this.coo = function() {
        try {
            var a = document.createElement("canvas");
            if (!!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))) {
                return true
            } else {
                return false
            }
        } catch (b) {
            return false
        }
    };
    this.eoi = function() {
        return (this.fao() === true)
    };
    this.fao = function() {
        if ((screen.width <= tlg.fxx.value73.w && screen.height <= tlg.fxx.value73.h) || (screen.height <= tlg.fxx.value73.w && screen.width <= tlg.fxx.value73.h)) {
            return true
        }
        return false
    };
    this.xzw = function(i, j, k, n, e, b, f, l, m, a, d, g) {
        var c = "";
        if (!n) {
            n = 0
        }
        if (!e) {
            e = 0
        }
        if (!b) {
            b = 0
        }
        if (!f) {
            f = 0
        }
        c = "matrix(" + j + "," + b + "," + f + "," + k + "," + n + "," + e + ")";
        if (d) {
            c += " scaleX(+" + d + ")"
        }
        if (g) {
            c += " scaleY(+" + g + ")"
        }
        if (l) {
            c += " rotateX(+" + l + "deg)"
        }
        if (m) {
            c += " rotateY(+" + m + "deg)"
        }
        if (a) {
            c += " translateZ(+" + a + "px)"
        }
        if (i.style.MozTransform != undefined) {
            i.style.MozTransform = c
        } else {
            if (i.style.WebkitTransform != undefined) {
                i.style.WebkitTransform = c
            } else {
                if (i.style.OTransform != undefined) {
                    i.style.OTransform = c
                } else {
                    if (i.style.msTransform != undefined) {
                        i.style.msTransform = c
                    }
                }
            }
        }
    };
    this.rci = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.khm = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.rom = function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else {
                if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen()
                } else {
                    if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen()
                    } else {
                        if (document.documentElement.msRequestFullscreen) {
                            document.documentElement.msRequestFullscreen()
                        }
                    }
                }
            }
            return true
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else {
                        if (document.msExitFullScreen) {
                            document.msExitFullScreen()
                        }
                    }
                }
            }
            return false
        }
    };
    this.rfv = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.prr = function(b) {
        try {
            if (this.rfv() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.kdx = function() {
        try {
            if (this.rfv() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.xuq = function() {
        return false
    };
    this.uha = function(c, a) {
        var b = new XMLHttpRequest();
        if ("withCredentials" in b) {
            b.open(c, a, true)
        } else {
            if (typeof XDomainRequest != "undefined") {
                b = new XDomainRequest();
                b.open(c, a)
            } else {
                b = null
            }
        }
        return b
    };
    this.qmt = function() {
        var b = document.createElement("audio"),
            c = [];
        if (!!(b.canPlayType && b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))) {
            c.push(".ogg")
        }
        if (!!(b.canPlayType && b.canPlayType("audio/mpeg;").replace(/no/, ""))) {
            c.push(".mp3")
        }
        return c
    };
    this.der = function(q, o, f, l, k, a, p, d, r, g, n, j) {
        try {
            var m = 0,
                b = r,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            q.textAlign = "center";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a / 2, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a / 2, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.mex = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                l += r;
                a -= r
            }
            q.textAlign = "left";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.fwp = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                a -= r
            }
            q.textAlign = "right";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.lbj = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
        try {
            var l = 0,
                D = 0,
                E = 0,
                a = 0,
                g = [],
                f = "",
                C = 0,
                F = 0,
                A = 0,
                G = 1;
            var o = c;
            if (!d) {
                d = ""
            }
            if (!u) {
                u = "left"
            }
            r.save();
            r.textAlign = u;
            r.textBaseline = "bottom";
            r.fillStyle = t;
            r.font = d + " " + o + "px " + n;
            a = r.measureText(m).width / q;
            a = (a >= Math.round(a)) ? Math.round(a) + 1 : Math.round(a);
            if (o * a > p) {
                G = p / (o * a);
                o = Math.round(G * o) - 1;
                r.font = d + " " + o + "px " + n;
                a = r.measureText(m).width / q;
                a = (a > Math.round(a)) ? Math.round(a) + 1 : Math.round(a)
            }
            for (var v = A; v < m.length; v++) {
                f += m.charAt(v);
                l = r.measureText(f).width;
                if (m.charAt(v) == " " || m.charAt(v) == "|") {
                    C = v
                }
                if (v == m.length - 1) {
                    g[F] = m.substring(A, m.length)
                } else {
                    if (m.charAt(v) == "|") {
                        g[F] = m.substring(A, v);
                        F++;
                        A = v + 1;
                        f = m.substring(C + 1, v)
                    } else {
                        if (l >= q) {
                            g[F] = m.substring(A, C);
                            F++;
                            A = C + 1;
                            f = m.substring(C + 1, v)
                        }
                    }
                }
            }
            for (var v = 0; v < g.length; v++) {
                E = (u == "left") ? k : (u == "center") ? (k + q / 2) : k + q;
                if (b) {
                    D = j + (p + o) / (g.length + 1) * (v + 1)
                } else {
                    D = j + Math.round(o * 1.5 * (v + 1))
                }
                r.fillText(g[v], E, D);
                if (z && s) {
                    r.strokeStyle = z;
                    r.lineWidth = s;
                    r.strokeText(g[v], E, D)
                }
            }
            r.restore()
        } catch (B) {
            console.error(B)
        }
    };
    this.fjv = function(m, g, d, a, j, b, k, l, f) {
        try {
            var i = 0;
            m.save();
            if (l && f) {
                i = Math.round(f / 2);
                m.beginPath();
                m.moveTo(g + b + i, d + i);
                m.arcTo(g + a - i, d + i, g + a - i, d + b + i, b);
                m.arcTo(g + a - i, d + j - i, g + a - b - i, d + j - i, b);
                m.arcTo(g + i, d + j - i, g + i, d + j - b - i, b);
                m.arcTo(g + i, d + i, g + b + i, d + i, b);
                m.closePath()
            } else {
                m.beginPath();
                m.moveTo(g + b, d);
                m.arcTo(g + a, d, g + a, d + b, b);
                m.arcTo(g + a, d + j, g + a - b, d + j, b);
                m.arcTo(g, d + j, g, d + j - b, b);
                m.arcTo(g, d, g + b, d, b);
                m.closePath()
            }
            if (k) {
                m.fillStyle = k;
                m.fill()
            }
            if (l && f) {
                m.strokeStyle = l;
                m.lineWidth = f;
                m.stroke()
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.svk = function(n, i, f, a, k, c, m, b, l, g, o) {
        try {
            var j = 0;
            n.save();
            if (l && g) {
                j = Math.round(g / 2);
                n.beginPath();
                n.moveTo(i + c + j, f + j);
                n.arcTo(i + a - j, f + j, i + a - j, f + c + j, c);
                n.arcTo(i + a - j, f + k - j, i + a - c - j, f + k - j, c);
                n.arcTo(i + j, f + k - j, i + j, f + k - c - j, c);
                n.arcTo(i + j, f + j, i + c + j, f + j, c);
                n.closePath()
            } else {
                n.beginPath();
                n.moveTo(i + c, f);
                n.arcTo(i + a, f, i + a, f + c, c);
                n.arcTo(i + a, f + k, i + a - c, f + k, c);
                n.arcTo(i, f + k, i, f + k - c, c);
                n.arcTo(i, f, i + c, f, c);
                n.closePath()
            }
            if (m) {
                if (b) {
                    n.globalAlpha = b
                }
                n.fillStyle = m;
                n.fill()
            }
            if (l && g) {
                if (o) {
                    n.globalAlpha = o
                }
                n.strokeStyle = l;
                n.lineWidth = g;
                n.stroke()
            }
            n.restore()
        } catch (d) {
            console.error(d)
        }
    };
    this.ddt = function(o, d, k, j, n, l, f, p, q, g, m, c) {
        try {
            var b = Math.round(f / 2),
                i = 0,
                r = 1,
                a = 2,
                t = 3;
            o.save();
            o.beginPath();
            if (d === i) {
                o.moveTo(k + f, j + b);
                o.lineTo(k + n - b, j + (l) / 2 - b);
                o.bezierCurveTo(k + n - b, j + (l) / 2 - b, k + n, j + (l) / 2 + b, k + n - b, j + (l) / 2 + b);
                o.lineTo(k + f, j + l - b);
                o.bezierCurveTo(k + f, j + l - b, k, j + l, k, j + l - b);
                o.lineTo(k, j + b);
                o.bezierCurveTo(k, j + b, k + f, j, k + f, j + b)
            } else {
                if (d === r) {
                    o.moveTo(k + n - f, j + b);
                    o.lineTo(k + b, j + (l) / 2 - b);
                    o.bezierCurveTo(k + b, j + (l) / 2 - b, k, j + (l) / 2 + b, k + b, j + (l) / 2 + b);
                    o.lineTo(k + n - f, j + l - b);
                    o.bezierCurveTo(k + n - f, j + l - b, k + n, j + l, k + n, j + l - b);
                    o.lineTo(k + n, j + b);
                    o.bezierCurveTo(k + n, j + b, k + n - f, j, k + n - f, j + b)
                } else {
                    if (d === a) {
                        o.moveTo(k + n - b, j + f);
                        o.lineTo(k + n / 2 + b, j + l - b);
                        o.bezierCurveTo(k + n / 2 + b, j + l - b, k + n / 2 - b, j + l, k + n / 2 - b, j + l - b);
                        o.lineTo(k + b, j + f);
                        o.bezierCurveTo(k + b, j + f, k, j, k + b, j);
                        o.lineTo(k + n - b, j);
                        o.bezierCurveTo(k + n - b, j, k + n, j + f, k + n - b, j + f)
                    } else {
                        if (d === t) {
                            o.moveTo(k + n - b, j + l - f);
                            o.lineTo(k + n / 2 + b, j + b);
                            o.bezierCurveTo(k + n / 2 + b, j + b, k + n / 2 - b, j, k + n / 2 - b, j + b);
                            o.lineTo(k + b, j + l - f);
                            o.bezierCurveTo(k + b, j + l - f, k, j + l, k + b, j + l);
                            o.lineTo(k + n - b, j + l);
                            o.bezierCurveTo(k + n - b, j + l, k + n, j + l - f, k + n - b, j + l - f)
                        }
                    }
                }
            }
            o.closePath();
            if (p) {
                if (q) {
                    o.globalAlpha = q
                }
                o.fillStyle = p;
                o.fill()
            }
            if (g && m) {
                if (c) {
                    o.globalAlpha = c
                }
                o.strokeStyle = g;
                o.lineWidth = m;
                o.stroke()
            }
            o.restore()
        } catch (s) {
            console.error(s)
        }
    };
    this.csk = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
        try {
            var k = 0;
            q.save();
            if (n && i) {
                k = Math.round(i / 2);
                q.beginPath();
                q.moveTo(j + p + k, g + k);
                if (l > 0) {
                    q.arcTo(j + b - k, g + k, j + b - k, g + l + k, l)
                } else {
                    q.lineTo(j + b - k, g + k)
                }
                if (d > 0) {
                    q.arcTo(j + b - k, g + m - k, j + b - d - k, g + m - k, d)
                } else {
                    q.lineTo(j + b - k, g + m - k)
                }
                if (f > 0) {
                    q.arcTo(j + k, g + m - k, j + k, g + m - f - k, f)
                } else {
                    q.lineTo(j + k, g + m - k)
                }
                if (p > 0) {
                    q.arcTo(j + k, g + k, j + p + k, g + k, p)
                } else {
                    q.lineTo(j + k, g + k)
                }
                q.closePath()
            } else {
                q.beginPath();
                q.moveTo(j + p, g);
                if (l > 0) {
                    q.arcTo(j + b, g, j + b, g + l, l)
                } else {
                    q.lineTo(j + b, g)
                }
                if (d > 0) {
                    q.arcTo(j + b, g + m, j + b - d, g + m, d)
                } else {
                    q.lineTo(j + b, g + m)
                }
                if (f > 0) {
                    q.arcTo(j, g + m, j, g + m - f, f)
                } else {
                    q.lineTo(j, g + m)
                }
                if (p > 0) {
                    q.arcTo(j, g, j + p, g, p)
                } else {
                    q.lineTo(j, g)
                }
                q.closePath()
            }
            if (o) {
                if (a) {
                    q.globalAlpha = a
                }
                q.fillStyle = o;
                q.fill()
            }
            if (n && i) {
                if (r) {
                    q.globalAlpha = r
                }
                q.strokeStyle = n;
                q.lineWidth = i;
                q.stroke()
            }
            q.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.gxk = function(m, g, d, a, j, k, b, l, f, n) {
        try {
            var i = 0;
            m.save();
            if (k) {
                m.fillStyle = k;
                if (b) {
                    m.globalAlpha = b
                }
                m.fillRect(g, d, a, j)
            }
            if (l && f) {
                i = Math.round(f / 2);
                m.strokeStyle = l;
                if (n) {
                    m.globalAlpha = n
                }
                m.lineWidth = f;
                m.strokeRect(g + i, d + i, a - 2 * i, j - 2 * i)
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.qev = function(k, g, d, c, i, a, j, f, l) {
        try {
            k.save();
            k.beginPath();
            k.arc(g, d, c, 0, Math.PI * 2, false);
            k.closePath();
            if (i) {
                k.fillStyle = i;
                if (a) {
                    k.globalAlpha = a
                }
                k.fill()
            }
            if (j && f) {
                k.strokeStyle = j;
                if (l) {
                    k.globalAlpha = l
                }
                k.lineWidth = f;
                k.stroke()
            }
            k.restore()
        } catch (b) {
            console.error(b)
        }
    }
}

function ezd() {
    this.parent = null;
    this.context2D = null;
    this.rml = null;
    this.alo = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.guk = true;
    this.wdg = false;
    this.wem = function(a, d, c) {
        try {
            if (a) {
                this.x = a.x || 0;
                this.y = a.y || 0;
                this.width = a.width || 0;
                this.height = a.height || 0
            }
            if (d) {
                this.context2D = d
            } else {
                this.rml = document.createElement("canvas");
                this.rml.width = this.width;
                this.rml.height = this.height;
                this.context2D = this.rml.getContext("2d");
                if (c) {
                    this.alo = c
                }
            }
            this.wdg = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.ota = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.rml) {
                this.rml.width = this.width;
                this.rml.height = this.height
            }
            this.wdg = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.ler = function(a) {};
    this.qgh = function(a) {};
    this.xza = function(a, b) {
        this.guk = a;
        if (b && b === true) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
    };
    this.izz = function() {
        return (this.guk && !this.wdg)
    };
    this.jlg = function() {}
}

function npl() {
    this.vbv = null;
    this.kxv = null;
    this.vrq = -1;
    this.hhz = -1;
    this.oqu = false;
    this.wyo = false;
    this.dvx = false;
    this.nzv = 0;
    this.btx = 0;
    var a = 200;
    this.wem = function(c, f, d, b, e) {
        this.vbv = b;
        this.kxv = e;
        npl.prototype.wem.call(this, c, f, d)
    };
    this.pzi = function(b, d, c) {
        this.oqu = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.izz()) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
        if (this.oqu === true && c === true) {
            clearTimeout(this.nzv);
            this.nzv = setTimeout(this.sed, a)
        }
    };
    this.hah = function() {
        return this.oqu
    };
    this.dct = function(b, c) {
        this.dvx = b;
        c = (c === false) ? false : true;
        clearTimeout(this.btx);
        if (this.dvx === true && c === true) {
            this.btx = setTimeout(this.anj, a)
        }
    };
    this.xww = function() {
        return this.dvx
    };
    this.vjp = function(b, c) {
        this.kxv = b;
        if (c && c === true && this.izz()) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
    };
    this.hoe = function(b) {
        this.wyo = b
    };
    this.rjo = function() {
        return this.wyo
    };
    this.wuk = function() {};
    this.anj = function() {};
    this.sed = function() {}
}
npl.prototype = new ezd;

function dwj() {
    var a = this;
    this.lfx = null;
    this.value = "";
    this.odt = false;
    this.lyp = "round";
    this.btp = null;
    this.apl = "bold";
    this.ykb = null;
    this.dfo = null;
    this.jmg = null;
    this.dww = null;
    this.yrn = null;
    this.khh = 0;
    this.pkl = 6;
    this.ufl = -2;
    this.dja = 2;
    this.ukz = -4;
    this.hlx = 8;
    this.nlx = 26;
    this.jde = 0;
    this.hdf = 1;
    this.gtz = 0;
    this.bvb = 0;
    this.nqj = -1;
    this.wmt = 10;
    this.amh = 0;
    this.ulj = 0;
    this.ybl = false;
    this.isu = -1;
    this.lzr = true;
    this.wem = function(d, g, e, c, b, f) {
        dwj.prototype.wem.call(this, d, g, e, c, f);
        this.lfx = b;
        if (this.vbv) {
            this.khh = Math.round(this.vbv.height / 2)
        }
    };
    this.ler = function(b) {
        try {
            this.lyp = b.cbb;
            this.btp = b.font;
            this.apl = b.stb;
            this.ykb = b.backgroundColor;
            this.dfo = b.oiw;
            this.jmg = b.gmj;
            this.dww = b.pso;
            if (b.borderColor && b.orn) {
                this.yrn = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.yrn.addColorStop(0, b.borderColor);
                this.yrn.addColorStop(1, b.orn)
            } else {
                this.yrn = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.qgh = function(b) {
        try {
            this.nlx = b.jal;
            this.jde = b.dhi;
            this.pkl = b.foy;
            this.ufl = b.mjg;
            this.dja = b.pzu;
            this.ukz = b.uqx;
            this.hlx = b.ccr;
            this.hdf = b.nlj
        } catch (c) {
            console.error(c)
        }
    };
    this.ose = function() {
        if (this.rpv()) {
            clearInterval(this.isu);
            this.isu = -1
        }
        this.lzr = false;
        this.isu = setInterval(this.yxg, 400)
    };
    this.pzt = function() {
        this.lzr = true;
        clearInterval(this.isu);
        this.isu = -1;
        this.iaz(false)
    };
    this.iaz = function(b, c) {
        this.ybl = b;
        c = (c === false) ? false : true;
        if (c === true && this.izz() === true) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
    };
    this.rpv = function() {
        return (this.isu >= 0)
    };
    this.bpp = function(b, c) {
        this.value = b;
        if (c && c === true && this.izz()) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
    };
    this.gfp = function(b) {
        this.gtz = Math.round(b / this.wmt);
        this.amh = 0;
        this.ulj = 0;
        this.bvb = new Date().getTime();
        this.nqj = setTimeout(this.ist, this.gtz)
    };
    this.ldv = function() {
        if (a.nqj >= 0) {
            clearTimeout(a.nqj);
            a.nqj = -1
        }
        a.amh = 0;
        a.sed()
    };
    this.kya = function() {
        if (a.nqj >= 0) {
            clearInterval(a.nqj);
            a.nqj = -1
        }
        a.amh = 1;
        a.sed()
    };
    this.ist = function() {
        var b = 0,
            c = new Date().getTime();
        a.ulj += 1;
        if (a.ulj < a.wmt) {
            a.amh += 1 / a.wmt;
            a.parent.jlg(a.x, a.y, a.width, a.height);
            b = a.gtz + (a.ulj * a.gtz - (c - a.bvb));
            a.nqj = setTimeout(a.ist, b)
        } else {
            a.kya()
        }
    };
    this.jlg = function() {
        if (!this.izz()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.hdf,
            d = (this.lyp === "roundedT" || this.lyp === "roundedL") ? this.hlx : 0,
            b = (this.lyp === "roundedT" || this.lyp === "roundedR") ? this.hlx : 0,
            o = (this.lyp === "roundedB" || this.lyp === "roundedR") ? this.hlx : 0,
            q = (this.lyp === "roundedB" || this.lyp === "roundedL") ? this.hlx : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.ybl || this.amh >= 1) {
            if (this.lyp === "round") {
                tlg.tpm.qev(p, this.x + this.width / 2, this.y + this.height / 2, l, this.dfo, 1, this.yrn, this.hdf, 1)
            } else {
                if (this.lyp === "rect") {
                    tlg.tpm.fjv(p, this.x, this.y, this.width, this.height, this.hlx, this.dfo, this.yrn, this.hdf)
                } else {
                    if (this.lyp === "roundedT" || this.lyp === "roundedB" || this.lyp === "roundedR" || this.lyp === "roundedL") {
                        tlg.tpm.csk(p, this.x, this.y, this.width, this.height, d, b, o, q, this.dfo, 1, this.yrn, this.hdf, 1)
                    }
                }
            }
            if (this.lfx || this.vbv) {
                if (this.hah()) {
                    p.drawImage((this.lfx) ? this.lfx : this.vbv, 0, this.khh, this.vbv.width, this.khh, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.lfx) ? this.lfx : this.vbv, 0, 0, this.vbv.width, this.khh, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.odt && this.rjo() === false) {
                p.globalAlpha = 0.5
            }
            if (this.amh > 0) {
                if (this.lyp === "round") {
                    tlg.tpm.qev(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ykb, 1 - this.ulj / this.wmt, this.yrn, this.hdf, 1);
                    tlg.tpm.qev(p, this.x + this.width / 2, this.y + this.height / 2, l, this.dfo, this.ulj / this.wmt)
                } else {
                    if (this.lyp === "rect") {
                        inm = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        inm.addColorStop(1 - this.amh, this.ykb);
                        inm.addColorStop(1 - this.amh, this.dfo);
                        tlg.tpm.svk(p, this.x, this.y, this.width, this.height, this.hlx, inm, 1, this.yrn, this.hdf, 1)
                    } else {
                        if (this.lyp === "roundedT" || this.lyp === "roundedB" || this.lyp === "roundedR" || this.lyp === "roundedL") {
                            inm = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            inm.addColorStop(1 - this.amh, this.ykb);
                            inm.addColorStop(1 - this.amh, this.dfo);
                            tlg.tpm.csk(p, this.x, this.y, this.width, this.height, d, b, o, q, inm, 1, this.yrn, this.hdf, 1)
                        }
                    }
                }
            } else {
                if (this.lyp === "round") {
                    tlg.tpm.qev(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ykb, 1, this.yrn, this.hdf, 1)
                } else {
                    if (this.lyp === "rect") {
                        tlg.tpm.fjv(p, this.x, this.y, this.width, this.height, this.hlx, this.ykb, this.yrn, this.hdf)
                    } else {
                        if (this.lyp === "roundedT" || this.lyp === "roundedB" || this.lyp === "roundedR" || this.lyp === "roundedL") {
                            tlg.tpm.csk(p, this.x, this.y, this.width, this.height, d, b, o, q, this.ykb, 1, this.yrn, this.hdf, 1)
                        }
                    }
                }
            }
            if (this.vbv) {
                if (this.hah()) {
                    p.drawImage(this.vbv, 0, this.khh, this.vbv.width, this.khh, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.vbv, 0, 0, this.vbv.width, this.khh, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.jde > 0) {
            f = (this.hah()) ? 2 : 0;
            c = this.jde;
            p.font = this.apl + " " + c + "px " + this.btp;
            p.fillStyle = this.dww;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.pkl) {
                e = ((this.width - 2 * this.pkl) / n);
                c = Math.round(e * c) - 1;
                p.font = this.apl + " " + c + "px " + this.btp
            }
            if (c > this.height / 2 - this.pkl) {
                e = ((this.height / 2 - this.pkl) / c);
                c = Math.round(e * c) - 1;
                p.font = this.apl + " " + c + "px " + this.btp
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.ufl, this.y - this.ukz + k + f)
        }
        if (this.kxv && this.kxv != "" && this.nlx > 0) {
            g = this.kxv.split("|");
            f = (this.hah()) ? 2 : 0;
            c = this.nlx;
            p.font = this.apl + " " + c + "px " + this.btp;
            p.fillStyle = this.jmg;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.pkl) {
                e = ((this.width - 2 * this.pkl) / n);
                c = Math.round(e * c) - 1;
                p.font = this.apl + " " + c + "px " + this.btp
            }
            if (this.jde > 0) {
                if (c * g.length > this.height / 2 - this.pkl) {
                    e = ((this.height / 2 - this.pkl) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.apl + " " + c + "px " + this.btp
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.pkl) {
                    e = ((this.height - 2 * this.pkl) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.apl + " " + c + "px " + this.btp
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.ufl, this.y - this.dja + k + f);
                k += c
            }
        }
        p.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    };
    this.yxg = function() {
        if (!a.lzr) {
            a.iaz(!a.ybl)
        }
    };
    this.anj = function() {
        a.dvx = false
    };
    this.sed = function() {
        a.oqu = false;
        if (a.izz()) {
            a.parent.jlg(a.x, a.y, a.width, a.height)
        }
    }
}
dwj.prototype = new npl;

function ngo() {
    var a = this;
    this.lyp = "rect";
    this.mxa = -1;
    this.btp = null;
    this.apl = "bold";
    this.ykb = null;
    this.lol = null;
    this.dwa = null;
    this.sby = null;
    this.jcm = null;
    this.jmg = null;
    this.cpx = null;
    this.hlx = 3;
    this.ufl = -2;
    this.lle = 2;
    this.pkl = 6;
    this.cbz = 26;
    this.hdf = 2;
    this.qgh = function(b) {
        try {
            this.cbz = b.fontSize;
            this.ufl = b.mjg;
            this.lle = b.zaf;
            this.pkl = b.foy;
            this.hlx = b.ccr;
            this.hdf = b.nlj
        } catch (c) {
            console.error(c)
        }
    };
    this.ler = function(b) {
        try {
            this.btp = b.font;
            this.apl = b.stb;
            this.ykb = b.backgroundColor;
            this.lol = b.okc;
            this.dwa = b.jko;
            this.sby = b.glo;
            this.jcm = b.borderColor;
            this.jmg = b.gmj;
            this.cpx = b.kmf;
            this.lyp = b.cbb;
            this.mxa = b.dsi
        } catch (c) {
            console.error(c)
        }
    };
    this.tcp = function() {
        return this.lyp
    };
    this.anj = function() {
        a.dvx = false
    };
    this.sed = function() {
        a.oqu = false;
        if (a.izz()) {
            a.parent.jlg(a.x, a.y, a.width, a.height)
        }
    };
    this.jlg = function() {
        if (!this.izz()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.ykb,
            m = this.lol,
            b = this.cbz,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.mxa == 0 || this.mxa == 3) ? this.hlx : 0;
        lt = (this.mxa == 1 || this.mxa == 3) ? this.hlx : 0;
        rb = (this.mxa == 0 || this.mxa == 2) ? this.hlx : 0;
        lb = (this.mxa == 1 || this.mxa == 2) ? this.hlx : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.hah()) {
            n = (this.dwa != null) ? this.dwa : n;
            m = (this.sby != null) ? this.sby : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.lyp === "rrect") {
                    tlg.tpm.csk(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.jcm, this.hdf, 1)
                } else {
                    if (this.lyp === "rect") {
                        if (this.jcm) {
                            tlg.tpm.fjv(p, this.x, this.y, this.width, this.height, this.hlx, l, this.jcm, this.hdf)
                        } else {
                            tlg.tpm.gxk(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.lyp === "triangle") {
                            tlg.tpm.ddt(p, this.mxa, this.x, this.y, this.width, this.height, this.hlx, l, 1, this.jcm, this.hdf, 1)
                        }
                    }
                }
            } else {
                if (this.lyp === "rrect") {
                    tlg.tpm.csk(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.jcm, this.hdf, 1)
                } else {
                    if (this.lyp === "rect") {
                        if (this.jcm) {
                            tlg.tpm.fjv(p, this.x, this.y, this.width, this.height, this.hlx, n, this.jcm, this.hdf, 1)
                        } else {
                            tlg.tpm.gxk(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.lyp === "triangle") {
                            tlg.tpm.ddt(p, this.mxa, this.x, this.y, this.width, this.height, this.hlx, n, 1, this.jcm, this.hdf, 1)
                        }
                    }
                }
            }
        }
        if (this.vbv != null) {
            h = this.height - 2 * this.pkl;
            p.drawImage(this.vbv, this.x + this.width / 2 - h / 2, this.y + this.pkl, h, h)
        }
        if (this.kxv != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.kxv.split("|");
            d = 0;
            if (this.hah()) {
                d = 1;
                p.fillStyle = this.cpx
            } else {
                p.fillStyle = this.jmg
            }
            p.font = this.apl + " " + b + "px " + this.btp;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.pkl) {
                c = ((this.width - 2 * this.pkl) / o);
                b = Math.round(c * b) - 1;
                p.font = this.apl + " " + b + "px " + this.btp
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.apl + " " + b + "px " + this.btp
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.ufl, this.y - this.lle + k + d);
                k += b
            }
        }
        p.restore()
    }
}
ngo.prototype = new npl;

function nsm() {
    var a = this;
    this.state = 0;
    this.ezj = 1;
    this.fni = null;
    this.fya = null;
    this.odq = null;
    this.lyp = "round";
    this.btp = null;
    this.apl = "bold";
    this.qav = "center";
    this.ykb = null;
    this.jmg = null;
    this.rut = 1;
    this.yrn = null;
    this.cbz = 17;
    this.lix = 2;
    this.hlx = 0;
    this.hdf = 1;
    this.kpd = 0;
    this.tyo = 0;
    this.wkn = 0;
    this.qgh = function(b) {
        try {
            this.cbz = b.fontSize;
            this.lix = b.nnz;
            this.hlx = b.ccr;
            this.hdf = b.nlj;
            this.wkn = b.ffx
        } catch (c) {
            console.error(c)
        }
    };
    this.ler = function(b) {
        try {
            this.lyp = b.cbb;
            this.btp = b.font;
            this.apl = b.stb;
            this.qav = b.textAlign;
            this.ykb = b.backgroundColor;
            this.jmg = b.gmj;
            this.rut = b.wks;
            if (b.borderColor && b.orn) {
                this.yrn = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.yrn.addColorStop(0, b.borderColor);
                this.yrn.addColorStop(1, b.orn)
            } else {
                this.yrn = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.tcp = function() {
        return this.lyp
    };
    this.hmd = function(c, b) {
        this.state = c;
        this.ezj = b
    };
    this.jcq = function(b) {
        this.vbv = b;
        if (this.lyp === "round") {
            this.kpd = this.width / 2 - this.lix
        }
        if (this.vbv) {
            this.tyo = Math.round(this.vbv.height / (2 * this.ezj))
        }
    };
    this.zkw = function(b) {
        this.state = (b < this.ezj) ? b : this.state
    };
    this.apa = function(b) {
        this.fni = b
    };
    this.anj = function() {
        a.dvx = false
    };
    this.sed = function() {
        a.oqu = false;
        if (a.izz()) {
            a.parent.jlg(a.x, a.y, a.width, a.height)
        }
    };
    this.jlg = function() {
        if (!this.izz()) {
            return
        }
        var l = this.context2D,
            e = (this.rjo()) ? this.rut : this.rut / 2,
            b = this.cbz,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.vbv && this.wuk) {
            if (!this.rjo()) {
                l.globalAlpha = e
            }
            if (this.lyp === "round") {
                tlg.tpm.qev(l, this.x + this.width / 2, this.y + this.height / 2, this.kpd, this.ykb, e * this.rut)
            } else {
                if (this.lyp === "rect") {
                    tlg.tpm.svk(l, this.x, this.y, this.width, this.height, this.hlx, this.ykb, e * this.rut, this.yrn, this.hdf, e)
                }
            }
            if (this.hah()) {
                if (this.lyp === "round") {
                    l.drawImage(this.vbv, 0, (this.state * 2 * this.tyo) + this.tyo, this.vbv.width, this.tyo, this.x, this.y, this.width, this.height)
                } else {
                    if (this.lyp === "rect") {
                        l.drawImage(this.vbv, 0, (this.state * 2 * this.tyo) + this.tyo, this.vbv.width, this.tyo, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.lyp === "round") {
                    l.drawImage(this.vbv, 0, (this.state * 2 * this.tyo), this.vbv.width, this.tyo, this.x, this.y, this.width, this.height)
                } else {
                    if (this.lyp === "rect") {
                        l.drawImage(this.vbv, 0, (this.state * 2 * this.tyo), this.vbv.width, this.tyo, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.kxv != null) {
                l.textAlign = this.qav;
                l.textBaseline = "bottom";
                l.font = this.apl + " " + b + "px " + this.btp;
                l.fillStyle = this.jmg;
                d = this.kxv.split("|");
                j = 0;
                g = (this.qav === "center") ? this.x + this.width / 2 : (this.qav === "left") ? this.x + 2 * this.lix : this.x + this.width - 2 * this.lix;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.lix) {
                    c = ((this.width - 2 * this.lix) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.apl + " " + b + "px " + this.btp
                }
                if (b * d.length > this.wkn) {
                    c = ((this.wkn) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.apl + " " + b + "px " + this.btp
                }
                k = (this.height - this.lix - this.wkn) + (this.wkn - b * d.length) / 2;
                k += b;
                for (var f = 0; f < d.length; f++) {
                    l.fillText(d[f], g, this.y + k);
                    k += b
                }
            }
        }
        l.restore()
    }
}
nsm.prototype = new npl;

function gcs() {
    var a = this;
    this.btp = null;
    this.apl = "bold";
    this.ykb = "rgb(0,0,0)";
    this.lol = null;
    this.jmg = "rgb(255,255,255)";
    this.oxk = null;
    this.jcm = "rgb(60,60,60)";
    this.gav = null;
    this.hll = null;
    this.wyo = false;
    this.fpg = [];
    this.upd = [];
    this.lfa = null;
    this.mvp = 19;
    this.uoc = 15;
    this.vba = 120;
    this.ufl = 2;
    this.lle = 2;
    this.xyo = 2;
    this.zad = 10;
    this.cbz = 12;
    this.wem = function(b, d, c) {
        gcs.prototype.wem.call(this, b, d, c)
    };
    this.qgh = function(b) {
        try {
            this.cbz = b.fontSize;
            this.mvp = b.cqo;
            this.uoc = b.vvz;
            this.vba = b.ayo;
            this.ufl = b.mjg;
            this.lle = b.zaf;
            this.xyo = b.gjq;
            this.zad = b.vcs
        } catch (c) {
            console.error(c)
        }
    };
    this.ler = function(b) {
        try {
            this.btp = b.font;
            this.apl = b.stb;
            this.ykb = b.backgroundColor;
            this.lol = b.okc;
            this.jmg = b.gmj;
            this.jcm = b.borderColor;
            this.oxk = b.orn;
            if (this.lol) {
                this.gav = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.gav.addColorStop(0, this.lol);
                this.gav.addColorStop(0.5, this.ykb)
            } else {
                this.gav = this.ykb
            }
            if (this.oxk) {
                this.hll = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.hll.addColorStop(0, this.oxk);
                this.hll.addColorStop(1, this.jcm)
            } else {
                this.hll = this.jcm
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.buv = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.zad : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.rjo()) {
            this.parent.kbr();
            return true
        }
        return false
    };
    this.eyg = function(d, b, c) {
        this.upd.push({
            id: d,
            ffq: b,
            value: c,
            btk: null
        })
    };
    this.sgp = function(e, c, d, b) {
        this.upd.push({
            id: e,
            ffq: c,
            value: d,
            btk: b
        })
    };
    this.boq = function(d, b, c) {
        this.fpg.push({
            id: d,
            frt: b,
            value: c
        })
    };
    this.zkw = function(e, d) {
        for (var c = 0, b = this.upd.length; c < b; c++) {
            if (this.upd[c].id == e) {
                this.upd[c].value = d;
                return true
            }
        }
        return false
    };
    this.eis = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.apa = function(e, d) {
        for (var c = 0, b = this.fpg.length; c < b; c++) {
            if (this.fpg[c].id == e) {
                if (this.fpg[c].value != d) {
                    this.fpg[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.gid = function(b) {
        this.lfa = b
    };
    this.hoe = function(b) {
        this.wyo = b
    };
    this.rjo = function(b) {
        return this.wyo
    };
    this.yyt = function(c, b) {
        if (this.zkw(c, b)) {
            window.upo(a.jlg)
        }
    };
    this.zvn = function(c, b) {
        if (this.apa(c, b)) {
            window.upo(a.jlg)
        }
    };
    this.kwa = function(b) {
        this.gid(b);
        window.upo(a.jlg)
    };
    this.jlg = function() {
        if (!a.izz() || !a.parent.clv()) {
            return
        }
        var e = (a.height - a.cbz) / 2 + a.lle,
            c = a.ufl + a.mvp * a.upd.length,
            d = a.width - c - (a.vba * a.fpg.length),
            b = a.context2D;
        b.save();
        tlg.tpm.gxk(b, 0, 0, a.width, a.height, a.gav, 1);
        a.vmj(b, e);
        a.xxg(b, e);
        if (a.lfa && a.lfa != "") {
            tlg.tpm.der(b, a.lfa, a.jmg, c, e, d, a.cbz, a.btp, a.cbz, a.apl)
        } else {
            if (a.rjo()) {
                a.uwf(b)
            }
        }
        a.kon(b, 0, a.height - a.xyo / 2, a.width, a.height - a.xyo / 2);
        b.restore();
        if (a.alo && a.rml) {
            a.alo.drawImage(a.rml, a.x, a.y)
        }
    };
    this.vmj = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.upd.length; f < b; f++) {
            if (this.upd[f].btk) {
                var e = this.eis(this.upd[f].btk, this.upd[f].value);
                if (this.upd[f].ffq instanceof Array) {
                    tlg.tpm.der(d, this.upd[f].ffq[e], this.jmg, c, g, this.mvp, this.cbz, this.btp, this.cbz, this.apl)
                } else {
                    if (this.upd[f].ffq instanceof Image || this.upd[f].ffq instanceof HTMLCanvasElement) {
                        d.drawImage(this.upd[f].ffq, e * this.uoc, 0, this.uoc, this.upd[f].ffq.height, c + this.ufl, g - this.lle, this.mvp - 2 * this.ufl, this.cbz)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.upd[f].value == true) ? 1 : 0.3;
                if (this.upd[f].ffq instanceof String) {
                    tlg.tpm.der(d, this.upd[f].ffq, this.jmg, c, g, this.mvp, this.cbz, this.btp, this.cbz, this.apl)
                } else {
                    if (this.upd[f].ffq instanceof Image || this.upd[f].ffq instanceof HTMLCanvasElement) {
                        d.drawImage(this.upd[f].ffq, c + this.ufl, g - this.lle, this.mvp - 2 * this.ufl, this.cbz)
                    }
                }
                d.restore()
            }
            c += this.mvp;
            this.kon(d, c, 0, c, this.height)
        }
        return c
    };
    this.xxg = function(d, f) {
        var c = this.width - this.ufl - this.vba * this.fpg.length;
        for (var e = 0, b = this.fpg.length; e < b; e++) {
            if (this.fpg[e].id == "freeplay") {
                tlg.tpm.gxk(d, c, 0, this.vba, this.height, "red", 0.4)
            } else {
                if (this.fpg[e].id == "freespin") {
                    tlg.tpm.gxk(d, c, 0, this.vba, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.kon(d, c, 0, c, this.height);
            tlg.tpm.der(d, this.fpg[e].frt + this.fpg[e].value, this.jmg, c, f, this.vba, this.cbz, this.btp, this.cbz, this.apl);
            c += this.vba
        }
    };
    this.kon = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.hll;
        b.lineWidth = this.xyo;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.uwf = function(c) {
        if (this.parent.hhv.djj("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.xyo,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.xyo;
        c.save();
        c.strokeStyle = this.jcm;
        c.lineWidth = j;
        c.beginPath();
        for (var f = 0; f < d; f++) {
            c.moveTo(b + (e - 1) * f, k);
            c.lineTo(((b + g - e * f) + (b + e * f)) / 2, ((this.height - k - j) - f * 2 * j));
            c.lineTo(b + g - (e - 1) * f, k)
        }
        c.stroke();
        c.restore()
    }
}
gcs.prototype = new ezd;

function ffy() {
    var b = this;
    var c = 0;
    var a = 1;
    this.wdd = 7;
    this.kik = 89;
    this.tss = 10000;
    this.sze = null;
    this.wyo = false;
    this.pcd = false;
    this.gsq = -1;
    this.xec = 0;
    this.btp = null;
    this.apl = "bold";
    this.ykb = "black";
    this.vpj = null;
    this.bfj = null;
    this.lpa = null;
    this.jmg = "white";
    this.ovs = 0.8;
    this.agx = 0;
    this.fdm = 0;
    this.uni = 0;
    this.mqg = 0;
    this.ftv = 0;
    this.nqw = 0;
    this.hhu = 0;
    this.ufl = 10;
    this.lle = 5;
    this.lix = 10;
    this.qvf = this.ufl;
    this.oms = 10;
    this.vvx = 20;
    this.xqf = 40;
    this.hdf = 4;
    this.cbz = 10;
    this.tfy = null;
    this.sws = null;
    this.vyi = "";
    this.cbs = null;
    this.wem = function(d, f, e) {
        ffy.prototype.wem.call(this, d, f, e);
        this.sze = new eds();
        this.sze.wem();
        this.sze.zss("buttons");
        this.sze.zss("system");
        this.sze.zss("setting")
    };
    this.qgh = function(d) {
        try {
            this.cbz = d.fontSize;
            this.oms = d.gcg;
            this.vvx = d.eql;
            this.xqf = d.fad;
            this.hdf = d.nlj;
            this.ufl = d.mjg;
            this.lle = d.zaf;
            this.lix = d.nnz
        } catch (f) {
            console.error(f)
        }
    };
    this.ler = function(g, m) {
        try {
            var k = this.sze.tsx("buttons"),
                j = (m === true) ? g.reb.npg : g.bnl.npg;
            this.btp = g.font;
            this.apl = g.stb;
            this.ykb = g.backgroundColor;
            this.vpj = g.dwu;
            this.bfj = g.yih;
            this.jmg = g.gmj;
            this.ovs = g.vne;
            if (this.vpj && this.bfj) {
                this.lpa = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.lpa.addColorStop(0, this.vpj);
                this.lpa.addColorStop(0.5, this.bfj);
                this.lpa.addColorStop(1, this.vpj)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].ler(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.buv = function(p, o) {
        var n = this.sze.pfa(),
            q = this.sze.djj("audio"),
            r = this.sze.djj("language"),
            f = this.sze.djj("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.pcd) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.izz()) {
                if (g.rjo() && !g.xww()) {
                    if (g != q && g != r) {
                        this.parent.dul.hku("btn");
                        this.parent.dul.ikn("btn")
                    }
                    g.pzi(true, true, false);
                    g.wuk();
                    for (var k = 0; k < m; k++) {
                        n[k].dct(true)
                    }
                    if (g != f) {
                        if (this.gsq >= 0) {
                            clearTimeout(this.gsq);
                            this.gsq = -1
                        }
                        this.gsq = setTimeout(this.vwy, this.tss)
                    }
                }
                return true
            }
        }
        if (this.izz() && this.rjo()) {
            if (p < this.x + this.ftv || p > this.x + this.ftv + this.nqw || o < this.y || o > this.y + this.height) {
                if (this.gsq >= 0) {
                    clearTimeout(this.gsq);
                    this.gsq = -1
                }
                return false
            }
        }
        return true
    };
    this.gmf = function() {
        var g = this.sze.pfa();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.hah() == true) {
                e.pzi(false, true);
                return true
            }
        }
        return false
    };
    this.wqy = function(e) {
        var o = this.sze.pfa(),
            d = this.sze.tsx("system"),
            m = this.sze.tsx("setting"),
            q = this.sze.djj("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.pcd) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.vrq || e == f.hhz) && !f.xww()) {
                if (f != q) {
                    this.parent.dul.hku("btn");
                    this.parent.dul.ikn("btn")
                }
                f.pzi(true, true, false);
                f.wuk();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].dct(true)
                }
                if (this.gsq >= 0) {
                    clearTimeout(this.gsq);
                    this.gsq = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.vrq || e == f.hhz) && f.rjo() && !f.xww()) {
                if (f != q) {
                    this.parent.dul.hku("btn");
                    this.parent.dul.ikn("btn")
                }
                f.pzi(true, true, false);
                f.wuk();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].dct(true)
                }
                if (this.gsq >= 0) {
                    clearTimeout(this.gsq);
                    this.gsq = -1
                }
                return true
            }
        }
        if (this.izz() && this.rjo()) {
            if (this.parent.zut) {
                for (l = 0, n = this.parent.zut.gzt.length; l < n; l++) {
                    var p = this.parent.zut.gzt[l];
                    if (p.iih == e || p.iih == e) {
                        if (this.gsq >= 0) {
                            clearTimeout(this.gsq);
                            this.gsq = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.soh = function() {
        var g = this.sze.pfa();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.hah() == true) {
                e.pzi(false, true, false);
                return true
            }
        }
        return false
    };
    this.fmi = function(e, m) {
        var k = this.sze.pfa(),
            l = e - this.x,
            j = m - this.y;
        this.sws = this.tfy;
        this.tfy = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.izz() && f.rjo() && !f.xww()) {
                this.tfy = f
            }
        }
        if (this.tfy) {
            this.nbr(true)
        } else {
            this.nbr(false)
        }
        return true
    };
    this.crh = function(e, f, g, i, l, d, m) {
        this.hhu = g.width;
        var k = new qsz(this.qvf, this.lle, this.hhu, this.hhu);
        var j = new nsm();
        j.wem(k, this.context2D);
        j.parent = this;
        j.wuk = i;
        j.fni = f;
        j.hmd(d, m);
        j.qgh(this.parent.ore.ivg.pak);
        j.ler(this.parent.style.ivg.bnl.npg);
        j.jcq(g);
        if (l != null) {
            j.hhz = l.ydo;
            j.vrq = l.iih;
            j.fya = l.value
        }
        this.sze.sqh(e, j, ["buttons", "setting"]);
        this.qvf += this.hhu + this.ufl;
        this.nqw = this.qvf
    };
    this.ool = function(k, j, i, g, e) {
        this.hhu = i.width;
        var f = new qsz(this.qvf, this.lle, this.hhu, this.hhu);
        var d = new nsm();
        d.wem(f, this.context2D);
        d.parent = this;
        d.wuk = g;
        d.fni = j;
        d.qgh(this.parent.ore.ivg.pak);
        d.ler(this.parent.style.ivg.bnl.npg);
        d.jcq(i);
        if (e != null) {
            d.hhz = e.ydo;
            d.vrq = e.iih;
            d.fya = e.value
        }
        this.sze.sqh(k, d, ["buttons", "system"]);
        this.qvf += this.hhu + this.ufl;
        this.nqw = this.qvf
    };
    this.rok = function() {
        var f = this.sze.pfa();
        this.nqw += 2 * this.lix;
        this.ftv = Math.round((this.width - this.nqw) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.ftv + this.lix
        }
    };
    this.vcu = function() {
        return this.nqw
    };
    this.hoe = function(d) {
        this.wyo = d
    };
    this.rjo = function() {
        return this.wyo
    };
    this.kzh = function(g) {
        var f = this.sze.pfa();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].hoe(g)
        }
        this.parent.jlg()
    };
    this.vgp = function(g) {
        var f = this.sze.tsx("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].hoe(g)
        }
        this.parent.jlg()
    };
    this.tvs = function(g) {
        var f = this.sze.tsx("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].hoe(g)
        }
        this.parent.jlg()
    };
    this.ftu = function() {
        if (this.izz()) {
            return
        }
        if (this.pcd) {
            if (this.mqg === a) {
                this.cbs = this.ftu
            } else {
                this.cbs = null
            }
        } else {
            this.cbs = null;
            this.hbq();
            this.cpl()
        }
    };
    this.taw = function(d) {
        if (this.parent.xhn) {
            this.parent.xhn()
        }
        this.stop();
        this.pcd = false;
        this.cbs = null;
        this.xza(true, d);
        if (this.gsq >= 0) {
            clearTimeout(this.gsq);
            this.gsq = -1
        }
        this.gsq = setTimeout(this.vwy, this.tss)
    };
    this.vwy = function() {
        if (b.izz()) {
            b.parent.dul.hku("panel_out");
            b.parent.dul.ikn("panel_out");
            b.mcn()
        }
    };
    this.mcn = function() {
        if (!this.izz()) {
            return
        }
        if (this.pcd) {
            if (this.mqg === c) {
                this.cbs = this.mcn
            } else {
                this.cbs = null
            }
        } else {
            this.cbs = null;
            this.avs();
            this.cpl();
            if (this.gsq >= 0) {
                clearTimeout(this.gsq);
                this.gsq = -1
            }
        }
    };
    this.bsx = function(d) {
        if (this.parent.cpo) {
            this.parent.cpo()
        }
        this.stop();
        this.pcd = false;
        this.cbs = null;
        this.xza(false, d);
        if (typeof this.pux === "function") {
            this.pux();
            this.pux = null
        }
    };
    this.hbq = function() {
        this.xza(true);
        this.pcd = true;
        this.wyo = false;
        this.mqg = c;
        this.agx = Math.floor(this.height / this.wdd);
        this.uni = 1;
        this.fdm = Math.floor(this.height / this.wdd)
    };
    this.avs = function() {
        if (this.parent.cpo) {
            this.parent.cpo()
        }
        this.pcd = true;
        this.wyo = false;
        this.mqg = a;
        this.agx = -Math.floor(this.height / this.wdd);
        this.uni = 1;
        this.fdm = this.height
    };
    this.cpl = function() {
        this.xec = setInterval(this.mxo, this.kik)
    };
    this.pnq = function() {
        if (b.mqg == c) {
            if (b.parent.xhn) {
                b.parent.xhn()
            }
            if (b.gsq >= 0) {
                clearTimeout(b.gsq);
                b.gsq = -1
            }
            b.gsq = setTimeout(b.vwy, b.tss)
        }
        clearInterval(b.xec);
        if (b.cbs) {
            b.cbs()
        }
    };
    this.stop = function() {
        clearTimeout(this.gsq);
        clearInterval(this.xec);
        this.gsq = -1
    };
    this.mxo = function() {
        if (!b.pdf()) {
            b.pnq()
        }
    };
    this.pdf = function() {
        if (b.uni < b.wdd) {
            b.parent.jlg(b.x, b.y, b.width, b.height);
            b.fdm += b.agx;
            b.uni++;
            return true
        } else {
            b.pcd = false;
            b.wyo = true;
            if (b.mqg == a) {
                b.xza(false);
                if (typeof b.pux === "function") {
                    b.pux();
                    b.pux = null
                }
            }
            b.parent.jlg(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.jlg = function(n, m, o, g) {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.sze.pfa(),
            k = 0,
            d = 0;
        p.save();
        if (e) {
            p.beginPath();
            p.rect(n, m, o, g);
            p.closePath();
            p.clip()
        }
        p.clearRect(0, 0, this.width, this.height);
        this.amd(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].jlg()
        }
        if (this.tfy && this.vyi != "") {
            k = this.tfy.x - this.ufl - this.hhu;
            d = 3 * this.hhu + 2 * this.ufl;
            if (k + d >= this.ftv + this.nqw) {
                k = this.ftv + this.nqw - d;
                tlg.tpm.fwp(p, this.vyi, this.jmg, k, this.tfy.y + this.tfy.height, d, this.cbz, this.btp, this.cbz, this.apl, this.ufl)
            } else {
                tlg.tpm.der(p, this.vyi, this.jmg, k, this.tfy.y + this.tfy.height, d, this.cbz, this.btp, this.cbz, this.apl)
            }
        }
        p.restore();
        if (this.pcd) {
            if (this.alo && this.rml && this.fdm > 0) {
                this.alo.drawImage(this.rml, 0, this.height - this.fdm, this.width, this.fdm, this.x, this.y, this.width, this.fdm)
            }
        } else {
            if (e) {
                this.parent.jlg(this.x + n, this.y + m, o, g)
            } else {
                if (this.alo && this.rml) {
                    this.alo.drawImage(this.rml, this.x, this.y)
                }
            }
        }
    };
    this.amd = function(d) {
        var f = this.hdf,
            e = f / 2;
        d.save();
        d.strokeStyle = this.lpa;
        d.fillStyle = this.ykb;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.oms, this.oms + e, this.oms, this.oms);
        d.arcTo(this.ftv, this.oms, this.ftv, this.height - this.vvx - e, this.xqf);
        d.arcTo(this.ftv, this.height - e, this.ftv + this.vvx, this.height - e, this.vvx);
        d.lineTo(this.ftv + this.nqw - this.vvx, this.height - e);
        d.arcTo(this.ftv + this.nqw, this.height - e, this.ftv + this.nqw, this.height - this.vvx - e, this.vvx);
        d.arcTo(this.ftv + this.nqw, this.oms, this.width - this.oms - e, this.oms, this.xqf);
        d.arcTo(this.width - e, this.oms, this.width - e, 0, this.oms);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.ovs;
        d.fill();
        d.restore()
    };
    this.nbr = function(d) {
        if (this.tfy && this.tfy != this.sws) {
            if (d && this.tfy) {
                this.vyi = this.parent.ieh(this.tfy.fni);
                if (!tlg.tpm.mql) {
                    this.vyi = (this.tfy.fya) ? this.vyi + " [" + this.tfy.fya + "]" : this.vyi
                }
            } else {
                this.vyi = ""
            }
            this.parent.jlg(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.tfy && this.vyi != this.parent.ieh(this.tfy.fni))) {
                this.vyi = this.parent.ieh(this.tfy.fni);
                if (!tlg.tpm.mql) {
                    this.vyi = (this.tfy.fya) ? this.vyi + " [" + this.tfy.fya + "]" : this.vyi
                }
            }
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
    };
    this.pux = null
}
ffy.prototype = new ezd;

function nxt() {
    this.rcd = null;
    this.nio = null;
    this.umt = null;
    this.pqo = false;
    this.wyo = false;
    this.rwq = true;
    this.mhv = false;
    this.cdb = false;
    this.xya = 0;
    this.ozw = 0;
    this.dfg = 0;
    this.cep = "";
    this.mfc = "";
    this.dkk = null;
    this.zkn = null;
    this.btp = "arial";
    this.apl = "bold";
    this.oou = "arial";
    this.shs = "rgb(0,0,200)";
    this.por = "rgb(255,255,255)";
    this.qzl = "rgb(0,0,150)";
    this.ykb = "rgb(220,240,255)";
    this.tim = "rgb(130,220,255)";
    this.wum = "rgb(130,190,255)";
    this.jmg = "rgb(255,255,255)";
    this.hoo = "rgb(130,190,255)";
    this.ogh = "rgb(100,160,255)";
    this.uac = "rgb(255,255,255)";
    this.dop = new qsz();
    this.jve = null;
    this.jst = null;
    this.nwk = null;
    this.eif = null;
    this.tft = null;
    this.zfj = null;
    this.sik = null;
    this.nea = null;
    this.hdf = 2;
    this.okk = 3;
    this.vey = 10;
    this.lle = 3;
    this.ufl = 5;
    this.ouj = 36;
    this.cbz = 30;
    this.irw = 22;
    this.wem = function(a, c, b) {
        nxt.prototype.wem.call(this, a, c, b);
        this.mhv = tlg.fxx.value37
    };
    this.kor = function(b) {
        try {
            var a = (tlg.fxx.value37) ? b.ysu : b.vxj;
            this.jve = b.dci;
            this.jst = b.poj;
            this.nwk = b.pvw;
            this.eif = b.hjg;
            this.tft = b.rsu;
            this.zfj = b.iou;
            this.dop = b.pwt;
            this.ouj = b.fbk;
            this.cbz = b.fontSize;
            this.irw = b.dfv;
            this.lle = b.zaf;
            this.ufl = b.mjg;
            this.hdf = b.nlj;
            this.okk = b.dir;
            this.vey = b.ect;
            if (tlg.fxx.value36) {
                this.mfc = this.parent.ieh(this.parent.language.qyn)
            } else {
                if (tlg.fxx.value37) {
                    this.mfc = this.parent.ieh(this.parent.language.pis)
                }
            }
            this.rcd = [];
            this.nio = this.bdq(a.gjj, this.parent.language.ret, this.parent.eru, (this.parent.ore.era === false) ? this.parent.dul.mza("btn") : this.parent.dul.mza("btn_re"), b.pak);
            this.rcd.push(this.nio);
            if (tlg.fxx.value37) {
                this.umt = this.bdq(a.bgx, this.parent.language.iyq, this.parent.olt, (this.parent.ore.era === false) ? this.parent.dul.mza("btn") : this.parent.dul.mza("btn_e"), b.pak);
                this.rcd.push(this.umt)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.qgh = function(b) {
        try {
            var a = (tlg.fxx.value37) ? b.ysu : b.vxj;
            this.jve = b.dci;
            this.jst = b.poj;
            this.nwk = b.pvw;
            this.eif = b.hjg;
            this.tft = b.rsu;
            this.zfj = b.iou;
            this.dop = b.pwt;
            if (this.nio) {
                this.nio.ota(a.gjj);
                this.nio.qgh(b.pak)
            }
            if (this.umt) {
                this.umt.ota(a.bgx);
                this.umt.qgh(b.pak)
            }
            this.ouj = b.fbk;
            this.cbz = b.fontSize;
            this.irw = b.dfv;
            this.lle = b.zaf;
            this.ufl = b.mjg;
            this.hdf = b.nlj;
            this.okk = b.dir;
            this.vey = b.ect
        } catch (c) {
            console.error(c)
        }
    };
    this.ler = function(c) {
        try {
            this.btp = c.font;
            this.apl = c.stb;
            this.shs = c.xnp;
            this.por = c.uoj;
            this.qzl = c.sny;
            this.ykb = c.backgroundColor;
            this.tim = c.mrj;
            this.wum = c.jyw;
            this.jmg = c.gmj;
            this.hoo = c.xrx;
            this.ogh = c.fsa;
            this.uac = c.wzu;
            this.dkk = c.wkd;
            this.zkn = c.gyc;
            for (var b = 0, a = this.rcd.length; b < a; b++) {
                this.rcd[b].ler((this.parent.ore.utu === true) ? c.vxl : c.npg)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.buv = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.rcd.length; f < b; f++) {
            var a = this.rcd[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.izz() === true) {
                if (a.rjo() === true && a.xww() === false && this.rwq) {
                    a.pzi(true, true);
                    this.parent.dul.hku("btn");
                    this.parent.dul.ikn("btn");
                    a.wuk();
                    for (var e = 0; e < b; e++) {
                        this.rcd[e].dct(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.zfj.x && c <= this.zfj.x + this.zfj.width && g >= this.zfj.y && g <= this.zfj.y + this.zfj.height && this.mhv && this.wyo) {
            this.lqv()
        }
        return true
    };
    this.gmf = function() {};
    this.wqy = function() {};
    this.soh = function() {};
    this.bdq = function(d, f, e, a, c) {
        var b = new dwj();
        b.wem(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.wuk = e;
        b.qgh(c);
        return b
    };
    this.kzh = function(c) {
        this.wyo = c;
        for (var b = 0, a = this.rcd.length; b < a; b++) {
            this.rcd[b].hoe(c)
        }
    };
    this.lqv = function() {
        this.rwq = !this.rwq;
        this.parent.jlg()
    };
    this.qld = function(d, a, c, b) {
        this.cdb = false;
        this.wuy = true;
        this.cep = this.alt(b);
        this.xya = d;
        this.ozw = a;
        this.dfg = c;
        if (this.izz()) {
            this.kzh(true);
            this.jlg()
        }
    };
    this.alt = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.pvh(d) + ":" + this.pvh(a) + ":" + this.pvh(c)
    };
    this.pvh = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.fag = function(a, b) {
        this.cdb = a;
        if (b && b === true) {
            this.jlg()
        }
    };
    this.xza = function(a, b) {
        this.wuy = false;
        if (tlg.fxx.value37) {
            this.rwq = false
        }
        this.fag(a, false);
        nxt.prototype.xza.call(this, a, b)
    };
    this.jlg = function(j, f, k, d) {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.dul.mza("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.ykb;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.dop.x, this.dop.y, this.dop.x + this.dop.width, this.dop.y);
            g.addColorStop(0.2, this.dkk);
            g.addColorStop(1, this.zkn);
            l.fillStyle = g;
            l.save();
            if (this.parent.xdi === tlg.ore.ksk) {
                l.translate(this.dop.width / 2, this.dop.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.dop.width / 2, -this.dop.height / 2)
            }
            l.fillRect(this.dop.x, this.dop.y, this.dop.width, this.dop.height);
            l.drawImage(c, this.dop.x, this.dop.y, this.dop.width, this.dop.height);
            l.restore()
        } else {
            if (this.parent.ore.utu === true) {
                tlg.tpm.gxk(l, this.dop.x, this.dop.y, this.dop.width, this.dop.height, this.dkk, 1)
            }
        }
        tlg.tpm.fjv(l, this.jve.x, this.jve.y, this.jve.width, this.jve.height, 0, this.tim);
        tlg.tpm.der(l, this.mfc, this.jmg, this.jve.x, this.jve.y + this.lle, this.jve.width, this.jve.height, this.btp, this.ouj, this.apl);
        tlg.tpm.fjv(l, this.jst.x, this.jst.y, this.jst.width, this.jst.height, 0, this.tim);
        if (tlg.fxx.value36) {
            tlg.tpm.mex(l, this.parent.ieh(this.parent.language.qaa), this.jmg, this.jst.x, this.jst.y + this.lle, this.jst.width, this.jst.height, this.btp, this.cbz, this.apl, this.ufl)
        } else {
            if (tlg.fxx.value37) {
                tlg.tpm.mex(l, this.parent.ieh(this.parent.language.bqa), this.jmg, this.jst.x, this.jst.y + this.lle, this.jst.width, this.jst.height, this.btp, this.cbz, this.apl, this.ufl)
            }
        }
        tlg.tpm.fjv(l, this.nwk.x, this.nwk.y, this.nwk.width, this.nwk.height, 0, this.wum);
        tlg.tpm.mex(l, this.parent.ieh(this.parent.language.ypo), this.jmg, this.nwk.x, this.nwk.y + this.lle, this.nwk.width, this.nwk.height, this.btp, this.cbz, this.apl, this.ufl);
        tlg.tpm.fjv(l, this.eif.x, this.eif.y, this.eif.width, this.eif.height, 0, this.tim);
        tlg.tpm.mex(l, this.parent.ieh(this.parent.language.kgl), this.jmg, this.eif.x, this.eif.y + this.lle, this.eif.width, this.eif.height, this.btp, this.cbz, this.apl, this.ufl);
        if (this.mhv) {
            this.fia(l)
        }
        if (this.wuy) {
            if (tlg.fxx.value36) {
                tlg.tpm.fwp(l, this.xya, this.jmg, this.jst.x, this.jst.y + this.lle, this.jst.width, this.jst.height, this.btp, this.cbz, this.apl, this.ufl)
            } else {
                if (tlg.fxx.value37) {
                    tlg.tpm.fwp(l, this.cep, this.jmg, this.jst.x, this.jst.y + this.lle, this.jst.width, this.jst.height, this.btp, this.cbz, this.apl, this.ufl)
                }
            }
            tlg.tpm.fwp(l, this.parent.hut(this.ozw), this.jmg, this.nwk.x, this.nwk.y + this.lle, this.nwk.width, this.nwk.height, this.btp, this.cbz, this.apl, this.ufl);
            tlg.tpm.fwp(l, this.parent.hut(this.dfg), this.jmg, this.eif.x, this.eif.y + this.lle, this.eif.width, this.eif.height, this.btp, this.cbz, this.apl, this.ufl)
        }
        for (var b = 0, e = this.rcd.length; b < e; b++) {
            this.rcd[b].jlg()
        }
        if (this.cdb) {
            tlg.tpm.svk(l, this.tft.x, this.tft.y, this.tft.width, this.tft.height, this.okk, this.shs, 0.3, this.qzl, this.hdf, 1);
            tlg.tpm.der(l, this.parent.ieh(this.parent.language.mil), this.por, this.tft.x, this.tft.y, this.tft.width, this.tft.height, this.btp, this.cbz, this.apl)
        }
        l.restore();
        if (this.alo && this.rml) {
            if (a) {
                this.alo.drawImage(this.rml, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.alo.drawImage(this.rml, this.x, this.y)
            }
        }
    };
    this.fia = function(b) {
        var c = Math.round(this.zfj.height / 2),
            a = Math.round(this.zfj.x + c),
            d = Math.round(this.zfj.y + c / 2);
        b.save();
        tlg.tpm.fjv(b, this.zfj.x, this.zfj.y, this.zfj.width, this.zfj.height, this.vey, this.hoo, this.ogh, this.hdf);
        tlg.tpm.der(b, this.parent.language.iok, this.jmg, this.zfj.x + this.zfj.height, this.zfj.y, this.zfj.width - this.zfj.height, this.zfj.height, this.btp, this.irw, this.apl);
        tlg.tpm.gxk(b, a, d, c, c, null, 0, this.uac, this.hdf, 1);
        if (this.rwq) {
            tlg.tpm.gxk(b, a + c / 4, d + c / 4, c / 2, c / 2, this.uac, 1)
        }
        b.restore()
    }
}
nxt.prototype = new ezd;

function lpw() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.faq = null;
    this.wey = null;
    this.uld = null;
    this.rjf = null;
    this.bdm = null;
    this.vvf = [];
    this.rnq = 0;
    this.cly = [];
    this.ngj = [];
    this.tce = 0;
    this.hry = false;
    this.guk = false;
    this.wem = function() {
        this.faq = document.getElementById("messageOverlay");
        this.wey = document.getElementById("messagePanel");
        this.uld = document.getElementById("messageTitle");
        this.rjf = document.getElementById("messageText");
        this.bdm = document.getElementById("btne");
        if (this.bdm) {
            this.bdm.innerHTML = "×";
            this.bdm.onclick = this.mcn;
            this.bdm.ontouchend = this.mcn
        }
        for (var f = 0; f < 4; f++) {
            this.vvf[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.ler = function(f) {
        try {
            this.cly = f.efj
        } catch (g) {
            console.error(g)
        }
    };
    this.qgh = function(j) {
        try {
            if (this.wey) {
                tlg.tpm.rci(this.wey, j.eso)
            }
            if (this.uld) {
                this.uld.style.fontSize = j.zyc + "px";
                tlg.tpm.rci(this.uld, j.dci)
            }
            if (this.rjf) {
                this.rjf.style.fontSize = j.jal + "px";
                tlg.tpm.rci(this.rjf, j.iou)
            }
            if (this.bdm) {
                tlg.tpm.rci(this.bdm, j.tck)
            }
            for (var g = 0, f = this.vvf.length; g < f; g++) {
                this.vvf[g].style.fontSize = j.pak.fontSize + "px";
                this.vvf[g].style.top = j.azb.y + "px";
                this.vvf[g].style.height = j.azb.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.ftu = function(j) {
        this.ngj.length = 0;
        this.tce = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.ngj[g] = j[g]
        }
        this.aqz(this.ngj[this.tce])
    };
    this.mcn = function() {
        if (b.wey) {
            b.guk = false;
            b.wey.style.display = "none";
            b.faq.style.display = "none";
            tlg.xiv.fnx();
            tlg.xiv.kda = false
        }
    };
    this.aqz = function(l) {
        var n = this.ngj.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.mlq === tlg.cvg.sgv || l.mlq === tlg.cvg.tsh) {
            this.rnq = d;
            this.hry = (l.DisplayType == tlg.sob.ccp.img) ? true : false
        } else {
            if (l.mlq === tlg.cvg.zmu || l.mlq === tlg.cvg.suk || l.mlq === tlg.cvg.qki || l.mlq === tlg.cvg.roulette.dhe || l.mlq === tlg.cvg.roulette.oxf) {
                this.rnq = a;
                this.hry = false
            } else {
                if (l.mlq === tlg.cvg.yur || l.mlq === tlg.cvg.bue) {
                    this.rnq = c;
                    this.hry = false
                } else {
                    if (l.mlq === tlg.cvg.uag || l.mlq === tlg.cvg.pvd || l.mlq === tlg.cvg.feu) {
                        this.rnq = e;
                        this.hry = false
                    }
                }
            }
        }
        if (l.Title && this.uld) {
            this.uld.style.color = this.cly[this.rnq];
            this.uld.innerHTML = l.Title
        }
        if (l.Text && this.rjf) {
            this.rjf.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.vvf[0].innerHTML = "‹";
            this.vvf[0].onclick = this.luz;
            this.vvf[0].ontouchend = this.luz;
            this.vvf[0].style.display = "inline-block";
            this.vvf[this.vvf.length - 1].innerHTML = "›";
            this.vvf[this.vvf.length - 1].onclick = this.vet;
            this.vvf[this.vvf.length - 1].ontouchend = this.vet;
            this.vvf[this.vvf.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.vvf.length - 1 : this.vvf.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.vvf[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
						window.parent.postMessage('CloseGame',"*");
                        this.vvf[g].innerHTML = tlg.xiv.language.ego
                    } else {
                        if (j == "continue") {
                            this.vvf[g].innerHTML = tlg.xiv.language.nhc.replace(/ /g, "")
                        } else {
                            this.vvf[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.vvf[g].onclick = tlg.xiv.ndx;
                    this.vvf[g].ontouchend = tlg.xiv.ndx
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.mlq === tlg.cvg.sgv) {
                            this.vvf[g].onclick = this.bpw.bind(this, l.Buttons[k].Link);
                            this.vvf[g].ontouchend = this.bpw.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.mlq === tlg.cvg.tsh || l.mlq === tlg.cvg.uag || l.mlq === tlg.cvg.pvd) {
                                this.vvf[g].onclick = this.zth;
                                this.vvf[g].ontouchend = this.zth
                            } else {
                                if (l.mlq === tlg.cvg.yur || l.mlq === tlg.cvg.bue || l.mlq === tlg.cvg.feu) {
                                    this.vvf[g].onclick = this.tmj;
                                    this.vvf[g].ontouchend = this.tmj
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.vvf[g].onclick = tlg.xiv.whz;
                            this.vvf[g].ontouchend = tlg.xiv.whz
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === tlg.sob.upa.nyj) {
                                    this.vvf[g].onclick = this.vhz.bind(this, l.Buttons[k].Link);
                                    this.vvf[g].ontouchend = this.vhz.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === tlg.sob.upa.yqp) {
                                        this.vvf[g].onclick = this.bpw.bind(this, l.Buttons[k].Link);
                                        this.vvf[g].ontouchend = this.bpw.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === tlg.sob.upa.aup) {
                                            this.vvf[g].onclick = this.qtw.bind(this, l.Buttons[k].Link);
                                            this.vvf[g].ontouchend = this.qtw.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.vvf[g].style.display = "inline-block"
            } else {
                this.vvf[g].style.display = "none"
            }
        }
        this.bdm.style.display = (this.hry) ? "inline-block" : "none";
        if (this.wey) {
            this.guk = true;
            this.wey.style.display = "block";
            this.faq.style.display = "block";
            tlg.xiv.fnx();
            tlg.xiv.kda = true
        }
    };
    this.izz = function() {
        if (this.guk) {
            return true
        }
        return false
    };
    this.zth = function() {
        b.mcn();
        tlg.xiv.aul(tlg.xiv.state)
    };
    this.bpw = function(f) {
        var g = null;
        if (f) {
            g = tlg.tpm.uha("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        if (tlg.xiv.hqn) {
            tlg.xiv.hqn.qdd({
                sender: tlg.xiv.zyr,
                lang: tlg.tcn.jlu("sessionValue1").toUpperCase()
            })
        }
        b.mcn();
        tlg.xiv.lwj()
    };
    this.qtw = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = tlg.tpm.uha("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.vvf.length; g < f; g++) {
                b.vvf[g].disabled = true
            }
            k.onload = function() {
                b.mcn();
                for (var m = 0, l = b.vvf.length; m < l; m++) {
                    b.vvf[m].disabled = false
                }
                tlg.xiv.lwj()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.vvf.length; m < l; m++) {
                    b.vvf[m].disabled = false
                }
            }
        }
        if (tlg.xiv.hqn) {
            tlg.xiv.hqn.qdd({
                sender: tlg.xiv.zyr,
                lang: tlg.tcn.jlu("sessionValue1").toUpperCase()
            })
        }
        k.send()
    };
    this.tmj = function() {
        window.location.reload()
    };
    this.vhz = function(f) {
        if (tlg.xiv.hqn) {
            tlg.xiv.hqn.qdd({
                sender: tlg.xiv.zyr,
                lang: tlg.tcn.jlu("sessionValue1").toUpperCase()
            })
        }
        window.location.href = f
    };
    this.luz = function() {
        b.tce = (b.tce > 0) ? b.tce - 1 : b.ngj.length - 1;
        b.aqz(b.ngj[b.tce])
    };
    this.vet = function() {
        b.tce = (b.tce < b.ngj.length - 1) ? b.tce + 1 : 0;
        b.aqz(b.ngj[b.tce])
    }
}

function dnb() {
    var a = this;
    this.pdx = "LOADING ... ";
    this.abl = "ERROR";
    this.jcz = null;
    this.rlq = null;
    this.lxr = false;
    this.hhp = false;
    this.kli = true;
    this.wuk = null;
    this.int = null;
    this.jgv = null;
    this.xec = 0;
    this.qbe = 0;
    this.gjd = false;
    this.uoq = 0;
    this.pkj = 60;
    this.xxj = 0;
    this.btp = "arial";
    this.apl = "bold";
    this.fci = "black";
    this.tfp = "rgb(0,100,10)";
    this.tlx = "rgb(80,255,100)";
    this.euy = "rgb(120,120,120)";
    this.tfh = "red";
    this.wed = "white";
    this.jmg = "yellow";
    this.cbz = 14;
    this.mcb = 18;
    this.mqc = 20;
    this.dxj;
    this.sld;
    this.uda;
    this.ysi;
    this.lix = 5;
    this.ufl = 12;
    this.lle = 5;
    this.zwj = 2;
    this.isc = new qsz();
    this.gfi = new qsz();
    this.olb = [];
    this.goh = 0;
    this.pla = 20;
    this.wem = function(b, d, c) {
        dnb.prototype.wem.call(this, b, d, c);
        this.int = document.createElement("canvas");
        this.jgv = this.int.getContext("2d")
    };
    this.qgh = function(b) {
        try {
            this.cbz = b.fontSize;
            this.mcb = b.wam;
            this.mqc = b.eai;
            this.lix = b.nnz;
            this.ufl = b.mjg;
            this.lle = b.zaf;
            this.zwj = b.ehq;
            this.dxj = b.qmj;
            this.sld = b.opv;
            this.uda = b.mvo;
            this.ysi = b.oyb;
            this.isc = b.rtn;
            if (this.gfi.width > 0 && this.gfi.height) {
                this.pxk()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ler = function(b) {
        try {
            this.btp = b.font;
            this.apl = b.stb;
            this.fci = b.backgroundColor;
            this.tfp = b.zso;
            this.tlx = b.ham;
            this.euy = b.yba;
            this.tfh = b.qwd;
            this.wed = b.sah;
            this.jmg = b.gmj;
            this.rlq = b.rlq
        } catch (c) {
            console.error(c)
        }
    };
    this.buv = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.gfi.x && d <= this.gfi.x + this.gfi.width && c >= this.gfi.y && c <= this.gfi.y + this.gfi.height) {
            this.wuk();
            return true
        }
        return false
    };
    this.jlg = function(b) {
        if (b && b >= 0) {
            this.qbe = b
        }
        if (!this.izz()) {
            return
        }
        if (tlg.fxx.value45 == tlg.itu.cii) {
            this.szf()
        } else {
            if (tlg.fxx.value45 == tlg.itu.epi) {
                this.fux()
            }
        }
    };
    this.szf = function() {
        if (this.lxr) {
            var c = this.context2D,
                b = this.uda.width / 100;
            c.save();
            if (this.hhp === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.dul.mza("splash"), 0, 0, this.width, this.height);
            if (this.rlq) {
                tlg.tpm.gxk(c, this.lix, this.lix, this.width - 2 * this.lix, this.height - 2 * this.lix, this.rlq, 0.3)
            }
            if (this.jcz != null && this.jcz != "") {
                this.qla(this.ysi, true)
            } else {
                if (this.gjd) {
                    tlg.tpm.gxk(c, this.isc.x, this.isc.y, this.isc.width, this.isc.height, this.fci, 0.7);
                    c.drawImage(this.int, this.isc.x + this.isc.width * (1 - this.olb[this.goh]) / 2, this.isc.y + this.isc.height * (1 - this.olb[this.goh]) / 2, this.isc.width * this.olb[this.goh], this.isc.height * this.olb[this.goh])
                } else {
                    if (this.kli === true) {
                        if (this.hhp === false) {
                            tlg.tpm.gxk(c, this.dxj.x, this.dxj.y, this.dxj.width, this.dxj.height, this.fci, 0.7)
                        }
                        var e = this.pdx + " " + this.qbe + "%";
                        var d = c.createLinearGradient(this.uda.x, this.uda.y, this.uda.x + this.uda.width, this.uda.y);
                        d.addColorStop(0, this.tfp);
                        d.addColorStop(1, this.tlx);
                        tlg.tpm.der(c, e, this.wed, this.sld.x, this.sld.y, this.sld.width, this.sld.height, this.btp, this.cbz, this.apl);
                        tlg.tpm.svk(c, this.uda.x - this.zwj, this.uda.y, this.uda.width + 2 * this.zwj, this.uda.height, this.zwj, this.fci, 0.8, this.euy, this.zwj, 0.8);
                        tlg.tpm.gxk(c, this.uda.x, this.uda.y + this.zwj / 2, b * this.qbe, this.uda.height - this.zwj, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.fux = function() {
        if (this.lxr) {
            var c = this.context2D,
                b = this.uda.width / 100;
            c.save();
            if (this.hhp === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.dul.mza("splash"), 0, 0, this.width, this.height);
            if (this.jcz != null && this.jcz != "") {
                this.qla(this.ysi, true)
            } else {
                if (this.gjd) {
                    c.drawImage(this.parent.dul.mza("continue"), this.isc.x, this.isc.y, this.isc.width, this.isc.height);
                    c.drawImage(this.int, this.isc.x + this.isc.width * (1 - this.olb[this.goh]) / 2, this.isc.y + this.isc.height * (1 - this.olb[this.goh]) / 2, this.isc.width * this.olb[this.goh], this.isc.height * this.olb[this.goh])
                } else {
                    if (this.kli === true) {
                        tlg.tpm.gxk(c, this.uda.x, this.uda.y, this.uda.width, this.uda.height, "rgb(0,0,0)", 0.5);
                        tlg.tpm.gxk(c, this.uda.x, this.uda.y, b * this.qbe, this.uda.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.qla = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.cbz,
            k = this.jcz,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.mcb * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.apl + " " + d + "px " + this.btp;
        for (var p = s; p < k.length; p++) {
            f += k.charAt(p);
            u = l.measureText(f).width;
            if (k.charAt(p) == " ") {
                t = p
            }
            if (p == k.length - 1) {
                o[v] = k.substring(s, k.length)
            } else {
                if (k.charAt(p) == "|") {
                    o[v] = k.substring(s, p);
                    v++;
                    s = p + 1;
                    f = k.substring(p + 1, p + 1)
                } else {
                    if (u >= c.width - 2 * this.ufl) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.lle)) {
            w = (c.height - j - this.lle) / b;
            d = Math.round(d * w) - 1;
            l.font = this.apl + " " + d + "px " + this.btp;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.apl + " " + d + "px " + this.btp;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.lle));
            c.height = j + b + this.lle;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            tlg.tpm.gxk(l, c.x, c.y, c.width, c.height, this.fci, 0.7)
        }
        if (this.abl != null) {
            l.font = this.apl + " " + this.mcb + "px " + this.btp;
            l.fillStyle = this.tfh;
            l.textBaseline = "bottom";
            l.fillText(this.abl, c.x + c.width / 2, c.y + this.mcb + this.lle)
        }
        l.font = this.apl + " " + d + "px " + this.btp;
        l.fillStyle = this.wed;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.ufl), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.erk = function() {
        return (this.gjd)
    };
    this.aks = function() {
        for (var b = 0; b < this.pla; b++) {
            this.olb[b] = 1 - Math.sin(Math.PI * b / (this.pla - 1)) * 0.04
        }
        this.olb[this.pla - 1] = 1;
        this.gjd = true;
        this.goh = 0;
        this.pxk();
        this.xec = setInterval(this.cyp, this.pkj);
        this.jlg()
    };
    this.cyp = function() {
        a.jlg();
        a.goh = (a.goh < a.pla - 1) ? a.goh + 1 : 0
    };
    this.stop = function() {
        this.gjd = false;
        clearTimeout(this.xec)
    };
    this.pxk = function() {
        var b = this.jgv;
        this.gfi = this.isc;
        this.int.width = Math.round(this.gfi.width);
        this.int.height = Math.round(this.gfi.height);
        b.save();
        b.clearRect(0, 0, this.int.width, this.int.height);
        tlg.tpm.lbj(b, this.parent.language.nhc, this.jmg, 0, 0, this.int.width, this.int.height, this.btp, this.mqc, this.apl, "center", true);
        b.restore()
    }
}
dnb.prototype = new ezd;

function cuz() {
    this.mgk = true;
    this.ebf = true;
    this.wyr = "";
    this.oqo = {};
    this.mfd = {};
    this.wem = function() {
        this.mgk = this.xsu();
        this.ebf = this.xlt();
        return this
    };
    this.syr = function() {
        if (this.mgk && this.ebf) {
            return true
        }
        return false
    };
    this.eqi = function(a, b) {
        if (this.mgk) {
            localStorage.setItem(a, b)
        } else {
            this.oqo[a] = b.toString()
        }
    };
    this.zdy = function(a) {
        if (this.mgk) {
            return localStorage.getItem(a)
        } else {
            return this.oqo[a]
        }
    };
    this.jqi = function(a) {
        if (this.mgk) {
            localStorage.removeItem(a)
        } else {
            delete this.oqo[a]
        }
    };
    this.yjp = function(a, b) {
        if (this.ebf) {
            sessionStorage.setItem(a, b)
        } else {
            this.mfd[a] = b.toString()
        }
    };
    this.jlu = function(a) {
        if (this.ebf) {
            return sessionStorage.getItem(a)
        } else {
            return this.mfd[a]
        }
    };
    this.xeo = function(a) {
        if (this.ebf) {
            sessionStorage.removeItem(a)
        } else {
            delete this.mfd[a]
        }
    };
    this.ejg = function(a) {
        this.wyr = a
    };
    this.cvo = function() {
        return this.wyr
    };
    this.dgz = function() {
        if (this.ebf) {
            sessionStorage.clear()
        } else {
            for (var a in this.mfd) {
                delete this.mfd[a]
            }
        }
    };
    this.lrk = function() {
        if (this.mgk) {
            localStorage.clear()
        } else {
            for (var a in this.oqo) {
                delete this.oqo[a]
            }
        }
    };
    this.xsu = function() {
        try {
            var b = "test";
            localStorage.setItem(b, b);
            localStorage.removeItem(b);
            return true
        } catch (a) {
            return false
        }
    };
    this.xlt = function() {
        try {
            var b = "test";
            sessionStorage.setItem(b, b);
            sessionStorage.removeItem(b);
            return true
        } catch (a) {
            return false
        }
    }
}
tlg.fxx = new Settings();
tlg.tpm = new uma();
tlg.tcn = new cuz().wem();

function qlc() {
    this.lpb = "";
    this.wsc = "";
    this.wrk = null;
    this.canvas = null;
    this.context2D = null;
    this.gfy = null;
    this.xku = null;
    this.ofu = null;
    this.mya = null;
    this.ftt = null;
    this.qsr = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.wiz = 0;
    this.hfp = 0;
    this.fsx = false;
    this.width = 0;
    this.height = 0;
    this.iul = 0;
    this.yqe = 0;
    this.nwu = 1;
    this.vhb = 1;
    this.wmy = false;
    this.nhf = false;
    this.style = null;
    this.ore = null;
    this.xdi = -1;
    this.ymg = false;
    this.zpe = false;
    this.sjr = false;
    this.hmp = false;
    this.kda = false;
    this.avp = false;
    this.rgh = false;
    this.mhk = false;
    this.juz = "";
    this.gpj = "";
    this.dgh = "";
    this.erd = "";
    this.tie = "";
    this.qka = "";
    this.lsu = "1_1_60";
    try {
        if (tlg.fxx.value19) {
            this.juz = tlg.tcn.jlu("sessionValue2");
            this.gpj = tlg.tcn.jlu("sessionValue2")
        } else {
            var c = a("hash");
            if (c != "") {
                tlg.tcn.yjp("sessionValue2", c)
            }
            if (tlg.tcn.jlu("sessionValue2") != "freeplay") {
                this.dgh = tlg.tcn.jlu("sessionValue2")
            } else {
                this.juz = tlg.tcn.jlu("sessionValue2");
                this.gpj = tlg.tcn.jlu("sessionValue2");
                if (a("w") != "") {
                    this.dgh = tlg.tcn.jlu("sessionValue2")
                } else {
                    this.dgh = ""
                }
            }
        }
    } catch (b) {}
    this.imc = null;
    this.szx = null;
    this.tbz = false;
    this.snc = null;
    this.dul = null;
    this.hhv = null;
    this.skp = true;
    this.jto = [0, 0.5, 1];
    try {
        if (tlg.tcn.jlu("sessionValue6")) {
            if (tlg.tcn.jlu("sessionValue6") == "false") {
                this.nmn = 0
            } else {
                if (tlg.tcn.jlu("sessionValue6") == "true") {
                    this.nmn = this.jto.length - 1
                } else {
                    this.nmn = Number(tlg.tcn.jlu("sessionValue6"))
                }
            }
        } else {
            this.nmn = this.jto.length - 1
        }
    } catch (b) {
        this.nmn = 0
    }
    this.myl = 0;
    this.language = new wjg();
    this.cto = 0;
    this.xcj = 1;
    this.tgl = this.xcj;
    this.ebw = [tlg.leb.hdh, tlg.leb.bzu, tlg.leb.dxt];
    this.cej = (tlg.tpm.xuq()) ? 0 : this.ebw.length - 1;
    try {
        if (tlg.tcn.zdy("localValue1")) {
            this.cej = Number(tlg.tcn.zdy("localValue1"));
            if (!tlg.tpm.xuq() && this.ebw[this.cej] === tlg.leb.hdh) {
                this.cej = this.ebw.length - 1
            }
        }
    } catch (b) {}
    this.ygf = false;
    this.zyr = "";
    this.ajm = "";
    this.kmb = 0;
    this.state = 0;
    this.akz = false;
    this.jfg = 5000;
    this.key = 0;
    this.dkq = 0;
    this.qcx = 0;
    this.rlw = 0;
    this.brp = false;
    this.alb = false;
    this.xsh = false;
    this.zut = null;
    this.qrn = 0;
    this.uob = 0;
    this.jod = 0;
    this.jxt = -1;
    this.ofn = -1;
    this.rvx = 0;
    this.szg = null;
    this.jwl = [];
    this.ske = [];
    this.hqn = null;
    this.ibr = false;
    this.gre = 0;
    this.bna = 0;
    this.jpp = false;
    
    function a(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var d = "[\\?&]" + e + "=([^&#]*)";
        var g = new RegExp(d);
        var f = g.exec(window.location.href);
        if (f == null) {
            return ""
        } else {
            return f[1]
        }
    }
    this.wem = function(d) {
        this.dqi();
        tlg.tpm.lpf();
        tlg.tpm.xbs();
        this.gyb();
        if (!this.brp) {
            this.foo()
        }
        this.ooa(this.jnv(d.ore));
        this.avf();
        this.dkb();
        this.slv();
        this.ifr();
        this.qjf();
        this.qsl();
        this.rua();
        this.zds();
        this.gov();
        this.ute();
        return this
    };
    this.slv = function() {};
    this.dqi = function() {};
    this.zds = function() {
        try {
            if (tlg.fxx.value64 && !this.xsh) {
                this.snc = new ufb();
                this.snc.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.gyb = function() {
		
        try {
            if (!tlg.tcn.syr()) {
                tlg.tcn.ejg(window.location.search)
            } else {
                tlg.tcn.ejg("?config=" + a("config"))
            }
            var j = a("exit");
			
            if (j != "") {
                tlg.tcn.yjp("sessionValue5", j)
            }
            if ((!tlg.tcn.jlu("sessionValue5") || tlg.tcn.jlu("sessionValue5") == "null") && tlg.fxx.value8) {
                tlg.tcn.yjp("sessionValue5", tlg.fxx.value8)
            }
            var p = a("curr");
            if (p != "") {
                tlg.tcn.yjp("sessionValue8", p)
            }
            if (tlg.tcn.jlu("sessionValue8") && tlg.tcn.jlu("sessionValue8") != "") {
                this.qka = tlg.tcn.jlu("sessionValue8");
                if (tlg.fxx.value72) {
                    var o = tlg.fxx.value72[this.qka];
                    if (tlg.fxx.value21.e === true && o) {
                        tlg.fxx.value21.s = o.s;
                        tlg.fxx.value21.m = o.m;
                        tlg.fxx.value21.ts = o.ts;
                        tlg.fxx.value21.cs = o.cs
                    }
                    if (tlg.fxx.value76 && tlg.fxx.value76.f === true && o) {
                        tlg.fxx.value76.s = o.s;
                        tlg.fxx.value76.m = o.m;
                        tlg.fxx.value76.ts = o.ts;
                        tlg.fxx.value76.cs = o.cs
                    }
                }
            }
            if (this.efb()) {
                tlg.tcn.yjp("sessionValue7", "")
            }
            var d = a("w");
            if (d != "") {
                tlg.tcn.yjp("sessionValue7", d)
            }
            if (tlg.tcn.jlu("sessionValue7") && tlg.tcn.jlu("sessionValue7") != "") {
                this.tie = tlg.tcn.jlu("sessionValue7")
            }
            var f = a("scale");
            if (f == "proportional" || f == "default") {
                tlg.tcn.yjp("sessionValue22", f)
            }
            var r = a("fullscreen");
            if (r != "") {
                tlg.tcn.yjp("sessionValue14", r)
            }
            if (tlg.tcn.jlu("sessionValue14") != "true" && tlg.tcn.jlu("sessionValue14") != "false") {
                tlg.tcn.yjp("sessionValue14", (tlg.tpm.mql) ? tlg.fxx.value51.m : tlg.fxx.value51.d)
            }
            var i = a("sessionTime");
            if (i != "") {
                tlg.tcn.yjp("sessionValue15", i)
            }
            if (tlg.tcn.jlu("sessionValue15") != "true" && tlg.tcn.jlu("sessionValue15") != "false") {
                tlg.tcn.yjp("sessionValue15", tlg.fxx.value11)
            }
            var t = a("realityCheckURL");
            if (t != "") {
                tlg.tcn.yjp("sessionValue16", t)
            }
            var n = a("realityCheckTime");
            if (n != "") {
                tlg.tcn.yjp("sessionValue17", n)
            }
            if (tlg.fxx.value39 > 0) {
                tlg.tcn.yjp("sessionValue17", tlg.fxx.value39)
            }
            var s = a("loggedInTime");
            if (tlg.tcn.jlu("sessionValue18") != null) {
                var g = tlg.tcn.jlu("sessionValue18").split(";");
                if (g.length == 2) {
                    this.gre = Number(g[0]);
                    this.bna = Number(g[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.bna) {
                    this.bna = Number(s);
                    this.gre = new Date().getTime() - (this.bna * 1000);
                    tlg.tcn.yjp("sessionValue18", this.gre + ";" + this.bna)
                }
            }
            if (tlg.fxx.value86 === true) {
                var q = a("selfTestURL");
                if (q != "") {
                    tlg.tcn.yjp("sessionValue19", q)
                }
                var m = a("limitsURL");
                if (m != "") {
                    tlg.tcn.yjp("sessionValue20", m)
                }
                var l = a("pauseURL");
                if (l != "") {
                    tlg.tcn.yjp("sessionValue21", l)
                }
            }
        } catch (k) {
            console.error(k.cvg)
        }
    };
    this.rua = function() {
        if (!(tlg.tpm.nhu == tlg.os.ltz && tlg.tpm.hyz == tlg.fcw.lvx)) {
            document.ontouchstart = tlg.xiv.kpg
        }
        if (tlg.tpm.hyz != tlg.fcw.fch && tlg.tpm.hyz != tlg.fcw.lvx) {
            document.ontouchmove = tlg.xiv.fyp;
            document.ontouchend = tlg.xiv.naq
        }
        if (!tlg.tpm.wgc) {
            document.onmousedown = tlg.xiv.dov;
            document.onmouseup = tlg.xiv.qfz;
            document.onmousemove = tlg.xiv.jhu
        }
        document.onkeydown = tlg.xiv.jgg;
        document.onkeyup = tlg.xiv.pnr;
        document.oncontextmenu = tlg.xiv.bvu;
        this.avp = (this.jrv() && tlg.tpm.moy() && tlg.tpm.mql);
        if (tlg.tpm.adw() === false && tlg.tpm.nhu === tlg.os.tly && tlg.tpm.uxv() === true && screen.width <= 414 && this.etv()) {
            this.rvx = setInterval(this.cfd, 1000)
        }
    };
    this.kpg = function(d) {
        if (tlg.xiv.ymg === true) {
            tlg.xiv.fcf();
            tlg.xiv.osa()
        }
        tlg.xiv.buv(d)
    };
    this.naq = function(d) {
        if (tlg.xiv.ymg === true) {
            if (tlg.xiv.avp) {
                tlg.xiv.kri()
            } else {
                tlg.xiv.gmf(d)
            }
        } else {
            if (tlg.xiv.rgh) {
                tlg.xiv.cgl()
            }
        }
    };
    this.fyp = function(d) {
        tlg.xiv.rsv(d)
    };
    this.dov = function(d) {
        window.focus();
        if (tlg.xiv.ymg === true) {
            tlg.xiv.fcf();
            tlg.xiv.osa()
        }
        tlg.xiv.buv(d)
    };
    this.qfz = function(d) {
        if (tlg.xiv.ymg === true) {
            tlg.xiv.gmf(d)
        }
    };
    this.jhu = function(d) {};
    this.jgg = function(d) {
        if ((d.keyCode == 122 && (tlg.tpm.nhu == tlg.os.fwm || tlg.tpm.nhu == tlg.os.ywk)) || (d.keyCode == 70 && d.ctrlKey && tlg.tpm.nhu == tlg.os.oru)) {
            return
        }
        tlg.xiv.fcf();
        tlg.xiv.osa();
        tlg.xiv.wqy(d)
    };
    this.pnr = function(d) {
        tlg.xiv.soh(d)
    };
    this.bvu = function() {
        return false
    };
    this.buv = function(d) {};
    this.gmf = function(d) {};
    this.wqy = function(d) {};
    this.soh = function(d) {};
    this.rsv = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.wvv = function() {
        var f = tlg.xiv.hhv.djj("topb"),
            e = tlg.xiv.hhv.djj("settings"),
            d = tlg.xiv.hhv.djj("topi"),
            g = tlg.xiv.hhv.djj("gameb");
        if (tlg.tpm.hyz == tlg.fcw.fch || tlg.tpm.hyz == tlg.fcw.ulq) {
            tlg.xiv.nhf = (window.innerWidth == window.outerWidth)
        } else {
            if (tlg.tpm.hyz == tlg.fcw.pcn || tlg.tpm.hyz == tlg.fcw.cce) {
                tlg.xiv.nhf = (window.innerHeight >= window.outerHeight)
            } else {
                if (tlg.tpm.hyz == tlg.fcw.yfz) {
                    tlg.xiv.nhf = (document.fullscreenElement) ? true : false
                } else {
                    if (tlg.tpm.mql) {
                        if (tlg.tpm.hyz == tlg.fcw.qqh || tlg.tpm.hyz == tlg.fcw.llm || tlg.tpm.hyz == tlg.fcw.pdc) {
                            tlg.xiv.nhf = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (tlg.tpm.hyz == tlg.fcw.lvx) {
                                tlg.xiv.nhf = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.zkw("fullscreen", tlg.xiv.nhf)
        }
        if (f) {
            f.sze.psg("fullscreen", "#zkw", [(tlg.xiv.nhf) ? 1 : 0])
        }
        if (e) {
            e.sze.psg("fullscreen", "#zkw", [(tlg.xiv.nhf) ? 1 : 0])
        }
        if (g) {
            g.sze.psg("fullscreen", "#zkw", [(tlg.xiv.nhf) ? 1 : 0])
        }
        tlg.xiv.ngx();
        tlg.xiv.zqb();
        tlg.xiv.iyy();
        if (tlg.tpm.uxv() === true && tlg.tpm.adw() === false) {
            document.body.style.height = "5000px"
        }
        if (!tlg.tpm.adw() && tlg.tpm.hyz === tlg.fcw.pdc && tlg.xiv.hfp < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.awq = function() {
        tlg.xiv.wvv();
        tlg.xiv.cfd()
    };
    this.cfd = function() {
        if (tlg.tpm.uxv() === true && tlg.tpm.adw() === false) {
            if (tlg.xiv.etv() === true) {
                var f = document.getElementById("slideUpOverlay"),
                    e = document.getElementById("slideElem1"),
                    d = document.getElementById("slideElem2");
                if (f && e && d) {
                    if (window.innerHeight < screen.width) {
                        e.className = "slideUpAnim1";
                        d.className = "slideUpAnim2";
                        f.style.display = "block";
                        document.ontouchstart = null;
                        document.ontouchend = null;
                        document.ontouchmove = null;
                        if (window.ontouchmove == null) {
                            tlg.xiv.wvv();
                            window.ontouchmove = tlg.xiv.awq
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = tlg.xiv.kpg;
                        document.ontouchmove = tlg.xiv.fyp;
                        document.ontouchend = tlg.xiv.naq;
                        if (window.ontouchmove != null) {
                            tlg.xiv.wvv();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.hte = function(g) {
        var j = document.getElementById("rotateOverlay"),
            e = document.getElementById("rotatePanel"),
            k = document.getElementById("rotate"),
            f = document.getElementById("rotateInfo"),
            d = 500,
            l = 700,
            n = window.innerHeight / d,
            m = window.innerWidth / l,
            i = (n < m) ? n : m;
        if (j && k) {
            if (g === true) {
                if (i < 1) {
                    tlg.tpm.xzw(e, i, i)
                }
                f.innerHTML = tlg.xiv.language.fom;
                k.className = "rotateAnim";
                j.style.display = "block";
                tlg.xiv.kda = true
            } else {
                j.style.display = "none";
                k.className = null;
                tlg.xiv.kda = false
            }
        }
    };
    this.qpv = function() {
        var d = tlg.xiv.hhv.djj("settings");
        tlg.xiv.wvv();
        if (d) {
            d.sze.psg("adjustment", "#zkw", [(tlg.xiv.xdi === tlg.ore.xky) ? 0 : 1]);
            d.jlg()
        }
        if (tlg.xiv.ygf === true) {
            tlg.xiv.kda = true;
            tlg.xiv.rye(true);
            tlg.xiv.hte(true)
        } else {
            tlg.xiv.kda = false;
            tlg.xiv.rye((tlg.xiv.jto[tlg.xiv.nmn] === 0));
            tlg.xiv.hte(false)
        }
    };
    this.ngx = function() {
        this.wiz = window.innerWidth, this.hfp = window.innerHeight;
        this.fsx = false;
        if (tlg.tpm.adw() == true && tlg.fxx.value69 === true) {
            if (tlg.tpm.kff() === true) {
                this.fsx = true;
                this.wiz = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.hfp = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.wiz > this.hfp) {
                    this.hfp *= 0.98
                }
            } else {
                if (tlg.tpm.uxv() === true) {
                    this.fsx = true
                }
            }
        }
    };
    this.iyy = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.wiz,
            d = this.hfp;
        this.wmy = (this.nhf || i < this.width || d < this.height || this.ore.csm);
        g = this.haj(this.wmy);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.wmy) {
            if (this.ore.lye || tlg.tcn.jlu("sessionValue22") == "proportional") {
                if (f > e) {
                    this.nwu = e;
                    this.vhb = e
                } else {
                    this.nwu = f;
                    this.vhb = f
                }
            } else {
                this.nwu = f;
                this.vhb = e
            }
        } else {
            this.nwu = 1;
            this.vhb = 1
        }
        tlg.tpm.xzw(this.canvas, this.nwu, this.vhb);
        if (this.gfy != null) {
            tlg.tpm.xzw(this.gfy, this.nwu, this.vhb, ((this.ore.gfy.eso.x) - ((this.ore.gfy.eso.x + this.ore.gfy.xbz) / 2 * (1 - this.nwu))), ((this.ore.gfy.eso.y) - ((this.ore.gfy.eso.y + this.ore.gfy.iwp) / 2 * (1 - this.vhb))))
        }
        if (this.ofu != null) {
            tlg.tpm.xzw(this.ofu, this.nwu, this.vhb)
        }
        if (this.wmy) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.nwu))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.vhb))) / 2
        } else {
            this.offsetLeft = this.wrk.offsetLeft;
            this.offsetTop = this.wrk.offsetTop
        }
    };
    this.zqb = function() {
        if (this.irn() === true) {
            var e = null;
            if (this.ebw[this.cej] === tlg.leb.hdh) {
                if (window.orientation === -90) {
                    e = tlg.ore.ksk
                } else {
                    e = tlg.ore.xky
                }
            } else {
                if (this.ebw[this.cej] === tlg.leb.bzu) {
                    e = tlg.ore.ksk
                } else {
                    if (this.ebw[this.cej] === tlg.leb.dxt) {
                        e = tlg.ore.xky
                    }
                }
            }
            this.ygf = (this.hfp > this.wiz);
            this.ooa(e);
            this.kxi(false);
            if (this.hmp === true) {
                this.jlg()
            } else {
                this.hhv.psg("loading", "#jlg")
            }
        } else {
            if (tlg.tpm.mql) {
                var f = (this.wiz > this.hfp) ? this.xcj : this.cto,
                    d = this.ore.fbn,
                    e = null;
                if (f != this.tgl) {
                    this.tgl = f;
                    if (this.brp) {
                        e = (this.tgl == this.xcj) ? tlg.ore.slp : tlg.ore.lwq
                    } else {
                        e = (this.tgl == this.xcj) ? tlg.fxx.value33 : tlg.fxx.value32
                    }
                    this.ooa(e);
                    this.kxi((d != this.ore.fbn) || this.brp);
                    if (this.hmp === true) {
                        if (this.brp && this.alb) {
                            this.nin(this.ieh(this.language.jlk))
                        } else {
                            this.jlg()
                        }
                    } else {
                        this.hhv.psg("loading", "#jlg")
                    }
                }
            } else {
                if (!this.brp) {
                    e = (this.nhf) ? tlg.fxx.value15 : tlg.fxx.value14;
                    this.ooa(e);
                    this.kxi(false);
                    if (this.hmp === true) {
                        this.jlg()
                    } else {
                        this.hhv.psg("loading", "#jlg")
                    }
                }
            }
        }
    };
    this.irn = function() {
        return false
    };
    this.etv = function() {
        return false
    };
    this.ooa = function(d) {};
    this.avf = function() {
        this.style = new gkt()
    };
    this.haj = function(d) {
        var e = 0;
        if (tlg.tpm.kff() && window.innerWidth > window.innerHeight && d) {
            if (this.ymg === true && document.body.style.backgroundColor !== this.style.gkr.backgroundColor) {
                document.body.style.backgroundColor = this.style.gkr.backgroundColor
            }
        }
        return e
    };
    this.egw = function() {
        if (tlg.tpm.kff() && !tlg.tpm.adw() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.krh = function() {
        return false
    };
    this.ifr = function() {
        if (tlg.tpm.wgc) {
            this.dul = new dwe()
        } else {
            this.dul = new pgw()
        }
        this.dul.wem();
        this.dul.ice(this.mhp())
    };
    this.qjf = function() {
        this.hhv = new eds();
        this.hhv.wem();
        this.hhv.zss("jackpots")
    };
    this.mhp = function() {
        var d = new sqn();
        d.wem();
        return d
    };
    this.foo = function() {
        this.zut = new qkd()
    };
    this.dkb = function() {
        try {
            var d = a("lang"),
                f = a("uselang"),
                o = [],
                p = [];
            if (d != "") {
                tlg.tcn.yjp("sessionValue1", d)
            }
            if (f != "") {
                tlg.tcn.yjp("sessionValue11", f)
            }
            if (tlg.tcn.jlu("sessionValue11")) {
                o = tlg.tcn.jlu("sessionValue11").split(",");
                for (var l = 0, m = o.length; l < m; l++) {
                    for (var k = 0, g = tlg.fxx.value5.length; k < g; k++) {
                        if (o[l] === tlg.fxx.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(tlg.fxx.value5[0])
                }
                tlg.fxx.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    tlg.fxx.value5.push(p[l])
                }
            }
            if (tlg.tcn.jlu("sessionValue1") == null) {
                var q = tlg.tpm.sys();
                if (this.rzc(q)) {
                    tlg.tcn.yjp("sessionValue1", q)
                } else {
                    if (q === tlg.language.EN && this.rzc(tlg.language.US)) {
                        tlg.tcn.yjp("sessionValue1", tlg.language.US)
                    } else {
                        if (q === tlg.language.DE && this.rzc(tlg.language.AT)) {
                            tlg.tcn.yjp("sessionValue1", tlg.language.AT)
                        } else {
                            if (q === tlg.language.ES && this.rzc(tlg.language.MX)) {
                                tlg.tcn.yjp("sessionValue1", tlg.language.MX)
                            } else {
                                if (q === tlg.language.ES && this.rzc(tlg.language.CO)) {
                                    tlg.tcn.yjp("sessionValue1", tlg.language.CO)
                                } else {
                                    if (q === tlg.language.ES && this.rzc(tlg.language.CL)) {
                                        tlg.tcn.yjp("sessionValue1", tlg.language.CL)
                                    } else {
                                        if (q === tlg.language.ES && this.rzc(tlg.language.VE)) {
                                            tlg.tcn.yjp("sessionValue1", tlg.language.VE)
                                        } else {
                                            if (q === tlg.language.EN && this.rzc(tlg.language.BR)) {
                                                tlg.tcn.yjp("sessionValue1", tlg.language.BR)
                                            } else {
                                                tlg.tcn.yjp("sessionValue1", tlg.fxx.value5[0])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.rzc(tlg.tcn.jlu("sessionValue1"))) {
                for (var l = 0, m = tlg.fxx.value5.length; l < m; l++) {
                    if (tlg.fxx.value5[l] == tlg.tcn.jlu("sessionValue1")) {
                        this.myl = l;
                        break
                    }
                }
                this.language = this.msu(tlg.tcn.jlu("sessionValue1"))
            } else {
                this.myl = 0;
                this.language = this.msu(tlg.fxx.value5[this.myl]);
                tlg.tcn.yjp("sessionValue1", tlg.fxx.value5[this.myl])
            }
        } catch (n) {
            this.myl = 0;
            this.language = this.msu(tlg.fxx.value5[this.myl]);
            console.error(n.cvg)
        }
    };
    this.gov = function() {
        var d = (tlg.fxx.value45 == tlg.itu.cii) ? this.ore.itu.xiv : this.ore.itu.tdz;
        this.wrk = document.getElementById("gameArea");
        if (this.fsx === false) {
            this.wrk.style.marginTop = (-d.eso.height / 2) + "px";
            this.wrk.style.marginLeft = (-d.eso.width / 2) + "px"
        } else {
            this.wrk.style.left = "0px";
            this.wrk.style.top = "0px";
            this.wrk.style.marginTop = ((window.innerHeight - d.eso.height) / 2) + "px";
            this.wrk.style.marginLeft = ((window.innerWidth - d.eso.width) / 2) + "px"
        }
        this.wrk.style.width = (d.eso.width > window.innerWidth) ? window.innerWidth + "px" : d.eso.width + "px";
        this.wrk.style.height = (d.eso.height > window.innerHeight) ? window.innerHeight + "px" : d.eso.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.eso.width);
        this.canvas.height = Math.round(d.eso.height);
        this.context2D = this.canvas.getContext("2d");
        this.ofu = document.getElementById("gameOverlay");
        if (this.ofu) {
            this.ofu.style.width = d.eso.width + "px";
            this.ofu.style.height = d.eso.height + "px"
        }
        this.uye(d)
    };
    this.uye = function(e) {
        var f = new dnb(),
            d = (tlg.fxx.value45 == tlg.itu.cii) ? this.style.itu.xiv : this.style.itu.tdz;
        f.wem(e.eso, this.context2D);
        f.parent = this;
        f.wuk = (tlg.tpm.mql) ? this.pqd : this.cgl;
        f.pdx = (this.brp) ? this.language.lad : this.language.tqn;
        f.abl = this.language.error;
        f.qgh(e);
        f.ler(d);
        this.hhv.sqh("loading", f)
    };
    this.mee = function() {
        var d = new gcs();
        d.wem(this.ore.gdk.eso, null, this.context2D);
        d.parent = this;
        d.qgh(this.ore.gdk);
        d.ler(this.style.gdk);
        if (tlg.tcn.jlu("sessionValue15") == "true" && tlg.fxx.value49) {
            d.boq("time", "", "--:-- [--:--]")
        } else {
            if (tlg.tcn.jlu("sessionValue15") == "true" || tlg.fxx.value49) {
                d.boq("time", "", "--:--")
            }
        }
        if (this.efb()) {
            d.boq("freeplay", "", this.language.rtx)
        } else {
            d.boq("id", "", "")
        }
        this.hhv.sqh("topi", d)
    };
    this.ycw = function() {
        var d = new ffy();
        d.wem(this.ore.ivg.eso, null, this.context2D);
        d.parent = this;
        d.qgh(this.ore.ivg);
        d.ler(this.style.ivg, false);
        d.xza(false);
        this.hhv.sqh("topb", d)
    };
    this.suq = function() {};
    this.mqm = function() {
        var d = new nxt();
        d.wem(this.ore.qyn.eso, null, this.context2D);
        d.parent = this;
        d.kor(this.ore.qyn);
        d.ler(this.style.qyn);
        d.xza(false);
        this.hhv.sqh("stats", d)
    };
    this.dii = function() {
        this.mya = new lpw();
        this.mya.wem();
        this.mya.ler(this.style.mya);
        this.mya.qgh(this.ore.mya)
    };
    this.hdc = function() {
        this.ftt = new qlf();
        this.ftt.wem();
        this.ftt.ler(this.style.ftt);
        this.ftt.qgh(this.ore.ftt)
    };
    this.ofj = function() {
        if (this.kyv()) {
            this.qsr.hqi = document.getElementById("jurisdictionDiv");
            this.qsr.yty = document.getElementById("btnsp");
            this.qsr.zks = document.getElementById("btnsl");
            this.qsr.lck = document.getElementById("btnst");
            if (this.qsr.yty) {
                this.qsr.yty.innerHTML = this.language.war;
                this.qsr.yty.onclick = this.bxk;
                this.qsr.yty.ontouchend = this.bxk
            }
            if (this.qsr.zks) {
                this.qsr.zks.innerHTML = this.language.rnr;
                this.qsr.zks.onclick = this.yxr;
                this.qsr.zks.ontouchend = this.yxr
            }
            if (this.qsr.lck) {
                this.qsr.lck.innerHTML = this.language.aqe;
                this.qsr.lck.onclick = this.dzh;
                this.qsr.lck.ontouchend = this.dzh
            }
            this.tky();
            this.fnx()
        }
    };
    this.yrs = function(e) {
        var d = new oza();
        d.wem(this.ore.fdp.eso, null, this.context2D);
        d.parent = this;
        d.mxo = true;
        if (e) {
            d.ppy(e)
        }
        d.kor(this.ore.fdp);
        d.mhl(this.language);
        d.ler(this.style.fdp);
        d.qgh(this.ore.fdp);
        d.xza(false);
        this.hhv.sqh("autop", d)
    };
    this.wpt = function(d) {
        var e = new rax();
        e.wem(this.ore.nwv.eso, null, this.context2D);
        e.parent = this;
        if (d) {
            e.bsd(d)
        }
        e.xza(false);
        this.hhv.sqh("settings", e)
    };
    this.kxi = function(d) {};
    this.cyk = function() {
        var d = this.hhv.djj("stats");
        if (d) {
            d.ota(this.ore.qyn.eso);
            d.qgh(this.ore.qyn)
        }
    };
    this.gsr = function() {
        if (this.mya) {
            this.mya.qgh(this.ore.mya)
        }
    };
    this.ved = function() {
        if (this.ftt) {
            this.ftt.qgh(this.ore.ftt)
        }
    };
    this.tky = function() {
        var d = null,
            e = 0;
        if (this.qsr) {
            d = this.ore.pbw;
            if (this.qsr.hqi) {
                tlg.tpm.rci(this.qsr.hqi, d.pwt)
            }
            if (this.qsr.yty) {
                this.qsr.yty.style.fontSize = d.pak.fontSize + "px";
                this.qsr.yty.style.textIndent = d.pak.textIndent + "px";
                tlg.tpm.rci(this.qsr.yty, d.rgi)
            }
            if (this.qsr.zks) {
                this.qsr.zks.style.fontSize = d.pak.fontSize + "px";
                this.qsr.zks.style.textIndent = d.pak.textIndent + "px";
                tlg.tpm.rci(this.qsr.zks, d.aft)
            }
            if (this.qsr.lck) {
                this.qsr.lck.style.fontSize = d.pak.fontSize + "px";
                this.qsr.lck.style.textIndent = d.pak.textIndent + "px";
                tlg.tpm.rci(this.qsr.lck, d.dqc)
            }
            if (this.qsr.hqi) {
                e = (d.pwt.width - d.pwt.height) / 2;
                if (this.xdi == tlg.ore.ksk) {
                    this.qsr.hqi.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.qsr.hqi.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.cvy = function() {
        var d = this.hhv.djj("autop");
        if (d) {
            d.ota(this.ore.fdp.eso);
            d.qgh(this.ore.fdp)
        }
    };
    this.dqd = function() {
        var d = this.hhv.djj("settings");
        if (d) {
            d.ota(this.ore.nwv.eso);
            d.qgh(this.ore.nwv)
        }
    };
    this.peh = function() {
        var d = this.hhv.djj("topi");
        if (d) {
            d.ota(this.ore.gdk.eso);
            d.qgh(this.ore.gdk)
        }
    };
    this.hnz = function() {
        var d = this.hhv.djj("topb");
        if (d) {
            d.ota(this.ore.ivg.eso);
            d.qgh(this.ore.ivg)
        }
    };
    this.nml = function() {
        var e = this.hhv.djj("loading"),
            d = (tlg.fxx.value45 == tlg.itu.cii) ? this.ore.itu.xiv : this.ore.itu.tdz;
        if (e) {
            this.canvas.width = 0;
            if (this.fsx === false) {
                this.wrk.style.marginTop = (-d.eso.height / 2) + "px";
                this.wrk.style.marginLeft = (-d.eso.width / 2) + "px"
            } else {
                this.wrk.style.left = "0px";
                this.wrk.style.top = "0px";
                this.wrk.style.marginTop = ((this.hfp - d.eso.height) / 2) + "px";
                this.wrk.style.marginLeft = ((this.wiz - d.eso.width) / 2) + "px"
            }
            this.wrk.style.width = (d.eso.width > this.wiz) ? this.wiz + "px" : d.eso.width + "px";
            this.wrk.style.height = (d.eso.height > this.hfp) ? this.hfp + "px" : d.eso.height + "px";
            this.canvas.width = Math.round(d.eso.width);
            this.canvas.height = Math.round(d.eso.height);
            if (this.ofu) {
                this.ofu.style.width = d.eso.width + "px";
                this.ofu.style.height = d.eso.height + "px"
            }
            e.ota(d.eso);
            e.qgh(d)
        }
    };
    this.qsl = function() {
        if (tlg.tpm.mql && !tlg.tpm.wgc) {
            if (!this.dul.pmx && tlg.tpm.hyz != tlg.fcw.zxb) {
                this.skp = false;
                this.nmn = 0
            }
        }
    };
    this.jnv = function(d) {
        if (tlg.tpm.mql) {
            if (!this.brp) {
                return tlg.ore.dwt
            } else {
                if (!this.xsh) {
                    return tlg.ore.slp
                }
            }
        }
        return d
    };
    this.glu = function() {
        var d = this.hhv.djj("loading");
        this.wvv();
        if (d) {
            d.lxr = true
        }
        if ((tlg.tpm.hyz === tlg.fcw.qqh || tlg.tpm.hyz === tlg.fcw.cce || tlg.tpm.hyz === tlg.fcw.tzt) && tlg.tpm.nhu === tlg.os.ltz && tlg.tpm.wbj === true) {
            if (this.dul.pmx === false || tlg.tpm.moy() === false || tlg.tpm.rfv() === false) {
                tlg.shx = tlg.itx.dmo
            }
        }
        if (tlg.shx == 0) {
            if (this.skp === true && tlg.tpm.qmt().length === 0) {
                this.skp = false
            }
            if (d) {
                d.jlg(0)
            }
            this.inv();
            if (this.skp === true) {
                this.cmm()
            }
            this.dul.start()
        } else {
            if (d) {
                if (tlg.shx == tlg.cvg.hxy) {
                    d.jcz = this.language.rbv;
                    d.jlg(0)
                } else {
                    d.jcz = this.language.ffi;
                    if (tlg.tpm.nhu === tlg.os.ltz || tlg.tpm.nhu === tlg.os.ywk) {
                        if (tlg.tcn.jlu("sessionValue1") === tlg.language.TR) {
                            d.jcz += "|Google Chrome" + this.language.ili
                        } else {
                            if (tlg.tcn.jlu("sessionValue1") === tlg.language.GE || tlg.tcn.jlu("sessionValue1") === tlg.language.HU) {
                                d.jcz += "|" + this.language.ike + " Google Chrome" + this.language.oaq
                            } else {
                                d.jcz += "|" + this.language.ili + " Google Chrome"
                            }
                        }
                    } else {
                        if (tlg.tpm.nhu === tlg.os.fwm || tlg.tpm.nhu === tlg.os.ywk) {
                            if (tlg.tcn.jlu("sessionValue1") === tlg.language.TR) {
                                d.jcz += "|Google Chrome, Mozilla Firefox" + this.language.ili
                            } else {
                                if (tlg.tcn.jlu("sessionValue1") === tlg.language.GE || tlg.tcn.jlu("sessionValue1") === tlg.language.HU) {
                                    d.jcz += "|" + this.language.ike + " Google Chrome, Mozilla Firefox" + this.language.oaq
                                } else {
                                    d.jcz += "|" + this.language.ili + " Google Chrome, Mozilla Firefox"
                                }
                            }
                        }
                    }
                    console.error("Errorcode: " + tlg.shx);
                    d.jlg(0)
                }
            }
        }
    };
    this.inv = function() {};
    this.cmm = function() {};
    this.ute = function() {
        var e = this.lpb + this.ore.type + "/",
            d = this.hhv.djj("loading");
        if (!this.brp) {
            this.dul.sco("continue", tlg.fxx.value30.c.p + "/basic/images/" + this.ore.type + "/btn_continue.png")
        }
        if (tlg.fxx.value45 == tlg.itu.cii) {
            e += "load.jpg"
        } else {
            if (tlg.fxx.value45 == tlg.itu.epi) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.hhp = true
            }
        }
        this.dul.sco("splash", e);
        this.dul.yqj()
    };
    this.kht = function() {};
    this.rzc = function(e) {
        for (var d = 0; d < tlg.fxx.value5.length; d++) {
            if (tlg.fxx.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.zze = function() {
        tlg.xiv.zpe = true;
        if (!tlg.xiv.brp) {
            tlg.xiv.ecf();
            if (tlg.xiv.ljp()) {
                tlg.xiv.hnp()
            }
        } else {
            tlg.xiv.enn()
        }
        tlg.xiv.connect()
    };
    this.ecf = function() {};
    this.enn = function() {};
    this.connect = function() {
        this.imc.connect(this.zyr, this.juz, this.gpj, this.dgh, this.lsu, this.tie, this.qka)
    };
    this.ndf = function(d) {
        if (typeof d === "undefined") {
            tlg.xiv.imc.ndf(0)
        } else {
            tlg.xiv.imc.ndf(d)
        }
    };
    this.iqa = function(d) {
        this.dkq = 0;
        this.qcx = 0;
        this.rlw = d;
        clearInterval(this.qrn);
        this.qrn = setInterval(this.kxh, 1000)
    };
    this.kxh = function() {
        var d = tlg.xiv.hhv.djj("loading");
        tlg.xiv.dkq++;
        tlg.xiv.qcx = Math.round(tlg.fxx.value47 / 1000) - tlg.xiv.dkq;
        tlg.xiv.qcx = (tlg.xiv.qcx > 0) ? tlg.xiv.qcx : 0;
        if (!tlg.xiv.ymg) {
            if (d) {
                d.jcz = tlg.xiv.language.abb + "|" + tlg.xiv.language.fet + ": " + tlg.xiv.rlw + " (" + tlg.xiv.qcx + " sec)";
                d.jlg(0)
            }
        }
    };
    this.pxm = function() {
        return tlg.fxx.value74
    };
    this.jlg = function(d, g, e, f) {};
    this.clv = function() {
        return (this.hmp === true && this.ymg === true && this.ygf === false)
    };
    this.nin = function(e) {
        var d = this.hhv.djj("history");
        this.hmp = true;
        if (this.ymg) {
            if (this.ore.ulu) {
                tlg.tpm.gxk(this.context2D, this.ore.xiv.eso.x - this.ore.xiv.nlj, this.ore.xiv.eso.y - this.ore.xiv.nlj, this.ore.xiv.eso.width + 2 * this.ore.xiv.nlj, this.ore.xiv.eso.height + 2 * this.ore.xiv.nlj, "black", 1)
            }
            tlg.tpm.der(this.context2D, e, "white", this.ore.xiv.eso.x, this.ore.xiv.eso.y, this.ore.xiv.eso.width, this.ore.xiv.eso.height, "arial", 28, "bold");
            if (d) {
                d.jlg()
            }
        }
    };
    this.whz = function() {
        if (tlg.xiv.mya) {
            tlg.xiv.mya.mcn()
        }
        tlg.xiv.dnp(false);
        tlg.xiv.bta.kzh(false);
        tlg.xiv.bta.sze.psg("exit", "#hoe", [true]);
        if (tlg.tpm.khm()) {
            tlg.tpm.rom();
            setTimeout(tlg.xiv.wvv, 1400)
        }
        if (tlg.fxx.value67 > 0) {
            tlg.xiv.ndf(tlg.fxx.value67)
        } else {
            if (tlg.tcn.jlu("sessionValue16") && tlg.tcn.jlu("sessionValue16") != "null" && tlg.xiv.hqn) {
                tlg.xiv.hqn.cws({
                    sender: tlg.xiv.zyr,
                    lang: tlg.tcn.jlu("sessionValue1").toUpperCase()
                });
                window.location.href = decodeURIComponent(tlg.tcn.jlu("sessionValue16"))
            } else {
                if (tlg.tcn.jlu("sessionValue5") && tlg.tcn.jlu("sessionValue5") != "null" && tlg.xiv.hqn) {
                    tlg.xiv.hqn.ymr({
                        sender: tlg.xiv.zyr,
                        lang: tlg.tcn.jlu("sessionValue1").toUpperCase()
                    });
                    if (tlg.tcn.jlu("sessionValue5") !== "(api)") {
                        window.location.href = decodeURIComponent(tlg.tcn.jlu("sessionValue5"))
                    }
                }
            }
        }
    };
    this.ndx = function() {
        clearTimeout(tlg.xiv.jxt);
        tlg.xiv.dnp(false);
        if (tlg.xiv.bta) {
            tlg.xiv.bta.kzh(false)
        }
        if (!tlg.xiv.brp) {
            tlg.xiv.stop();
            if (tlg.xiv.bta) {
                tlg.xiv.bta.sze.psg("info", "#setInfoText", [tlg.xiv.language.mil]);
                tlg.xiv.jlg()
            }
            if (tlg.xiv.irn() === true && tlg.tpm.khm()) {
                tlg.tpm.rom();
                setTimeout(tlg.xiv.wvv, 800);
                setTimeout(tlg.xiv.imc.eyb.close, 800)
            } else {
                tlg.xiv.imc.eyb.close()
            }
        } else {
            tlg.xiv.imc.close()
        }
    };
    this.vcm = function() {
        tlg.xiv.avp = true
    };
    this.kri = function() {
        if (tlg.tcn.jlu("sessionValue14") == "true") {
            if (tlg.tpm.mql == true) {
                if (tlg.xiv.avp == true) {
                    tlg.xiv.avp = false;
                    tlg.tpm.rom();
                    setTimeout(tlg.xiv.wvv, 1400)
                }
            } else {
                tlg.tpm.rom();
                setTimeout(tlg.xiv.wvv, 1400)
            }
        }
    };
    this.fks = function() {
        var e = (tlg.xiv.irn() === true) ? "smartphone" : "desktop",
            j = "en",
            f = tlg.tcn.jlu("sessionValue1");
        if (f == tlg.language.ES || f == tlg.language.CO || f == tlg.language.CL || f == tlg.language.MX || f == tlg.language.VE) {
            j = "es"
        } else {
            if (f == tlg.language.RO) {
                j = "ro"
            } else {
                if (f == tlg.language.PT || f == tlg.language.BR) {
                    j = "pt"
                } else {
                    if (f == tlg.language.HR) {
                        j = "hr"
                    } else {
                        if (f == tlg.language.DE) {
                            j = "de"
                        } else {
                            if (f == tlg.language.SE) {
                                j = "se"
                            } else {
                                if (f == tlg.language.RU) {
                                    j = "ru"
                                }
                            }
                        }
                    }
                }
            }
        }
        if (tlg.xiv.nei != "") {
            var g = null,
                i = "",
                d = "";
            if (tlg.xiv.nei != "") {
                i += "rtp=" + tlg.xiv.nei
            }
            if (tlg.xiv.wcw != "") {
                i += (tlg.xiv.nei != "") ? "&" : "";
                i += "maxwin=" + ((tlg.xiv.wcw == "0") ? "0" : tlg.xiv.rfg(Number(tlg.xiv.wcw) * tlg.xiv.twp()))
            }
            d = encodeURIComponent(i);
            g = window.open(tlg.fxx.value30.c.p + "/gamerules/" + j + "/" + e + "/" + tlg.xiv.zyr.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (g == null || typeof g === "undefined") {
                window.location.href = tlg.fxx.value30.c.p + "/gamerules/" + j + "/" + e + "/" + tlg.xiv.zyr.toLowerCase() + ".html?" + d
            }
        }
    };
    this.cxf = function() {
        tlg.xiv.tbz = false;
        tlg.xiv.xom();
        tlg.xiv.jlq();
        tlg.xiv.khf()
    };
    this.eru = function() {
        var d = tlg.xiv.hhv.djj("stats");
        if (d) {
            d.fag(true, true)
        }
        tlg.xiv.szx.close(true)
    };
    this.olt = function() {
        var d = tlg.xiv.hhv.djj("stats");
        tlg.xiv.stop();
        if (d && d.izz()) {
            d.fag(true, true)
        }
        tlg.xiv.imc.eyb.close();
        if (tlg.xiv.szx) {
            tlg.xiv.szx.close(false)
        }
    };
    this.qkz = function() {
        clearTimeout(tlg.xiv.jxt);
        tlg.xiv.bta.kzh(false);
        tlg.xiv.stop();
        tlg.xiv.imc.eyb.div()
    };
    this.raj = function() {
        if (tlg.xiv.alb) {
            return
        }
        var d = tlg.xiv.hhv.djj("history");
        if (d) {
            d.kzh(false)
        }
        tlg.xiv.stop();
        tlg.xiv.imc.opi(tlg.xiv.kmb)
    };
    this.uoe = function() {
        if (tlg.xiv.alb) {
            return
        }
        var d = tlg.xiv.hhv.djj("history");
        if (d) {
            d.kzh(false)
        }
        tlg.xiv.stop();
        tlg.xiv.imc.xoe(tlg.xiv.kmb)
    };
    this.uow = function() {
        var d = tlg.xiv.hhv.djj("history");
        if (d) {
            d.kzh(false)
        }
        tlg.xiv.stop();
        clearInterval(tlg.xiv.rvx);
        tlg.xiv.lhq();
        tlg.xiv.imc.close()
    };
    this.ckm = function() {
        tlg.xiv.dul.hku("btn");
        tlg.xiv.dul.ikn("btn");
        tlg.xiv.nsr()
    };
    this.hbg = function() {
        var f = tlg.xiv.hhv.djj("topb"),
            e = tlg.xiv.hhv.djj("settings"),
            g = tlg.xiv.hhv.djj("gameb"),
            d = tlg.xiv.hhv.djj("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (tlg.xiv.dul.pmx === true) {
            tlg.xiv.nmn = (tlg.xiv.nmn === tlg.xiv.jto.length - 1) ? 0 : tlg.xiv.nmn + 1;
            tlg.xiv.axe(tlg.xiv.jto[tlg.xiv.nmn])
        } else {
            tlg.xiv.nmn = (tlg.xiv.nmn === tlg.xiv.jto.length - 1) ? 0 : tlg.xiv.jto.length - 1;
            tlg.xiv.rye((tlg.xiv.jto[tlg.xiv.nmn] === 0))
        }
        tlg.tcn.yjp("sessionValue6", tlg.xiv.nmn);
        if (tlg.xiv.jto[tlg.xiv.nmn] > 0) {
            tlg.xiv.dul.ikn("audioon")
        }
        if (d) {
            d.yyt("audio", tlg.xiv.jto[tlg.xiv.nmn])
        }
        if (f) {
            f.sze.psg("audio", "#zkw", [tlg.xiv.nmn])
        }
        if (e) {
            e.sze.psg("audio", "#zkw", [tlg.xiv.nmn])
        }
        if (g) {
            g.sze.psg("audio", "#zkw", [tlg.xiv.nmn])
        }
        tlg.xiv.jlg()
    };
    this.pqd = function() {
        tlg.xiv.rgh = true
    };
    this.cgl = function() {};
    this.akm = function() {
        var d = tlg.xiv.hhv.djj("settings");
        if (d) {
            if (d.izz()) {
                tlg.xiv.byu()
            } else {
                tlg.xiv.glm()
            }
            tlg.xiv.dul.ikn("btn");
            if (tlg.xiv.ore.utu === false) {
                tlg.xiv.bta.sze.psg("setting", "#iaz", [d.izz()])
            }
        }
    };
    this.bib = function() {
        var d = tlg.xiv.hhv.djj("settings"),
            e = "";
        tlg.xiv.cej = (tlg.xiv.cej < tlg.xiv.ebw.length - 1) ? tlg.xiv.cej + 1 : (tlg.tpm.xuq()) ? 0 : 1;
        tlg.tcn.eqi("localValue1", tlg.xiv.cej);
        tlg.xiv.wvv();
        if (d) {
            d.sze.psg("adjustment", "#zkw", [(tlg.xiv.xdi === tlg.ore.xky) ? 0 : 1]);
            if (tlg.xiv.ebw[tlg.xiv.cej] === tlg.leb.bzu) {
                e = tlg.xiv.language.left
            } else {
                if (tlg.xiv.ebw[tlg.xiv.cej] === tlg.leb.dxt) {
                    e = tlg.xiv.language.mym
                } else {
                    if (tlg.xiv.ebw[tlg.xiv.cej] === tlg.leb.hdh) {
                        e = tlg.xiv.language.xye
                    }
                }
            }
            d.sze.psg("adjustment", "#vjp", [e])
        }
    };
    this.bxk = function() {
        if (tlg.tcn.jlu("sessionValue21") && tlg.tcn.jlu("sessionValue21") != "null") {
            window.location.href = decodeURIComponent(tlg.tcn.jlu("sessionValue21"))
        }
    };
    this.yxr = function() {
        if (tlg.tcn.jlu("sessionValue20") && tlg.tcn.jlu("sessionValue20") != "null") {
            window.location.href = decodeURIComponent(tlg.tcn.jlu("sessionValue20"))
        }
    };
    this.dzh = function() {
        if (tlg.tcn.jlu("sessionValue19") && tlg.tcn.jlu("sessionValue19") != "null") {
            window.location.href = decodeURIComponent(tlg.tcn.jlu("sessionValue19"))
        }
    };
    this.cih = function(e, d) {
        this.bta.sze.psg("creditd", "#vjp", [this.rfg(e), d])
    };
    this.jsg = function(e, d) {
        if (e > 0) {
            this.bta.sze.psg("betd", "#vjp", [this.rfg(e), d])
        } else {
            this.bta.sze.psg("betd", "#vjp", ["", d])
        }
    };
    this.vgk = function(e) {
        var d = this.hhv.djj("topi");
        this.kmb = e;
        if (d) {
            d.zvn("id", (e > 0) ? e : "")
        }
    };
    this.hnb = function() {
        var e = "",
            d = tlg.xiv.hhv.djj("topi");
        if (tlg.fxx.value49) {
            e += tlg.xiv.isq()
        }
        if (tlg.fxx.value49 && tlg.tcn.jlu("sessionValue15") == "true") {
            e += " ["
        }
        if (tlg.tcn.jlu("sessionValue15") == "true") {
            e += tlg.xiv.wid()
        }
        if (tlg.fxx.value49 && tlg.tcn.jlu("sessionValue15") == "true") {
            e += "]"
        }
        if (d) {
            d.zvn("time", e)
        }
    };
    this.wid = function() {
        return this.getTime(new Date().getTime() - this.uut)
    };
    this.isq = function() {
        var d = new Date();
        return this.pvh(d.getHours()) + ":" + this.pvh(d.getMinutes())
    };
    this.getTime = function(e) {
        var g = e,
            d = 0,
            f = 0;
        d = Math.floor(e / (60000));
        g = e - d * 60000;
        f = Math.round(g / 1000);
        if (f >= 60) {
            f -= 60;
            d++
        }
        return this.pvh(d) + ":" + this.pvh(f)
    };
    this.pvh = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.hqs = function() {
        if (tlg.tcn.jlu("sessionValue15") == "true" || tlg.fxx.value49) {
            if (tlg.fxx.value49) {
                this.isq()
            }
            this.uut = (this.gre > 0) ? this.gre : new Date().getTime();
            this.hnb();
            this.uob = setInterval(this.hnb, 1000)
        }
    };
    this.pom = function() {
        clearInterval(this.uob)
    };
    this.ztx = function(d) {
        this.uut -= d
    };
    this.huc = function(d, f) {
        var e = this.hhv.djj("loading");
        if (e && e.jcz == null) {
            if (f && f !== "") {
                e.abl = f
            } else {
                e.abl = this.language.error
            }
            e.jcz = d;
            e.jlg(this.dul.pmy())
        }
    };
    this.glm = function() {};
    this.byu = function() {};
    this.neg = function() {};
    this.ljk = function() {};
    this.nsr = function() {
        var g = false,
            i = this.hhv.djj("topb"),
            f = this.hhv.djj("settings"),
            j = this.hhv.djj("gameb"),
            d = this.hhv.djj("topi");
        this.myl = (this.myl + 1 == tlg.fxx.value5.length) ? 0 : this.myl + 1;
        tlg.tcn.yjp("sessionValue1", tlg.fxx.value5[this.myl]);
        this.language = this.msu(tlg.fxx.value5[this.myl]);
        this.mhl();
        if (i && g == false) {
            var e = i.sze.djj("language");
            if (e) {
                e.jcq(this.peq(tlg.fxx.value5[this.myl]));
                g = true
            }
            i.nbr(true)
        }
        if (f && g == false) {
            var e = f.sze.djj("language");
            if (e) {
                e.jcq(this.peq(tlg.fxx.value5[this.myl]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.sze.djj("language");
            if (e) {
                e.jcq(this.peq(tlg.fxx.value5[this.myl]));
                g = true
            }
        }
        if (g == false) {
            var e = this.bta.sze.djj("lang");
            if (e) {
                e.vbv = this.peq(tlg.fxx.value5[this.myl])
            }
        }
        if (d) {
            d.zkw("language", tlg.tcn.jlu("sessionValue1"))
        }
        this.jlg()
    };
    this.mhl = function() {};
    this.msu = function(d) {
        if (d == tlg.language.EN || d == tlg.language.US) {
            return new zoa()
        } else {
            if (d == tlg.language.ES || d == tlg.language.CO || d == tlg.language.MX || d == tlg.language.CL || d == tlg.language.VE) {
                return new tzw()
            } else {
                if (d == tlg.language.DE || d == tlg.language.AT) {
                    return new qop()
                } else {
                    if (d == tlg.language.PT || d == tlg.language.BR) {
                        return new ucv()
                    } else {
                        if (d == tlg.language.RU) {
                            return new jie()
                        } else {
                            if (d == tlg.language.EE) {
                                return new ekq()
                            } else {
                                if (d == tlg.language.TR) {
                                    return new gvl()
                                } else {
                                    if (d == tlg.language.CZ) {
                                        return new yem()
                                    } else {
                                        if (d == tlg.language.GR) {
                                            return new uyy()
                                        } else {
                                            if (d == tlg.language.BG) {
                                                return new rbo()
                                            } else {
                                                if (d == tlg.language.GE) {
                                                    return new yhy()
                                                } else {
                                                    if (d == tlg.language.HU) {
                                                        return new nez()
                                                    } else {
                                                        if (d == tlg.language.RO) {
                                                            return new lqf()
                                                        } else {
                                                            if (d == tlg.language.FR) {
                                                                return new rig()
                                                            } else {
                                                                if (d == tlg.language.HR) {
                                                                    return new mwj()
                                                                } else {
                                                                    if (d == tlg.language.IT) {
                                                                        return new svn()
                                                                    } else {
                                                                        if (d == tlg.language.SE) {
                                                                            return new xuo()
                                                                        } else {
                                                                            if (d == tlg.language.MK) {
                                                                                return new kap()
                                                                            } else {
                                                                                if (d == tlg.language.PL) {
                                                                                    return new cae()
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.peq = function(d) {
        if (d) {
            return this.dul.mza(d)
        }
        return null
    };
    this.syf = function() {
        this.dul.pzb()
    };
    this.lhq = function() {};
    this.rye = function(d) {
        this.dul.nqv(d)
    };
    this.axe = function(d) {
        this.dul.clu(d)
    };
    this.wvo = function() {
        this.suq();
        var d = this.hhv.djj("history");
        this.ymg = true;
        this.alb = true;
        if (d) {
            d.slw(true)
        }
        this.nin(this.ieh(this.language.jlk))
    };
    this.bkb = function() {
        var d = "./history_" + this.zyr.toLowerCase() + ".html";
        d += tlg.tcn.cvo();
        window.location.href = d
    };
    this.bri = function() {
        var d = null;
        if (tlg.xiv.xsh) {
            return
        }
        if (tlg.tcn.jlu("sessionValue5") != null) {
            if (tlg.xiv.hqn) {
                tlg.xiv.hqn.ymr({
                    sender: tlg.xiv.zyr,
                    lang: tlg.tcn.jlu("sessionValue1").toUpperCase()
                })
            }
            tlg.tcn.yjp("exitGame", "true");
			window.parent.postMessage('CloseGame',"*");
            d = decodeURIComponent(tlg.tcn.jlu("sessionValue5"));
            tlg.xiv.zdi();
            if (d !== "(api)") {
                window.location.href = d
            }
        }
    };
    this.zzt = function() {
        var d = null;
        if (tlg.tcn.jlu("sessionValue5") != null) {
            if (tlg.xiv.hqn) {
                tlg.xiv.hqn.ymr({
                    sender: tlg.xiv.zyr,
                    lang: tlg.tcn.jlu("sessionValue1").toUpperCase()
                })
            }
            d = decodeURIComponent(tlg.tcn.jlu("sessionValue5"));
            tlg.xiv.zdi();
            if (d !== "(api)") {
                window.location.href = d
            }
        }
    };
    this.zdi = function() {
        if (!tlg.xiv.brp && tlg.fxx.value83) {
            tlg.tcn.dgz()
        }
    };
    this.jvo = function(f) {
        var g = null;
        if (this.mya) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.mlq !== tlg.cvg.sgv) {
                    if (g.mlq === tlg.cvg.zmu || g.mlq === tlg.cvg.qki) {
                        g.Title = this.language.imb;
                        g.Text = (g.mlq === tlg.cvg.zmu) ? this.language.uzq : this.language.fjr;
                        g.Buttons = [{
                            Text: this.language.ego,
                            Action: "quit"
                        }]
                    } else {
                        if (g.mlq === tlg.cvg.suk) {
                            g.Title = this.language.pis;
                            g.Text = this.language.btw + "\n";
                            if (tlg.tcn.jlu("sessionValue16") && tlg.tcn.jlu("sessionValue16") != "null") {
                                g.Text += this.language.kmq;
                                g.Buttons = [{
                                    Text: this.ieh(this.language.wqz),
                                    Action: "history"
                                }, {
                                    Text: this.language.ego,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.ego,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.mlq === tlg.cvg.uag || g.mlq === tlg.cvg.pvd || g.mlq === tlg.cvg.feu) {
                                g.Title = this.iof;
                                if (g.mlq === tlg.cvg.uag) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.atw
                                } else {
                                    if (g.mlq === tlg.cvg.pvd) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.eeg) + " " + this.language.freerounds_info2 + "\n\n" + this.language.atw
                                    } else {
                                        if (g.mlq === tlg.cvg.feu) {
                                            g.Text = this.language.freerounds_played + ": " + this.eeg + "\n" + this.language.freerounds_win + ": " + this.hut(this.qba)
                                        }
                                    }
                                }
                                g.Buttons = [{
                                    Text: this.language.ok,
                                    Action: "continue"
                                }]
                            }
                        }
                    }
                    if (g.mlq === tlg.cvg.yur || g.mlq === tlg.cvg.bue) {
                        g.Title = this.language.uvs;
                        g.Text = this.language.dag;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.mlq === tlg.cvg.tsh) {
                            g.Title = this.language.fni;
                            g.Text = this.language.mkx;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.mlq === tlg.cvg.roulette.dhe || g.mlq === tlg.cvg.roulette.oxf) {
                                g.Title = this.language.imb;
                                g.Text = (g.mlq === tlg.cvg.roulette.dhe) ? this.language.gyg : this.language.ghv;
                                g.Buttons = [{
                                    Text: this.language.ego,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.mya.ftu(f)
        }
    };
    this.stop = function() {
        this.pom();
        this.ise();
        this.ugn();
        clearTimeout(this.jod);
        if (!this.brp) {
            clearInterval(this.rvx)
        }
        this.hhv.psg("autop", "#stop");
        this.hhv.psg("settings", "#stop");
        this.hhv.psg("topb", "#stop")
    };
    this.efb = function() {
        var d = false;
        if (this.erd.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.juz == "freeplay" && this.gpj == "freeplay") {
                d = true
            } else {
                if (this.dgh && (this.dgh == "b71d982ffcbe56eb8cd11fa05963bbee" || this.dgh.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (tlg.fxx.value68 != null && this.qka.toLowerCase() === tlg.fxx.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            tlg.fxx.value21.e = false;
            if (tlg.fxx.value76) {
                tlg.fxx.value76.f = false
            }
        }
        return d
    };
    this.ymq = function() {
        return (tlg.fxx.value65 > 0)
    };
    this.jrv = function() {
        return (this.brp === false)
    };
    this.pou = function() {
        return false
    };
    this.tmg = function() {
        if (tlg.xiv.ymq() && tlg.xiv.pou()) {
            clearTimeout(tlg.xiv.jxt);
            tlg.xiv.jxt = setTimeout(tlg.xiv.ndx, tlg.fxx.value65)
        }
    };
    this.fcf = function() {
        if (tlg.xiv.ymq() && tlg.xiv.jxt >= 0) {
            if (tlg.xiv.pou()) {
                clearTimeout(tlg.xiv.jxt);
                tlg.xiv.jxt = setTimeout(tlg.xiv.ndx, tlg.fxx.value65)
            } else {
                clearTimeout(tlg.xiv.jxt);
                tlg.xiv.jxt = -1
            }
        }
    };
    this.ise = function() {
        if (tlg.xiv.ymq()) {
            clearTimeout(tlg.xiv.jxt);
            tlg.xiv.jxt = -1
        }
    };
    this.vvm = function() {
        return false
    };
    this.ylh = function() {
        return false
    };
    this.uua = function() {
        if (tlg.xiv.vvm() && tlg.xiv.ylh() && tlg.xiv.ofn < 0) {
            clearTimeout(tlg.xiv.ofn);
            tlg.xiv.ofn = setTimeout(tlg.xiv.uea, tlg.xiv.jfg)
        }
    };
    this.osa = function() {
        if (tlg.xiv.vvm() && tlg.xiv.ofn >= 0) {
            if (tlg.xiv.ylh()) {
                clearTimeout(tlg.xiv.ofn);
                tlg.xiv.ofn = setTimeout(tlg.xiv.uea, tlg.xiv.jfg)
            } else {
                clearTimeout(tlg.xiv.ofn);
                tlg.xiv.ofn = -1
            }
        }
    };
    this.ugn = function() {
        if (tlg.xiv.vvm()) {
            clearTimeout(tlg.xiv.ofn);
            tlg.xiv.ofn = -1
        }
    };
    this.uea = function() {};
    this.dty = function() {};
    this.gqb = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.lsu.replace(/_*/g, ""));
        if (e > d) {
            this.lsu = f
        }
    };
    this.dnp = function(g) {
        var e = (g && !this.iti),
            f = this.hhv.djj("topb"),
            d = this.hhv.djj("topi");
        if (d) {
            d.hoe(e)
        }
        if (f) {
            f.hoe(e);
            f.kzh(e)
        }
    };
    this.zbe = function(g) {
        var e = (g && !this.iti),
            f = this.hhv.djj("topb"),
            d = this.hhv.djj("topi");
        if (d) {
            d.hoe(e)
        }
        if (f) {
            f.hoe(e);
            f.vgp(e)
        }
    };
    this.zfp = function(g) {
        var e = (g && !this.iti),
            f = this.hhv.djj("topb"),
            d = this.hhv.djj("topi");
        if (d) {
            d.hoe(e)
        }
        if (f) {
            f.hoe(e);
            f.tvs(e)
        }
    };
    this.kbr = function() {
        var d = this.hhv.djj("topb");
        if (d && !d.izz()) {
            this.dul.hku("panel_in");
            this.dul.ikn("panel_in");
            d.ftu()
        }
    };
    this.xom = function(d) {
        var e = this.hhv.djj("topb");
        if (e && e.izz()) {
            this.dul.hku("panel_out");
            this.dul.ikn("panel_out");
            if (d) {
                e.pux = d
            }
            e.mcn()
        }
    };
    this.hut = function(f) {
        if (this.key > 0) {
            return (f * this.key).toFixed(0).toString()
        } else {
            if (tlg.fxx.value21.e == false || this.xsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (tlg.fxx.value21.m != 1) {
                    e = f * tlg.fxx.value21.m;
                    var g = tlg.fxx.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = tlg.fxx.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.twt(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.rfg = function(f) {
        if (this.key > 0) {
            var e = (f * this.key).toFixed(0).toString();
            if (tlg.fxx.value21.e == true && tlg.fxx.value21.m == 1 && tlg.fxx.value21.s && this.xsh == false) {
                e = tlg.fxx.value21.s + " " + e
            }
            return e
        } else {
            if (tlg.fxx.value21.e == false || this.xsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (tlg.fxx.value21.m != 1) {
                    e = f * tlg.fxx.value21.m;
                    var g = tlg.fxx.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = tlg.fxx.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.twt(e, (d == 0) ? 0 : d + 1);
                if (tlg.fxx.value21.s) {
                    e = tlg.fxx.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.twt = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (tlg.fxx.value21.cs != null) {
                l = l.replace(/\./, tlg.fxx.value21.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (tlg.fxx.value21.ts != null) {
                        e += tlg.fxx.value21.ts
                    }
                }
            }
            if (tlg.fxx.value21.cs != null) {
                f = f.replace(/\./, tlg.fxx.value21.cs)
            }
            return e + f
        }
    };
    this.dqv = function(f) {
        if (this.key > 0) {
            return (f * this.key).toFixed(0).toString()
        } else {
            if (tlg.fxx.value76.f == false || this.xsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (tlg.fxx.value76.m != 1) {
                    e = f * tlg.fxx.value76.m;
                    var g = tlg.fxx.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = tlg.fxx.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.ral(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.trk = function(f) {
        if (this.key > 0) {
            var e = (f * this.key).toFixed(0).toString();
            if (tlg.fxx.value76.f == true && tlg.fxx.value76.m == 1 && tlg.fxx.value76.s && this.xsh == false) {
                e = tlg.fxx.value76.s + " " + e
            }
            return e
        } else {
            if (tlg.fxx.value76.f == false || this.xsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (tlg.fxx.value76.m != 1) {
                    e = f * tlg.fxx.value76.m;
                    var g = tlg.fxx.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = tlg.fxx.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.ral(e, (d == 0) ? 0 : d + 1);
                if (tlg.fxx.value76.s) {
                    e = tlg.fxx.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.ral = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (tlg.fxx.value76.cs != null) {
                l = l.replace(/\./, tlg.fxx.value76.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (tlg.fxx.value76.ts != null) {
                        e += tlg.fxx.value76.ts
                    }
                }
            }
            if (tlg.fxx.value76.cs != null) {
                f = f.replace(/\./, tlg.fxx.value76.cs)
            }
            return e + f
        }
    };
    this.ieh = function(d) {
        if (d && tlg.tcn.jlu("sessionValue1") !== tlg.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.kzl = function() {
        for (var f = 0, d = this.imc.eyb.lne.length, e = null, g = 0; f < d; f++) {
            e = this.imc.eyb.lne[f];
            g = e.frt.substring(e.frt.length - 1);
            this.hhv.sqh(e.frt, this.rej(this.ore.szg.eso[d - 1][e.eso], (d > 2) ? this.ore.szg.vfx : this.ore.szg.display, this.style.szg.smc[e.eso], e.ssd, e.value, this.dul.mza((d > 2) ? e.frt + "_smalldsp" : e.frt + "_dsp"), (d <= 2) ? [this.dul.mza("jackpot_frame")] : (Number(g) <= 2) ? [this.dul.mza("jackpot_topframe")] : [this.dul.mza("jackpot_bottomframe")], (d > 2) ? this.dul.mza(e.frt + "_sym") : null), ["jackpots"])
        }
        this.hhv.sqh("jwp", this.rej(this.ore.szg.mve.eso, this.ore.szg.mve, this.style.szg.mve, null, null, null, [this.dul.mza("jackpot_win_0"), this.dul.mza("jackpot_win_1"), this.dul.mza("jackpot_win_2")], null));
        this.hhv.psg("jwp", "#xza", [false]);
        if (this.ywq()) {
            this.hhv.sqh("mjwp", this.mgi(this.ore.szg.xdt.eso, this.ore.szg.xdt, this.style.szg.xdt, this.dul.mza("mj_bg"), this.dul.mza("mj_font"), this.dul.mza("mj_label"), [this.dul.mza("mj_0"), this.dul.mza("mj_1"), this.dul.mza("mj_2"), this.dul.mza("mj_3"), this.dul.mza("mj_4"), this.dul.mza("mj_5")]));
            this.hhv.psg("mjwp", "#xza", [false])
        }
    };
    this.wmm = function() {
        var e = this.hhv.tsx("jackpots"),
            f = this.hhv.djj("jwp"),
            k = this.hhv.djj("mjwp");
        for (var j = 0, d = this.imc.eyb.lne.length, g = null; j < d; j++) {
            g = this.imc.eyb.lne[j];
            e[j].ota(this.ore.szg.eso[d - 1][g.eso]);
            e[j].qgh((d > 2) ? this.ore.szg.vfx : this.ore.szg.display)
        }
        if (f) {
            f.ota(this.ore.szg.mve.eso);
            f.qgh(this.ore.szg.mve)
        }
        if (k) {
            k.ota(this.ore.szg.xdt.eso);
            k.qgh(this.ore.szg.xdt)
        }
    };
    this.rej = function(k, i, e, l, m, f, d, g) {
        var j = new wjy();
        j.wem(k, null, this.context2D);
        j.parent = this;
        j.oab = f;
        j.ixk = d;
        j.zbv = g;
        j.gap(l);
        j.bpp(m);
        j.ler(e);
        j.qgh(i);
        return j
    };
    this.mgi = function(j, i, g, k, l, f, e) {
        var d = new ukm();
        d.wem(j, null, this.context2D);
        d.parent = this;
        d.grm = k;
        d.pas = l;
        d.xyv = f;
        d.iqj = e;
        d.ler(g);
        d.qgh(i);
        return d
    };
    this.ocz = function(f) {
        if (this.pfi() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.hhv.psg(f[e].frt, "#bpp", [f[e].value])
            }
            this.jlg()
        }
    };
    this.gzj = function(d) {
        if (this.pfi() === true) {
            this.szg = {
                frt: d.frt,
                value: d.value,
                jbw: d.jbw
            }
        }
    };
    this.bxm = function() {
        this.szg = null
    };
    this.sxj = function() {
        return false
    };
    this.ywq = function() {
        return false
    };
    this.pfi = function() {
        return (!this.brp && this.imc.eyb.lne.length > 0 && this.sxj())
    };
    this.uwx = function() {
        return (this.szg != null)
    };
    this.kyv = function() {
        return (tlg.fxx.value86 === true && ((tlg.tcn.jlu("sessionValue19") && tlg.tcn.jlu("sessionValue19") != "null") || (tlg.tcn.jlu("sessionValue20") && tlg.tcn.jlu("sessionValue20") != "null") || (tlg.tcn.jlu("sessionValue21") && tlg.tcn.jlu("sessionValue21") != "null")))
    };
    this.mfw = function() {
        if (this.hsd() && this.lfh()) {
            this.kgt()
        }
    };
    this.lfh = function() {
        return false
    };
    this.hsd = function() {
        if (this.brp) {
            return false
        }
        return (this.imc.eyb.tsc.length + this.imc.eyb.lkc.length > 0)
    };
    this.kgt = function() {
        var g = null,
            e = this.imc.eyb.tsc.length,
            d = this.imc.eyb.lkc.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.imc.eyb.tsc.splice(f, 1)[0];
                g.mlq = tlg.cvg.sgv;
                this.ske.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.imc.eyb.lkc.splice(f, 1)[0];
                g.mlq = tlg.cvg.sgv;
                this.ske.push(g)
            }
            if (this.mya && !this.mya.izz()) {
                this.lwj()
            }
        }
    };
    this.lwj = function() {
        var d = null;
        if (this.ske.length > 0) {
            d = this.ske.shift();
            this.jvo([d])
        }
    };
    this.ogv = function() {
        if (tlg.xiv.jwl.length > 0) {
            tlg.xiv.jvo(tlg.xiv.jwl)
        }
    };
    this.bzk = function() {
        this.ske.length = 0
    };
    this.bml = function() {
        this.jwl.length = 0;
        if (this.ftt) {
            this.ftt.mcn()
        }
    };
    this.eyi = function() {
        var f = null,
            d = this.imc.eyb.jwl.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.imc.eyb.jwl.splice(e, 1)[0];
                f.mlq = tlg.cvg.sgv;
                this.jwl.push(f)
            }
            if (this.ftt) {
                this.ftt.ftu(this.jwl[0].Title, this.jwl[0].Text, this.jwl.length)
            }
        }
    };
    this.fnx = function() {
        var d = false;
        if (this.mya && this.mya.izz()) {
            d = true
        }
        if (this.ftt && this.ftt.izz()) {
            d = true
        }
        if (this.kyv()) {
            d = true
        }
        if (this.ofu) {
            this.ofu.style.display = (d) ? "block" : "none"
        }
    };
    this.bwq = function() {
        this.dnp(false);
        this.bta.kzh(false);
        this.bta.sze.psg("info", "#cleanInfoLine");
        this.jvo([{
            mlq: tlg.cvg.suk
        }])
    };
    this.rou = function() {
        tlg.xiv.ibr = true
    };
    this.hnp = function() {
        this.szx = new vzr().wem(this, tlg.fxx.value6)
    };
    this.acc = function() {
        if (this.szx) {
            this.szx.connect(this.zyr, this.juz, this.gpj, this.dgh, this.lsu, true)
        }
    };
    this.khf = function() {
        if (tlg.xiv.szx) {
            tlg.xiv.szx.connect(tlg.xiv.zyr, tlg.xiv.juz, tlg.xiv.gpj, tlg.xiv.dgh, tlg.xiv.lsu, false)
        }
    };
    this.jlq = function() {};
    this.uqf = function() {};
    this.gir = function(d) {
        if (!this.efb() && !this.brp) {
            clearTimeout(this.jod);
            if (this.ljp()) {
                this.jod = setTimeout(this.ucc, d)
            } else {
                if (Number(tlg.tcn.jlu("sessionValue17")) > 0) {
                    this.jod = setTimeout(this.rou, Number(tlg.tcn.jlu("sessionValue17")) * 60000)
                }
            }
        }
    };
    this.ucc = function() {
        tlg.xiv.tbz = true
    };
    this.ljp = function() {
        return tlg.fxx.value36 || tlg.fxx.value37
    }
}

function ozz() {
    this.sze = null;
    this.vbv = null;
    this.ykb = null;
    this.wem = function(a, c, b) {
        ozz.prototype.wem.call(this, a, c, b);
        this.rcc()
    };
    this.ler = function(c) {
        try {
            var d = this.sze.tsx("buttons");
            for (var b = 0, a = d.length; b < a; b++) {
                d[b].ler(c.npg)
            }
            if (c.okc) {
                this.ykb = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.ykb.addColorStop(0, c.backgroundColor);
                this.ykb.addColorStop(0.5, c.okc);
                this.ykb.addColorStop(1, c.backgroundColor)
            } else {
                this.ykb = c.backgroundColor
            }
        } catch (f) {
            console.error(f)
        }
    };
    this.qgh = function(d) {
        try {
            var c = this.sze.tsx("buttons");
            for (var b = 0, a = c.length; b < a; b++) {
                c[b].qgh(d.npg)
            }
        } catch (f) {
            console.error(f)
        }
    };
    this.buv = function(m, l) {
        var g = this.sze.tsx("buttons"),
            n = this.sze.djj("rise"),
            k = this.sze.djj("undo"),
            d = m - this.x,
            c = l - this.y;
        for (var e = 0, f = g.length; e < f; e++) {
            var a = g[e];
            if (d >= a.x && d <= a.x + a.width && c >= a.y && c <= a.y + a.height && a.izz() === true) {
                if (a.rjo() === true && a.xww() === false) {
                    if (a != n && a != k) {
                        this.parent.dul.hku("btn");
                        this.parent.dul.ikn("btn")
                    }
                    a.pzi(true, true);
                    a.wuk();
                    for (var b = 0; b < f; b++) {
                        g[b].dct(true)
                    }
                    return true
                }
            }
        }
    };
    this.gmf = function() {
        var d = this.sze.tsx("buttons");
        for (var c = 0, a = d.length; c < a; c++) {
            var b = d[c];
            if (b.hah() === true) {
                b.pzi(false, true);
                return true
            }
        }
        return false
    };
    this.wqy = function(k) {
        var g = this.sze.tsx("buttons"),
            b = this.sze.djj("rise"),
            f = this.sze.djj("undo");
        for (var e = 0, a = g.length; e < a; e++) {
            var d = g[e];
            if (k == d.vrq) {
                if (d.izz() === true && d.rjo() === true && d.xww() === false) {
                    if (d != b && d != f) {
                        this.parent.dul.hku("btn");
                        this.parent.dul.ikn("btn")
                    }
                    d.pzi(true, true);
                    d.wuk();
                    for (var c = 0; c < a; c++) {
                        g[c].dct(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.soh = function() {
        var d = this.sze.tsx("buttons");
        for (var c = 0, a = d.length; c < a; c++) {
            var b = d[c];
            if (b.hah() === true) {
                b.pzi(false, true);
                return true
            }
        }
        return false
    };
    this.rcc = function() {
        this.sze = new eds();
        this.sze.wem();
        this.sze.zss("buttons");
        this.sze.zss("gbuttons");
        this.sze.zss("sbuttons")
    };
    this.bti = function(a) {};
    this.bdq = function(c, f, e, d, b) {
        var a = (e != null) ? new dwj() : new ngo();
        if (a instanceof dwj) {
            a.wem(c, this.context2D, null, e, null, f)
        } else {
            a.wem(c, this.context2D, null, e, f)
        }
        a.parent = this;
        a.wuk = d;
        if (b) {
            a.vrq = b.iih
        }
        return a
    };
    this.dgj = function(c, e, d, b) {
        var a = new qct();
        a.wem(c, this.context2D, null, e, null);
        a.parent = this;
        a.wuk = d;
        if (b) {
            a.vrq = b.iih
        }
        return a
    };
    this.kzh = function(a) {
        this.sze.dsj("buttons", "#hoe", [a])
    };
    this.mhl = function(a) {};
    this.jlg = function(j, f, k, d) {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var l = this.context2D,
            b = (j != null && f != null && k != null && d != null),
            a = this.sze.pfa(),
            g = (b === true) ? new qsz(j, f, k, d) : new qsz(this.x, this.y, this.width, this.height);
        l.save();
        if (b) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        if (this.vbv) {
            l.drawImage(this.vbv, 0, 0, this.width, this.height)
        } else {
            tlg.tpm.gxk(l, 0, 0, this.width, this.height, this.ykb, 1)
        }
        for (var c = 0, e = a.length; c < e; c++) {
            a[c].jlg()
        }
        if (this.parent.sfi === true) {
            this.parent.kgf(l, g)
        }
        l.restore();
        if (this.alo && this.rml) {
            if (b) {
                this.alo.drawImage(this.rml, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.alo.drawImage(this.rml, this.x, this.y)
            }
        }
    }
}
ozz.prototype = new ezd;

function fjd() {
    var a = this;
    this.sze = null;
    this.clb = 0;
    this.ezs = 0;
    this.btp = "sans-serif";
    this.apl = "bold";
    this.jmg = null;
    this.khk = 30;
    this.ebe = 20;
    this.mqc = 14;
    this.jve = new qsz();
    this.nej = new qsz();
    this.aiu = new qsz();
    this.lvn = new qsz();
    this.zra = new qsz();
    this.mlj = new qsz();
    this.hvi = new qsz();
    this.qfv = new qsz();
    this.xds = new qsz();
    this.dfh = 22;
    this.duj = new qsz();
    this.pny = new qsz();
    this.cjj = 20;
    this.pnp = new qsz();
    this.smd = new qsz();
    this.sub = [];
    this.yfw = [];
    this.ase = [];
    this.fne = [];
    this.yxe = [];
    this.eqe = [];
    this.yxf = [];
    this.dln = [];
    this.zub = [];
    this.xdy = [];
    this.nmu = new qsz();
    this.wem = function(b, d, c) {
        fjd.prototype.wem.call(this, b, d, c);
        this.rcc()
    };
    this.ler = function(d) {
        try {
            var k = this.sze.tsx("menu"),
                f = this.sze.tsx("submenu"),
                g = this.sze.tsx("help");
            this.btp = d.font;
            this.apl = d.stb;
            this.jmg = d.gmj;
            for (var c = 0, b = k.length; c < b; c++) {
                k[c].ler(d.kih)
            }
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].ler(d.kih)
            }
            for (var c = 0, b = g.length; c < b; c++) {
                g[c].ler(d.aai)
            }
        } catch (j) {
            console.error(j)
        }
    };
    this.qgh = function(f) {
        try {
            var d = this.sze.tsx("buttons");
            this.khk = f.zyc;
            this.ebe = f.slb;
            this.mqc = f.eai;
            this.jve = f.dci;
            this.nej = f.vtb.rxj;
            this.aiu = f.vtb.vnf;
            this.lvn = f.vtb.rcm;
            this.zra = f.fcx.aji;
            this.mlj = f.fcx.blx;
            this.hvi = f.fcx.pbp;
            this.qfv = f.fcx.pls;
            this.xds = f.fcx.oqk;
            this.dfh = f.fcx.nen;
            this.duj = f.xyn.lcz;
            this.pny = f.xyn.opv;
            this.cjj = f.xyn.nen;
            this.pnp = f.pes.lcz;
            this.smd = f.pes.aft;
            this.sub = f.pes.rtr;
            this.yfw = f.pes.nux;
            this.ase = f.pes.wsv;
            this.fne = f.pes.bln;
            this.yxe = f.pes.xul;
            this.eqe = f.pes.wru;
            this.yxf = f.pes.nmr;
            this.dln = f.pes.yeq;
            this.zub = f.pes.oxw;
            this.xdy = f.pes.zgt;
            this.nmu = f.pes.pyr;
            this.sze.psg("operation", "#ota", [f.pnv]);
            this.sze.psg("series", "#ota", [f.tqd]);
            this.sze.psg("win", "#ota", [f.cou]);
            this.sze.psg("menu", "#ota", [f.bnj]);
            this.sze.psg("exit", "#ota", [f.tck]);
            this.sze.psg("operation", "#ota", [f.pnv]);
            this.sze.psg("serie1", "#ota", [f.oha]);
            this.sze.psg("serie2", "#ota", [f.efr]);
            this.sze.psg("serie3", "#ota", [f.tty]);
            this.sze.psg("serie4", "#ota", [f.ddz]);
            this.sze.psg("serie5", "#ota", [f.tec]);
            for (var c = 0, b = d.length; c < b; c++) {
                d[c].qgh(f.npg)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.buv = function(l, k) {
        var g = this.sze.tsx("buttons"),
            b = l - this.x,
            m = k - this.y;
        if (b >= 0 && b <= this.width && m >= 0 && m <= this.height) {
            for (var e = 0, f = g.length; e < f; e++) {
                var c = g[e];
                if (b >= c.x && b <= c.x + c.width && m >= c.y && m <= c.y + c.height && c.izz() === true) {
                    if (c.rjo() === true && c.xww() === false) {
                        this.parent.dul.hku("btn");
                        this.parent.dul.ikn("btn");
                        c.pzi(true, true);
                        c.wuk();
                        for (var d = 0; d < f; d++) {
                            g[d].dct(true)
                        }
                        return true
                    }
                }
            }
            return true
        }
        return false
    };
    this.gmf = function() {
        var e = this.sze.tsx("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.hah() === true) {
                c.pzi(false, true);
                return true
            }
        }
        return false
    };
    this.rcc = function() {
        this.sze = new eds();
        this.sze.zss("buttons");
        this.sze.zss("help");
        this.sze.zss("menu");
        this.sze.zss("submenu");
        this.sze.zss("index");
        this.sze.zss("serie")
    };
    this.bti = function(b) {
        this.sze.sqh("operation", this.bdq(b.pnv, this.parent.language.cbm, this.swe), ["buttons", "help", "index"]);
        this.sze.sqh("series", this.bdq(b.tqd, this.parent.language.bfk, this.vdv), ["buttons", "help", "index"]);
        this.sze.sqh("win", this.bdq(b.cou, this.parent.language.ryu, this.mxl), ["buttons", "help", "index"]);
        this.sze.sqh("exit", this.bdq(b.tck, this.parent.language.ptj, this.ndx), ["buttons", "menu", "index"]);
        this.sze.sqh("menu", this.bdq(b.bnj, this.parent.language.kyl, this.hta), ["buttons", "submenu", "serie"]);
        this.sze.sqh("serie1", this.bdq(b.oha, this.parent.language.opl, this.jph), ["buttons", "help", "serie"]);
        this.sze.sqh("serie2", this.bdq(b.efr, this.parent.language.obn, this.vuz), ["buttons", "help", "serie"]);
        this.sze.sqh("serie3", this.bdq(b.tty, this.parent.language.jdj, this.ldl), ["buttons", "help", "serie"]);
        this.sze.sqh("serie4", this.bdq(b.ddz, this.parent.language.aow, this.mcr), ["buttons", "help", "serie"]);
        this.sze.sqh("serie5", this.bdq(b.tec, this.parent.language.vri, this.eqh), ["buttons", "help", "serie"])
    };
    this.oyd = function(c, e, d) {
        var b = new ngo();
        b.wem(c, this.context2D, null, null, e);
        b.parent = this;
        b.wuk = d;
        return b
    };
    this.bdq = function(c, e, d) {
        var b = new ngo();
        b.wem(c, this.context2D, null, null, e);
        b.parent = this;
        b.wuk = d;
        return b
    };
    this.hta = function() {
        a.clb = 0;
        a.sze.dsj("buttons", "#xza", [false]);
        a.sze.dsj("buttons", "#hoe", [false]);
        a.sze.dsj("index", "#xza", [true]);
        a.sze.dsj("index", "#hoe", [true]);
        a.jlg()
    };
    this.swe = function() {
        a.clb = 1;
        a.sze.dsj("buttons", "#xza", [false]);
        a.sze.dsj("buttons", "#hoe", [false]);
        a.sze.dsj("submenu", "#xza", [true]);
        a.sze.dsj("submenu", "#hoe", [true]);
        a.jlg()
    };
    this.vdv = function() {
        a.clb = 2;
        a.sdx = 0;
        a.sze.dsj("buttons", "#xza", [false]);
        a.sze.dsj("buttons", "#hoe", [false]);
        a.sze.dsj("serie", "#xza", [true]);
        a.sze.dsj("serie", "#hoe", [true]);
        a.jlg()
    };
    this.jph = function() {
        a.clb = 2;
        a.sdx = 0;
        a.jlg()
    };
    this.vuz = function() {
        a.clb = 2;
        a.sdx = 1;
        a.jlg()
    };
    this.ldl = function() {
        a.clb = 2;
        a.sdx = 2;
        a.jlg()
    };
    this.mcr = function() {
        a.clb = 2;
        a.sdx = 3;
        a.jlg()
    };
    this.eqh = function() {
        a.clb = 2;
        a.sdx = 4;
        a.jlg()
    };
    this.mxl = function() {
        a.clb = 3;
        a.sze.dsj("buttons", "#xza", [false]);
        a.sze.dsj("buttons", "#hoe", [false]);
        a.sze.dsj("submenu", "#xza", [true]);
        a.sze.dsj("submenu", "#hoe", [true]);
        a.jlg()
    };
    this.ndx = function() {
        a.parent.pbe()
    };
    this.ftu = function(b) {
        this.clb = 0;
        this.sdx = 0;
        this.sze.dsj("buttons", "#xza", [false]);
        this.sze.dsj("buttons", "#hoe", [false]);
        this.sze.dsj("index", "#xza", [true]);
        this.sze.dsj("index", "#hoe", [true]);
        if (b) {
            if (b == 1) {
                this.swe()
            } else {
                if (b == 2) {
                    this.vdv()
                } else {
                    if (b == 3) {
                        this.mxl()
                    }
                }
            }
        }
        this.xza(true)
    };
    this.mcn = function() {
        this.sze.ycc("#hoe", [false]);
        this.xza(false)
    };
    this.mhl = function(b) {
        this.sze.psg("operation", "#vjp", [b.cbm]);
        this.sze.psg("series", "#vjp", [b.bfk]), this.sze.psg("win", "#vjp", [b.ryu]), this.sze.psg("exit", "#vjp", [b.ptj]), this.sze.psg("menu", "#vjp", [b.kyl]);
        this.sze.psg("serie1", "#vjp", [this.parent.language.opl]);
        this.sze.psg("serie2", "#vjp", [this.parent.language.obn]);
        this.sze.psg("serie3", "#vjp", [this.parent.language.jdj]);
        this.sze.psg("serie4", "#vjp", [this.parent.language.aow]);
        this.sze.psg("serie5", "#vjp", [this.parent.language.vri])
    };
    this.jlg = function(m, l, n, g) {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var o = this.context2D,
            d = (m != null && l != null && n != null && g != null),
            c = this.sze.tsx("index"),
            b = this.sze.tsx("serie"),
            k = this.sze.tsx("submenu");
        o.save();
        if (d) {
            o.beginPath();
            o.rect(m, l, n, g);
            o.closePath();
            o.clip()
        }
        o.drawImage(this.parent.dul.mza("h_bg"), 0, 0);
        if (this.clb == 0) {
            tlg.tpm.der(o, this.parent.language.fow, this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
            o.drawImage(this.parent.dul.mza("wheel"), this.nej.x, this.nej.y, this.nej.width, this.nej.height);
            o.drawImage(this.parent.dul.mza("shadow"), this.aiu.x, this.aiu.y, this.aiu.width, this.aiu.height);
            o.drawImage(this.parent.dul.mza("logo"), this.lvn.x, this.lvn.y, this.lvn.width, this.lvn.height);
            for (var f = 0, j = c.length; f < j; f++) {
                c[f].jlg()
            }
        } else {
            if (this.clb == 1) {
                tlg.tpm.der(o, this.parent.language.cbm, this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
                this.lje(o, this.parent.language.oft, this.zra.x, this.zra.y, this.zra.width, this.dfh);
                this.lje(o, this.parent.language.zxq, this.mlj.x, this.mlj.y, this.mlj.width, this.dfh);
                this.lje(o, this.parent.language.eqv, this.hvi.x, this.hvi.y, this.hvi.width, this.dfh);
                this.lje(o, this.parent.language.szz, this.qfv.x, this.qfv.y, this.qfv.width, this.dfh);
                this.lje(o, this.parent.language.jbe, this.xds.x, this.xds.y, this.xds.width, this.dfh);
                for (var f = 0, j = k.length; f < j; f++) {
                    k[f].jlg()
                }
            }
        }
        if (this.clb == 2) {
            if (this.sdx == 0) {
                tlg.tpm.der(o, this.parent.language.opl, this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
                o.drawImage(this.parent.dul.mza("h_s1"), this.duj.x, this.duj.y, this.duj.width, this.duj.height);
                this.lje(o, this.parent.language.rgj_help_btn_serie_58, this.pny.x, this.pny.y, this.pny.width, this.cjj)
            } else {
                if (this.sdx == 1) {
                    tlg.tpm.der(o, this.parent.language.obn, this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
                    o.drawImage(this.parent.dul.mza("h_s2"), this.duj.x, this.duj.y, this.duj.width, this.duj.height);
                    this.lje(o, this.parent.language.rgj_help_btn_serie_big, this.pny.x, this.pny.y, this.pny.width, this.cjj)
                } else {
                    if (this.sdx == 2) {
                        tlg.tpm.der(o, this.parent.language.jdj, this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
                        o.drawImage(this.parent.dul.mza("h_s3"), this.duj.x, this.duj.y, this.duj.width, this.duj.height);
                        this.lje(o, this.parent.language.rgj_help_btn_serie_orphpl, this.pny.x, this.pny.y, this.pny.width, this.cjj)
                    } else {
                        if (this.sdx == 3) {
                            tlg.tpm.der(o, this.parent.language.aow, this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
                            o.drawImage(this.parent.dul.mza("h_s4"), this.duj.x, this.duj.y, this.duj.width, this.duj.height);
                            this.lje(o, this.parent.language.rgj_help_btn_serie_orphch, this.pny.x, this.pny.y, this.pny.width, this.cjj)
                        } else {
                            if (this.sdx == 4) {
                                tlg.tpm.der(o, this.parent.language.vri, this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
                                o.drawImage(this.parent.dul.mza("h_s5"), this.duj.x, this.duj.y, this.duj.width, this.duj.height);
                                this.lje(o, this.parent.language.rgj_help_btn_serie_zero, this.pny.x, this.pny.y, this.pny.width, this.cjj)
                            }
                        }
                    }
                }
            }
            for (var f = 0, j = b.length; f < j; f++) {
                b[f].jlg()
            }
        } else {
            if (this.clb == 3) {
                o.drawImage(this.parent.dul.mza("h_win"), this.pnp.x, this.pnp.y, this.pnp.width, this.pnp.height);
                tlg.tpm.der(o, this.cjt(this.parent.language.ryu), this.jmg, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
                var e = "Lim.";
                tlg.tpm.der(o, e, this.jmg, this.smd.x, this.smd.y, this.smd.width, this.smd.height, this.btp, this.ebe, this.apl);
                e = "A";
                tlg.tpm.der(o, e, this.jmg, this.sub[0].x, this.sub[0].y, this.sub[0].width, this.sub[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.lmz;
                tlg.tpm.mex(o, e, this.jmg, this.sub[1].x, this.sub[1].y, this.sub[1].width, this.sub[1].height, this.btp, this.ebe, this.apl);
                e = "35:1";
                tlg.tpm.der(o, e, this.jmg, this.sub[2].x, this.sub[2].y, this.sub[2].width, this.sub[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("1"));
                tlg.tpm.der(o, e, this.jmg, this.sub[3].x, this.sub[3].y, this.sub[3].width, this.sub[3].height, this.btp, this.ebe, this.apl);
                e = "B";
                tlg.tpm.der(o, e, this.jmg, this.yfw[0].x, this.yfw[0].y, this.yfw[0].width, this.yfw[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.rka;
                tlg.tpm.mex(o, e, this.jmg, this.yfw[1].x, this.yfw[1].y, this.yfw[1].width, this.yfw[1].height, this.btp, this.ebe, this.apl);
                e = "17:1";
                tlg.tpm.der(o, e, this.jmg, this.yfw[2].x, this.yfw[2].y, this.yfw[2].width, this.yfw[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("1,2"));
                tlg.tpm.der(o, e, this.jmg, this.yfw[3].x, this.yfw[3].y, this.yfw[3].width, this.yfw[3].height, this.btp, this.ebe, this.apl);
                e = "C";
                tlg.tpm.der(o, e, this.jmg, this.ase[0].x, this.ase[0].y, this.ase[0].width, this.ase[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.lyo;
                tlg.tpm.mex(o, e, this.jmg, this.ase[1].x, this.ase[1].y, this.ase[1].width, this.ase[1].height, this.btp, this.ebe, this.apl);
                e = "11:1";
                tlg.tpm.der(o, e, this.jmg, this.ase[2].x, this.ase[2].y, this.ase[2].width, this.ase[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("16-18"));
                tlg.tpm.der(o, e, this.jmg, this.ase[3].x, this.ase[3].y, this.ase[3].width, this.ase[3].height, this.btp, this.ebe, this.apl);
                e = "D";
                tlg.tpm.der(o, e, this.jmg, this.fne[0].x, this.fne[0].y, this.fne[0].width, this.fne[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.sso;
                tlg.tpm.mex(o, e, this.jmg, this.fne[1].x, this.fne[1].y, this.fne[1].width, this.fne[1].height, this.btp, this.ebe, this.apl);
                e = "8:1";
                tlg.tpm.der(o, e, this.jmg, this.fne[2].x, this.fne[2].y, this.fne[2].width, this.fne[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("26.30"));
                tlg.tpm.der(o, e, this.jmg, this.fne[3].x, this.fne[3].y, this.fne[3].width, this.fne[3].height, this.btp, this.ebe, this.apl);
                e = "E";
                tlg.tpm.der(o, e, this.jmg, this.yxe[0].x, this.yxe[0].y, this.yxe[0].width, this.yxe[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.efk;
                tlg.tpm.mex(o, e, this.jmg, this.yxe[1].x, this.yxe[1].y, this.yxe[1].width, this.yxe[1].height, this.btp, this.ebe, this.apl);
                e = "5:1";
                tlg.tpm.der(o, e, this.jmg, this.yxe[2].x, this.yxe[2].y, this.yxe[2].width, this.yxe[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("31-36"));
                tlg.tpm.der(o, e, this.jmg, this.yxe[3].x, this.yxe[3].y, this.yxe[3].width, this.yxe[3].height, this.btp, this.ebe, this.apl);
                e = "F";
                tlg.tpm.der(o, e, this.jmg, this.eqe[0].x, this.eqe[0].y, this.eqe[0].width, this.eqe[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.ipl;
                tlg.tpm.mex(o, e, this.jmg, this.eqe[1].x, this.eqe[1].y, this.eqe[1].width, this.eqe[1].height, this.btp, this.ebe, this.apl);
                e = "2:1";
                tlg.tpm.der(o, e, this.jmg, this.eqe[2].x, this.eqe[2].y, this.eqe[2].width, this.eqe[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("1/12"));
                tlg.tpm.der(o, e, this.jmg, this.eqe[3].x, this.eqe[3].y, this.eqe[3].width, this.eqe[3].height, this.btp, this.ebe, this.apl);
                e = "G";
                tlg.tpm.der(o, e, this.jmg, this.yxf[0].x, this.yxf[0].y, this.yxf[0].width, this.yxf[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.mpn;
                tlg.tpm.mex(o, e, this.jmg, this.yxf[1].x, this.yxf[1].y, this.yxf[1].width, this.yxf[1].height, this.btp, this.ebe, this.apl);
                e = "2:1";
                tlg.tpm.der(o, e, this.jmg, this.yxf[2].x, this.yxf[2].y, this.yxf[2].width, this.yxf[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("1-12"));
                tlg.tpm.der(o, e, this.jmg, this.yxf[3].x, this.yxf[3].y, this.yxf[3].width, this.yxf[3].height, this.btp, this.ebe, this.apl);
                e = "H";
                tlg.tpm.der(o, e, this.jmg, this.dln[0].x, this.dln[0].y, this.dln[0].width, this.dln[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.ygb;
                tlg.tpm.mex(o, e, this.jmg, this.dln[1].x, this.dln[1].y, this.dln[1].width, this.dln[1].height, this.btp, this.ebe, this.apl);
                e = "1:1";
                tlg.tpm.der(o, e, this.jmg, this.dln[2].x, this.dln[2].y, this.dln[2].width, this.dln[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("1-18"));
                tlg.tpm.der(o, e, this.jmg, this.dln[3].x, this.dln[3].y, this.dln[3].width, this.dln[3].height, this.btp, this.ebe, this.apl);
                e = "I";
                tlg.tpm.der(o, e, this.jmg, this.zub[0].x, this.zub[0].y, this.zub[0].width, this.zub[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.dde;
                tlg.tpm.mex(o, e, this.jmg, this.zub[1].x, this.zub[1].y, this.zub[1].width, this.zub[1].height, this.btp, this.ebe, this.apl);
                e = "1:1";
                tlg.tpm.der(o, e, this.jmg, this.zub[2].x, this.zub[2].y, this.zub[2].width, this.zub[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("even"));
                tlg.tpm.der(o, e, this.jmg, this.zub[3].x, this.zub[3].y, this.zub[3].width, this.zub[3].height, this.btp, this.ebe, this.apl);
                e = "J";
                tlg.tpm.der(o, e, this.jmg, this.xdy[0].x, this.xdy[0].y, this.xdy[0].width, this.xdy[0].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.dgs;
                tlg.tpm.mex(o, e, this.jmg, this.xdy[1].x, this.xdy[1].y, this.xdy[1].width, this.xdy[1].height, this.btp, this.ebe, this.apl);
                e = "1:1";
                tlg.tpm.der(o, e, this.jmg, this.xdy[2].x, this.xdy[2].y, this.xdy[2].width, this.xdy[2].height, this.btp, this.ebe, this.apl);
                e = this.parent.hut(this.parent.twp("red"));
                tlg.tpm.der(o, e, this.jmg, this.xdy[3].x, this.xdy[3].y, this.xdy[3].width, this.xdy[3].height, this.btp, this.ebe, this.apl);
                e = this.parent.language.fqj + " " + this.parent.hut(this.parent.ybc);
                tlg.tpm.der(o, e, this.jmg, this.nmu.x, this.nmu.y, this.nmu.width, this.nmu.height, this.btp, this.ebe, this.apl);
                for (var f = 0, j = k.length; f < j; f++) {
                    k[f].jlg()
                }
            }
        }
        o.restore();
        if (this.alo && this.rml) {
            if (d) {
                this.alo.drawImage(this.rml, m, l, n, g, this.x + m, this.y + l, n, g)
            } else {
                this.alo.drawImage(this.rml, this.x, this.y)
            }
        }
    };
    this.lje = function(s, m, g, f, B, c) {
        var p = m.split(" "),
            l = "",
            b = [],
            w = c;
        s.save();
        s.fillStyle = this.jmg;
        s.font = this.apl + " " + c + "px " + this.btp;
        for (var q = 0, v = p.length; q < v; q++) {
            var r = p[q],
                e = r.indexOf("|");
            if (e >= 0) {
                var o = r.split("|");
                for (var t = 0, d = o.length - 1; t < d; t++) {
                    l += o[t];
                    b.push(l);
                    l = "";
                    w += c
                }
                l = o[o.length - 1] + " "
            } else {
                if (r == "|") {
                    b.push(l);
                    l = "";
                    w += c
                } else {
                    var A = l + r + " ",
                        k = s.measureText(A).width;
                    if (k > B) {
                        b.push(l);
                        l = r + " ";
                        w += c
                    } else {
                        l = A
                    }
                }
            }
        }
        b.push(l);
        for (var u = 0, v = b.length; u < v; u++) {
            var r = b[u],
                z = g + (B - s.measureText(r).width) / 2;
            s.fillText(r, z, f);
            f += c
        }
        s.restore()
    };
    this.cjt = function(b) {
        if (b) {
            return b.replace(/\|/g, " ")
        }
        return ""
    }
}
fjd.prototype = new ezd;

function ekz() {
    this.vbv = null;
    this.value = 0;
    this.wyo = false;
    this.wio = false;
    this.btp = "serif";
    this.apl = "";
    this.jmg = null;
    this.jcm = null;
    this.cbz = 17;
    this.ffm = 4;
    this.akk = 0;
    this.hdf = 2;
    this.ejo = 6;
    this.wem = function(b, e, c, a, d) {
        ekz.prototype.wem.call(this, b, e, c);
        this.vbv = a;
        this.value = d;
        this.wyo = true
    };
    this.ler = function(a) {
        try {
            this.btp = a.font;
            this.apl = a.stb;
            this.jmg = a.gmj;
            this.jcm = a.borderColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        try {
            this.cbz = a.fontSize;
            this.ffm = a.dcp;
            this.akk = a.ogq;
            this.hdf = a.nlj;
            this.ejo = a.kui
        } catch (b) {
            console.error(b)
        }
    };
    this.hoe = function(a) {
        this.wyo = a
    };
    this.kyu = function(a) {
        this.wio = a
    };
    this.yue = function(a, b) {
        this.x = Math.round(a - this.width / 2);
        this.y = Math.round(b - this.height / 2)
    };
    this.rjo = function() {
        return this.wyo
    };
    this.buv = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.guk === true && this.wyo === true) {
            return true
        }
    };
    this.qqz = function(a) {
        this.vbv = a.vbv;
        this.value = a.value;
        this.btp = a.btp;
        this.apl = a.apl;
        this.jmg = a.jmg
    };
    this.jlg = function() {
        if (!this.izz()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.vbv) {
            a.drawImage(this.vbv, this.x + this.ffm, this.y + this.ffm, this.width - 2 * this.ffm, this.height - 2 * this.ffm)
        }
        tlg.tpm.der(a, this.parent.hut(this.value), this.jmg, this.x + this.ffm + this.akk, this.y + this.ffm, this.width - 2 * this.ffm - 2 * this.akk, this.height - 2 * this.ffm, this.btp, this.cbz, this.apl);
        if (this.wio === true) {
            tlg.tpm.fjv(a, this.x, this.y, this.width, this.height, this.ejo, null, this.jcm, this.hdf)
        }
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
ekz.prototype = new ezd;

function hvo() {
    this.vbv = null;
    this.value = 0;
    this.wyo = false;
    this.wio = false;
    this.jcm = null;
    this.ffm = 4;
    this.hdf = 2;
    this.ejo = 6;
    this.wem = function(b, d, c, a) {
        hvo.prototype.wem.call(this, b, d, c);
        this.vbv = a;
        this.wyo = true
    };
    this.ler = function(a) {
        try {
            this.jcm = a.borderColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        try {
            this.ffm = a.dcp;
            this.hdf = a.nlj;
            this.ejo = a.kui
        } catch (b) {
            console.error(b)
        }
    };
    this.hoe = function(a) {
        this.wyo = a
    };
    this.kyu = function(a) {
        this.wio = a
    };
    this.yue = function(a, b) {
        this.x = Math.round(a - this.width / 2);
        this.y = Math.round(b - this.height / 2)
    };
    this.rjo = function() {
        return this.wyo
    };
    this.buv = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.guk === true && this.wyo === true) {
            return true
        }
    };
    this.jlg = function() {
        if (!this.izz()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.vbv) {
            a.drawImage(this.vbv, this.x + this.ffm, this.y + this.ffm, this.width - 2 * this.ffm, this.height - 2 * this.ffm)
        }
        if (this.wio === true) {
            tlg.tpm.fjv(a, this.x, this.y, this.width, this.height, this.ejo, null, this.jcm, this.hdf)
        }
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
hvo.prototype = new ezd;

function kwv() {
    this.wtr = 16;
    this.vbv = null;
    this.wiq = [];
    this.fqp = 54;
    this.zul = 34;
    this.hdf = 2;
    this.ejo = 6;
    this.ykb = null;
    this.jcm = null;
    this.ler = function(a) {
        try {
            this.ykb = a.backgroundColor;
            this.jcm = a.borderColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        try {
            this.fqp = a.vup;
            this.zul = a.nfe;
            this.hdf = a.nlj;
            this.ejo = a.kui
        } catch (b) {
            console.error(b)
        }
    };
    this.twq = function(a) {
        if (a >= 0) {
            if (a == 37) {
                a = 0
            }
            if (this.wiq.length == this.wtr) {
                this.wiq.shift()
            }
            this.wiq.push(a)
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = this.context2D,
            c = (this.height - (this.wtr * this.zul)) / 2;
        a.save();
        a.clearRect(0, 0, this.width, this.height);
        if (this.ykb == null) {
            a.clearRect(0, 0, this.width, this.height)
        }
        tlg.tpm.fjv(a, 0, 0, this.width, this.height, this.ejo, this.ykb, this.jcm, this.hdf);
        for (var b = this.wiq.length - 1; b >= 0; b--) {
            if ((this.wiq[b] >= 0 && this.wiq[b] <= 37) && this.vbv) {
                a.drawImage(this.vbv, 0, Math.round(this.vbv.height / 37) * this.wiq[b], this.vbv.width, Math.round(this.vbv.height / 37), (this.width - this.fqp) / 2, c, this.fqp, this.zul)
            }
            c += this.zul
        }
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
kwv.prototype = new ezd;

function gao() {
    this.frt = "";
    this.eso = null;
    this.kzp = null;
    this.xvv = "";
    this.wem = function(c, d, b, a) {
        this.frt = c;
        this.kzp = b;
        this.xvv = a;
        if (d) {
            if (d instanceof qsz) {
                this.eso = new qsz(d.x, d.y, d.width, d.height)
            } else {
                this.eso = d
            }
        }
    };
    this.zmv = function(b, a) {
        if (b) {
            if (b instanceof qsz) {
                this.eso = new qsz(b.x, b.y, b.width, b.height)
            } else {
                this.eso = b
            }
        }
        this.kzp = a
    };
    this.clc = function(a, c, b) {
        if (this.eso instanceof qsz) {
            if (a >= this.eso.x && a <= this.eso.x + this.eso.width && c >= this.eso.y && c <= this.eso.y + this.eso.height) {
                return true
            }
        } else {
            if (b) {
                b.save();
                this.rsj(b);
                if (b.isPointInPath(a, c)) {
                    b.restore();
                    return true
                }
                b.restore()
            }
        }
        return false
    };
    this.rsj = function(c) {
        if (this.kzp != null) {
            var g = null,
                b = null;
            c.beginPath();
            for (var f = 0, a = this.kzp.length; f < a; f++) {
                g = this.kzp[f];
                if (g instanceof qsz) {
                    c.rect(g.x, g.y, g.width, g.height)
                } else {
                    for (var e = 0, d = g.length; e < d; e++) {
                        b = g[e];
                        if (e == 0) {
                            c.moveTo(b.x, b.y)
                        } else {
                            c.lineTo(b.x, b.y)
                        }
                    }
                }
            }
            c.closePath()
        }
    }
}

function bgd() {
    this.frt = "";
    this.value = 0;
    this.qqz = function(a) {
        this.frt = a.frt;
        this.value = a.value
    };
    this.toString = function() {
        return this.frt + "$" + this.value
    }
}

function ran() {
    this.eso = null;
    this.aic = {
        x: 0,
        y: 0
    };
    this.fge = {
        x: 0,
        y: 0
    };
    this.max = {
        x: 0,
        y: 0
    };
    this.dok = null;
    this.wwa = null;
    this.kzp = null;
    this.jrt = 0;
    this.jjz = 0;
    this.win = 0;
    this.luo = false;
    this.color = "";
    this.wem = function(e, f, d, a, c, b) {
        this.frt = e;
        this.kzp = d;
        this.jrt = a;
        this.jjz = c;
        if (f) {
            if (f instanceof qsz) {
                this.eso = new qsz(f.x, f.y, f.width, f.height)
            } else {
                this.eso = f
            }
        }
        if (b) {
            this.opv = b
        }
    };
    this.zmv = function(f, b, d, e) {
        if (f) {
            if (f instanceof qsz) {
                this.eso = new qsz(f.x, f.y, f.width, f.height);
                this.aic = {
                    x: this.eso.zbx(),
                    y: this.eso.glw()
                };
                this.fge = {
                    x: this.eso.x,
                    y: this.eso.y
                };
                this.max = {
                    x: this.eso.ntk(),
                    y: this.eso.yhj()
                }
            } else {
                this.eso = f;
                for (var c = 0, a = this.eso.length; c < a; c++) {
                    if (this.eso[c].x < this.fge.x || this.fge.x == 0) {
                        this.fge.x = this.eso[c].x
                    } else {
                        if (this.eso[c].x > this.max.x) {
                            this.max.x = this.eso[c].x
                        }
                    }
                    if (this.eso[c].y < this.fge.y || this.fge.y == 0) {
                        this.fge.y = this.eso[c].y
                    } else {
                        if (this.eso[c].y > this.max.y) {
                            this.max.y = this.eso[c].y
                        }
                    }
                }
                this.aic = {
                    x: Math.round(this.fge.x + (this.max.x - this.fge.x) / 2),
                    y: Math.round(this.fge.y + (this.max.y - this.fge.y) / 2)
                }
            }
        }
        this.kzp = b;
        this.dok = d;
        this.wwa = e
    };
    this.clc = function(a, c, b) {
        if (this.eso instanceof qsz) {
            if (a >= this.eso.x && a <= this.eso.x + this.eso.width && c >= this.eso.y && c <= this.eso.y + this.eso.height) {
                return true
            }
        } else {
            if (b) {
                b.save();
                this.rsj(b);
                if (b.isPointInPath(a, c)) {
                    b.restore();
                    return true
                }
                b.restore()
            }
        }
        return false
    };
    this.rsj = function(c) {
        if (this.kzp != null) {
            var g = null,
                b = null;
            c.beginPath();
            for (var f = 0, a = this.kzp.length; f < a; f++) {
                g = this.kzp[f];
                if (g instanceof qsz) {
                    c.rect(g.x, g.y, g.width, g.height)
                } else {
                    for (var e = 0, d = g.length; e < d; e++) {
                        b = g[e];
                        if (e == 0) {
                            c.moveTo(b.x, b.y)
                        } else {
                            c.lineTo(b.x, b.y)
                        }
                    }
                }
            }
            c.closePath()
        }
    };
    this.kao = function(c) {
        if (this.dok != null) {
            var e = this.dok,
                b = null;
            c.beginPath();
            if (e instanceof qsz) {
                c.rect(e.x, e.y, e.width, e.height)
            } else {
                for (var d = 0, a = e.length; d < a; d++) {
                    b = e[d];
                    if (d == 0) {
                        c.moveTo(b.x, b.y)
                    } else {
                        c.lineTo(b.x, b.y)
                    }
                }
            }
            c.closePath()
        }
    }
}
ran.prototype = new bgd;

function zel() {
    var c = this;
    var a = "rect";
    var b = "round";
    this.kxv = "";
    this.vbv = null;
    this.xgg = null;
    this.jvm = false;
    this.kax = ["", "", "", "", "", "", "", "", ""];
    this.tce = 5;
    this.khz = 0;
    this.rbx = 0;
    this.qxd = 0;
    this.owa = 0;
    this.vkk = 20 * Math.PI / 11;
    this.fyd = 3 * Math.PI / 11;
    this.cep = 0;
    this.cxr = 0;
    this.ijl = 0;
    this.lfy = 0;
    this.pkj = 500;
    this.shz = -1;
    this.ufl = 0;
    this.vxh = -1;
    this.gjd = false;
    this.yrj = 0;
    this.xxj = 0;
    this.gak = 25;
    this.btp = "sans-serif";
    this.apl = "";
    this.ykb = "rgb(21,69,38)";
    this.jcm = "rgb(220,210,140)";
    this.vpj = "rgb(0,0,0)";
    this.oxk = null;
    this.jmg = "white";
    this.hgl = a;
    this.ols = null;
    this.utd = null;
    this.gxh = null;
    this.sld = new qsz();
    this.dqx = new qsz();
    this.cbz = 12;
    this.jjp = 0;
    this.akk = 4;
    this.hpa = 4;
    this.ejo = 4;
    this.hdf = 1;
    this.ers = 1;
    this.enr = 0;
    this.nvi = 0;
    this.ler = function(d) {
        try {
            this.btp = d.font;
            this.apl = d.stb;
            this.ykb = d.backgroundColor;
            this.jcm = d.borderColor;
            this.oxk = d.orn;
            this.jmg = d.gmj;
            this.vpj = d.dwu;
            this.hgl = d.type;
            this.ols = this.context2D.createLinearGradient(this.dqx.x, this.dqx.y, this.dqx.x, this.dqx.y + this.dqx.height);
            this.ols.addColorStop(0, d.krj);
            this.ols.addColorStop(0.25, d.ajd);
            this.ols.addColorStop(0.75, d.zhl);
            this.ols.addColorStop(1, d.gsf);
            this.gxh = this.context2D.createLinearGradient(this.dqx.x, this.dqx.y, this.dqx.x, this.dqx.y + this.dqx.height);
            this.gxh.addColorStop(0, d.jtr);
            this.gxh.addColorStop(0.25, d.qrb);
            this.gxh.addColorStop(0.75, d.gxw);
            this.gxh.addColorStop(1, d.ivd);
            this.utd = this.context2D.createLinearGradient(this.dqx.x, this.dqx.y, this.dqx.x, this.dqx.y + this.dqx.height);
            this.utd.addColorStop(0, d.mrg);
            this.utd.addColorStop(0.25, d.hdn);
            this.utd.addColorStop(0.75, d.abg);
            this.utd.addColorStop(1, d.bqf)
        } catch (f) {
            console.error(f)
        }
    };
    this.qgh = function(d) {
        try {
            this.dqx = d.ohk;
            this.sld = d.opv;
            this.cbz = d.fontSize;
            this.jjp = d.mpi;
            this.akk = d.ogq;
            this.hpa = d.prh;
            this.ejo = d.kui;
            this.hdf = d.nlj;
            this.ers = d.ahs;
            this.enr = d.nwf;
            this.nvi = d.doh
        } catch (f) {
            console.error(f)
        }
    };
    this.ddx = function(d) {
        this.kax[0] = d.nof;
        this.kax[1] = d.tfn;
        this.kax[2] = d.fra;
        this.kax[3] = d.vzb;
        this.kax[4] = d.yvk;
        this.kax[5] = d.eaa;
        this.kax[6] = d.dje;
        this.kax[7] = d.fjb;
        this.kax[8] = d.fqj;
        this.kax[9] = d.mvx;
        this.kax[10] = d.fcs;
        if (this.tce >= 0) {
            this.kxv = this.kax[this.tce]
        } else {
            this.kxv = ""
        }
        this.eth()
    };
    this.apa = function(e, f, d) {
        this.rby();
        this.tce = e;
        if (this.tce >= 0) {
            this.kxv = this.kax[this.tce]
        } else {
            this.kxv = ""
        }
        if (e === 0) {
            if (this.hgl === a) {
                this.khz = this.dqx.width - 2 * this.hpa
            } else {
                if (this.hgl === b) {
                    this.rbx = this.vkk;
                    this.cxr = 0
                }
            }
        }
        if (d && d === true) {
            this.wyt()
        }
        if (f && f === true) {
            this.eth()
        }
    };
    this.wyt = function() {
        if (this.jvm === true && this.gjd === false) {
            this.ufl = this.width;
            this.gjd = true;
            this.xxj = 0;
            this.yrj = new Date().getTime();
            this.wep()
        }
    };
    this.rby = function() {
        if (this.jvm === true && this.gjd == true) {
            onu(this.vxh);
            this.vxh = -1;
            this.gjd = false;
            this.eth()
        }
    };
    this.wep = function() {
        if (c.gjd == false) {
            onu(c.vxh);
            c.vxh = -1;
            return
        }
        if ((c.xxj % 5) == 0) {
            c.ufl -= c.width / c.gak;
            c.eth()
        }
        c.xxj++;
        c.vxh = upo(c.wep)
    };
    this.ehi = function(d) {
        this.cep = Math.floor(d / 1000) * 1000
    };
    this.fwd = function(d) {
        this.cxr = Math.floor(d / 1000) * 1000;
        this.ijl = (this.lfy - (this.cxr / this.pkj) > this.ijl + (1000 / this.pkj)) ? this.lfy - (this.cxr / this.pkj) : this.ijl
    };
    this.dlr = function(d) {
        if (d > 0) {
            this.gak = d
        }
    };
    this.start = function(f, e) {
        var d = 100;
        this.rby();
        if (f != null && f >= 0) {
            this.tce = f
        }
        this.kxv = this.kax[this.tce];
        this.lfy = Math.floor(this.cep / this.pkj);
        this.ijl = 0;
        if (this.hgl === a) {
            this.khz = 0;
            this.qxd = (this.dqx.width - 2 * this.hpa) / this.lfy
        } else {
            if (this.hgl === b) {
                this.rbx = 0;
                this.owa = this.vkk / this.lfy;
                this.cxr = this.cep;
                d = 0
            }
        }
        if (this.shz < 0) {
            this.shz = setTimeout(this.gos, d)
        }
        if (e && e === true) {
            this.wyt()
        }
    };
    this.stop = function() {
        clearTimeout(this.shz);
        this.shz = -1;
        this.kxv = this.kax[2];
        this.ijl = this.lfy;
        if (this.hgl === a) {
            this.khz = this.dqx.width - 2 * this.hpa
        } else {
            if (this.hgl === b) {
                this.rbx = this.vkk;
                this.cxr = 0
            }
        }
        this.eth()
    };
    this.gos = function() {
        c.ijl += 1;
        if (c.ijl < c.lfy) {
            if (c.hgl === a) {
                c.khz = c.ijl * c.qxd
            } else {
                if (c.hgl === b) {
                    c.rbx = c.ijl * c.owa;
                    c.cxr = Math.round(c.cep - (c.ijl * c.pkj))
                }
            }
            c.eth();
            c.shz = setTimeout(c.gos, c.pkj)
        } else {
            if (c.hgl === a) {
                c.khz = c.dqx.width - 2 * c.hpa
            } else {
                if (c.hgl === b) {
                    c.rbx = c.vkk;
                    c.cxr = 0
                }
            }
            c.eth()
        }
    };
    this.eth = function() {
        var e = this.parent.hhv.djj("winn"),
            d = this.parent.hhv.djj("loc");
        if ((e && e.izz()) || (d && d.izz())) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        } else {
            this.jlg()
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var d = this.context2D,
            f = this.jcm,
            e = this.jcm;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        if (this.oxk) {
            f = this.context2D.createLinearGradient(this.sld.x + this.sld.width / 2, this.sld.y, this.sld.x + this.sld.width / 2, this.sld.y + this.sld.height);
            f.addColorStop(0, this.jcm);
            f.addColorStop(1, this.oxk);
            e = this.context2D.createLinearGradient(this.dqx.x + this.dqx.width / 2, this.dqx.y, this.dqx.x + this.dqx.width / 2, this.dqx.y + this.dqx.height);
            e.addColorStop(0, this.jcm);
            e.addColorStop(1, this.oxk)
        }
        tlg.tpm.fjv(d, this.sld.x, this.sld.y, this.sld.width, this.sld.height, this.ejo, this.ykb, f, this.hdf);
        if (this.hgl === a) {
            tlg.tpm.fjv(d, this.dqx.x, this.dqx.y, this.dqx.width, this.dqx.height, this.ejo, this.ykb, e, this.hdf);
            if (this.tce >= 0 && this.tce <= 5) {
                if (this.khz > 0 && this.khz < (this.dqx.width - 2 * this.hpa)) {
                    if (this.tce == 1) {
                        tlg.tpm.gxk(d, this.dqx.x + this.hpa, this.dqx.y + this.hpa, this.khz, this.dqx.height - 2 * this.hpa, this.gxh, 1)
                    } else {
                        tlg.tpm.gxk(d, this.dqx.x + this.hpa, this.dqx.y + this.hpa, this.khz, this.dqx.height - 2 * this.hpa, this.utd, 1)
                    }
                } else {
                    if (this.tce == 0) {
                        tlg.tpm.gxk(d, this.dqx.x + this.hpa, this.dqx.y + this.hpa, this.khz, this.dqx.height - 2 * this.hpa, this.utd, 1)
                    } else {
                        if (this.tce == 1) {
                            tlg.tpm.gxk(d, this.dqx.x + this.hpa, this.dqx.y + this.hpa, this.khz, this.dqx.height - 2 * this.hpa, this.gxh, 1)
                        } else {
                            tlg.tpm.gxk(d, this.dqx.x + this.hpa, this.dqx.y + this.hpa, this.khz, this.dqx.height - 2 * this.hpa, this.ols, 1)
                        }
                    }
                }
            }
        } else {
            if (this.hgl === b) {
                tlg.tpm.qev(d, this.dqx.x + this.dqx.width / 2, this.dqx.y + this.dqx.height / 2, this.nvi, this.ykb, 1);
                if (this.tce >= 0 && this.tce <= 5) {
                    if (this.rbx > 0 && this.rbx < this.vkk) {
                        if (this.tce == 1) {
                            this.xvt(d, this.gxh)
                        } else {
                            this.xvt(d, this.utd)
                        }
                    } else {
                        if (this.tce == 0) {
                            this.xvt(d, this.utd)
                        } else {
                            if (this.tce == 1) {
                                this.xvt(d, this.gxh)
                            } else {
                                this.xvt(d, this.ols)
                            }
                        }
                    }
                }
                if (this.xgg) {
                    d.drawImage(this.xgg, this.dqx.x, this.dqx.y, this.dqx.width, this.dqx.height)
                }
                tlg.tpm.der(d, Math.round(this.cxr / 1000), this.jmg, this.dqx.x, this.dqx.y, this.dqx.width, this.dqx.height, this.btp, this.jjp, this.apl, this.vpj, this.ers)
            }
        }
        if (this.gjd) {
            this.odv(d, this.kxv, this.jmg, this.ufl, this.sld.y, this.sld.height, this.btp, this.cbz, this.apl)
        } else {
            if (this.sld.height > 2 * this.cbz) {
                tlg.tpm.lbj(d, this.kxv, this.jmg, this.sld.x, this.sld.y, this.sld.width, this.sld.height, this.btp, this.cbz, this.apl, "center", true)
            } else {
                tlg.tpm.der(d, this.kxv, this.jmg, this.sld.x, this.sld.y, this.sld.width, this.sld.height, this.btp, this.cbz, this.apl)
            }
        }
        if (this.vbv) {
            d.drawImage(this.vbv, this.sld.x + this.akk, this.sld.y + this.akk, this.sld.width - 2 * this.akk, this.sld.height - 3 * this.akk)
        }
        d.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    };
    this.xvt = function(d, e) {
        var f = this.rbx,
            g = this.fyd;
        d.save();
        d.fillStyle = e;
        d.beginPath();
        d.arc(this.dqx.x + this.dqx.width / 2, this.dqx.y + this.dqx.height / 2, this.enr, g, g + f, false);
        d.arc(this.dqx.x + this.dqx.width / 2, this.dqx.y + this.dqx.height / 2, this.nvi, g + f, g, true);
        d.fill();
        d.closePath();
        d.restore()
    };
    this.odv = function(n, l, f, j, i, m, e, o, g) {
        var k = 0,
            d = o;
        if (!g) {
            g = ""
        }
        n.save();
        n.beginPath();
        n.rect(this.sld.x + this.akk, this.sld.y + this.akk, this.sld.width - 2 * this.akk, this.sld.height - 2 * this.akk);
        n.closePath();
        n.clip();
        n.textAlign = "start";
        n.textBaseline = "bottom";
        n.fillStyle = f;
        n.font = g + " " + d + "px " + e;
        k = n.measureText(l).width;
        if (j < -k) {
            this.ufl = this.width
        }
        n.fillText(l, j, i + (m - (m - d) / 2));
        n.restore();
        return k
    }
}
zel.prototype = new ezd;

function nqy() {
    this.vbv = null;
    this.ojl = null;
    this.ejo = 3;
    this.hdf = 1;
    this.ehb = new qsz(10, 5, 155, 20);
    this.sho = new qsz(185, 5, 155, 20);
    this.xtg = new qsz(55, 70, 240, 240);
    this.dub = new qsz(4, 298, 110, 15);
    this.owl = new qsz(235, 298, 110, 15);
    this.fqp = 56;
    this.zul = 56;
    this.pct = 30;
    this.mma = 30;
    this.rsx = 25;
    this.iwf = 5;
    this.dhs = 28;
    this.cbz = 13;
    this.irw = 10;
    this.wll = 9;
    this.ykb = "rgb(21,69,38)";
    this.jcm = "rgb(220,210,140)";
    this.hzr = "red";
    this.eiu = "green";
    this.scw = "black";
    this.jmg = "rgb(240,240,230)";
    this.btp = "sans-serif";
    this.apl = "";
    this.kjq = null;
    this.vbv = null;
    this.dvr = [];
    this.zvk = [];
    this.trf = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
    this.tyi = 0;
    this.fti = 0;
    this.rki = 0;
    this.bxo = 0;
    this.kpv = 0;
    this.ler = function(b) {
        try {
            this.ykb = b.backgroundColor;
            this.jcm = b.borderColor;
            this.hzr = b.rqx;
            this.eiu = b.xqs;
            this.scw = b.vnq;
            this.jmg = b.gmj;
            this.btp = b.font;
            this.apl = b.stb
        } catch (c) {
            console.error(c)
        }
    };
    this.qgh = function(b) {
        try {
            this.ejo = b.kui;
            this.hdf = b.nlj;
            this.ehb = b.jwi;
            this.sho = b.qiw;
            this.xtg = b.pet;
            this.dub = b.zgt;
            this.owl = b.oxw;
            this.fqp = b.vup;
            this.zul = b.nfe;
            this.pct = b.rbu;
            this.mma = b.riq;
            this.rsx = b.jog;
            this.iwf = b.dys;
            this.dhs = b.fsm;
            this.cbz = b.fontSize;
            this.irw = b.dfv;
            this.wll = b.xgw
        } catch (c) {
            console.error(c)
        }
    };
    this.vbu = function(c) {
        this.dvr.length = 0;
        for (var d = 0, b = c.length; d < b; d++) {
            this.dvr.push(c[d])
        }
    };
    this.bsh = function() {
        return this.zvk
    };
    this.xyb = function() {
        return this.dvr
    };
    this.aco = function() {
        var e = (this.zvk.length == 0),
            d = 0,
            f = 0,
            c = 0,
            b = this.dvr.length;
        for (c = 0; c < b; c++) {
            f = this.dvr[c];
            if (e) {
                this.zvk.push({
                    n: c,
                    h: f
                })
            } else {
                this.zvk[c] = {
                    n: c,
                    h: f
                }
            }
        }
        this.zvk = a(this.zvk);
        this.tyi = 0;
        this.fti = 0;
        this.rki = 0;
        this.bxo = 0;
        this.kpv = 0;
        for (c = 0; c < b; c++) {
            f = this.dvr[c];
            if (c == 0) {
                this.tyi += f
            } else {
                if (this.parent.smf(c)) {
                    this.fti += f
                } else {
                    this.rki += f
                }
                if (this.parent.vod(c)) {
                    this.kpv += f
                } else {
                    this.bxo += f
                }
            }
            d += f
        }
        this.tyi = Math.round((this.tyi * 100) / d);
        this.fti = Math.round((this.fti * 100) / d);
        this.rki = Math.round((this.rki * 100) / d);
        this.bxo = Math.round((this.bxo * 100) / d);
        this.kpv = Math.round((this.kpv * 100) / d)
    };
    
    function a(c) {
        var b, d;
        for (var e = 1; e < c.length; e++) {
            b = c[e];
            d = e;
            while (d > 0 && c[d - 1].h < b.h) {
                c[d] = c[d - 1];
                d--
            }
            c[d] = b
        }
        return c
    }
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        tlg.tpm.fjv(b, 0, 0, this.width, this.height, this.ejo, this.ykb, this.jcm, this.hdf);
        tlg.tpm.der(b, this.parent.language.xcv, this.jmg, this.ehb.x, this.ehb.y, this.ehb.width, this.ehb.height, this.btp, this.cbz, this.apl);
        tlg.tpm.der(b, this.parent.language.eic, this.jmg, this.sho.x, this.sho.y, this.sho.width, this.sho.height, this.btp, this.cbz, this.apl);
        this.cqf(this.ehb.x, true);
        this.cqf(this.sho.x, false);
        if (this.vbv != null) {
            b.drawImage(this.vbv, this.xtg.x, this.xtg.y, this.xtg.width, this.xtg.height)
        }
        this.ipi();
        this.jqv(this.dub, "Red", "Black", this.fti, this.tyi, this.rki);
        this.jqv(this.owl, "Odd", "Even", this.bxo, this.tyi, this.kpv);
        b.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    };
    this.ipi = function() {
        var d = this.context2D,
            g = 299.96,
            j = Math.PI / 24,
            f = Math.PI / 18.5,
            c = 0,
            k = 0;
        for (var e = 0, b = this.trf.length; e < b; e++) {
            c = this.dhs + this.dvr[this.trf[e]];
            k = g + e * f;
            d.fillStyle = this.hzr;
            d.beginPath();
            d.arc(this.xtg.x + this.xtg.width / 2, this.xtg.y + this.xtg.height / 2, c, k, k + j, false);
            d.arc(this.xtg.x + this.xtg.width / 2, this.xtg.y + this.xtg.height / 2, this.dhs, k + j, k, true);
            d.stroke();
            d.fill()
        }
    };
    this.jqv = function(i, d, c, g, f, e) {
        var k = this.context2D,
            j = g + f + e,
            b = i.width / j;
        k.save();
        k.fillStyle = this.hzr;
        k.fillRect(i.x + this.hdf, i.y + this.hdf, Math.floor(b * g), i.height - 2 * this.hdf);
        k.fillStyle = this.eiu;
        k.fillRect(i.x + Math.floor(b * g), i.y + this.hdf, Math.round(b * f), i.height - 2 * this.hdf);
        k.fillStyle = this.scw;
        k.fillRect(i.x + Math.floor(b * g) + Math.round(b * f), i.y + this.hdf, i.width - Math.floor(b * g) - Math.round(b * f) - this.hdf, i.height - 2 * this.hdf);
        tlg.tpm.fjv(k, i.x, i.y, i.width, i.height, this.ejo, null, this.jcm, this.hdf);
        tlg.tpm.der(k, "Zero", this.jmg, i.x, i.y - this.wll, i.width, this.wll, this.btp, this.wll, this.apl);
        tlg.tpm.mex(k, d, this.jmg, i.x, i.y - this.wll, i.width, this.wll, this.btp, this.wll, this.apl);
        tlg.tpm.fwp(k, c, this.jmg, i.x, i.y - this.wll, i.width, this.wll, this.btp, this.wll, this.apl);
        tlg.tpm.mex(k, g + "%", this.jmg, i.x, i.y, i.width, i.height, this.btp, this.irw, this.apl, 2 * this.ejo);
        tlg.tpm.der(k, f + "%", this.jmg, i.x, i.y, i.width, i.height, this.btp, this.irw, this.apl);
        tlg.tpm.fwp(k, e + "%", this.jmg, i.x, i.y, i.width, i.height, this.btp, this.irw, this.apl, 2 * this.ejo);
        k.restore()
    };
    this.cqf = function(b, e) {
        var c = this.context2D;
        x1 = b, y = this.rsx + this.mma + this.iwf, bim = null, mos = 0;
        c.save();
        for (var d = 0; d < 5; d++) {
            bim = null;
            if (e == true) {
                bim = this.zvk[d]
            } else {
                bim = this.zvk[36 - d]
            }
            this.jqy(bim.n, x1);
            mos = bim.h;
            tlg.tpm.der(c, mos.toString(), this.jmg, x1, y, this.pct, this.cbz, this.btp, this.cbz, this.apl);
            x1 += this.pct
        }
        c.restore()
    };
    this.jqy = function(e, b) {
        var c = this.context2D,
            f = this.rsx,
            d = 0;
        if (e == 0) {
            e = 37
        }
        c.save();
        if (e == 0) {
            d = this.zul * 39
        } else {
            d = this.zul * e
        }
        c.drawImage(this.ojl, 0, d, this.fqp, this.zul, b, f, this.pct, this.mma);
        c.restore()
    }
}
nqy.prototype = new ezd;

function xcs() {
    this.tce = 0;
    this.bdf = false;
    this.btp = "";
    this.apl = "";
    this.ykb = "";
    this.axu = "";
    this.jcm = "";
    this.jmg = "";
    this.sld = new qsz(), this.tof = new qsz(), this.cbz = 20, this.ejo = 0, this.hdf = 0, this.bti = function(a) {
        this.sze.sqh("next", this.bdq(a.xyi, ">>", null, this.parent.raj, null), ["buttons"]);
        this.sze.sqh("prev", this.bdq(a.ecr, "<<", null, this.parent.uoe, null), ["buttons"]);
        this.sze.sqh("return", this.bdq(a.wtw, this.parent.ieh(this.parent.language.ret), null, this.parent.uow, null), ["buttons"]);
        this.sze.sqh("return2", this.bdq(a.kvh, this.parent.ieh(this.parent.language.ret), null, this.parent.uow, null), ["buttons"])
    };
    this.qgh = function(a) {
        xcs.prototype.qgh.call(this, a);
        try {
            this.sld = a.opv;
            this.tof = a.knm;
            this.cbz = a.fontSize;
            this.ejo = a.kui;
            this.hdf = a.nlj;
            this.sze.psg("next", "#ota", [a.xyi]);
            this.sze.psg("prev", "#ota", [a.ecr]);
            this.sze.psg("return", "#ota", [a.wtw]);
            this.sze.psg("return2", "#qgh", [a.kbl]);
            this.sze.psg("return2", "#ota", [a.kvh])
        } catch (b) {
            console.error(b)
        }
    };
    this.ler = function(c) {
        try {
            this.btp = c.font;
            this.apl = c.stb;
            this.ykb = c.backgroundColor;
            this.axu = c.xqh;
            this.jcm = c.borderColor;
            this.jmg = c.gmj;
            var d = this.sze.tsx("buttons");
            for (var b = 0, a = d.length; b < a; b++) {
                d[b].ler(c.npg)
            }
        } catch (f) {
            console.error(f)
        }
    };
    this.nht = function(a) {
        this.tce = a
    };
    this.ofq = function() {
        return this.tce
    };
    this.jen = function(a) {
        this.bdf = a
    };
    this.kzh = function(a) {
        this.sze.psg("next", "#hoe", [a && this.tce > 0]);
        this.sze.psg("prev", "#hoe", [a && !this.bdf && this.tce < tlg.fxx.value20]);
        this.sze.psg("return", "#hoe", [a]);
        this.sze.psg("return2", "#hoe", [a])
    };
    this.ddx = function(a) {
        this.sze.psg("return", "#vjp", [this.parent.ieh(a.ret)]);
        this.sze.psg("return2", "#vjp", [this.parent.ieh(a.ret)])
    };
    this.jlg = function(g, f, j, d) {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var k = this.context2D,
            b = (g != null && f != null && j != null && d != null),
            a = this.sze.pfa();
        k.save();
        if (b) {
            k.beginPath();
            k.rect(g, f, j, d);
            k.closePath();
            k.clip()
        }
        tlg.tpm.fjv(k, 0, 0, this.width, this.height, this.ejo, this.ykb, this.jcm, this.hdf);
        tlg.tpm.gxk(k, this.tof.x, this.tof.y, this.tof.width, this.tof.height, this.axu, 1, this.jcm, this.hdf, 1);
        tlg.tpm.der(k, this.parent.ieh(this.parent.language.wqz), this.jmg, this.sld.x, this.sld.y, this.sld.width, this.sld.height, this.btp, this.cbz, this.apl);
        if (this.parent.gox) {
            tlg.tpm.lbj(k, this.parent.ieh(this.parent.language.jlk), this.jmg, this.tof.x, this.tof.y, this.tof.width, this.tof.height, this.btp, this.cbz, this.apl, "center", true)
        }
        for (var c = 0, e = a.length; c < e; c++) {
            a[c].jlg()
        }
        k.restore();
        if (this.alo && this.rml) {
            if (b) {
                this.alo.drawImage(this.rml, g, f, j, d, this.x + g, this.y + f, j, d)
            } else {
                this.alo.drawImage(this.rml, this.x, this.y)
            }
        }
    }
}
xcs.prototype = new ozz;

function dos() {
    this.mfc = "";
    this.lfa = "";
    this.hgl = tlg.roulette.xbr.gbb;
    this.btp = "";
    this.apl = "";
    this.jmg = "";
    this.pmr = "";
    this.ykb = "";
    this.jcm = "";
    this.izs = "";
    this.svc = "";
    this.rut = 1;
    this.jve = new qsz();
    this.sld = new qsz();
    this.khk = 14;
    this.nlx = 12;
    this.ejo = 2;
    this.hdf = 2;
    this.ler = function(a) {
        try {
            this.btp = a.font;
            this.apl = a.stb;
            this.jmg = a.gmj;
            this.pmr = a.zqa;
            this.ykb = a.backgroundColor;
            this.jcm = a.borderColor;
            this.izs = a.alx;
            this.svc = a.zcn;
            this.rut = a.wks
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        try {
            this.jve = a.dci;
            this.sld = a.opv;
            this.khk = a.zyc;
            this.nlx = a.jal;
            this.ejo = a.kui;
            this.hdf = a.nlj
        } catch (b) {
            console.error(b)
        }
    };
    this.apa = function(c, b, a) {
        this.mfc = c;
        this.lfa = b;
        if (a != null) {
            this.hgl = a
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = this.context2D,
            b = (this.hgl === tlg.roulette.xbr.zom) ? this.svc : (this.hgl === tlg.roulette.xbr.scj) ? this.izs : this.jcm;
        a.save();
        a.clearRect(0, 0, this.width, this.height);
        tlg.tpm.svk(a, 0, 0, this.width, this.height, this.ejo, this.ykb, this.rut, b, this.hdf, 1);
        tlg.tpm.der(a, this.mfc, this.pmr, this.jve.x, this.jve.y, this.jve.width, this.jve.height, this.btp, this.khk, this.apl);
        if (this.mfc == null || this.mfc == "") {
            tlg.tpm.lbj(a, this.lfa, this.jmg, this.sld.x, 0, this.sld.width, this.height, this.btp, this.nlx, this.apl, "center", true)
        } else {
            tlg.tpm.lbj(a, this.lfa, this.jmg, this.sld.x, this.sld.y, this.sld.width, this.sld.height, this.btp, this.nlx, this.apl, "center", true)
        }
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
dos.prototype = new ezd;

function khq() {
    this.vbv = null;
    this.kbi = null;
    this.amk = null;
    this.wyo = true;
    this.ojo = [];
    this.lop = null;
    this.hda = [];
    this.vfq = null;
    this.rjt = null;
    this.klf = -1;
    this.sop = -1;
    this.ybl = false;
    this.gsh = 0;
    this.xec = -1;
    this.sul = 300;
    this.mhb = 400;
    this.rtd = null;
    this.yog = false;
    this.ufl = 0;
    this.lle = 0;
    this.fwq = 0;
    this.qon = 0;
    this.adi = 0;
    this.bwh = 0;
    this.bgg = 0;
    this.qtx = 0;
    this.nsv = 0;
    this.mjc = 0;
    this.ngc = 0;
    this.hql = 0;
    this.cfo = 0;
    this.txc = 0;
    this.vpk = 0;
    this.ahf = 0;
    this.klt = 10;
    this.nhp = 1;
    this.eml = 3;
    this.syy = "helvetica";
    this.neu = "";
    this.wsj = "black";
    this.kiw = "sans-serif";
    this.uxg = "";
    this.kxk = "white";
    this.lbm = "sans-serif";
    this.nzb = "";
    this.xvh = "white";
    this.ufd = "white";
    this.lmm = "black";
    this.bkd = "yellow";
    this.tvx = 1;
    this.ler = function(c) {
        try {
            this.wsj = c.ciq.gmj;
            this.syy = c.ciq.font;
            this.neu = c.ciq.stb;
            this.kiw = c.qyn.font;
            this.uxg = c.qyn.stb;
            this.kxk = c.qyn.gmj;
            this.lbm = c.win.font;
            this.nzb = c.win.stb;
            this.xvh = c.win.gmj;
            this.ufd = c.win.kmf;
            this.lmm = c.win.backgroundColor;
            this.bkd = c.win.borderColor;
            this.tvx = c.win.wks;
            for (var b = 0, a = this.hda.length; b < a; b++) {
                this.hda[b].ler(c.pak)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.qgh = function(c) {
        try {
            this.ufl = c.mjg;
            this.lle = c.zaf;
            this.fwq = c.vqg;
            this.qon = c.epd;
            this.adi = c.oni;
            this.bwh = c.bzz;
            this.bgg = c.ysy;
            this.qtx = c.nmg;
            this.nsv = c.ciq.eso.width;
            this.mjc = c.ciq.eso.height;
            this.hql = c.ciq.fontSize;
            this.ngc = c.ciq.ogq;
            this.cfo = c.qyn.fontSize;
            this.txc = c.qyn.nnz;
            this.vpk = c.win.width;
            this.ahf = c.win.height;
            this.klt = c.win.fontSize;
            this.nhp = c.win.nlj;
            this.eml = c.win.kui;
            for (var b = 0, a = this.hda.length; b < a; b++) {
                this.hda[b].qgh(c.pak)
            }
            this.vfq.ota(c.cou);
            this.xdh()
        } catch (d) {
            console.error(d)
        }
    };
    this.gpx = function() {
        var f = null,
            e = 0;
        this.ojo = [];
        f = new ran();
        f.wem("0", null, null, this.parent.sqw, this.parent.eia);
        this.ojo.push(f);
        f = new ran();
        f.wem("0,1,2", null, null, this.parent.emg, this.parent.pky);
        this.ojo.push(f);
        f = new ran();
        f.wem("0,2,3", null, null, this.parent.emg, this.parent.pky);
        this.ojo.push(f);
        f = new ran();
        f.wem("0,1", null, null, this.parent.tkh, this.parent.nyq);
        this.ojo.push(f);
        f = new ran();
        f.wem("0,2", null, null, this.parent.tkh, this.parent.nyq);
        this.ojo.push(f);
        f = new ran();
        f.wem("0,3", null, null, this.parent.tkh, this.parent.nyq);
        this.ojo.push(f);
        f = new ran();
        f.wem("1-18", null, null, this.parent.exj, this.parent.ajq);
        this.ojo.push(f);
        f = new ran();
        f.wem("19-36", null, null, this.parent.exj, this.parent.ajq);
        this.ojo.push(f);
        f = new ran();
        f.wem("1-12", null, null, this.parent.ppl, this.parent.wgg);
        this.ojo.push(f);
        f = new ran();
        f.wem("13-24", null, null, this.parent.ppl, this.parent.wgg);
        this.ojo.push(f);
        f = new ran();
        f.wem("25-36", null, null, this.parent.ppl, this.parent.wgg);
        this.ojo.push(f);
        f = new ran();
        f.wem("1/12", null, null, this.parent.ppl, this.parent.wgg);
        this.ojo.push(f);
        f = new ran();
        f.wem("2/12", null, null, this.parent.ppl, this.parent.wgg);
        this.ojo.push(f);
        f = new ran();
        f.wem("3/12", null, null, this.parent.ppl, this.parent.wgg);
        this.ojo.push(f);
        for (var d = 0; d < 12; d++) {
            var c = e + 1;
            var b = e + 2;
            var a = e + 3;
            if (d < 11) {
                f = new ran();
                f.wem(c + "." + (c + 4), null, null, this.parent.fin, this.parent.kre);
                this.ojo.push(f);
                f = new ran();
                f.wem(b + "." + (b + 4), null, null, this.parent.fin, this.parent.kre);
                this.ojo.push(f);
                f = new ran();
                f.wem(c + "-" + (a + 3), null, null, this.parent.zov, this.parent.xdg);
                this.ojo.push(f);
                f = new ran();
                f.wem(c + "," + (c + 3), null, null, this.parent.tkh, this.parent.nyq);
                this.ojo.push(f);
                f = new ran();
                f.wem(b + "," + (b + 3), null, null, this.parent.tkh, this.parent.nyq);
                this.ojo.push(f);
                f = new ran();
                f.wem(a + "," + (a + 3), null, null, this.parent.tkh, this.parent.nyq);
                this.ojo.push(f)
            }
            f = new ran();
            f.wem(c + "-" + a, null, null, this.parent.emg, this.parent.pky);
            this.ojo.push(f);
            f = new ran();
            f.wem(c + "," + b, null, null, this.parent.tkh, this.parent.nyq);
            this.ojo.push(f);
            f = new ran();
            f.wem(b + "," + a, null, null, this.parent.tkh, this.parent.nyq);
            this.ojo.push(f);
            f = new ran();
            f.wem(c.toString(), null, null, this.parent.sqw, this.parent.eia);
            this.ojo.push(f);
            f = new ran();
            f.wem(b.toString(), null, null, this.parent.sqw, this.parent.eia);
            this.ojo.push(f);
            f = new ran();
            f.wem(a.toString(), null, null, this.parent.sqw, this.parent.eia);
            this.ojo.push(f);
            e += 3
        }
        f = new ran();
        f.wem("even", null, null, this.parent.exj, this.parent.ajq);
        this.ojo.push(f);
        f = new ran();
        f.wem("red", null, null, this.parent.exj, this.parent.ajq);
        this.ojo.push(f);
        f = new ran();
        f.wem("black", null, null, this.parent.exj, this.parent.ajq);
        this.ojo.push(f);
        f = new ran();
        f.wem("odd", null, null, this.parent.exj, this.parent.ajq);
        this.ojo.push(f);
        this.fdf()
    };
    this.bti = function(a) {
        this.vfq = this.bdq(a.cou, "WINS", this.zsb, a.pak);
        this.hda = [this.vfq]
    };
    this.bdq = function(c, e, d, b) {
        var a = new ngo();
        a.wem(c, this.context2D, null, null, e);
        a.parent = this;
        a.wuk = d;
        a.qgh(b);
        return a
    };
    this.fdf = function() {};
    this.xdh = function() {};
    this.kzh = function(c) {
        if (c === false) {
            if (this.vfq.hah() == true) {
                this.vfq.pzi(false, true);
                this.tto()
            }
        }
        for (var b = 0, a = this.hda.length; b < a; b++) {
            this.hda[b].hoe(c)
        }
    };
    this.uia = function() {
        for (var b = 0, a = this.ojo.length; b < a; b++) {
            if (this.ojo[b] instanceof ran) {
                this.ojo[b].jrt = this.parent.dac(this.ojo[b].frt);
                this.ojo[b].jjz = this.parent.twp(this.ojo[b].frt)
            }
        }
    };
    this.xig = function(b) {
        var f = false;
        for (var e = 0, a = b.length; e < a; e++) {
            f = false;
            for (var d = 0, c = this.ojo.length; d < c && !f; d++) {
                if (this.ojo[d].frt == b[e].frt) {
                    this.ojo[d].value = b[e].value;
                    f = true
                }
            }
        }
    };
    this.zlq = function(b) {
        var d = 0,
            a = b.length,
            c = this.ojo.length;
        for (d = 0; d < c; d++) {
            this.ojo[d].win = 0
        }
        for (var d = 0; d < a; d++) {
            this.dgi(b[d])
        }
    };
    this.dgi = function(a) {
        if (a != null) {
            var k = a.frt,
                e = a.value,
                g = 0,
                m = null;
            if (k.length <= 2) {
                m = this.vjc(a.frt);
                m.win += a.value + a.value * this.parent.hmh.lzu
            } else {
                if (k.indexOf(",") > 0) {
                    var l = k.split(","),
                        f = l.length;
                    if (f == 2) {
                        e = a.value * this.parent.hmh.split
                    } else {
                        e = a.value * this.parent.hmh.fns
                    }
                    for (var c = 0; c < l.length; c++) {
                        var b = l[c];
                        m = this.vjc(b);
                        m.win += a.value + e
                    }
                } else {
                    if ((g = k.indexOf("-")) > 0 && "1-18" != k && "19-36" != k && "1-12" != k && "13-24" != k && "25-36" != k) {
                        var j = parseInt(k.substring(0, g)),
                            d = parseInt(k.substring(g + 1));
                        if ((d - j) <= 2) {
                            e = a.value * this.parent.hmh.fns
                        } else {
                            e = a.value * this.parent.hmh.yhd
                        }
                        for (var c = j; c <= d; c++) {
                            m = this.vjc(c.toString());
                            m.win += a.value + e
                        }
                    } else {
                        if ((g = k.indexOf(".")) > 0) {
                            var j = parseInt(k.substring(0, g)),
                                d = parseInt(k.substring(g + 1));
                            e = a.value * this.parent.hmh.ifp;
                            m = this.vjc(j.toString());
                            m.win += a.value + e;
                            m = this.vjc((j + 1).toString());
                            m.win += a.value + e;
                            m = this.vjc((d - 1).toString());
                            m.win += a.value + e;
                            m = this.vjc(d.toString());
                            m.win += a.value + e
                        } else {
                            for (var c = 1; c <= 36; c++) {
                                if ("even" == k && this.parent.vod(c)) {
                                    m = this.vjc(c.toString());
                                    m.win += a.value + e
                                } else {
                                    if ("odd" == k && !this.parent.vod(c)) {
                                        m = this.vjc(c.toString());
                                        m.win += a.value + e
                                    } else {
                                        if ("black" == k && !this.parent.smf(c)) {
                                            m = this.vjc(c.toString());
                                            m.win += a.value + e
                                        } else {
                                            if ("red" == k && this.parent.smf(c)) {
                                                m = this.vjc(c.toString());
                                                m.win += a.value + e
                                            } else {
                                                if ("1-18" == k && (c >= 1 && c <= 18)) {
                                                    m = this.vjc(c.toString());
                                                    m.win += a.value + e
                                                } else {
                                                    if ("19-36" == k && (c >= 19 && c <= 36)) {
                                                        m = this.vjc(c.toString());
                                                        m.win += a.value + e
                                                    } else {
                                                        if ("1-12" == k && (c >= 1 && c <= 12)) {
                                                            m = this.vjc(c.toString());
                                                            m.win += a.value + a.value * this.parent.hmh.wsp
                                                        } else {
                                                            if ("13-24" == k && (c >= 13 && c <= 24)) {
                                                                m = this.vjc(c.toString());
                                                                m.win += a.value + a.value * this.parent.hmh.wsp
                                                            } else {
                                                                if ("25-36" == k && (c >= 25 && c <= 36)) {
                                                                    m = this.vjc(c.toString());
                                                                    m.win += a.value + a.value * this.parent.hmh.wsp
                                                                } else {
                                                                    if ("1/12" == k) {
                                                                        var b = Math.floor(c / 3);
                                                                        if ((c - b * 3) == 1) {
                                                                            m = this.vjc(c.toString());
                                                                            m.win += a.value + a.value * this.parent.hmh.wsp
                                                                        }
                                                                    } else {
                                                                        if ("2/12" == k) {
                                                                            var b = Math.floor(c / 3);
                                                                            if ((c - b * 3) == 2) {
                                                                                m = this.vjc(c.toString());
                                                                                m.win += a.value + a.value * this.parent.hmh.wsp
                                                                            }
                                                                        } else {
                                                                            if ("3/12" == k) {
                                                                                var b = Math.floor(c / 3);
                                                                                if ((c - b * 3) == 0) {
                                                                                    m = this.vjc(c.toString());
                                                                                    m.win += a.value + a.value * this.parent.hmh.wsp
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.vjc = function(b) {
        for (var c = 0, a = this.ojo.length; c < a; c++) {
            var d = this.ojo[c];
            if (d.frt == b) {
                return d
            }
        }
        return null
    };
    this.hoe = function(c) {
        this.wyo = c;
        if (c === false) {
            this.lop = null
        }
        for (var b = 0, a = this.hda.length; b < a; b++) {
            this.hda[b].hoe(c)
        }
    };
    this.rjo = function() {
        return this.wyo
    };
    this.grg = function(c) {
        this.lop = null;
        this.klf = c;
        if (c >= 0 && c <= 37) {
            for (var b = 0, a = this.ojo.length; b < a; b++) {
                if (this.ojo[b].frt === c.toString()) {
                    this.lop = this.ojo[b];
                    return
                }
            }
        }
    };
    this.zsb = function() {};
    this.tto = function() {};
    this.bhx = function() {
        if (this.xec < 0) {
            this.sop = 2;
            this.ybl = false;
            this.xec = setInterval(this.mgy, this.mhb)
        }
    };
    this.kph = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = -1;
        this.ybl = false;
        this.eth()
    };
    this.mvn = function() {
        if (this.xec < 0) {
            for (var b = 0, a = this.ojo.length; b < a; b++) {
                rqj = this.ojo[b];
                if (rqj instanceof ran) {
                    rqj.luo = (rqj.value > 0 && this.parent.ufy(rqj.frt, this.klf))
                }
            }
            this.sop = 0;
            this.ybl = false;
            this.xec = setInterval(this.mgy, this.mhb)
        }
    };
    this.pjl = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = 1;
        this.parent.dul.ikn("remove");
        this.eth()
    };
    this.czu = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = -1;
        for (var b = 0, a = this.ojo.length; b < a; b++) {
            rqj = this.ojo[b];
            if (rqj instanceof ran) {
                rqj.luo = false
            }
        }
    };
    this.stop = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = -1
    };
    this.mgy = function() {};
    this.fwn = function(b) {
        if (b != null) {
            this.rjt = [];
            for (var c = 0, a = b.length; c < a; c++) {
                this.rjt.push(b[c])
            }
        } else {
            this.rjt = null
        }
    };
    this.buv = function(k, g) {
        var b = k - this.x,
            a = g - this.y,
            d = this.parent.tzi[this.parent.kcw];
        this.lop = null;
        if (d.rjo() === true && b > 0 && b < this.width && a > 0 && a < this.height) {
            for (var e = 0, f = this.ojo.length; e < f; e++) {
                var j = this.ojo[e];
                if (j.clc(b, a)) {
                    if (this.wyo === true) {
                        if (d instanceof hvo) {
                            if (j instanceof ran) {
                                if (j.value > 0) {
                                    this.parent.ymu(j);
                                    this.parent.jlg()
                                }
                            }
                        } else {
                            if (j instanceof ran) {
                                if (j.value > 0) {
                                    this.lop = j;
                                    this.rtd = j;
                                    this.gsh = setTimeout(this.dgf, this.sul)
                                } else {
                                    this.parent.ayr.value = d.value;
                                    this.parent.ayr.vbv = d.vbv;
                                    this.parent.ayr.yue(k, g);
                                    this.parent.ayr.xza(true);
                                    this.lop = j;
                                    this.parent.jsg();
                                    this.parent.jlg()
                                }
                            } else {
                                this.parent.ayr.value = d.value;
                                this.parent.ayr.vbv = d.vbv;
                                this.parent.ayr.yue(k, g);
                                this.parent.ayr.xza(true);
                                this.lop = j;
                                this.parent.jsg();
                                this.parent.jlg()
                            }
                        }
                    }
                    return true
                }
            }
        }
        for (var e = 0, f = this.hda.length; e < f; e++) {
            var c = this.hda[e];
            if (b >= c.x && b <= c.x + c.width && a >= c.y && a <= c.y + c.height && c.izz() === true && c.rjo() === true) {
                c.pzi(true, false, false);
                c.wuk();
                return true
            }
        }
        return false
    };
    this.gmf = function(b, j) {
        var g = b - this.x,
            f = j - this.y,
            c = this.parent.ayr;
        if (this.vfq.hah() == true) {
            this.vfq.pzi(false, true);
            this.tto()
        }
        if (g > 0 && g < this.width && f > 0 && f < this.height) {
            if (c && c.izz() === true && c.rjo() === true) {
                for (var d = 0, a = this.ojo.length; d < a; d++) {
                    var e = this.ojo[d];
                    if (e.clc(g, f)) {
                        if (this.wyo === true) {
                            if (e instanceof ran) {
                                if (this.lop) {}
                                this.parent.tps(c, e)
                            } else {
                                this.parent.mjt(e.xvv, c.value)
                            }
                            this.lop = null
                        }
                        return true
                    }
                }
            } else {
                if (this.rtd) {
                    for (var d = 0, a = this.ojo.length; d < a; d++) {
                        var e = this.ojo[d];
                        if (e.clc(g, f)) {
                            if (this.wyo === true) {
                                if (e instanceof ran) {
                                    if (e.frt == this.rtd.frt) {
                                        this.parent.tps(this.parent.tzi[this.parent.kcw], this.rtd)
                                    }
                                }
                            }
                        }
                    }
                    clearTimeout(this.gsh);
                    this.rtd = null
                }
                this.lop = null;
                return true
            }
        } else {
            this.lop = null
        }
        return false
    };
    this.rsv = function(j, e) {
        var b = j - this.x,
            a = e - this.y,
            k = false,
            f = this.lop;
        if (b > 0 && b < this.width && a > 0 && a < this.height) {
            if (this.wyo === true) {
                if ((b < this.vfq.x || b > this.vfq.x + this.vfq.width || a < this.vfq.y || a > this.vfq.y + this.vfq.height) && this.vfq.hah()) {
                    this.vfq.pzi(false, false);
                    this.tto()
                }
                this.lop = null;
                for (var c = 0, d = this.ojo.length; c < d && !k; c++) {
                    var g = this.ojo[c];
                    if (g.clc(b, a)) {
                        k = true;
                        this.lop = g;
                        return (this.lop != f)
                    }
                }
            }
            return (this.lop != f)
        } else {
            if (this.wyo === true) {
                this.lop = null
            }
            return (this.lop != f)
        }
    };
    this.dgf = function() {};
    this.eth = function() {
        if (this.parent.hhv.psg("autop", "#izz") === true) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        } else {
            this.jlg()
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var c = this.context2D,
            b = (this.lop != null && ((this.sop == 0 && this.ybl) || this.sop < 0));
        c.save();
        c.clearRect(0, 0, this.width, this.height);
        if (this.vbv) {
            c.drawImage(this.vbv, 0, 0, this.width, this.height)
        }
        if (b == true) {
            this.lop.rsj(c);
            c.clip();
            if (this.kbi) {
                c.drawImage(this.kbi, 0, 0, this.width, this.height)
            }
        }
        c.restore();
        this.akg(c);
        this.sji(c);
        if (this.klf >= 0 && this.lop != null) {
            if (this.amk) {
                c.drawImage(this.amk, this.lop.aic.x - this.amk.width / 2, (this.klf === 0) ? this.lop.aic.y - this.amk.height / 2 : (this.lop.aic.y + this.lop.max.y) / 2 - this.amk.height)
            }
        }
        for (var d = 0, a = this.hda.length; d < a; d++) {
            this.hda[d].jlg()
        }
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    };
    this.sji = function(c) {
        var f = null,
            d = null,
            b = this.xvh,
            g = "";
        c.save();
        for (var e = 0, a = this.ojo.length; e < a; e++) {
            f = this.ojo[e];
            if (f instanceof ran) {
                if (f.value > 0 || (this.parent.xsh && f.value != 0)) {
                    if (this.sop < 0 || (this.sop == 0 && ((this.ybl && f.luo) || !f.luo)) || (this.sop == 1 && f.luo) || (this.sop == 2 && ((this.ybl && (this.parent.zta() < this.parent.xjv || f.value < f.jrt)) || f.value >= f.jrt))) {
                        if (this.yog === true) {
                            c.globalAlpha = 0.5
                        }
                        d = this.parent.ebs(f.value).vbv;
                        c.drawImage(d, f.eso.x + (f.eso.width - this.nsv) / 2, f.eso.y + (f.eso.height - this.mjc) / 2, this.nsv, this.mjc);
                        tlg.tpm.der(c, this.parent.hut(f.value), this.wsj, f.eso.x + (f.eso.width - this.nsv) / 2 + this.ngc, f.eso.y + (f.eso.height - this.mjc) / 2, this.nsv - 2 * this.ngc, this.mjc, this.syy, this.hql, this.neu);
                        c.globalAlpha = 1
                    }
                }
                if (f.win > 0 && this.yog === true) {
                    if (f.win > this.parent.zta()) {
                        b = this.ufd;
                        g = "bold"
                    } else {
                        b = this.xvh;
                        g = ""
                    }
                    qqi = f.aic.x - this.vpk / 2;
                    ctk = f.max.y - this.ahf - 1;
                    tlg.tpm.svk(c, qqi, ctk, this.vpk, this.ahf, this.eml, this.lmm, this.tvx, this.bkd, this.nhp, 1);
                    tlg.tpm.der(c, this.parent.hut(f.win), b, qqi + this.nhp, ctk + this.nhp, this.vpk - 2 * this.nhp, this.ahf, this.lbm, this.klt, g)
                }
            }
        }
        c.restore()
    };
    this.akg = function(b) {
        if (this.rjt == null) {
            return
        }
        b.save();
        for (var e = 0, a = this.rjt.length; e < a; e++) {
            for (var d = 0, c = this.ojo.length; d < c; d++) {
                if (this.ojo[d].frt === e.toString()) {
                    tlg.tpm.fwp(b, this.rjt[e], this.kxk, this.ojo[d].eso.x, this.ojo[d].eso.y + this.ojo[d].eso.height - this.cfo - this.txc, this.ojo[d].eso.width - this.txc, this.cfo, this.kiw, this.cfo, this.uxg, this.txc)
                }
            }
        }
        b.restore()
    }
}
khq.prototype = new ezd;

function cqa() {
    var a = this;
    this.vbv = null;
    this.kbi = null;
    this.amk = null;
    this.wyo = true;
    this.ojo = [];
    this.lop = null;
    this.klf = -1;
    this.sop = -1;
    this.ybl = false;
    this.gsh = 0;
    this.xec = -1;
    this.sul = 300;
    this.mhb = 400;
    this.rtd = null;
    this.sgo = null;
    this.wsy = null;
    this.nsv = 0;
    this.mjc = 0;
    this.hql = 0;
    this.ngc = 0;
    this.syy = "helvetica";
    this.neu = "";
    this.wsj = "black";
    this.vpk = 0;
    this.ahf = 0;
    this.klt = 10;
    this.nhp = 1;
    this.eml = 3;
    this.lbm = "sans-serif";
    this.nzb = "";
    this.xvh = "white";
    this.lmm = "black";
    this.bkd = "yellow";
    this.tvx = 1;
    this.wem = function(b, d, c) {
        cqa.prototype.wem.call(this, b, d, c);
        this.sgo = document.createElement("canvas");
        this.sgo.width = Math.round(this.width);
        this.sgo.height = Math.round(this.height);
        this.wsy = this.sgo.getContext("2d")
    };
    this.ota = function(b) {
        cqa.prototype.ota.call(this, b);
        this.sgo.width = Math.round(this.width);
        this.sgo.height = Math.round(this.height)
    };
    this.ler = function(c) {
        try {
            this.wsj = c.ciq.gmj;
            this.syy = c.ciq.font;
            this.neu = c.ciq.stb;
            this.lbm = c.win.font;
            this.nzb = c.win.stb;
            this.xvh = c.win.gmj;
            this.lmm = c.win.backgroundColor;
            this.bkd = c.win.borderColor;
            this.tvx = c.win.wks;
            for (var b = 0; b < 37; b++) {
                this.ojo[b].color = c.gqw
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.qgh = function(b) {
        try {
            this.nsv = b.ciq.eso.width;
            this.mjc = b.ciq.eso.height;
            this.hql = b.ciq.fontSize;
            this.ngc = b.ciq.ogq;
            this.vpk = b.win.width;
            this.ahf = b.win.height;
            this.klt = b.win.fontSize;
            this.nhp = b.win.nlj;
            this.eml = b.win.kui;
            this.xdh(b);
            this.smp()
        } catch (c) {
            console.error(c)
        }
    };
    this.gpx = function() {
        var c = null;
        this.ojo = [];
        for (var b = 0; b < 37; b++) {
            c = new ran();
            c.wem(b.toString(), null, null, this.parent.sqw, this.parent.eia);
            this.ojo.push(c)
        }
        c = new gao();
        c.wem("Big Serie", null, null, "0,2,3|0,2,3|4,7|12,15|18,21|19,22|25.29|32,35");
        this.ojo.push(c);
        c = new gao();
        c.wem("Serie 5/8", null, null, "5,8|10,11|13,16|23,24|27,30|33,36");
        this.ojo.push(c);
        c = new gao();
        c.wem("Orpheline Plein", null, null, "1|6|9|14|17|20|31|34");
        this.ojo.push(c);
        c = new gao();
        c.wem("Orpheline Cheval", null, null, "1|6,9|14,17|17,20|31,34");
        this.ojo.push(c);
        c = new gao();
        c.wem("Zero Game", null, null, "0,3|12,15|26|32,35");
        this.ojo.push(c)
    };
    this.xdh = function(d) {
        var c = 0,
            b = [];
        for (c = 0; c < 37; c++) {
            this.ojo[c].zmv(d.ggh[c].rdl, [d.ggh[c].rdl], d.ggh[c].ded, d.ggh[c].wwa)
        }
        b.push(d.ggh[0].rdl);
        b.push(d.ggh[2].rdl);
        b.push(d.ggh[3].rdl);
        b.push(d.ggh[4].rdl);
        b.push(d.ggh[7].rdl);
        b.push(d.ggh[12].rdl);
        b.push(d.ggh[15].rdl);
        b.push(d.ggh[18].rdl);
        b.push(d.ggh[19].rdl);
        b.push(d.ggh[21].rdl);
        b.push(d.ggh[22].rdl);
        b.push(d.ggh[25].rdl);
        b.push(d.ggh[26].rdl);
        b.push(d.ggh[28].rdl);
        b.push(d.ggh[29].rdl);
        b.push(d.ggh[32].rdl);
        b.push(d.ggh[35].rdl);
        b.push(d.xyn[0].rdl);
        this.ojo[c++].zmv(d.xyn[0].rdl, b);
        b = [];
        b.push(d.ggh[5].rdl);
        b.push(d.ggh[8].rdl);
        b.push(d.ggh[10].rdl);
        b.push(d.ggh[11].rdl);
        b.push(d.ggh[13].rdl);
        b.push(d.ggh[16].rdl);
        b.push(d.ggh[23].rdl);
        b.push(d.ggh[24].rdl);
        b.push(d.ggh[27].rdl);
        b.push(d.ggh[30].rdl);
        b.push(d.ggh[33].rdl);
        b.push(d.ggh[36].rdl);
        b.push(d.xyn[1].rdl);
        this.ojo[c++].zmv(d.xyn[1].rdl, b);
        b = [];
        b.push(d.ggh[1].rdl);
        b.push(d.ggh[6].rdl);
        b.push(d.ggh[9].rdl);
        b.push(d.ggh[14].rdl);
        b.push(d.ggh[17].rdl);
        b.push(d.ggh[20].rdl);
        b.push(d.ggh[31].rdl);
        b.push(d.ggh[34].rdl);
        b.push(d.xyn[2].rdl);
        this.ojo[c++].zmv(d.xyn[2].rdl, b);
        b = [];
        b.push(d.ggh[1].rdl);
        b.push(d.ggh[6].rdl);
        b.push(d.ggh[9].rdl);
        b.push(d.ggh[14].rdl);
        b.push(d.ggh[17].rdl);
        b.push(d.ggh[20].rdl);
        b.push(d.ggh[31].rdl);
        b.push(d.ggh[34].rdl);
        b.push(d.xyn[3].rdl);
        this.ojo[c++].zmv(d.xyn[3].rdl, b);
        b = [];
        b.push(d.ggh[0].rdl);
        b.push(d.ggh[3].rdl);
        b.push(d.ggh[12].rdl);
        b.push(d.ggh[15].rdl);
        b.push(d.ggh[26].rdl);
        b.push(d.ggh[32].rdl);
        b.push(d.ggh[35].rdl);
        b.push(d.xyn[4].rdl);
        this.ojo[c++].zmv(d.xyn[4].rdl, b)
    };
    this.xig = function(c) {
        var g = false;
        for (var f = 0, b = c.length; f < b; f++) {
            g = false;
            for (var e = 0, d = this.ojo.length; e < d && !g; e++) {
                if (this.ojo[e].frt == c[f].frt) {
                    this.ojo[e].value = c[f].value;
                    g = true
                }
            }
        }
    };
    this.uia = function() {
        for (var c = 0, b = this.ojo.length; c < b; c++) {
            if (this.ojo[c] instanceof ran) {
                this.ojo[c].jrt = this.parent.dac(this.ojo[c].frt);
                this.ojo[c].jjz = this.parent.twp(this.ojo[c].frt)
            }
        }
    };
    this.zlq = function(c) {
        var e = 0,
            b = c.length,
            d = this.ojo.length;
        for (e = 0; e < d; e++) {
            this.ojo[e].win = 0
        }
        for (var e = 0; e < b; e++) {
            this.dgi(c[e])
        }
    };
    this.dgi = function(b) {
        if (b != null) {
            var l = b.frt,
                f = b.value,
                j = 0,
                o = null;
            if (l.length <= 2) {
                o = this.vjc(b.frt);
                o.win += b.value + b.value * this.parent.hmh.lzu
            } else {
                if (l.indexOf(",") > 0) {
                    var m = l.split(","),
                        g = m.length;
                    if (g == 2) {
                        f = b.value * this.parent.hmh.split
                    } else {
                        f = b.value * this.parent.hmh.fns
                    }
                    for (var d = 0; d < m.length; d++) {
                        var c = m[d];
                        o = this.vjc(c);
                        o.win += b.value + f
                    }
                } else {
                    if ((j = l.indexOf("-")) > 0 && "1-18" != l && "19-36" != l && "1-12" != l && "13-24" != l && "25-36" != l) {
                        var k = parseInt(l.substring(0, j)),
                            e = parseInt(l.substring(j + 1));
                        if ((e - k) <= 2) {
                            f = b.value * this.parent.hmh.fns
                        } else {
                            f = b.value * this.parent.hmh.yhd
                        }
                        for (var d = k; d <= e; d++) {
                            o = this.vjc(d.toString());
                            o.win += b.value + f
                        }
                    } else {
                        if ((j = l.indexOf(".")) > 0) {
                            var k = parseInt(l.substring(0, j)),
                                e = parseInt(l.substring(j + 1));
                            f = b.value * this.parent.hmh.ifp;
                            o = this.vjc(k.toString());
                            o.win += b.value + f;
                            o = this.vjc((k + 1).toString());
                            o.win += b.value + f;
                            o = this.vjc((e - 1).toString());
                            o.win += b.value + f;
                            o = this.vjc(e.toString());
                            o.win += b.value + f
                        } else {
                            for (var d = 1; d <= 36; d++) {
                                if ("even" == l && this.parent.vod(d)) {
                                    o = this.vjc(d.toString());
                                    o.win += b.value + f
                                } else {
                                    if ("odd" == l && !this.parent.vod(d)) {
                                        o = this.vjc(d.toString());
                                        o.win += b.value + f
                                    } else {
                                        if ("black" == l && !this.parent.smf(d)) {
                                            o = this.vjc(d.toString());
                                            o.win += b.value + f
                                        } else {
                                            if ("red" == l && this.parent.smf(d)) {
                                                o = this.vjc(d.toString());
                                                o.win += b.value + f
                                            } else {
                                                if ("1-18" == l && (d >= 1 && d <= 18)) {
                                                    o = this.vjc(d.toString());
                                                    o.win += b.value + f
                                                } else {
                                                    if ("19-36" == l && (d >= 19 && d <= 36)) {
                                                        o = this.vjc(d.toString());
                                                        o.win += b.value + f
                                                    } else {
                                                        if ("1-12" == l && (d >= 1 && d <= 12)) {
                                                            o = this.vjc(d.toString());
                                                            o.win += b.value + b.value * this.parent.hmh.wsp
                                                        } else {
                                                            if ("13-24" == l && (d >= 13 && d <= 24)) {
                                                                o = this.vjc(d.toString());
                                                                o.win += b.value + b.value * this.parent.hmh.wsp
                                                            } else {
                                                                if ("25-36" == l && (d >= 25 && d <= 36)) {
                                                                    o = this.vjc(d.toString());
                                                                    o.win += b.value + b.value * this.parent.hmh.wsp
                                                                } else {
                                                                    if ("1/12" == l) {
                                                                        var c = Math.floor(d / 3);
                                                                        if ((d - c * 3) == 1) {
                                                                            o = this.vjc(d.toString());
                                                                            o.win += b.value + b.value * this.parent.hmh.wsp
                                                                        }
                                                                    } else {
                                                                        if ("2/12" == l) {
                                                                            var c = Math.floor(d / 3);
                                                                            if ((d - c * 3) == 2) {
                                                                                o = this.vjc(d.toString());
                                                                                o.win += b.value + b.value * this.parent.hmh.wsp
                                                                            }
                                                                        } else {
                                                                            if ("3/12" == l) {
                                                                                var c = Math.floor(d / 3);
                                                                                if ((d - c * 3) == 0) {
                                                                                    o = this.vjc(d.toString());
                                                                                    o.win += b.value + b.value * this.parent.hmh.wsp
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.smp = function() {
        var e = this.parent.hhv.djj("rstat"),
            c = 0,
            k = null,
            g = 0,
            j = 0,
            d = this.wsy;
        d.clearRect(0, 0, this.width, this.height);
        if (e && e.bsh().length > 0) {
            c = e.bsh()[0].h;
            for (var f = 0, b = this.ojo.length; f < b; f++) {
                k = this.ojo[f];
                g = parseInt(k.frt);
                j = e.xyb()[g];
                if (j > 0) {
                    d.save();
                    d.globalAlpha = (0.5 * j) / c;
                    d.fillStyle = k.color;
                    k.kao(d);
                    d.clip();
                    d.fill();
                    d.restore()
                }
            }
        }
    };
    this.vjc = function(c) {
        for (var d = 0, b = this.ojo.length; d < b; d++) {
            var e = this.ojo[d];
            if (e.frt == c) {
                return e
            }
        }
        return null
    };
    this.hoe = function(b) {
        this.wyo = b;
        if (b === false) {
            this.lop = null
        }
    };
    this.rjo = function() {
        return this.wyo
    };
    this.grg = function(d) {
        this.lop = null;
        this.klf = d;
        if (d >= 0) {
            for (var c = 0, b = this.ojo.length; c < b; c++) {
                if (this.ojo[c].frt === d.toString()) {
                    this.lop = this.ojo[c];
                    return
                }
            }
        }
    };
    this.bhx = function() {
        if (this.xec < 0) {
            this.sop = 2;
            this.ybl = false;
            this.xec = setInterval(this.mgy, this.mhb)
        }
    };
    this.kph = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = -1;
        this.ybl = false;
        this.parent.jlg()
    };
    this.mvn = function() {
        if (this.xec < 0) {
            for (var c = 0, b = this.ojo.length; c < b; c++) {
                rqj = this.ojo[c];
                if (rqj instanceof ran) {
                    rqj.luo = (rqj.win > 0 && this.parent.ufy(rqj.frt, this.klf))
                }
            }
            this.sop = 0;
            this.ybl = false;
            this.xec = setInterval(this.mgy, this.mhb)
        }
    };
    this.pjl = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = 1;
        this.parent.jlg()
    };
    this.czu = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = -1
    };
    this.stop = function() {
        clearInterval(this.xec);
        this.xec = -1;
        this.sop = -1
    };
    this.mgy = function() {
        a.ybl = !a.ybl;
        a.eth()
    };
    this.buv = function(c, k) {
        var j = c - this.x,
            g = k - this.y,
            d = this.parent.tzi[this.parent.kcw];
        this.lop = null;
        if (d.rjo() === true && j > 0 && j < this.width && g > 0 && g < this.height) {
            for (var e = 0, b = this.ojo.length; e < b; e++) {
                var f = this.ojo[e];
                if (f.clc(j, g, this.context2D)) {
                    if (this.wyo === true) {
                        if (d instanceof hvo) {
                            if (f instanceof ran) {
                                if (f.value > 0) {
                                    this.parent.ymu(f);
                                    this.parent.jlg()
                                }
                            }
                        } else {
                            if (f instanceof ran) {
                                if (f.value > 0) {
                                    this.lop = f;
                                    this.rtd = f;
                                    this.gsh = setTimeout(this.dgf, this.sul)
                                } else {
                                    this.parent.ayr.value = d.value;
                                    this.parent.ayr.vbv = d.vbv;
                                    this.parent.ayr.yue(c, k);
                                    this.parent.ayr.xza(true);
                                    this.lop = f;
                                    this.parent.jsg();
                                    this.parent.jlg()
                                }
                            } else {
                                this.parent.ayr.value = d.value;
                                this.parent.ayr.vbv = d.vbv;
                                this.parent.ayr.yue(c, k);
                                this.parent.ayr.xza(true);
                                this.lop = f;
                                this.parent.jsg();
                                this.parent.jlg()
                            }
                        }
                    }
                    return true
                }
            }
        }
        return false
    };
    this.gmf = function(c, k) {
        var j = c - this.x,
            g = k - this.y,
            d = this.parent.ayr;
        if (j > 0 && j < this.width && g > 0 && g < this.height) {
            if (d && d.izz() === true && d.rjo() === true) {
                for (var e = 0, b = this.ojo.length; e < b; e++) {
                    var f = this.ojo[e];
                    if (f.clc(j, g, this.context2D)) {
                        if (this.wyo === true) {
                            if (f instanceof ran) {
                                if (this.lop) {}
                                this.parent.tps(d, f)
                            } else {
                                this.parent.mjt(f.xvv, d.value)
                            }
                            this.lop = null
                        }
                        return true
                    }
                }
            } else {
                if (this.rtd) {
                    for (var e = 0, b = this.ojo.length; e < b; e++) {
                        var f = this.ojo[e];
                        if (f.clc(j, g, this.context2D)) {
                            if (this.wyo === true) {
                                if (f instanceof ran) {
                                    if (f.frt == this.rtd.frt) {
                                        this.parent.tps(this.parent.tzi[this.parent.kcw], this.rtd)
                                    }
                                }
                            }
                        }
                    }
                    clearTimeout(this.gsh);
                    this.rtd = null
                }
                this.lop = null;
                return true
            }
        } else {
            this.lop = null
        }
        return false
    };
    this.rsv = function(k, f) {
        var c = k - this.x,
            b = f - this.y,
            l = false,
            g = this.lop;
        if (c > 0 && c < this.width && b > 0 && b < this.height) {
            if (this.wyo === true) {
                this.lop = null;
                for (var d = 0, e = this.ojo.length; d < e && !l; d++) {
                    var j = this.ojo[d];
                    if (j.clc(c, b, this.context2D)) {
                        l = true;
                        this.lop = j;
                        return (this.lop != g)
                    }
                }
            }
            return (this.lop != g)
        } else {
            if (this.wyo === true) {
                this.lop = null
            }
            return (this.lop != g)
        }
    };
    this.dgf = function() {
        a.parent.ayr.value = a.rtd.value;
        a.parent.ayr.vbv = a.parent.ebs(a.rtd.value).vbv;
        a.parent.ayr.yue(a.parent.bpu, a.parent.tgy);
        a.parent.ayr.xza(true);
        a.parent.ymu(a.rtd)
    };
    this.eth = function() {
        if (this.parent.hhv.psg("autop", "#izz") === true) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        } else {
            this.jlg()
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var c = this.context2D,
            b = (this.lop != null && ((this.sop == 0 && this.ybl) || this.sop < 0));
        c.save();
        c.clearRect(0, 0, this.width, this.height);
        if (this.vbv) {
            c.drawImage(this.vbv, 0, 0, this.width, this.height)
        }
        if (b == true) {
            this.lop.rsj(c);
            c.clip();
            if (this.kbi) {
                c.drawImage(this.kbi, 0, 0, this.width, this.height)
            }
        }
        c.restore();
        this.akg(c);
        this.sji(c);
        if (this.klf >= 0 && this.lop != null) {
            if (this.amk) {
                c.drawImage(this.amk, this.lop.wwa.x, this.lop.wwa.y, this.lop.wwa.width, this.lop.wwa.height)
            }
        }
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    };
    this.sji = function(c) {
        var g = null,
            d = null,
            j = 0,
            f = 0;
        c.save();
        for (var e = 0, b = this.ojo.length; e < b; e++) {
            g = this.ojo[e];
            if (g instanceof ran) {
                if (this.sop < 1 || (this.sop == 1 && g.luo)) {
                    if (g.value > 0) {
                        d = this.parent.ebs(g.value).vbv;
                        c.drawImage(d, g.aic.x - this.nsv / 2, g.aic.y - this.mjc / 2, this.nsv, this.mjc);
                        tlg.tpm.der(c, this.parent.hut(g.value), this.wsj, g.aic.x - this.nsv / 2 + this.ngc, g.aic.y - this.mjc / 2, this.nsv - 2 * this.ngc, this.mjc, this.syy, this.hql, this.neu)
                    }
                    if (g.win > 0) {
                        j = g.aic.x - this.vpk / 2;
                        f = g.max.y - this.ahf;
                        tlg.tpm.svk(c, j, f, this.vpk, this.ahf, this.eml, this.lmm, this.tvx, this.bkd, this.nhp, 1);
                        tlg.tpm.der(c, this.parent.hut(g.win), this.xvh, j + this.nhp, f + this.nhp, this.vpk - 2 * this.nhp, this.ahf, this.lbm, this.klt, this.nzb)
                    }
                } else {
                    if (this.sop == 2) {
                        if (g.value > 0 && ((this.ybl && ((this.parent.zta() < this.parent.xjv || g.value < g.jrt))) || g.value >= g.jrt)) {
                            d = this.parent.ebs(g.value).vbv;
                            c.drawImage(d, g.aic.x - this.nsv / 2, g.aic.y - this.mjc / 2, this.nsv, this.mjc);
                            tlg.tpm.der(c, this.parent.hut(g.value), this.wsj, g.aic.x - this.nsv / 2 + this.ngc, g.aic.y - this.mjc / 2, this.nsv - 2 * this.ngc, this.mjc, this.syy, this.hql, this.neu)
                        }
                        if (g.win > 0) {
                            j = g.aic.x - this.vpk / 2;
                            f = g.max.y - this.ahf;
                            tlg.tpm.svk(c, j, f, this.vpk, this.ahf, this.eml, this.lmm, this.tvx, this.bkd, this.nhp, 1);
                            tlg.tpm.der(c, this.parent.hut(g.win), this.xvh, j + this.nhp, f + this.nhp, this.vpk - 2 * this.nhp, this.ahf, this.lbm, this.klt, this.nzb)
                        }
                    }
                }
            }
        }
        c.restore()
    };
    this.akg = function(b) {
        b.drawImage(this.sgo, 0, 0)
    }
}
cqa.prototype = new ezd;

function mvc() {
    var a = this;
    this.rrw = null;
    this.uaf = null;
    this.khu = null;
    this.fak = null;
    this.btm = null;
    this.uhr = null;
    this.aem = false;
    this.yae = false;
    this.mvy = false;
    this.hwp = false;
    this.cev = false;
    this.xsm = null;
    this.vip = null;
    this.jpy = null;
    this.rme = null;
    this.vin = null;
    this.btj = null;
    this.shz = 0;
    this.aka = 78;
    this.cpa = 76;
    this.yaf = 0;
    this.gij = false;
    this.rsa = 270;
    this.yjl = 0;
    this.guj = 4;
    this.lhe = 0;
    this.dwd = 0;
    this.leu = 3;
    this.rsy = 0;
    this.wbq = 0;
    this.bly = 0;
    this.ypp = 155;
    this.baj = 87;
    this.blo = 112.5;
    this.yya = 17;
    this.wiq = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
    this.mdl = [];
    this.kbt = -1;
    this.ver = 360 / this.wiq.length;
    this.ypw = 0;
    this.zxt = 0;
    this.vjj = 0;
    this.qcc = 0;
    this.lkl = -1;
    this.wem = function(d, g, e) {
        mvc.prototype.wem.call(this, d, g, e);
        for (var c = 0, b = this.wiq.length; c < b; c++) {
            var f = this.yyk(c);
            if (c == 2) {
                f += 3
            } else {
                if (c == 4) {
                    f += 2
                } else {
                    if (c == 6) {
                        f += 2
                    } else {
                        if (c == 11) {
                            f += 2
                        } else {
                            if (c == 13 || c == 25 || c == 27 || c == 32 || c == 34 || c == 36) {
                                f += 2
                            } else {
                                if (c == 15 || c == 17 || c == 19) {
                                    f += 3
                                } else {
                                    if (c == 21 || c == 23 || c == 30) {
                                        f += 1
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.mdl.push(f)
        }
    };
    this.ota = function(b) {
        mvc.prototype.ota.call(this, b);
        this.xsm.width = Math.round(this.width);
        this.xsm.height = Math.round(this.height);
        this.jpy.width = Math.round(this.btm.width);
        this.jpy.height = Math.round(this.btm.height);
        this.vin.width = Math.round(this.width);
        this.vin.height = Math.round(this.height);
        this.skg()
    };
    this.qgh = function(b) {
        try {
            this.ypp = b.pnd;
            this.baj = b.guo;
            this.blo = b.dws;
            this.yya = b.uxz;
            this.qjn = b.iep;
            this.qut = b.zpk;
            this.wcy = b.tdk
        } catch (c) {
            console.error(c)
        }
    };
    this.wcx = function() {
        this.xsm = document.createElement("canvas");
        this.xsm.width = Math.round(this.width);
        this.xsm.height = Math.round(this.height);
        this.vip = this.xsm.getContext("2d");
        this.vip.imageSmoothingEnabled = false;
        this.vip.webkitImageSmoothingEnabled = false;
        this.jpy = document.createElement("canvas");
        this.jpy.width = Math.round(this.btm.width);
        this.jpy.height = Math.round(this.btm.height);
        this.rme = this.jpy.getContext("2d");
        this.rme.imageSmoothingEnabled = false;
        this.rme.webkitImageSmoothingEnabled = false;
        this.vin = document.createElement("canvas");
        this.vin.width = Math.round(this.width);
        this.vin.height = Math.round(this.height);
        this.btj = this.vin.getContext("2d");
        this.btj.imageSmoothingEnabled = false;
        this.btj.webkitImageSmoothingEnabled = false;
        this.skg()
    };
    this.skg = function() {
        this.btj.beginPath();
        this.btj.arc(this.ypp, this.ypp, this.ypp + 10, 0, 2 * Math.PI, false);
        this.btj.clip();
        this.btj.drawImage(this.rrw, Math.round((this.width - this.rrw.width) / 2), Math.round((this.height - this.rrw.height) / 2));
        this.rme.drawImage(this.btm, 0, 0);
        this.vip.drawImage(this.vin, 0, 0);
        this.vip.drawImage(this.jpy, this.ypp - this.blo, this.ypp - this.blo);
        this.vip.drawImage(this.khu, this.wcy, this.wcy)
    };
    this.nct = function(b) {
        if (this.yae === true) {
            this.kbt = b;
            this.zxt = this.mdl[this.kbt];
            this.zxt -= 7;
            if (this.zxt < 0) {
                this.zxt = 360 + this.zxt
            }
            if (this.wbq > 2) {
                this.ypw = this.zxt + 360 * (this.rsy + 1);
                this.vjj = 360 * (this.rsy)
            } else {
                this.ypw = this.zxt + 360 * 5;
                this.vjj = 360 * 4
            }
        } else {
            this.parent.qje()
        }
    };
    this.bld = function(c) {
        var b = 0;
        if (c == 2) {
            b += 3
        } else {
            if (c == 4) {
                b += 2
            } else {
                if (c == 6) {
                    b += 2
                } else {
                    if (c == 11) {
                        b += 2
                    } else {
                        if (c == 13 || c == 25 || c == 27 || c == 32 || c == 34 || c == 36) {
                            b += 2
                        } else {
                            if (c == 15 || c == 17 || c == 19) {
                                b += 3
                            } else {
                                if (c == 21 || c == 23 || c == 30) {
                                    b += 1
                                }
                            }
                        }
                    }
                }
            }
        }
        this.aem = true;
        this.lkl = c;
        this.zxt = this.mdl[this.lkl] - 95 - b;
        this.parent.qje()
    };
    this.zde = function() {
        a.start()
    };
    this.start = function() {
        onu(this.shz);
        this.yae = true;
        this.mvy = false;
        this.hwp = false;
        this.cev = false;
        this.aem = false;
        this.guj = 4;
        this.rsa = 270;
        this.yjl = 0;
        this.leu = 2;
        this.lhe = 0;
        this.dwd = 0;
        this.qcc = this.yya;
        this.rsy = 0;
        this.wbq = 0;
        this.lkl = -1;
        this.kbt = -1;
        this.zxt = -1;
        this.shz = upo(this.mgy)
    };
    this.stop = function() {
        this.yae = false;
        onu(a.shz);
        clearTimeout(a.shz)
    };
    this.unh = function() {
        return this.yae
    };
    this.mgy = function() {
        a.nhz()
    };
    this.nhz = function() {
        var f = this.czc(this.rsa),
            g = this.czc(this.lhe).toFixed(4),
            b = Math.round(this.ypp - this.qcc),
            d = Math.round(b * Math.cos(f)),
            c = Math.round(b * Math.sin(f)),
            e = 0;
        if (this.bly != 0 && (this.dwd - this.bly) >= 90 && this.mvy === false) {
            this.mvy = true;
            this.parent.qje()
        } else {
            if (this.bly != 0 && (this.dwd - this.bly) >= 180) {
                this.bly = 0
            }
        }
        if (!this.aem) {
            this.rsa += this.guj;
            this.yjl += this.guj
        }
        this.lhe += this.leu;
        this.dwd += this.leu;
        if (this.rsa > 360) {
            this.rsa = this.guj
        }
        if (this.lhe > 360) {
            this.lhe = this.leu
        }
        if (this.yjl > (360 * (this.rsy + 1))) {
            this.rsy += 1
        }
        this.wbq = Math.floor(this.dwd / 360);
        e = this.dwd - (360 * this.wbq);
        if (this.kbt != -1) {
            if ((this.yjl + e) >= (this.ypw - 6)) {
                if (!this.aem) {
                    this.zxt -= 90;
                    this.bly = this.dwd;
                    this.parent.dul.hku("ballonnumber")
                }
                this.aem = true;
                if (this.aem && this.dwd >= (this.vjj - 2)) {
                    this.rme.drawImage(this.btm, 0, 0);
                    this.zfh(this.context2D);
                    this.svu(this.context2D, b);
                    this.vip.clearRect(0, 0, this.width, this.height);
                    this.vip.drawImage(this.rml, 0, 0);
                    this.yae = false;
                    if (this.izz() && this.parent.clv()) {
                        if (this.alo && this.rml) {
                            this.alo.drawImage(this.rml, this.x, this.y)
                        }
                    }
                    if (this.uhr != null) {
                        this.uhr()
                    }
                    return
                }
            }
            if (this.yjl + e >= this.ypw - 720) {
                if (this.dwd >= this.vjj - 20) {
                    this.leu -= 0.02;
                    if (this.leu < 0.1) {
                        this.leu = 0.1
                    }
                } else {
                    if (this.dwd >= this.vjj - 40) {
                        this.leu -= 0.02;
                        if (this.leu < 0.5) {
                            this.leu = 0.5
                        }
                    } else {
                        if (this.dwd >= this.vjj - 90) {
                            this.leu -= 0.015;
                            if (this.leu < 0.5) {
                                this.leu = 0.5
                            }
                        } else {
                            if (this.yjl + e >= this.ypw - 90) {
                                this.leu -= 0.012;
                                if (this.leu < 0.5) {
                                    this.leu = 0.5
                                }
                            }
                        }
                    }
                }
                this.guj -= 0.01;
                if (this.yjl + e >= this.ypw - 60) {
                    this.guj -= 0.2
                } else {
                    if (this.yjl + e >= this.ypw - 120) {
                        this.guj -= 0.15
                    }
                }
                if (this.guj < 0.1) {
                    this.guj = 0.1
                }
            }
        }
        if (this.rsy >= 3 && this.rsy < 5) {
            this.qcc += 0.5;
            if (this.qcc > 50 && !this.hwp) {
                this.parent.dul.ikn("ballonnumber");
                this.hwp = true
            }
            if (this.qcc > 70) {
                this.qcc = 70
            }
        } else {
            if (this.yjl >= 160 && !this.cev) {
                this.parent.dul.ikn("ballrun");
                this.cev = true
            }
        }
        this.phq(g, b);
        this.zfh(this.context2D);
        if (!this.aem && this.rsy >= 1) {
            this.context2D.drawImage(this.uaf, this.ypp + 1 + d - this.uaf.width / 2, this.ypp + c - this.uaf.height / 2)
        }
        this.vip.drawImage(this.rml, 0, 0);
        if (this.izz() && this.parent.clv()) {
            if (this.alo && this.rml) {
                this.alo.drawImage(this.rml, this.x, this.y)
            }
        }
        this.shz = upo(this.mgy)
    };
    this.opg = function() {
        onu(this.shz);
        this.yaf = 0;
        this.gij = false;
        if (this.kbt != -1) {
            this.parent.dul.ikn("ballrem");
            this.shz = upo(a.ugb)
        } else {
            this.shz = setTimeout(this.zde, 100)
        }
    };
    this.ftc = function() {
        a.lfm()
    };
    this.lfm = function() {
        if (!this.gij) {
            this.yaf += 0.1
        } else {
            this.yaf -= 0.2
        }
        if (this.yaf >= 6 && !this.gij) {
            this.gij = true
        } else {
            if (this.yaf <= 0 && this.gij) {
                this.start();
                return
            }
        }
        this.zfh(this.context2D);
        if (!this.gij) {
            this.svu(this.context2D, this.baj)
        }
        this.context2D.drawImage(this.fak, this.aka - this.yaf, this.cpa - this.yaf, this.fak.width + 2 * this.yaf, this.fak.height + 2 * this.yaf);
        if (this.izz() && this.parent.clv()) {
            if (this.alo && this.rml) {
                this.alo.drawImage(this.rml, this.x, this.y)
            }
        }
        this.shz = upo(this.ftc)
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        this.context2D.drawImage(this.xsm, 0, 0);
        if (this.lkl >= 0) {
            this.svu(this.context2D, this.baj - 2)
        }
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    };
    this.zfh = function(b) {
        b.drawImage(this.vin, 0, 0);
        b.drawImage(this.jpy, this.ypp - this.blo, this.ypp - this.blo);
        b.drawImage(this.khu, this.wcy, this.wcy)
    };
    this.svu = function(c, b) {
        if (this.aem) {
            var f = this.czc(this.zxt),
                e = Math.round(b * Math.cos(f)),
                d = Math.round(b * Math.sin(f));
            c.drawImage(this.uaf, this.ypp + e - this.uaf.width / 2, this.ypp + d - this.uaf.height / 2)
        }
    };
    this.phq = function(c, b) {
        var d = 0,
            f = 0,
            e = 0;
        this.rme.save();
        this.rme.beginPath();
        this.rme.arc(this.blo, this.blo, this.blo - 1, 0, 2 * Math.PI, false);
        this.rme.clip();
        this.rme.translate(this.blo, this.blo);
        this.rme.rotate(-c);
        this.rme.drawImage(this.btm, -this.blo, -this.blo);
        if (this.aem) {
            d = this.czc(this.zxt);
            f = Math.round(b * Math.cos(d));
            e = Math.round(b * Math.sin(d));
            this.rme.drawImage(this.uaf, f - this.uaf.width / 2, e - this.uaf.height / 2)
        }
        this.rme.restore()
    };
    this.czc = function(b) {
        return b * 0.017553292519943295
    };
    this.yyk = function(d) {
        for (var c = 0, b = this.wiq.length; c < b; c++) {
            if (this.wiq[c] == d) {
                return Math.round(c * this.ver)
            }
        }
    }
}
mvc.prototype = new ezd;

function odd() {
    var a = this;
    this.rrw = null;
    this.uaf = null;
    this.khu = null;
    this.fak = null;
    this.btm = null;
    this.uhr = null;
    this.aem = false;
    this.yae = false;
    this.mvy = false;
    this.hwp = false;
    this.cev = false;
    this.shz = 0;
    this.aka = 78;
    this.cpa = 76;
    this.yaf = 0;
    this.gij = false;
    this.rsa = 270;
    this.yjl = 0;
    this.guj = 4;
    this.lhe = 0;
    this.dwd = 0;
    this.leu = 3;
    this.rsy = 0;
    this.wbq = 0;
    this.bly = 0;
    this.ypp = 155;
    this.baj = 87;
    this.blo = 112.5;
    this.yya = 17;
    this.wiq = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
    this.mdl = [];
    this.kbt = -1;
    this.ver = 360 / this.wiq.length;
    this.ypw = 0;
    this.zxt = 0;
    this.vjj = 0;
    this.qcc = 0;
    this.lkl = -1;
    this.wem = function(d, g, e) {
        mvc.prototype.wem.call(this, d, g, e);
        for (var c = 0, b = this.wiq.length; c < b; c++) {
            var f = this.yyk(c);
            if (c == 2) {
                f += 3
            } else {
                if (c == 4) {
                    f += 2
                } else {
                    if (c == 6) {
                        f += 2
                    } else {
                        if (c == 11) {
                            f += 2
                        } else {
                            if (c == 13 || c == 25 || c == 27 || c == 32 || c == 34 || c == 36) {
                                f += 2
                            } else {
                                if (c == 15 || c == 17 || c == 19) {
                                    f += 3
                                } else {
                                    if (c == 21 || c == 23 || c == 30) {
                                        f += 1
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.mdl.push(f)
        }
    };
    this.xza = function(b, c) {
        this.guk = (b && this.width > 0 && this.height > 0);
        this.parent.gfy.style.zIndex = (b === true) ? 1 : -1;
        if (c && c === true) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
    };
    this.ota = function(b) {
        mvc.prototype.ota.call(this, b)
    };
    this.qgh = function(b) {
        try {
            this.ypp = b.pnd;
            this.baj = b.guo;
            this.blo = b.dws;
            this.yya = b.uxz;
            this.qjn = b.iep;
            this.qut = b.zpk;
            this.wcy = b.tdk
        } catch (c) {
            console.error(c)
        }
    };
    this.wcx = function() {};
    this.skg = function() {};
    this.nct = function(b) {
        if (this.yae === true) {
            this.kbt = b;
            this.zxt = this.mdl[this.kbt];
            this.zxt -= 7;
            if (this.zxt < 0) {
                this.zxt = 360 + this.zxt
            }
            if (this.wbq > 2) {
                this.ypw = this.zxt + 360 * (this.rsy + 1);
                this.vjj = 360 * (this.rsy)
            } else {
                this.ypw = this.zxt + 360 * 5;
                this.vjj = 360 * 4
            }
        } else {
            this.parent.qje()
        }
    };
    this.bld = function(c) {
        var b = 0;
        if (c == 2) {
            b += 3
        } else {
            if (c == 4) {
                b += 2
            } else {
                if (c == 6) {
                    b += 2
                } else {
                    if (c == 11) {
                        b += 2
                    } else {
                        if (c == 13 || c == 25 || c == 27 || c == 32 || c == 34 || c == 36) {
                            b += 2
                        } else {
                            if (c == 15 || c == 17 || c == 19) {
                                b += 3
                            } else {
                                if (c == 21 || c == 23 || c == 30) {
                                    b += 1
                                }
                            }
                        }
                    }
                }
            }
        }
        this.aem = true;
        this.lkl = c;
        this.zxt = this.mdl[this.lkl] - 95 - b;
        this.cxv = this.baj;
        this.parent.qje()
    };
    this.zde = function() {
        a.start()
    };
    this.start = function() {
        onu(this.shz);
        this.yae = true;
        this.mvy = false;
        this.hwp = false;
        this.cev = false;
        this.aem = false;
        this.guj = 4;
        this.rsa = 270;
        this.yjl = 0;
        this.leu = 2;
        this.lhe = 0;
        this.dwd = 0;
        this.qcc = this.yya;
        this.rsy = 0;
        this.wbq = 0;
        this.lkl = -1;
        this.kbt = -1;
        this.zxt = -1;
        this.shz = upo(this.mgy)
    };
    this.stop = function() {
        this.yae = false;
        onu(a.shz);
        clearTimeout(a.shz)
    };
    this.unh = function() {
        return this.yae
    };
    this.mgy = function() {
        a.nhz()
    };
    this.nhz = function() {
        var f = this.czc(this.rsa),
            g = this.czc(this.lhe).toFixed(4),
            b = Math.round(this.ypp - this.qcc),
            d = Math.round(b * Math.cos(f)),
            c = Math.round(b * Math.sin(f)),
            e = 0;
        if (this.bly != 0 && (this.dwd - this.bly) >= 90 && this.mvy === false) {
            this.mvy = true;
            this.parent.qje()
        } else {
            if (this.bly != 0 && (this.dwd - this.bly) >= 180) {
                this.bly = 0
            }
        }
        if (!this.aem) {
            this.rsa += this.guj;
            this.yjl += this.guj
        }
        this.lhe += this.leu;
        this.dwd += this.leu;
        if (this.rsa > 360) {
            this.rsa = this.guj
        }
        if (this.lhe > 360) {
            this.lhe = this.leu
        }
        if (this.yjl > (360 * (this.rsy + 1))) {
            this.rsy += 1
        }
        this.wbq = Math.floor(this.dwd / 360);
        e = this.dwd - (360 * this.wbq);
        if (this.kbt != -1) {
            if ((this.yjl + e) >= (this.ypw - 6)) {
                if (!this.aem) {
                    this.zxt -= 90;
                    this.bly = this.dwd;
                    this.parent.dul.hku("ballonnumber")
                }
                this.aem = true;
                if (this.aem && this.dwd >= (this.vjj - 2)) {
                    this.lmp(b);
                    this.yae = false;
                    if (this.uhr != null) {
                        this.uhr()
                    }
                    return
                }
            }
            if (this.yjl + e >= this.ypw - 720) {
                if (this.dwd >= this.vjj - 20) {
                    this.leu -= 0.02;
                    if (this.leu < 0.1) {
                        this.leu = 0.1
                    }
                } else {
                    if (this.dwd >= this.vjj - 40) {
                        this.leu -= 0.02;
                        if (this.leu < 0.5) {
                            this.leu = 0.5
                        }
                    } else {
                        if (this.dwd >= this.vjj - 90) {
                            this.leu -= 0.015;
                            if (this.leu < 0.5) {
                                this.leu = 0.5
                            }
                        } else {
                            if (this.yjl + e >= this.ypw - 90) {
                                this.leu -= 0.012;
                                if (this.leu < 0.5) {
                                    this.leu = 0.5
                                }
                            }
                        }
                    }
                }
                this.guj -= 0.01;
                if (this.yjl + e >= this.ypw - 60) {
                    this.guj -= 0.2
                } else {
                    if (this.yjl + e >= this.ypw - 120) {
                        this.guj -= 0.15
                    }
                }
                if (this.guj < 0.1) {
                    this.guj = 0.1
                }
            }
        }
        if (this.rsy >= 3 && this.rsy < 5) {
            this.qcc += 0.5;
            if (this.qcc > 50 && !this.hwp) {
                this.parent.dul.ikn("ballonnumber");
                this.hwp = true
            }
            if (this.qcc > 70) {
                this.qcc = 70
            }
        } else {
            if (this.yjl >= 160 && !this.cev) {
                this.parent.dul.ikn("ballrun");
                this.cev = true
            }
        }
        this.qve(g, b, d, c);
        this.shz = upo(this.mgy)
    };
    this.opg = function() {};
    this.ftc = function() {};
    this.lfm = function() {};
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        this.lmp(this.cxv);
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    };
    this.lmp = function(b) {
        var e = 0,
            d = 0,
            c = 0;
        this.cxv = b;
        this.context2D.drawImage(this.rrw, (this.rrw.width - this.width) / 2, Math.round(this.rrw.height - this.height) / 2, this.width, this.height, this.x, this.y, this.width, this.height);
        this.context2D.drawImage(this.btm, this.x + this.ypp - this.blo, this.y + this.ypp - this.blo);
        this.context2D.drawImage(this.khu, this.x + this.wcy, this.y + this.wcy);
        if (this.aem) {
            e = this.czc(this.zxt), d = Math.round(b * Math.cos(e)), c = Math.round(b * Math.sin(e));
            if (d !== 0 && c !== 0) {
                this.context2D.drawImage(this.uaf, this.x + this.ypp + d - this.uaf.width / 2, this.y + this.ypp + c - this.uaf.height / 2)
            }
        }
    };
    this.qve = function(f, b, e, d) {
        this.context2D.drawImage(this.rrw, (this.rrw.width - this.width) / 2, Math.round(this.rrw.height - this.height) / 2, this.width, this.height, this.x, this.y, this.width, this.height);
        this.context2D.save();
        this.context2D.translate(this.x + this.ypp, this.y + this.ypp);
        this.context2D.rotate(-f);
        this.context2D.drawImage(this.btm, -this.blo, -this.blo);
        if (this.aem) {
            var c = this.czc(this.zxt);
            e = Math.round(b * Math.cos(c));
            d = Math.round(b * Math.sin(c));
            this.context2D.drawImage(this.uaf, e - this.uaf.width / 2, d - this.uaf.height / 2)
        }
        this.context2D.restore();
        this.context2D.drawImage(this.khu, this.x + this.wcy, this.y + this.wcy);
        if (!this.aem && this.rsy >= 1) {
            this.context2D.drawImage(this.uaf, this.x + this.ypp + 1 + e - this.uaf.width / 2, this.y + this.ypp + d - this.uaf.height / 2)
        }
    };
    this.czc = function(b) {
        return b * 0.017553292519943295
    };
    this.yyk = function(d) {
        for (var c = 0, b = this.wiq.length; c < b; c++) {
            if (this.wiq[c] == d) {
                return Math.round(c * this.ver)
            }
        }
    }
}
odd.prototype = new ezd;

function gdr() {
    this.rmb = 0;
    this.btp = "arial";
    this.apl = "bold";
    this.ykb = "green";
    this.lol = "green";
    this.jcm = "yellow";
    this.cbz = 24;
    this.hdf = 0;
    this.ejo = 0;
    this.ler = function(a) {
        try {
            this.btp = a.font;
            this.apl = a.stb;
            this.jmg = a.gmj;
            this.ykb = a.backgroundColor;
            this.lol = a.okc;
            this.jcm = a.borderColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        try {
            this.cbz = a.fontSize;
            this.hdf = a.nlj;
            this.ejo = a.kui
        } catch (b) {
            console.error(b)
        }
    };
    this.rnk = function(a, b) {
        this.rmb = a;
        if (b && b === true) {
            this.parent.jlg(this.x, this.y, this.width, this.height)
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.clearRect(0, 0, this.width, this.height);
        b = a.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
        b.addColorStop(0, this.ykb);
        b.addColorStop(1, this.lol);
        tlg.tpm.fjv(a, 0, 0, this.width, this.height, this.ejo, b, this.jcm, this.hdf);
        tlg.tpm.der(a, this.parent.hut(this.rmb), this.jmg, 0, this.hdf, this.width, this.height, this.btp, this.cbz, this.apl);
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
gdr.prototype = new ezd;

function bsc() {
    this.fow = {
        iih: 80,
        ydo: -1,
        value: "P",
        oyy: null
    };
    this.language = {
        iih: 76,
        ydo: -1,
        value: "L",
        oyy: null
    };
    this.gzt.push(this.fow);
    this.gzt.push(this.language)
}
bsc.prototype = new qkd;

function bhd() {
    this.wem = function() {
        this.rvg("btn", this.phz);
        this.rvg("audioon", this.phz)
    }
}
bhd.prototype = new sqn;

function qiv(g, c, f, e, i, a, d, b) {
    this.zho = g;
    this.bli = f;
    this.njy = e;
    this.lft = i;
    this.zyr = c;
    this.lsu = a;
    this.tie = d;
    this.qka = b;
    this.kmb = 0;
    this.jbw = 0;
    this.win = 0;
    this.jds = -1;
    this.aaa = 0;
    this.oiq = 0;
    this.trq = 0;
    this.xyw = 0;
    this.aam = 0;
    this.ybc = 0;
    this.eia = 0;
    this.nyq = 0;
    this.pky = 0;
    this.kre = 0;
    this.xdg = 0;
    this.wgg = 0;
    this.ajq = 0;
    this.xjv = 0;
    this.sqw = 0;
    this.tkh = 0;
    this.emg = 0;
    this.fin = 0;
    this.zov = 0;
    this.ppl = 0;
    this.exj = 0;
    this.cfx = "";
    this.ayl = 0;
    this.iuu = [];
    this.vnu = [];
    this.tzo = "";
    this.eqm = function(k) {
        if (k != null) {
            this.svg = 0;
            this.hpn = this.wge(k);
            if (this.hpn == 0) {
                this.aqt = this.ckg(k);
                this.cvg = this.wge(k);
                this.kmb = this.qpt(k);
                this.jbw = this.yqf(k);
                this.win = this.yqf(k);
                this.jds = this.yqf(k);
                this.ayl = this.yqf(k);
                this.aaa = this.yqf(k);
                this.oiq = this.yqf(k);
                this.trq = this.yqf(k);
                this.xyw = this.yqf(k);
                this.aam = this.yqf(k);
                this.ybc = this.yqf(k);
                this.eia = this.yqf(k);
                this.nyq = this.yqf(k);
                this.pky = this.yqf(k);
                this.kre = this.yqf(k);
                this.xdg = this.yqf(k);
                this.wgg = this.yqf(k);
                this.ajq = this.yqf(k);
                this.xjv = this.yqf(k);
                this.sqw = this.yqf(k);
                this.tkh = this.yqf(k);
                this.emg = this.yqf(k);
                this.fin = this.yqf(k);
                this.zov = this.yqf(k);
                this.ppl = this.yqf(k);
                this.exj = this.yqf(k);
                this.iuu = [];
                for (var j = 0; j < 17; j++) {
                    this.iuu.push(this.yqf(k))
                }
                this.vnu = [];
                for (var j = 0; j < 37; j++) {
                    this.vnu.push(this.yqf(k))
                }
                var l = k.substring(this.svg).split("#");
                if (l.length >= 1) {
                    this.cfx = l[0];
                    if (l.length >= 2) {
                        this.tzo = l[1];
                        if (tlg.fxx.value21.e === true && tlg.fxx.value21.s !== "") {
                            this.tzo = ""
                        }
                    }
                }
                if (this.cvg !== 4) {
                    this.imc.uxd()
                }
                if (this.aqt == 0) {
                    this.udj("A/u250")
                } else {
                    if (this.cvg == 0) {
                        if (!(this.imc.qtq.etx === true && tlg.tpm.nhu === tlg.os.ltz && tlg.tpm.hyz !== tlg.fcw.qqh)) {
                            this.imc.blq(this.aqt)
                        }
                    } else {
                        if (this.cvg == 4) {
                            this.shx = tlg.cvg.dhe;
                            this.imc.vul(this.imc.qtq.language.gyg)
                        } else {
                            this.imc.tfw(this.cvg)
                        }
                    }
                }
            } else {
                if (this.hpn == 1) {
                    this.aqt = this.ckg(k);
                    this.cvg = this.wge(k);
                    this.kmb = this.qpt(k);
                    this.jbw = this.yqf(k);
                    this.win = this.yqf(k);
                    this.jds = this.yqf(k);
                    this.ayl = this.yqf(k);
                    for (var j = 0; j < 37; j++) {
                        this.vnu[j] = this.yqf(k)
                    }
                    this.cfx = k.substring(this.svg);
                    if (this.aqt == tlg.roulette.ezj.dhe || this.aqt == tlg.roulette.ezj.oxf) {
                        this.imc.tfw(this.aqt)
                    } else {
                        if (this.cvg == 0) {
                            this.imc.dqq(this.aqt)
                        } else {
                            if (this.cvg == 2) {
                                this.imc.dqq(this.aqt)
                            }
                            this.imc.tfw(this.cvg)
                        }
                    }
                } else {
                    if (this.hpn == 2) {} else {
                        if (this.hpn == 3) {
                            this.jbw = this.yqf(k);
                            this.imc.cih()
                        } else {
                            if (this.hpn === 8) {
                                this.udj("8")
                            } else {
                                if (this.hpn == 9) {
                                    this.imc.qtq.erd = k.substring(this.svg)
                                } else {
                                    this.shx = this.wge(k);
                                    this.imc.vul(k.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.vds = function(j) {
        this.udj("A/u291," + j)
    }
}
qiv.prototype = new xtb;

function tou() {
    this.sjr = false;
    this.wem = function(a, b) {
        this.zho = b;
        this.qtq = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.bli = f;
        this.njy = e;
        this.lft = g;
        this.zyr = c;
        this.tie = d;
        this.qka = b;
        this.eyb = new qiv(this.zho, c, f, e, g, a, d, b);
        this.eyb.wem(this)
    };
    this.vds = function(a) {
        this.eyb.vds(a)
    };
    this.foi = function() {};
    this.uxd = function() {
        this.qtq.tzo = this.eyb.tzo;
        this.qtq.cem();
        this.qtq.yxn(this.eyb);
        if (this.qtq.etx === true && tlg.tpm.nhu === tlg.os.ltz && tlg.tpm.hyz !== tlg.fcw.qqh) {
            this.qtq.state = this.eyb.aqt;
            this.qtq.kzh(false);
            this.qtq.xmb();
            this.qtq.jvo([{
                mlq: tlg.cvg.tsh
            }])
        } else {
            this.qtq.ivf()
        }
    };
    this.tfw = function(a) {
        this.qtq.jbw = this.eyb.jbw;
        this.qtq.wcn(a)
    };
    this.blq = function(a) {
        this.qtq.state = a;
        this.qtq.jbw = this.eyb.jbw;
        if (a == tlg.roulette.ezj.hqw) {
            this.qtq.mjs(this.eyb.ayl)
        } else {
            if (a == tlg.roulette.ezj.maw && this.qtq.etx == true) {
                this.qtq.mjs(this.eyb.ayl)
            } else {
                if (a == tlg.roulette.ezj.kyi) {
                    this.qtq.jht()
                } else {
                    if (a == tlg.roulette.ezj.reh) {
                        this.qtq.vgk(this.eyb.kmb);
                        this.qtq.fbs(this.eyb.jbw)
                    } else {
                        if (a == tlg.roulette.ezj.gvn) {
                            this.qtq.vgk(this.eyb.kmb);
                            this.qtq.gbf(this.eyb.vnu);
                            if (this.qtq.etx) {
                                if (tlg.tcn.zdy("roulette") != null) {
                                    tlg.tcn.jqi("roulette");
                                    this.qtq.cyq(this.eyb.jds, this.eyb.win, this.eyb.jbw)
                                } else {
                                    this.qtq.mjs(0)
                                }
                            } else {
                                this.qtq.olp(this.eyb.jds, this.eyb.win, this.eyb.jbw)
                            }
                        } else {
                            if (a == tlg.roulette.ezj.hpy) {
                                this.qtq.stj(this.eyb.ayl)
                            } else {
                                if (a == tlg.roulette.ezj.zcf) {
                                    this.qtq.qek()
                                } else {
                                    if (a == tlg.roulette.ezj.plh) {
                                        this.qtq.cha()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this.qtq.xmb()
    };
    this.cih = function() {
        this.qtq.cih(this.eyb.jbw)
    };
    this.dqq = function(a) {
        this.qtq.akz = false;
        this.qtq.state = a;
        this.qtq.jbw = this.eyb.jbw;
        if (!this.qtq.hmp) {
            this.qtq.xmb()
        }
        if (a == tlg.roulette.ezj.hqw) {
            this.qtq.mjs(this.eyb.ayl)
        } else {
            if (a == tlg.roulette.ezj.maw && this.qtq.etx == true) {
                this.qtq.mjs(this.eyb.ayl)
            } else {
                if (a == tlg.roulette.ezj.kyi) {
                    this.qtq.jht()
                } else {
                    if (a == tlg.roulette.ezj.reh) {
                        this.qtq.vgk(this.eyb.kmb);
                        this.qtq.fbs(this.eyb.jbw)
                    } else {
                        if (a == tlg.roulette.ezj.gvn) {
                            this.qtq.vgk(this.eyb.kmb);
                            this.qtq.gbf(this.eyb.vnu);
                            if (this.qtq.etx) {
                                tlg.tcn.eqi("roulette", true);
                                this.qtq.cyq(this.eyb.jds, this.eyb.win, this.eyb.jbw)
                            } else {
                                this.qtq.olp(this.eyb.jds, this.eyb.win, this.eyb.jbw)
                            }
                        } else {
                            if (a == tlg.roulette.ezj.hpy) {
                                this.qtq.stj(this.eyb.ayl)
                            } else {
                                if (a == tlg.roulette.ezj.zcf) {
                                    this.qtq.qek()
                                } else {
                                    if (a == tlg.roulette.ezj.plh) {
                                        this.qtq.cha()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
tou.prototype = new tbm;

function xmh() {
    this.state = -1;
    this.kmb = 0;
    this.jbw = 0;
    this.zjv = 0;
    this.win = 0;
    this.jds = 0;
    this.xvv = [];
    this.vuu = "";
    this.wem = function(a, b) {
        this.zho = b;
        this.qtq = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.gym = false;
        xmh.prototype.connect.call(this, c, f, e, g, a, d, b)
    };
    this.eqm = function(a) {
        if (a != null && a != "null") {
            if (a == "0") {
                this.emt(this.zyr)
            } else {
                if (!this.gym) {
                    this.gym = true;
                    this.qtq.dju()
                }
                this.fly(a, false);
                this.akn = a
            }
        } else {
            if (!this.gym) {
                this.qtq.wvo()
            } else {
                this.fly(this.akn, true)
            }
        }
    };
    this.fly = function(g, f) {
        var c = g.split("!"),
            e = [],
            b = [];
        if (c.length >= 1) {
            e = c[0].split("|");
            if (c.length >= 2) {
                b = c[1].split("|")
            }
        }
        this.kmb = parseInt(e[1]);
        this.jbw = parseInt(e[3]);
        this.state = parseInt(e[4]);
        this.zjv = parseInt(e[5]);
        this.win = parseInt(e[7]);
        this.jds = parseInt(e[10]);
        this.xvv = [];
        for (var d = 11, a = e.length; d < a; d++) {
            this.xvv.push(e[d])
        }
        if (b.length > 0) {
            this.aaa = parseInt(b[0]);
            this.oiq = parseInt(b[1]);
            this.trq = parseInt(b[2]);
            this.xyw = parseInt(b[3]);
            this.aam = parseInt(b[4]);
            if (b.length > 5) {
                this.vuu = b[5]
            }
        }
        this.qtq.yfv(this.kmb, this.state, this.jbw, this.zjv, this.win, this.jds, this.xvv, this.vuu, f)
    };
    this.cdm = function(a) {
        if (this.closed) {
            return
        }
        this.closed = true;
        this.qtq.jrf()
    }
}
xmh.prototype = new tbo;
tlg.roulette = {
    ezj: {
        maw: 0,
        hqw: 1,
        gub: 2,
        kyi: 3,
        reh: 4,
        gvn: 5,
        plh: 6,
        hpy: 7,
        zcf: 8,
        dhe: 9,
        oxf: 10
    },
    xbr: {
        zom: 0,
        scj: 1,
        gbb: 2
    }
};

function zsr() {
    this.hmh = {
        lzu: 35,
        split: 17,
        fns: 11,
        ifp: 8,
        yhd: 5,
        wsp: 2
    };
    this.div = false;
    this.gox = false;
    this.etx = false;
    this.csq = null;
    this.laf = null;
    this.gwm = null;
    this.bta = null;
    this.ykd = null;
    this.kqg = null;
    this.fvf = null;
    this.faj = null;
    this.gik = null;
    this.tzi = [];
    this.ayr = null;
    this.ous = null;
    this.gsa = null;
    this.bpu = 0;
    this.tgy = 0;
    this.lvs = -1;
    this.obz = 300;
    this.jbw = 0;
    this.win = 0;
    this.jds = -1;
    this.xjv = 0;
    this.exj = 0;
    this.ppl = 0;
    this.zov = 0;
    this.fin = 0;
    this.emg = 0;
    this.tkh = 0;
    this.sqw = 0;
    this.ybc = 0;
    this.ajq = 0;
    this.wgg = 0;
    this.xdg = 0;
    this.kre = 0;
    this.pky = 0;
    this.nyq = 0;
    this.eia = 0;
    this.cfx = "";
    this.zrs = [];
    this.xvv = [];
    this.mvs = [];
    this.bhi = 0;
    this.kcw = 0;
    this.hpc = true;
    this.pck = false;
    this.xyd = 4000;
    this.sex = 0;
    this.gze = 0;
    this.rdr = 0;
    this.tbn = 0;
    this.gui = 50;
    this.hyg = true;
    this.jfg = 5000;
    this.djy = 0;
    this.shk = -1;
    this.erw = 0;
    this.gzu = 0;
    this.req = 0;
    this.ofn = -1;
    this.raq = 0;
    this.csl = 0;
    this.txt = [tlg.language.EN, tlg.language.RU, tlg.language.ES, tlg.language.DE, tlg.language.CZ];
    this.tzo = "";
    this.wrr = false;
    this.sfi = false;
    this.slv = function() {
        if (tlg.tpm.hyz === tlg.fcw.ulq || tlg.tpm.hyz === tlg.fcw.zxb) {
            this.txt = [tlg.language.EN]
        }
    };
    this.jhu = function(a) {
        tlg.xiv.rsv(a)
    };
    this.nhv = function() {
        this.mec();
        this.hpt();
        this.ylz();
        this.ppo();
        this.pym();
        this.wtx();
        if (!this.xsh) {
            this.kxl();
            this.dii()
        }
        if (!this.efb()) {
            this.suq()
        }
    };
    this.cem = function() {
        if (!this.sjr) {
            if (this.fsx === false) {
                this.wrk.style.marginTop = (-this.height / 2 + this.egw()) + "px";
                this.wrk.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.wrk.style.left = "0px";
                this.wrk.style.top = "0px";
                this.wrk.style.marginTop = ((this.hfp - this.height) / 2 + this.egw()) + "px";
                this.wrk.style.marginLeft = ((this.wiz - this.width) / 2) + "px"
            }
            this.wrk.style.width = (this.width > this.wiz) ? this.wiz + "px" : this.width + "px";
            this.wrk.style.height = (this.height > this.hfp) ? this.hfp + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.krh() === true && typeof WebGL2D != "undefined") {
                try {
                    this.gfy = document.getElementById("canvas2");
                    this.gfy.width = Math.round(this.ore.gfy.eso.width);
                    this.gfy.height = Math.round(this.ore.gfy.eso.height);
                    WebGL2D.enable(this.gfy);
                    this.xku = this.gfy.getContext("webgl-2d");
                    this.jpp = true;
                    this.canvas.style.zIndex = 0;
                    this.gfy.style.zIndex = 1
                } catch (a) {
                    this.gfy = null;
                    this.xku = null;
                    this.jpp = false
                }
            }
            this.gwm = document.createElement("canvas");
            this.gwm.width = this.ore.xiv.eso.width;
            this.gwm.height = this.ore.xiv.eso.height;
            this.laf = this.gwm.getContext("2d");
            if (this.ofu) {
                this.ofu.style.width = this.width + "px";
                this.ofu.style.height = this.height + "px"
            }
            this.offsetLeft = this.wrk.offsetLeft;
            this.offsetTop = this.wrk.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.sjr = true
        }
    };
    this.mec = function() {
        this.bta = this.lqn();
        this.bta.wem(this.ore.oav.eso, null, this.context2D);
        this.bta.parent = this;
        this.bta.vbv = this.dul.mza("panel");
        this.bta.bti(this.ore.oav);
        this.bta.ler(this.style.oav);
        this.bta.qgh(this.ore.oav)
    };
    this.lqn = function() {
        return new ozz()
    };
    this.hpt = function() {
        this.tzi[0] = this.smv(this.ore.nmy.eso, this.dul.mza("j1"), 10);
        this.tzi[1] = this.smv(this.ore.xvm.eso, this.dul.mza("j2"), 20);
        this.tzi[2] = this.smv(this.ore.ual.eso, this.dul.mza("j3"), 50);
        this.tzi[3] = this.smv(this.ore.xgx.eso, this.dul.mza("j4"), 100);
        this.tzi[4] = this.smv(this.ore.php.eso, this.dul.mza("j5"), 200);
        for (var b = 0, a = this.tzi.length; b < a; b++) {
            this.tzi[b].qgh(this.ore.ciq)
        }
        this.ayr = new ekz();
        this.ayr.wem(this.ore.ayr.eso, this.context2D, null, null, 0);
        this.ayr.parent = this;
        this.ayr.ler(this.style.ciq);
        this.ayr.qgh(this.ore.ayr);
        this.ayr.xza(false);
        this.tzi[this.kcw].kyu(true)
    };
    this.ylz = function() {
        this.ykd = new kwv();
        this.ykd.wem(this.ore.ykd.eso, null, this.context2D);
        this.ykd.parent = this;
        this.ykd.wtr = 16;
        this.ykd.vbv = this.dul.mza("numbers");
        this.ykd.qgh(this.ore.ykd);
        this.ykd.ler(this.style.ykd)
    };
    this.kxl = function() {
        this.kqg = new fjd();
        this.kqg.wem(this.ore.fow.eso, null, this.context2D);
        this.kqg.parent = this;
        this.kqg.bti(this.ore.fow);
        this.kqg.ler(this.style.fow);
        this.kqg.qgh(this.ore.fow);
        this.kqg.xza(false)
    };
    this.ppo = function() {
        this.fvf = new zel();
        this.fvf.wem(this.ore.fvf.eso, null, this.context2D);
        this.fvf.parent = this;
        this.fvf.vbv = this.dul.mza("glass");
        this.fvf.xgg = this.dul.mza("timingbar");
        this.fvf.qgh(this.ore.fvf);
        this.fvf.ler(this.style.fvf);
        this.fvf.apa(0)
    };
    this.pym = function() {
        this.faj = this.mgr();
        this.faj.wem(this.ore.faj.eso, null, this.context2D);
        this.faj.parent = this;
        this.faj.gpx();
        this.faj.bti(this.ore.faj);
        this.faj.ler(this.style.faj);
        this.faj.qgh(this.ore.faj);
        this.faj.vbv = this.dul.mza("table");
        this.faj.kbi = this.dul.mza("table_high");
        this.faj.amk = this.dul.mza("dolly")
    };
    this.mgr = function() {
        return new khq()
    };
    this.wtx = function() {
        this.gik = new cqa();
        this.gik.wem(this.ore.gik.eso, null, this.context2D);
        this.gik.parent = this;
        this.gik.gpx();
        this.gik.ler(this.style.gik);
        this.gik.qgh(this.ore.gik);
        this.gik.vbv = this.dul.mza("racebet");
        this.gik.kbi = this.dul.mza("racebet_high");
        this.gik.amk = this.dul.mza("dolly");
        this.gik.xza(false)
    };
    this.suq = function() {
        var a = new xcs();
        a.wem(this.ore.wqz.eso, null, this.context2D);
        a.parent = this;
        a.bti(this.ore.wqz);
        a.ler(this.style.wqz);
        a.qgh(this.ore.wqz);
        a.xza(false);
        this.hhv.sqh("history", a)
    };
    this.smv = function(c, b, d) {
        var a = new ekz();
        a.wem(c, this.context2D, null, b, d);
        a.parent = this;
        a.ler(this.style.ciq);
        a.qgh(this.ore.ciq);
        return a
    };
    this.ifr = function() {
        zsr.prototype.ifr.call(this);
        if (this.jrv() === true) {
            this.dul.bgn(true)
        }
    };
    this.mhp = function() {
        var a = new bhd();
        a.wem();
        return a
    };
    this.yxn = function(a) {
        this.ymg = true;
        clearInterval(this.qrn);
        if (this.skp) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.nmn = 0
            }
            if (this.dul.pmx === true) {
                this.axe(this.jto[this.nmn])
            } else {
                this.rye((this.jto[this.nmn] === 0))
            }
        }
        this.nhv();
        this.mhl();
        this.gyx(a);
        this.hqs()
    };
    this.xmb = function() {
        tlg.xiv.wvv();
        tlg.xiv.hmp = true;
        tlg.xiv.jlg();
        tlg.xiv.qtk();
        if (tlg.xiv.gfy != null) {
            tlg.xiv.gfy.style.zIndex = 1
        }
        if (tlg.fxx.value37 && !tlg.xiv.efb()) {
            tlg.xiv.acc()
        }
    };
    this.ecf = function() {
        if (this.imc == null) {
            this.imc = new tou().wem(this, tlg.fxx.value6)
        }
    };
    this.enn = function() {
        if (this.csq == null) {
            this.csq = new xmh().wem(this, tlg.fxx.value6)
        }
    };
    this.lvr = function() {
        this.csq.connect(this.zyr, this.juz, this.gpj, this.dgh, this.lsu, this.tie, this.qka)
    };
    this.zze = function() {
        zsr.prototype.zze.call(this)
    };
    this.ion = function() {
        tlg.xiv.zze()
    };
    this.rtj = function() {
        try {
            if (tlg.xiv.ous) {
                jwplayer("sdnPlayer").play()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.msu = function(a) {
        if (a == tlg.language.EN || a == tlg.language.US) {
            return new bkq()
        } else {
            if (a == tlg.language.ES || a == tlg.language.CO || a == tlg.language.MX || a == tlg.language.CL || a == tlg.language.VE) {
                return new wde()
            } else {
                if (a == tlg.language.DE || a == tlg.language.AT) {
                    return new pxp()
                } else {
                    if (a == tlg.language.PT || a == tlg.language.BR) {
                        return new vot()
                    } else {
                        if (a == tlg.language.RU) {
                            return new juv()
                        } else {
                            if (a == tlg.language.EE) {
                                return new uee()
                            } else {
                                if (a == tlg.language.TR) {
                                    return new ejt()
                                } else {
                                    if (a == tlg.language.CZ) {
                                        return new pim()
                                    } else {
                                        if (a == tlg.language.GR) {
                                            return new vbb()
                                        } else {
                                            if (a == tlg.language.BG) {
                                                return new hro()
                                            } else {
                                                if (a == tlg.language.GE) {
                                                    return new rpe()
                                                } else {
                                                    if (a == tlg.language.HU) {
                                                        return new afo()
                                                    } else {
                                                        if (a == tlg.language.RO) {
                                                            return new kyd()
                                                        } else {
                                                            if (a == tlg.language.FR) {
                                                                return new rdp()
                                                            } else {
                                                                if (a == tlg.language.HR) {
                                                                    return new smw()
                                                                } else {
                                                                    if (a == tlg.language.IT) {
                                                                        return new vht()
                                                                    } else {
                                                                        if (a == tlg.language.SE) {
                                                                            return new uxi()
                                                                        } else {
                                                                            if (a == tlg.language.MK) {
                                                                                return new ywf()
                                                                            } else {
                                                                                if (a == tlg.language.PL) {
                                                                                    return new cnv()
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.iyy = function() {
        zsr.prototype.iyy.call(this);
        var a = this.haj(this.wmy) / 2;
        if (this.ous != null) {
            this.ous.style.position = "fixed";
            if (this.wrr === true) {
                this.ous.style.top = this.offsetTop + a + (this.ore.nzo.eso.y * this.vhb) + "px";
                this.ous.style.left = this.offsetLeft + (this.ore.nzo.eso.x * this.nwu) + "px";
                this.ous.style.width = this.ore.nzo.eso.width * this.nwu + "px";
                this.ous.style.height = this.ore.nzo.eso.height * this.vhb + "px"
            } else {
                this.ous.style.top = this.offsetTop + a + (this.ore.nzo.aqr.y * this.vhb) + "px";
                this.ous.style.left = this.offsetLeft + (this.ore.nzo.aqr.x * this.nwu) + "px";
                this.ous.style.width = this.ore.nzo.aqr.width * this.nwu + "px";
                this.ous.style.height = this.ore.nzo.aqr.height * this.vhb + "px"
            }
        }
    };
    this.zqb = function() {
        if (this.xsh === true) {
            this.ooa(tlg.ore.njn)
        } else {
            this.ooa(tlg.ore.ugy)
        }
        this.kxi();
        if (this.hmp === true) {
            this.jlg()
        } else {
            this.hhv.psg("loading", "#jlg")
        }
    };
    this.jnv = function(a) {
        return a
    };
    this.ooa = function(a) {
        this.ore = this.hws(a);
        this.width = this.ore.canvas.eso.width;
        this.height = this.ore.canvas.eso.height
    };
    this.avf = function() {
        this.style = new jym()
    };
    this.hws = function(a) {
        this.xdi = a;
        if (a == tlg.ore.ugy) {
            return new pfg()
        } else {
            if (a == tlg.ore.njn) {
                return new hlo()
            }
        }
        return null
    };
    this.cca = function() {
        this.canvas.width = 0;
        if (this.fsx === false) {
            this.wrk.style.marginTop = (-this.height / 2 + this.egw()) + "px";
            this.wrk.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.wrk.style.left = "0px";
            this.wrk.style.top = "0px";
            this.wrk.style.marginTop = ((this.hfp - this.height) / 2 + this.egw()) + "px";
            this.wrk.style.marginLeft = ((this.wiz - this.width) / 2) + "px"
        }
        this.wrk.style.width = (this.width > this.wiz) ? this.wiz + "px" : this.width + "px";
        this.wrk.style.height = (this.height > this.hfp) ? this.hfp + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (!this.brp) {
            this.gwm.width = this.ore.xiv.eso.width;
            this.gwm.height = this.ore.xiv.eso.height
        }
        if (this.ofu) {
            this.ofu.style.width = this.width + "px";
            this.ofu.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.kxi = function(a) {
        if (this.sjr) {
            this.cca();
            this.hhs()
        } else {
            this.nml()
        }
    };
    this.hhs = function() {
        this.suc();
        this.mrq();
        this.ydx();
        this.brw();
        this.zfw();
        this.kkg();
        this.dbl();
        this.eof();
        this.gsr()
    };
    this.suc = function() {
        if (this.bta) {
            this.bta.ota(this.ore.oav.eso);
            this.bta.qgh(this.ore.oav)
        }
    };
    this.mrq = function() {
        if (this.ayr) {
            this.tzi[0].ota(this.ore.nmy.eso);
            this.tzi[0].qgh(this.ore.ciq);
            this.tzi[1].ota(this.ore.xvm.eso);
            this.tzi[1].qgh(this.ore.ciq);
            this.tzi[2].ota(this.ore.ual.eso);
            this.tzi[2].qgh(this.ore.ciq);
            this.tzi[3].ota(this.ore.xgx.eso);
            this.tzi[3].qgh(this.ore.ciq);
            this.tzi[4].ota(this.ore.php.eso);
            this.tzi[4].qgh(this.ore.ciq);
            this.ayr.ota(this.ore.ayr.eso);
            this.ayr.qgh(this.ore.ayr)
        }
    };
    this.ydx = function() {
        if (this.ykd) {
            this.ykd.ota(this.ore.ykd.eso);
            this.ykd.qgh(this.ore.ykd)
        }
    };
    this.zfw = function() {
        if (this.kqg) {
            this.kqg.ota(this.ore.fow.eso);
            this.kqg.qgh(this.ore.fow)
        }
    };
    this.brw = function() {
        if (this.fvf != null) {
            this.fvf.ota(this.ore.fvf.eso);
            this.fvf.qgh(this.ore.fvf);
            this.fvf.ler(this.style.fvf)
        }
    };
    this.kkg = function() {
        var a = (this.brp) ? this.ore.wqz.faj : this.ore.faj;
        if (this.faj) {
            this.faj.ota(a.eso);
            this.faj.qgh(a)
        }
    };
    this.dbl = function() {
        if (this.gik) {
            this.gik.ota(this.ore.gik.eso);
            this.gik.qgh(this.ore.gik)
        }
    };
    this.eof = function() {
        var a = this.hhv.djj("history");
        if (a) {
            a.ota(this.ore.wqz.eso);
            a.qgh(this.ore.wqz)
        }
    };
    this.buv = function(a) {
        if (a.preventDefault) {
            a.preventDefault()
        }
        if (a.stopPropagation) {
            a.stopPropagation()
        }
        if (this.kda) {
            return
        }
        var o = 0,
            m = 0,
            b = false,
            g = this.hhv.djj("loading"),
            c = this.hhv.djj("gameb"),
            r = this.hhv.djj("topb"),
            n = this.hhv.djj("topi"),
            q = this.hhv.djj("series"),
            l = this.hhv.djj("autop"),
            p = this.hhv.djj("patternp"),
            s = this.hhv.djj("history");
        if (a.touches) {
            var f = a.touches[0];
            b = true;
            if (!this.wmy) {
                o = f.pageX - this.offsetLeft;
                m = f.pageY - this.offsetTop
            } else {
                o = Math.round((f.pageX - this.offsetLeft) / this.nwu);
                m = Math.round((f.pageY - this.offsetTop) / this.vhb)
            }
        } else {
            if (a.which != 1) {
                return
            }
            if (!this.wmy) {
                o = a.pageX - this.offsetLeft;
                m = a.pageY - this.offsetTop
            } else {
                o = Math.round((a.pageX - this.offsetLeft) / this.nwu);
                m = Math.round((a.pageY - this.offsetTop) / this.vhb)
            }
        }
        if (this.ymg === true) {
            this.lrw();
            this.xeq();
            this.bpu = o;
            this.tgy = m;
            if (l && l.izz()) {
                if (l.buv(o, m)) {
                    return
                }
            }
            if (r && r.izz()) {
                if (r.buv(o, m)) {
                    return
                } else {
                    this.xom();
                    return
                }
            }
            if (n) {
                if (n.buv(o, m, b)) {
                    return
                }
            }
            if (s && s.izz()) {
                if (s.buv(o, m)) {
                    return
                }
            }
            if (c) {
                if (c.buv(o, m)) {
                    return
                }
            }
            if (this.kqg && this.kqg.izz()) {
                if (this.kqg.buv(o, m)) {
                    return
                }
            }
            if (p && p.izz()) {
                if (p.buv(o, m)) {
                    return
                }
            }
            if (this.bta) {
                if (this.bta.buv(o, m)) {
                    return
                }
            }
            if (q && q.izz()) {
                if (q.buv(o, m)) {
                    return
                }
            }
            if (this.faj && this.faj.izz()) {
                if (this.faj.buv(o, m)) {
                    return
                }
            }
            if (this.gik && this.gik.izz()) {
                if (this.gik.buv(o, m)) {
                    return
                }
            }
            for (var e = 0, k = this.tzi.length; e < k; e++) {
                if (this.tzi[e].buv(o, m)) {
                    this.kcw = e;
                    for (var d = 0; d < k; d++) {
                        this.tzi[d].kyu(false)
                    }
                    this.tzi[e].kyu(true);
                    this.jlg();
                    if (this.tzi[e].value > 0) {
                        this.dul.hku("select");
                        this.dul.ikn("select");
                        this.lvs = setTimeout(this.dgf, this.obz)
                    }
                    return
                }
            }
        } else {
            if (g && g.izz()) {
                if (g.buv(o, m)) {
                    return
                }
            }
        }
    };
    this.gmf = function(g) {
        if (g.preventDefault) {
            g.preventDefault()
        }
        if (g.stopPropagation) {
            g.stopPropagation()
        }
        if (this.kda) {
            return
        }
        var d = (g.touches) ? true : false,
            i = this.hhv.djj("topb"),
            f = this.hhv.djj("gameb"),
            c = this.hhv.djj("series"),
            e = this.hhv.djj("history"),
            b = this.hhv.djj("autop"),
            a = this.hhv.djj("patternp");
        if (this.ymg === true) {
            clearTimeout(this.lvs);
            this.ivf();
            if (b && b.izz()) {
                if (b.gmf()) {
                    return
                }
            }
            if (e && e.izz()) {
                if (e.gmf()) {
                    return
                }
            }
            if (f) {
                if (f.gmf()) {
                    return
                }
            }
            if (this.kqg && this.kqg.izz()) {
                if (this.kqg.gmf()) {
                    return
                }
            }
            if (a && a.izz()) {
                if (a.gmf()) {
                    return
                }
            }
            if (this.bta) {
                if (this.bta.gmf()) {
                    return
                }
            }
            if (i) {
                if (i.gmf()) {
                    return
                }
            }
            if (c && c.izz()) {
                c.gmf(this.bpu, this.tgy)
            }
            if (this.faj && this.faj.izz()) {
                this.faj.gmf(this.bpu, this.tgy)
            }
            if (this.gik && this.gik.izz()) {
                this.gik.gmf(this.bpu, this.tgy)
            }
            if (this.ayr && this.ayr.izz() || d) {
                this.ayr.xza(false);
                this.jlg();
                return
            }
        }
    };
    this.wqy = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.kda) {
            return
        }
        var c = this.hhv.djj("topb"),
            a = this.hhv.djj("autop");
        if (a && a.izz()) {
            if (a.wqy(b.keyCode)) {
                return
            }
        }
        if (c) {
            if (c.wqy(b.keyCode)) {
                return
            }
        }
        return
    };
    this.soh = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.kda) {
            return
        }
        var c = this.hhv.djj("topb"),
            a = this.hhv.djj("autop");
        if (a && a.izz()) {
            if (a.soh()) {
                return
            }
        }
        if (c) {
            if (c.soh()) {
                return
            }
        }
        return
    };
    this.rsv = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.kda === true || ((this.faj && this.faj.rjo() === false) && (this.ayr && this.ayr.rjo() === false)) || this.sfi === true) {
            return
        }
        var b = 0,
            g = 0,
            f = false,
            a = this.hhv.djj("series"),
            d = this.hhv.djj("topb");
        if (c.touches) {
            var e = c.touches[0];
            wkl = true;
            if (!this.wmy) {
                b = e.pageX - this.offsetLeft;
                g = e.pageY - this.offsetTop
            } else {
                b = Math.round((e.pageX - this.offsetLeft) / this.nwu);
                g = Math.round((e.pageY - this.offsetTop) / this.vhb)
            }
        } else {
            if (!this.wmy) {
                b = c.pageX - this.offsetLeft;
                g = c.pageY - this.offsetTop
            } else {
                b = Math.round((c.pageX - this.offsetLeft) / this.nwu);
                g = Math.round((c.pageY - this.offsetTop) / this.vhb)
            }
        }
        this.bpu = b;
        this.tgy = g;
        if (d && d.izz()) {
            if (d.fmi(b, g)) {
                return
            }
        }
        if (this.ayr && this.ayr.izz()) {
            this.ayr.yue(b, g);
            f = true
        }
        if (this.faj && this.faj.izz()) {
            if (this.faj.rsv(b, g)) {
                if (f === false) {
                    f = true
                }
            }
        }
        if (this.gik && this.gik.izz()) {
            if (this.gik.rsv(b, g)) {
                if (f === false) {
                    f = true
                }
            }
        }
        if (a && a.izz()) {
            if (a.rsv(b, g)) {
                if (f === false) {
                    f = true
                }
            }
        }
        if (f) {
            upo(this.jlg)
        }
        return
    };
    this.dgf = function() {
        tlg.xiv.ayr.qqz(tlg.xiv.tzi[tlg.xiv.kcw]);
        tlg.xiv.ayr.xza(true);
        tlg.xiv.ayr.yue(tlg.xiv.bpu, tlg.xiv.tgy);
        tlg.xiv.jlg();
        clearTimeout(tlg.xiv.lvs)
    };
    this.cgl = function() {
        if (tlg.xiv.dul.tyq() && !tlg.xiv.mhk) {
            tlg.xiv.rgh = false;
            tlg.xiv.mhk = true;
            tlg.xiv.hhv.psg("loading", "#stop");
            setTimeout(function() {
                tlg.xiv.rtj();
                tlg.xiv.zze()
            }, 100);
            tlg.xiv.dul.ikn("silence");
            if (tlg.tpm.moy() && tlg.tpm.mql) {
                tlg.xiv.kri()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.qku = function() {
        if (tlg.xiv.kqg) {
            if (tlg.xiv.kqg.izz()) {
                tlg.xiv.pbe()
            } else {
                tlg.xiv.imf()
            }
        }
    };
    this.son = function() {
        if (tlg.xiv.faj && tlg.xiv.faj.izz()) {
            tlg.xiv.faj.xza(false);
            tlg.xiv.gik.xza(true);
            tlg.xiv.bta.sze.psg("race", "#vjp", [tlg.xiv.language.xbi])
        } else {
            tlg.xiv.faj.xza(true);
            tlg.xiv.gik.xza(false);
            tlg.xiv.bta.sze.psg("race", "#vjp", [tlg.xiv.language.quo])
        }
        tlg.xiv.jlg()
    };
    this.qkz = function() {
        clearTimeout(tlg.xiv.jxt);
        if (tlg.xiv.bta) {
            tlg.xiv.bta.kzh(false)
        }
        tlg.xiv.gec();
        tlg.xiv.imc.eyb.div()
    };
    this.raj = function() {
        var a = tlg.xiv.hhv.djj("history");
        if (a) {
            a.kzh(false);
            a.nht(a.ofq() - 1)
        }
        tlg.xiv.csq.opi(tlg.xiv.kmb)
    };
    this.uoe = function() {
        var a = tlg.xiv.hhv.djj("history");
        if (a) {
            a.kzh(false);
            a.nht(a.ofq() + 1)
        }
        tlg.xiv.csq.xoe(tlg.xiv.kmb)
    };
    this.uow = function() {
        var a = tlg.xiv.hhv.djj("history");
        if (a) {
            a.kzh(false)
        }
        tlg.xiv.hbo()
    };
    this.awm = function() {
        var a = tlg.xiv.hhv.djj("rstat");
        if (a) {
            if (a.izz()) {
                tlg.xiv.wda()
            } else {
                tlg.xiv.lsv()
            }
        }
        tlg.xiv.jlg()
    };
    this.ovx = function() {
        if (tlg.xiv.zta() == 0) {
            tlg.xiv.kwc()
        } else {
            tlg.xiv.xeq();
            tlg.xiv.lyr();
            tlg.xiv.ibg();
            tlg.xiv.sfo()
        }
    };
    this.ude = function() {
        tlg.xiv.xeq();
        tlg.xiv.tmh();
        tlg.xiv.sfo()
    };
    this.fxg = function() {
        tlg.xiv.npq();
        if ((tlg.xiv.cfx != null && tlg.xiv.cfx != "") || tlg.tcn.jlu("sessionValue2") != null) {
            if (tlg.xiv.bta) {
                tlg.xiv.bta.sze.psg("rise", "#vjp", [(tlg.xiv.zta() == 0) ? tlg.xiv.language.nqe : tlg.xiv.language.edy, true])
            }
        }
    };
    this.imf = function() {};
    this.pbe = function() {};
    this.lsv = function() {
        var b = this.hhv.djj("rstat"),
            a = this.hhv.djj("gameb");
        if (b) {
            b.aco();
            b.xza(true)
        }
        if (a) {
            a.sze.psg("statistic", "#zkw", [1])
        }
        this.xeq();
        if (this.faj) {
            this.faj.fwn(this.zrs)
        }
        this.jlg()
    };
    this.wda = function() {
        var b = this.hhv.djj("rstat"),
            a = this.hhv.djj("gameb");
        if (b) {
            b.xza(false)
        }
        if (a) {
            a.sze.psg("statistic", "#zkw", [0])
        }
        if (this.faj) {
            this.faj.fwn(null)
        }
        this.jlg()
    };
    this.nnm = function() {
        this.enn();
        this.lvr()
    };
    this.bkb = function() {
        this.nnm()
    };
    this.dju = function() {};
    this.jrf = function() {};
    this.hbo = function() {
        tlg.xiv.csq.close()
    };
    this.wvo = function() {
        this.tuz();
        this.gox = true;
        this.brp = true;
        this.hhv.psg("history", "#xza", [true]);
        this.jlg();
        this.tmo(true)
    };
    this.qtk = function() {
        var a = this.haj(this.wmy) / 2;
        if (this.ous != null) {
            this.ous.style.top = this.offsetTop + a + (this.ore.nzo.eso.y * this.vhb) + "px";
            this.ous.style.left = this.offsetLeft + (this.ore.nzo.eso.x * this.nwu) + "px";
            this.ous.style.width = this.ore.nzo.eso.width * this.nwu + "px";
            this.ous.style.height = this.ore.nzo.eso.height * this.vhb + "px";
            this.ous.style.display = "block";
            this.wrr = true
        }
    };
    this.tuz = function() {
        var a = this.haj(this.wmy) / 2;
        if (this.ous != null) {
            this.ous.style.top = this.offsetTop + a + (this.ore.nzo.aqr.y * this.vhb) + "px";
            this.ous.style.left = this.offsetLeft + (this.ore.nzo.aqr.x * this.nwu) + "px";
            this.ous.style.width = this.ore.nzo.aqr.width * this.nwu + "px";
            this.ous.style.height = this.ore.nzo.aqr.height * this.vhb + "px";
            this.ous.style.display = "none";
            this.wrr = false
        }
    };
    this.createScreenshot = function() {
        var a = this.laf;
        if (a) {
            a.save();
            a.clearRect(this.ore.xiv.eso.x, this.ore.xiv.eso.y, this.ore.xiv.eso.width, this.ore.xiv.eso.height);
            a.drawImage(this.canvas, this.ore.xiv.eso.x, this.ore.xiv.eso.y, this.ore.xiv.eso.width, this.ore.xiv.eso.height, 0, 0, this.ore.xiv.eso.width, this.ore.xiv.eso.height);
            tlg.tpm.gxk(a, 0, 0, this.ore.xiv.eso.width, this.ore.xiv.eso.height, "black", 0.5);
            a.restore()
        }
    };
    this.jlg = function(a, d, b, c) {
        if (tlg.xiv.clv()) {
            if (tlg.xiv.brp === false) {
                tlg.xiv.uzp(a, d, b, c)
            } else {
                tlg.xiv.iqi(a, d, b, c)
            }
        }
    };
    this.kgf = function(a, b) {
        this.sfi = true;
        tlg.tpm.gxk(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.stop = function() {
        this.gec();
        this.syf();
        this.hhv.psg("loc", "#stop");
        this.hhv.psg("gameb", "#stop")
    };
    this.gec = function() {
        var a = this.hhv.djj("gameb");
        clearTimeout(this.jod);
        clearTimeout(this.djy);
        clearTimeout(this.erw);
        clearTimeout(this.gzu);
        clearTimeout(this.req);
        clearTimeout(this.shk);
        clearTimeout(this.raq);
        clearTimeout(this.csl);
        this.xeq();
        if (this.fvf) {
            this.fvf.stop();
            this.fvf.apa(-1, true)
        }
        if (this.gsa) {
            this.gsa.stop()
        }
        if (this.faj) {
            this.faj.stop()
        }
        if (this.gik) {
            this.gik.stop()
        }
        this.kzh(false);
        this.hhv.psg("topb", "#bsx", [true]);
        if (a) {
            a.sze.dsj("buttons", "#hoe", [false])
        }
        this.createScreenshot()
    };
    this.eot = function() {
        this.syf()
    };
    this.vod = function(a) {
        if (a == 0) {
            return false
        }
        return ((a % 2) == 0)
    };
    this.smf = function(a) {
        if (a == 0) {
            return false
        }
        if ((a <= 9) || (a >= 19 && a <= 27)) {
            return ((a % 2) == 1)
        } else {
            if ((a >= 12 && a <= 18) || (a >= 30 && a <= 36)) {
                return ((a % 2) == 0)
            }
        }
        return false
    };
    this.ebs = function(e) {
        var d = this.tzi[0];
        for (var c = 1, a = this.tzi.length; c < a; c++) {
            var b = this.tzi[c];
            if (e < b.value) {
                return d
            }
            if (b.value > 0) {
                d = b
            }
        }
        return d
    };
    this.twp = function(g) {
        var a = 0;
        if ("even" == g || "black" == g) {
            a = this.ajq
        } else {
            if ("odd" == g || "red" == g) {
                a = this.ajq
            } else {
                if ("1-18" == g) {
                    a = this.ajq
                } else {
                    if ("19-36" == g) {
                        a = this.ajq
                    } else {
                        if ("1-12" == g) {
                            a = this.wgg
                        } else {
                            if ("13-24" == g) {
                                a = this.wgg
                            } else {
                                if ("25-36" == g) {
                                    a = this.wgg
                                } else {
                                    if ("1/12" == g) {
                                        a = this.wgg
                                    } else {
                                        if ("2/12" == g) {
                                            a = this.wgg
                                        } else {
                                            if ("3/12" == g) {
                                                a = this.wgg
                                            } else {
                                                var b = 0;
                                                if (g.indexOf(",") > 0) {
                                                    var d = g.split(","),
                                                        f = d.length;
                                                    if (f == 2) {
                                                        a = this.nyq
                                                    } else {
                                                        a = this.pky
                                                    }
                                                } else {
                                                    if ((b = g.indexOf("-")) > 0) {
                                                        var e = parseInt(g.substring(0, b)),
                                                            c = parseInt(g.substring(b + 1));
                                                        if ((c - e) <= 2) {
                                                            a = this.pky
                                                        } else {
                                                            a = this.xdg
                                                        }
                                                    } else {
                                                        if ((b = g.indexOf(".")) > 0) {
                                                            a = this.kre
                                                        } else {
                                                            a = this.eia
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return a
    };
    this.dac = function(g) {
        var b = 0;
        if ("even" == g || "black" == g) {
            b = this.exj
        } else {
            if ("odd" == g || "red" == g) {
                b = this.exj
            } else {
                if ("1-18" == g) {
                    b = this.exj
                } else {
                    if ("19-36" == g) {
                        b = this.exj
                    } else {
                        if ("1-12" == g) {
                            b = this.ppl
                        } else {
                            if ("13-24" == g) {
                                b = this.ppl
                            } else {
                                if ("25-36" == g) {
                                    b = this.ppl
                                } else {
                                    if ("1/12" == g) {
                                        b = this.ppl
                                    } else {
                                        if ("2/12" == g) {
                                            b = this.ppl
                                        } else {
                                            if ("3/12" == g) {
                                                b = this.ppl
                                            } else {
                                                var a = 0;
                                                if (g.indexOf(",") > 0) {
                                                    var d = g.split(","),
                                                        f = d.length;
                                                    if (f == 2) {
                                                        b = this.tkh
                                                    } else {
                                                        b = this.emg
                                                    }
                                                } else {
                                                    if ((a = g.indexOf("-")) > 0) {
                                                        var e = parseInt(g.substring(0, a)),
                                                            c = parseInt(g.substring(a + 1));
                                                        if ((c - e) <= 2) {
                                                            b = this.emg
                                                        } else {
                                                            b = this.zov
                                                        }
                                                    } else {
                                                        if ((a = g.indexOf(".")) > 0) {
                                                            b = this.fin
                                                        } else {
                                                            b = this.sqw
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return b
    };
    this.ufy = function(j, f) {
        var g = false;
        if ("even" == j && f != 0 && this.vod(f)) {
            g = true
        } else {
            if ("odd" == j && f != 0 && !this.vod(f)) {
                g = true
            } else {
                if ("black" == j && f != 0 && !this.smf(f)) {
                    g = true
                } else {
                    if ("red" == j && f != 0 && this.smf(f)) {
                        g = true
                    } else {
                        if ("1-18" == j && f >= 1 && f <= 18) {
                            g = true
                        } else {
                            if ("19-36" == j && f >= 19 && f <= 36) {
                                g = true
                            } else {
                                if ("1-12" == j && f >= 1 && f <= 12) {
                                    g = true
                                } else {
                                    if ("13-24" == j && f >= 13 && f <= 24) {
                                        g = true
                                    } else {
                                        if ("25-36" == j && f >= 25 && f <= 36) {
                                            g = true
                                        } else {
                                            if ("1/12" == j && this.jbs(f) == 1) {
                                                g = true
                                            } else {
                                                if ("2/12" == j && this.jbs(f) == 2) {
                                                    g = true
                                                } else {
                                                    if ("3/12" == j && this.jbs(f) == 3) {
                                                        g = true
                                                    } else {
                                                        var a = 0;
                                                        if (j.indexOf(",") > 0) {
                                                            var d = j.split(",");
                                                            for (var c = 0; c < d.length; c++) {
                                                                if (parseInt(d[c]) == f) {
                                                                    g = true;
                                                                    break
                                                                }
                                                            }
                                                        } else {
                                                            if ((a = j.indexOf("-")) > 0) {
                                                                var e = parseInt(j.substring(0, a)),
                                                                    b = parseInt(j.substring(a + 1));
                                                                if (f >= e && f <= b) {
                                                                    g = true
                                                                }
                                                            } else {
                                                                if ((a = j.indexOf(".")) > 0) {
                                                                    var e = parseInt(j.substring(0, a)),
                                                                        b = parseInt(j.substring(a + 1));
                                                                    if (f == e || f == (e + 1) || f == b || f == (b - 1)) {
                                                                        g = true
                                                                    }
                                                                } else {
                                                                    if (j == f) {
                                                                        g = true
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return g
    };
    this.jbs = function(b) {
        if (b == 0) {
            return 0
        }
        var a = b % 3;
        if (a == 0) {
            return 3
        }
        return a
    };
    this.tps = function(b, e) {
        if (b == null || b.value <= 0) {
            return
        }
        var a = e.value + b.value,
            c = this.zta() + b.value,
            d = 0;
        if (c <= this.jbw && c <= this.ybc && a <= this.twp(e.frt)) {
            this.lyr();
            this.qui(e.frt, b.value);
            this.sfo();
            this.dul.hku("jeton");
            this.dul.ikn("jeton");
            this.bhi = 0;
            if (this.bta) {
                this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true]);
                this.bta.sze.psg("rise", "#vjp", [(this.zta() == 0) ? this.language.nqe : this.language.edy, true])
            }
            this.hhv.psg("ginfo", "#apa", ["", true]);
            this.xeq();
            if (c < this.xjv) {
                this.mts(this.language.jjt + " " + this.hut(this.xjv), tlg.roulette.xbr.scj)
            } else {
                if (a < this.dac(e.frt)) {
                    this.mts(this.language.civ + " " + this.hut(this.dac(e.frt)), tlg.roulette.xbr.scj)
                }
            }
        } else {
            if (c > this.ybc) {
                this.dul.hku("limit");
                this.dul.ikn("limit");
                this.mts(this.language.fqj + " " + this.hut(this.ybc), tlg.roulette.xbr.scj)
            } else {
                if (c > this.jbw) {
                    this.mts(this.language.mvx, tlg.roulette.xbr.scj)
                } else {
                    if (a > this.twp(e.frt)) {
                        this.dul.hku("limit");
                        this.dul.ikn("limit");
                        this.mts(this.language.fjb + " " + this.hut(this.twp(e.frt)), tlg.roulette.xbr.scj)
                    }
                }
            }
            if (a > this.twp(e.frt)) {
                d = this.twp(e.frt) - e.value;
                if ((this.zta() + d) <= this.ybc && (this.zta() + d <= this.jbw)) {
                    this.mts(this.language.fjb + " " + this.hut(this.twp(e.frt)), tlg.roulette.xbr.scj);
                    this.lyr();
                    if (d > 0) {
                        this.qui(e.frt, d)
                    }
                    this.sfo();
                    this.bhi = 0;
                    if (this.bta) {
                        this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true]);
                        this.bta.sze.psg("rise", "#vjp", [(this.zta() == 0) ? this.language.nqe : this.language.edy, true])
                    }
                }
            }
        }
        this.jsg();
        this.jlg()
    };
    this.mjt = function(b, f) {
        var e = b.split("|"),
            c = 0,
            a = false;
        this.lyr();
        for (var d = 0; d < e.length; d++) {
            if (this.wnt(e[d], f) === false) {
                a = true
            }
        }
        c = this.zta();
        if (c > this.jbw) {
            this.flw();
            this.bhi = 0;
            if (this.bta) {
                this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true])
            }
            this.mts(this.language.mvx, tlg.roulette.xbr.scj);
            return
        } else {
            if (c > this.ybc) {
                this.dul.hku("limit");
                this.dul.ikn("limit");
                this.mts(this.language.fqj + " " + this.hut(this.ybc), tlg.roulette.xbr.scj);
                this.flw();
                return
            } else {
                this.dul.hku("jeton");
                this.dul.ikn("jeton");
                this.bhi = 0;
                if (this.bta) {
                    this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true]);
                    this.bta.sze.psg("rise", "#vjp", [(this.zta() == 0) ? this.language.nqe : this.language.edy, true])
                }
                if (c < this.xjv) {
                    this.mts(this.language.jjt + " " + this.hut(this.xjv), tlg.roulette.xbr.scj)
                }
                if (!a) {
                    this.hhv.psg("ginfo", "#apa", ["", true])
                }
            }
        }
        this.sfo();
        this.jsg();
        this.jlg()
    };
    this.ymu = function(a) {
        if (a == null) {
            return
        }
        this.qui(a.frt, 0);
        this.bhi = 0;
        if (this.bta) {
            this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true]);
            this.bta.sze.psg("rise", "#vjp", [(this.zta() == 0) ? this.language.nqe : this.language.edy, true])
        }
        this.xeq();
        this.jsg();
        this.jlg()
    };
    this.sfo = function() {
        var a = this.fbq();
        tlg.tcn.yjp("sessionRouletteValue1", a)
    };
    this.zta = function() {
        var c = 0;
        for (var b = 0, a = this.xvv.length; b < a; b++) {
            c += this.xvv[b].value
        }
        return c
    };
    this.zmn = function() {
        return false
    };
    this.kwc = function() {
        if (this.cfx != null && this.cfx != "") {
            this.syb(this.cfx)
        } else {
            if (tlg.tcn.jlu("sessionRouletteValue2") != null) {
                this.syb(tlg.tcn.jlu("sessionRouletteValue2"))
            }
        }
    };
    this.syb = function(a) {
        if (this.jbw > 0) {
            if (a != null && a != "") {
                this.urv(a);
                this.sfo();
                if (this.bta) {
                    this.bta.sze.psg("rise", "#vjp", [(this.zta() == 0) ? this.language.nqe : this.language.edy, true])
                }
            }
        }
        if (this.jbw > this.zta()) {
            this.dul.hku("jeton");
            this.dul.ikn("jeton");
            this.jsg();
            this.jlg()
        } else {
            this.npq();
            this.mts(this.language.mvx, tlg.roulette.xbr.scj)
        }
    };
    this.ibg = function() {
        var e = this.zta(),
            g = 0,
            b = null,
            a = -1,
            j = [],
            c = 0,
            d = 0;
        for (var f = 0; f < this.xvv.length; f++) {
            b = this.xvv[f];
            if (b.value > 0) {
                c = this.twp(b.frt);
                d = this.dac(b.frt);
                if ((e + b.value) <= this.ybc && (b.value + b.value) <= c && (e + b.value) <= this.jbw) {
                    e += b.value;
                    b.value += b.value;
                    this.dul.hku("jeton");
                    this.dul.ikn("jeton");
                    if (e < this.xjv) {
                        a = (a < 1) ? 1 : a
                    } else {
                        if ((b.value) < d) {
                            a = (a < 0) ? 0 : a
                        }
                    }
                } else {
                    if ((e + b.value) > this.ybc) {
                        j.push(f);
                        a = (a < 3) ? 3 : a
                    } else {
                        if ((e + b.value) > this.jbw) {
                            j.push(f);
                            a = (a < 4) ? 4 : a
                        } else {
                            if ((b.value + b.value) > c) {
                                a = (a < 2) ? 2 : a
                            }
                        }
                    }
                    if ((b.value + b.value) > c) {
                        g = c - b.value;
                        if ((e + b.value <= this.ybc) && (e + b.value <= this.jbw)) {
                            e += g;
                            b.value += g
                        }
                    }
                }
            }
        }
        for (var f = 0; f < j.length; f++) {
            b = this.xvv[j[f]];
            c = this.twp(b.frt);
            g = b.value;
            if (e + g > this.jbw) {
                g = this.jbw - e
            }
            if (e + g > this.ybc) {
                g = this.ybc - e
            }
            if (b.value + g > c) {
                g = c - b.value
            }
            if (g > 0) {
                b.value += g;
                e += g
            }
        }
        if (a < 0) {
            this.hhv.psg("ginfo", "#apa", ["", true])
        } else {
            this.dul.hku("limit");
            this.dul.ikn("limit");
            if (a === 0) {
                this.mts(this.language.civ, tlg.roulette.xbr.scj)
            } else {
                if (a === 1) {
                    this.mts(this.language.jjt, tlg.roulette.xbr.scj)
                } else {
                    if (a === 2) {
                        this.mts(this.language.fjb, tlg.roulette.xbr.scj)
                    } else {
                        if (a === 3) {
                            this.mts(this.language.fqj, tlg.roulette.xbr.scj)
                        } else {
                            if (a === 4) {
                                this.mts(this.language.mvx, tlg.roulette.xbr.scj)
                            }
                        }
                    }
                }
            }
        }
        this.jsg();
        this.jlg()
    };
    this.lyr = function() {
        var a = this.fbq();
        if (a != null && "" != a) {
            this.mvs.push(a)
        }
    };
    this.npq = function() {
        this.lys();
        this.mvs = [];
        this.bhi = 0;
        if (this.bta) {
            this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true])
        }
        this.jsg();
        this.jlg()
    };
    this.tmh = function() {
        if (this.bhi < 3 && this.mvs.length > 0) {
            this.dul.hku("jeton");
            this.dul.ikn("jeton");
            this.lys();
            var a = this.mvs.pop();
            if (a != null) {
                this.bhi += 1;
                this.urv(a)
            } else {
                this.bhi = 0
            }
            if (this.bhi == 3) {
                if (this.bta) {
                    this.bta.sze.psg("undo", "#vjp", [this.language.zwt, true])
                }
            } else {
                if (this.bta) {
                    this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true])
                }
            }
        } else {
            this.npq()
        }
        if (this.bta) {
            this.bta.sze.psg("rise", "#vjp", [(this.zta() == 0) ? this.language.nqe : this.language.edy, true])
        }
        this.jsg();
        this.jlg()
    };
    this.flw = function() {
        var a = 0;
        this.lys();
        a = this.mvs.pop();
        if (a != null) {
            this.urv(a)
        }
        this.jsg();
        this.jlg()
    };
    this.lys = function() {
        for (var c = 0, a = this.xvv.length; c < a; c++) {
            var b = this.xvv[c];
            b.value = 0
        }
        if (this.faj) {
            this.faj.xig(this.xvv)
        }
        if (this.gik) {
            this.gik.xig(this.xvv)
        }
        this.xvv = [];
        if (this.faj) {
            this.faj.zlq(this.xvv)
        }
        if (this.gik) {
            this.gik.zlq(this.xvv)
        }
    };
    this.fbq = function() {
        var c = "";
        for (var d = 0, a = this.xvv.length; d < a; d++) {
            var b = this.xvv[d];
            if (b.value > 0) {
                c += b.toString()
            }
            if (d < this.xvv.length - 1) {
                c += "|"
            }
        }
        return c
    };
    this.urv = function(c) {
        var e = c.split("|");
        for (var d = 0, a = e.length; d < a; d++) {
            var b = e[d],
                f = b.split("$");
            this.wnt(f[0], parseInt(f[1]))
        }
        this.jsg()
    };
    this.wnt = function(a, b) {
        if (a != null && a != "null" && a != "") {
            if (this.xsh === true) {
                this.qui(a, b);
                return true
            } else {
                var c = this.faj.vjc(a);
                if (c.value + b > this.twp(a)) {
                    this.dul.hku("limit");
                    this.dul.ikn("limit");
                    this.mts(this.language.fjb + " " + this.hut(this.twp(a)), tlg.roulette.xbr.scj);
                    if (this.twp(a) - c.value > 0) {
                        this.qui(a, this.twp(a) - c.value)
                    }
                    return false
                } else {
                    if (c.value + b < this.dac(a)) {
                        this.mts(this.language.civ + " " + this.hut(this.dac(a)), tlg.roulette.xbr.scj)
                    }
                    this.qui(a, b);
                    return true
                }
            }
        }
        return true
    };
    this.qui = function(c, f) {
        var e = false,
            b = null;
        for (var d = 0, a = this.xvv.length; d < a && !e; d++) {
            if (this.xvv[d].frt === c) {
                e = true;
                if (f === 0) {
                    this.xvv[d].value = f
                } else {
                    this.xvv[d].value += f
                }
            }
        }
        if (!e) {
            b = new bgd();
            b.frt = c;
            b.value = f;
            this.xvv.push(b)
        }
    };
    this.gyx = function(d) {
        var b = this.hhv.djj("rstat");
        this.akz = true;
        if (this.tzi && this.tzi.length > 0) {
            this.tzi[0].value = d.aaa;
            this.tzi[1].value = d.oiq;
            this.tzi[2].value = d.trq;
            this.tzi[3].value = d.xyw;
            this.tzi[4].value = d.aam
        }
        this.cfx = d.cfx;
        if (this.cfx != "" && this.cfx != null) {
            tlg.tcn.yjp("sessionRouletteValue2", this.cfx)
        }
        if (this.ykd) {
            for (var c = 0, a = d.iuu.length; c < a; c++) {
                this.ykd.twq(d.iuu[c])
            }
        }
        this.xjv = d.xjv || d.aaa;
        this.sqw = d.sqw || d.aaa;
        this.tkh = d.tkh || d.aaa;
        this.emg = d.emg || d.aaa;
        this.fin = d.fin || d.aaa;
        this.zov = d.zov || d.aaa;
        this.ppl = d.ppl || d.aaa;
        this.exj = d.exj || d.aaa;
        this.ybc = d.ybc;
        this.eia = d.eia;
        this.nyq = d.nyq;
        this.pky = d.pky;
        this.kre = d.kre;
        this.xdg = d.xdg;
        this.wgg = d.wgg;
        this.ajq = d.ajq;
        this.lys();
        this.kmb = d.kmb;
        this.jbw = d.jbw;
        this.win = d.win;
        this.zrs = d.vnu;
        this.hhv.psg("rinfo", "#oej", [this.jbw]);
        this.hhv.psg("rinfo", "#setMinBet", [this.xjv]);
        this.hhv.psg("rinfo", "#setMaxBet", [this.ybc]);
        this.hhv.psg("rinfo", "#xxy", [this.win]);
        this.hhv.psg("loc", "#jcq", [(this.jbw === 0) ? 1 : 0]);
        if (b) {
            b.vbu(d.vnu);
            b.aco()
        }
        if (this.faj) {
            this.faj.uia()
        }
        if (this.gik) {
            this.gik.uia();
            this.gik.smp()
        }
    };
    this.yfv = function(c, b, e, d, i, j, a, f, g) {};
    this.aul = function(a) {
        this.ivf();
        this.imc.blq(a)
    };
    this.mjs = function(a) {
        clearTimeout(this.csl);
        if (this.fvf) {
            this.fvf.ehi(a)
        }
        this.vgk(0);
        this.jsg();
        this.ozp();
        if (this.tzo != "" && this.efb() === false) {
            this.hhv.psg("ginfo", "#gid", [this.tzo, true])
        }
    };
    this.ozp = function() {
        var a = false;
        if (tlg.xiv.hpc) {
            a = (tlg.xiv.zta() > 0);
            tlg.xiv.fxg();
            tlg.xiv.czu();
            tlg.xiv.hhv.psg("ginfo", "#apa", ["", true]);
            if (!tlg.xiv.akz && !a) {
                if (tlg.xiv.zmn() === false) {
                    tlg.xiv.dul.ikn(tlg.xiv.bhv(tlg.tcn.jlu("sessionValue1")) + "place")
                }
            }
            tlg.xiv.kzh(true);
            if (!tlg.xiv.etx) {
                if (tlg.tcn.jlu("sessionRouletteValue1") != null) {
                    tlg.xiv.urv(tlg.tcn.jlu("sessionRouletteValue1"));
                    if (tlg.xiv.bta) {
                        tlg.xiv.bta.sze.psg("rise", "#vjp", [(tlg.xiv.zta() == 0) ? tlg.xiv.language.nqe : tlg.xiv.language.edy, true])
                    }
                }
            }
            if (!tlg.xiv.etx) {
                if (tlg.xiv.fvf) {
                    tlg.xiv.fvf.start(0, tlg.xiv.hyg)
                }
            } else {
                if (tlg.xiv.fvf) {
                    tlg.xiv.fvf.apa(0, true, tlg.xiv.hyg)
                }
            }
            tlg.xiv.jlg()
        } else {
            setTimeout(tlg.xiv.ozp, 500)
        }
    };
    this.jht = function() {
        if (this.faj) {
            this.faj.kph()
        }
        if (this.gik) {
            this.gik.kph()
        }
        this.xeq();
        this.hhv.psg("patternp", "#mcn");
        if (this.zta() > 0) {
            if (this.zta() < this.xjv) {
                this.lys()
            } else {
                for (var c = 0, a = this.xvv.length; c < a; c++) {
                    if (this.xvv[c].value < this.dac(this.xvv[c].frt)) {
                        this.xvv[c].value = 0
                    }
                }
                if (this.zta() < this.xjv) {
                    this.lys()
                }
            }
        }
        this.dul.hku(this.bhv(tlg.tcn.jlu("sessionValue1")) + "game_will_start");
        this.dul.ikn(this.bhv(tlg.tcn.jlu("sessionValue1")) + "no_more_bets");
        var b = this.fbq();
        this.cfx = b;
        this.imc.vds(b);
        this.kzh(false);
        if (this.fvf) {
            this.fvf.stop();
            this.fvf.apa(2, true, this.hyg)
        }
        this.jsg();
        this.jlg()
    };
    this.fbs = function() {
        var a = this.hhv.djj("rstat");
        this.mvs = [];
        this.bhi = 0;
        if (a && a.izz()) {
            this.wda()
        }
        if (this.kqg.izz() && this.zta() > 0) {
            this.pbe()
        }
        if (this.zta() == 0) {
            this.urv(this.cfx)
        }
        tlg.tcn.xeo("sessionRouletteValue1");
        this.kzh(false);
        this.hhv.psg("rinfo", "#oej", [this.jbw, true]);
        if (this.bta) {
            this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true])
        }
        if (this.fvf) {
            this.fvf.stop();
            this.fvf.apa(2, true, this.hyg)
        }
        this.vgk(this.kmb);
        this.jsg()
    };
    this.cyq = function(a, b, c) {};
    this.olp = function(a, b, d) {
        var c = this.hhv.djj("rstat");
        tlg.tcn.xeo("sessionRouletteValue1");
        if (this.cfx != "" && this.cfx != null) {
            tlg.tcn.yjp("sessionRouletteValue2", this.cfx)
        }
        if (c && c.izz()) {
            this.wda()
        }
        if (this.kqg && this.kqg.izz()) {
            this.pbe()
        }
        this.win = b;
        this.jds = a;
        this.jbw = d;
        this.pck = false;
        if (b > 0) {
            this.hpc = false;
            this.hhv.psg("rinfo", "#rnk", [this.win]);
            this.hhv.psg("rinfo", "#xxy", [this.win]);
            this.hhv.psg("rinfo", "#xxy", [this.win]);
            this.hhv.psg("rinfo", "#oej", [this.jbw - this.win]);
            if (this.fvf) {
                this.fvf.apa(-1, false)
            }
        } else {
            this.hpc = true;
            if (this.fvf) {
                this.fvf.apa(-1, false)
            }
            this.hhv.psg("rinfo", "#oej", [this.jbw])
        }
        this.kzh(false);
        this.jsg();
        this.pjl();
        if (this.skp == true) {
            this.dul.ikn(this.bhv(tlg.tcn.jlu("sessionValue1")) + a.toString())
        } else {
            this.gzu = setTimeout(this.bxs, 5000)
        }
        this.jlg()
    };
    this.stj = function(c) {
        var d = this.hhv.djj("rstat");
        if (d && d.izz()) {
            this.wda()
        }
        if (this.kqg && this.kqg.izz() && this.zta() > 0) {
            this.pbe()
        }
        this.dul.hku(this.bhv(tlg.tcn.jlu("sessionValue1")) + "place");
        this.dul.ikn(this.bhv(tlg.tcn.jlu("sessionValue1")) + "game_will_start");
        if (this.fvf) {
            this.fvf.fwd(c);
            this.fvf.apa(1, true, this.hyg)
        }
        this.jsg();
        if (this.zta() > 0) {
            if (this.zta() < this.xjv) {
                this.mts(this.language.jjt + " " + this.hut(this.xjv), tlg.roulette.xbr.scj)
            } else {
                for (var b = 0, a = this.xvv.length; b < a; b++) {
                    if (this.xvv[b].value > 0 && this.xvv[b].value < this.dac(this.xvv[b].frt)) {
                        this.mts(this.language.civ, tlg.roulette.xbr.scj);
                        break
                    }
                }
            }
            if (this.faj) {
                this.faj.bhx()
            }
            if (this.gik) {
                this.gik.bhx()
            }
        }
    };
    this.qek = function() {
        var a = this.hhv.djj("rstat");
        if (this.cfx != "" && this.cfx != null) {
            tlg.tcn.yjp("sessionRouletteValue2", this.cfx)
        }
        if (a && a.izz()) {
            this.wda()
        }
        if (this.kqg && this.kqg.izz() && this.zta() > 0) {
            this.pbe()
        }
        this.mvs = [];
        this.bhi = 0;
        tlg.tcn.xeo("sessionRouletteValue1");
        this.kzh(false);
        if (this.bta) {
            this.bta.sze.psg("undo", "#vjp", [this.language.gqh, true])
        }
        if (this.fvf) {
            this.fvf.stop();
            this.fvf.apa(2, true, this.hyg)
        }
        this.jsg();
        if (this.etx === false) {
            this.dul.ikn("ballstart")
        }
    };
    this.cha = function() {
        this.kzh(false);
        if (this.fvf) {
            this.fvf.apa(5, true, true)
        }
        this.jsg()
    };
    this.gbf = function(a) {
        var b = this.hhv.djj("rstat");
        this.zrs = a;
        if (b) {
            b.vbu(a);
            b.aco()
        }
        if (this.gik) {
            this.gik.smp()
        }
    };
    this.mhl = function() {
        if (this.fvf) {
            this.fvf.ddx(this.language)
        }
        if (this.bta) {
            this.bta.mhl(this.language)
        }
        if (this.kqg) {
            this.kqg.mhl(this.language)
        }
        this.hhv.psg("history", "#ddx", [this.language]);
        this.hhv.psg("gameb", "#ddx", [this.language]);
        this.hhv.psg("patternp", "#ddx", [this.language]);
        this.hhv.psg("autop", "#mhl", [this.language])
    };
    this.vgk = function(b) {
        var c = this.hhv.djj("ginfo"),
            a = this.hhv.djj("topi");
        this.kmb = b;
        if (c) {
            c.nta((b > 0) ? b : "-", true)
        }
        if (a) {
            a.zvn("id", (b > 0) ? b : "")
        }
    };
    this.cih = function(a) {
        this.jbw = a;
        this.hhv.psg("rinfo", "#oej", [this.jbw, true])
    };
    this.jsg = function() {
        var a = this.hhv.djj("gameb");
        this.hhv.psg("rinfo", "#wjr", [this.zta(), true]);
        if (this.faj) {
            this.faj.xig(this.xvv);
            this.faj.zlq(this.xvv)
        }
        if (this.gik) {
            this.gik.xig(this.xvv);
            this.gik.zlq(this.xvv)
        }
        if (a) {
            a.sze.psg("history", "#hoe", [this.zta() === 0])
        }
    };
    this.psz = function(a) {
        this.hhv.psg("winn", "#rnk", [this.win]);
        this.hhv.psg("winn", "#nct", [a]);
        if (this.faj) {
            this.faj.grg(a)
        }
        if (this.gik) {
            this.gik.grg(a)
        }
        if (a >= 0 && this.win > 0) {
            this.hhv.psg("winp", "#rnk", [this.win]);
            this.hhv.psg("winp", "#xza", [true, false])
        }
        this.jlg()
    };
    this.pjl = function() {
        this.psz(this.jds);
        if (this.faj) {
            this.faj.mvn()
        }
        if (this.gik) {
            this.gik.mvn()
        }
        if (this.etx == true && this.win == 0) {
            this.req = setTimeout(this.faz, 4000)
        }
    };
    this.czu = function() {
        if (!tlg.xiv.akz && !tlg.xiv.pck) {
            if (tlg.xiv.ykd) {
                tlg.xiv.ykd.twq(tlg.xiv.jds);
                tlg.xiv.pck = true
            }
        }
        tlg.xiv.psz(-1);
        if (tlg.xiv.faj) {
            tlg.xiv.faj.czu()
        }
        if (tlg.xiv.gik) {
            tlg.xiv.gik.czu()
        }
        tlg.xiv.hhv.psg("winp", "#xza", [false, false]);
        tlg.xiv.jlg()
    };
    this.qje = function() {
        tlg.xiv.olp(tlg.xiv.jds, tlg.xiv.win, tlg.xiv.jbw)
    };
    this.faz = function() {
        tlg.xiv.mjs(0)
    };
    this.kzh = function(d) {
        var c = this.hhv.djj("gameb");
        for (var b = 0, a = this.tzi.length; b < a; b++) {
            this.tzi[b].hoe(d)
        }
        if (this.ayr) {
            this.ayr.hoe(d);
            if (d === false) {
                this.ayr.xza(d)
            }
        }
        if (this.bta) {
            if (d === true) {
                this.bta.sze.dsj("buttons", "#hoe", [d])
            } else {
                this.bta.sze.dsj("gbuttons", "#hoe", [d])
            }
        }
        if (c) {
            c.sze.dsj("gbuttons", "#hoe", [d])
        }
        if (this.faj) {
            this.faj.hoe(d);
            if (d === false) {
                this.faj.kzh(this.state !== tlg.roulette.ezj.gvn)
            } else {
                this.faj.kzh(d)
            }
        }
        if (this.gik) {
            this.gik.hoe(d)
        }
        if (this.gsa) {
            if (d === false) {
                this.gsa.uhr = null
            } else {
                if (this.gsa.unh() === true) {
                    this.gsa.uhr = this.nwd;
                    d = false
                }
            }
        }
        this.dnp(d)
    };
    this.nwd = function() {
        tlg.xiv.dnp(true)
    };
    this.tmo = function(a) {
        this.hhv.psg("history", "#kzh", [a])
    };
    this.mde = function() {
        if (tlg.xiv.jds != 0) {
            if (tlg.xiv.smf(tlg.xiv.jds)) {
                tlg.xiv.dul.ikn(tlg.xiv.bhv(tlg.tcn.jlu("sessionValue1")) + "red")
            } else {
                tlg.xiv.dul.ikn(tlg.xiv.bhv(tlg.tcn.jlu("sessionValue1")) + "black")
            }
        }
    };
    this.snh = function() {
        var b = tlg.xiv.zta(),
            a = (tlg.xiv.win - b) / b;
        if (tlg.xiv.win > 0) {
            if (a <= 2) {
                tlg.xiv.dul.ikn("win1")
            } else {
                if (a > 2 && a <= 6) {
                    tlg.xiv.dul.ikn("win2")
                } else {
                    if (a > 6 && a <= 9) {
                        tlg.xiv.dul.ikn("win3")
                    } else {
                        if (a > 9 && a <= 12) {
                            tlg.xiv.dul.ikn("win4")
                        } else {
                            if (a > 12 && a <= 18) {
                                tlg.xiv.dul.ikn("win5")
                            } else {
                                if (a > 18) {
                                    tlg.xiv.dul.ikn("win6")
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (tlg.xiv.etx === false && tlg.xiv.state !== tlg.roulette.ezj.hqw) {
                tlg.xiv.csl = setTimeout(tlg.xiv.kci, 4000)
            }
        }
    };
    this.bxs = function() {
        if (tlg.xiv.win > 0) {
            if (tlg.xiv.faj) {
                tlg.xiv.faj.pjl()
            }
            if (tlg.xiv.gik) {
                tlg.xiv.gik.pjl()
            }
            if (tlg.xiv.etx == true) {
                tlg.xiv.psz(-1)
            }
            tlg.xiv.vtd()
        }
    };
    this.vtd = function() {
        this.sex = Math.round(this.win / 10);
        if (this.sex == 0) {
            this.sex = 1
        }
        this.gze = this.win;
        this.rdr = 0;
        this.tbn = 0;
        this.djy = setTimeout(this.dmy, 2000)
    };
    this.dmy = function() {
        var a = 0,
            b = tlg.xiv.gui,
            c = 0;
        if (tlg.xiv.gze > 0) {
            if (tlg.xiv.rdr == 0) {
                tlg.xiv.rdr = new Date().getTime();
                tlg.xiv.dul.ikn("collect")
            }
            a = tlg.xiv.sex;
            tlg.xiv.gze -= a;
            tlg.xiv.tbn++;
            if (tlg.xiv.gze < 0) {
                tlg.xiv.gze = 0
            }
            tlg.xiv.hhv.psg("winp", "#rnk", [tlg.xiv.gze, false]);
            tlg.xiv.hhv.psg("rinfo", "#rnk", [tlg.xiv.gze, false]);
            tlg.xiv.hhv.psg("rinfo", "#oej", [(tlg.xiv.jbw - tlg.xiv.gze), false]);
            tlg.xiv.jlg();
            c = new Date().getTime();
            b = tlg.xiv.gui + (tlg.xiv.tbn * tlg.xiv.gui - (c - tlg.xiv.rdr));
            tlg.xiv.djy = setTimeout(tlg.xiv.dmy, b)
        } else {
            clearTimeout(tlg.xiv.djy);
            tlg.xiv.dul.hku("collect");
            tlg.xiv.dul.ikn("collect1");
            tlg.xiv.hhv.psg("winp", "#rnk", [0, false]);
            tlg.xiv.hhv.psg("rinfo", "#oej", [(tlg.xiv.jbw), false]);
            tlg.xiv.hhv.psg("rinfo", "#rnk", [0, false]);
            tlg.xiv.hhv.psg("rinfo", "#xxy", [tlg.xiv.win]);
            tlg.xiv.hpc = true;
            tlg.xiv.jlg();
            if (tlg.xiv.etx == true) {
                tlg.xiv.mjs(0)
            } else {
                if (tlg.xiv.state !== tlg.roulette.ezj.hqw) {
                    tlg.xiv.csl = setTimeout(tlg.xiv.kci, 500)
                }
            }
        }
    };
    this.kci = function() {
        clearTimeout(tlg.xiv.csl);
        if (tlg.xiv.state !== tlg.roulette.ezj.hqw) {
            tlg.xiv.fxg();
            if (tlg.xiv.fvf) {
                tlg.xiv.fvf.apa(10, false, true)
            }
            tlg.xiv.kzh(true);
            tlg.xiv.czu();
            tlg.xiv.zmn()
        }
    };
    this.bhv = function(c) {
        if (c == tlg.language.US) {
            c = tlg.language.EN
        } else {
            if (c == tlg.language.AT) {
                c = tlg.language.DE
            }
        }
        for (var b = 0, a = this.txt.length; b < a; b++) {
            if (c == this.txt[b]) {
                return this.txt[b]
            }
        }
        return this.txt[0]
    };
    this.kut = function(a, b) {
        if (this.zpe && this.hmp) {
            this.stop();
            this.mts(a, tlg.roulette.xbr.zom)
        } else {
            if (a === this.language.gyg) {
                this.huc(a, " ")
            } else {
                this.huc(a)
            }
        }
        if (b) {
            if (!this.brp && this.imc.eyb.shx == 0 && tlg.fxx.value46 > 0) {
                this.ndf((this.sjr) ? tlg.fxx.value71 : tlg.fxx.value47)
            } else {
                setTimeout(this.ndx, tlg.fxx.value10)
            }
        }
    };
    this.wcn = function(a) {
        if (a == tlg.cvg.roulette.okt) {
            this.mts(this.language.yvk, tlg.roulette.xbr.zom);
            this.fxg()
        } else {
            if (a >= tlg.cvg.zmu) {
                this.stop();
                if (this.bta) {
                    this.bta.kzh(false);
                    this.bta.sze.psg("exit", "#hoe", [true])
                }
                this.dnp(false);
                clearTimeout(this.ofn);
                this.ofn = -1;
                this.tuz();
                this.jxt = setTimeout(this.ndx, 10000);
                this.jvo([{
                    mlq: a
                }])
            }
        }
    };
    this.mts = function(c, b) {
        var a = this.hhv.djj("rmsg");
        clearTimeout(this.shk);
        this.wda();
        if (a) {
            a.apa("", c, b);
            a.xza(true)
        } else {
            this.hhv.psg("ginfo", "#apa", [c, true])
        }
        this.jlg();
        this.shk = setTimeout(this.xeq, this.xyd)
    };
    this.xeq = function() {
        var a = tlg.xiv.hhv.djj("rmsg");
        if (tlg.xiv.shk >= 0) {
            clearTimeout(tlg.xiv.shk);
            tlg.xiv.shk = -1;
            if (a) {
                a.xza(false)
            } else {
                tlg.xiv.hhv.psg("ginfo", "#apa", [""])
            }
            tlg.xiv.jlg()
        }
    };
    this.mcd = function() {
        var a = tlg.xiv.hhv.djj("topb");
        clearTimeout(tlg.xiv.ofn);
        tlg.xiv.ofn = -1;
        if (tlg.xiv.hpc == false || (a && a.izz())) {
            tlg.xiv.ivf()
        } else {
            tlg.xiv.hyg = true;
            if (tlg.xiv.fvf) {
                tlg.xiv.fvf.wyt()
            }
        }
    };
    this.lrw = function() {
        this.hyg = false;
        if (this.fvf) {
            this.fvf.rby()
        }
        this.ivf()
    };
    this.ivf = function() {
        if (this.ofn < 0) {
            this.ofn = setTimeout(this.mcd, this.jfg)
        } else {
            clearTimeout(this.ofn);
            this.ofn = -1;
            this.ofn = setTimeout(this.mcd, this.jfg)
        }
    }
}
zsr.prototype = new qlc;

function pos() {
    this.cth = "";
    this.jft = null;
    this.btp = "verdana";
    this.apl = "";
    this.jmg = "white";
    this.ykb = "black";
    this.wee = "red";
    this.jcm = "white";
    this.cbz = 14;
    this.hdf = 2;
    this.ejo = 3;
    this.ler = function(a) {
        try {
            this.btp = a.font;
            this.apl = a.stb;
            this.jmg = a.gmj;
            this.ykb = a.backgroundColor;
            this.wee = a.zvd;
            this.jcm = a.borderColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        try {
            this.cbz = a.fontSize;
            this.hdf = a.nlj;
            this.ejo = a.kui
        } catch (b) {
            console.error(b)
        }
    };
    this.nta = function(a, b) {
        this.cth = (a != "-" && a > 0) ? this.parent.language.vzb + " - " + this.parent.language.arj + ": " + a : "";
        this.jft = this.ykb;
        if (b && b === true) {
            this.jlg()
        }
    };
    this.apa = function(a, b) {
        this.cth = a;
        this.jft = (this.cth != "") ? this.wee : this.ykb;
        if (b && b === true) {
            this.jlg()
        }
    };
    this.gid = function(a, b) {
        this.cth = a;
        this.jft = this.ykb;
        if (b && b === true) {
            this.jlg()
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.clearRect(0, 0, this.width, this.height);
        tlg.tpm.fjv(a, 0, 0, this.width, this.height, this.ejo, this.jft, this.jcm, this.hdf);
        tlg.tpm.der(a, this.cth, this.jmg, 0, 0, this.width, this.height, this.btp, this.cbz, this.apl);
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
pos.prototype = new ezd;

function umw() {
    this.cig = [];
    this.kbt = -1;
    this.jcm = "white";
    this.ykb = "black";
    this.ejo = 3;
    this.hdf = 2;
    this.ler = function(a) {
        try {
            this.jcm = a.borderColor;
            this.ykb = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        try {
            this.ejo = a.kui;
            this.hdf = a.nlj
        } catch (b) {
            console.error(b)
        }
    };
    this.nct = function(a, b) {
        this.kbt = a;
        this.xza((this.kbt >= 0));
        if (b && b === true) {
            this.jlg()
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.clearRect(0, 0, this.width, this.height);
        tlg.tpm.fjv(a, 0, 0, this.width, this.height, this.ejo, this.ykb, this.jcm, this.hdf);
        if (this.kbt >= 0) {
            a.drawImage(this.cig[this.kbt], this.ejo, this.ejo, this.width - 2 * this.ejo, this.height - 2 * this.ejo)
        }
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
umw.prototype = new ezd;

function ybb() {
    var a = this;
    this.xpv = [];
    this.fdf = function() {
        this.xpv = [];
        rqj = new gao();
        rqj.wem("Big Serie", null, null, "0,2,3|0,2,3|4,7|12,15|18,21|19,22|25.29|32,35");
        this.xpv.push(rqj);
        rqj = new gao();
        rqj.wem("Serie 5/8", null, null, "5,8|10,11|13,16|23,24|27,30|33,36");
        this.xpv.push(rqj);
        rqj = new gao();
        rqj.wem("Orpheline Plein", null, null, "1|6|9|14|17|20|31|34");
        this.xpv.push(rqj);
        rqj = new gao();
        rqj.wem("Orpheline Cheval", null, null, "1|6,9|14,17|17,20|31,34");
        this.xpv.push(rqj);
        rqj = new gao();
        rqj.wem("Zero Game", null, null, "0,3|12,15|26|32,35");
        this.xpv.push(rqj)
    };
    this.xdh = function() {
        var n = [],
            s = [],
            m = 14,
            c = 5,
            w = this.fwq,
            j = this.qon,
            v = this.adi,
            e = this.bwh,
            l = this.bgg,
            t = this.qtx,
            z = [],
            o = [],
            g = [],
            f = [],
            d = [],
            x = [],
            k = 0,
            b = 0;
        n[0] = this.ufl;
        for (var u = 1; u < c; u++) {
            if (u < 3) {
                n[u] = this.ufl + v * u
            } else {
                n[u] = this.ufl + v * 2 + w * (u - 2)
            }
        }
        s[0] = this.lle;
        for (var u = 1; u < m; u++) {
            s[u] = this.lle + j * u
        }
        x[0] = new qsz(n[2], s[0], 3 * w, j);
        for (var u = 1; u < 37; u++) {
            x[u] = new qsz(((u % 3) == 0) ? n[4] : (((u % 3) == 2) ? n[3] : n[2]), s[Math.ceil(u / 3)], w, j)
        }
        z = [];
        z.push(x[0]);
        this.ojo[k++].zmv(x[0], z);
        z = [];
        z.push(x[0]);
        z.push(x[1]);
        z.push(x[2]);
        this.ojo[k++].zmv(new qsz(n[3] - l, s[1], 2 * l, t), z);
        z = [];
        z.push(x[0]);
        z.push(x[2]);
        z.push(x[3]);
        this.ojo[k++].zmv(new qsz(n[4] - l, s[1], 2 * l, t), z);
        z = [];
        z.push(x[0]);
        z.push(x[1]);
        this.ojo[k++].zmv(new qsz(n[2], s[1], w, t), z);
        z = [];
        z.push(x[0]);
        z.push(x[2]);
        this.ojo[k++].zmv(new qsz(n[3], s[1], w, t), z);
        z = [];
        z.push(x[0]);
        z.push(x[3]);
        this.ojo[k++].zmv(new qsz(n[4], s[1], w, t), z);
        z = [];
        z.push(new qsz(n[0], s[1], v, 2 * j));
        z.push(new qsz(n[2], s[1], 3 * w, 6 * j));
        this.ojo[k++].zmv(new qsz(n[0], s[1], v, 2 * j), z);
        z = [];
        z.push(new qsz(n[0], s[11], v, 2 * j));
        z.push(new qsz(n[2], s[7], 3 * w, 6 * j));
        this.ojo[k++].zmv(new qsz(n[0], s[11], v, 2 * j), z);
        z = [];
        z.push(new qsz(n[1], s[1], v, 4 * j));
        z.push(new qsz(n[2], s[1], 3 * w, 4 * j));
        this.ojo[k++].zmv(new qsz(n[1], s[1], v, 4 * j), z);
        z = [];
        z.push(new qsz(n[1], s[5], v, 4 * j));
        z.push(new qsz(n[2], s[5], 3 * w, 4 * j));
        this.ojo[k++].zmv(new qsz(n[1], s[5], v, 4 * j), z);
        z = [];
        z.push(new qsz(n[1], s[9], v, 4 * j));
        z.push(new qsz(n[2], s[9], 3 * w, 4 * j));
        this.ojo[k++].zmv(new qsz(n[1], s[9], v, 4 * j), z);
        z = [];
        z.push(new qsz(n[2], s[13], w, e));
        z.push(new qsz(n[2], s[1], w, 12 * j));
        this.ojo[k++].zmv(new qsz(n[2], s[13], w, e), z);
        z = [];
        z.push(new qsz(n[3], s[13], w, e));
        z.push(new qsz(n[3], s[1], w, 12 * j));
        this.ojo[k++].zmv(new qsz(n[3], s[13], w, e), z);
        z = [];
        z.push(new qsz(n[4], s[13], w, e));
        z.push(new qsz(n[4], s[1], w, 12 * j));
        this.ojo[k++].zmv(new qsz(n[4], s[13], w, e), z);
        for (var u = 0; u < 12; u++) {
            var r = b + 1;
            var q = b + 2;
            var p = b + 3;
            if (u < 11) {
                z = [];
                z.push(new qsz(n[2], s[u + 1], 2 * w, 2 * j));
                this.ojo[k++].zmv(new qsz(n[3] - l, s[u + 2] - t, 2 * l, 2 * t), z);
                z = [];
                z.push(new qsz(n[3], s[u + 1], 2 * w, 2 * j));
                this.ojo[k++].zmv(new qsz(n[4] - l, s[u + 2] - t, 2 * l, 2 * t), z);
                z = [];
                z.push(new qsz(n[2], s[u + 1], 3 * w, 2 * j));
                this.ojo[k++].zmv(new qsz(n[2], s[u + 2] - t, l, 2 * t), z);
                z = [];
                z.push(new qsz(n[2], s[u + 1], w, 2 * j));
                this.ojo[k++].zmv(new qsz(n[2], s[u + 2] - t, w, 2 * t), z);
                z = [];
                z.push(new qsz(n[3], s[u + 1], w, 2 * j));
                this.ojo[k++].zmv(new qsz(n[3], s[u + 2] - t, w, 2 * t), z);
                z = [];
                z.push(new qsz(n[4], s[u + 1], w, 2 * j));
                this.ojo[k++].zmv(new qsz(n[4], s[u + 2] - t, w, 2 * t), z)
            }
            z = [];
            z.push(new qsz(n[2], s[u + 1], 3 * w, j));
            this.ojo[k++].zmv(new qsz(n[2], s[u + 1], l, j), z);
            z = [];
            z.push(new qsz(n[2], s[u + 1], 2 * w, j));
            this.ojo[k++].zmv(new qsz(n[3] - l, s[u + 1], 2 * l, j), z);
            z = [];
            z.push(new qsz(n[3], s[u + 1], 2 * w, j));
            this.ojo[k++].zmv(new qsz(n[4] - l, s[u + 1], 2 * l, j), z);
            z = [];
            z.push(x[r]);
            this.ojo[k++].zmv(x[r], z);
            z = [];
            z.push(x[q]);
            this.ojo[k++].zmv(x[q], z);
            z = [];
            z.push(x[p]);
            this.ojo[k++].zmv(x[p], z);
            b += 3
        }
        for (var u = 1; u < 37; u++) {
            if (this.parent.smf(u)) {
                f.push(x[u])
            } else {
                d.push(x[u])
            }
            if (this.parent.vod(u)) {
                o.push(x[u])
            } else {
                g.push(x[u])
            }
        }
        o.push(new qsz(n[0], s[3], v, 2 * j));
        this.ojo[k++].zmv(new qsz(n[0], s[3], v, 2 * j), o);
        f.push(new qsz(n[0], s[5], v, 2 * j));
        this.ojo[k++].zmv(new qsz(n[0], s[5], v, 2 * j), f);
        d.push(new qsz(n[0], s[7], v, 2 * j));
        this.ojo[k++].zmv(new qsz(n[0], s[7], v, 2 * j), d);
        g.push(new qsz(n[0], s[9], v, 2 * j));
        this.ojo[k++].zmv(new qsz(n[0], s[9], v, 2 * j), g);
        k = 0;
        z = [];
        z.push(x[0]);
        z.push(x[2]);
        z.push(x[3]);
        z.push(x[4]);
        z.push(x[7]);
        z.push(x[12]);
        z.push(x[15]);
        z.push(x[18]);
        z.push(x[19]);
        z.push(x[21]);
        z.push(x[22]);
        z.push(x[25]);
        z.push(x[26]);
        z.push(x[28]);
        z.push(x[29]);
        z.push(x[32]);
        z.push(x[35]);
        this.xpv[k++].zmv(new qsz(), z);
        z = [];
        z.push(x[5]);
        z.push(x[8]);
        z.push(x[10]);
        z.push(x[11]);
        z.push(x[13]);
        z.push(x[16]);
        z.push(x[23]);
        z.push(x[24]);
        z.push(x[27]);
        z.push(x[30]);
        z.push(x[33]);
        z.push(x[36]);
        this.xpv[k++].zmv(new qsz(), z);
        z = [];
        z.push(x[1]);
        z.push(x[6]);
        z.push(x[9]);
        z.push(x[14]);
        z.push(x[17]);
        z.push(x[20]);
        z.push(x[31]);
        z.push(x[34]);
        this.xpv[k++].zmv(new qsz(), z);
        z = [];
        z.push(x[1]);
        z.push(x[6]);
        z.push(x[9]);
        z.push(x[14]);
        z.push(x[17]);
        z.push(x[20]);
        z.push(x[31]);
        z.push(x[34]);
        this.xpv[k++].zmv(new qsz(), z);
        z = [];
        z.push(x[0]);
        z.push(x[3]);
        z.push(x[12]);
        z.push(x[15]);
        z.push(x[26]);
        z.push(x[32]);
        z.push(x[35]);
        this.xpv[k++].zmv(new qsz(), z)
    };
    this.nri = function(c) {
        var f = false;
        this.lop = null;
        for (var d = 0, b = this.xpv.length; d < b && !f; d++) {
            var e = this.xpv[d];
            if (e.frt == c) {
                f = true;
                this.lop = e;
                this.lop.rsj(this.context2D)
            }
        }
        return f
    };
    this.zsb = function() {
        a.yog = true;
        a.eth()
    };
    this.tto = function() {
        a.yog = false;
        a.eth()
    };
    this.mgy = function() {
        a.ybl = !a.ybl;
        a.eth()
    };
    this.dgf = function() {
        a.parent.ayr.value = a.rtd.value;
        a.parent.ayr.vbv = a.parent.ebs(a.rtd.value).vbv;
        a.parent.ayr.yue(a.parent.bpu, a.parent.tgy);
        a.parent.ayr.xza(true);
        a.parent.ymu(a.rtd)
    }
}
ybb.prototype = new khq;

function woc() {
    this.kmb = 0;
    this.jbw = 0;
    this.win = 0;
    this.zjv = 0;
    this.hoo = "black";
    this.uac = "white";
    this.ogh = "white";
    this.vrf = 14;
    this.jel = 18;
    this.vnt = 3;
    this.wuf = 2;
    this.hsn = null;
    this.ypv = null;
    this.kje = null;
    this.oel = null;
    this.lvn = null;
    this.ler = function(a) {
        woc.prototype.ler.call(this, a);
        try {
            this.hoo = a.fni.backgroundColor;
            this.uac = a.fni.gmj;
            this.ogh = a.fni.borderColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qgh = function(a) {
        woc.prototype.qgh.call(this, a);
        try {
            this.hsn = a.jbb;
            this.ypv = a.qur;
            this.kje = a.ksi;
            this.oel = a.hwr;
            this.lvn = a.rcm;
            this.vrf = a.fni.zyc;
            this.jel = a.fni.jal;
            this.vnt = a.fni.kui;
            this.wuf = a.fni.nlj
        } catch (b) {
            console.error(b)
        }
    };
    this.jlg = function(j, g, k, e) {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var l = this.context2D,
            c = (j != null && g != null && k != null && e != null),
            a = this.sze.pfa(),
            b = this.parent.dul.mza("logo");
        l.save();
        if (c) {
            l.beginPath();
            l.rect(j, g, k, e);
            l.closePath();
            l.clip()
        }
        tlg.tpm.fjv(l, 0, 0, this.width, this.height, this.ejo, this.ykb, this.jcm, this.hdf);
        tlg.tpm.gxk(l, this.tof.x, this.tof.y, this.tof.width, this.tof.height, this.axu, 1, this.jcm, this.hdf, 1);
        tlg.tpm.der(l, this.parent.ieh(this.parent.language.wqz), this.jmg, this.sld.x, this.sld.y, this.sld.width, this.sld.height, this.btp, this.cbz, this.apl);
        if (this.parent.gox) {
            tlg.tpm.lbj(l, this.parent.ieh(this.parent.language.jlk), this.jmg, this.tof.x, this.tof.y, this.tof.width, this.tof.height, this.btp, this.cbz, this.apl, "center", true)
        } else {
            if (b && this.lvn.width > 0 && this.lvn.height > 0) {
                l.drawImage(b, this.lvn.x, this.lvn.y, this.lvn.width, this.lvn.height)
            }
            tlg.tpm.fjv(l, this.hsn.x, this.hsn.y, this.hsn.width, this.hsn.height, this.vnt, this.hoo, this.ogh, this.wuf);
            tlg.tpm.der(l, this.parent.language.arj, this.jmg, this.hsn.x, this.hsn.y, this.hsn.width, this.hsn.height / 2, this.btp, this.vrf, this.apl);
            tlg.tpm.der(l, this.kmb, this.jmg, this.hsn.x, this.hsn.y + this.hsn.height / 2, this.hsn.width, this.hsn.height / 2, this.btp, this.jel, this.apl);
            tlg.tpm.fjv(l, this.ypv.x, this.ypv.y, this.ypv.width, this.ypv.height, this.vnt, this.hoo, this.ogh, this.wuf);
            tlg.tpm.der(l, this.parent.language.jbw, this.jmg, this.ypv.x, this.ypv.y, this.ypv.width, this.ypv.height / 2, this.btp, this.vrf, this.apl);
            tlg.tpm.der(l, this.parent.rfg(this.jbw), this.jmg, this.ypv.x, this.ypv.y + this.ypv.height / 2, this.ypv.width, this.ypv.height / 2, this.btp, this.jel, this.apl);
            tlg.tpm.fjv(l, this.oel.x, this.oel.y, this.oel.width, this.oel.height, this.vnt, this.hoo, this.ogh, this.wuf);
            tlg.tpm.der(l, this.parent.language.zjv, this.jmg, this.oel.x, this.oel.y, this.oel.width, this.oel.height / 2, this.btp, this.vrf, this.apl);
            tlg.tpm.der(l, this.parent.rfg(this.zjv), this.jmg, this.oel.x, this.oel.y + this.oel.height / 2, this.oel.width, this.oel.height / 2, this.btp, this.jel, this.apl);
            tlg.tpm.fjv(l, this.kje.x, this.kje.y, this.kje.width, this.kje.height, this.vnt, this.hoo, this.ogh, this.wuf);
            tlg.tpm.der(l, this.parent.language.win, this.jmg, this.kje.x, this.kje.y, this.kje.width, this.kje.height / 2, this.btp, this.vrf, this.apl);
            tlg.tpm.der(l, this.parent.rfg(this.win), this.jmg, this.kje.x, this.kje.y + this.kje.height / 2, this.kje.width, this.kje.height / 2, this.btp, this.jel, this.apl)
        }
        for (var d = 0, f = a.length; d < f; d++) {
            a[d].jlg()
        }
        l.restore();
        if (this.alo && this.rml) {
            if (c) {
                this.alo.drawImage(this.rml, j, g, k, e, this.x + j, this.y + g, k, e)
            } else {
                this.alo.drawImage(this.rml, this.x, this.y)
            }
        }
    }
}
woc.prototype = new xcs;

function aal() {
    this.vbv = null;
    this.wyo = true;
    this.ojo = [];
    this.lop = null;
    this.wem = function(a, c, b) {
        aal.prototype.wem.call(this, a, c, b);
        this.stz()
    };
    this.stz = function() {
        var a = null;
        this.ojo = [];
        a = new gao();
        a.wem("Big Serie", null, null, "0,2,3|0,2,3|4,7|12,15|18,21|19,22|25.29|32,35");
        this.ojo.push(a);
        a = new gao();
        a.wem("Serie 5/8", null, null, "5,8|10,11|13,16|23,24|27,30|33,36");
        this.ojo.push(a);
        a = new gao();
        a.wem("Orpheline Plein", null, null, "1|6|9|14|17|20|31|34");
        this.ojo.push(a);
        a = new gao();
        a.wem("Orpheline Cheval", null, null, "1|6,9|14,17|17,20|31,34");
        this.ojo.push(a);
        a = new gao();
        a.wem("Zero Game", null, null, "0,3|12,15|26|32,35");
        this.ojo.push(a)
    };
    this.ler = function(a) {};
    this.qgh = function(a) {
        try {
            this.ojo[0].zmv(a.wle, null);
            this.ojo[1].zmv(a.dxy, null);
            this.ojo[2].zmv(a.ugu, null);
            this.ojo[3].zmv(a.dzl, null);
            this.ojo[4].zmv(a.zzh, null)
        } catch (b) {
            console.error(b)
        }
    };
    this.buv = function(b, j) {
        var g = b - this.x,
            e = j - this.y,
            c = this.parent.tzi[this.parent.kcw];
        this.lop = null;
        if (c.rjo() === true && g > 0 && g < this.width && e > 0 && e < this.height) {
            for (var d = 0, a = this.ojo.length; d < a; d++) {
                var f = this.ojo[d];
                if (f.clc(g, e)) {
                    if (this.wyo === true) {
                        this.parent.ayr.value = c.value;
                        this.parent.ayr.vbv = c.vbv;
                        this.parent.ayr.yue(b, j);
                        this.parent.ayr.xza(true);
                        this.lop = f;
                        if (this.parent.faj.nri(this.lop.frt) == true) {
                            this.parent.jlg()
                        }
                    }
                    return true
                }
            }
        }
        return false
    };
    this.gmf = function(b, j) {
        var g = b - this.x,
            e = j - this.y,
            c = this.parent.ayr;
        if (g > 0 && g < this.width && e > 0 && e < this.height) {
            if (c && c.izz() === true && c.rjo() === true) {
                for (var d = 0, a = this.ojo.length; d < a; d++) {
                    var f = this.ojo[d];
                    if (f.clc(g, e)) {
                        if (this.wyo === true) {
                            this.parent.mjt(f.xvv, c.value);
                            this.lop = null
                        }
                        return true
                    }
                }
            }
        } else {
            this.lop = null
        }
        return false
    };
    this.rsv = function(j, c) {
        var g = j - this.x,
            d = c - this.y,
            k = false,
            e = this.lop;
        if (g > 0 && g < this.width && d > 0 && d < this.height) {
            if (this.wyo === true) {
                for (var a = 0, b = this.ojo.length; a < b && !k; a++) {
                    var f = this.ojo[a];
                    if (f.clc(g, d)) {
                        k = true;
                        this.lop = f;
                        this.parent.faj.nri(this.lop.frt);
                        return (this.lop != e)
                    }
                }
            }
            return (this.lop != e)
        } else {
            if (this.wyo === true) {
                this.lop = null
            }
            return (this.lop != e)
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.clearRect(0, 0, this.width, this.height);
        if (this.vbv) {
            a.drawImage(this.vbv, 0, 0, this.width, this.height)
        }
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
aal.prototype = new ezd;

function kka() {
    this.qgh = function(b) {
        kka.prototype.qgh.call(this, b);
        try {
            var a = b.ptd;
            this.sze.psg("lang", "#ota", [a.jvh]);
            this.sze.psg("exit", "#ota", [a.tck]);
            this.sze.psg("race", "#ota", [a.oil]);
            this.sze.psg("undo", "#ota", [a.vii]);
            this.sze.psg("rise", "#ota", [a.pul]);
            this.sze.psg("start", "#ota", [a.nsq])
        } catch (c) {
            console.error(c)
        }
    };
    this.bti = function(b) {
        var a = b.ptd;
        this.sze.sqh("exit", this.bdq(a.tck, (tlg.fxx.value50.g === true) ? this.parent.language.ego : this.parent.language.cxs, null, this.parent.ndx, null), ["buttons", "gbuttons", "sbuttons"]);
        this.sze.sqh("race", this.bdq(a.oil, this.parent.language.quo, null, this.parent.son, null), ["buttons"]);
        this.sze.sqh("undo", this.bdq(a.vii, this.parent.language.gqh, null, this.parent.ude, null), ["buttons", "gbuttons"]);
        this.sze.sqh("rise", this.bdq(a.pul, this.parent.language.edy, null, this.parent.ovx, null), ["buttons", "gbuttons"]);
        this.sze.sqh("start", this.bdq(a.nsq, this.parent.language.start, null, this.parent.bad, null), ["buttons", "gbuttons", "sbuttons"]);
        this.sze.psg("race", "#hoe", [true])
    };
    this.mhl = function(a) {
        this.sze.psg("exit", "#vjp", [(tlg.fxx.value50.g === true) ? a.ego : a.cxs]);
        this.sze.psg("race", "#vjp", [a.quo]);
        if (this.parent.zta() == 0 && ((this.parent.cfx != null && this.parent.cfx != "") || tlg.tcn.jlu("sessionGJValue2") != null)) {
            this.sze.psg("rise", "#vjp", [a.nqe])
        } else {
            this.sze.psg("rise", "#vjp", [a.edy])
        }
        if (this.parent.bhi == 3) {
            this.sze.psg("undo", "#vjp", [a.zwt])
        } else {
            this.sze.psg("undo", "#vjp", [a.gqh])
        }
        this.sze.psg("start", "#vjp", [a.start])
    }
}
kka.prototype = new ozz;

function kwm() {
    this.ttf = 0;
    this.jzx = 0;
    this.azq = 0;
    this.btp = "verdana";
    this.apl = "";
    this.jmg = "white";
    this.ykb = "black";
    this.jcm = "white";
    this.khk = 14;
    this.nlx = 16;
    this.hdf = 2;
    this.ejo = 3;
    this.akk = 4;
    this.ypv = new qsz();
    this.oel = new qsz();
    this.pbo = new qsz();
    this.ler = function(a) {
        try {
            this.btp = a.font;
            this.apl = a.stb;
            this.jmg = a.gmj;
            this.ykb = a.backgroundColor;
            this.jcm = a.borderColor
        } catch (b) {
            console.error(b)
        }
    };
	gameController=this;
    this.qgh = function(a) {
        try {
            this.khk = a.zyc;
            this.nlx = a.jal;
            this.hdf = a.nlj;
            this.ejo = a.kui;
            this.akk = a.ogq;
            this.ypv = a.qur;
            this.oel = a.hwr;
            this.pbo = a.rsh
        } catch (b) {
            console.error(b)
        }
    };
    this.oej = function(a, b) {
        this.ttf = a;
        if (b && b === true) {
            this.jlg()
        }
    };
    this.wjr = function(a, b) {
        this.jzx = a;
        if (b && b === true) {
            this.jlg()
        }
    };
    this.xxy = function(a, b) {
        this.azq = a;
        if (b && b === true) {
            this.jlg()
        }
    };
    this.jlg = function() {
        if (!this.izz() || !this.parent.clv()) {
            return
        }
        var a = this.context2D;
        a.save();
        tlg.tpm.fjv(a, 0, 0, this.width, this.height, this.ejo, this.ykb, this.jcm, this.hdf);
        if (this.ypv.width > 0 && this.ypv.height > 0) {
            tlg.tpm.csk(a, this.ypv.x, this.ypv.y, this.ypv.width, this.ypv.height, this.ejo, 0, 0, this.ejo, this.ykb, 1, this.jcm, this.hdf, 1);
            tlg.tpm.der(a, (this.parent.efb()) ? this.parent.language.rtx : this.parent.language.jbw, this.jmg, this.ypv.x, this.ypv.y, this.ypv.width, this.ypv.height / 2, this.btp, this.khk, "");
            tlg.tpm.der(a, this.parent.rfg(this.ttf), this.jmg, this.ypv.x, this.ypv.y + this.ypv.height / 2, this.ypv.width, this.ypv.height / 2, this.btp, this.nlx, this.apl)
        }
        if (this.pbo.width > 0 && this.pbo.height > 0) {
            tlg.tpm.der(a, this.parent.language.bhc, this.jmg, this.pbo.x, this.pbo.y, this.pbo.width, this.pbo.height / 2, this.btp, this.khk, "");
            tlg.tpm.der(a, (this.azq > 0) ? this.parent.hut(this.azq) : "", this.jmg, this.pbo.x, this.pbo.y + this.pbo.height / 2, this.pbo.width, this.pbo.height / 2, this.btp, this.nlx, this.apl)
        }
        if (this.oel.width > 0 && this.oel.height > 0) {
            tlg.tpm.csk(a, this.oel.x, this.oel.y, this.oel.width, this.oel.height, 0, this.ejo, this.ejo, 0, this.ykb, 1, this.jcm, this.hdf, 1);
            tlg.tpm.der(a, this.parent.language.zjv, this.jmg, this.oel.x, this.oel.y, this.oel.width, this.oel.height / 2, this.btp, this.khk, "");
            tlg.tpm.der(a, this.parent.rfg(this.jzx), this.jmg, this.oel.x, this.oel.y + this.oel.height / 2, this.oel.width, this.oel.height / 2, this.btp, this.nlx, this.apl)
        }
        a.restore();
        if (this.alo && this.rml) {
            this.alo.drawImage(this.rml, this.x, this.y)
        }
    }
}
kwm.prototype = new ezd;

function edt() {
    this.zyr = "RouletteRoyal";
    this.ajm = "Roulette Royal";
    this.lpb = tlg.fxx.value30.g.p + "/" + tlg.fxx.value30.g.v + "rouletteroyal/images/";
    this.wsc = tlg.fxx.value30.g.p + "/" + tlg.fxx.value30.g.v + "roulette/sounds/";
    this.wgy = 0;
    this.slv = function() {
        this.etx = true;
        edt.prototype.slv.call(this);
        this.gqb("1_0_12")
    };
    this.foo = function() {
        this.zut = new bsc()
    };
    this.nhv = function() {
        edt.prototype.nhv.call(this);
        this.dat();
        this.wqi();
        this.rzu();
        this.lig();
        if (this.ore.jjg) {
            this.mee();
            this.ycw()
        }
        this.rob();
        this.frk()
    };
    this.lqn = function() {
        return new kka()
    };
    this.mgr = function() {
        return new ybb()
    };
    this.ppo = function() {
        edt.prototype.ppo.call(this);
        this.fvf.jvm = true;
        this.fvf.dlr(58)
    };
    this.dat = function() {
        if (this.jpp === false) {
            this.gsa = new mvc();
            this.gsa.wem(this.ore.fpa.eso, null, this.context2D);
            this.gsa.parent = this;
            this.gsa.rrw = this.dul.mza("wheel");
            this.gsa.uaf = this.dul.mza("ball");
            this.gsa.khu = this.dul.mza("shadow");
            this.gsa.fak = this.dul.mza("top");
            this.gsa.btm = this.dul.mza("spin");
            this.gsa.qgh(this.ore.fpa);
            this.gsa.wcx()
        } else {
            this.gsa = new odd();
            this.gsa.wem(this.ore.gzh.eso, this.xku);
            this.gsa.parent = this;
            this.gsa.rrw = this.dul.mza("wheel");
            this.gsa.uaf = this.dul.mza("ball");
            this.gsa.khu = this.dul.mza("shadow");
            this.gsa.fak = this.dul.mza("top");
            this.gsa.btm = this.dul.mza("spin");
            this.gsa.qgh(this.ore.gzh)
        }
    };
    this.wqi = function() {
        var a = new kwm();
        a.wem(this.ore.fni.eso, null, this.context2D);
        a.parent = this;
        a.ler(this.style.fni);
        a.qgh(this.ore.fni);
        this.hhv.sqh("rinfo", a)
    };
    this.rzu = function() {
        var a = new pos();
        a.wem(this.ore.thb.eso, null, this.context2D);
        a.parent = this;
        a.ler(this.style.thb);
        a.qgh(this.ore.thb);
        this.hhv.sqh("ginfo", a)
    };
    this.rob = function() {
        var c = new umw();
        c.wem(this.ore.dut.eso, null, this.context2D);
        c.parent = this;
        c.ler(this.style.dut);
        c.qgh(this.ore.dut);
        for (var b = 0, a = this.dul.une("win"); b < a; b++) {
            c.cig[b] = this.dul.mza("win" + b)
        }
        c.xza(false);
        this.hhv.sqh("winn", c)
    };
    this.frk = function() {
        var a = new gdr();
        a.wem(this.ore.rlb.eso, null, this.context2D);
        a.parent = this;
        a.ler(this.style.rlb);
        a.qgh(this.ore.rlb);
        a.xza(false);
        this.hhv.sqh("winp", a)
    };
    this.lig = function() {
        var a = new aal();
        a.wem(this.ore.kto.eso, null, this.context2D);
        a.parent = this;
        a.ler(this.style.kto);
        a.qgh(this.ore.kto);
        a.vbv = this.dul.mza("series");
        this.hhv.sqh("series", a)
    };
    this.suq = function() {
        var a = new woc();
        a.wem(this.ore.wqz.eso, null, this.context2D);
        a.parent = this;
        a.bti(this.ore.wqz);
        a.ler(this.style.wqz);
        a.qgh(this.ore.wqz);
        a.xza(false);
        this.hhv.sqh("history", a)
    };
    this.mee = function() {
        edt.prototype.mee.call(this);
        var a = this.hhv.djj("topi");
        if (a) {
            a.sgp("language", this.dul.mza("icon_l"), tlg.tcn.jlu("sessionValue1"), [tlg.language.EN, tlg.language.DE, tlg.language.RU, tlg.language.EE, tlg.language.ES, tlg.language.TR, tlg.language.CZ, tlg.language.GR, tlg.language.AT, tlg.language.US, tlg.language.BG, tlg.language.CO, tlg.language.MX, tlg.language.CL, tlg.language.VE, tlg.language.BR, tlg.language.GE, tlg.language.HU, tlg.language.RO, tlg.language.PT, tlg.language.FR, tlg.language.HR, tlg.language.IT, tlg.language.SE, tlg.language.MK, tlg.language.PL]);
            a.eyg("help", new String("?"), true);
            if (tlg.fxx.value27 && this.skp) {
                a.sgp("audio", this.dul.mza("icon_a"), this.jto[this.nmn], this.jto)
            }
            if (tlg.tcn.jlu("sessionValue14") == "true" && tlg.tpm.moy()) {
                a.eyg("fullscreen", this.dul.mza("icon_f"), this.nhf)
            }
        }
    };
    this.ycw = function() {
        edt.prototype.ycw.call(this);
        var a = this.hhv.djj("topb");
        if (a) {
            if (tlg.fxx.value5.length > 1) {
                a.crh("language", this.language.language, this.peq(tlg.fxx.value5[this.myl]), this.ckm, this.zut.language, 0, 1)
            }
            if (tlg.fxx.value27 && this.skp) {
                a.crh("audio", this.language.audio, this.dul.mza("btn_a"), this.hbg, this.zut.audio, this.nmn, this.jto.length)
            }
            if (tlg.tcn.jlu("sessionValue14") == "true" && tlg.tpm.moy()) {
                a.crh("fullscreen", this.language.nhf, this.dul.mza("btn_f"), this.kri, this.zut.nhf, (this.nhf) ? 1 : 0, 2)
            }
            a.ool("help", this.language.fow, this.dul.mza("btn_p"), this.qku, this.zut.fow);
            if (tlg.fxx.value12 && !this.efb()) {
                a.ool("history", this.language.wqz, this.dul.mza("btn_h"), this.qkz, this.zut.wqz)
            }
            if (tlg.fxx.value36 && !this.efb()) {
                a.ool("statistic", this.language.qyn, this.dul.mza("btn_st"), this.cxf, this.zut.qyn)
            }
            a.rok()
        }
    };
    this.tmu = function() {
        if (this.gsa) {
            if (this.jpp === false) {
                this.gsa.ota(this.ore.fpa.eso);
                this.gsa.qgh(this.ore.fpa)
            } else {
                this.gsa.ota(this.ore.gzh.eso);
                this.gsa.qgh(this.ore.gzh)
            }
        }
    };
    this.bia = function() {
        var a = this.hhv.djj("rinfo");
        if (a) {
            a.ota(this.ore.fni.eso);
            a.qgh(this.ore.fni)
        }
    };
    this.lez = function() {
        var a = this.hhv.djj("ginfo");
        if (a) {
            a.ota(this.ore.thb.eso);
            a.qgh(this.ore.thb)
        }
    };
    this.pev = function() {
        var b = this.hhv.djj("winn"),
            a = (this.brp) ? this.ore.wqz.dut : this.ore.dut;
        if (b) {
            b.ota(a.eso);
            b.qgh(a)
        }
    };
    this.wnv = function() {
        var a = this.hhv.djj("winp");
        if (a) {
            a.ota(this.ore.rlb.eso);
            a.qgh(this.ore.rlb)
        }
    };
    this.fqv = function() {
        var a = this.hhv.djj("series");
        if (a) {
            a.ota(this.ore.kto.eso);
            a.qgh(this.ore.kto)
        }
    };
    this.hnz = function() {
        var a = this.hhv.djj("topb");
        if (a) {
            a.ota(this.ore.ivg.eso);
            a.qgh(this.ore.ivg)
        }
    };
    this.avf = function() {
        this.style = new eki()
    };
    this.hws = function(a) {
        this.xdi = a;
        if (a == tlg.ore.ugy) {
            return new ctj()
        } else {
            if (a == tlg.ore.njn) {
                return new shb()
            }
        }
        return null
    };
    this.hhs = function() {
        edt.prototype.hhs.call(this);
        this.tmu();
        this.bia();
        this.lez();
        this.peh();
        this.hnz();
        this.pev();
        this.wnv();
        this.fqv()
    };
    this.cmm = function() {
        var e = tlg.fxx.value30.c.p + "/basic/sounds/",
            c = 0;
        this.dul.cla("silence", null, false, e + "silence");
        this.dul.cla("btn", null, false, e + "btn2");
        this.dul.cla("audioon", null, false, e + "audio_on");
        this.dul.cla("collect", null, false, this.wsc + "rge_odo_start");
        this.dul.cla("collect1", null, false, this.wsc + "rge_odo_end");
        this.dul.cla("jeton", null, false, this.wsc + "jeton");
        this.dul.cla("ballrun", null, false, this.wsc + "ballrun");
        this.dul.cla("ballonnumber", null, false, this.wsc + "ball_on_number");
        this.dul.cla("ballremove", null, false, this.wsc + "ballremove");
        this.dul.cla("win1", this.bxs, false, this.wsc + "rge_win_02");
        this.dul.cla("win2", this.bxs, false, this.wsc + "rge_win_06");
        this.dul.cla("win3", this.bxs, false, this.wsc + "rge_win_09");
        this.dul.cla("win4", this.bxs, false, this.wsc + "rge_win_12");
        this.dul.cla("win5", this.bxs, false, this.wsc + "rge_win_18");
        this.dul.cla("win6", this.bxs, false, this.wsc + "rge_win_36");
        this.dul.cla("select", null, false, this.wsc + "selectjeton");
        this.dul.cla("remove", null, false, this.wsc + "removejeton");
        this.dul.cla("limit", null, false, this.wsc + "limit");
        for (var b = 0, a = this.txt.length; b < a; b++) {
            if (this.rzc(this.txt[b])) {
                c++;
                e = this.wsc + this.txt[b] + "/";
                this.dul.cla(this.txt[b] + "red", this.snh, false, e + "red");
                this.dul.cla(this.txt[b] + "black", this.snh, false, e + "black");
                this.dul.cla(this.txt[b] + "place", null, false, e + "place");
                this.dul.cla(this.txt[b] + "no_more_bets", null, false, e + "no_more_bets");
                this.dul.cla(this.txt[b] + "game_will_start", null, false, e + "game_will_start");
                this.dul.cla(this.txt[b] + "0", this.snh, false, e + "0");
                for (var d = 1; d < 37; d++) {
                    this.dul.cla(this.txt[b] + d.toString(), this.mde, false, e + d)
                }
            }
        }
        if (c == 0) {
            e = this.wsc + this.txt[0] + "/";
            this.dul.cla(this.txt[0] + "red", this.snh, false, e + "red");
            this.dul.cla(this.txt[0] + "black", this.snh, false, e + "black");
            this.dul.cla(this.txt[0] + "place", null, false, e + "place");
            this.dul.cla(this.txt[0] + "no_more_bets", null, false, e + "no_more_bets");
            this.dul.cla(this.txt[0] + "game_will_start", null, false, e + "game_will_start");
            this.dul.cla(this.txt[0] + "0", this.snh, false, e + "0");
            for (var d = 1; d < 37; d++) {
                this.dul.cla(this.txt[0] + d.toString(), this.mde, false, e + d)
            }
        }
    };
    this.inv = function() {
        var b = this.lpb + this.ore.type + "/";
        this.dul.sco("logo", b + "logo.png");
        this.dul.sco("table", b + "table.png");
        this.dul.sco("table_high", b + "table_highlight.png");
        this.dul.sco("racebet", b + "racebet.png");
        this.dul.sco("racebet_high", b + "racebet_highlight.png");
        this.dul.sco("back", b + "back.jpg");
        this.dul.sco("series", b + "series.png");
        for (var a = 0; a < 37; a++) {
            this.dul.sco("win" + a, b + a + ".png")
        }
        this.dul.sco("h_bg", b + "help_back.png");
        this.dul.sco("h_win", b + "help_win.png");
        b = tlg.fxx.value30.c.p + "/basic/images/" + this.ore.type + "/";
        this.dul.sco("glass", b + "display_effect.png");
        this.dul.sco("icon_a", b + "icon_sound.png");
        this.dul.sco("icon_f", b + "icon_fullscreen.png");
        this.dul.sco("btn_f", b + "btn_fullscreen.png");
        this.dul.sco("btn_a", b + "btn_sound.png");
        this.dul.sco("btn_p", b + "btn_help.png");
        this.dul.sco("btn_st", b + "btn_statistics.png");
        this.dul.sco("btn_d", b + "btn_deposit.png");
        this.dul.sco("btn_h", b + "btn_history.png");
        this.dul.sco("icon_l", b + "icon_languages.png");
        this.dul.sco("btn_n", b + "btn_nav.png");
        b = tlg.fxx.value30.c.p + "/roulette/images/" + this.ore.type + "/";
        this.dul.sco("numbers", b + "numbers.png");
        this.dul.sco("wheel", b + "wheel.png");
        this.dul.sco("shadow", b + "wheel_shadow.png");
        this.dul.sco("top", b + "wheel_top.png");
        this.dul.sco("spin", b + "wheel_spin.png");
        this.dul.sco("ball", b + "ball.png");
        this.dul.sco("j1", b + "j1.png");
        this.dul.sco("j2", b + "j2.png");
        this.dul.sco("j3", b + "j3.png");
        this.dul.sco("j4", b + "j4.png");
        this.dul.sco("j5", b + "j5.png");
        this.dul.sco("h_s1", b + "serie_5_8.png");
        this.dul.sco("h_s2", b + "big_serie.png");
        this.dul.sco("h_s3", b + "orphelins_cheval.png");
        this.dul.sco("h_s4", b + "orphelins_plein.png");
        this.dul.sco("h_s5", b + "zero_game.png");
        this.kht()
    };
    this.kht = function() {
        var c = tlg.fxx.value30.c.p + "/basic/images/" + this.ore.type + "/",
            d = "btn_";
        for (var b = 0, a = tlg.fxx.value5.length; b < a; b++) {
            this.dul.sco(tlg.fxx.value5[b], c + d + tlg.fxx.value5[b] + ".png")
        }
    };
    this.uzp = function(m, k, n, f) {
        var d = (m != null && k != null && n != null && f != null),
            r = this.context2D,
            q = this.hhv.djj("topb"),
            l = this.hhv.djj("topi"),
            p = this.hhv.djj("rinfo"),
            c = this.hhv.djj("ginfo"),
            g = this.hhv.djj("winn"),
            b = this.hhv.djj("winp"),
            a = this.hhv.djj("rstat"),
            o = this.hhv.djj("series");
        r.save();
        if (d) {
            r.beginPath();
            r.rect(m, k, n, f);
            r.closePath();
            r.clip()
        }
        this.sfi = false;
        r.clearRect(0, 0, this.width, this.height);
        r.drawImage(this.dul.mza("back"), this.ore.xiv.eso.x, this.ore.xiv.eso.y);
        if (l) {
            l.jlg()
        }
        if (this.kqg && this.kqg.izz()) {
            this.kqg.jlg()
        } else {
            if (this.ykd) {
                this.ykd.jlg()
            }
            if (this.bta) {
                this.bta.jlg()
            }
            if (this.gsa) {
                r.drawImage(this.dul.mza("wheel"), this.ore.fpa.eso.x + (this.gsa.width - this.dul.mza("wheel").width) / 2, this.ore.fpa.eso.y + (this.gsa.height - this.dul.mza("wheel").height) / 2);
                if (this.jpp === false) {
                    this.gsa.jlg()
                }
            }
            r.drawImage(this.dul.mza("logo"), this.ore.rcg.eso.x, this.ore.rcg.eso.y, this.ore.rcg.eso.width, this.ore.rcg.eso.height);
            if (p) {
                p.jlg()
            }
            if (c) {
                c.jlg()
            }
            if (o) {
                o.jlg()
            }
            if (this.fvf) {
                this.fvf.jlg()
            }
            if (g) {
                g.jlg()
            }
            if (b) {
                b.jlg()
            }
            for (var e = 0, j = this.tzi.length; e < j; e++) {
                this.tzi[e].jlg()
            }
            if (this.faj) {
                this.faj.jlg()
            }
            if (this.gik) {
                this.gik.jlg()
            }
            if (a) {
                a.jlg()
            }
            if (this.ayr) {
                this.ayr.jlg()
            }
        }
        if (q) {
            q.jlg()
        }
        if (this.jpp === true) {
            this.jld()
        }
        r.restore()
    };
    this.iqi = function(f, e, g, b) {
        if (this.ymg && this.hmp) {
            var a = (f != null && e != null && g != null && b != null),
                j = this.context2D,
                c = this.hhv.djj("winn"),
                i = this.hhv.djj("rinfo"),
                d = this.hhv.djj("topi"),
                k = this.hhv.djj("history");
            j.save();
            if (a) {
                j.beginPath();
                j.rect(f, e, g, b);
                j.closePath();
                j.clip()
            }
            this.sfi = false;
            j.clearRect(0, 0, this.width, this.height);
            j.drawImage(this.gwm, this.ore.xiv.eso.x, this.ore.xiv.eso.y);
            if (d) {
                d.jlg()
            }
            if (k) {
                k.jlg()
            }
            if (!this.gox) {
                if (i) {
                    i.jlg()
                }
                if (c) {
                    c.jlg()
                }
                if (this.faj) {
                    this.faj.jlg()
                }
            }
            j.restore()
        }
    };
    this.jld = function() {
        var a = this.xku;
        if (this.clv()) {
            a.save();
            if (this.gsa.unh() === false) {
                this.gsa.jlg()
            }
            a.restore()
        }
    };
    this.createScreenshot = function() {
        if (this.jpp === true) {
            this.context2D.drawImage(this.gfy, this.ore.gfy.eso.x, this.ore.gfy.eso.y)
        }
        edt.prototype.createScreenshot.call(this)
    };
    this.bad = function() {
        if (tlg.xiv.zta() > 0) {
            if (tlg.xiv.zta() < tlg.xiv.xjv) {
                tlg.xiv.mts(tlg.xiv.language.jjt + " " + tlg.xiv.hut(tlg.xiv.xjv), tlg.roulette.xbr.scj);
                return
            } else {
                for (var b = 0, a = tlg.xiv.xvv.length; b < a; b++) {
                    if (tlg.xiv.xvv[b].value > 0 && tlg.xiv.xvv[b].value < tlg.xiv.dac(tlg.xiv.xvv[b].frt)) {
                        tlg.xiv.mts(tlg.xiv.language.civ, tlg.roulette.xbr.scj);
                        return
                    }
                }
            }
            if (tlg.xiv.bta) {
                tlg.xiv.bta.sze.dsj("sbuttons", "#hoe", [false])
            }
            tlg.xiv.dnp(false);
            if (tlg.xiv.gsa) {
                tlg.xiv.gsa.start()
            }
            tlg.xiv.dul.hku(tlg.xiv.bhv(tlg.tcn.jlu("sessionValue1")) + "game_will_start");
            if (tlg.xiv.fvf) {
                tlg.xiv.fvf.ehi(3000);
                tlg.xiv.fvf.start(1, tlg.xiv.hyg)
            }
            tlg.xiv.erw = setTimeout(tlg.xiv.yoz, 3000);
            if (tlg.xiv.zta() < tlg.xiv.xjv) {
                tlg.xiv.mts(tlg.xiv.language.jjt + " " + tlg.xiv.hut(tlg.xiv.xjv), tlg.roulette.xbr.scj)
            }
        } else {
            tlg.xiv.dul.hku(tlg.xiv.bhv(tlg.tcn.jlu("sessionValue1")) + "place");
            tlg.xiv.dul.ikn(tlg.xiv.bhv(tlg.tcn.jlu("sessionValue1")) + "place")
        }
    };
    this.yoz = function() {
        tlg.xiv.jht()
    };
    this.cyq = function(a, b, c) {
        if (this.akz) {
            this.urv(this.cfx)
        }
        this.win = b;
        this.jds = a;
        this.jbw = c;
        this.pck = false;
        this.hhv.psg("rinfo", "#oej", [this.jbw - this.win, true]);
        if (this.gsa) {
            if (this.akz) {
                this.gsa.bld(this.jds)
            } else {
                this.gsa.nct(this.jds)
            }
        }
    };
    this.qek = function() {
        edt.prototype.qek.call(this);
        var a = this.hhv.djj("rmsg");
        if (this.zta() > 0) {
            if (a) {
                a.apa("", this.language.yvk);
                a.xza(true, true)
            } else {
                this.hhv.psg("ginfo", "#apa", [this.language.yvk, true])
            }
        }
        this.wgy = setTimeout(this.ozp, this.xyd);
        this.fxg()
    };
    this.qje = function() {
        tlg.tcn.jqi("roulette");
        edt.prototype.qje.call(this)
    };
    this.mhl = function() {
        edt.prototype.mhl.call(this);
        var b = this.hhv.djj("topb"),
            a = this.hhv.djj("topi");
        if (b) {
            b.sze.psg("language", "#apa", [this.language.language]);
            b.sze.psg("audio", "#apa", [this.language.audio]);
            b.sze.psg("fullscreen", "#apa", [this.language.nhf]);
            b.sze.psg("help", "#apa", [this.language.fow]);
            b.sze.psg("history", "#apa", [this.language.wqz]);
            b.sze.psg("statistic", "#apa", [this.language.qyn]);
            b.sze.psg("deposit", "#apa", [this.language.obo])
        }
        if (a) {
            a.apa("freeplay", this.language.rtx)
        }
    };
    this.dju = function() {
        var c = this.hhv.djj("history"),
            d = this.hhv.djj("winn");
        this.brp = true;
        this.gox = false;
        if (this.bta) {
            this.bta.xza(false)
        }
        if (this.ykd) {
            this.ykd.xza(false)
        }
        if (this.fvf) {
            this.fvf.xza(false)
        }
        if (this.kqg) {
            this.kqg.xza(false)
        }
        if (this.gik) {
            this.gik.xza(false)
        }
        if (this.ayr) {
            this.ayr.xza(false)
        }
        for (var b = 0, a = this.tzi.length; b < a; b++) {
            this.tzi[b].xza(false)
        }
        if (this.gsa) {
            this.gsa.xza(false)
        }
        this.hhv.psg("rstat", "#xza", [false]);
        this.hhv.psg("gameb", "#xza", [false]);
        this.hhv.psg("ginfo", "#xza", [false]);
        this.hhv.psg("rinfo", "#xza", [false]);
        if (c) {
            c.nht(0);
            c.xza(true)
        }
        if (d) {
            d.ota(this.ore.wqz.dut.eso);
            d.qgh(this.ore.wqz.dut);
            d.nct(-1)
        }
        if (this.faj) {
            this.faj.ota(this.ore.wqz.faj.eso);
            this.faj.qgh(this.ore.wqz.faj);
            this.faj.xza(true)
        }
        this.lys();
        this.jlg();
        this.tmo(true);
        this.jlg()
    };
    this.jrf = function() {
        var c = this.hhv.djj("winn");
        this.brp = false;
        this.gox = false;
        this.hmp = false;
        if (this.bta) {
            this.bta.xza(true)
        }
        if (this.ykd) {
            this.ykd.xza(true)
        }
        if (this.fvf) {
            this.fvf.xza(true)
        }
        if (this.ayr) {
            this.ayr.xza(true)
        }
        for (var b = 0, a = this.tzi.length; b < a; b++) {
            this.tzi[b].xza(true)
        }
        this.hhv.psg("gameb", "#xza", [true]);
        this.hhv.psg("ginfo", "#xza", [true]);
        this.hhv.psg("rinfo", "#xza", [true]);
        this.hhv.psg("history", "#xza", [false]);
        if (c) {
            c.ota(this.ore.dut.eso);
            c.qgh(this.ore.dut);
            c.nct(-1)
        }
        if (this.faj) {
            this.faj.ota(this.ore.faj.eso);
            this.faj.qgh(this.ore.faj)
        }
        this.lys();
        this.jlg();
        this.tmo(false);
        this.imc.connect(this.zyr, this.juz, this.gpj, this.dgh, this.lsu, this.tie, this.qka)
    };
    this.yfv = function(c, b, e, d, l, m, a, f, j) {
        var n = this.hhv.djj("history");
        this.lys();
        this.kmb = c;
        for (var g = 0, k = a.length; g < k; g++) {
            this.urv(a[g])
        }
        if (n) {
            n.kmb = c;
            n.jbw = e;
            n.zjv = d;
            n.win = l;
            n.jen(j)
        }
        this.hhv.psg("winn", "#nct", [m]);
        if (this.faj) {
            this.faj.grg(m)
        }
        this.tmo(true);
        this.jlg()
    };
    this.imf = function() {
        this.xom();
        this.dnp(false);
        this.xeq();
        if (this.bta) {
            this.bta.xza(false)
        }
        if (this.fvf) {
            this.fvf.xza(false)
        }
        this.tuz();
        if (this.gsa != null) {
            this.gsa.xza(false)
        }
        if (this.kqg) {
            this.kqg.ftu()
        }
        this.jlg()
    };
    this.pbe = function() {
        this.dnp(true);
        if (this.bta) {
            this.bta.xza(true)
        }
        if (this.fvf) {
            this.fvf.xza(true)
        }
        this.qtk();
        if (this.gsa != null) {
            this.gsa.xza(true)
        }
        if (this.kqg) {
            this.kqg.mcn()
        }
        this.jlg()
    };
    this.gec = function() {
        clearTimeout(this.wgy);
        edt.prototype.gec.call(this)
    };
    this.eot = function() {
        edt.prototype.eot.call(this);
        if (this.gsa) {
            this.gsa.stop()
        }
    };
    this.krh = function() {
        if (this.xsh === false && (tlg.tpm.hyz === tlg.fcw.pcn || tlg.tpm.hyz === tlg.fcw.pdc) && tlg.tpm.coo() === true) {
            return true
        }
        return false
    }
}
edt.prototype = new zsr;

function vbn() {
    tlg.wjn = -1;
    tlg.xiv = new edt();
    tlg.xiv.wem({
        ore: tlg.ore.ugy
    });
    window.focus()
}

function det() {
    if (tlg.xiv != null) {
        if (tlg.wjn >= 0) {
            clearTimeout(tlg.wjn)
        }
        tlg.wjn = setTimeout(tlg.xiv.wvv, 200)
    }
}
window.onresize = det;
if (tlg.fxx.value9) {
    window.onload = vbn
} else {
    vbn()
};