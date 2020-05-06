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

    localStorage.setItem("boneScores", boneScore);

    this.gver = this.add.sprite(0, game.config.height - 448, 'gameover').setOrigin(0);
    if(localStorage.getItem("hiscore") !=null){
        let storedScore= parseInt(localStorage.getItem("hiscore"));

        if(score > storedScore){
            localStorage.setItem("hiscore", score.toString());
            highScore= score;
            newHighScore= true;

        }

        else{
            highScore= parseInt(localStorage.getItem("hiscore"));
            newHighScore= false;
        }

    }
    else{
        highScore= score;
        localStorage.setItem("hiscore", highScore.toString());
        newHighScore= true;
    }

    if(newHighScore){
        this.add.text(game.config.width/2,70, 'New Best!', { fontFamily: 'Arial Black', fontSize: '40px', color: '#FFFFFF' }).setOrigin(0.5);
    }

    this.add.text(game.config.width/6, 70, 'Score: ' + score, { fontFamily: 'Arial Black', fontSize: '28px', color: '#FFFFFF' }).setOrigin(0.5);
    this.add.text(game.config.width - 175, 70, 'HighScore: ' + highScore, { fontFamily: 'Arial Black', fontSize: '28px', color: '#FFFFFF' }).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height - 20, 'Press UP to Restart', { fontFamily: 'Arial Black', fontSize: '24px', color: '#FFFFFF' }).setOrigin(0.5);
    this.add.text(game.config.width- 175, 30, 'Treats: ' + boneScore, { fontFamily: 'Arial Black', fontSize: '24px', color: '#FFFFFF' }).setOrigin(0.5);

    

        let musicConfig= {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
      


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
