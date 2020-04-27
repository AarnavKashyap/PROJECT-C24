class CanonBall {
    constructor(x, y,radius) {
      var options = {
        "density" :   1.5,
        "friction" : 1.0,
        "restitution" : 0.8,
        "frictionAir":0.06
      }
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    };
  
    display(){
      var pos =this.body.position;
      
          push();
      ellipseMode(RADIUS);
      fill(255);
      strokeWeight(4);
      ellipse(pos.x, pos.y,10,10);
      pop();
    };
  };