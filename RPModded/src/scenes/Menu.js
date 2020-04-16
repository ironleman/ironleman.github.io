class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        //this.load.audio('sfx_explosion', './assets/explosion38.wav');
        //this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('gameover', './assets/spermawww.mp3');
        this.load.audio('shot', './assets/spermshot.mp3');
        this.load.audio('point', './assets/spermpoint.mp3');
        this.load.audio('music', './assets/spermsong.mp3');
        this.load.image('menu', './assets/menuscreen.png');
    }

    create() {
        //menu display
        let menuConfig = {
            fontFamily: 'Franklin Gothic Medium',
            fontSize: '28px',
            //backgroundColor: '#cc1d1d',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.background = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0 ,0);
        //display menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        //this.add.text(centerX, centerY - textSpacer, 'The Game of Life', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 140, 'Use <- -> arrows to move & (F) to shoot', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#cc1d1d';
        //menuConfig.color = '#FFFFFF';
        this.add.text(centerX, centerY + 140 + textSpacer, 'Press <- for Easy or -> for Hard', menuConfig).setOrigin(0.5);


        //launch the next scene
        //this.scene.start("playScene");

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }

            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }

            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }
}
