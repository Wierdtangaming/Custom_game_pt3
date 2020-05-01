var canvas, backgroundImage,enemy,enemy_created;
var grnd_no;
var score;
var grnd1_f,grnd2_f,grnd3_f,grnd4_f;
var grnd1_2;
var grnd2;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
}

function setup(){
  grnd_no = 0;
  score = 0;
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(displayWidth - 20, displayHeight-10);
  player = new Player(displayWidth/4,displayHeight-500,200,140);
  game = new Game();
  newGrnd();
  
}


function draw(){
  background("white");
  Engine.update(engine);
  player.display();
  game.play();
  spawnenemy();
  
  ground1.display();
  displaygrounds();
  
}


function newGrnd() {
  if (grnd_no === 0) {
   ground1 = new Ground1(displayWidth-300,displayHeight,displayWidth*2,200);
  }
  else if (grnd_no > 0){
    var grnd_random = round(random(1,2));
    
    console.log(grnd_random);
    switch (grnd_random) {
      case 1: 
        ground2 = new Ground2(displayWidth-300,displayHeight,displayWidth*2,200);
        grnd2_f = true
        break;
  
      case 2:
         ground3 = new Ground3(displayWidth-300,displayHeight,displayWidth*2,200);
         grnd3_f = true
        break;
  
      case 3:
        ground4 = new Ground4(displayWidth-300,displayHeight,displayWidth*2,200);
        grnd4_f = true
      default :
         break;
    } 
    
  }
  grnd_no++; 
}

function displaygrounds() {
  if ( grnd2_f === true){
    ground2.display();
  }
  if ( grnd3_f === true){
    ground3.display();
  }
  if ( grnd4_f === true){
    ground4.display();
  }
}

function spawnenemy() {
  console.log("spawn enemy")
  if (score % 100 === 0){
    
    console.log("enemy stage 1")
    
      console.log("enemy created")
      var randomenemy_y = random(0,displayHeight/2-150)
      enemy = new Enemy(displayWidth,randomenemy_y,100,100);
      enemyflag = 0;
      
      enemy_created = true;
    
  }
  if(enemy_created === true){
  enemy.display();
  }
}