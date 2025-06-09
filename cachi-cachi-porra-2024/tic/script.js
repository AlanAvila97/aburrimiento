
function random() {
    var randCode=Math.random().toString(36).substring(2, 5).toUpperCase();
    $('#clave').val(randCode);
}

$(".joingame").on('click', function() {
    random();
});


window.onload=random;