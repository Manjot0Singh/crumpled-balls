class Paper{
	constructor(x,y,r)
	{
	
	var options = {
		isStatic:false,
		density:1.2,
        friction:0.9,
        restitution:0.8
	  }

		this.x=x;
		this.y=y;
		this.r=r;

		this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);

	}
	        display() {
			
			var pos=this.body.position;	
			push()	
			translate(pos.x,pos.y);
		    imageMode(CENTER);
			image(this.image,0,0,this.r,this.r)
			pop()
	}

}