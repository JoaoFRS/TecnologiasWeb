var playerWins ;
var playerLosses;
var cpuWins;
var cpuLosses;

function closeOtherWindows() {
    var x = document.getElementById("pontuacaoOnline");

	if (x.style.display == 'block') {
		x.style.display = 'none';
	}
	else {
		var a = document.getElementById("Regra0");
		var b = document.getElementById("Regra1");
		var c = document.getElementById("Regra2");
		var d = document.getElementById("Regra3");
		var e = document.getElementById("Regra4");
		var f = document.getElementById("Regra5");
		var g = document.getElementById("Regra6");
		var h = document.getElementById("formularioLogin");
		var i = document.getElementById("config");
		var j = document.getElementById("instrucoes");
		var k = document.getElementById("pontuacao");
		k.style.display = 'none';
		a.style.display = 'none';
		b.style.display = 'none';
		c.style.display = 'none';
		d.style.display = 'none';
		e.style.display = 'none';
		f.style.display = 'none';
		g.style.display = 'none';
		h.style.display = 'none';
		i.style.display = 'none';
		j.style.display = 'none';
		x.style.display = 'block';
    }
}

function replaceTitles(x) {
    var title_row = document.createElement("tr");
    var user_header = document.createElement("th");
    var victory_header = document.createElement("th");
    var game_header = document.createElement("th");
    var user_text = document.createTextNode("Username");
    user_header.appendChild(user_text);
    var victory_text = document.createTextNode("Vitórias");
    victory_header.appendChild(victory_text);
    var game_text = document.createTextNode("Jogos");
    game_header.appendChild(game_text);
    title_row.appendChild(user_header);
    title_row.appendChild(victory_header);
    title_row.appendChild(game_header);
    x.appendChild(title_row);
}

function botaoLogin() {
	var x = document.getElementById("formularioLogin");
	if (x.style.display == 'block') {
		x.style.display = 'none';
	}
	else {
		var a = document.getElementById("Regra0");
		var b = document.getElementById("Regra1");
		var c = document.getElementById("Regra2");
		var d = document.getElementById("Regra3");
		var e = document.getElementById("Regra4");
		var f = document.getElementById("Regra5");
		var g = document.getElementById("Regra6");
		var h = document.getElementById("pontuacao");
		var i = document.getElementById("config");
		var j = document.getElementById("instrucoes");
		var k = document.getElementById("pontuacaoOnline");
		k.style.display = 'none';
		a.style.display = 'none';
		b.style.display = 'none';
		c.style.display = 'none';
		d.style.display = 'none';
		e.style.display = 'none';
		f.style.display = 'none';
		g.style.display = 'none';
		h.style.display = 'none';
		i.style.display = 'none';
		j.style.display = 'none';
		x.style.display = 'block';
	}
}

function botaoInstrucoes() {
	var x = document.getElementById("instrucoes");
	if (x.style.display == 'block')
		x.style.display = 'none';
	else {
		var a = document.getElementById("Regra0");
		var b = document.getElementById("Regra1");
		var c = document.getElementById("Regra2");
		var d = document.getElementById("Regra3");
		var e = document.getElementById("Regra4");
		var f = document.getElementById("Regra5");
		var g = document.getElementById("Regra6");
		var h = document.getElementById("pontuacao");
		var i = document.getElementById("config");
		var j = document.getElementById("formularioLogin");
		var k = document.getElementById("pontuacaoOnline");
		k.style.display = 'none';
		a.style.display = 'none';
		b.style.display = 'none';
		c.style.display = 'none';
		d.style.display = 'none';
		e.style.display = 'none';
		f.style.display = 'none';
		g.style.display = 'none';
		h.style.display = 'none';
		i.style.display = 'none';
		j.style.display = 'none';
		x.style.display = 'block';
	}
}

function botaoPontuacao() {
	var x = document.getElementById("pontuacao");

	if (x.style.display == 'block') {
		x.style.display = 'none';
	}
	else {
		var a = document.getElementById("Regra0");
		var b = document.getElementById("Regra1");
		var c = document.getElementById("Regra2");
		var d = document.getElementById("Regra3");
		var e = document.getElementById("Regra4");
		var f = document.getElementById("Regra5");
		var g = document.getElementById("Regra6");
		var h = document.getElementById("formularioLogin");
		var i = document.getElementById("config");
		var j = document.getElementById("instrucoes");
		var k = document.getElementById("pontuacaoOnline");
		k.style.display = 'none';
		a.style.display = 'none';
		b.style.display = 'none';
		c.style.display = 'none';
		d.style.display = 'none';
		e.style.display = 'none';
		f.style.display = 'none';
		g.style.display = 'none';
		h.style.display = 'none';
		i.style.display = 'none';
		j.style.display = 'none';
		x.style.display = 'block';
    var rows = document.getElementById("pontuacao").rows;
    if (typeof(Storage) !== undefined ) {
      if(localStorage.getItem("playerWins")== null || isNaN(localStorage.getItem("playerWins")))
        localStorage.setItem("playerWins",0);
      if(localStorage.getItem('playerLosses')== null || isNaN(localStorage.getItem('playerLosses')))
        localStorage.setItem('playerLosses',0);
      if(localStorage.getItem('cpuWins')== null || isNaN(localStorage.getItem('cpuWins')))
        localStorage.setItem('cpuWins',0);
      if(localStorage.getItem('cpuLosses')== null || isNaN(localStorage.getItem('cpuLosses')))
        localStorage.setItem('cpuLosses',0);

      rows[1].cells[1].innerHTML = localStorage.getItem("playerWins");
      rows[1].cells[2].innerHTML = localStorage.getItem('playerLosses');
      rows[2].cells[1].innerHTML = localStorage.getItem('cpuWins');
      rows[2].cells[2].innerHTML = localStorage.getItem('cpuLosses');
    }

	}
}

