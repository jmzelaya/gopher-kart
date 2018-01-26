var StateTitle = {
  preload: function(){
     game.load.image("city", "assets/city-scape.png");
     game.stage.backgroundColor = 0xe9fffe;
     game.load.spritesheet("logo", "assets/menu-animation-flags.png", 576, 333, 28);
     //Need to add buttons for:
     //1. Start game
     //2. Tutorial??

     //Need: "best played in landscape view image"
  },

  create: function (){
     this.city = game.add.tileSprite(0, 342, 600, 90, "city");
     // this.background.autoScroll(400, 10);
     this.logo = game.add.sprite(10, 10, "logo");
     this.logo.animations.add("menu", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], 12, true);
     this.logo.animations.play("menu");
     //Define and add game buttons
     //Enable input
     //Call setListeners();

  },

  //Add startGame function
  //game.state.start("StateMain");

  //Define setListeners function
  //Add listeners for correct and incorrect screen orientation

  update: function (){
    this.city.tilePosition.x -= 2;

  },

}; //END StateTitle
