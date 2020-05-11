class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        // set load path
        this.load.path = "assets/";

    }
    create() {
        // ...and pass to the next Scene

        this.scene.start("menuScene");

    } 
}