function botaoRegras(button) {
	if (button == 0) {
		var x = document.getElementById("Regra0");
		var a = document.getElementById("Regra1");
		var b = document.getElementById("Regra2");
		var c = document.getElementById("Regra3");
		var d = document.getElementById("Regra4");
		var e = document.getElementById("Regra5");
		var f = document.getElementById("Regra6");
		var g = document.getElementById("pontuacao");
		var h = document.getElementById("formularioLogin");
		var i = document.getElementById("config");
		var j = document.getElementById("instrucoes");
		var k = document.getElementById("pontuacaoOnline");
		if (x.style.display == 'flex' || a.style.display == 'flex' || b.style.display == 'flex' || c.style.display == 'flex' || d.style.display == 'flex' || e.style.display == 'flex' || f.style.display == 'flex') {
			x.style.display = 'none';
			a.style.display = 'none';
			b.style.display = 'none';
			c.style.display = 'none';
			d.style.display = 'none';
			e.style.display = 'none';
			f.style.display = 'none';
		}
		else {
			k.style.display = 'none';
			g.style.display = 'none';
			h.style.display = 'none';
			i.style.display = 'none';
			j.style.display = 'none';
			x.style.display = 'flex';
		}
	}

	else {
		var x = document.getElementById("Regra0");
		var y = document.getElementById("Regra1");
		x.style.display = 'flex';
		y.style.display = 'none';
	}
}

function botaoIr1(button) {
	if (button == 0) {
		var x = document.getElementById("Regra0");
		var y = document.getElementById("Regra1");
		x.style.display = 'none';
		y.style.display = 'flex';
	}
	else {
		var x = document.getElementById("Regra1");
		var y = document.getElementById("Regra2");
		x.style.display = 'flex';
		y.style.display = 'none';

	}
}

function botaoIr2(button) {
	if (button == 0) {
		var x = document.getElementById("Regra1");
		var y = document.getElementById("Regra2");
		x.style.display = 'none';
		y.style.display = 'flex';
	}
	else {
		var x = document.getElementById("Regra2");
		var y = document.getElementById("Regra3");
		x.style.display = 'flex';
		y.style.display = 'none';

	}
}

function botaoIr3(button) {
	if (button == 0) {
		var x = document.getElementById("Regra2");
		var y = document.getElementById("Regra3");
		x.style.display = 'none';
		y.style.display = 'flex';
	}
	else {
		var x = document.getElementById("Regra3");
		var y = document.getElementById("Regra4");
		x.style.display = 'flex';
		y.style.display = 'none';

	}

}

function botaoIr4(button) {
	if (button == 0) {
		var x = document.getElementById("Regra3");
		var y = document.getElementById("Regra4");
		x.style.display = 'none';
		y.style.display = 'flex';
	}
	else {
		var x = document.getElementById("Regra4");
		var y = document.getElementById("Regra5");
		x.style.display = 'flex';
		y.style.display = 'none';

	}
}

function botaoIr5(button) {
	if (button == 0) {
		var x = document.getElementById("Regra4");
		var y = document.getElementById("Regra5");
		x.style.display = 'none';
		y.style.display = 'flex';
	}
	else {
		var x = document.getElementById("Regra5");
		var y = document.getElementById("Regra6");
		x.style.display = 'flex';
		y.style.display = 'none';

	}
}

function botaoIr6(button) {
	var x = document.getElementById("Regra5");
	var y = document.getElementById("Regra6");
	x.style.display = 'none';
	y.style.display = 'flex';

}

function botaoConfig() {
	var x = document.getElementById("config");
	if (x.style.display == 'block') {
		x.style.display = 'none';
	}
	else {
		var a = document.getElementById("Regra0");
		var b = document.getElementById("Regra1");
		var c = document.getElementById("Regra2");
		var d = document.getElementById("Regra3");
		var e = document.getElementById("Regra4");
		var f = document.getElementById("Regra5");
		var g = document.getElementById("Regra6");
		var h = document.getElementById("formularioLogin");
		var i = document.getElementById("pontuacao");
		var j = document.getElementById("instrucoes");
		var k = document.getElementById("pontuacaoOnline");
		k.style.display = 'none';
		a.style.display = 'none';
		b.style.display = 'none';
		c.style.display = 'none';
		d.style.display = 'none';
		e.style.display = 'none';
		f.style.display = 'none';
		g.style.display = 'none';
		h.style.display = 'none';
		i.style.display = 'none';
		j.style.display = 'none';
		x.style.display = 'block';
	}

}

