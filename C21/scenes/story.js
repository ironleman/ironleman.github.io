class story extends Phaser.Scene {
    constructor(){
        super("storyScene"); 
    }

   

    create(){

        this.text= this.add.text(game.config.width/2, 330, "Life for retired rockstar Judas Coyne hardly emanated much excitement. Much of his livelihood was spent touring on the road with his death metal bandmates and working on albums that eventually went platinum, but now Jude had taken up a new hobby: becoming a collector of some of the most macabre memorabilia known to man. His collection consists of a witch’s confession, a snuff film, and now he has his eyes set on a new item; a dead man’s funeral suit that is said to be haunted. After having won the suit in an online auction house, it arrived promptly at his doorstep, concealed in a heart-shaped box. The moment the heart-shaped box came ajar, Jude’s life would never be the same again.", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF", wordWrap: { width: 600 }}).setOrigin(0.5);
       
        this.add.text(game.config.width/2, 670, "Press any key to continue", {fontFamily: "Times New Roman", fontSize: "28px", color: "#FF0000"}).setOrigin(0.5);

        //this.bgm= this.sound.add("moan");

        let musicConfig= {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
        //this.bgm.play(musicConfig);
        
        this.input.keyboard.on('keydown', () => {
            //this.bgm.stop();
            this.scene.start("playScene");  
        }, this);
    }

   
}
