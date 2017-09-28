Platformer.player = function(game) {
	Phaser.Sprite.call(this, game, game.world.centerX, game.world.centerY, 'player', 'bunny1_stand.png');
	this.animations.add('idle', ['bunny1_ready.png', 'bunny1_stand.png'], 5, true);
	this.animations.play('idle');
	this.anchor.setTo(0.5, 1);
	game.add.existing(this);
};
Platformer.player.prototype = Object.create(Phaser.Sprite.prototype);
Platformer.player.constructor = Platformer.player;
Platformer.player.prototype.update = function() {

};