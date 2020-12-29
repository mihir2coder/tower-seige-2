class box{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.8,
            friction: 1.2,
            density: 1
        }
        this.body=bodies.rectangle(x,y,20,20,options)
        world.add(wo,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,20,20)
    pop();
    }
}