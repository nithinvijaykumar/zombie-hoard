var score;
var player;
var blobs;
var bullets;
var intervalId;
var currentTime;

function setup() {
  createCanvas(800, 600);
  
  angleMode(DEGREES);
  
  //create 20 random blobs
  
  bullets = new Group();
  blobs = new Group();
  
	intervalId = setInterval(blobSpawn,6660);
  console.log(intervalId);
   
  textAlign(CENTER);
  textSize(32);
  
  alive = true;
  
  score = 200;
  player = new Player();
}

function draw() {
  background(0);
  
  if(keyIsDown(RIGHT_ARROW)) {
   player.sprite.rotation+=7; 
  }
  if(keyIsDown(LEFT_ARROW)) {
   player.sprite.rotation-=7; 
  }
  
  if (keyIsDown(32) && score > 0 && alive) {
   	player.shoot();
    score-=2;
  }
  
  if (score <= 30) {
   	fill("red"); 
  } else {
  	fill("white");
  }
  text(score,width/2,50);
  fill("white");
  
  
  if (alive){
  	bullets.collide(blobs, killBlob);
  	blobs.collide(player.sprite, blobHitPlayer)
    currentTime = frameCount / 60 - 9;
    if (currentTime >= 0) {
  		text(currentTime.toFixed(2),width/2,height-50);
    }
  } else {
    fill("white");
    text("Boi, U can do better", width/2,height/2);
    text(currentTime.toFixed(2),width/2,height-50);
  }
  
  drawSprites();
  
}

function keyPressed() {
  if (keyCode == 68) {
		// If d key is pressed
    console.log("# of bullets: " + bullets.length);
    console.log("# of blobs: " + blobs.length);
  }

}

function spawnRandomBlob() {
 	// Spawns a blob in a random part off the screen 
 randomAngle = random(0,360);
  randomRadius = random(600,1000);
  blobX = randomRadius * cos(randomAngle);
  blobY = randomRadius * sin(randomAngle);
  blob = new Blob(width / 2 + blobX, height / 2 + blobY);
  
  blob.sprite.addSpeed(-4.2, randomAngle);
  blobs.add(blob.sprite);
} 

function killBlob(bullet,blob) {
	bullet.remove();
  blob.remove();
  score = score + blob.sides;
}

function blobSpawn(){
  numBlobs = int(random(10,70));
	
  for (i = 0; i < numBlobs; i++) {
    spawnRandomBlob();
  }
  
}

function blobHitPlayer(blob, playerSprite) {
	console.log("It's the final countdown");
  playerSprite.remove();
  alive = false;
  clearInterval(intervalId);
}
                                          