$(function () {
    $('#submit').on('click', function () {
        $.ajax({
            type: 'POST',
            url: '/ajax/login.php',
            dataType: 'json',
            data: {
                email: $('#email').val(),
                password: $('#password').val()
            },
            success:function (data) {
                var result = $('#result');
                if(data.type === 'success') {
                    $('<div>').css('color', 'green').html(data.message).appendTo(result);
                } else {
                    $('<div>').css('color', 'red').html(data.message).appendTo(result);
                }

            },
            error:function (data) {
                console.log(data);
                alert('something went wrong, pls check some field.');
            }
        });
    });
});