function closeMSG() {
	var m = document.getElementById("messageboard");
	var c = document.getElementById("clsmsg");
	m.style.display = 'none';
	c.style.display = 'none';
}

function nivel() {
	var x = document.getElementById("Computador");
	var y= document.getElementById("Jogador");
	var escolha = document.getElementById("dificuldade");
	if (x.checked == true) {
		escolha.style.display = 'block';
	}
	else {
		escolha.style.display = 'none';
	}
	//se jogador está escolhido ter a certeza que os outros niveis não estão, pois como não tem "name" não está garantido que não está escolhido
	if(y.checked==true){
		document.getElementById("facil").checked=false;
		document.getElementById("dificil").checked=false;
	}
}

/*--------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------jogo----------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------*/
quemcomeça="";
my_hand = Array(7);
opp_hand = Array(7);
monte = Array(28);
played= Array(0);
jogadaspossiveis=Array(0);
lastclicked=Array(-1,-1);
naojogo="";
played_each = [0,0,0,0,0,0,0];
terminou = 0;
acabou="";
class Peca {
	constructor(x, y) {
		this.left = x;
		this.right = y;
	}
	setLeft(y){
		this.left=y;
	}

	setRight(x){
		this.right=x;
	}
	set(x, y) {
		this.left = x;
		this.right = y;
	}

	getLeft(){
		return this.left;
	}

	getRight(){
		return this.right;
	}

}

//sempre que se cpu ou jogador pega peça do monte ou joga uma peça esta função é chamada
//para atualizar o respetivo monte
function atualizapecas(caixa,array){
	if(caixa=="opp"){
		var y = document.getElementById("adversario");
		y.innerHTML="";
		for(let i=0;i<array.length;i++){
			var z=document.createTextNode(String.fromCodePoint(127074));
			y.appendChild(z);
		}
	}
	else if(caixa=="my"){
		var a = document.getElementById("jogador");
		a.innerHTML="";
		for(let i=0;i<array.length;i++){
			var peca=array[i];
			let x = peca.getLeft();
			let y = peca.getRight();
			let code = 127075 + x*7 + y;
			var w= document.createElement("BOX");
			w.setAttribute("id","dominos");
			var z=document.createTextNode(String.fromCodePoint(code));
			w.appendChild(z);
			w.addEventListener("click", function(){clickedpecajogador(x,y);});
			document.getElementById("jogador").appendChild(w);
		}
	}
	else if(caixa=="monte"){
		var y = document.getElementById("monte");
		y.innerHTML="";
		var z=document.createTextNode(String.fromCodePoint(127074));
		y.appendChild(z);
		z=document.createTextNode(array.length);
		y.appendChild(z);
		var pa=document.createElement("BUTTON");
		pa.setAttribute("id", "passa");
    if(monte.length>0 && document.getElementById("Jogador").checked)
		  pa.innerHTML="Monte";
    else {
      pa.innerHTML="Passar";
    }
		pa.addEventListener("click",function(){passei()});
		y.appendChild(pa);
	}
	else{
		var a = document.getElementById("areajogo");
		a.innerHTML="";
		for(let i=0;i<array.length;i++){
			var peca=array[i];
			let x = peca.getLeft();
			let y = peca.getRight();
			let code;
			if(x==y)
				code = 127075 + x*7 + y;
			else
				code=127025 + x*7+y;
			var w= document.createElement("BOX");
			w.setAttribute("id","dominos");
			var z=document.createTextNode(String.fromCodePoint(code));
			w.appendChild(z);
			if(i==0){
				w.addEventListener("click", function(){clickedleft(x,y);});
				w.setAttribute("id","dominoesquerda");
				if(array.length==1)
					w.addEventListener("click", function(){clickedright(x,y);});
			}
			else if(i==array.length-1){
				w.addEventListener("click", function(){clickedright(x,y);});
			}
			else{

			}
			document.getElementById("areajogo").appendChild(w);
		}
	}
}
function findPeca(peca) {
	let i = 0;
	while (i<my_hand.length) {
		if (peca.getLeft() == my_hand[i].getLeft() && peca.getRight() == my_hand[i].getRight()) {
			return i;
		}
		i++;
	}
}

function quemvenceu(){
	let valorjogador=0;
	let valorcpu=0;
	for(let i=0;i<my_hand.length;i++){
		valorjogador+=my_hand[i].getLeft();
		valorjogador+=my_hand[i].getRight();
	}
	for(let i=0;i<opp_hand.length;i++){
		valorcpu+=opp_hand[i].getLeft();
		valorcpu+=opp_hand[i].getRight();
	}
	if(valorcpu>valorjogador)
		return "my";
	else if(valorjogador>valorcpu)
		return "opp";
	else
		return "empate";
}

