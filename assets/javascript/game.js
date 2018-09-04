// create vars for the game
var targetScore;
var loss = 0;
var win = 0;
var playerScore = 0;

//1a. Create function when game start to randomly choose a number and append it to .score or "Score to Match!:" 
function startGame(){
    targetScore = Math.floor(Math.random() * 80) + 20; 
    playerScore = 0;
  $(".crystals").empty();    
  $(".score").text("Score to Match!: " + targetScore);
  $("#win").text("Wins: " + win);
  $("#loss").text("Losses: " + loss);
  $(".totscore").text("Your total score is: " + playerScore);
//1b. Create div for each crystal. Will also randomly choose new numbers for the crystals. Maybe use for loop
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 24) + 1;
    console.log(random);
    var crystal = $("<div>");
    crystal.attr("crystal-number", random);
    crystal.addClass("crystal");
    //passing images through div using jquery
    var image = ["assets/images/Crystal 1.png", "assets/images/crystal 2.png", "assets/images/crystal 3.png", "assets/images/crystal 4.png"];
    crystal.css({"background-image":"url('" + image[i] + "')","background-size":"cover"});
    $(".crystals").append(crystal);
}
}

//start of game
startGame();

//2. Create on click function for each crystal. Player score will be equal to crsytal value clicked
//event delegation
$(document).on('click', ".crystal", function(){
    var num = parseInt($(this).attr("crystal-number"));
    playerScore += num;
    $(".totscore").text("Your total score is: " + playerScore);
    console.log(playerScore);

//3a. If player matches score, alert will appear to confirm win. If player goes over, alert will confirm lost
if(playerScore > targetScore){
//If lose, lost score will go up by one. Win or lose the game will reset.
      $("#loss").text("Losses: " + loss++);
      $(".totscore").text("Your total score is: " + playerScore);
      alert("You Lost!!");
      startGame();
 
}
else if(playerScore === targetScore){
//3b. If win, win score will go up by one. Win or lose the game will reset.
    $("#win").text("Wins: " + win++);
    $(".totscore").text("Your total score is: " + playerScore);
    alert("You Win!!");   
    startGame();
      
}
})