$(document).ready(function () {
    $('select').formSelect();

    //Datepicker
    var options = {
        format: 'mmm/yyyy',
        autoClose: true,
        showClearBtn: true,
        maxDate: new Date(),
    }
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);

    //Reviews Toggle
    $('.reviews-hide').click(function () {
        if($('.reviews-hide i').hasClass('fa-minus')){
            $('.review-list').slideUp(750);
            $('.reviews-hide i').removeClass('fa-minus');
            $('.reviews-hide i').addClass('fa-plus');
        }
        else{
            $('.review-list').slideDown(750);
            $('.reviews-hide i').removeClass('fa-plus');
            $('.reviews-hide i').addClass('fa-minus');
        }
    })

    //Add post graduation and work experience
    $('#add-post-grad').click(function () {
        $('.all-post-grad').append($('.form-post-grad').html());
    })
    $('#add-work-ex').click(function () {
        $('.all-work-ex').append($('.form-work-ex').html());
    })



});

