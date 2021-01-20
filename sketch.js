
var backgroundImg
var catRunning;
var mouseImg;
var cat;
var mouse;



function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png");
    catSitting=loadAnimation("images/tomOne.png");
     catRunning=loadAnimation("images/tomTwo.png","Images/tomThree.png");
    mouseRunning=loadImage("images/jerryOne.png","images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background1=createSprite(470,390,400,400);   
    background1.addImage(backgroundImg);
    background1.scale=1.1;

    mouse=createSprite(100,600,10,10);
    mouse.addImage(mouseRunning);
    mouse.scale=0.2;
    

    cat=createSprite(800,600,100,10);
    cat.addAnimation("Sitting",catSitting);
    cat.addAnimation("running",catRunning);
    cat.scale=0.2;

 

}

function draw() {

    background(220);

    
    
    //Write condition here to evalute if tom and jerry collide
    
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode==LEFT_ARROW){

    cat.velocityX=-3;
   
    cat.changeAnimation("running");
    


 
    
}
}
      
  



