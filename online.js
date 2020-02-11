function getServer(command) {
    return('http://twserver.alunos.dcc.fc.up.pt:8113/' + command);
}
var nick="";
var opp_nick="";
var pass="";
var game;
var log=0;
var min=""
var sec="";
var turn="";
var intervalplayingID;
var interval_waiting_ID;
var tempo=0;
var total=120;

function ranking() {
    closeOtherWindows();
    fetch(getServer("ranking"), {
        method : 'POST',
        body: JSON.stringify("{}")
    })
    .then(response => response.json())
    .then(data => {
        let json_content = data;
        let json_ranking = json_content.ranking;
        var x = document.getElementById("pontuacaoOnline");
        x.innerHTML = "";
        replaceTitles(x);
        for (let i=0; i<json_ranking.length; i++) {
            var row = document.createElement("tr");
            x.appendChild(row);
            var username = document.createElement("td");
            let name = json_ranking[i].nick;
            var text = document.createTextNode(name);
            username.appendChild(text);
            var wins = document.createElement("td");
            let n_wins = json_ranking[i].victories;
            var number_wins = document.createTextNode(n_wins);
            wins.appendChild(number_wins);
            var gms = document.createElement("td");
            var n_gms = json_ranking[i].games;
            var number_games = document.createTextNode(n_gms);
            gms.appendChild(number_games);
            row.appendChild(username);
            row.appendChild(wins);
            row.appendChild(gms);
        }
    })
    .catch(console.log);
}

function logout() {
    nick = "";
    pass = "";
    if(game!=""){
      leave();
    }
    game = "";
    opp_nick = "";
    log = 0;
    document.getElementById("facil").checked=false;
    document.getElementById("dificil").checked=false;
    document.getElementById("Computador").checked=false;
    document.getElementById("Jogador").checked=false;
    document.getElementById("logoutButton").style.display = 'none';
    document.getElementById("nick").value = "";
    document.getElementById("pass").value = "";
}

function login() {
    nick = document.getElementById("nick").value;
    pass = document.getElementById("pass").value;
    //fazer umas verificações, tipo nao receber Password
    if (pass == "" || nick == "") {
        alert("Both fields must be filled");
        throw new Error('Empty password or username');
    }
    else
        register(nick,pass);
}

function register(nick, pass) {
    fetch(getServer("register"), {
        method: 'POST',
        body : JSON.stringify({"nick":nick,"pass":pass})
    })
    .then(function(response) {
        if(!response.ok) {
            alert("Invalid username or password");
            throw new Error('User registered with a different password');
        }
        else {
            alert("Logged in as " + nick);
            log=1;
            document.getElementById("logoutButton").style.display = 'inline-block';
        }
    })
    .catch(console.log);
}
function removepiece(piece){
  let peca=new Peca(piece[0],piece[1]);
  for(let i=0;i<my_hand.length;i++){
    if(peca.getLeft() == my_hand[i].getLeft() && peca.getRight()==my_hand[i].getRight())
      my_hand.splice(i,1);
      atualizapecas("my",my_hand);
  }
}

function displayboard(line){
  played=new Array(line.length)
  for(let i=0;i<line.length;i++){
    let pecaaux=line[i];
    let peca=new Peca(pecaaux[0],pecaaux[1]);
    played[i]=peca;
  }
}

function fromArrayToPieceArray(my_hand_aux){
  for(let i=0;i<my_hand_aux.length;i++){
    let pecaaux=my_hand_aux[i];
    let peca=new Peca(pecaaux[0],pecaaux[1]);
    my_hand[i]=peca;
  }
}

function join(group) {
    if (log==0) {
        alert("Please login to play");
        return 0;
    }
    else {
        nick = document.getElementById("nick").value;
        pass = document.getElementById("pass").value;
        fetch(getServer("join"), {
            method: 'POST',
            body: JSON.stringify({"group":group,"nick":nick,"pass":pass}) //coloca um ficheiro JSON no servidor com nick, pass, e #grupo
        })
        .then(response => response.json())
        .then(data => {
            let json_content=data;
          //  console.log("antes " + game);
            game = json_content.game;
        //    console.log(game);
            let my_hand_aux=json_content.hand;
            fromArrayToPieceArray(my_hand_aux);
            atualizapecas("my", my_hand);
            update();
            return;
        })
        .catch(console.log);
    }

}


