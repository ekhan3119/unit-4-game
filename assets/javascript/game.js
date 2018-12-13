//declare variables
var startingNumber;
var crystalValues;
var wins = 0;
var losses = 0;
var totalScore = 0;
//generating random number for crystals
var randomNumber = Math.floor((Math.random()* 12)+ 1);


//when page load generate a random number between 19-120
$(document).ready (function(){
    console.log ('I am working')
function startGame(){
    startingNumber = Math.floor((Math.random()* 120)+ 19);
    $("#random").text("Match this number: " + startingNumber);
    
    //update wins, losses, totalScore 
    $("#wins").text("Wins: "+ wins);
    $("#losses").text("Losses: "+ loses);
    $("#your-score").text("Your total score: "+ totalScore);

    //Generate a random number for each crystals
    newRandomNumber("#diamond");
    newRandomNumber("#red-heart");
    newRandomNumber("#orange-octagon");
    newRandomNumber("#green-cube");
}

function crystalRandomNumber(id){
    for (i = 0; i< 4; i++){
    randomNumber = Math.floor((Math.random()* 12)+ 1);
    }
$("#blue-diamond").att("value", randomNumber);
}
function whenGmaeStart(){
    $(".diamond").on("click",crystalRandomNumber);
}
startGame();
whenGmaeStar();

//$("#random").load(Math.floor((Math.random()* 120)+ 19));
//$("#random").text(startingNumber);

});