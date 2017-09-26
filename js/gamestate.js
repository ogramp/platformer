Platformer.gameState = function() {};
Platformer.gameState.prototype = {
	preload: function() {
		console.log('GameState Preload');

	},
	create: function(game) {
		this.click = game.add.audio('click');
		game.input.onDown.add(function() {
			this.click.play();
		}, this);

		this.playButton = game.add.sprite(0, 0, 'playButton');
		this.playButton.anchor.setTo(0.5);
		this.playButton.inputEnabled = true;
		this.playButton.events.onInputDown.add(function() {
			console.log('ha');
		}, this);

		this.resize(game.width, game.height);
	},
	resize: function(w, h) {
		this.playButton.position.setTo(w*0.5 | 0, h*0.5 | 0);
	}
}