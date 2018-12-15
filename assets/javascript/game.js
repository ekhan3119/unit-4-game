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
        startingNumber = Math.floor((Math.random()* 102)+ 19);
        $("#random").text("Match this number: " + startingNumber);
        
        //update wins, losses, totalScore 
        //$("#wins").text("Wins: "+ wins);
        //$("#losses").text("Losses: "+ losses);
        //$("#your-score").text("Your total score: "+ totalScore);
        crystalRandomNumber("#blue-diamond");
        crystalRandomNumber("#red-heart");
        crystalRandomNumber("#orange-octagon");
        crystalRandomNumber("#green-cube");

        //$("#blue-diamond").attr("data-value", Math.floor(Math.random() * 11+1) );
    }
        
    //function to get random number for crystals
    function crystalRandomNumber(id){
        var randomNumber= Math.floor((Math.random() * 12)+1);
    //generate a random num 
        $(id).attr("data-value", randomNumber);
    //assign that num with that id
    }
    //click event for crystals
    $(".crystal").on("click", function (){
        //console.log("clicked");
        var crystalValue = $(this).data("value");
        console.log(crystalValue);
        totalScore += crystalValue;
        $("#your-score").text("Your total score: "+ totalScore);
        if (totalScore === startingNumber){
            wins++;
            $("#wins").text("Wins: "+ wins);
            reset();
           
        } else if (totalScore > startingNumber) {
            losses++;
            $("#losses").text("Losses: "+ losses);
            //console.log('you lost');
    
            reset();
        }
        
    });
    
    

    function reset(){
        totalScore = 0;
        $("#your-score").text("Your total score: "+ totalScore);
        crystalRandomNumber("#blue-diamond");
        crystalRandomNumber("#red-heart");
        crystalRandomNumber("#orange-octagon");
        crystalRandomNumber("#green-cube");
        startingNumber = Math.floor((Math.random()* 102)+ 19);
        $("#random").text("Match this number: " + startingNumber);

        

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