function passei(){
  if(document.getElementById("facil").checked==true || document.getElementById("dificil").checked==true) {
  	verifica_mao();
  	if(naojogo!="passo"){
  		var messages = document.getElementById("messageboard");
  		messages.innerHTML += "Tem jogadas disponíveis";
  		var paragraph = document.createElement("br");
  		messages.appendChild(paragraph);
  		paragraph.scrollIntoView();
  	}
  	if(naojogo=="passo"){
      //retirar isto no caso de passei estar correto
  		if(document.getElementById("facil").checked==true || document.getElementById("dificil").checked==true) {

  			cpumove();
  		}
  		if (acabou=="passo"){
  			vencedor=quemvenceu();
  			var x = document.getElementById("gametable");
  			var y = document.getElementById("desistir");
  			var z = document.getElementById("playbutton");
  			var p = document.getElementById("pontuacao");
  			var messages = document.getElementById("messageboard");
  			x.style.display = 'none';
  			y.style.display = 'none';
  			z.style.display = 'block';
  			p.style.display = 'block';
  			if(vencedor=="my") {
  				if (terminou == 0) {
  					updateTable(1);
  				}
  			}
  			else if(vencedor=="opp") {
  				if (terminou == 0) {
  					updateTable(-1);
  				}
  			}
  			else {
  				messages.innerHTML += "Empataram. Que improvável!";
  				var paragraph = document.createElement("br");
  				messages.appendChild(paragraph);
  				paragraph.scrollIntoView();
  			}
  		}
  	}
  }
  else{
    if(monte.length>0)
      notify(undefined,undefined,undefined);
    else
      notify(undefined,undefined,null)
  }
}
  function cpumove(){
  	var l = opp_hand.length;
  	if(document.getElementById("facil").checked)
  		acabou=facil(opp_hand,jogadaspossiveis);
  	else
  		acabou=dificil(opp_hand,jogadaspossiveis);
  	if (opp_hand.length >= l) {
  		if (terminou == 0) {
  			var messages = document.getElementById("messageboard");
  			if(acabou=="passo")
  				messages.innerHTML +="O computador passou";
  			else
  				messages.innerHTML += "O computador foi buscar peças ao monte";
  			var paragraph = document.createElement("br");
  			messages.appendChild(paragraph);
  			paragraph.scrollIntoView();
  		}
  	}
  	checkWin(opp_hand,"opp");

}

function verifica_mao(){
	var le = my_hand.length;
	naojogo=testajogada(my_hand,jogadaspossiveis);
	if (my_hand.length > le) {
		if (terminou == 0) {
			var messages = document.getElementById("messageboard");
			messages.innerHTML += "Teve de ir buscar uma peça ao monte.";
			var paragraph = document.createElement("br");
			messages.appendChild(paragraph);
			paragraph.scrollIntoView();
		}
	}
}
function playermove(lado){
	var acrescentajogada=new Peca(lastclicked[0],lastclicked[1]);
	var pos=findPeca(acrescentajogada);
	my_hand.splice(pos,1);
	if(lado=="direita")
		acrescentajogada=direita(acrescentajogada);
	else if(lado=="esquerda")
		acrescentajogada=esquerda(acrescentajogada);
	if (acrescentajogada.getLeft() != acrescentajogada.getRight()) {
	  played_each[acrescentajogada.getLeft()]++;
	  played_each[acrescentajogada.getRight()]++;
	}
	else
	  played_each[acrescentajogada.getRight()]++;
	atualizapecas("my",my_hand);
	atualizapecas("areajogo",played);
	lastclicked[0]=-1;
	lastclicked[1]=-1;
	checkWin(my_hand,"my");
}

function direita(acrescentajogada){
	if(lastclicked[0]==jogadaspossiveis[1])
	jogadaspossiveis[1]=lastclicked[1];
	else if(lastclicked[1]==jogadaspossiveis[1]){
		jogadaspossiveis[1]=lastclicked[0];
		acrescentajogada.set(lastclicked[1],lastclicked[0]);
	}
	played.push(acrescentajogada);
	return acrescentajogada;
}

function esquerda(acrescentajogada){
	if(lastclicked[1]==jogadaspossiveis[0])
	  jogadaspossiveis[0]=lastclicked[0];
	else if(lastclicked[0]==jogadaspossiveis[0]){
	  jogadaspossiveis[0]=lastclicked[1];
	  acrescentajogada.set(lastclicked[1],lastclicked[0]);
	}
	played.unshift(acrescentajogada);
	return acrescentajogada;
}


function movimentoinvalido(){
	var m = document.getElementById("messageboard");
	m.innerHTML += "Movimento inválido. Por favor tente uma jogada diferente";
	var paragraph = document.createElement("br");
	m.appendChild(paragraph);
	paragraph.scrollIntoView();
	lastclicked[0]=-1;
	lastclicked[1]=-1;
}

function clickedpecajogador(l,r){
	lastclicked[0]=l;
	lastclicked[1]=r;
    if(document.getElementById("Jogador").checked) {
        notify(undefined,lastclicked,undefined);
    }
}

