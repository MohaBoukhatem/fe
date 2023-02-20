const WebSocket = require('ws')

var  Gpio = require('onoff').Gpio;

const sta = new Gpio(17,'out');
const sto = new Gpio(27,'out');
//const arr = new Gpio(21,'in','both');
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
  console.log('en écoute sur 8080');
  ws.on('message', message => {
   // console.log(`Reçu  : ${message}`);
    switch  (message) {
        case "1" :
           sta.writeSync(1);
           sto.writeSync(0);
           console.log('jaune');
           ws.send ("départ");
           break;
        case "2" :
           sta.writeSync(0);
           sto.writeSync(1);
           console.log('rouge');
           ws.send("arrivée");
           break;
        case "3" :
          sta.writeSync(0);
          sto.writeSync(0);
          console.log('RAZ');
          ws.send('remise à 0');
          break;
    }

  })


})

//arr.watch((err, value) => {
//          //sto.writeSync(0));
//        console.log ('arrivée');
//})

  