$(document).ready(function() {
    // $(".showaccount").on("click", function(avatar){
    //     $(".panel").show();
    //     avatar.stopPropagation();
    // });
    
    
    // $(document).on("click", function(){
    //     $(".panel").hide();
    //     avatar.stopPropagation();
    // });

    $('.showaccount').on("click", function() {
        $('.panel').toggleClass('active');
        return false;
    });

    $(document).on("click", function(avatar) {
        if ($(avatar.target).closest('.panel').length === 0) {
          $('.panel').removeClass('active');
          avatar.stopPropagation();
        }
    });
 
});