var mainState = {
  preload: function () {
      game.load.image('car', '../assets/car.png');
  },

  create: function () {
      game.stage.backgroundColor = '#72c5cf';

      this.car = game.add.sprite(50, 300, 'car');
  },

  update: function () {

  }
};

var game = new Phaser.Game(600, 400);

game.state.add('main', mainState);

game.state.start('main');
