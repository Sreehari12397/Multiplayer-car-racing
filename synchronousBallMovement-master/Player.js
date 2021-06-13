class Player
{
   constructor()
   {
     this.index = null;
     this.name = null;
     this.distance = 0;
     this.rank = 0;
   }

   fetch_crossLine()
   {
       var db_crossLine_ref = myDatabase.ref('crossLine')
       db_crossLine_ref.on("value",
       (no_cars) =>
       {
           //this.rank = no_cars.val();
           no_of_cars = no_cars.val();
       })
   }

   static update_crossLine(rank)
   {
       myDatabase.ref('/').update(
           {
               crossLine:rank
           }
       )

   }

   check_count() 
   {
       var db_count_ref = myDatabase.ref('PlayerCount')
       db_count_ref.on("value",
       (count) =>
       {
           playercount = count.val();
       })
   }

   update_count(count)
   {
      myDatabase.ref('/').update(
          {
              PlayerCount:count
          }
      )
   }

   update_name()
   {
       var playerIndex = "Players/Player" + this.index;
       myDatabase.ref(playerIndex).set(
           {
               Name:this.name,
               Distance:this.distance
           }
       )
   }

   static fetch_playerinfo()
   {
       var db_playerinfo_ref = myDatabase.ref('Players');
       db_playerinfo_ref.on("value",
         (data) =>
         {
             all_players = data.val();
         }
       )
   }
}