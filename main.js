$( document ).ready(function() {
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });

    $("#registration").on("submit", function(e) {
        e.preventDefault();
        $("#registration").addClass("was-validated");    
        var name = $("#name").val().trim();
        var surname = $("#surname").val().trim();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        var confPassword = $("#confPassword").val().trim();

        if(name == "") {
            $("#errorMess").text("Введите имя");
        return false;
        } else if(surname == "") {
            $("#errorMess").text("Введите фамилию");
        return false;
        } else if(email == "") {
            $("#errorMess").text("Введите email");
        return false;
        } else if(password.length < 6) {
            $("#errorMess").text("Введите пароль не менее 6 символов");
        return false;
        } else if(confPassword.length < 6) {
            $("#errorMess").text("Повторите пароль");
        return false;
        }

        $("#errorMess").text("");

    });
});    