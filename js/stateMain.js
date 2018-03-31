var StateMain = {

  preload: function () {
    game.load.audio("title", "assets/music/racingMain-compressed.m4a");

    game.load.audio("coinBeep", "assets/music/sfx/coin.wav");

    game.stage.backgroundColor = 0xe9fffe;
    //Add racer spritesheet(s) - Later put into 1 :)
    //...maybe put into global variables? To remove repitition...
    game.load.spritesheet("blue", "assets/gopher-blue-updated.png", 64, 60, 15);
    game.load.spritesheet("pink", "assets/gopher-pink.png", 64, 60, 15);
    game.load.spritesheet("purple", "assets/gopher-purple.png", 64, 60, 15);
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

    game.load.spritesheet("npc", "assets/other-gophers.png", 64, 60, 12);
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
    this.lane = function () {
      return availLanes[Math.floor(Math.random()*availLanes.length)];
    }
    this.pickNPC = function(){
      return availNpcGophers[Math.floor(Math.random()*availNpcGophers.length)];
    }
    // this.npc = game.add.sprite(game.width, this.lane, this.pickNPC);

    console.log("NEW NPC ADDED: " + this.lane() + " , " + this.pickNPC());


    var sky = game.add.tileSprite(0, 6, 600, 78, "sky");
    var mtn = game.add.tileSprite(0, 62, 600, 133, "mtn");
    var city = game.add.tileSprite(0, 107, 600, 90, "city");
    var truck = game.add.tileSprite(0, 84, 3000, 142, "truck");
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

    // OTHER RACERS
    this.npcRacers = game.add.group();
    this.npcRacers.createMultiple(40, 'npc');
    this.npcRacers.setAll('checkWorldBounds', true);
    this.npcRacers.setAll('outOfBoundsKill', true);

    //CHECK OUT HUNGRY DRAGON TO PICK BETWEEN DIFFERENT COLORS

    this.sprite = game.add.sprite(50, 289, character);
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.animations.add("crash", [2,3,4,5,6], 5, false);
    this.sprite.animations.add("idle", [0, 1], 9, true);
    this.sprite.animations.play("idle");
    game.physics.arcade.enable([this.sprite, this.coins, this.npcRacers]);
    game.camera.follow(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.immovable = true;

    this.sprite.body.width = 60;
    this.sprite.body.height = 30
    this.sprite.body.offset.setTo(3, 30);


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

    //Set cursors to accept input from the keyboard
    cursors = game.input.keyboard.createCursorKeys();

    //TEXT
    scoreText = game.add.bitmapText(535, 7, 'pixelFont', '0', 21);

    var timeLabel;
    timeLabel = game.add.bitmapText(275, 7, 'pixelFont', 'TIME', 21);

    timeText = game.add.bitmapText(280, 27, 'pixelFont', '300', 21);

    game.debug.bodyInfo(this.npcRacers);


    this.setListeners();
  },

    setListeners: function(){

      game.time.events.loop(Phaser.Timer.SECOND * 5, this.loadCoin, this);
      game.time.events.loop(Phaser.Timer.SECOND, this.loadNPC, this);
    },

    loadNPC: function (){
      var newNpc = this.npcRacers.getFirstDead();
      var xx = game.width;
      var yy = this.lane();
      // newNpc.key = this.pickNPC();
      newNpc.anchor.set(0.5 , 0.5);
      newNpc.reset(xx, yy);
      newNpc.enabled = true;
      newNpc.body.velocity.x = -200;
      newNpc.animations.add("idle", this.pickNPC(), 12, true);
      newNpc.animations.play("idle");
      newNpc.body.immovable = false;
      newNpc.body.checkCollision.up = false;
      newNpc.body.checkCollision.down = false;
      newNpc.body.width = 60;
      newNpc.body.height = 30
      newNpc.body.offset.setTo(3, 30);
    },

    loadCoin: function (){
      var coin = this.coins.getFirstDead();
      //y position
      var yy = game.rnd.integerInRange(240, game.height-70);
      //x position
      var xx = game.width;

      coin.reset(xx, yy);
      coin.enabled = true;
      coin.body.velocity.x = -200;
      coin.animations.add("spin", [0, 1, 2, 3, 4, 5], 12, true);
      coin.animations.play("spin");
    },

    onPickUp: function (sprite, coin){
      coin.kill();
      score += 1;
      console.log("Your score is --> " + score);
      this.coinBeep = game.add.audio("coinBeep");
      this.coinBeep.play('', 0, 1, false);
      this.coinBeep.volume = 0.6;
    },

    onCrash: function (sprite, npc){
      sprite.animations.play("crash");
      lives -= 1;
      npc.kill();
      console.log("You have " + lives + "lives left!");
      // sprite.animations.play("idle");
    },

  update: function (){
    game.physics.arcade.collide(this.sprite, this.coins, null, this.onPickUp, this);
    game.physics.arcade.collide(this.sprite, this.npcRacers, null, this.onCrash, this);

    //timeText.text = '' + Math.round(game.time.now);
    scoreText.text = score;

    //Cursors - Keyboard key check ⌨️
    if(cursors.right.isDown){
        this.sprite.body.velocity.x = 150;
    }

    if(cursors.right.isUp){
        this.sprite.body.velocity.x = -150;
    }

    if(cursors.up.isDown){
        this.sprite.body.velocity.y = -100;
    }

    if(cursors.up.isUp){
        this.sprite.body.velocity.y = 0;
    }

    if(cursors.down.isDown){
      this.sprite.body.velocity.y = 100;
    }

    if(cursors.left.isDown){
      if(this.sprite){
        this.sprite.body.velocity.x = -250;
      }
    }

    if(this.sprite.y<this.top){
      this.sprite.y=this.top;
    }

    if(this.sprite.y > this.bottom){
      this.sprite.y = this.bottom;
    }

  },

  render: function (){
    //game.debug.body(this.sprite);
  },


};//END StateMain
