class Game
{
    constructor()
    {
        
    }

    checkState()
    {
        var db_state_ref = myDatabase.ref('GameState');
        db_state_ref.on("value",
        function(data)
        {
           gamestate = data.val(); 
        }
        )
    }

    updateState(state)
    {
      myDatabase.ref('/').update(
          {
              GameState:state
          }
      )
    }

    start()
    {
        if(gamestate == 0)
        {
            player1 = new Player()
            player1.check_count();
            form1 = new Form();
            form1.display();
        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        car1.addImage(car1_Img);
        car2.addImage(car2_Img);
        car3.addImage(car3_Img);
        car4.addImage(car4_Img);
        cars = [car1,car2,car3,car4];
    }

    play()
    {
        form1.hide();
        Player.fetch_playerinfo();
        player1.fetch_crossLine();
        if(all_players != undefined)
        {
           background(rgb(198,135,103));
           image(Track,0,-displayHeight * 4, displayWidth , displayHeight * 5);
           var Index = 0;
           var x_pos = 135;
           var y_pos;
           for(var i in all_players)//  for(var i = 0 ; i <= all_players.length ; i = i + 1)
           {
              Index = Index + 1;
              x_pos = x_pos + 170;
              y_pos = displayHeight -(all_players[i].Distance + 20)
              cars[Index - 1].x = x_pos;
              cars[Index - 1].y = y_pos;

              if(Index == player1.index)
              {
                  fill("red");
                  ellipse(x_pos,y_pos,60,60)
                  cars[Index - 1].shapeColor = "red";
                  camera.position.x = displayWidth/2;
                  camera.position.y = cars[Index - 1].y;
              }
           } 
        }

        if(keyIsDown(UP_ARROW) && player1.index != null)
        {
          player1.distance = player1.distance + 10;
          player1.update_name();
        }
        if(player1.distance > 400)
        {
            gamestate = 2;
            player1.rank = player1.rank + 1;
            player1.fetch_crossLine();
            no_of_cars = no_of_cars + 1;
            //console.log(player1.rank);
            Player.update_crossLine(no_of_cars);
        }
        drawSprites();
    }

    end()
    {
        console.log("Game over");
        console.log(player1.rank);
    }
}