class ground{
    constructor(){
        var options={
            isStatic:true

        }
        this.body=bodies.rectangle(400,650,1200,20,options)
        world.add(wo,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,1200,20)
    }
}