$(document).ready(function() {
    $(".showaccount").on("click", function(avatar){
        $(".panel").show();
        avatar.stopPropagation();
    });
    
    $(".showaccount").on("click", function(avatar){
        avatar.stopPropagation();
    });
    
    $(document).on("click", function(){
        $(".panel").hide();
        avatar.stopPropagation();
    });

    // $('.showaccount').on("click", function() {
    //     //toggle css class by click
    //     $('.panel').toggleClass('active');
    //     return false;
    //   });
    //   $(document).on("click", function(avatar) {
    //     if ($(avatar.target).closest('.panel').length === 0) {
    //       $('.panel').removeClass('active');
    //     }
    //   });
 
});