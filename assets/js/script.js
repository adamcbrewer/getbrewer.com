/**
 * Author: Adam Brewer
 *
 */
;(function(window, document, $, undefined){

    'use strict';

    /**
     * Name-spacing
     *
     * Here we have to specifially define which
     * objects belong in the global object
     *
     */
    var Site = {
        basePath: document.body.getAttribute('data-base-url'),
        userAgent: navigator.userAgent,
        platform: navigator.platform
    };
    window.Site = Site;


    /**
     * Touch feature detection
     *
     */
    (function (h) {
        h.className = h.className.replace('no-js', 'js');
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch) {
            h.className += ' touch';
            window.Site.touch = true;
        }
    })(document.documentElement);


	/**
	 * User-agenct data-attributes
	 *
	 * Add a data-attribute of the user-agent to <html> - very useful and worthwhile
	 * Target with: html[data-useragent*="Chrome/13.0"][data-platform="Win32"]
	 *
	 */
	var b = document.documentElement;
	b.setAttribute("data-useragent", Site.userAgent);
	b.setAttribute("data-platform", Site.platform);


    /**
     * Smooth scrolling
     *
     */
	$('.js-smoothscroll').smoothScroll({
        offset: 1,
        preventDefault: true,
        easing: 'easeInOutExpo',
        speed: 900,
        afterScroll: function() {
            window.location.hash = this.hash || '';
        }
    });


    /**
     * Affix the nav
     *
     */
    if (!Site.touch) {
        $('.js-affix').affix({
            offset: {
                top: 400
            }
        });
    }


    /**
     * Current nav state when scrolling
     *
     */
    $('body').scrollspy({
        offset: 67
    });


    /**
     * Easter egg
     *
     */
    var konami = function(f,a){document.onkeyup=function(e){/113302022928$/.test(a+=[((e||self.event).keyCode-37)])&&f()}}
    konami(egg);

    function egg() {
        $('.js-adam').attr('src', Site.basePath + 'assets/img/min/stimpy.jpg');
        $('.js-jake').attr('src', Site.basePath + 'assets/img/min/ren.jpg');

        var audio = document.createElement('audio');
        audio.src = Site.basePath + "assets/audio/ren-stimpy.mp3";
        document.body.appendChild(audio);
        audio.play();

        $(document).on('keyup', function (evt) {
            if (evt.keyCode === 27) {
                if (audio) audio.parentNode.removeChild(audio);
            }
        });
    }

    console.info('Hello developers! Full source available @ https://github.com/adamcbrewer/getbrewer.com');

}(window, document, jQuery));
