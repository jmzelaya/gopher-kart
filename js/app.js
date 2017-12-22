var mainState = {
  preload: function () {
      game.load.image('car', '../assets/gopher.png');
      game.load.image('railBot', '../assets/bottom-rail-repeat.png');
  },

  create: function () {
      game.stage.backgroundColor = '#72c5cf';

      this.railBot = game.add.tileSprite(0,0,500,500, 'railBot');

      game.physics.startSystem(Phaser.Physics.ARCADE);

      this.car = game.add.sprite(30, 280, 'car');

      this.physics.arcade.enable(this.car);

      this.car.anchor.setTo(-0.2, 0.5);

      this.car.body.collideWorldBounds = true;

      cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
    this.railBot.tilePosition.x = 0.5;

    this.car.body.velocity.x = 0;

    if(cursors.right.isDown){
      this.car.body.velocity.x = 150;
    }

    else if (cursors.left.isDown){
      this.car.body.velocity.x = -150;
    }

    else if (cursors.right.isDown && this.car.body.y < this.window) {
      this.car.body.velocity.x = 0;
    }
  },

};

var game = new Phaser.Game(600, 432);

game.state.add('main', mainState);

game.state.start('main');