function clickedleft(l,r){
  if(document.getElementById("facil").checked==true|| document.getElementById("dificil").checked==true) {
  	if(lastclicked[0]==-1 || lastclicked[1]==-1) {
  	}
  	else if(lastclicked[0]!=jogadaspossiveis[0] && lastclicked[1]!=jogadaspossiveis[0] && played.length!=1){
  		movimentoinvalido();
  	}
  	else if(lastclicked[0]!=jogadaspossiveis[0] && lastclicked[1]!=jogadaspossiveis[0] && played.length==1){
  	}
  	else{
  		playermove("esquerda");
  	  cpumove();
  	  verifica_mao();
  	}
  }
  else if(document.getElementById("Jogador").checked==true){
    notify("start",lastclicked,undefined);
  }
}

function clickedright(l,r){
	if(document.getElementById("facil").checked==true|| document.getElementById("dificil").checked==true) {
  	if(lastclicked[0]==-1 || lastclicked[1]==-1) {
  	}
  	else if(lastclicked[0]!=jogadaspossiveis[1] && lastclicked[1]!=jogadaspossiveis[1]){
  		movimentoinvalido();
  	}
  	else {
  		playermove("direita");
  		cpumove();
  	  verifica_mao();
  	}
  }
  else if(document.getElementById("Jogador").checked==true && played.length>1){
    notify("end",lastclicked,undefined);
  }
}

function testajogada(array,possiveis){
	flag =0;
	for(let i=0;i<my_hand.length; i++){
		if (typeof my_hand[i] != "undefined"){
			if (my_hand[i].getRight() == possiveis[0] || my_hand[i].getLeft()==possiveis[0] || my_hand[i].getRight()==possiveis[1] ||my_hand[i].getLeft()==possiveis[1]){
				flag=1;
				break;
			}
		}
	}
if(flag==1)
	return " ";
else{
	let pecamonte=new Array(0);
	let novapeca=buscaMonte("my");
	if(typeof novapeca != "undefined"){
		pecamonte.push(novapeca);
	}
	else {
		return "passo";
	}
	verifica_mao();

}

}

//updateTable tambem apresenta mensagens de vitoria e derrota na message board
function updateTable(result) {
    var rows = document.getElementById("pontuacao").rows;
	if (result == -1) {
        if (typeof(Storage) !== undefined) {
            if(localStorage.getItem("playerWins")== null || isNaN(localStorage.getItem("playerWins")))
                localStorage.setItem("playerWins",0);
            if(localStorage.getItem("playerLosses")== null || isNaN(localStorage.getItem("playerLosses")))
                localStorage.setItem("playerLosses",0);
            if(localStorage.getItem("cpuWins")== null || isNaN(localStorage.getItem("cpuWins")))
                localStorage.setItem("cpuWins",0);
            if(localStorage.getItem("cpuLosses")== null || isNaN(localStorage.getItem("cpuLosses")))
                localStorage.setItem("cpuLosses",0);

            playerLosses = parseInt(localStorage.getItem('playerLosses'))+1;
            cpuWins = parseInt(localStorage.getItem('cpuWins'))+1;
    		localStorage.setItem('playerLosses', playerLosses);
            localStorage.setItem('cpuWins', cpuWins);
            rows[1].cells[1].innerHTML = localStorage.getItem('playerWins');
            rows[1].cells[2].innerHTML = localStorage.getItem('playerLosses');
            rows[2].cells[1].innerHTML = localStorage.getItem('cpuWins');
            rows[2].cells[2].innerHTML = localStorage.getItem('cpuLosses');
        }
		var messages = document.getElementById("messageboard");
		messages.innerHTML += "Perdeu. Melhor sorte para a próxima.";
		var paragraph = document.createElement("br");
		messages.appendChild(paragraph);
		paragraph.scrollIntoView();
		terminou = 1;
	}

	else {
        if (typeof(Storage) !== undefined) {
            if(localStorage.getItem("playerWins")== null || isNaN(localStorage.getItem("playerWins")))
                localStorage.setItem("playerWins",0);
            if(localStorage.getItem("playerLosses")== null || isNaN(localStorage.getItem("playerLosses")))
                localStorage.setItem("playerLosses",0);
            if(localStorage.getItem("cpuWins")== null || isNaN(localStorage.getItem("cpuWins")))
                localStorage.setItem("cpuWins",0);
            if(localStorage.getItem("cpuLosses")== null || isNaN(localStorage.getItem("cpuLosses")))
                localStorage.setItem("cpuLosses",0);

            playerWins = parseInt(localStorage.getItem('playerWins'))+1;
            cpuLosses = parseInt(localStorage.getItem('cpuLosses'))+1;
    		localStorage.setItem('playerWins', playerWins);
            localStorage.setItem('cpuLosses', cpuLosses);
            rows[1].cells[1].innerHTML = localStorage.getItem('playerWins');
            rows[1].cells[2].innerHTML = localStorage.getItem('playerLosses');
            rows[2].cells[1].innerHTML = localStorage.getItem('cpuWins');
            rows[2].cells[2].innerHTML = localStorage.getItem('cpuLosses');
        }
		var messages = document.getElementById("messageboard");
		messages.innerHTML += "Parabéns! É o vencedor!";
		var paragraph = document.createElement("br");
		messages.appendChild(paragraph);
		paragraph.scrollIntoView();
		terminou = 1;
	}
	var x = document.getElementById("clsmsg");
	x.style.display = 'block';
}
function fechajogo(){
	var p = document.getElementById("playbutton");
	var g = document.getElementById("desistir");
	var d = document.getElementById("gametable");
	var t = document.getElementById("pontuacao");
	t.style.display = 'block';
	d.style.display = 'none';
	g.style.display = 'none';
	p.style.display = 'block';
}
function checkWin(array, who) {
	let l = array.length;
	if (l == 0) {
		if (who == "my") {
			fechajogo();
			if(terminou==0)
				updateTable(1);
		}
		else {
			fechajogo();
			if(terminou==0)
				updateTable(-1);
		}
	}
}

