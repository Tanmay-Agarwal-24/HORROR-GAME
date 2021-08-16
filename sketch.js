
var player
var introBackgroundImg
var gameState = 'start'

// time to open play 2 ,adb2 for sound2 play again and again,abc3and abc4 for shell1
var abc1 = 0, abc2 = 0, abc3 = 0, abc4, abc5 = 0, abc6, abc7 = 0, abc8, abc9 = 0, abc10, abc12 = 0, abc13, abc14 = 0, abc15
var abc16 = 0, abc17
var room = 1
var Cshell = 0
var CwhiteKey = false
var CblackKey = false
var CmainDoor = false
var Cstone = false
var CwhiteKey = false
var ghost = 0
var ghostT = 200

function preload() {
  introBackgroundImg = loadImage('images/Horror-Cover.jpg')
  play = loadImage('images/play.png')
  sound1 = loadSound('sound1.wav')
  sound2 = loadSound('sound2.mp3')
  bg1img = loadImage('images/bg1.jpg')
  bg2img = loadImage('images/bg2img.jpg')
  bg4img = loadImage('images/bg4img.jpg')
  bg3img = loadImage('images/bg3img.jpg')
  try1 = loadImage('images/try1.jpg')
  playerimg1 = loadImage('images/player.png')
  playerimg1 = loadImage('images/player.png')
  playerimg2 = loadImage('images/player2.png')
  s = loadImage('images/s.png')
  shellimg = loadImage('images/shell.png')
  any1img = loadImage('images/any1.png')
  blacklockimg = loadImage('images/blacklock.png')
  exitimg = loadImage('images/exit.png')
  whiteKeyimg = loadImage('images/whiteKey.png')
  brownimg = loadImage('images/brownbox.png')
  sbimg = loadImage('images/sb.png')
  abcd = loadImage('images/finalexit.png')
  gh = loadSound('sound3.mp3')



}
function setup() {
    createCanvas(1343, 675)
  background(introBackgroundImg)

  //playButton
  playbutton = createSprite(width / 2 - 30, height / 2)
  playbutton.visible = false
  playbutton.addImage(play)
  playbutton.scale = 0.5
  exitdoor = createSprite(width + width + width - 70, height / 2)
  exitdoor.addImage(abcd)
  exitdoor.scale = 0.4
  player = createSprite(width / 2, height / 2, 70, 70)
  player.addImage(playerimg1)
  player.scale = 0.6
  a = createSprite(width / 2, 0, width + 1000000, 2)
  b = createSprite(width / 2, height, width + 100000, 2)
  c = createSprite(0, height / 2, 2, height)
  d = createSprite(width, height / 2, 2, height)
  e = createSprite(width + width, height / 2, 2, height)
  f = createSprite(width + width + width, height / 2, 2, height)


  sb = createSprite(width * 2.4, height - 20)
  sb.addImage(sbimg)
  sb.scale = 0.2
  stone1 = createSprite(width * 2.2, height - 20)
  stone1.addImage(s)
  shell1 = createSprite(200, 200)
  shell2 = createSprite(width * 1.4, height / 1.5)
  blacklock = createSprite(width / 3.2, height - 100)
  brown = createSprite(width * 1.2, height - 70)
  brown.addImage(brownimg)
  brown.scale = 0.2
  exit1 = createSprite(width - 70, 70)
  exit2 = createSprite(width + 70, 70)
  exit3 = createSprite(width + width - 70, 70)
  exit4 = createSprite(width + width + 70, 70)
  exit4.addImage(exitimg)
  exit2.addImage(exitimg)
  exit3.addImage(exitimg)
  exit2.scale = 0.25
  exit3.scale = 0.25
  exit4.scale = 0.25
  whiteKey = createSprite(width / 1.1, height / 1.1)
  shell1.addImage(shellimg)
  shell2.addImage(shellimg)
  any1 = createSprite(width / 1.1, height / 1.1)
  any1.addImage(any1img)
  blacklock.addImage(blacklockimg)
  exit1.addImage(exitimg)
  whiteKey.addImage(whiteKeyimg)
  shell1.scale = 0.1
  shell2.scale = 0.1
  blacklock.scale = 0.11
  whiteKey.scale = 0.5
  any1.scale = 1
  exit1.scale = 0.25
  stone1.scale = 0.08





  player.setCollider("rectangle", 25, 0, 140, 180);


}

