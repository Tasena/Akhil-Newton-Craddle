class Bob {
    constructor(x1, y1) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x1, y1, 50,options);
      World.add(world, this.body);
    }
    display(){
  
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      //ellipseMode(RADIUS);
      fill("blue");
      ellipse(0, 0,50,50);
      pop();
    }
  };
  