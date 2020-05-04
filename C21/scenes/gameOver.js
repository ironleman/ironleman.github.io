class gameOver extends Phaser.Scene{

    constructor(){
        super("gameOverScene"); 
    }

create(){
    this.cameras.main.setBackgroundColor("#227B96");

    this.anims.create({
        key: 'gover',
        frames: this.anims.generateFrameNumbers('gameover', { start: 0, end: 1, first: 0}),
        frameRate: 5
    });

    this.gver = this.add.sprite(0, game.config.height - 448, 'gameover').setOrigin(0);
    if(localStorage.getItem("hiscore") !=null){
        let storedScore= parseInt(localStorage.getItem("hiscore"));

        if(degree > storedScore){
            localStorage.setItem("hiscore", degree.toString());
            highScore= degree;
            newHighScore= true;

        }

        else{
            highScore= parseInt(localStorage.getItem("hiscore"));
            newHighScore= false;
        }

    }
    else{
        highScore= degree;
        localStorage.setItem("hiscore", highScore.toString());
        newHighScore= true;
    }

    if(newHighScore){
        this.add.text(game.config.width/2, 70, 'New Best!', { fontFamily: 'Arial Black', fontSize: '32px', color: '#FFFFFF' }).setOrigin(0.5);
    }

    this.add.text(game.config.width/2, 380, 'You chased Luna for ' + degree + ' seconds', { fontFamily: 'Arial Black', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);
    this.add.text(game.config.width/2, 500 , 'HighScore: ' + highScore, { fontFamily: 'Arial Black', fontSize: '32px', color: '#FFFFFF' }).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2, 'Press UP to Restart', { fontFamily: 'Arial Black', fontSize: '24px', color: '#FFFFFF' }).setOrigin(0.5);

    //this.bgm= this.sound.add("moan");

        let musicConfig= {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
        //this.bgm.play(musicConfig);


    let space= this.input.keyboard.addKey("UP");
        space.on('down', () => {
            //this.bgm.stop();
            this.sound.play('menu');
            this.scene.start("playScene");
        });
    

}
    update(){
        this.gver.anims.play('gover', true);
    }
}
