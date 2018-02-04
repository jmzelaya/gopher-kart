var StateMain = {

  preload: function () {
    game.stage.backgroundColor = 0xe9fffe;
    //Add racer spritesheet(s) - Later put into 1 :)
    //...maybe put into global variables? To remove repitition...
    game.load.spritesheet("racerBlue", "assets/gopher-blue.png", 63, 60, 7);
    game.load.spritesheet("racerPink", "assets/gopher-pink.png", 63, 60, 7);
    game.load.spritesheet("racerPurple", "assets/gopher-purple.png", 63, 60, 7);
    //Add road
    game.load.image("road", "assets/road-tile.png");
    //Add rail
    //Add background
    //Add other racers
    //Add obstacles

  },

  create: function () {
    //VARS
    this.lane = 0;

    this.road = game.add.tileSprite(0, 274, 600, 159, "road");


    if(character == "blue"){
      this.racerBlue = game.add.sprite(50, 280, "racerBlue");
      this.racerBlue.anchor.set(0.5, 0.5);
      this.racerBlue.animations.add("idle", [0, 1], 12, true);
      this.racerBlue.animations.play("idle");
    }

    else if (character == "pink") {
      this.racerPink = game.add.sprite(50, 280, "racerPink");
      this.racerPink.anchor.set(0.5, 0.5);
      this.racerPink.animations.add("idle", [0, 1], 12, true);
      this.racerPink.animations.play("idle");
    }

    else{
      this.racerPurple = game.add.sprite(50, 280, "racerPurple");
      this.racerPurple.anchor.set(0.5, 0.5);
      this.racerPurple.animations.add("idle", [0, 1], 12, true);
      this.racerPurple.animations.play("idle");
    }


    console.log("You chose the " + character + " racer!");
    //Load "character" from the stateChoice;
    setTimeout(function () {
      for(var i = 3; i > 0; i --){
        console.log(i);
      }
      console.log("GO!");
    }, 1500);

  },

  update: function (){
    this.road.tilePosition.x -= 2;


  },



};//END StateMain
