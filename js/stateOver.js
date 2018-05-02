var StateOver = {
  preload : function(){
    game.load.image("gameOver", "assets/game-over.png");
    game.load.spritesheet("tryAgain", "assets/try-again.png", 101, 16, 1);

  },

  create : function(){
    this.overImage = game.add.sprite("gameOver", game.world.centerX, game.world.centerY);
  },

  update : function(){

  },


};
