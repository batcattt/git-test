var GoTop = (function(){
	
		var $goTop = $('<div id="go-top">回到顶部</div>');
		$('body').append($goTop);

		function init (){
			$(window).on('scroll', function(e){
				var offsetTop = $('body').scrollTop();
				console.log(offsetTop);
				if(offsetTop>100){
					$goTop.show();
				}else{
					$goTop.hide();
				}
			})
			$goTop.on('click', function(){
				$(window).scrollTop(0);
			});

		}


		return {
			init: init
		}
	})();

	GoTop.init();