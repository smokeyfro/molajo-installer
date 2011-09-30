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
	$("label.inlined + input.input-text").each(function (type) {
		Event.observe(window, 'load', function () {
			setTimeout(function(){
				if (!input.value.empty()) {
					input.previous().addClassName('has-text');
				}
			}, 200);
		});
		$(this).focus(function () {
			$(this).prev("label.inlined").addClass("focus");
		});
		$(this).keypress(function () {
			$(this).prev("label.inlined").addClass("has-text").removeClass("focus");
		});
		$(this).blur(function () {
			if($(this).val() == "") {
				$(this).prev("label.inlined").removeClass("has-text").removeClass("focus");
			}
		});
	});
});