// Initialize the Phaser Game object and set default game window size
const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    // Load & Define our game assets
    game.load.image('sky', './images/sky.png')
    game.load.image('ground', './images/platform.png')
    game.load.image('diamond', './images/diamond.png')
    game.load.spritesheet('woof', './images/woof.png', 32, 32)

    const dong = new Image();
    dong.crossOrigin = "anonymous";
    dong.src = './images/sky.png';
    dong.width = 224;
    dong.height = 224;
}

function create() {
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE)

    //  A simple background for our game
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'crossOrigin');
}

function update() {

}