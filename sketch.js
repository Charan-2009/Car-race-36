var gameState = 0;
var playCount;
var hypnoticBall, database;
var position;
var form, game, player;

function setup(){
  createCanvas(400,400)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
}