function draw() {
  a.visible = false
  b.visible = false
  c.visible = false
  d.visible = false
  e.visible = false
  f.visible = false

  if (gameState === 'start') {
    blacklock.visible = false
    whiteKey.visible = false
    shell1.visible = false
    any1.visible = false
    exit1.visible = false


    background(introBackgroundImg)
    playbutton.visible = true
    player.visible = false
    if (mousePressedOver(playbutton)) {
      sound1.play()
      player.visible = false
      gameState = 'play1'
    }
  }
  if (gameState === 'play1') {
    abc1 = abc1 + 1
    background('red')
    fill('orange')
    textAlign('center')
    textSize(40)
    text('You have to escape', width / 2, 50)
    fill('skyblue')
    textSize(30)
    text('Control', width / 2, 150)
    fill('black')
    textSize(20)
    text('1)use mouse click to open ', width / 2, 200)
    text('2)if you hear 2 sound at a time then run to other room', width / 2, 230) 
    text('3)WSED to move', width / 2, 260)
    
    player.visible = false
    playbutton.visible = false
    if (abc1 > 200) {
      abc1 = 0
      gameState = 'play2'
      sound1.stop()
      sound2.play()
    }
  }






  if (gameState === 'play2') {

    if (frameCount % 180 === 0) {
      ghost = Math.floor(random(1, 4))
    }

    if (ghost === room) {
      ghostT = ghostT - 1.8
    
      sound1.play()

    }
    else {
      ghostT = 200
      sound1.stop()
    }

    






    player.visible = true
    player.collide(a)
    player.collide(b)
    player.collide(c)
    player.collide(d)
    player.collide(e)
    player.collide(f)
    if (ghostT < 0) {
      gameState = 'end1'
    }
    abc2 = abc2 + 1
    player.setVelocity(0, 0)
    background(bg1img)
    if (abc2 > 250) {
      sound2.stop()
      sound2.play()
      abc2 = 0
    }
    if (keyDown('w')||keyDown(38)) {
      player.setVelocity(0, -15)
    }
    if (keyDown('s')||keyDown(40)) {
      player.setVelocity(0, 15)
    }
    if (keyDown('a')||keyDown(37)) {
      player.setVelocity(-15, 0)
      player.scale = 0.6
      player.addImage(playerimg2)
    }
    if (keyDown('d')||keyDown(39)) {
      player.setVelocity(15, 0)
      player.scale = 0.6
      player.addImage(playerimg1)
    }







    if (room === 1) {

      if(ghost===room){
        textSize(30)
      fill('white')
      text('RUN ghost is here RUN',player.x-150,player.y-50)
          }

      blacklock.visible = true
      whiteKey.visible = true
      shell1.visible = true
      any1.visible = true
      exit1.visible = true
      camera.x = 676
      if (player.isTouching(shell1)) {
        abc3 = 0
        abc3 = abc3 += 1
        shell1.destroy()
        Cshell += 1
        abc4 = 0
      }
      if (abc3 === 1) {

        abc4 = abc4 += 1
      }
      if (abc4 < 30) {
        textAlign('center')
        fill('green')
        textSize(25)
        text('finded a shell', 200, 170)
        abc = 0
      }


      if (player.isTouching(blacklock)) {
        textAlign('center')
        fill('green')
        textSize(25)
        text('needed black key', blacklock.x, blacklock.y - 50)



        if (CblackKey === true) {
          if (mousePressedOver(blacklock)) {
            abc5 = 1
            blacklock.destroy()
            abc6 = 0
          }
        }
      }

      if (abc5 === 1) {
        abc6 = abc6 + 1
        CmainDoor = true

      }

      if (abc6 < 50) {
        fill('green')
        textSize(25)
        text('you find mainDoor key', blacklock.x, blacklock.y - 50)

      }

      if (player.isTouching(any1)) {
        fill('green')
        textSize(25)
        text('need stone to open', any1.x - 100, any1.y - 70)
        if (mousePressedOver(any1)) {
          if (Cstone === true) {
            abc7 = 1
            abc8 = 0
            any1.remove()
            whiteKey.remove()
            CwhiteKey = true
          }
        }

      }

      if (abc7 === 1) {
        abc8 = abc8 + 1
      }
      if (abc8 < 50) {
        textAlign('center')
        fill('green')
        textSize(25)
        text('you find brown key', any1.x - 100, any1.y - 70)
      }

      if (player.isTouching(exit1)) {
        room = 2
        player.x = width * 1.2
      }


    }

    if (room === 2) {
      camera.x = 676 + 676 + 676
      background(bg2img)
      if(ghost===room){
        textSize(30)
      fill('white')
      text('RUN ghost is here RUN',player.x-150,player.y-50)
          }

      if (player.isTouching(shell2)) {
        abc9 = 0
        abc9 = abc9 += 1
        shell2.destroy()
        Cshell += 1
        abc10 = 0
      }
      if (abc9 === 1) {

        abc10 = abc10 += 1
      }
      if (abc10 < 30) {
        textAlign('center')
        fill('green')
        textSize(25)
        text('finded a shell', shell2.x - 10, shell2.y - 90)
        abc = 0
      }

      if (player.isTouching(brown)) {
        textAlign('center')
        fill('green')
        textSize(25)
        text('needed brown key', brown.x - 20, brown.y - 90)



        if (CwhiteKey === true) {
          if (mousePressedOver(brown)) {
            abc12 = 1
            Cshell = Cshell + 1
            brown.destroy()
            abc13 = 0
          }
        }
      }

      if (abc12 === 1) {
        abc13 = abc13 + 1

      }

      if (abc13 < 50) {
        fill('green')
        textSize(25)
        text('you find a shell', brown.x - 20, brown.y - 90)

      }

      if (player.isTouching(exit2)) {
        room = 1
        player.x = width / 2
      }


      if (player.isTouching(exit3)) {
        room = 3
        player.x = width * 2.2
      }




    }

    if (room === 3) {
      camera.x = 676 + 676 + 676 + 676 + 676
      background(bg3img)
      if(ghost===room){
        textSize(30)
      fill('white')
      text('RUN ghost is here RUN',player.x-150,player.y-50)
          }
      if (player.isTouching(stone1)) {
        abc14 = 0
        abc14 = abc14 += 1
        stone1.destroy()
        Cstone = true
        abc15 = 0
      }
      if (abc14 === 1) {

        abc15 = abc15 += 1
      }
      if (abc15 < 30) {
        textAlign('center')
        fill('green')
        textSize(25)
        text('finded a stone', stone1.x - 20, stone1.y - 70)
        abc = 0

      }

      if (player.isTouching(exit4)) {
        room = 2
        player.x = width * 1.7
      }

      if (player.isTouching(sb)) {
        fill('green')
        textSize(25)
        text('need 3 shell to open', sb.x - 100, sb.y - 140)
        if (mousePressedOver(sb)) {
          if (Cshell === 3) {
            abc16 = 1
            abc17 = 0
            sb.remove()

            CblackKey = true
          }
        }

      }

      if (abc16 === 1) {
        abc17 = abc17 + 1
      }
      if (abc17 < 50) {
        textAlign('center')
        fill('green')
        textSize(25)
        text('you find black key', sb.x - 100, sb.y - 70)
      }

      if (player.isTouching(exitdoor)) {
        fill('green')
        textSize(25)
        text('you need mainDoor key', exitdoor.x - 200, exitdoor.y - 140)
        if (mousePressedOver(exitdoor)) {
          if (CmainDoor === true) {
            gameState = 'end2'

          }
        }

      }








    }


  }


  if (gameState === 'end1') {
    background(bg4img)
    textSize(50)
    fill('white')
    text('ghost reaches you reload to play again',player.x-50,player.y-100)
    player.setVelocity=(0,0)
    blacklock.visible = false
    whiteKey.visible = false
    shell1.visible = false
    any1.visible = false
    exit1.visible = false
    blacklock.visible = false
    any1.visible = false
    exit4.visible = false
    exit2.visible = false
    exit3.visible = false
    brown.visible = false
    shell2.visible = false
    stone1.visible = false
    sb.visible = false
    player.visible = false

  }

  if (gameState === 'end2') {
    background('green')
    textSize(250)
    fill('white')
    text('you win',width*2.2,350)
  
    blacklock.visible = false
    whiteKey.visible = false
    shell1.visible = false
    any1.visible = false
    exit1.visible = false
    blacklock.visible = false
    any1.visible = false
    exit4.visible = false
    exit2.visible = false
    exit3.visible = false
    brown.visible = false
    shell2.visible = false
    stone1.visible = false
    sb.visible = false
    player.visible = false
  }


  drawSprites()
}

