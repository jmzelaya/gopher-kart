var StateChoice = {
  preload: function () {
    //Music and Sounds
    game.load.audio("select", "assets/music/Good-Morning-Doctor-Weird.mp3");

    //Spritesheets for the 3 colored Gophers
    //Later put into 1 spritesheet
    game.load.spritesheet("racer", "assets/character-select-loops.png", 75, 71, 7);

    game.load.image("background", "assets/character-select-background.png");

    //sample test button
    game.load.spritesheet("confirmButton", "assets/buttons-sprite.png", 111, 24, 4);

    game.load.spritesheet("buttons", "assets/on-off-buttons.png", 59, 41, 2);
    game.load.spritesheet("blueMarquee", "assets/blue-crawl.png", 50, 12, 45);
    game.load.spritesheet("pinkMarquee", "assets/pink-crawl.png", 50, 12, 45);
    game.load.spritesheet("purpleMarquee", "assets/purple-crawl.png", 50, 12, 45);


  },

  create: function () {
    //MUSIC
    this.selectSong = game.add.audio("select");
    //Watched youtube video, need to check docs for .play params
    this.selectSong.play('', 0, 1, true);

    //BACKGROUND
    this.background = game.add.image(0, 0, "background");

    //MARQUEE
    //Blue
    this.blueMarquee = game.add.sprite(game.world.centerX-150, game.world.centerY-16, "blueMarquee");
    this.blueMarquee.anchor.set(0.5, 0.5);
    //Pink
    this.pinkMarquee = game.add.sprite(game.world.centerX, game.world.centerY-16, "pinkMarquee");
    this.pinkMarquee.anchor.set(0.5, 0.5);
    //Purple
    this.purpleMarquee = game.add.sprite(game.world.centerX+150, game.world.centerY-16, "purpleMarquee");
    this.purpleMarquee.anchor.set(0.5, 0.5);

    //Choose Racer1
    this.pickRacer1 = game.add.button(game.world.centerX-150, game.world.centerY+105,
      "buttons", this.racerStart.bind(this, "racer1"), this);
    this.pickRacer1.anchor.set(0.5, 0.5);

    //Choose Racer2
    this.pickRacer2 = game.add.button(game.world.centerX, game.world.centerY+105,
      "buttons", this.racerStart.bind(this, "racer2"), this);
    this.pickRacer2.anchor.set(0.5, 0.5);

    //Choose Racer3
    this.pickRacer3 = game.add.button(game.world.centerX+150, game.world.centerY+105,
      "buttons", this.racerStart.bind(this, "racer3"), this);
    this.pickRacer3.anchor.set(0.5, 0.5);

    this.buttons = {
      "racer1": this.pickRacer1,
      "racer2": this.pickRacer2,
      "racer3": this.pickRacer3
    };

    //BLACK AND WHITE GOPHERS
    //Blue
    this.hiddenBlueGopher = game.add.sprite(game.world.centerX-150, game.world.centerY+40, "racer");
    this.hiddenBlueGopher.anchor.set(0.5, 0.5);
    //Pink
    this.hiddenPinkGopher = game.add.sprite(game.world.centerX, game.world.centerY+40, "racer");
    this.hiddenPinkGopher.anchor.set(0.5, 0.5);
    //Purple
    this.hiddenPurpleGopher = game.add.sprite(game.world.centerX+150, game.world.centerY+40, "racer");
    this.hiddenPurpleGopher.anchor.set(0.5, 0.5);


    //CONFIRMATION BUTTON
    this.startConfirm = game.add.button(game.world.centerX, game.world.height-50,
     "confirmButton", this.startConfirm, this, 0, 0, 1);
    this.startConfirm.anchor.set(0.5, 0.5);


  },

  startConfirm: function () {
    if(character === undefined){
      this.sampleText = game.add.text(game.world.centerX, 30, "You must choose a gopher!");
      this.sampleText.fill = "ffffff";
      this.sampleText.fontSize = 32;
      this.sampleText.anchor.set(0.5, 0.5);
      console.log("You must choose a gopher!");
    } else {
    this.selectSong.stop();
    game.state.start("StateMain");
    }
  },

  racerStart: function (racer){
    console.log(racer);
    for (var key in this.buttons) {
      this.buttons[key].frame = 0;
    }

    this.buttons[racer].frame = 1;
    character = racer;
    console.log(character);
  },



  update: function () {


  },


};
