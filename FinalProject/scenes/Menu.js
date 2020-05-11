class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); 
    }




    preload(){


    }
    create() {
        let cursors= this.input.keyboard.createCursorKeys();
        this.space = this.input.keyboard.addKey("ENTER");

        
        this.up = this.input.keyboard.addKey("UP");
        this.down = this.input.keyboard.addKey("DOWN");
    }

    update(){
        
        // Checks to see if the player is currently over the level select button or the play button,
        // and upon hitting enter takes them to the correct scene
        if(this.menuSelect == 0){ // menuSelect = 0 : play button
            this.space.on('down', () => {            
            //  this.menuSound.play();
            if (tutorialComplete == false) { //if the tutorial is not complete
                this.scene.start("tutorialScene"); // play the tutorial scene
            } else { // else
                this.scene.start("level1Scene"); // start level 1
            }
         });
        } else if (this.menuSelect == 1) {
            this.space.on('down', () => {
            this.scene.start("levelSelect");
            // this.menuSound.play();
            
            });
        }

        // Simple function to have the menu be "loopable", where the player can hit up or down when they 
        // are at the play button and will loop them down to the level select button,
        // and vice versa, if they are at the level select button, hitting up or down will take them
        // to the play button
        if (this.menuSelect == 0) {
            this.up.on('down', () => {
                this.menuSelect = 1;
                this.buttonSmall.anims.stop('playButtonBlink');
                // this.menuSound.play();

            });
            this.down.on('down', () => {
                this.menuSelect = 1;
                this.buttonSmall.anims.stop('playButtonBlink');
                // this.menuSound.play();
        
            });
        }

        if (this.menuSelect == 1) {
            this.up.on('down', () => {
                this.menuSelect = 0;
                this.buttonSmall.anims.stop('levelSelButtonBlink');
                // this.menuSound.play();

                });
            this.down.on('down', () => {
                this.menuSelect = 0;
                this.buttonSmall.anims.stop('levelSelButtonBlink');   
                // this.menuSound.play();

            });
        }

        // animations for blinking buttons to indicate where the player's selector is
        if (this.menuSelect == 0) {
            this.buttonSmall.anims.play('playButtonBlink', true);
        }
        else {
            this.buttonLarge.anims.play('levelSelButtonBlink', true);
        }


        
    }
}
