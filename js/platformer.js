// Util fn for loading scripts.
function loadScript(url, callback) {

	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');

	script.type = 'text/javascript';
	script.src = url;
	script.onreadystatechange = callback;
	script.onload = callback;

	head.appendChild(script);

}

(function() {

	Platformer = {

	};

	loadScript('js/bootstate.js', function() {

		Platformer.game = new Phaser.Game('100', '100', Phaser.AUTO, null, Platformer.bootState, false);

	});

})();