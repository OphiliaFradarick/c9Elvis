//global variables
//The scope of global variables are throughout the program
var box;


function setup() {
  createCanvas(400, 400);
  
  box = createSprite(200,200,50,50);
  box.shapeColor = 'orange';

}

function draw() {
  background(0);

  drawSprites();
}