//declare variables
var startingNumber;
var wins = 0;
var losses = 0;
var totalScore = 0;
//generating random number for crystals


//when page load generate a random number between 19-120
$(document).ready (function(){
        console.log ('I am working')
    function startGame(){
        startingNumber = Math.floor((Math.random()* 101)+ 19);
        $("#random").text("Match this number: " + startingNumber);
        
        //update wins, losses, totalScore 
        $("#wins").text("Wins: "+ wins);
        $("#losses").text("Losses: "+ losses);
        $("#your-score").text("Your total score: "+ totalScore);
        crystalRandomNumber("#blue-diamond");
        crystalRandomNumber("#red-heart");
        crystalRandomNumber("#orange-octagon");
        crystalRandomNumber("#green-cube");

        //$("#blue-diamond").attr("data-value", Math.floor(Math.random() * 11+1) );
    }
        
    //function to get random number for crystals
    function crystalRandomNumber(id){
        var randomNumber= Math.floor(Math.random() * 11+1);
    //generate a random num 
        $(id).attr("data-value", randomNumber);
    //assign that num with that id
    }
    //click event for crystals
    $(".crystal").on("click", function (){
        console.log("clicked");
        var crystalValue = $(this).data("value");
        console.log(crystalValue);
        totalScore += crystalValue;
        if (totalScore === startingNumber){
            wins++;
            reset();
            //$("#wins").text()
        } else { totalScore > startingNumber 
            losses++;
            reset();
        }
        
    });

    function reset(){
        totalScore = 0;
        startingNumber;
        //crystalValue;
    };
        //retrive the value for that crystal
        //add that to their total score
        //check if their total score matches the target score
            //update the wins and restart the game
        //check if their total score is the greater then the target score 
            //update the losses and restart
        //else just update their score 
    
    startGame();

    //$("#random").load(Math.floor((Math.random()* 120)+ 19));
    //$("#random").text(startingNumber);

});