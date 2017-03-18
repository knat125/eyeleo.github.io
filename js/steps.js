$(document).ready(function(){
	function showSteps() {
		$('.step').css('display', 'none');
		var timeout = 1000;
		for (var i = 1; i < 7; i++) {
			setTimeout((function (N){
	            return function() {
	                $('.step-' + N).show();
	            }
	        })(i), timeout);
			timeout += 500;
		}
		setTimeout(showSteps, 4000);
	}
	setTimeout(showSteps, 500);
})