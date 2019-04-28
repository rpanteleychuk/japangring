$('#my_form').submit(function(){
    $.post(
        'post.php', // адрес обработчика
        $("#my_form").serialize(), // отправляемые данные

        function(msg) { // получен ответ сервера
            $('#my_form').hide('slow');
            $('#my_message').html(msg);
        }
    );
    return false;
});

$('#my_form1').submit(function(){
    $.post(
        'post.php', // адрес обработчика
        $("#my_form1").serialize(), // отправляемые данные

        function(msg) { // получен ответ сервера
            $('#my_form1').hide('slow');
            $('#my_message1').html(msg);
        }
    );
    return false;
});