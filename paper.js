class paper
{
	constructor(x,y)

var options = {
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}

	{
		this.x=x;
		this.y=y;
		this.paperWidth=50;
		this.paperHeight=53;
		this.paperThickness=20;
		
		this.image=loadImage("paper.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.paperWidth, this.paperThickness, {isStatic:true})
		this.leftpaperBody=Bodies.rectangle(this.x-this.paperWidth/2, this.y-this.paperHeight/2, this.paperThickness, this.paperHeight, {isStatic:true})
		
		

		this.rightpapperBody=Bodies.rectangle(this.x+this.paperWidth/2, this.y-this.paperHeight/2, this.paperThickness, this.paperHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftpaperBody)
		World.add(world, this.rightpaperBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftpaperBody.position;
			var posRight=this.rightpaperBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.paperHeight/2,this.paperWidth, this.paperHeight)
			//rect(0,0,this.paperWidth, this.paperThickness);
			pop()
			
	}

}