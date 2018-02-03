var StateMain = {

  preload: function () {
    //Add racer spritesheet
    //Add road
    //Add rail
    //Add background
    //Add other racers
    //Add obstacles

    //Conditional or Case/Switch to
    //preload the correct spriteSheet
    //depending on what the "character" var is
  },

  create: function () {
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


  },



};//END StateMain
