class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorialScene");
    }

    preload() {


    }
    create() {

        // background
        this.add.image(0, 0, 'tutorialBG');

        // pufferfish speed and sprite setup
        this.pufferFishVelocity = 200;

        this.pufferFish = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'pufferFish').setScale(0.25);

        this.key1 = this.add.sprite(20, 20, 'key1');
        this.key2 = this.add.sprite(150, 20, 'key2');
        this.key3 = this.add.sprite(280, 20, 'key3');
        // camera setup
        this.cameras.main.startFollow(this.pufferFish, true, 0.1, 0.1);
        this.cameras.main.setZoom(0.5);

        // control configs
        cursors = this.input.keyboard.createCursorKeys();
        this.keyboard1 = this.input.keyboard.addKey("ONE");
        this.keyboard2 = this.input.keyboard.addKey("TWO");
        this.keyboard3 = this.input.keyboard.addKey("THREE");

    } 

    update() {
        this.keyboard1.on('down', () => {            
            this.key1.tint = 0xFACADE;
            this.key2.clearTint();
            this.key3.clearTint();
            this.pufferFish.setSize(500,100);
         });
         this.keyboard2.on('down', () => {            
            this.key2.tint = 0xFACADE;
            this.key1.clearTint();
            this.key3.clearTint();
            this.pufferFish.setSize(100, 500);
         });
         this.keyboard3.on('down', () => {            
            this.key3.tint = 0xFACADE;
            this.key2.clearTint();
            this.key1.clearTint();
            this.pufferFish.setSize(700,700);
         });
        // controls
        if(cursors.up.isDown) {
            this.pufferFish.body.setVelocityY(-this.pufferFishVelocity);
        } else if (cursors.down.isDown) {
            this.pufferFish.body.setVelocityY(this.pufferFishVelocity);
        } else {
            this.pufferFish.body.setVelocityY(0);
        }
        if(cursors.left.isDown) {
            this.pufferFish.body.setVelocityX(-this.pufferFishVelocity);
            this.pufferFish.setFlipX(true);
        } else if (cursors.right.isDown) {
            this.pufferFish.body.setVelocityX(this.pufferFishVelocity);
            this.pufferFish.resetFlip();
        } else {
            this.pufferFish.body.setVelocityX(0);
        }
    }
}
