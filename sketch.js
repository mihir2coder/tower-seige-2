const engine=Matter.Engine
const world=Matter.World 
const bodies=Matter.Bodies 

var en, wo; 




function setup() {
  createCanvas(1200,800);
en=engine.create()
wo=en.world
box1=new box(170,80)
ground1= new ground()
ball1= new ball(20,20)
box2= new box(170,20)
box3= new box(170,20)
box4= new box(170,20)
box5= new box(170,20)
box6= new box(170,20)
box7= new box(170,20)
box8= new box(170,20)
box9= new box(170,20)
box10= new box(170,20)
rope1= new rope(ball1.body,{x:+85,y:56})


  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  

engine.update(en)

box1.display()
ground1.display()
ball1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
rope1.display()
}