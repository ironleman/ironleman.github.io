let highscore = 0;
let score = 0;

class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        // load images/tile sprite
        //this.load.image('rocket', './assets/rocket.png');
        ////this.load.image('spaceship', './assets/spaceship.png');
        //this.load.image('starfield', './assets/starfield.png');
        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        //this.load.spritesheet('sperm', './assets/spermspritesheet.png', {frameWidth: 32, frameHeight: 64, startFrame: 0, endFrame:1});
        //this.load.image('glider', './assets/glider.png');
        this.load.image('bird0', './assets/birds0.png');
        this.load.image('bird1', './assets/birds1.png');
        this.load.image('bird2', './assets/birds2.png');
        this.load.image('bird3', './assets/birds3.png');
        this.load.image('bird4', './assets/birds4.png');
        this.load.image('bird6', './assets/birds6.png');
        this.load.image('bird5', './assets/birds5.png');
        this.load.image('finishline', './assets/finishedline.png');
        this.load.image('background', './assets/skymoving.png');
        this.load.image('gameover', './assets/gameoverscreen.png');
        this.load.image('glider2', './assets/glider2.png');
    }

    create() {
        // copyright free music starts at the play scene
        this.aww = 1;
        this.music = this.sound.add('music');
        this.music.play();
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);
        // white rectangle borders
        this.add.rectangle(5, 5, 630, 32, 0x000000).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0x000000).setOrigin(0, 0);
        this.add.rectangle(5, 5, 32, 455, 0x000000).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 455, 0x000000).setOrigin(0, 0);
        // green UI background
        //this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0,0);
        this.finish = this.add.tileSprite(37, 42,566, 64, 'finishline').setOrigin(0, 0);

        let highScoreText = {
            fontFamily: 'Franklin Gothic Medium',
            color: '#000000',
            backgroundColor: '#FFFFFF'
        }
        this.highscoretext = this.add.text(400, 42,'High Score:', highScoreText);

        //add rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'glider2').setOrigin(0, 0);

        // add spaceship (x3)
        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'bird0', 0, 30).setOrigin(0, 0);
        this.ship02 = new Lady(this, 0, 196, 'bird1', 0, 20).setOrigin(0, 0);
        this.ship03 = new Spaceship(this, game.config.width, 260, 'bird2', 0, 10).setOrigin(0, 0);
        this.ship04 = new Lady(this, -200, 196, 'bird3', 0, 20).setOrigin(0, 0);
        this.ship05 = new Spaceship(this, game.config.width + 650, 260, 'bird6', 0, 10).setOrigin(0, 0);
        this.ship06 = new Spaceship(this, game.config.width + 500, 132, 'bird5', 0, 30).setOrigin(0, 0);

        // define keyboard keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


        //score
        score = 0;
        //score display
        this.endgame = this.add.tileSprite(0, 0, 640, 480, 'gameover').setOrigin(0, 0);
        this.endgame.alpha = 0;

         // high score 
        this.highScore = highscore;
        //highscore display
        let highscoreConfig = {
            fontFamily: 'Franklin Gothic Medium',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreRight = this.add.text(480, 42, this.highScore, highscoreConfig);

        
        // game over flag
        this.gameOver = false;
        this.scoreRight.alpha = 1;
    }

    update() {       
        /*let shot = this.add.sprite(this.p1Rocket.x, this.p1Rocket.y, 'sperm').setOrigin(0, 0);
        shot.anims.play('sperm');
        shot.on('animationcomplete', () => {
            shot.destroy();
        });*/
        let scoreConfig = {
            fontFamily: 'Franklin Gothic Medium',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
            this.scoreLeft = this.add.text(69, 42, this.score, scoreConfig);
    
        if (this.score > highscore) {
            highscore = this.p1Score;
        }

        // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.restart(this.score);
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
        //scroll starfields
        this.starfield.tilePositionY -= 4;

        if(!this.gameOver){
            // update rocket
            this.p1Rocket.update();
            // update spaceship
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
            this.ship04.update();
            this.ship05.update();
            this.ship06.update();
        }

        //check collisions
        if (this.checkCollision(this.p1Rocket, this.ship03)) {
            this.gameOver = true;
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
            this.gameOver = true;
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            this.gameOver = true;      
        }
        if (this.checkCollision(this.p1Rocket, this.ship04)){
            this.gameOver = true;
        }
        if (this.checkCollision(this.p1Rocket, this.ship05)){
            this.gameOver = true;
        }
        if (this.checkCollision(this.p1Rocket, this.ship06)){
            this.gameOver = true;
        }
        if (this.p1Rocket.y <= 108) {
            this.sound.play('point');
            this.p1Rocket.reset();
            score += 10;
        }
              
        this.scoreLeft.text = score;
       
        this.scoreRight.text = highscore;
        if (score > highscore) {
            highscore = score;
        }

        if(this.gameOver == true) {
            this.scoreLeft.alpha = 0;
            this.scoreRight.alpha = 0;
            this.endgame.alpha = 1;
            this.music.stop();
            if (this.aww == 1) {
                this.sound.play('gameover');
            }
            this.aww++;
        }

        
    }

    checkCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width &&
            rocket.x + rocket.width > ship.x &&
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship.y) {
                return true;
            } else {
                return false;
            }
    }

    /*shipExplode(ship) {
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');
        boom.on('animationcomplete', () => {
            ship.reset();
            ship.alpha = 1;
            boom.destroy();
        });
        // score add
        
        // check to see if the current score is higher than the high score


        this.sound.play('sfx_explosion');
    }*/
}
