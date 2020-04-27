class Bubble {
    constructor(x, y, radius) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
          push();
      ellipseMode(RADIUS);
      fill(255);
      strokeWeight(4);
      ellipse(pos.x, pos.y,25,25);
      pop();
    }
  };