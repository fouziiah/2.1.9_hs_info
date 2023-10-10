$('document').ready(function(){
    $('tr th').css('font-size', '20px');
    $('tr th').css('font-style', 'italic');


    $('tr td:nth-child(odd)').css('background-color', 'lightblue');
    $('tr td:nth-child(even)').css('background-color', 'orange');
})