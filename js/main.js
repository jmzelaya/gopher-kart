var game;
var character;

window.onload = function(){
  if(screen.width>900){
    game = new Phaser.Game(600, 432, Phaser.AUTO, "ph_game");
  }
  else{
    game = new
    Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
  }
  game.state.add("StateTitle", StateTitle);
  game.state.add("StateMain", StateMain);
  game.state.add("StateChoice", StateChoice);
  // game.state.add("mainState", mainState);


  game.state.start("StateTitle");
};
