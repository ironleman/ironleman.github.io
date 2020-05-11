class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorialScene");
    }

    preload() {


    }
    create() {

        // background
        this.add.image(0, 0, 'tutorialBG').setOrigin(0);

        // pufferfish speed and sprite setup
        this.pufferFishVelocity = 200;

        this.pufferFish = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'pufferFish').setScale(0.25);

        // camera setup
        this.cameras.main.startFollow(this.pufferFish, true, 0.1, 0.1);
        this.cameras.main.setZoom(0.5);

        // control configs
        cursors = this.input.keyboard.createCursorKeys();

    } 

    update() {

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
