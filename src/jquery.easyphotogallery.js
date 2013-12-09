;(function ($, window, undefiend) {
'use script';

var MODULE_NAME = 'Easyphotogallery';
var PLUGIN_NAME = 'easyphotogallery';
var Module;


/**
 * Module
 */
Module = function (element, options) {
	this.el = element;
	this.$el = $(element);
	this.options = $.extend({
	}, options);
};

(function (fn) {
	/**
	 * init
	 */
	fn.init = function () {
		this._prepareElms();
		this._eventify();
	};

	/**
	 * _prepareElms
	 */
	fn._prepareElms = function () {
		this.$photo = this.$el.find('[data-easyphotogallery-photo]');
		this.$thumb = this.$el.find('[data-easyphotogallery-thumb]');
	};

	/**
	 * _eventify
	 */
	fn._eventify = function () {
		var _this = this;
		this.$thumb.on('click mouseenter', function (e) {
			var $this = $(this);
			e.preventDefault();
			_this.$photo.attr('src', $this.attr('href'));
			_this.$thumb.removeClass('current');
			$this.addClass('current');
		});
	};

})(Module.prototype);


// set jquery.fn
$.fn[PLUGIN_NAME] = function (options) {
	return this.each(function () {
		var module;
		if (!$.data(this, PLUGIN_NAME)) {
			module = new Module(this, options);
			$.data(this, PLUGIN_NAME, module);
			module.init();
		}
	});
};

// set global
$[MODULE_NAME] = Module;

})(jQuery, this);
