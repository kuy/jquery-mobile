/*
* jQuery Mobile Framework : prototype for "dialog" plugin.
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: Code is in draft form and is subject to change 
*/
(function($){
$.fn.dialog = function(options){
	return $(this).each(function(){		
		$(this)
			.addClass('ui-dialog ui-body-a')
			.find('.ui-header')
			.addClass('ui-corner-top ui-overlay-shadow')
			.end()
			.find('.ui-content,.ui-footer')
				.last()
				.addClass('ui-corner-bottom ui-overlay-shadow');
	});
};
})(jQuery);