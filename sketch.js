var boy;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10

function setup() {
  createCanvas(displayWidth,displayHeight);
  boy = createSprite(100, 100, 50, 50);
  wall1 = createSprite(180,550,280,50);
wall2 = createSprite(30,660,50,400);
  wall3 = createSprite(700,20,280,50);
  wall4 = createSprite(450,200,50,400);

 wall5 = createSprite(650,300,250,50);
 wall6 = createSprite(800,450,50,250);
  wall7 = createSprite(1150,450,250,50);
  wall8 = createSprite(1000,150,50,250);

  wall9 = createSprite(1000,800,50,250);
 wall10 = createSprite(100,250,250,50);
 wall11 = createSprite(180,750,280,50);
 wall12 = createSprite(650,750,320,50);
 wall13 = createSprite(650,750,50,280)
}

function draw() {
  background("black");
   // form = new Form();
   // form.display();
  
  

   if (World.frameCount%50 === 0) {
      wall1.shapeColor =rgb(random("red", "blue", "orange" ,"yellow", "green")) ;
      wall2.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ; 
       wall3.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ;
       wall4.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ; 
       wall5.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ;
       wall6.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ; 
       wall7.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ;
       wall8.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ; 
       wall9.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ;
       wall10.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ; 
       wall11.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ;
       wall12.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ; 
       wall13.shapeColor =rgb(random(0,255), random(0,255), random(0,255)) ; 
      }

      

      //if ( boy.isTouching ("wall1","wall2")&&(wall1, wall2.shapeColor = "red")){
//
    //  }
    
  drawSprites();
 
}
function keyPressed(){

if(keyCode === 38){
  boy.y = boy.y+20
}

}