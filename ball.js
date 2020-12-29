class ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.8,
            friction: 1.2,
            density: 1
        }
        this.body=bodies.circle(x,y,20,options)
        world.add(wo,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
   ellipse(0,0,20)
    pop();
    }
}