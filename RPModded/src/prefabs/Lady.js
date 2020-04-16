// Spaceship prefab
class Lady extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
    
        scene.add.existing(this); // add object to existing scene, displayList, updateList
        this.points = pointValue;
    }

    update() {
        this.num = Math.floor(Math.random() * Math.floor(150));
        // move spaceship left
        this.x += game.settings.spaceshipSpeed;
        // wraparound screen bounds
        if(this.x >= game.config.width + this.width) {
            if(this.num == 10){
                this.reset();
            }
        }
    }
 
    reset() {
        this.x = 0 - this.width;
    }
}
