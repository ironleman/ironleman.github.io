class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        // set load path
        this.load.path = "assets/";
        this.load.image('pufferFish', 'pufferFish.png');
        this.load.image('tutorialBG', 'tutorialArtTemp.png');

    }
    create() {
        // ...and pass to the next Scene

        this.scene.start("menuScene");

    } 
}
