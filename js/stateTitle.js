var StateTitle = {
  preload: function(){
     game.load.image("city", "assets/city-scape.png");
     game.stage.backgroundColor = 0xe9fffe;
     game.load.spritesheet("logo", 578, 332, 24);
  },

  create: function (){
     this.city = game.add.tileSprite(0, 342, 600, 90, "city");
     // this.background.autoScroll(400, 10);

  },

  update: function (){
    this.city.tilePosition.x -= 2;

  },

}; //END StateTitle
