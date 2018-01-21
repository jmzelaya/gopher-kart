var game;

game = new
  Phaser.Game(600, 432, Phaser.Auto, null, false, false);
//
// game.add.state("StateTitle");
// game.add.state("StateMain");
// game.add.state("StateOver");
game.add.state("MainState");

//👋🏼 Make sure to change over to StateTitle when
//Title screen is complete :))
game.state.start("MainState");
