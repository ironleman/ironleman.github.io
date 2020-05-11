//class Main extends Phaser 
// Nathan Altice
// Updated: 4/18/20
// Phaser 3 Movement Studies in X Scenes
// Concepts: Arcade physics, atlas and atlasXML loading, atlas animation (custom and generated frames), physics world wrapping, physics body properties (velocity, acceleration, drag, max acceleration), keyboard (isDown, JustPressed, DownDuration, UpDuration)
// Jump mechanics inspired by and adapted from Game Mechanic Explorer https://gamemechanicexplorer.com
// The two example atlases  are commercial assets and should not be used for your own projects - buy them from https://www.kenney.nl/assets :)

// tame the javashrek
"use strict";

// global variables
let cursors;
let currentScene = 0;
const SCALE = 0.5;
const tileSize = 35;

// main game object
let config = {
    type: Phaser.WEBGL,
    width: 840,
    height: 525,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Tutorial, LevelSelect, Level1, Level2, credits ]
};

let game = new Phaser.Game(config);

let score;
// let highScore;
// let newHighScore = false;
// let boneScore;
// let resetBS = "0";
