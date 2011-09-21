$(function() {
	$("#select-language").click(function(){ 
		$(this).toggleClass("active");
		$("#languages").toggle();
		return false;
	});
});