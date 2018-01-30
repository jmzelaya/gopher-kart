var StateChoice = {
  preload: function () {
    game.load.spritesheet("racerBlue", "assets/gopher-blue.png", 63, 60, 7);
    game.load.spritesheet("racerPink", "assets/gopher-pink.png", 63, 60, 7);
    game.load.spritesheet("racerPurple", "assets/gopher-purple.png", 63, 60, 7);
  },

  create: function () {
    // console.log("Choose your Gopher!");
    this.racerBlue = game.add.sprite(game.world.centerX, game.world.centerY, "racerBlue");
    this.racerBlue.anchor.set(0.5, 0.5);
    this.racerBlue.animations.add("idle", [0, 1], 12, true);
    this.racerBlue.animations.play("idle");

    this.racerPink = game.add.sprite(game.world.centerX-100, game.world.centerY, "racerPink");
    this.racerPink.anchor.set(0.5, 0.5);
    this.racerPink.animations.add("idle", [0, 1], 12, true);
    this.racerPink.animations.play("idle");

    this.racerPurple = game.add.sprite(game.world.centerX+100, game.world.centerY, "racerPurple");
    this.racerPurple.anchor.set(0.5, 0.5);
    this.racerPurple.animations.add("idle", [0, 1], 12, true);
    this.racerPurple.animations.play("idle");
  },

  update: function () {

  },


};
