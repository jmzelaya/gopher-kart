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
    game.load.image("countdown", "assets/count-down.png");

  },

  create: function () {
    //MUSIC
    this.titleSong = game.add.audio("title");
    this.titleSong.play('', 0, 1, true);

    //TIMER
    //Not sure how this works, going to do some more reasearch
    // this.timer = this.game.time.create(this.game);
    // this.timer.add(this.delay, this.readyForAction, this);
    // this.timer.start();

    //COUNTDOWN
    this.countDown = game.add.sprite(game.world.centerX, game.world.centerY, 'countdown');

    this.countDown.anchor.setTo(0.5, 0.5);
    this.countDown.alpha = 0;

    game.add.tween(this.countDown).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);

    //PHYSICS
    game.physics.startSystem(Phaser.Physics.Arcade);
    game.physics.arcade.enable(character);

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
    }

    else if (character == "pink") {
      this.racerPink = game.add.sprite(50, 320, "racerPink");
      this.racerPink.anchor.set(0.5, 0.5);
      this.racerPink.animations.add("idle", [0, 1], 12, true);
      this.racerPink.animations.play("idle");
    }

    else{
      this.racerPurple = game.add.sprite(50, 320, "racerPurple");
      this.racerPurple.anchor.set(0.5, 0.5);
      this.racerPurple.animations.add("idle", [0, 1], 12, true);
      this.racerPurple.animations.play("idle");
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
  },

  update: function (){
    // this.road.tilePosition.x -= 2;
    // this.topRail.tilePosition.x -=2;
    // this.bottomRail.tilePosition.x -=2;




  },



};//END StateMain
