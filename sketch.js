var database;
var gameState=0;
var playerCount;
var game ,player,form;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();


 
}

function draw(){
  background("white");
  
   
  
}


