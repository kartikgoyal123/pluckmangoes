class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var groundPos =this.body.position;
    translate(groundPos.x, groundPos.y);
    rectMode(CENTER);
    fill("grey");
    rect(0,0, this.width, this.height);
    pop()
  }
};