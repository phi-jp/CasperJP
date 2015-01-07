/*
 * main
 */

;(function() {

	window.addEventListener("load", function() {
		// shortcut
		document.addEventListener("keydown", function(e) {
			var c = String.fromCharCode(e.keyCode);

			switch (c) {
				case 'E':
					location.href += "/edit";
					break;
				case 'H':
					location.href = '/ghost';
					break;
			}
		});

		// mario
		setTimeout(function() {
			setupMario()
			// Mario({
   //              x: 20,
   //              scale: (window.innerWidth <= 500) ? 2:4,
   //              floorHeight: 20,
   //          });
		}, 100);
	});

	var setupMario = function() {
		var scale = (window.innerWidth <= 500) ? 0.5:1;

		// player
	    Mario.Player({
	        x: window.innerWidth-215,
	        y: window.innerHeight-140,
	        scale: scale,
	        direction: "left",
	        floorHeight: 20
	    });


		// block
	    var blockX = window.innerWidth-100*scale;
	    var blockY = window.innerHeight-220*scale;
	    var blockSize = 48*scale;
	    var step = blockSize*1.2;

	    Mario.RssBlock({
	        x: blockX,
	        y: blockY,
	        width: blockSize,
	        height: blockSize,
	    });

	    Mario.PocketBlock({
	        x: blockX-step*1,
	        y: blockY,
	        width: blockSize,
	        height: blockSize,
	        src: Mario.assets.pocket,
	    });

	    Mario.HatenaBlock({
	        x: blockX-step*2,
	        y: blockY,
	        width: blockSize,
	        height: blockSize,
	        src: Mario.assets.hatebu,
	    });

	    Mario.TwitterBlock({
	        x: blockX-step*3,
	        y: blockY,
	        width: blockSize,
	        height: blockSize,
	        src: Mario.assets.hatebu,
	        // title: "tmlife",
	        // link: "http://tmlife.io",
	    });

	};

})();



