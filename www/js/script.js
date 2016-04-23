  		var menu = $("#menu");
  		var block = $("#block");
  		menu.click(function () {
  			if (block[0].style.height === '85px') {
  				block.animate({
  					'height': '600px',
  					'margin-top': '-535px',
  			}, 1000);
  			} else {
  				block.animate({
  					'height': '85px',
  					'margin-top': '0px',
			}, 1000);
  			}
  		});

  		function changeImage() {
  			var image = document.getElementById('menu');
  			if (image.src.match("footer_bt2")) {
  				image.src = "images/footer_bt.png";
  			} else {
  				image.src = "images/footer_bt2.png";
  			}
  		};

      var openData = $("#openData");
      var contData = $("#contData");
      openData.click(function () {
        if (contData[0].style.display === 'block') {
          contData.animate({height: "hide"}, 1000);
        } else {
          contData.animate({height: "show"}, 1000);
        }
      });