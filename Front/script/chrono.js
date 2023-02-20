  window.onload = () => {
   d = 0;
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   timeStarted = 0;
   compteur= 0;
   time = document.getElementById("time");
   display = document.getElementById("display")
   
   btnStart = document.getElementById("btn-start");
   btnStop = document.getElementById("btn-stop");
   btnReset = document.getElementById("btn-reset");
   btnStart.addEventListener("click", start);
   btnStop.addEventListener("click", stop);
   btnReset.addEventListener("click", reset);
   init();
}



function write() {
   let ht, mt, st, mlst;
   mls++;

   if (mls > 99) {
      s++;
      mls = 0;
   }
   if (s > 59) {
      m++;
      s = 0;
   }
   if (m > 59) {
      h++;
      m = 0;
   }
   if (h > 24) {
       d++;
       h = 0
   };
   
   if (d > 7)d = 0;

   mlst = ('0' + mls).slice(-2);
   st = ('0' + s).slice(-2);
   mt = ('0' + m).slice(-2);
   ht = ('0' + h).slice(-2);
   dt = ('0' + d).slice(-2)

   time.innerHTML = `${dt}:${ht}:${mt}:${st}.${mlst}`;
   h=   ht;
   m=   mt;
   s=   st;
   mls= mlst;
}

function start() {
   write();
   timeStarted = setInterval(write, 10);
   btnStart.removeEventListener("click", start);
   envoyer("1");
}

function stop() {
   clearInterval(timeStarted);
   btnStart.addEventListener("click", start);
   envoyer ("2");
   compteur++;
   display.innerHTML = display.innerHTML + `${compteur}_______${h}:${m}:${s}.${mls}`+"<br>";
}

function reset() {
   clearInterval(timeStarted);
   time.innerHTML = "00:00:00:00.00";
   d = 0;
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   btnStart.addEventListener("click", start);
   envoyer ("3");
}