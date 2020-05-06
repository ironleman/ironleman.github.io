const rY = () => Math.floor(Math.random() * game.config.height/3) + 300;
const rX = () => Math.floor(Math.random() * game.config.width) + game.config.width;
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        // variables and settings
        this.ACCELERATION = 500;
        this.JUMP_VELOCITY = -1000;
        this.physics.world.gravity.y = 3000;
        this.cloudSpeed = -130;
        this.obstacleSpeed = -200;
        // set bg color
        this.cameras.main.setBackgroundColor("#227B96");

        score = 0;

       
        // add some physics clouds
        this.cloud01 = this.physics.add.sprite(600, 100, 'cloud', 'cloud_1').setScale(0.5);
        this.cloud01.body.setAllowGravity(false).setVelocityX(this.cloudSpeed);
        this.cloud02 = this.physics.add.sprite(200, 200, 'cloud', 'cloud_2').setScale(0.5);
        this.cloud02.body.setAllowGravity(false).setVelocityX(this.cloudSpeed);

        


        // make ground tiles group
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'platformer_atlas', 'block').setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
            
        }        


        // set up my alien son 👽
        this.alien = this.physics.add.sprite(game.config.width/2 - 200, game.config.height/2, 'clairerun', 'front').setScale(0.25);
        
        //this.alien.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);

        this.luna = this.physics.add.sprite(game.config.width/2 - 100, game.config.height/2, 'lunarun', 'front').setScale(0.25);
        this.luna.setSize(150, 150);
        this.luna.setOffset(50, 30);
        //this.luna.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);
        this.obstacle = this.physics.add.sprite(game.config.width, game.config.height - 60, 'hydrant').setScale(0.25);
        this.obstacle.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);

        this.obstacle1 = this.physics.add.sprite(game.config.width + 300, game.config.height - 60, 'rock').setScale(0.25);
        this.obstacle1.body.setAllowGravity(false). setVelocityX(this.obstacleSpeed);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
            GRASS INITIALIZATION
        */
        this.grass = this.physics.add.sprite(0, game.config.height - 70, 'grass', 'front').setOrigin(0).setScale(0.5);
        this.grass.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass1 = this.physics.add.sprite(224, game.config.height - 70, 'grass', 'front').setOrigin(0).setScale(0.5);
        this.grass1.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass2 = this.physics.add.sprite(448, game.config.height - 70, 'grass', 'front').setOrigin(0).setScale(0.5);
        this.grass2.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass3 = this.physics.add.sprite(672, game.config.height - 70, 'grass', 'front').setOrigin(0).setScale(0.5);       
        this.grass3.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass4 = this.physics.add.sprite(896, game.config.height - 70, 'grass', 'front').setOrigin(0).setScale(0.5);
        this.grass4.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass5 = this.physics.add.sprite(1120, game.config.height - 70, 'grass', 'front').setOrigin(0).setScale(0.5);
        this.grass5.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
            BONES
        */
        this.bone = this.physics.add.sprite(rX(), rY(), 'bone').setScale(0.07);
        this.bone.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone1 = this.physics.add.sprite(rX(), rY(), 'bone').setScale(0.07);
        this.bone1.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone2 = this.physics.add.sprite(rX(), rY(), 'bone').setScale(0.07);
        this.bone2.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone3 = this.physics.add.sprite(rX(), rY(), 'bone').setScale(0.07);
        this.bone3.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone4 = this.physics.add.sprite(rX(), rY(), 'bone').setScale(0.07);
        this.bone4.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone5 = this.physics.add.sprite(rX(), rY(), 'bone').setScale(0.07);
        this.bone5.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);

    

        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();

        // add physics collider
        this.physics.add.collider(this.alien, this.ground);
        this.physics.add.collider(this.luna, this.ground);
 
        //a timer configuration for tracking length of in-game survival; every second and calls back on increase time
        this.delayText= this.add.text(game.config.width/5, game.config.height/5, {fill: '#000000', font: ' 32px Arial Black'});
        this.boneText = this.add.text(game.config.width - 200, game.config.height/5,  {fill: '#000000', font: ' 32px Arial Black'});

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
            ANIMATIONS
        */

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('lunarun', { start: 0, end: 4, first: 0}),
            frameRate: 10
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('lunarun', { start: 0, end: 4, first: 0}),
            frameRate: 0.5
        });

        this.anims.create({
            key: 'crun',
            frames: this.anims.generateFrameNumbers('clairerun', { start: 0, end: 2, first: 0}),
            frameRate: 14
        });

        this.anims.create({
            key: 'grassmove',
            frames: this.anims.generateFrameNumbers('grass', {start: 0, end: 1, first: 0}),
            frameRate: 2
        });

    }

    update() {

        this.boneText.setText('Treats Collected: ' + boneScore);
        localStorage.setItem("boneScore", boneScore);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
            SCORE MECHANIC
            SCORE IS INCREMENTED EVERY FRAME AS WELL AS WHEN YOU PICK UP A TREAT (FOUND IN BONE PHYSICS SECTION)
        */

        this.delayText.setText('Score: ' + score);
        score += 1;

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /* 
            BONE PHYSICS 
            THIS CODE RESETS THE POSITION OF A BONE IF IT IS COLLECTED, AS WELL AS INCREMENTING THE SCORE, AND PLAYING A SOUND
        */

        if (this.physics.overlap(this.luna, this.bone)) {
            this.bone.x = rX();
            this.bone.y = rY();
            this.sound.play('pickup');
            score += 100;
            boneScore++;
        }  else if (this.bone.x <= 0) {
            this.bone.x = rX();
            this.bone.y = rY();
        }

        if (this.physics.overlap(this.luna, this.bone1)) {
           this.bone1.x = rX();
           this.bone1.y = rY();
           this.sound.play('pickup');
            score += 100;
            boneScore++;
        } else if (this.bone1.x <= 0) {
            this.bone1.x = rX();
            this.bone1.y = rY();
        }

        if (this.physics.overlap(this.luna, this.bone2)) {
            this.bone2.x = rX();
            this.bone2.y = rY();
            this.sound.play('pickup');            
            score += 100;
            boneScore++;
        }  else if (this.bone2.x <= 0) {
            this.bone2.x = rX();
            this.bone2.y = rY();
        }
        if (this.physics.overlap(this.luna, this.bone3)) {
           this.bone3.x = rX();
           this.bone3.y = rY();
           this.sound.play('pickup');
            score += 100;
            boneScore++;
        } else if (this.bone3.x <= 0) {
            this.bone3.x = rX();
            this.bone3.y = rY();
        }

        if (this.physics.overlap(this.luna, this.bone4)) {
            this.bone4.x = rX();
            this.bone4.y = rY();
            this.sound.play('pickup');
            score += 100;
            boneScore++;
        }  else if (this.bone4.x <= 0) {
            this.bone4.x = rX();
            this.bone4.y = rY();
        }
        if (this.physics.overlap(this.luna, this.bone5)) {
           this.bone5.x = rX();
           this.bone5.y = rY();
           this.sound.play('pickup');
            score += 100;
            boneScore++;
        } else if (this.bone5.x <= 0) {
            this.bone5.x = rX();
            this.bone5.y = rY();
        }
        this.bone.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone2.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone3.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone4.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone5.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.bone1.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);

        if (this.physics.overlap(this.bone, this.obstacle) || this.physics.overlap(this.bone, this.obstacle1)) {
            this.bone.x += 50;
        }
        if (this.physics.overlap(this.bone1, this.obstacle) || this.physics.overlap(this.bone1, this.obstacle1)) {
            this.bone1.x += 50;
        }
        if (this.physics.overlap(this.bone2, this.obstacle) || this.physics.overlap(this.bone2, this.obstacle1)) {
            this.bone2.x += 50;
        }
        if (this.physics.overlap(this.bone3, this.obstacle) || this.physics.overlap(this.bone3, this.obstacle1)) {
            this.bone3.x += 50;
        }
        if (this.physics.overlap(this.bone4, this.obstacle) || this.physics.overlap(this.bone4, this.obstacle1)) {
            this.bone4.x += 50;
        }
        if (this.physics.overlap(this.bone5, this.obstacle) || this.physics.overlap(this.bone5, this.obstacle1)) {
            this.bone5.x += 50;
        }

        if (this.physics.overlap(this.bone, this.bone1) || this.physics.overlap(this.bone, this.bone2) || this.physics.overlap(this.bone, this.bone3) || this.physics.overlap(this.bone, this.bone4) ||  this.physics.overlap(this.bone, this.bone5)) {
            this.bone.x += 50;
        }
        if (this.physics.overlap(this.bone1, this.bone2) || this.physics.overlap(this.bone1, this.bone3) || this.physics.overlap(this.bone1, this.bone4) || this.physics.overlap(this.bone1, this.bone5)) {
            this.bone1.x += 50;
        }
        if (this.physics.overlap(this.bone2, this.bone3) || this.physics.overlap(this.bone2, this.bone4) || this.physics.overlap(this.bone2, this.bone5)) {
            this.bone2.x += 50;
        }
        if (this.physics.overlap(this.bone3, this.bone4) || this.physics.overlap(this.bone3, this.bone5)) {
            this.bone3.x += 50;
        }
        if (this.physics.overlap(this.bone4, this.bone5)) {
            this.bone4.x += 50;
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /* 
            GRASS PHYSICS
            THIS CODE CREATES ANIMATIONS FOR THE GRASS, AS WELL AS WRAPS IT AROUND THE PLAY SCREEN TO MAINTAIN A FLOW OF GRASS THAT APPEARS ENDLESS
        */

        // play anims
        this.grass.anims.play('grassmove', true);
        this.grass1.anims.play('grassmove', true);
        this.grass2.anims.play('grassmove', true);
        this.grass3.anims.play('grassmove', true);
        this.grass4.anims.play('grassmove', true);
        this.grass5.anims.play('grassmove', true);

        // grass movement
        this.physics.world.wrap(this.grass, this.grass.width/2);
        this.physics.world.wrap(this.grass1, this.grass1.width/2);
        this.physics.world.wrap(this.grass2, this.grass2.width/2);
        this.physics.world.wrap(this.grass3, this.grass3.width/2);
        this.physics.world.wrap(this.grass4, this.grass4.width/2);
        this.physics.world.wrap(this.grass5, this.grass5.width/2);

        // update speed
        this.grass5.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass4.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass3.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass2.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass1.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.grass.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
            CLOUD PHYSICS
            THIS CODE WRAPS THE CLOUDS AROUND THE PLAY SCREEN, AND INCREMENTS SPEED
        */

        // wrap physics object(s) .wrap(gameObject, padding)
        this.physics.world.wrap(this.cloud01, this.cloud01.width/2);
        this.physics.world.wrap(this.cloud02, this.cloud02.width/2);        

        this.cloudSpeed *= 1.0001; 
        this.cloud01.body.setAllowGravity(false).setVelocityX(this.cloudSpeed);
        this.cloud02.body.setAllowGravity(false).setVelocityX(this.cloudSpeed);


        this.alien.anims.play('crun',true);
        this.luna.anims.play('run', true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
            OBSTACLE MECHANIC
        */
        // movement / resetting
        this.num = Math.floor(Math.random() * Math.floor(20));

        
        if (this.obstacle.x <= 0) {
            if(this.num == 10){
                this.obstacle.x = game.config.width;
            }
        }

        if (this.obstacle1.x <= 0) {
            if(this.num == 10){
                this.obstacle1.x = game.config.width;
            }
        }

        if((this.obstacle1.x >= this.obstacle.x && this.obstacle1.x < this.obstacle.x + 200) || (this.obstacle1.x <= this.obstacle.x && this.obstacle1.x > this.obstacle.x - 200)) {
            this.obstacle1.x = rX();
        }

        this.obstacleSpeed *= 1.001;
        this.obstacle.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        this.obstacle1.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);



        if(this.physics.collide(this.luna, this.obstacle)){
            this.scene.start('gameOverScene');
            this.sound.play('ow');
        }
        if(this.physics.collide(this.luna, this.obstacle1)){
            this.scene.start('gameOverScene');
            this.sound.play('ow');
        }


        // jump
        if(!this.alien.body.touching.down) {
            this.alien.anims.play('jump1', true);
        }

        // use JustDown to avoid "pogo" jumps if you player keeps the up key held down
        // note: there is unfortunately no .justDown property in Phaser's cursor object
        if(this.luna.body.touching.down && Phaser.Input.Keyboard.JustDown(cursors.up)) {
            this.luna.body.setVelocityY(this.JUMP_VELOCITY);
            this.sound.play('jump');
            this.luna.anims.play('jump');
        }
        

        if(this.alien.body.touching.down && this.obstacle.x < game.config.width/4 + 100 && this.obstacle.x > game.config.width/4){
            this.alien.body.setVelocityY(this.JUMP_VELOCITY);
            this.alien.anims.play('jump1', true);
        }

        if(this.alien.body.touching.down && this.obstacle1.x < game.config.width/4 + 100 && this.obstacle1.x > game.config.width/4){
            this.alien.body.setVelocityY(this.JUMP_VELOCITY);
            this.alien.anims.play('jump1', true);
        }




        



    }

}
