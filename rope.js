class rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:400
        }
        this.body=Matter.Constraint.create(options)
        this.b=pointB
        world.add(wo,this.body)
    }
    display(){
 var a=this.body.bodyA.position
    var b=this.b
    line(a.x,a.y,b.x,b.y)
    }
}