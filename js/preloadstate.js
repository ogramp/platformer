Platformer.preloadState = function() {};
Platformer.preloadState.prototype = {
	preload: function(game) {
		game.load.script('GameStateScript', './js/gamestate.js');
		game.load.image('playButton', './img/ui/play_button.png');
		game.load.audio('click', 'sfx/click.mp3');
	},
	create: function(game) {
		game.state.add('GameState', Platformer.gameState);
		game.state.start('GameState');
	}
}