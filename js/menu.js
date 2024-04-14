$(function(){
    $(document).on('click', '#arrow', function(){
        $('#menuPion').slideDown(300);
        $(this).replaceWith('<li id="x"><span>&#120;</span></li>');
    });

    $(document).on('click', '#x', function(){
        $('#menuPion').slideUp(300);
        $(this).replaceWith('<li id="arrow"><span>&#10163;</span></li>');
    });
})