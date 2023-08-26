function Player() {
    this.sprite = createSprite(width / 2, height / 2, 50, 50);
  
      this.sprite.draw = function() {
          fill(253, 181, 21);
      rect(20, 0, 30, 20);
      
      fill(19,87,181);
      ellipse(0,0,50,50);
      }
    this.shoot = function(){
        if (alive) {
        bullet = createSprite(this.sprite.position.x,this.sprite.position.y,10,10);
        bullet.addSpeed(15,this.sprite.rotation);
        bullet.life = 300;
        bullets.add(bullet);
      }
        else {
          return false;
      }  
    }  
   }
    