$(function() {
	$("#select-language").click(function(){ 
		$(this).toggleClass("active");
		$("#language ul").toggle();
		return false;
	});
	
	var langClass;
	$("#language li a").click(function () {
		langClass = $(this).parent().attr("class");
		$('#language span strong').replaceWith( '<strong class="'+langClass+'">' + $(this).text() + '</strong>' );
	});
});