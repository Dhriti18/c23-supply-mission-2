class Box{
    constructor (x,y,width,height){
    
    
    
    this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
    
    
    
    
    
    }
    
    display(){
      var p=this.body.position;
      fill("red");
      rectMode(CENTER);
    rect(p.x,p.y,this.width,this.height);
    
    
    
    
    }
    
    
    
    
    
    
    
    }