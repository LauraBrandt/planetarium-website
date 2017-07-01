$(document).ready(function() {
    // keep navbar items the same width even when hovering
    var widths = {};
    $(".nav li").each(function(i) {
        var w = $(this).innerWidth();
        widths[i] = w;
    });
    
    $(".nav li").hover(
        function() {
            var index = $(this).index(".nav li");
            $(this).width(widths[index]);
        },
        function() {
            var index = $(this).index(".nav li");
            $(this).width(widths[index]);
            $(this).children("a").css({ "padding-left": "0", "padding-right": "0" });
        });
});
