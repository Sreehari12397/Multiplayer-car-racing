var myDatabase;
var db_info;
var gamestate = 0;
var playercount;
var gamer;
var player1;
var form1;
var all_players;
var cars;
var car1;
var car2;
var car3;
var car4;
var car1_Img;
var car2_Img;
var car3_Img;
var car4_Img;
var Track;
var ground;
var no_of_cars = 0;

function preload()
{
    car1_Img = loadImage("car1.png");
    car2_Img = loadImage("car2.png");
    car3_Img = loadImage("car3.png");
    car4_Img = loadImage("car4.png");
    Track = loadImage("track.jpg");

}

function setup()
{
    myDatabase = firebase.database();
    createCanvas(displayWidth - 20,displayHeight - 30);


    gamer = new Game();
    gamer.checkState();
    gamer.start();
}

function draw()
{
    if(playercount == 4)
    {
        gamer.updateState(1);
    }

    if(gamestate == 1)
    {
      clear();
      gamer.play();
    }

    console.log(no_of_cars);

    if(gamestate == 2 && no_of_cars == 4)
    {
        gamer.end();
    }
}