		
		// for menu background change
		$(window).on('scroll', function(){
			if($(window).scrollTop() > 650){
				$('#main-menu').addClass('menu-bg');
			} else {
				$('#main-menu').removeClass('menu-bg');
			}
		})