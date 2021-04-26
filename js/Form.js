class Form{
    constructor(){
        this.input = createInput("Name");
        this.title = createElement('h2');
        this.button = createButton("Next");
        this.greeting = createElement('h3');
    }

    hide_Elements(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        
    }
    display(){
        
        this.title.html("Drag Racing"); 
        this.title.position(130,0);
        
        this.input.position(130,160);

        this.button.position(250,200);
        
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            //error here
            player.name = this.input.value();
            myPlayerCount=myPlayerCount+1;

            //here
            player.index = myPlayerCount;
            console.log(myPlayerCount +" "+player.name)
            player.update();
            player.updatecount(myPlayerCount);
          
            //error here
            this.greeting.html("Hello "+player.name);
            this.greeting.position(250,250);
        })
    }
}