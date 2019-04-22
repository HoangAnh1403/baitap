$(document).ready(function(){
	
	var slideCount = $('#slider ul.slides-list li').length;
	var slideWidth = $('#slider ul.slides-list li').width();
	var slideHeight = $('#slider ul.slides-list li').height();
    var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul.slides-list').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul.slides-list li:last-child').prependTo('#slider ul');


    function moveLeft() {
        $('#slider ul.slides-list').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul.slides-list li:last-child').prependTo('#slider ul.slides-list');
            $('#slider ul.slides-list').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul.slides-list').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul.slides-list li:first-child').appendTo('#slider ul.slides-list');
            $('#slider ul.slides-list').css('left', '');
        });
    };


    $('a.control_prev').on("click", function() {
        moveLeft();
    });

    $('a.control_next').on("click", function() {
        moveRight();
    });

    // var triggers = $('ul.triggers li');
    // var images = $('#slider .slides-list li');
    // var lastElem = triggers.length-1;
    // var mask = $('#slider .slides-list');
    // var imgWidth = images.width();
    // var target;

    // triggers.first().addClass('selected');
    // mask.css('width', imgWidth*(lastElem+1) +'px');

    // function sliderResponse(target) {
    //     mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
    //     triggers.removeClass('selected').eq(target).addClass('selected');
    // }

    // triggers.click(function() {
    //     if ( !$(this).hasClass('selected') ) {
    //         target = $(this).index();
    //         sliderResponse(target);
    //         resetTiming();
    //     }
    // });

    // $('.control_next').click(function() {
    //     target = $('ul.triggers li.selected').index();
    //     target === lastElem ? target = 0 : target = target+1;
    //     sliderResponse(target);
    //     resetTiming();
    // });

    // $('.control_prev').click(function() {
    //     target = $('ul.triggers li.selected').index();
    //     lastElem = triggers.length-1;
    //     target === 0 ? target = lastElem : target = target-1;
    //     sliderResponse(target);
    //     resetTiming();
    // });

    // function sliderTiming() {
    //     target = $('ul.triggers li.selected').index();
    //     target === lastElem ? target = 0 : target = target+1;
    //     sliderResponse(target);
    // }

    // var timingRun = setInterval(function() { sliderTiming(); },5000);
    // function resetTiming() {
    //     clearInterval(timingRun);
    //     timingRun = setInterval(function() { sliderTiming(); },5000);
    // }

})