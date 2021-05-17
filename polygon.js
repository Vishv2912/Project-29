class polygon {
    constructor(x,y,radius){
    var options={
        'restitiution':0.8,
        'friction':1.0,
        'density':1.0,
    }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius=radius;
            World.add(world, this.body);
    this.image = loadImage("polygon.png");
}
display(){
//this.body.position.x=mouseX;
//this.body.position.y=mouseY;

    var pos= this.body.position;
fill(176,219,83);
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.radius);  
  
    image(this.image,pos.x-28,pos.y-28,60,60);
 
}

}