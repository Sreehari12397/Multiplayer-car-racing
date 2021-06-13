class Form
{
    constructor()
    {
      this.title = createElement('h2')
      this.enter_name = createInput("Enter Name");
      this.submit_info = createButton('SUBMIT');
      this.greeting = createElement('h2');
      this.reset = createButton("Start Over");
    }

    display()
    {
        this.title.position(300,40);
        this.title.html("Multiplayer Car Racing");

        this.enter_name.position(300,100);

        this.submit_info.position(300,200);

        this.reset.position(550,50);

        this.submit_info.mousePressed(
            () => 
            {
                this.enter_name.hide();
                this.submit_info.hide();
                player1.name = this.enter_name.value();
                playercount = playercount + 1;
                player1.index = playercount;
                player1.update_count(playercount)
                player1.update_name();
                this.greeting.html("WELCOME " + player1.name + " !!");
                this.greeting.position(300,300);
            }
        )

        this.reset.mousePressed(
            () =>
            {
                player1.update_count(0);
                gamer.updateState(0);
                Player.update_crossLine(0);
            }
        )
    }

    hide()
    {
        this.enter_name.hide();
        this.submit_info.hide();
        this.greeting.hide();
        this.title.hide();
    }
}