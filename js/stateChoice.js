var StateChoice = {
  preload: function () {
    game.load.audio("select", "assets/music/Good-Morning-Doctor-Weird.mp3");

    //Spritesheets for the 3 colored Gophers
    //Later put into 1 spritesheet
    game.load.spritesheet("racerBlue", "assets/gopher-blue.png", 63, 60, 7);
    game.load.spritesheet("racerPink", "assets/gopher-pink.png", 63, 60, 7);
    game.load.spritesheet("racerPurple", "assets/purple-gopher-drive.png", 64, 60, 2);
    game.load.image("background", "assets/character-select-background.png");

    //sample test button
    game.load.spritesheet("confirmButton", "assets/buttons-sprite.png", 111, 24, 4);

    game.load.image("buttons", "assets/red-button.png");

  },

  create: function () {
    //Music
    this.selectSong = game.add.audio("select");
    //Watched youtube video, need to check docs for .play params
    this.selectSong.play('', 0, 1, true);

    this.background = game.add.image(0, 0, "background");

    //Blue Gopher
    this.racerBlue = game.add.sprite(game.world.centerX, game.world.centerY+40, "racerBlue");
    this.racerBlue.anchor.set(0.5, 0.5);
    this.racerBlue.animations.add("idle", [0, 1], 12, true);
    this.racerBlue.animations.play("idle");
    //Choose Blue
    this.startBlue = game.add.button(game.world.centerX, game.world.centerY+105,
     "buttons", this.startBlue, this, 1, 0, 1);
    this.startBlue.anchor.set(0.5, 0.5);


    //Pink Gopher
    this.racerPink = game.add.sprite(game.world.centerX-150, game.world.centerY+40, "racerPink");
    this.racerPink.anchor.set(0.5, 0.5);
    this.racerPink.animations.add("idle", [0, 1], 12, true);
    this.racerPink.animations.play("idle");
    //Choose Pink
    this.startPink = game.add.button(game.world.centerX-150, game.world.centerY+105,
     "buttons", this.startPink, this, 1, 0, 1);
    this.startPink.anchor.set(0.5, 0.5);


    //Purple Gopher
    this.racerPurple = game.add.sprite(game.world.centerX+150, game.world.centerY+40, "racerPurple");
    this.racerPurple.anchor.set(0.5, 0.5);
    this.racerPurple.animations.add("idle", [0, 1], 12, true);
    this.racerPurple.animations.play("idle");
    //Choose Purple
    this.startPurple = game.add.button(game.world.centerX+150, game.world.centerY+105,
     "buttons", this.startPurple, this, 1, 0, 1);
    this.startPurple.anchor.set(0.5, 0.5);



    //Confirmation button
    this.startConfirm = game.add.button(game.world.centerX, game.world.height-50,
     "confirmButton", this.startConfirm, this, 1, 0, 1);
    this.startConfirm.anchor.set(0.5, 0.5);

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
    this.selectSong.stop();
    game.state.start("StateMain");
    }
  },


  update: function () {


  },


};
