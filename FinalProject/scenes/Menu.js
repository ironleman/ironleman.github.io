class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); 
    }




    preload(){


    }
    create() {
        this.add.image(centerX, centerY, "corals");
        this.puffer= this.add.sprite(405, 0, "pufferFish").setOrigin(0,0);
        let playbutton= this.add.image(centerX, 445, "play").setInteractive();
        let selectbutton= this.add.image(centerX, 535, "select").setInteractive();
        this.add.text(100, 240, "Pufferfish Misadventures", {fontFamily: "Cursive", fontSize: "92px", color: "#FF7F50", stroke: "#1565c0", strokeThickness:20});

        playbutton.on('pointerover',function(pointer){
            playbutton.setAlpha(0.3);
        })
        playbutton.on('pointerout',function(pointer){
            playbutton.setAlpha(1);
        })
        
        selectbutton.on('pointerover',function(pointer){
            selectbutton.setAlpha(0.3);
        })
        selectbutton.on('pointerout',function(pointer){
            selectbutton.setAlpha(1);
        })

        
    }

    update(){
        
        
    }
}

