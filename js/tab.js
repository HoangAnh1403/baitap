$(document).ready(function(){
	
	$(".tab-list").on("click", ".tab-title", function(e) {
        e.preventDefault();
        
        $(".tab-title").siblings().removeClass("active");
        $(".tab-content").siblings().removeClass("show");
        $(this).addClass("active");
        $($(this).attr("href")).addClass("show");
        
    });

})