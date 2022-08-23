
//desenha as sprites

class Sprite{
    constructor({position, imageSrc, scale = 1, framesMax = 1 }){
        this.position = position
        this.width = 50
        this.height = 150
        this.image =  new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.frameCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
      }
        
    
    draw(){
        c.drawImage(
            this.image,
            this.frameCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax ,
            this.image.height,

            this.position.x,
            this.position.y,
            (this.image.width / this.framesMax )* this.scale,
            this.image.height * this.scale
            )
    }
  
  
    update(){
        this.draw()
        this.framesElapsed++

        if(this.framesElapsed % this.framesHold ===  0){

            if(this.frameCurrent <  this.framesMax - 1){
                this.frameCurrent++
            }else{
                this.frameCurrent = 0
            }
        }

    }
  }
  
  
  // desenha os lutadores
  
  class Fighter{
  constructor({position, velocity, color = 'red', offSet}){
      this.position = position
      this.velocity = velocity
      this.width = 50
      this.height = 150
      this.lastKey 
      this.atackBox = {
        position: {
          x: this.position.x,
          y: this.position.y
        },
        offSet: offSet,
        width: 100,
        height: 50,
        
      }
      this.color = color
      this.isAttacking =  false
      this.health = 100
  }
  
  draw(){
      c.fillStyle = this.color
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
  
      // atack box
    if(this.isAttacking){
      c.fillStyle = 'green'
      c.fillRect(this.atackBox.position.x,
        this.atackBox.position.y,
        this.atackBox.width,
        this.atackBox.height
        )
    }
  }
  
  update(){
      this.draw()
      this.atackBox.position.x = this.position.x + this.atackBox.offSet.x
      this.atackBox.position.y = this.position.y
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
  
      if (this.position.y + this.height + this.velocity.y >= canvas.height -96){
          this.velocity.y = 0
      }else this.velocity.y += gravity
  
  }
  
  attack(){
    this.isAttacking = true
    setTimeout(() =>{
      this.isAttacking = false
    }, 100)
  
  }
  
  }