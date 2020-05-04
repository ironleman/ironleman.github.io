class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        // set load path
        this.load.path = "assets/";
        // take care of all of our asset loading now
        this.load.atlas('platformer_atlas', 'kenny_sheet.png', 'kenny_sheet.json');
        this.load.audio("music", "surfaces.WAV");
        this.load.audio('jump', 'neeoww.mp3');
        this.load.audio('ow', 'ow.mp3');
        this.load.audio('menu', 'menuselect.wav');
        this.load.image('arrowKey', 'arrowKey.png');
        this.load.image('talltrees', 'talltrees.png');
        this.load.image('groundScroll', 'ground.png');
        this.load.atlasXML('shooter_atlas', 'shooter_sheet.png', 'shooter_sheet.xml');
        this.load.image('cloud', 'cloud.png');
        this.load.image('hydrant', 'fhydrant.png');
        this.load.image('rock', 'rock.png');
        this.load.spritesheet('gameover', 'finalgover.png', {
            frameWidth: 840,
            frameHeight: 448,
            startFrame: 0,
            endFrame: 1
        });
        this.load.spritesheet('grass', 'grass.png',{
            frameWidth: 448,
            frameHeight: 224,
            startFrame: 0,
            endFrame: 1
        });
        this.load.spritesheet('lunarun', 'luna1.png', {
            frameWidth: 200,
            frameHeight: 200,
            startFrame: 0,
            endFrame: 4
        });
        this.load.spritesheet('clairerun', 'claire.png', {
            frameWidth: 200,
            frameHeight: 200,
            startFrame: 0,
            endFrame: 2
        });
    }

    create() {
        // ...and pass to the next Scene

        this.scene.start("menuScene");
    }
}
