class Particle {
    constructor(x,y,radius) {
       var options = {
         isStatic :false
               
       }
      this.body = Bodies.circle(x,y,radius,options);
     this.radius =radius;
      //this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
      World.add(world, this.body);
      //this.img = loadImage("paper.png")
    }
    display(){
      var pos=this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
			ellipseMode(RADIUS)
			
			fill(255);
      ellipse(0,0,this.radius,this.radius);
     // image(this.img,-50,-50,100,100);
		pop();
    }
  };