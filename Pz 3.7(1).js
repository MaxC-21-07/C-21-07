
$(document).ready(function () {
    $('p').text('Змінений текст');
    $('#task1').addClass('highlight');
    $('li').addClass('list-item');
    $('.highlight').css('color', 'red');
    $('.list-item').css('background-color', 'lightgray');
    $('.highlight').fadeIn();
    $('#task1 p:last-child').text('Новий останній текст');
    $('<button id="removeListItems">Remove List Items</button>').appendTo('body');
    $('#removeListItems').click(function () {
        $('.list-item').remove();
    });
});
