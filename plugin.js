(function($) {

    $.fn.target = function($par) {

        var $targetArray = ['_blank', '_self', '_parent', '_top'];

        var $target = jQuery.trim($(this).attr('target'));

        if (($target == undefined) || ($target == '') || (jQuery.inArray($target, $targetArray) != -1)) {

            $(this).attr('target', $par);

        }
    }

}) (jQuery);