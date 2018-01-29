var StateChoice = {
  preload: function () {
    game.load.spritesheet("racerBlue", "assets/gopher-blue.png", 63, 60, 7);
    game.load.spritesheet("racerBlue", "assets/gopher-pink.png", 63, 60, 7);
    game.load.spritesheet("racerBlue", "assets/gopher-purple.png", 63, 60, 7);
  },

  create: function () {
    // console.log("Choose your Gopher!");
    this.racerBlue = game.add.sprite(game.world.centerX, game.world.centerY, "racerBlue");
    this.racerBlue.anchor.set(0.5, 0.5);
  },

  update: function () {

  },


};
