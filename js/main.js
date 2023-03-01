$(document).ready(function () {
    let btnMenuMobile = $(".btn-menumobile");
    $(btnMenuMobile).on('click', function() {
        $('.menu ul').toggleClass('open');
    })
})