class Ground3 {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
      
        this.width = width;
        this.height = height;
        
  
        this.image = loadImage("images/grnd3_jump.png");
        World.add(world, this.body);
      }
      display(){
        Matter.Sleeping.set(this.body,false)
        this.body.position.x -= 10;
        Matter.Sleeping.set(this.body,true)
  
        var pos =this.body.position;
        translate(pos.x,pos.y);
        
        
        imageMode(CENTER);
        image(this.image, 0,0, displayWidth, 200);
        
      }
}