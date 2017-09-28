Platformer.preloadState = function() {};
Platformer.preloadState.prototype = {
	preload: function(game) {
		game.load.script('GameStateScript', './js/gamestate.js');
		game.load.script('PlayerScript', 'js/player.js');
		game.load.image('playButton', './img/ui/play_button.png');
		game.load.audio('click', 'sfx/click.mp3');
		game.load.audio('hover', 'sfx/hover.mp3');
		game.load.atlasXML('player', './img/player/spritesheet_jumper.png', './img/player/spritesheet_jumper.xml');
	},
	create: function(game) {
		game.state.add('GameState', Platformer.gameState);
		game.state.start('GameState');
	}
}