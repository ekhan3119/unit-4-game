// design each character with 3 properties hp, ap,cap
var char1 = {healthpoint:180, attack_power:2, counter_attack_power:2, is_player: false};
var char2 = {healthpoint:150, attack_power:4, counter_attack_power:4, is_player: false};
var char3 = {healthpoint:120, attack_power:6, counter_attack_power:6, is_player: false };
var char4 = {healthpoint:100, attack_power:8, counter_attack_power:8, is_player: false};
//define array of 4 objets
var characters = new Array[char1, char2,char3,char4];
//write function to choose player

function choosePlayer (player) { 
    if (player.id == "btn1"){
        char1.is_player= true ;
        //alert("You are first player!"+ char1.is_player);
        document.getElementById("player").innerHTML= "You are first player!";
    }
    else if (player.id == "btn2"){
        char2.is_player= true ;
        //alert("You are second player!"+ char2.is_player);
        document.getElementById("player").innerHTML= "You are second player!";
    }
    else if (player.id == "btn3"){
        char3.is_player= true ;
        //alert("You are third player!"+ char3.is_player);
        document.getElementById("player").innerHTML= "You are second player!";
    }
    else if (player.id == "btn4"){
        char4.is_player= true ;
        //alert("You are forth player!"+ char4.is_player);
        document.getElementById("player").innerHTML= "You are second player!";
    }
//alert("I am a button");
    //return p1 ;    
  };


  


