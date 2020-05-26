const config = { type: Phaser.AUTO, width: 800, height: 600,
physics: {
    default: 'arcade',
        arcade: { gravity: { y:300 }, debug: false }
},
scene: {
    prelaod: preload,
    create: create,
    update: update
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

var platforms;

function create () 
{
    this.add.image(400, 300, 'sky');
    this.add.image(200, 150, 'star');
    this.add.image(50, 450, 'bomb');

    player = this.physics.add.sprite(100, 450, 'dude')
}

function update () 
{

}