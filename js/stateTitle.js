var StateTitle = {
  preload: function(){
     game.load.image("city", "assets/city-scape.png");
     game.stage.backgroundColor = 0xe9fffe;
     game.load.spritesheet("logo", "assets/menu-animation-flags.png", 576, 333, 28);
     //Need to add buttons for:
     //1. Start game
     //2. Tutorial??
     game.load.spritesheet("buttons", "assets/buttons-sprite.png", 111, 24, 4);

     //Need: "best played in landscape-view image for mobile"
  },

  create: function (){
     this.city = game.add.tileSprite(0, 342, 600, 90, "city");
     this.logo = game.add.sprite(game.world.centerX, game.world.height-250, "logo");
     this.logo.anchor.set(0.5, 0.5);
     this.logo.animations.add("menu", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], 12, true);
     this.logo.animations.play("menu");
     //Define and add game buttons
     this.startBtn = game.add.button(game.world.centerX, game.world.height-50,
      "buttons", this.startGame, this, 1, 0, 1);
     this.startBtn.anchor.set(0.5, 0.5);
     //Enable input
     //Call setListeners();

  },

  startGame: function (){
    game.state.start("StateChoice");
  },

  //Define setListeners function
  //Add listeners for correct and incorrect screen orientation

  update: function (){
    this.city.tilePosition.x -= 2;

  },

}; //END StateTitle
