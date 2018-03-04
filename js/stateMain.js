var StateMain = {

  preload: function () {
    game.load.audio("title", "assets/music/More-Crazy-Races.mp3");

    game.stage.backgroundColor = 0xe9fffe;
    //Add racer spritesheet(s) - Later put into 1 :)
    //...maybe put into global variables? To remove repitition...
    game.load.spritesheet("racerBlue", "assets/gopher-blue.png", 63, 60, 7);
    game.load.spritesheet("racerPink", "assets/gopher-pink.png", 63, 60, 7);
    game.load.spritesheet("racerPurple", "assets/gopher-purple.png", 63, 60, 7);
    //Road
    game.load.image("road", "assets/road-tile.png");
    //Top rail
    game.load.image("topRail", "assets/top-rail.png");
    //Bottom rail
    game.load.image("bottomRail", "assets/bottom-rail.png");
    //Add background
    //Add other racers
    //Add obstacles

    //Countdown Spritesheet
    game.load.image("countDown3", "assets/three.png");
    game.load.image("countDown2", "assets/two.png");
    game.load.image("countDown1", "assets/one.png");
    game.load.image("countDownGo", "assets/go.png");


  },

  create: function () {
    //MUSIC
    this.titleSong = game.add.audio("title");
    this.titleSong.play('', 0, 1, true);


    //Start Physics Engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //TIMER
    //Not sure how this works, going to do some more reasearch
    // this.timer = this.game.time.create(this.game);
    // this.timer.add(this.delay, this.readyForAction, this);
    // this.timer.start();

    //PHYSICS
    // game.physics.arcade.enable(character);

    //VARS
    //Maybe add the parts of the road and rails to a group?
    var road = game.add.tileSprite(0, 250, 600, 159, "road");
    var topRail = game.add.tileSprite(0, 230, 600, 29, "topRail");
    var bottomRail = game.add.tileSprite(0, 405, 600, 29, "bottomRail");

    //Conditional to add correct gopher to screen
    if(character == "blue"){
      this.racerBlue = game.add.sprite(50, 320, "racerBlue");
      this.racerBlue.anchor.set(0.5, 0.5);
      this.racerBlue.animations.add("idle", [0, 1], 12, true);
      this.racerBlue.animations.play("idle");
      game.physics.arcade.enable(this.racerBlue);
      game.camera.follow(this.racerBlue);
      this.racerBlue.body.collideWorldBounds = true;


    }

    else if (character == "pink") {
      this.racerPink = game.add.sprite(50, 320, "racerPink");
      this.racerPink.anchor.set(0.5, 0.5);
      this.racerPink.animations.add("idle", [0, 1], 12, true);
      this.racerPink.animations.play("idle");
      game.physics.arcade.enable(this.racerPink);
      this.racerPink.body.collideWorldBounds = true;


    }

    else{
      this.racerPurple = game.add.sprite(50, 320, "racerPurple");
      this.racerPurple.anchor.set(0.5, 0.5);
      this.racerPurple.animations.add("idle", [0, 1], 12, true);
      this.racerPurple.animations.play("idle");
      game.physics.arcade.enable(this.racerPurple);

    }


    console.log("You chose the " + character + " racer!");

    //Puts a delay on the scrolling of the road and rails
    setTimeout(function () {
      for(var i = 3; i > 0; i --){
        console.log(i);
      }
      console.log("GO!");
      //Start scrolling
      road.autoScroll(-200, 0);
      topRail.autoScroll(-200, 0);
      bottomRail.autoScroll(-200, 0);
    }, 3000);

    /*
    This are the beginning workings
    of adding random racers OR
    a new obstacle to the screen
    */
    setInterval(function () {
      var randomGen = Math.floor(Math.random() * 20);
      if(randomGen % 2 === 0){
        // this.racerPink = game.add.sprite(50, 350, "racerPink");
        console.log("New racer added!");
      }
      else{
        console.log("New obstacle added!");
      }
    }, 3500);


    //COUNTDOWN
    this.countDown1 = game.add.sprite(game.world.centerX, game.world.centerY, 'countDown1');
    this.countDown1.anchor.setTo(0.5, 0.5);
    this.countDown1.alpha = 0;

    this.countDown2 = game.add.sprite(game.world.centerX, game.world.centerY, 'countDown2');
    this.countDown2.anchor.setTo(0.5, 0.5);
    this.countDown2.alpha = 0;

    this.countDown3 = game.add.sprite(game.world.centerX, game.world.centerY, 'countDown3');
    this.countDown3.anchor.setTo(0.5, 0.5);
    this.countDown3.alpha = 0;

    this.countDownGo = game.add.sprite(game.world.centerX, game.world.centerY, 'countDownGo');
    this.countDownGo.anchor.setTo(0.5, 0.5);
    this.countDownGo.alpha = 0;

    //COUNTDOWN GROUP
    this.countGroup = game.add.group();
    this.countGroup.add(this.countDown1);
    this.countGroup.add(this.countDown2);
    this.countGroup.add(this.countDown3);
    this.countGroup.add(this.countDownGo);


    //TWEENS
    var tween1 = game.add.tween(this.countDown1).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false,
      0).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0);
    var tween2 = game.add.tween(this.countDown2).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false,
      0).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0);
    var tween3 = game.add.tween(this.countDown3).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false,
      0).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0);
    var tweenGo = game.add.tween(this.countDownGo).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false,
      0).to({alpha: 0}, 500, Phaser.Easing.Linear.None, false, 0);
    tween3.chain(tween2);
    tween2.chain(tween1);
    tween1.chain(tweenGo);
    tween3.start();


    // game.camera.follow(this.racerPink);
    // game.camera.follow(this.racerPurple);
    //Set cursors to accept input from the keyboard
    cursors = game.input.keyboard.createCursorKeys();

  },

  update: function (){
    //Cursors - Keyboard key check ⌨️
    if(cursors.right.isDown){
      if(this.racerBlue){
        this.racerBlue.body.velocity.x = 150;
      }
      if(this.character === "pink"){
        this.racerPink.body.velocity.x = 250;
      }
      if(this.character === "purple"){
        this.racerPurple.body.velocity.x = 250;
      }
    }//CLOSE cursors

    if(cursors.right.isUp){
      if(this.racerBlue){
        this.racerBlue.body.velocity.x = -165;
      }
      else if(this.character === "pink"){
        this.racerPink.body.velocity.x = -250;
      }
      else if(this.character === "purple"){
        this.racerPurple.body.velocity.x = -250;
      }

    }
    if(cursors.up.isDown){
      if(this.racerBlue){
        this.racerBlue.body.velocity.y = -70;
      }
      else if(this.character === "pink"){
        this.racerPink.body.velocity.x = -250;
      }
      else if(this.character === "purple"){
        this.racerPurple.body.velocity.x = -250;
      }

    }
    if(cursors.up.isUp){
      if(this.racerBlue){
        this.racerBlue.body.velocity.y = 0;
      }
      else if(this.character === "pink"){
        this.racerPink.body.velocity.x = -250;
      }
      else if(this.character === "purple"){
        this.racerPurple.body.velocity.x = -250;
      }

    }
    if(cursors.down.isDown){
      if(this.racerBlue){
        this.racerBlue.body.velocity.y = 70;
      }
      else if(this.character === "pink"){
        this.racerPink.body.velocity.x = -250;
      }
      else if(this.character === "purple"){
        this.racerPurple.body.velocity.x = -250;
      }

    }





  },



};//END StateMain
