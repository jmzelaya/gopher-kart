var mainState = {
  preload: function () {
      game.load.image('car', '../assets/gopher.png');
      game.load.image('railBot', '../assets/bottom-rail.png');
      game.load.image('road', '../assets/road-tile.png');
      game.stage.smoothed = false;
  },

  create: function () {
      game.stage.backgroundColor = '#72c5cf';

      //1st num indicates the starting x tilePosition
      //2nd num indicates the starting y tilePosition
      //3rd num indicates the x (length) of repetition
      //4th num indicates the y (height) of repetition
      this.railBot = game.add.tileSprite(0, 385, 600, 0, 'railBot');

      game.physics.startSystem(Phaser.Physics.ARCADE);

      this.car = game.add.sprite(30, 280, 'car');

      this.physics.arcade.enable(this.car);

      this.car.anchor.setTo(-0.2, 0.5);

      this.car.body.collideWorldBounds = true;

      cursors = game.input.keyboard.createCursorKeys();

      this.timer = game.time.events.loop(1500, this.addRowOfRoads, this);

      this.road = game.add.group();
  },

  update: function () {
    this.railBot.tilePosition.x = 0.5;

    this.car.body.velocity.x = 0;

    if(cursors.right.isDown){
      this.car.body.velocity.x = 300;
    }

    else if (cursors.left.isDown){
      this.car.body.velocity.x = -300;
    }

    else if (cursors.right.isDown && this.car.body.y < this.window) {
      this.car.body.velocity.x = 0;
    }
  },

  addOneRoad: function(x, y){
    var road = game.add.sprite(x, y, 'road');

    this.road.add(road);

    game.physics.arcade.enable(road);

    road.body.velocity.x = -200;

    road.checkWorldBounds = true;
    road.outOfBoundsKill = true;
  },

  addRowOfRoads: function(){
    var hole = Math.floor(Math.random() * 5) + 1;

    for(var i = 0; i < 8; i++)
    //If i is NOT equal to hole (defined above)
    //AND i is NOT equal to hole plus 1
    if(i != hole && i != hole + 1)
      //Then add a pipe at this location
      //                    vvvvvvvvv
      this.addOneRoad(600, i * 60 + 10);
  }

};

var game = new Phaser.Game(600, 432, Phaser.AUTO, 'ld29', null, false, false);

game.state.add('main', mainState);

game.state.start('main');
