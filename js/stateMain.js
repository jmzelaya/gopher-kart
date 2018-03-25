var StateMain = {

  preload: function () {
    game.load.audio("title", "assets/music/BeepBox-Song1.wav");
    
    game.load.audio("coinBeep", "assets/music/sfx/coin.wav");

    game.stage.backgroundColor = 0xe9fffe;
    //Add racer spritesheet(s) - Later put into 1 :)
    //...maybe put into global variables? To remove repitition...
    game.load.spritesheet("racerBlue", "assets/gopher-blue-updated.png", 64, 60, 15);
    game.load.spritesheet("racerPink", "assets/gopher-pink.png", 63, 60, 15);
    game.load.spritesheet("racerPurple", "assets/gopher-purple.png", 63, 60, 15);
    //Road
    game.load.image("road", "assets/road-tile.png");
    //Top rail
    game.load.image("topRail", "assets/top-rail-long.png");
    //Scene Extras
    game.load.image("extras", "assets/signs.png");
    //Light Posts
    game.load.image("posts", "assets/light-posts.png");
    //Truck
    game.load.image("truck", "assets/truck.png");
    //Bottom rail
    game.load.image("bottomRail", "assets/bottom-rail-long.png");
    //Add background
    game.load.image("sky", "assets/clouds-re-colored.png");
    game.load.image("city", "assets/city-re-colored.png");
    game.load.image("mtn", "assets/mountains-recolored.png");
    //Add other racers
    //Add coins
    game.load.spritesheet("coin", "assets/coin-shadow.png", 16, 19, 6);
    //Add hearts
    //Countdown Spritesheet
    game.load.image("countDown3", "assets/three.png");
    game.load.image("countDown2", "assets/two.png");
    game.load.image("countDown1", "assets/one.png");
    game.load.image("countDownGo", "assets/go.png");

    game.load.image("background", "assets/bg-color.png");

    game.load.bitmapFont('pixelFont', 'assets/fonts/bitmapFonts/pixelFont.png', 'assets/fonts/bitmapFonts/pixelFont.xml');

    var timeText;
  },



  create: function () {

    background = game.add.tileSprite(0, 0, 600, 432, "background");

    //MUSIC
    this.titleSong = game.add.audio("title");
    this.titleSong.play('', 0, 1, true);
    this.titleSong.volume = 0.5;

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
    score = 0;
    this.top = game.height - 200 ;
    this.bottom = game.height - 80;
    //Figure out exact y positions
    //Make a loop function thing to pick one and call at the bottom?
    // this.availLanes = [400, 390, 380];
    // this.lanes = availLanes[Math.floor(Math.random()*availLanes.length)];

    var sky = game.add.tileSprite(0, 6, 600, 78, "sky");
    var mtn = game.add.tileSprite(0, 62, 600, 133, "mtn");
    var city = game.add.tileSprite(0, 107, 600, 90, "city");
    var truck = game.add.tileSprite(0, 77, 3000, 121, "truck");
    var road = game.add.tileSprite(0, 226, 600, 159, "road");
    var bottomRail = game.add.tileSprite(0, 385, 600, 47, "bottomRail");
    var posts = game.add.tileSprite(0, 15, 3000, 182, "posts");
    var extras = game.add.tileSprite(0, 120, 3000, 84, "extras");
    var topRail = game.add.tileSprite(0, 197, 600, 29, "topRail");
    //COINS
    this.coins=game.add.group();
    this.coins.createMultiple(40, 'coin');
    this.coins.setAll('checkWorldBounds', true);
    this.coins.setAll('outOfBoundsKill', true);

    //OTHER RACERS
    // this.npcRacers = game.add.group();
    // this.npcRacers.createMultiple.(40, 'npc');
    // this.npcRacers.setAll('checkWorldBounds', true);
    // this.npcRacers.setAll('outOfBoundsKill', true);

    //Conditional to add correct gopher to screen
    if(character == "blue"){
      this.racerBlue = game.add.sprite(50, 320, "racerBlue");
      this.racerBlue.anchor.set(0.5, 0.5);
      this.racerBlue.animations.add("idle", [0, 1], 9, true);
      this.racerBlue.animations.play("idle");
      game.physics.arcade.enable([this.racerBlue, this.coins]);
      game.camera.follow(this.racerBlue);
      this.racerBlue.body.collideWorldBounds = true;
    }

    else if (character == "pink") {
      this.racerPink = game.add.sprite(50, 320, "racerPink");
      this.racerPink.anchor.set(0.5, 0.5);
      this.racerPink.animations.add("idle", [0, 1], 9, true);
      this.racerPink.animations.play("idle");
      game.physics.arcade.enable(this.racerPink);
      this.racerPink.body.collideWorldBounds = true;
    }

    else{
      // this.racerPurple = game.add.sprite(50, 320, "racerPurple");
      // this.racerPurple.anchor.set(0.5, 0.5);
      // this.racerPurple.animations.add("idle", [0, 1], 12, true);
      // this.racerPurple.animations.play("idle");
      // game.physics.arcade.enable(this.racerPurple);
      this.racerBlue = game.add.sprite(50, 320, "racerBlue");
      this.racerBlue.anchor.set(0.5, 0.5);
      this.racerBlue.animations.add("idle", [0, 1], 9, true);
      this.racerBlue.animations.play("idle");
      game.physics.arcade.enable(this.racerBlue);
      game.camera.follow(this.racerBlue);
      this.racerBlue.body.collideWorldBounds = true;

    }


    console.log("You chose the " + character + " racer!");

    //Puts a 3 sec delay on the scrolling of the road, rails, and background
    setTimeout(function () {
      //Start scrolling
      road.autoScroll(-330, 0);
      topRail.autoScroll(-330, 0);
      bottomRail.autoScroll(-330, 0);
      sky.autoScroll(-5,0);
      city.autoScroll(-30,0);
      mtn.autoScroll(-15,0);
      truck.autoScroll(-550, 0);
      posts.autoScroll(-330, 0);
      extras.autoScroll(-330, 0);
    }, 3000);

    /*
    This are the beginning workings
    of adding random racers OR
    a new coin to the screen
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

    //TEXT
    scoreText = game.add.bitmapText(535, 7, 'pixelFont', '0', 21);

    var timeLabel;
    timeLabel = game.add.bitmapText(275, 7, 'pixelFont', 'TIME', 21);

    timeText = game.add.bitmapText(280, 27, 'pixelFont', '300', 21);

    this.setListeners();
  },

    setListeners: function(){

      game.time.events.loop(Phaser.Timer.SECOND * 2, this.loadCoin, this);
      // game.time.events.loop(Phaser.Timer.SECOND * 2, this.loadRacer, this);
    },

    loadCoin: function (){
      var coin = this.coins.getFirstDead();
      //y position
      var yy = game.rnd.integerInRange(210, game.height-55);
      //x position
      var xx = game.width-100;

      coin.reset(xx, yy);
      coin.enabled = true;
      coin.body.velocity.x = -200;
      coin.animations.add("spin", [0, 1, 2, 3, 4, 5], 12, true);
      coin.animations.play("spin");
    },

    onPickUp: function (racerBlue, coin){
      coin.kill();
      score += 1;
      console.log("Your score is --> " + score);
      this.coinBeep = game.add.audio("coinBeep");
      this.coinBeep.play('', 0, 1, false);
      this.coinBeep.volume = 0.6;
    },

  update: function (){
    game.physics.arcade.collide(this.racerBlue, this.coins, null, this.onPickUp, this);

    //timeText.text = '' + Math.round(game.time.now);
    scoreText.text = score;

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
        this.racerBlue.body.velocity.x = -150;
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
        this.racerBlue.body.velocity.y = -100;
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
        this.racerBlue.body.velocity.y = 100;
      }
      else if(this.character === "pink"){
        this.racerPink.body.velocity.x = -250;
      }
      else if(this.character === "purple"){
        this.racerPurple.body.velocity.x = -250;
      }

    }

    if(cursors.left.isDown){
      if(this.racerBlue){
        this.racerBlue.body.velocity.x = -250;
      }
    }

    if(this.racerBlue.y<this.top){
      this.racerBlue.y=this.top;
      // this.racerBlue.body.velocity.y = 0;

    }

    //Check if racerBlue is going below the screen
    if(this.racerBlue.y > this.bottom){
      this.racerBlue.y = this.bottom;
      // this.racerBlue.body.gravity.y = 0;
    }





  },



};//END StateMain
