const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var particles = [];
var plinkos = [];
var divisions = [] ;
var  divisionHeight = 300;

var plinko,plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9;
var division;
var ground; 
var particle;



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,790,800,20);
  for(var i=0;i <= width; i = i+80){
    division = new Divisions(i,height - divisionHeight/2,10,divisionHeight);
    divisions.push(division)
   }
//    plinko1 = new Ball(i*60+10,100,10);
//    plinko2 = new Ball(i*60+10,100,10);
//    plinko3 = new Ball(i*60+10,100,10);
//    plinko4= new Ball(i*60+10,100,10);
//    plinko5 = new Ball(i*60+10,100,10);
//    plinko6= new Ball(i*60+10,100,10);
//    plinko7 = new Ball(i*60+10,100,10);
//    plinko8 = new Ball(i*60+10,100,10);
//    plinko9 = new Ball(i*60+10,100,10);
for(var i =75 ; i < width; i = i+50 ){
  plinkos.push(new Ball( i,75,10));

  
}   
for(var i =50 ; i < width - 10; i = i+50 ){
  plinkos.push(new Ball( i,175,10));

  
}   
for(var i = 75 ; i < width ; i = i+50 ){
  plinkos.push(new Ball( i,275,10));

  
}   
for(var i =55 ; i < width - 10; i = i+50 ){
  plinkos.push(new Ball( i,375,10));

  
}   
 }

function draw() {

  Engine.update(engine);
  background(0);  
 // plink = plinko;
 ground.display();

 for(var i = 0;i<plinkos.length; i++){
   plinkos[i].display();
 }
 if(frameCount % 60 === 0){
 particles.push(new Particle(random(width/2-30,width/2+30),10,10));
 } 
 for( var i = 0;i <particles.length;i++){
   particles[i].display();
 }
 for(i = 0 ; i < divisions.length;i++){
   divisions[i].display();
 }
    //.push(new Particle(random(width/2-10,width/2+10),10,10));
 
  
  // particle.display();
  
  drawSprites();
}


