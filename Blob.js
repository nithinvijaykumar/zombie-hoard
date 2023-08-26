function Blob(x,y) {
	this.sprite = createSprite(x,y,50,50); 
  
  this.sprite.sides = floor(random(3, 8));
  
  this.sprite.vertices = [];
  
  // Generate the verticies
  for (var i = 0; i < this.sprite.sides; i++) {
    var vertX = 25 * cos(360 * i / this.sprite.sides);
    var vertY = 25 * sin(360 * i / this.sprite.sides);
    
    this.sprite.vertices.push([vertX, vertY]);
  }
  
  this.sprite.draw = function() {
   	fill(this.shapeColor);
    beginShape();
    for (var vert of this.vertices) {
    	vertex(vert[0], vert[1]);
    }
    endShape(CLOSE);
  }
}

