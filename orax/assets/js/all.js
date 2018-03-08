function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 100, //required min distance traveled to be considered swipe
    restraint = 200, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){};
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
        //e.preventDefault();
    }, false);
  
    touchsurface.addEventListener('touchmove', function(e){
        //e.preventDefault(); // prevent scrolling when inside DIV
    }, false);
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime){ 
            if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ 
                swipedir = (distY < 0)? 'up' : 'down'; 
            }

            console.log(Math.abs(distY), swipedir);
        }
        handleswipe(swipedir);
    }, false);
}

//Ripple
var Ripple = {
    init: function(){
        var el = document.querySelectorAll('[ripple]');
        //console.log(el);
        Array.prototype.forEach.call(el, function(b){
            b.addEventListener('click', Ripple.addRipple);
        });
    },
    addRipple: function(e){
        var ripple = document.createElement("ripple");
        d = Math.max(this.clientWidth, this.clientHeight);
        ripple.style.height = ripple.style.width = d+'px';
        ripple.style.left = e.offsetX - d/2+'px';
        ripple.style.top = e.offsetY - d/2+'px';
        this.appendChild(ripple);
        window.setTimeout(function(){ripple.remove();}, 600);
    }
};

$(function(){
    //slides
    var el = document.getElementById('slide-container');

    swipedetect(el, function(swipedir){
    //swipedir contains either "none", "left", "right", "top", or "down"
        if (swipedir =='up')
            changeSlideOnSwipe(1);
        else if(swipedir == 'down')
            changeSlideOnSwipe(-1);
    });

    var slides = {
        currentSlide : 0,
        totalLength: $('.slide').length,
        prevSlide: -1,
        eventFired: false,
        dir: 'up',
        init: function(){
            $('.slide-container').css({
                'width': $(window).innerWidth()+"px",
                'height': $(window).innerHeight()+"px",
            });
        },
        changeSlide: function() {
            $('.slide').removeClass("slide-out fade-up fade-down");
            if(slides.prevSlide != -1 && slides.dir == 'up')
                $('.slide[data-slide-index="'+slides.prevSlide+'"]').addClass('slide-out fade-up');
            else if(slides.prevSlide != -1 && slides.dir == 'down')
                $('.slide[data-slide-index="'+slides.prevSlide+'"]').addClass('slide-out fade-down');
            //console.log(slides.currentSlide);
            $(".slide").removeClass("active");
            $('.slide-toggle-button span').removeClass("active");
            //console.log(slides.currentSlide);
            //add relevent transition by comparing final and initial slides 
            if(slides.dir == 'up') {
                $('.slide[data-slide-index="'+slides.currentSlide+'"]').addClass("active fade-up");
            $('[data-toggle-button="'+slides.currentSlide+'"]').addClass("active");
            }else if(slides.dir == 'down') {
                $('.slide[data-slide-index="'+slides.currentSlide+'"]').addClass("active fade-down");
                $('[data-toggle-button="'+slides.currentSlide+'"]').addClass("active");
            }

            slides.prevSlide = slides.currentSlide;
            //window.setTimeout(function() {$('.slide[data-slide-index="'+slides.prevSlide+'"]').removeClass('slide-out');}, 1000);

            //remove logo in header if on 1st slide 
            if(slides.currentSlide == 0) {
                $('header .logo-holder img').css({
                    'transition': 'opacity .5s .3s linear',
                    'opacity': '0'
                });
            }else{
                $('header .logo-holder img').css({
                    'transition': 'opacity .5s .3s linear',
                    'opacity': '1'
                });
            }

            //if on present on home page and the slide is white chnage logo to white
            if(window.location.pathname == "/" && slides.currentSlide == 1) {
                $('.header-row').removeClass("keep-black").addClass('white-menu');
            }else {
                $('.header-row').addClass("keep-black").removeClass("white-menu");
            }
        }
    };

    //console.log($(window).innerHeight);

    function changeSlideOnSwipe(dir) {
        if(slides.currentSlide == 0 && dir < 0){
            slides.currentSlide = slides.totalLength - 1;
        }else {
            slides.currentSlide += dir;
            //console.log(slides.currentSlide, dir);
            slides.currentSlide %= slides.totalLength;
        }


        // set direction of slides
        if(dir < 0) {
            slides.dir = 'down';
        }else {
            slides.dir = 'up';
        }

        if(isNaN(slides.currentSlide)) {
            slides.currentSlide = 0;
        }
        slides.changeSlide();
    }

    $(document).keydown(function(e){
        //up
        if(e.which == 38 ){
            changeSlideOnSwipe(-1);
        }else if(e.which ==40) {
            changeSlideOnSwipe(1);
        }
        //console.log(e.which);
    });


    window.addEventListener("wheel", function(e) {
        if(e.deltaY < 0 && !slides.eventFired) {
            console.log("Scrolling up");
            changeSlideOnSwipe(-1);
            slides.eventFired = true;
            window.setTimeout(function(){slides.eventFired = false;}, 1000);
        }else if(e.deltaY > 0 && !slides.eventFired) {
            console.log("Scrolling down");
            changeSlideOnSwipe(1);
            slides.eventFired = true;
            window.setTimeout(function(){slides.eventFired = false;}, 1000);
        }
        //console.log(e.deltaY);
    });


    //buttons to switch slides
    $('.slide-toggle-button').html('');
    for(var i = 0;i < slides.totalLength; i++){
        console.log("entered");
        $('.slide-toggle-button').append("<span data-toggle-button='"+i+"'></span>");
    }
    eventListenerToButtons();
    //event listener based on click
    function eventListenerToButtons() {
        $('.slide-toggle-button span').click( function() {
            index = $(this).attr('data-toggle-button');
            slides.currentSlide = index;
            if(slides.prevSlide < slides.currentSlide)
                slides.dir = 'up';
            else
                slides.dir = 'down';
            slides.changeSlide();
        });
    }


    $(window).resize(function(){
        slides.init();
    });
    slides.init();
    slides.changeSlide();

    //header file
    $('#menu-toggle').click(function() {
        $('header').toggleClass("active");
    });
    $('.nav li a').hover(function(){
        var index = $(this).attr("data-site-nav-index");
        //console.log(index);
        $('.site-nav-slide[data-site-nav="'+index+'"]').toggleClass("active");
    });

    //for teams
    $('.member-card-holder').click(function(){
        if($(window).innerWidth() < 992) {
            console.log("Condition is : "+$(this).hasClass("active"));
            console.log($(this));
            if(!$(this).hasClass("active")){
                console.log("enter");
                $(this).find('.member-card').removeClass('mouse-in');
            }else {
                $(this).find('.member-card').addClass('mouse-in');
            }
            $('.member-card-holder').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.member-card').hover(function(){
        $(this).toggleClass("mouse-in");
        $(this).find(".later").removeClass('seen');
    });

    $('.details-toggler').click(function(){
        $(this).parent().next().addClass('seen');
    });
    var str = ["Consulting", " Automotive Products", " Trackers"," Products for DRDO", "New & Renewable Energy Products", " CAD/CAE, Product Development"];
  var anim;
  var pos = 0;
  function writeContentForward(index, message, time) {
    if(index <= message[pos].length) {
      $('#services').html(message[pos].substring(0, index)+"<span cl");
      index++;
      anim = window.setTimeout(function(){writeContentForward(index, message, time);}, time);
    }else {
      //console.log("entered", index);
      window.setTimeout(function(){deleteContent(index, message, time);}, 2000);
    }

  }

  function deleteContent(index, message, time) {
    if(index >= 0) {
      //console.log(index, prevIndex);
      $('#services').html(message[pos].substring(0, index));
      index--;
      anim = window.setTimeout(function(){deleteContent(index, message, time);}, time);
    }else {
      pos++;
      pos = pos % message.length;
      writeContentForward(index, message, time);
    }
  }
  //console.log(str);
  $('#services').html('');
  writeContentForward(0, str, 50);

  //services page
  //console.log($('.data-toggler'));
    $('[data-toggler="true"]').click(function(){
        var slide = $(this).attr('data-slide');
        $('a[data-slide="'+slide+'"]').removeClass("active");
        $(this).addClass("active");

        var contentIndex = $(this).attr('data-content-index');
        var _content = $('ul.sub-content[data-slide="'+slide+'"]');
        //var content;
        //console.log(_content.length, _content);
        $(_content).removeClass("active");
        for(var i = 0;i < _content.length; i++) {
            //console.log($(_content[i]).attr("data-content"));
            if($(_content[i]).attr("data-content") == contentIndex){
                $(_content[i]).addClass("active");
            }
        }

    });

    //keep revolving the active slides rotatory images

    function rotatorySlide() {

        var _slides = $('.slide.active').find('.images-rotator').find("[data-rotator-slide]");
        //console.log(_slides);
        for(var i = _slides.length - 1; i >= 0; i--) {
            var pos = $(_slides[i]).attr("data-rotator-slide");
            //console.log(pos);
            $(_slides[i]).removeClass("pos-"+pos);
            var updatedPos = (pos + 1) % _slides.length;

            if(updatedPos == 0) {
                $(_slides[i]).addClass("switch");
            }else{
                $(_slides[i]).removeClass("switch");
            }

            $(_slides[i]).addClass("pos-"+updatedPos);
            $(_slides[i]).attr("data-rotator-slide", updatedPos);


        }
        window.setTimeout(function(){rotatorySlide();}, 5000);

    }

    function setHeadingSize() {
        var reqWidth = 768;
        if($(window).innerWidth() <= reqWidth) {
            $('.data-toggler-heading').each( function(i, el) {
                var totalChildrenWidth = 0;
                var child = $(el).children();
                for(var i = 0; i < child.length; i++) {
                    totalChildrenWidth += parseInt($(child[i]).css('width').replace('px', ''));
                }
                totalChildrenWidth += 20;
                console.log(totalChildrenWidth);
                $(el).css({
                    "width": totalChildrenWidth+"px",
                });
            });
        }else {
            $('.data-toggler-heading').css({
                'width' : '100%',
            });
        }
    }

    function rotateSlide(index){
        $('.slide.active .rotator-slide-holder > div').removeClass('active');
        //console.log($('.rotator-slide-holder div').length);
        //console.log($('.slide.active .rotator-slide-holder > div:eq('+ (index % 3) +')'), index);
        index = index % $('.slide.active .rotator-slide-holder > div').length;
        $('.slide.active .rotator-slide-holder > div:eq('+ index +')').addClass("active");
        index++;
        if(isNaN(index)){
            index = 0;
        }
        window.setTimeout(function(){
            rotateSlide(index);
        }, 3000);
    }

    //rotatorySlide();
    // if device width is less than 768px make ul width to a certain size 
    $(window).resize(function(){
        setHeadingSize();
    });


    rotateSlide(0);
    setHeadingSize();

    //SEND MAIL USING AJAX

    $('#contact-form').submit(function(e){
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
            method : 'POST',
            url : '/mail.php',
            data: data
        }).done(function(data){
            if(data == 'error') {
                alert("Uable to send mail try again");
            }else if(data == 'success') {
                alert("mail sent successfully!");
            }
        });
    });

  //initiate Ripple
   Ripple.init();
})