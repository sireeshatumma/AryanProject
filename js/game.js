class Game{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
    
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          background(bgImg)
          form = new Form()
          form.display();

          // createSprites for players
          basket = createSprite(displayWidth/2,160,10,10)
          basket.addImage(basketImg);
          basket.scale = 0.7;
          
          // addImages
          // add all players to array
        }
    }
    play(){
            form.hide();
          
            
            Player.getPlayerInfo();
            // player.getCarsAtEnd();
            if(allPlayers !== undefined){
              background(bgImg)
            drawSprites()
            textSize(30);
            fill("green")
            text("Score: "+score,width/2+200,50);
            text(mouseX+" , "+mouseY,50,50)
            chain.display();
            ball.display();           
            ground.display();
            // obstacle.display();
            // roof.display();
              var index = 0;        
              var x = 175 ;
              var y;
        
              for(var plr in allPlayers){
                index = index + 1 ;        
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
               
              }
            
               
            }
        
            timer.display();
            if(timer.timeout==="out"){
              text("timer out", 100,200);
              gameState = 2;
            }
        // if(ball.body.position.y>750 && ball.body.position.y<780){
          if(ball.body.position.y>350 && ball.body.position.y<380){
          console.log("before "+count);
                if(count===1){
                  score++;
                  count=0;
                }
                console.log(count);
        }
            if(keyIsDown(UP_ARROW) && player.index !== null){
              if (gs!=="launched"){
                // console.log("before "+count);
                // if(count===1){
                //   score++;
                //   count=0;
                // }
                // console.log(count);
                chain.fly();
                Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-140}) 
                gs="launched";
                
               // detectCollision(ball,obstacle);
              }             
             
              player.update();

            }
            // console.log("player.distance"+player.distance)
            if(player.distance > 3770){
              gameState = 2;
              player.rank+=1;
              Player.updateCarsAtEnd(player.rank)
              console.log("player.rank"+player.rank)
            }
           
          
           
          }
        
          end(){
            console.log("Game Ended");
            console.log(player.rank)
          }
        
    
}
    
