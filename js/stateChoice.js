var StateChoice = {
  preload: function () {
    //Spritesheets for the 3 colored Gophers
    //Later put into 1 spritesheet
    game.load.spritesheet("racerBlue", "assets/gopher-blue.png", 63, 60, 7);
    game.load.spritesheet("racerPink", "assets/gopher-pink.png", 63, 60, 7);
    game.load.spritesheet("racerPurple", "assets/gopher-purple.png", 63, 60, 7);
    game.load.image("background", "assets/character-select-background.png");

    //sample test button
    game.load.spritesheet("buttons", "assets/buttons-sprite.png", 111, 24, 4);

  },

  create: function () {
    //Blue Gopher
    this.racerBlue = game.add.sprite(game.world.centerX, game.world.centerY, "racerBlue");
    this.racerBlue.anchor.set(0.5, 0.5);
    this.racerBlue.animations.add("idle", [0, 1], 12, true);
    this.racerBlue.animations.play("idle");
    //Choose Blue
    this.startBlue = game.add.button(game.world.centerX, game.world.centerY+50,
     "buttons", this.startBlue, this, 1, 0, 1);
    this.startBlue.anchor.set(0.5, 0.5);


    //Pink Gopher
    this.racerPink = game.add.sprite(game.world.centerX-150, game.world.centerY, "racerPink");
    this.racerPink.anchor.set(0.5, 0.5);
    this.racerPink.animations.add("idle", [0, 1], 12, true);
    this.racerPink.animations.play("idle");
    //Choose Pink
    this.startPink = game.add.button(game.world.centerX-150, game.world.centerY+50,
     "buttons", this.startPink, this, 1, 0, 1);
    this.startPink.anchor.set(0.5, 0.5);


    //Purple Gopher
    this.racerPurple = game.add.sprite(game.world.centerX+150, game.world.centerY, "racerPurple");
    this.racerPurple.anchor.set(0.5, 0.5);
    this.racerPurple.animations.add("idle", [0, 1], 12, true);
    this.racerPurple.animations.play("idle");
    //Choose Purple
    this.startPurple = game.add.button(game.world.centerX+150, game.world.centerY+50,
     "buttons", this.startPurple, this, 1, 0, 1);
    this.startPurple.anchor.set(0.5, 0.5);



    //Confirmation button
    this.startConfirm = game.add.button(game.world.centerX, game.world.height-50,
     "buttons", this.startConfirm, this, 1, 0, 1);
    this.startConfirm.anchor.set(0.5, 0.5);

    this.background = game.add.image(0, 0, "background");

  },

  //Maybe make 1 function with conditional or case switch?
  //A lot of functions for no reason really...
  startBlue: function () {
    character = "blue";
    console.log(character);
  },

  startPink: function () {
    character = "pink";
    console.log(character);
  },

  startPurple: function () {
    character = "purple";
    console.log(character);
  },

  startConfirm: function () {
    if(character === undefined){
      console.log("You must choose a gopher!");
    } else {
    game.state.start("StateMain");
    }
  },


  update: function () {

  },


};
