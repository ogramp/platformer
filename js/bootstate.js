Platformer.bootState = function() {};
Platformer.bootState.prototype = {
	init: function() {
		this.game.stage.backgroundColor = '#3e2c59';
		this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	},
	preload: function(game) {
		game.load.script('preloadStateScript', './js/preloadstate.js');
	},
	create: function(game) {
		game.state.add('PreloadState', Platformer.preloadState);
		game.state.start('PreloadState');
	}
};