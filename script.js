$(document).on("click", "#home--about--show--more", function(e) {
    e.preventDefault();
    var container = $('.home--about--container')
    var maxHeight = container.css("max-height").replace("px","");
    var scrollHeight = container[0].scrollHeight;
    if (maxHeight <= 500) {
        $('.home--about--overlay').hide();
        container.animate({
            maxHeight: scrollHeight,
        }, "slow" );
        $(this).html("Скрыть");
    } else {
        $('.home--about--overlay').show();
        container.animate({
            maxHeight: 500,
        }, "slow" );
        $(this).html("Показать всё");
    }
})