//define quem começa a jogar primeiro(i.e quem tem a peça mais alta)
function firstmove(my_hand,opp_hand){
	var maxplayer=0;
	var maxcpu=0
	var posiçaocpu;
	var posiçaoplayer;
	for(let i=0;i<=6;i++){
		var pecajogador=my_hand[i];
		var pecacpu=opp_hand[i];
		var valorpecaplayer=pecajogador.getLeft()+pecajogador.getRight();
		var valorpecacpu=pecacpu.getLeft()+pecacpu.getRight();
		if(valorpecaplayer>maxplayer){
			maxplayer=valorpecaplayer;
			posiçaoplayer=i;
		}
		if(valorpecacpu>maxcpu){
			maxcpu=valorpecacpu;
			posiçaocpu=i;
		}
	}
	//se for jogador a começar deixa jogador escolher
	//se for cpu devolve logo posição para evitar nova chamada a função
	if(maxplayer<=maxcpu){
		quemcomeça="cpu";
		return posiçaocpu;
	}
	else{
		quemcomeça="player";
		return posiçaoplayer;
	}

}

	function iniciarJogo() {
		//se jogador for selecionado chama o join do "online.js"
		if(document.getElementById("Jogador").checked){
				var log=join(76045);
				if (log==0)
					return;
		}
		else if (!document.getElementById("facil").checked && !document.getElementById("dificil").checked) {
			window.alert("Por favor escolha um nível de dificuldade");
			return;
		}
		terminou = 0; //precisa de retomar a 0 sempre que se inicia um jogo
		var a = document.getElementById("Regra0");
		var b = document.getElementById("Regra1");
		var c = document.getElementById("Regra2");
		var d = document.getElementById("Regra3");
		var e = document.getElementById("Regra4");
		var f = document.getElementById("Regra5");
		var g = document.getElementById("Regra6");
		var h = document.getElementById("formularioLogin");
		var i = document.getElementById("pontuacao");
		var p=document.getElementById("playbutton");
		var config = document.getElementById("config");
		var messages = document.getElementById("messageboard");
		var cls = document.getElementById("clsmsg");
		config.style.display = 'none';
		a.style.display = 'none';
		b.style.display = 'none';
		c.style.display = 'none';
		d.style.display = 'none';
		e.style.display = 'none';
		f.style.display = 'none';
		g.style.display = 'none';
		h.style.display = 'none';
		i.style.display = 'none';
		p.style.display="none";
		cls.style.display = 'none';
		messages.style.display = 'block';
		messages.innerHTML = "Boa sorte!";
		var paragraph = document.createElement("br");
		messages.appendChild(paragraph);
		my_hand = Array(7);
		opp_hand = Array(7);
		monte = Array(28);
		played= Array(0);
		jogadaspossiveis=Array(0);
		naojogo="";
		played_each = [0,0,0,0,0,0,0];
		acabou="";
		var d = document.getElementById("desistir");
		if (d.style.display == 'block') {
			d.style.display = 'none';
		}
		else
			d.style.display = 'block';

		var x = document.getElementById("gametable");
		if (x.style.display == 'flex') {
			x.style.display = 'none';
		}
		else {
			x.style.display = 'flex';
		}

		var y = document.getElementById("areajogo");
		var z = document.getElementById("adversario");
		var w = document.getElementById("jogador");
		var t = document.getElementById("monte");
		y.innerHTML = "";
		z.innerHTML = "";
		w.innerHTML = "";
		t.innerHTML = "";
		y.style.display='flex';


		//inicializa as pecas no array
        if (document.getElementById("facil").checked || document.getElementById("dificil").checked) {
    		let position = 0;
    		for (let i=0; i<=6; i++) {
    			for (let j=i; j<=6; j++) {
    				var peca = new Peca(i,j);
    				monte[position] = peca;
    				position++;
    			}
    		}
    		//dá as 7 pecas de forma aleatória a cada jogador e faz o display das mesmas
    		monte.sort(function(a, b){return 0.5 - Math.random()});
    		for(let i=0;i<=6;i++){
    			let a_tirar=monte.pop();
    			let a_tirar2=monte.pop();
    			my_hand[i]=a_tirar;
    			opp_hand[i]=a_tirar2;
    		}
    		atualizapecas("my",my_hand);
    		atualizapecas("opp",opp_hand);
    		atualizapecas("monte",monte);
    		//var jogadaspossiveis=new Array(0);

    		//decide quem é a começar
    		var primeirapeca=firstmove(my_hand,opp_hand);
    		//no caso de ser o computador;
    		if(quemcomeça!="player"){
    		//retira a peça,do array, que a função quemcomeça devolveu(i.e a peça mais alta na mão do cpu)
    			peca=opp_hand.splice(primeirapeca,1)[0];
    		//de seguida faz display da mesma na area de jogo(codigo em baixo ainda vai ser atualizado)
    			played.push(peca);
    			jogadaspossiveis.unshift(peca.getLeft());
    			jogadaspossiveis.push(peca.getRight());
    			if (peca.getLeft() != peca.getRight()) {
    				played_each[peca.getLeft()]++;
    				played_each[peca.getRight()]++;
    			}
    			else
    				played_each[peca.getLeft()]++;
    			verifica_mao();
    			atualizapecas("opp",opp_hand);
    			atualizapecas("tabuleiro",played);
    		}
    		else{
    			// no caso de ser o jogador;
    			peca=my_hand.splice(primeirapeca,1)[0];
    			played.push(peca);
    			jogadaspossiveis.unshift(peca.getLeft());
    			jogadaspossiveis.push(peca.getRight());
    			if (peca.getLeft() != peca.getRight()) {
    				played_each[peca.getLeft()]++;
    				played_each[peca.getRight()]++;
    			}
    			else
    				played_each[peca.getLeft()]++;
    			atualizapecas("my",my_hand);
    			atualizapecas("tabuleiro",played);
    			if(document.getElementById("facil").checked==true || document.getElementById("dificil").checked==true){
    				cpumove();
    			}
    			verifica_mao();
            }
        }
    }

	function desistir() {
		var x = document.getElementById("gametable");
		var y = document.getElementById("desistir");
		var p=document.getElementById("playbutton");
		var t = document.getElementById("pontuacao");
        if (document.getElementById("Jogador").checked)
            leave();
        else{
            updateTable(-1);
            t.style.display='block';
        }
		x.style.display = 'none';
		y.style.display = 'none';
		p.style.display="block";

	}

