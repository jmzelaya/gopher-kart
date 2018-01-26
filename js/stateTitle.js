var StateTitle = {
  preload: function(){
     game.load.image("city", "assets/city-scape.png");
     game.stage.backgroundColor = 0xe9fffe;
     game.load.spritesheet("logo", "assets/menu-animation.png", 576, 333, 28);
  },

  create: function (){
     this.city = game.add.tileSprite(0, 342, 600, 90, "city");
     // this.background.autoScroll(400, 10);
     this.logo = game.add.sprite(10, 10, "logo");

  },

  update: function (){
    this.city.tilePosition.x -= 2;

  },

}; //END StateTitle
