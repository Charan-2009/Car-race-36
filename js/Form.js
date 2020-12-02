class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car race multiplayer");
        title.position(200,200);
        var input = createInput("name");
        var button = createButton("play");
        var greeting = createElement("h3");
        input.position(130,160);
        button.position(250,200);
        
        button.mousePressed(function(){
            button.hide();
            input.hide();
            var name = input.value()
            playCount ++
            player.update(name);
            player.updateCount(playCount);
            greeting.html("Hello" + name);
            greeting.position(130,160);

        }
        )

        
    }   


}