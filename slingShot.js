class SlingShot {
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.09,
}
this.shoot=Constraint.create(options);
World.add(world,this.shoot);
    
}
display(){
 if(this.shoot.bodyA){   
var posA=this.shoot.bodyA.position
var posB=this.shoot.pointB;
push();
strokeWeight(10);
fill("yellow");
line(posA.x,posA.y,posB.x,posB.y);

pop()
 }
}
fly(){
 this.shoot.bodyA=null   
}
}
