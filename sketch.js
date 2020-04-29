
    class Bubble {
  
  constructor() { 
    var allInstances = [];
    
    var radius = random(10,100);
    this.x = random(0, width);
    this.y = random(0, height);
    this.width = radius;
    this.height = radius;
    this.color = "white";
    this.velocityX = random(-5, +5);
    this.velocityY= random(-5, +5);
    
    this.display = function() {
      stroke(255);
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x = this.x + this.velocityX;
      this.y = this.y + this.velocityY;
    }
      
  }
}
function setup() {
  createCanvas(600,400);
  bubble1 = new Bubble();
  bubble2 = new Bubble(); 
  bubble3 = new Bubble(); 
}
function draw() { 
  background(0);
  bubble1.move();
  bubble2.move(); 
  bubble3.move();
  bubble1.display();
  bubble2.display();
  bubble3.display();
}