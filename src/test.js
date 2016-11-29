var FontFaceObserver = require('fontfaceobserver');

(function() {
	var roboto = new FontFaceObserver('Roboto', {
			weight: 400
		});

	roboto.load().then(function() {
		console.log('yay');
	});
})();
