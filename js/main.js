var game;
var character;
var availLanes = [233, 289, 345];
var availNpcGophers = ["blue", "pink", "purple"];
var score;
var cursors;
var scoreText;


window.onload = function(){
  if(screen.width>900){
    game = new Phaser.Game(600, 432, Phaser.AUTO, "phaser-wrapper", null, false, false);
  }
  else{
    game = new
    Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "phaser-wrapper");
  }
  game.state.add("StateTitle", StateTitle);
  game.state.add("StateMain", StateMain);
  game.state.add("StateChoice", StateChoice);
  // game.state.add("mainState", mainState);


  game.state.start("StateTitle");
};
