class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); 
    }




    preload(){


    }

    create(){

                // variables and settings
                this.ACCELERATION = 500;
                this.JUMP_VELOCITY = -1000;
                this.physics.world.gravity.y = 3000;
                this.cloudSpeed = -130;
                this.obstacleSpeed = -200;
                // set bg color
                this.cameras.main.setBackgroundColor("#227B96");
        
        
               degree = 0;
        
                /* draw grid lines for jump height reference
                let graphics = this.add.graphics();
                graphics.lineStyle(2, 0xFFFFFF, 0.1);
                for(let y = game.config.height-70; y >= 35; y -= 35) {
                    graphics.lineBetween(0, y, game.config.width, y);
                }
                */
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
        
                this.luna = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'lunarun', 'front').setScale(0.25);
                //this.luna.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);
                this.obstacle = this.physics.add.sprite(game.config.width, game.config.height - 60, 'hydrant').setScale(0.25);
                this.obstacle.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
        
                this.obstacle1 = this.physics.add.sprite(game.config.width + 400, game.config.height - 60, 'rock').setScale(0.25);
                this.obstacle1.body.setAllowGravity(false). setVelocityX(this.obstacleSpeed);
        
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

        
                // add physics collider
                this.physics.add.collider(this.alien, this.ground);
                this.physics.add.collider(this.luna, this.ground);
         
        
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

        this.cameras.main.setBackgroundColor("#227B96");
        this.add.text(game.config.width/2, game.config.height/4, "Runaway Luna!", {fontFamily: "Arial Black", fontSize: "53px", color: "#000000"}).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/4, "Runaway Luna!", {fontFamily: "Arial Black", fontSize: "52px", color: "#FFFFFF"}).setOrigin(0.5);
        
        this.add.text(game.config.width/2, game.config.height/2, "Press UP to Continue", {fontFamily: "Arial Black", fontSize: "33px", color: "#000000"}).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "Press UP to Continue", {fontFamily: "Arial Black", fontSize: "32px", color: "#FFFFFF"}).setOrigin(0.5);

        this.add.text(game.config.width/2, game.config.height-50, "J(U)m(P) over obstacles!", {fontFamily: "Arial Black", fontSize: "33px", color: "#000000"}).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height-50, "J(U)m(P) over obstacles!", {fontFamily: "Arial Black", fontSize: "32px", color: "#FFFFFF"}).setOrigin(0.5);

        this.bgm = this.sound.add("music");

        let musicConfig= {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        this.bgm.play(musicConfig);

 

        let cursors= this.input.keyboard.createCursorKeys();
        let space= this.input.keyboard.addKey("UP");
        space.on('down', () => {
            //this.bgm.stop();
            this.sound.play('menu');
            this.scene.start("playScene");
        });
        
        

      
    }

    update(){

        
        this.grass.anims.play('grassmove', true);
        this.grass1.anims.play('grassmove', true);
        this.grass2.anims.play('grassmove', true);
        this.grass3.anims.play('grassmove', true);
        this.grass4.anims.play('grassmove', true);
        this.grass5.anims.play('grassmove', true);

        this.alien.anims.play('crun',true);
        this.luna.anims.play('run', true);
        //Display the time on-screen in seconds


        // heart movement / resetting
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

        if(this.obstacle1.x == this.obstacle.x) {
            this.obstacle1.x = game.config.width + 300;
        }


        // use JustDown to avoid "pogo" jumps if you player keeps the up key held down
        // note: there is unfortunately no .justDown property in Phaser's cursor object


        if(this.luna.body.touching.down && this.obstacle.x < game.config.width/2 + 100 && this.obstacle.x > game.config.width/2){
            this.luna.body.setVelocityY(this.JUMP_VELOCITY);
            this.luna.anims.play('jump', true);
        }

        if(this.luna.body.touching.down && this.obstacle1.x < game.config.width/2 + 100 && this.obstacle1.x > game.config.width/2){
            this.luna.body.setVelocityY(this.JUMP_VELOCITY);
            this.luna.anims.play('jump', true);
        }

        if(this.alien.body.touching.down && this.obstacle.x < game.config.width/4 + 100 && this.obstacle.x > game.config.width/4){
            this.alien.body.setVelocityY(this.JUMP_VELOCITY);
            
        }

        if(this.alien.body.touching.down && this.obstacle1.x < game.config.width/4 + 100 && this.obstacle1.x > game.config.width/4){
            this.alien.body.setVelocityY(this.JUMP_VELOCITY);
            
        }

        // grass movement
        this.physics.world.wrap(this.grass, this.grass.width/2);
        this.physics.world.wrap(this.grass1, this.grass1.width/2);
        this.physics.world.wrap(this.grass2, this.grass2.width/2);
        this.physics.world.wrap(this.grass3, this.grass3.width/2);
        this.physics.world.wrap(this.grass4, this.grass4.width/2);
        this.physics.world.wrap(this.grass5, this.grass5.width/2);
        // wrap physics object(s) .wrap(gameObject, padding)
        this.physics.world.wrap(this.cloud01, this.cloud01.width/2);
        this.physics.world.wrap(this.cloud02, this.cloud02.width/2);
        

        this.cloudSpeed *= 1.0001; 
        this.cloud01.body.setAllowGravity(false).setVelocityX(this.cloudSpeed);
        this.cloud02.body.setAllowGravity(false).setVelocityX(this.cloudSpeed);

       this.obstacleSpeed *= 1.001;
       this.obstacle.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
       this.obstacle1.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);

       this.grass5.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
       this.grass4.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
       this.grass3.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
       this.grass2.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
       this.grass1.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);
       this.grass.body.setAllowGravity(false).setVelocityX(this.obstacleSpeed);

    }
}
