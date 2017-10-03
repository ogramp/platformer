Platformer.gameState = function() {};
Platformer.gameState.prototype = {
	preload: function() {
		console.log('GameState Preload');
	},
	create: function(game) {
		this.click = game.add.audio('click');
		this.hover = game.add.audio('hover');

		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 250;

		this.player = null;

		// The play button.
		this.playButton = game.add.button(0, 0, 'playButton', this.playButtonAction, this);
		this.playButton.anchor.setTo(0.5);
		this.playButton.onInputOver.add(this.playButtonOver, this);
	    this.playButton.onInputOut.add(this.playButtonOut, this);
	    this.playButton.onInputDown.add(this.playButtonDown, this);

		this.resize(game.width, game.height);

	},
	render: function(game) {
		if(this.player) {
			game.debug.body(this.player);
		}
	},
	resize: function(w, h) {
		if(this.playButton.inputEnabled) {
			this.playButton.position.setTo(w*0.5 | 0, h*0.5 | 0);
		} else {
			this.playButton.position.setTo(w*0.5 | 0, h + this.playButton.height);
		}
	},

	// Play button actions.
	playButtonAction: function(button, pointer) {
		button.inputEnabled = false;
		this.click.play();
		this.playButtonOut(button, pointer);
		this.game.add.tween(button).to({y: this.game.height + button.height}, 250, Phaser.Easing.Linear.Null, true, 150);
		this.player = new Platformer.player(this.game);
	},
	playButtonOver: function(button, pointer) {
		this.hover.play();
		this.game.add.tween(button.scale).to({x: 1.01, y: 1.01}, 75, Phaser.Easing.Linear.Null, true);
	},
	playButtonOut: function(button, pointer) {
		this.game.add.tween(button.scale).to({x: 1, y: 1}, 75, Phaser.Easing.Linear.Null, true);
	},
	playButtonDown: function(button, pointer) {
		this.game.add.tween(button.scale).to({x:0.99, y: 0.99}, 75, Phaser.Easing.Linear.Null, true);
	}
}