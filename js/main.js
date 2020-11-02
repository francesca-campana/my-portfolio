window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}
// Carousel
$(document).ready(function () {
  $('.next').click(
    function (){
        getImageNext()

    }
  );
  $('.prev').click(
    function(){
      getImagePrev()

    }
  );

});

//Creerò 2 funzioni che mi permetteranno di far funzionare il carosello,
//--> cliccando sulla freccetta dx 'next' le immagini andranno avanti assieme ai pallini blu
//--> Per andare avanti :
//    parto dall''immagineCorrente' a cui si rimuoverà la classe 'active',
//    se l'elemento è in classe 'last' verrà aggiunta la classe 'active' e quindi sarà visibile la prima immagine
//    altrimenti all'immagineCorrente sarà visibile un'immagine successiva
//    stessa logica applicata ai pallini

function getImageNext(){
  var immagineCorrente = $('.images img.active');
  var pallinoCorrente = $ ('.nav i.active');

  immagineCorrente.removeClass('active');
  pallinoCorrente.removeClass('active');

  if(immagineCorrente.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');


  }else {
    immagineCorrente.next().addClass('active');
    pallinoCorrente.next().addClass('active');
  }

}
//--> cliccando sulla freccetta sx 'prev' le immagini andranno indietro assieme ai pallini blu
//--> Per andare indietro:
//    parto dall''immagineCorrente' a cui si rimuoverà la classe 'active',
//    se l'elemento è in classe 'first' verrà aggiunta la classe 'active' e quindi sarà visibile l'ultima' immagine
//    altrimenti all'immagineCorrente sarà visibile un'immagine precedente
//    stessa logica applicata ai pallini
function getImagePrev(){
  var immagineCorrente = $ ('.images img.active');
  var pallinoCorrente = $ ('.nav i.active');

  immagineCorrente.removeClass('active');
  pallinoCorrente.removeClass('active');

  if (immagineCorrente.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');

  }else {
    immagineCorrente.prev('img').addClass('active');
    pallinoCorrente.prev().addClass('active');
  }
}

// ~ function() {
//
// 	'use strict';
//
// 		var spans = [],
// 				screen = document.getElementById("screen"),
// 				text = "";
//
// 		document.currentScript.text.split(/[\s,.=><\&\-!'/\]\+;()\\["]+/, 169).forEach(function(w) {
// 				if (w.length > 1) text += w + " ";
// 		});
// 		var CObj = function(elem) {
// 				this.elem = elem;
// 				this.x = elem.offsetLeft;
// 				this.y = elem.offsetTop;
// 				this.zooming = false;
// 				this.scale = 1;
// 		}
//
// 		CObj.prototype.init = function() {
// 				this.elem.obj = this;
// 				this.elem.className = 'word';
// 				this.elem.style.left = this.x + "px";
// 				this.elem.style.top = this.y + "px";
// 				this.glow = document.createElement("span");
// 				this.glow.innerHTML = this.elem.innerHTML;
// 				this.glow.className = "wordZoom";
// 				screen.appendChild(this.glow);
// 				this.glow.style.left = this.x + "px";
// 				this.glow.style.top = this.y + "px";
// 		}
//
// 		CObj.prototype.start = function() {
// 				if (!this.zooming) {
// 						this.elem.className = "word over";
// 						this.zooming = true;
// 						this.glow.style.visibility = "visible";
// 				}
// 		}
//
// 		CObj.prototype.zoom = function() {
// 				if (this.zooming) {
// 						this.scale *= 1.05;
// 						if (this.scale < 20) {
// 								var c = 512 - this.scale * 20;
// 								this.glow.style.transform = this.glow.style.webkitTransform = "scale(" + this.scale + ")";
// 								this.glow.style.color = "rgb(" + Math.round(c * .5) + "," + Math.round(c * .5) + "," + Math.round(c) + ")";
// 						} else {
// 								this.zooming = false;
// 								this.scale = 1;
// 								this.glow.style.transform = this.glow.style.webkitTransform = "scale(1)";
// 								this.glow.style.visibility = "hidden";
// 								this.elem.className = "word";
// 						}
// 				}
// 		}
//
// 		text += " Html5 Javascript Jquery REST API Css3 Bootstrap php Laravel Json Sass Scss Photoshop  Illustrator ";
// 		var comp = "",
// 				word = "",
// 				tag = false;
//
// 		for (var i = 0; i < text.length; i++) {
// 				var c = text.charAt(i);
// 				if (c == "<") {
// 						var j = text.indexOf(">", i);
// 						word += text.substring(i, j + 1);
// 						i = j;
// 						tag = true;
// 				} else {
// 						if (c == " ") {
// 								if (tag) {
// 										comp += word + "&nbsp; ";
// 										tag = false;
// 								} else {
// 										comp += "<span>" + word + "</span>&nbsp; ";
// 								}
// 								word = "";
// 						} else word += c;
// 				}
// 		}
// 		screen.innerHTML = comp;
//
// 		var n = screen.getElementsByTagName("*");
// 		for (var i = 0; i < n.length; i++) {
// 				var word = n[i];
// 				spans[i] = new CObj(word);
// 		}
//
// 		for (var i = 0; i < spans.length; i++) {
// 				spans[i].init();
// 		}
//
// 		screen.onmouseover = function(e) {
// 				e.preventDefault();
// 				if (e.target.obj) e.target.obj.start();
// 		};
//
// 		var run = function() {
// 				requestAnimationFrame(run);
// 				for (var i = 0; i < spans.length; i++) {
// 						spans[i].zoom();
// 				}
// 		};
//
// 		run();
//
// }();
