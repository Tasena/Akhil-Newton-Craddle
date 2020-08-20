class Chain {
    constructor(BodyA,BodyB,offA,offB){
        var opt = {
            bodyA:BodyA,
            bodyB:BodyB,
            pointB:{x : offA,y : offB},
            length:50,
            stiffness:0.2
        }
        this.offsetX = offA;
        this.offsetY = offB;
        this.chain = Constraint.create(opt);
        World.add(world,this.chain);
    }
    display(){
        push();
        strokeWeight(10);
        stroke(51, 26, 0)
        
        var Anchor1X=this.chain.bodyA.position.x;
		var Anchor1Y=this.chain.bodyA.position.y;
        
        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;
        
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


        pop();
    }
}