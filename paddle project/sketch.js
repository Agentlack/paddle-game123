//GLOBAL VARIABLE
var a,b,c
function setup(){
createCanvas(400,400)
a = createSprite(360,100,10,50);
b=createSprite(20,200,10,10);
c=createEdgeSprites();
//c[0]
//c[1]
//c[2]
//c[3]
b.velocityY=7
b.velocityX=7
}
function draw(){
background("white");
a.y=mouseY
b.bounceOff(a)
b.bounceOff(c)
drawSprites();
}