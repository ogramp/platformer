Platformer.player = function(game) {
	Phaser.Sprite.call(this, game, game.world.centerX, game.world.centerY, 'player', 'bunny1_stand.png');

	game.physics.enable(this, Phaser.Physics.ARCADE);

	this.animations.add('idle', ['bunny1_ready.png', 'bunny1_stand.png'], 5, true);
	this.animations.add('walk', ['bunny1_walk1.png', 'bunny1_walk2.png'], 5, true);
	this.animations.add('jump', ['bunny1_jump.png'], 5, true);
	this.animations.add('crouch', ['bunny1_ready.png'], 5, true);

	this.anchor.setTo(0.5, 1);

	this.body.collideWorldBounds = true;

	this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	game.add.existing(this);
};
Platformer.player.prototype = Object.create(Phaser.Sprite.prototype);
Platformer.player.constructor = Platformer.player;
Platformer.player.prototype.update = function() {

	this.scale.setTo(1);

	if(this.upKey.isDown || this.spaceKey.isDown) {
		this.animations.play('jump');
	} else if(this.downKey.isDown) {
		this.animations.play('crouch');
	} else if(this.leftKey.isDown) {
		this.scale.setTo(-1, 1);
		this.animations.play('walk');
	} else if(this.rightKey.isDown) {
		this.animations.play('walk');
	} else {
		this.animations.play('idle');
	}

};