function leave() {
    fetch(getServer("leave"), {
        method: 'POST',
        body: JSON.stringify({"nick":nick,"pass":pass,"game":game})
    })
    .then(function(response) {
        if(!response.ok) {
            throw new Error('');
        }
        else {
            game = "";
            opp_nick="";
            turn="";
            loadcanvasjogada();
            loadCanvasWaiting();
        }
    })
    .catch(console.log);

}

function postMessage(message) {
    var messages = document.getElementById("messageboard");
    messages.innerHTML += message;
    var paragraph = document.createElement("br");
    messages.appendChild(paragraph);
    paragraph.scrollIntoView();
}

function notify(side,piece,skip) {
    fetch(getServer("notify"), {
        method: 'POST',
        body: JSON.stringify({"nick":nick,"pass":pass,"game":game,"side":side,"piece":piece,"skip":skip})
    })
    .then(response => response.json())
    .then(data => {
        if (data.error == "Not your turn to play") {
            postMessage("Não é a sua vez de jogar");
        }
        else if (data.error == "Tile fits neither side") {
            postMessage("A peça que selecionou não encaixa no jogo atual");
        }
        //servidor devolve uma peça do monte
        //peça escolhida, side foi a null, peça pode ser jogavel em ambos os lados
        //se só for jogável de um lado, nao é ambíguo, joga automaticamente
        if("piece" in data && !data.side && typeof(piece) == "undefined"){
          let peca=new Peca(data.piece[0],data.piece[1]);
          my_hand.unshift(peca);
          atualizapecas("my",my_hand);
        }
        if ("side" in data && "piece" in data && typeof(piece) != "undefined") {
              postMessage("Escolha um lado para jogar a peça");
        }
        else {
            if(skip ==undefined && !data.error && typeof(piece) != "undefined"){
              removepiece(piece);
            }
        }
    })
    .catch(console.log);
}

function update() {
    const eventSource = new EventSource('http://twserver.alunos.dcc.fc.up.pt:8008/update?nick='+nick+'&game='+game);
    eventSource.onmessage = function(event) {
        const data = JSON.parse(event.data);
        if (data.error=="Invalid game selected (retry!)" || data.error=="Invalid game reference"){
          document.getElementById("gametable").style.display = 'none';
          document.getElementById("desistir").style.display = 'none';
          document.getElementById("playbutton").style.display = 'block';
          alert("Invalid game, try again");
          eventSource.close();
          throw new Error("Invalid game reference");
        }

        if ("winner" in data) {
            if (data.winner == null && opp_nick == "") {
                postMessage("Desistiu da espera");
            }
            else if (data.winner == null) {
                postMessage("Empataram! Que improvável!");
            }
            else if (data.winner == nick) {
                postMessage("Parabéns! É o vencedor!");
            }
            else {
                postMessage("Perdeu. Melhor sorte para a próxima.");
            }
            document.getElementById("gametable").style.display = 'none';
            document.getElementById("desistir").style.display = 'none';
            document.getElementById("playbutton").style.display = 'block';
            document.getElementById("clsmsg").style.display = 'block'
            game = "";
            opp_nick = "";
            turn="";
            loadcanvasjogada();
            loadCanvasWaiting();
            eventSource.close();
        }
        if ("turn" in data && opp_nick=="") {
            if (data.turn != nick) {
              opp_nick=data.turn;
            }

        }
        if("turn" in data && data.turn==nick){
          if (turn!=nick)
            postMessage("É a sua vez de jogar");
          turn=nick;
          min="02";
          sec="00";
          loadcanvasjogada();
          loadCanvasWaiting();
        }
        if("turn" in data && opp_nick!="" && data.turn!=nick){
          if(turn!=opp_nick)
            postMessage("É a vez do seu adversário jogar");
          turn=opp_nick;
          var mCanvas = document.getElementById("playing");
          tempo=0;
          total=120;
          loadcanvasjogada();
          loadCanvasWaiting();
        }
        if ("board" in data) {
            monte=new Array(data.board.stock);
            atualizapecas("monte",monte);
            if(opp_nick!="")
              var oppsize=new Array(data.board.count[opp_nick]);
            else {
              var oppsize=new Array(7);
            }
            atualizapecas("opp",oppsize);
            displayboard(data.board.line);
            atualizapecas("tabuleiro",played);
        }
    }
}
