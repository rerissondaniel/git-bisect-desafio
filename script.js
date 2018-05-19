$(function() {
	$('.btn-do-something').on('click', function() {
		$('.jumbotron').slideUp(200, function() {
			$('.marketing').fadeOut(200, function() {
				$('.jumbotron-part-two').fadeIn();
			});
		});
	});
});

$(function() {
	$('.btn-enough').on('click', function() {
		$('.marketing').slideUp(200, function() {
			$('.jumbotron').fadeIn(1000, function() {
                $('.marketing').fadeIn(200, function() {
                    $('.jumbotron-part-two').fadeOut(1000);
                });
			});
		});
	});
});