
// determina o jogador  vencedor
function determineWinner ({player, enemy, timerId}){
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
      if(player.health === enemy.health){
        document.querySelector('#displayText').innerHTML = 'Empate'
      } else if(player.health > enemy.health){   
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
        enemy.switchSprites('death')
      } else if(player.health < enemy.health){   
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
        player.switchSprites('death')
      }
  
  }




  // temporizador 
  let timer = tempodojogo  
  let timerId 
  function decreaseTimer(){
    
    if(timer > 0){
  
      timerId = setTimeout(decreaseTimer, 1000)
      timer--
      document.querySelector('#timer').innerHTML = timer
    }

  
      if(timer === 0){
        
        determineWinner({player, enemy, timerId})
     
  
      }



  }
  
  
  //função que detecta a colisao dos jogadores
  function rectangularCollision({ rectangle1, rectangle2 }){
    return(
      rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
      rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
      rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
      
    )
  }
  




//leitura dos controles

const keys = {
  a:{
      pressed: false
  },
  d:{
      pressed: false
  },
  ArrowRight:{
      pressed: false
  },
  ArrowLeft:{
      pressed: false
  },
  chu:{
    pressed: false
}


}


//ao precionar o botão -->
var cliques = 0
window.addEventListener('keydown', (event) => {
    
  if(!player.dead){
  
    switch(event.key){
    
        //player keys
        case direitaplayer: 
          keys.d.pressed = true
          player.lastKey = 'd' 
          tocamusica()
        break
        case'a':
          keys.a.pressed = true
          player.lastKey = 'a'  
          tocamusica()
          break
        case'w':
        if(player.position.y <= 329){
          player.velocity.y = this.player.velocity.y
          } else{player.velocity.y = AltPuloPlayer}  // quanto o jogador pula
          tocamusica()
          break
        case attackplayer:
          player.attack()
          tocamusica()
          break 

          //churiquem
        case churiquem:
          keys.chu.pressed = true
          player.lastKey =  'chu'  
          console.log('churiquem de fogoooooo!')
          break
    }
  }

  if(!enemy.dead){
  
      switch(event.key){
        //enemy keys
        case'ArrowRight':
        keys.ArrowRight.pressed = true
          enemy.lastKey =  'ArrowRight'  
          tocamusica()
          break
        case'ArrowLeft':
          keys.ArrowLeft.pressed = true
          enemy.lastKey = 'ArrowLeft'  
          tocamusica()
          break
        case'ArrowUp':  
          if(enemy.position.y <= 129){
            enemy.velocity.y = this.enemy.velocity.y
            } else{enemy.velocity.y = AltPuloInimigo} //  quanto o inimigo pula
          tocamusica()
          break 
        case attackinimigo:
          enemy.attack()
          tocamusica()
          break 
      }
  }
})

//ao soltar o botão -->
window.addEventListener('keyup', (event) => {
  switch(event.key){

      //player keys
        case direitaplayer:
       keys.d.pressed = false
        break
      case esquerdaplayer:
        keys.a.pressed = false
        break
      case puloplayer:
        keys.w.pressed = false
        break
      //churiquem
      case churiquem:
        keys.chu.pressed = false
        break





      //enemy keys
        case direitainimigo:
       keys.ArrowRight.pressed = false
        break
      case esquerdainimigo:
        keys.ArrowLeft.pressed = false
        break
      case puloinimigo:
        keys.ArrowUp.pressed = false
        break

      

  }

})

//tocar musica de fundo----
var audio, playbtn;

function initAudioPlayer() {
  audio = new Audio();
  audio.src = "./sounds/battletheme5.wav";
  audio.play();
  audio.loop = true
}


function tocamusica(){
  if(cliques <= 0){
    initAudioPlayer()  // inicia o audio no primeiro movimento do jogador 
  }
  cliques++

  if(timer <= 58){ 
    document.querySelector('#controlesdisplay').src =' ' // REMOVE A GUIA DE BOTOES APOS 2 SEGUNDOS
    }

}

mute.addEventListener('click', (e) => {
  audio.muted = !audio.muted;
  e.target.textContent = audio.muted ? 'Mute' : 'Mute';
})


function guiabotoes(){
document.querySelector('#controlesdisplay').src ='./img/Controles.png'
}

