var mainState = {
  preload: function () {
      game.load.image('car', '../assets/car.png');
  },

  create: function () {
      game.stage.backgroundColor = '#72c5cf';

      game.physics.startSystem(Phaser.Physics.ARCADE);

      this.car = game.add.sprite(50, 300, 'car');

      this.physics.arcade.enable(this.car);

      this.car.anchor.setTo(-0.2, 0.5);

     this.car.body.collideWorldBounds = true;

      cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
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

var game = new Phaser.Game(600, 400);

game.state.add('main', mainState);

game.state.start('main');
