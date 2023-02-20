function init() {

  //alert("page chargée"); 
  var ws = "ws://192.168.61.3:8080"; // adresse Ip du serveur raspberry
  var output= document.getElementById("display");//  partie du client pour affichage
  websocket = new WebSocket(ws);    // création d'une instance websocket 
  websocket.onopen =  ouverture;     //  quand la connexion est établie invoquer ouverture
  websocket.onclose = cloture;  // quand la connexion est close invoquer cloture    
  websocket.onmessage = reception;  // à la réception d'un message invoquer reception
  websocket.onerror = onError; //    Gestion des erreurs

}

function ouverture (){
	afficher ("connecté");
	
}


function afficher (message){
	var output= document.getElementById("display");
	var parag = document.createElement("p");
	parag.innerHTML = message;
	output.appendChild(parag);
	}
	
function cloture (){
	afficher ("connection close");
	}
	
function envoyer (message) {
	websocket.send(message);

}

function reception (evt) {
	afficher (evt.data);
	//stop();
}
			

