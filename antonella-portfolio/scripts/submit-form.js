$(document).ready(function () {
    // FORM SUBMIT start
    var form = $('form');

    function submitForm(event) {
        event.preventDefault();
        var data = {
            name: form.find('input[name="name"]').val(),
            email: form.find('input[name="email"]').val(),
            message: form.find('textarea[name="message"]').val(),
        }

        if (data.name, data.email, data.message) {
            $.ajax({
                url: '../scripts/submit-form.php',
                data: data,
                method: 'POST',
                success: function () {
                    form.css('display', 'none');
                    $('.success-message').css('display', 'block');
                },
            });
        }
    }

    form.on('submit', submitForm);
    // FORM SUBMIT end
});