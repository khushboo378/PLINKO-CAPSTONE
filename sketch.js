const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies

var ground,engine,world

//var particles=[]
var plinkos=[]
var divisons=[]
var divisonHeight=300

var score=0
var count=0
var gameState="play"
var particle


function setup(){
createCanvas(700,600)
engine=Engine.create()
world=engine.world

for(var i=40;i<=width;i=i+80){
plinkos.push(new Plinko(i+30,100,20))
}

for(var i=20;i<=width;i=i+60){
plinkos.push(new Plinko(i,190,20))
}
        
for(var i=40;i<=width;i=i+80){
plinkos.push(new Plinko(i+30,280,20))
}

for(var k=30;k<=width;k=k+80){
divisons.push(new Div(k,600,10,divisonHeight))    
}

 

ground=new Ground(350,600,700,30)

}

function draw(){
background(0)
Engine.update(engine)

noStroke()
textSize(30)
fill("white")
text("SCORE :" + score,width-300,50)
text("500",205,480)
text("250",120,480)
text("500",35,480)
text("290",290,480)
text("700",375,480)
text("900",460,480)
text("700",545,480)
text("100",630,480)


ground.display()

//First Row



for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()   
}

//SECOND ROW 


for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()    
    }

//THIRD ROW 

    
for(var i=0;i<plinkos.length;i++){
plinkos[i].display()   
}

//DUSTBIN 



for(var k=0;k<divisons.length;k++){
    divisons[k].display()
    }

//PARTICLES

/*if(frameCount%10===0){
    //particles.push(new Par(random(width/2-10,width/2+10),10,10))
    particles.push(new Par(random(width/2-300,width/2+300),10,10))
}   


for(var j=0;j<particles.length;j++){
particles[j].display()    
}*/

//score
if(particle!==null)
{
particle.display();

if(particle.body.position.y>450)
{

if(particle.body.position.x>30)
{
score=score+500;
particle=null;  


if(count>=5)
gameState="end";

}
}
}
//score 


}

function mousePressed()
{
if(gameState!=="end")
{
count++;
particle=new Par(500,10,10) 

}


}