var form; 

function preload(){

}

function setup(){
    createCanvas(displayWidth + 180, displayHeight);
    form = new Form();
    form.display(); 

}

function draw(){
    background("lightblue");


    drawSprites();
}