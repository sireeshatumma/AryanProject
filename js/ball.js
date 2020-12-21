class Ball{
    constructor(x,y,r){
      var options ={
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2
        //  collisionFilter:1
       
      }
       this.x=x;
       this.y=y;
       this.r=r;
       this.trajectory=[]
       this.body= Bodies.circle(this.x,this.y,this.r/2,options)
       
       this.image = loadImage("images/ball.png")
       World.add(world,this.body)
    }

    display(){
        var paperpos = this.body.position
        var angle=this.body.angle;
        push()
        translate(paperpos.x,paperpos.y)
        rotate(angle);
        
        if(this.body.speed > 0 ){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
          if(this.body.position.y>160 && this.body.position.y<180){
            console.log("position touched");
            count=1;
          }else{
            // count=0;
          }
          
        }
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
       
        pop()
    }
}