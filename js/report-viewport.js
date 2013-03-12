	function reportSizes() {
		var vpw = $(window).width();
		var vph = $(window).height();
		var fs = $('body').css('font-size');
		var fspx = parseInt(fs);
		var wem = vpw / fspx;
		var hem = vph / fspx;

		$('#viewport').html('<p>Viewport size (px) : ' + vpw + ' x ' + vph + '</p>');
		$('#viewport').append('<p>Viewport size (ems) : ' + wem + ' x ' + hem + '</p>');
		$('#textsize').html('<p>Base text size: ' + fs + '</p>');
	
	}
	
	$(window).ready(function() {
		reportSizes();
	});
	
	$(window).resize(function() {
		reportSizes();
	});
