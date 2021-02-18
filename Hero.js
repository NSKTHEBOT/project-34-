class hero{
    constructor(x,y,radius){
        var options={
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("Superhero-01.png");
    World.add(world, this.body); 
}
display(){
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        
        image(this.image,0,0,250,100);
        pop();
}
    
}