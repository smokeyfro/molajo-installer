$(function() {
	// Toggle the languages drop down
	$("#select-language").click(function(){ 
		$(this).toggleClass("active");
		$("#language ul").toggle();
		return false;
	});
	
	// Switch the selected language text and class
	var langClass;
	$("#language li a").click(function () {
		langClass = $(this).parent().attr("class");
		$('#language span strong').replaceWith( '<strong class="'+langClass+'">' + $(this).text() + '</strong>' );
	});
	
	// Inline labels
	$('input[title]').each(function() {
	 if($(this).val() === '') {$(this).val($(this).attr('title'));}
	 
	 $(this).focus(function() {
	  if($(this).val() === $(this).attr('title')) {$(this).val('').addClass('focused');}
	 });
	 
	 $(this).blur(function() {
	  if($(this).val() === '') {$(this).val($(this).attr('title')).removeClass('focused');}
	 });
	});
});