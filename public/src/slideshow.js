var imageSources = [
    "images/slideshow/frontsign.jpg",
    "images/slideshow/insideplanetarium.jpg",
    "images/slideshow/planetwave.jpg",
    "images/slideshow/planetariumpeople.jpg",
    "images/slideshow/sunspots.jpg",
    "images/slideshow/curiosityimage.jpg",
    "images/slideshow/sciencecenter.jpg",
    "images/slideshow/flume.jpg",
    ];

$(document).ready(function() {
    // populate slides with images from array
    var imgHTML = "";
    for(var j=0; j<imageSources.length; j++) {
        imgHTML += "<div class='slide'><img src='" + imageSources[j] + "'></div>";
    }
    $("#slides").html(imgHTML);
    $("#slides div:first-child").addClass("showing");

    var slides = document.querySelectorAll('.slide');

    // center all images and create dots at bottom
    var dotsHTML = "";
    for (var i=0; i<slides.length; i++) {
        center(i);
        dotsHTML += "<span class='dot' id='" + i + "'></span>";
    }
    $("#dots").html(dotsHTML);
    $("#0").addClass("active");
    
    function center(i) {
        //console.log("centering slide", i);
        var curr = slides[i];
        var imgs = curr.getElementsByTagName("img");
        imgs[0].onload = function() {
            centerImage(imgs[0], curr);
        };
    }
    function centerImage(img, slide) {
        var containerWidth = $('#slideshow-container').innerWidth();
        var containerHeight = $('#slideshow-container').innerHeight();
        //console.log("container dimensions:" , containerWidth, containerHeight);
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        //console.log(w, h, img.width, img.height);
        if (w<containerWidth && h<containerHeight) {  // smaller than the container
            var left = ((containerWidth-w)/2.0).toFixed(0) + "px";
            var top = ((containerHeight-h)/2.0).toFixed(0) + "px";
            slide.style.left = left;
            slide.style.top = top;
        } else if ((w/h)>(containerWidth/containerHeight)) {  // larger than container; when resized it's full width but less than full height
            var new_h = containerWidth*h/w;
            var top = ((containerHeight-new_h)/2.0).toFixed(0) + "px";
            slide.style.top = top;
        } else if ((w/h)<(containerWidth/containerHeight)) {  // larger than container; when resized it's full height but less than full width
            var new_w = containerHeight*w/h;
            var left = ((containerWidth-new_w)/2.0).toFixed(0) + "px";
            slide.style.left = left;
        }
    }
    
    var currentSlide = 0;

    // start animation
    var slideInterval = setInterval(nextSlide,4000,1);

    
    // functions and events

    function nextSlide(n) {
        if (currentSlide+n < 0){
            currentSlide = slides.length-1;
        } else {
            currentSlide = (currentSlide+n)%slides.length;
        }
        showSlide();
    }
    
    function showSlide() {
        $("#dots").find(".dot").removeClass("active");
        $("#dots").find("#"+currentSlide).addClass("active");
        for (var i=0; i<slides.length; i++) {
            slides[i].className = 'slide';
        }
        slides[currentSlide].className = 'slide showing';
    }

     $("#next").click(function(){
        nextSlide(1);
    });
    
    $("#prev").click(function(){
        nextSlide(-1);
    });
    
    $(".dot").click(function(){
        $(".dot").removeClass("active");
        $(this).addClass("active");
        currentSlide = Number($(this).attr("id"));
        showSlide();
    });
    
    var playing = true;
    $("#pause").click(function() {
        if (playing) {
            playing = false;
            clearInterval(slideInterval);
            $(this).html("<i class='fa fa-play' aria-hidden='true'></i>");
        } else {
            playing = true;
            slideInterval = setInterval(nextSlide,4000,1);
            $(this).html("<i class='fa fa-pause' aria-hidden='true'></i>");
        }
    });
    
    $(window).resize(function(){
        for (var i=0; i<slides.length; i++) {
            //console.log("centering slide", i);
            var curr = slides[i];
            var imgs = curr.getElementsByTagName("img");
            centerImage(imgs[0], curr);
        }  
    });

});