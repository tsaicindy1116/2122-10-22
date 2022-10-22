function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
	background(0)
  noFill()
	var w =mouseX/10
	for(var i=0;i<width/50;i++)
	 for(var j=0;j<height/50;j++)
	{
  ellipse(50+100*i,50+100*j,w)
  stroke("#e63946")
   strokeWeight(2)
     rect(25+50*i,25+50*j,mouseY/2)
   stroke("#f1faee")	
   strokeWeight(2.5)
	   rect(25+50*i,25+50*j,mouseX/15)
   stroke("#a8dadc")	
   strokeWeight(2.5)
	   rectMode(CENTER)
     ellipse(25+50*i,25+50*j,w)
   stroke("#457b9d")
   strokeWeight(2)	
  
	}
}