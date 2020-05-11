class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        // set load path
        this.load.path = "assets/";
        this.load.image('pufferFish', 'pufferFish.png');
        this.load.image('tutorialBG', 'tutorialArtTemp.png');
        this.load.image('key1', 'key1UI.png');
        this.load.image('key2', 'key2UI.png');
        this.load.image('key3', 'key3UI.png');


    }
    create() {
        // ...and pass to the next Scene

        this.scene.start("menuScene");

    } 
}
