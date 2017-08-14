export function preloader() {
	this.show = function() {
		if ($('#vicoders-preloader').length === 0) {
			var preloader = $('<div id="vicoders-preloader"><div class="vicoders-preloader-bg"><div class="progress"><div class="indeterminate"></div></div></div></div>');
			$('body').append(preloader);
		}
	};

	this.hide = function() {
		if ($('#vicoders-preloader').length > 0) {
			$('#vicoders-preloader').remove();
		}
	};
}