/*-------------------------------------------------------------------------------------------------------------------------------/
/-------------------------------------------------------------------CPU----------------------------------------------------------/
/-------------------------------------------------------------------------------------------------------------------------------*/
	function facil(array, possiveis) {
		let oppjogada;
		let auxleft;
		let auxright;
		for (let i=0; i<array.length; i++) {
			if (typeof opp_hand[i] != "undefined") {
				if (opp_hand[i].getRight() == possiveis[0]) { //se o valor da direita da peça é igual à ponta esquerda da linha de jogo
					oppjogada = opp_hand.splice(i,1)[0];
					possiveis[0] = oppjogada.getLeft();
					played.unshift(oppjogada);
					if (oppjogada.getLeft() != oppjogada.getRight()) {
						played_each[oppjogada.getLeft()]++;
						played_each[oppjogada.getRight()]++;
					}
					else
						played_each[oppjogada.getLeft()]++;
					atualizapecas("opp", opp_hand);
					atualizapecas("tabuleiro", played);
					return;
				}
				else if (opp_hand[i].getLeft() == possiveis[0]) {
					oppjogada = opp_hand.splice(i,1)[0];
					possiveis[0] = oppjogada.getRight();
					auxleft = oppjogada.getLeft();
					auxright = oppjogada.getRight();
					oppjogada.setLeft(auxright);
					oppjogada.setRight(auxleft);
					played.unshift(oppjogada);
					if (oppjogada.getLeft() != oppjogada.getRight()) {
						played_each[oppjogada.getLeft()]++;
						played_each[oppjogada.getRight()]++;
					}
					else
						played_each[oppjogada.getLeft()]++;
					atualizapecas("opp", opp_hand);
					atualizapecas("tabuleiro", played);
					return;
				}
				else if (opp_hand[i].getRight() == possiveis[1]) {
					oppjogada = opp_hand.splice(i,1)[0];
					possiveis[1] = oppjogada.getLeft();
					auxleft = oppjogada.getLeft();
					auxright = oppjogada.getRight();
					oppjogada.setLeft(auxright);
					oppjogada.setRight(auxleft);
					played.push(oppjogada);
					if (oppjogada.getLeft() != oppjogada.getRight()) {
						played_each[oppjogada.getLeft()]++;
						played_each[oppjogada.getRight()]++;
					}
					else
						played_each[oppjogada.getLeft()]++;
					atualizapecas("opp", opp_hand);
					atualizapecas("tabuleiro", played);
					return;
				}
				else if (opp_hand[i].getLeft() == possiveis[1]) {
					oppjogada = opp_hand.splice(i,1)[0];
					possiveis[1] = oppjogada.getRight();
					played.push(oppjogada);
					if (oppjogada.getLeft() != oppjogada.getRight()) {
						played_each[oppjogada.getLeft()]++;
						played_each[oppjogada.getRight()]++;
					}
					else
						played_each[oppjogada.getLeft()]++;
					atualizapecas("opp", opp_hand);
					atualizapecas("tabuleiro", played);
					return;
				}
			}
		}

		let pecamonte=new Array(0);
		let novapeca=buscaMonte("opp");
		if(typeof novapeca != "undefined"){
			pecamonte.push(novapeca);
		}
		else {
			return "passo";
		}

		facil(pecamonte,possiveis);
	}

	//retira uma peça do monte e adiciona à mão
	function buscaMonte(jogada){
		let p=monte.splice(0,1)[0];
		if(typeof p== "undefined")
			return p;
		if(jogada=="opp"){
			atualizapecas("monte",monte);
			opp_hand.unshift(p);
			atualizapecas("opp",opp_hand);
			return p;
		}
		else{
			atualizapecas("monte",monte);
			my_hand.unshift(p);
			atualizapecas("my",my_hand);
			return p;
		}
	}

	//nivel de dificuldade dificil
	function dificil(array, possiveis) {
		let max = -1;
		let oppjogada;
		let indexmax=-1;
		let podejogar=Array(0);
		let arraycomparação=[0,0,0,0,0,0,0];
		let pl

		for (let i=0; i<array.length; i++) {
			if (typeof opp_hand[i] != 'undefined') {
				if (opp_hand[i].getRight() == possiveis[0] || opp_hand[i].getRight() == possiveis[1]){
					arraycomparação[opp_hand[i].getLeft()]=1;
					podejogar.unshift(i);
				}
				else if (opp_hand[i].getLeft() == possiveis[0] || opp_hand[i].getLeft() == possiveis[1]){
					arraycomparação[opp_hand[i].getRight()]=1;
					podejogar.unshift(i);
				}
			}
		}
		for (let i=0; i<7; i++) {
			if (played_each[i] > max && arraycomparação[i]==1) {
				max = played_each[i];
				indexmax = i;
			}
		}

		for (let i=0; i<array.length; i++) {
			if (typeof opp_hand[i] != 'undefined') {
				if (opp_hand[i].getLeft() == indexmax || opp_hand[i].getRight()==indexmax) { //se a esquerda da peça é o numero mais jogado até agora
					if (opp_hand[i].getRight() == possiveis[0]) {
						oppjogada = opp_hand.splice(i,1)[0];
						possiveis[0] = oppjogada.getLeft();
						played.unshift(oppjogada);
						if (oppjogada.getLeft() != oppjogada.getRight()) {
							played_each[oppjogada.getLeft()]++;
							played_each[oppjogada.getRight()]++;
						}
						else
							played_each[oppjogada.getLeft()]++;

						atualizapecas("opp", opp_hand);
						atualizapecas("tabuleiro", played);
						return;
					}
					else if (opp_hand[i].getRight() == possiveis[1]) {
						oppjogada = opp_hand.splice(i,1)[0];
						possiveis[1] = oppjogada.getLeft();
						auxleft = oppjogada.getLeft();
						auxright = oppjogada.getRight();
						oppjogada.setLeft(auxright);
						oppjogada.setRight(auxleft);
						played.push(oppjogada);
						if (oppjogada.getLeft() != oppjogada.getRight()) {
							played_each[oppjogada.getLeft()]++;
							played_each[oppjogada.getRight()]++;
						}
						else
							played_each[oppjogada.getLeft()]++;
						atualizapecas("opp", opp_hand);
						atualizapecas("tabuleiro", played);
						return;
					}
					else if (opp_hand[i].getLeft() == possiveis[0]) {
						oppjogada = opp_hand.splice(i,1)[0];
						possiveis[0] = oppjogada.getRight();
						auxleft = oppjogada.getLeft();
						auxright = oppjogada.getRight();
						oppjogada.setLeft(auxright);
						oppjogada.setRight(auxleft);
						played.unshift(oppjogada);
						if (oppjogada.getLeft() != oppjogada.getRight()) {
							played_each[oppjogada.getLeft()]++;
							played_each[oppjogada.getRight()]++;
						}
						else
							played_each[oppjogada.getLeft()]++;
						atualizapecas("opp", opp_hand);
						atualizapecas("tabuleiro", played);
						return;
					}
					else if (opp_hand[i].getLeft() == possiveis[1]) {
						oppjogada = opp_hand.splice(i,1)[0];
						possiveis[1] = oppjogada.getRight();
						played.push(oppjogada);
						if (oppjogada.getLeft() != oppjogada.getRight()) {
							played_each[oppjogada.getLeft()]++;
							played_each[oppjogada.getRight()]++;
						}
						else
							played_each[oppjogada.getLeft()]++;
						atualizapecas("opp", opp_hand);
						atualizapecas("tabuleiro", played);
						return;
					}
				}

			}
		}


		if (podejogar.length == 0) {
			let pecamonte=new Array(0);
			let novapeca=buscaMonte("opp");
			if(typeof novapeca != "undefined"){
				pecamonte.push(novapeca);
			}
			else {
				return "passo";
			}

			dificil(pecamonte,possiveis);
		}
	}
