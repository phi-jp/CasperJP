/*
 * main
 */

// mario v0.0.1
(function(e){var t=37;var n=38;var r=39;var i=66;var s=[];var o=function(e){return s[e]};document.addEventListener("keydown",function(e){s[e.keyCode]=true});document.addEventListener("keyup",function(e){s[e.keyCode]=false});var u=14;var a=18;var f=[[0,0,0,0],[220,41,0,255],[255,165,59,255],[32,32,32,255]];var l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,3,3,3,2,2,3,2,0,0,0,0,0,0,3,2,3,2,2,2,3,2,2,2,0,0,0,0,3,2,3,3,2,2,2,3,2,2,2,0,0,0,3,3,2,2,2,2,3,3,3,3,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,3,3,1,3,3,3,0,0,0,0,0,0,0,3,3,3,1,3,3,1,3,3,3,0,0,0,3,3,3,3,1,3,3,1,3,3,3,3,0,0,2,2,3,1,2,1,1,2,1,3,2,2,0,0,2,2,2,1,1,1,1,1,1,2,2,2,0,0,2,2,1,1,1,1,1,1,1,1,2,2,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,3,3,3,0,0,0,0,3,3,3,0,0,0,3,3,3,3,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];e.Mario=function(e){var t=new c(e);return t};e.Mario.defaults={x:50,y:-50,scale:2,floorHeight:50,direction:"right"};var c=function(e){this.init(e)};c.prototype={init:function(t){t=t||{};for(var n in e.Mario.defaults){if(!t[n]){t[n]=e.Mario.defaults[n]}}this._setupMario(t);this.floorHeight=t.floorHeight;this.jump=0;this.setDirection(t.direction);setInterval(this._update.bind(this),1e3/30)},_setupMario:function(e){var t=e.scale;var n=document.createElement("canvas");this.eMario=n;n.width=u*t;n.height=a*t;document.body.appendChild(n);n.style.position="fixed";n.style.margin="0";n.style.padding="0";n.style.zIndex="0";this.setX(e.x);this.setY(e.y||-50);var r=function(){var e=document.createElement("canvas");e.width=u;e.height=a;var t=e.getContext("2d");var r=t.createImageData(u,a);for(var i=0;i<u*a;++i){var s=l[i];var o=f[s];r.data[i*4+0]=o[0];r.data[i*4+1]=o[1];r.data[i*4+2]=o[2];r.data[i*4+3]=o[3]}t.putImageData(r,0,0);var c=n.getContext("2d");c.imageSmoothingEnabled=false;c.webkitImageSmoothingEnabled=false;c.mozImageSmoothingEnabled=false;c.drawImage(e,0,0,u,a,0,0,n.width,n.height)};r()},getX:function(){return Number(this.eMario.style.left.replace("px",""))},setX:function(e){this.eMario.style.left=e+"px"},getY:function(){return Number(this.eMario.style.top.replace("px",""))},setY:function(e){this.eMario.style.top=e+"px"},setDirection:function(e){var t=this.eMario.style;if(e=="left"){t.webkitTransform="scaleX(-1)";t.MozTransform="scaleX(-1)"}else{t.webkitTransform="scaleX( 1)";t.MozTransform="scaleX( 1)"}},getFloor:function(){return window.innerHeight-this.floorHeight-this.eMario.height},_update:function(){var e=this.getX();var s=this.getY();var u=this.getFloor();var a=o(i)?2:1;if(o(t)){e-=5*a;this.setDirection("left")}if(o(r)){e+=5*a;this.setDirection("right")}if(e<0){e=window.innerWidth}if(e>window.innerWidth){e=0}if(s==u&&o(n))this.jump=-16;this.jump+=.5;s+=this.jump;if(s>=u){s=u;this.jump=0}this.setX(e);this.setY(s)}}})(window);


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
			Mario({
                x: 20,
                scale: (window.innerWidth <= 500) ? 2:4,
                floorHeight: 20,
            });
		}, 100);
	});

})();



