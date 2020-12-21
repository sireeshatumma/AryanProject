const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

var canvas, backgroundImage;
var bgImg;
var carsAtEnd = 0
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var ball;
var form, player, game;
var gs = "pressed";
var ground, roof;
var chain,timer;
var ballImg,basketImg,basket;
var score=0;
var count=0;

function preload(){
  ballImg = loadImage("images/ball.png")
  basketImg = loadImage("images/basket.png")
  bgImg = loadImage("../images/backgForm.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create();
  world = engine.world;

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ball = new Ball(displayWidth/2, displayHeight-200, 40);
  ground = new Ground(width/2,height-50,width,20);
  roof= new Ground(width/2,50,100,20);
 // obstacle=new Ball(width/2+10,150,50);
  // Matter.Body.setStatic(obstacle.body,true);
  // console.log(obstacle);
  chain = new Launcher(ball.body,{x:displayWidth/2,y: displayHeight-200})
  timer=new Timer();
}


function draw(){

  Engine.update(engine);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}


function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:displayWidth/2,y: displayHeight-200});
     chain.attach(ball.body);
     gs = "pressed";
    //  console.log("before "+count);
    //             if(count===1){
    //               score++;
    //               count=0;
    //             }
    //             console.log(count);
     
  }

}

function detectCollision(lball,lobstacle){
	ballPos=lball.body.position
	obsPos=lobstacle.body.position
	console.log(ball.trajectory)
	var distance=int(dist(ballPos.x,ballPos.y,obsPos.x,obsPos.y) ) 
  console.log("distance: "+distance);
  var a=lball.r+lobstacle.r;
  console.log("distance: "+a);
  if(distance<=parseInt(lball.r)+parseInt(lobstacle.r)){
		console.log("scored");
  }
 
  
}