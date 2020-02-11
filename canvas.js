//canvas relogio durante a jogada
var tempo;
var total;

function loadcanvasjogada(){
  if(nick=="" || turn=="" || nick!=turn || game==""){
    var mCanvas = document.getElementById("playing");
    mCanvas.style.display="none";
    clearInterval(intervalplayingID);
    intervalplayingID="";
  }
  else{
    if(intervalplayingID!=""){
      var mCanvas = document.getElementById("playing");
      mCanvas.style.display="none";
      clearInterval(intervalplayingID);
      intervalplayingID="";
    }
    intervalplayingID=setInterval(mostracanvasjogada,1000 );
  }
}

function mostracanvasjogada(){
  var mCanvas = document.getElementById("playing");
  mCanvas.style.display="inline-block";
  var ctx = mCanvas.getContext("2d");
  var int_min=parseInt(min);
  var int_sec=parseInt(sec);
  if(int_sec==0 && int_min==0){
    mCanvas.style.display="none";
    clearInterval(intervalplayingID);
  }
  if(int_sec==0){
    int_sec=59;
    int_min=int_min-1;
  }
  else{
    int_sec--;
  }
  min=int_min.toString();
  sec=int_sec.toString();
  if(int_sec>9){
    var str="0" + min + ":" +  sec;
  }
  else {
    var str="0" + min + ":" +  "0" + sec;
  }
  ctx.clearRect(0,0,200,100);
  ctx.strokeStyle =" grey";
  ctx.font="80px Arial";
  ctx.fillStyle="black";
  ctx.fillText(str, 1.5 , 80)
  ctx.stroke();
}

//canvas para o tempo de espera

function mostraCanvasEspera() {
    var myCanvas = document.getElementById("waiting");
    myCanvas.style.display="inline-block";
    var ctx2 = myCanvas.getContext("2d");
    ctx2.clearRect(0,0,100,50);
    total=total-1;
    if(total==0){
      myCanvas.style.display="none";
      clearInterval(interval_waiting_ID);
    }
    tempo=tempo+1;
    if(tempo==13){
        tempo=1;
    }

    if(tempo>=1){
        ctx2.beginPath();
        ctx2.moveTo(50,0);
        ctx2.lineTo(50,50);
        ctx2.strokeStyle = "solid black";
        ctx2.lineWidth=3;
        ctx2.stroke();
        ctx2.beginPath();
        ctx2.arc(12, 13, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=2){
        ctx2.beginPath();
        ctx2.arc(12, 38, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=3){
        ctx2.beginPath();
        ctx2.arc(24, 13, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=4){
        ctx2.beginPath();
        ctx2.arc(24, 38, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=5){
        ctx2.beginPath();
        ctx2.arc(36, 13, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }

    if(tempo>=6){
        ctx2.beginPath();
        ctx2.arc(36, 38, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=7){
        ctx2.beginPath();
        ctx2.arc(64, 13, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=8){
        ctx2.beginPath();
        ctx2.arc(64, 38, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=9){
        ctx2.beginPath();
        ctx2.arc(76, 13, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=10){
        ctx2.beginPath();
        ctx2.arc(76, 38, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=11){
        ctx2.beginPath();
        ctx2.arc(88, 13, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
    if(tempo>=12){
        ctx2.beginPath();
        ctx2.arc(88, 38, 5, 0, 2 * Math.PI);
        ctx2.fill();
    }
  //  console.log(total);
}

function loadCanvasWaiting() {
  if(nick=="" || turn=="" || nick==turn || game==""){
    var myCanvas = document.getElementById("waiting");
    myCanvas.style.display="none";
    clearInterval(interval_waiting_ID);
    interval_waiting_ID="";
  }
  else{
    if(interval_waiting_ID!=""){
      var myCanvas = document.getElementById("waiting");
      myCanvas.style.display="none";
      clearInterval(interval_waiting_ID);
      interval_waiting_ID="";
    }
    interval_waiting_ID = setInterval(mostraCanvasEspera, 1000);
  }
}
