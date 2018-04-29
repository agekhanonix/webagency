$(document).ready(function() {
	$('.navMenu li').on('click', function(){
		$('.navMenu li').removeClass('tabActive');
		$(this).toggleClass('tabActive');
	})
})