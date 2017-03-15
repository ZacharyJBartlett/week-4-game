$('#red').click(function() {
    number2 = (Math.round(Math.random() * 11 - 0) + 1);
    $('#actual').append(number2);
});
$('#blue').click(function() {

    number3 = (Math.round(Math.random() * 11 - 0) + 1);
    $('#actual').append(number3);
});
$('#green').click(function() {

    number4 = (Math.round(Math.random() * 11 - 0) + 1);
    $('#actual').append(number4);
});
$('#yellow').click(function() {

    number5 = (Math.round(Math.random() * 11 - 0) + 1);
    $('#actual').append(number5);
});



var number1 = (Math.round(Math.random() * 101 - 0) + 19);
console.log(number1);

$("#display").html(number1);

if $('#actual') === number1 {

}