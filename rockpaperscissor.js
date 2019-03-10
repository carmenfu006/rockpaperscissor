for var Game = [$('scissor'), $('rock'), $('paper')] {

  scissor = function(gesture) {
    if (gesture == "rock") {
      return = "win";
    }
    else if (gesture == "paper") {
      return = "lose";
    }
    else "tie";
  };

  rock = function(gesture) {
    if (gesture == "scissor") {
      return = "win";
    }
    else if (gesture == "paper") {
      return = "lose";
    }
    else "tie";
  };

  paper = function(gesture) {
    if (gesture == "rock") {
      return = "win";
    }
    else if (gesture == "scissor") {
      return = "lose";
    }
    else "tie";
  };
};

function Game() {
  this.gestureScissor = scissor;
  this.gestureRock = rock;
  this.gesturePaper = paper;
}

Game.prototype.scissor = function() {
  return this.gestureScissor;
};

Game.prototype.rock = function() {
  return this.gestureRock;
};

Game.prototype.paper = function() {
  return this.gesturePaper;
};

$('.rock').on('click', function() {
        gesture.rock();
});

$('.paper').on('click', function() {
        gesture.paper();
});

$('.scissor').on('click', function() {
        gesture.scissor();
});
