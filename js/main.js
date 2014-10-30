function responsiveTopNavigation() {
	if ($(window).width() < 680) {
		$('main.main-grid').remove();
		$('#promo-mobile').show();
	}		
}

responsiveTopNavigation();
