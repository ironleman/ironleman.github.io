class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); 
    }

    preload(){


    }
    create() {
        //add the coral reef background image
        this.add.image(centerX, centerY, "corals");
        //add the pufferfish sprite at top of screen
        this.puffer= this.add.sprite(405, 0, "pufferFish").setOrigin(0,0);
        //add play and select buttons and make them interactive with mouse controls
        let playbutton= this.add.image(centerX, 430, "play").setInteractive();
        let selectbutton= this.add.image(centerX, 536, "select").setInteractive();
        //Add main Title text above selection buttons
        this.add.text(100, 240, "Pufferfish Misadventures", {fontFamily: "Cursive", fontSize: "92px", color: "#FF7F50", stroke: "#1565c0", strokeThickness:20});
        //fixed scope issue with 'this'
        const self= this;
        //switch opacity alpha of play button when mouse cursor is over and away from it
        playbutton.on('pointerover',function(pointer){
            playbutton.setAlpha(0.3);
        })
        playbutton.on('pointerout',function(pointer){
            playbutton.setAlpha(1);
        })
        //set opacity alpha of level select button when mouse cursor is over and away from it
        selectbutton.on('pointerover',function(pointer){
            selectbutton.setAlpha(0.3);
        })
        selectbutton.on('pointerout',function(pointer){
            selectbutton.setAlpha(1);
        })
        //created event where mouse clicked on play button transitions to the next scene
        playbutton.on('pointerdown',function(pointer){
            self.scene.start("tutorialScene");
        })
        //created event where mouse clicked on level select button transitions to the next scene
        selectbutton.on('pointerdown',function(pointer){
            self.scene.start("levelSelectScene");
        })

       
        
    }

    update(){
        
        
    }
}
