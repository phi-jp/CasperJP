
;(function() {

	window.addEventListener("load", function() {
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
	});

	/*

	$.get("/rss",function( data ){
		var postsXML = $(data).find('item');
		var posts = [];

		postsXML.each(function(i) {
			var postXML = postsXML.eq(i);
			var post = {
				title: postXML.find('title').text(),
				description: postXML.find('description').text(),
				category: postXML.find('category').text(),
				pubDate: postXML.find('pubDate').text(),
				link: postXML.find('link').text(),
			};

			posts.push(post);

			if (true) {
				var categoryXML = postXML.find('category');
				categoryXML.each(function(i) {
					console.dir(categoryXML[i].textContent);
				});
			}
		});

		// posts.forEach(function(post) {
		// 	console.log(post.category);
		// });

	});

*/

})();
