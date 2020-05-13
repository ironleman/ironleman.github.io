class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorialScene");
    }

    preload() {


    }
    create() {

        // background
        this.add.image(0, 0, 'tutorialBG').setScale(4);

        // pufferfish speed and sprite setup
        this.pufferFishVelocity = 200;

        this.pufferFish = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'pufferFish').setScale(0.5);

        this.key1 = this.add.sprite(900, 80, 'key1').setScale(1);
        this.key2 = this.add.sprite(1200, 80, 'key2').setScale(1);
        this.key3 = this.add.sprite(1500, 80, 'key3').setScale(1);

        // camera setup and world bounds setup
        //https://phaser.io/examples/v3/view/camera/follow-offset
        //set camera and world bounds to double the size of the background image
        this.cameras.main.setBounds(0, 0, 1920*2, 1080*2);
        this.physics.world.setBounds(0, 0, 1920*2, 1080*2);
        //set up pufferfish colliision with world bounds 
        this.pufferFish.setCollideWorldBounds(true);
        //set zoom 
        this.cameras.main.setZoom(0.5);
        //have camera follow pufferfish and offset it
        this.cameras.main.startFollow(this.pufferFish, true, 0.1, 0.1);
        this.cameras.main.followOffset.set(-300, 0);
        
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
