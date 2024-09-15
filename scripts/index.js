$(document).ready(function() {
    let header = $(".header-navigation");
    

    $('.error-input').hide();

    $(".question-inside").on("click", function() {
    if ($(this).next(".question-description").hasClass("question-description__active")) {
        $(this).next(".question-description").slideUp(300);
        $(this).next(".question-description").removeClass("question-description__active");
        $(this).children(".arrow").removeClass("arrow__active");
        $(this).removeClass("question-inside__active");
        
    } 
    else { 
        $(this).next(".question-description").slideDown(300);
        $(this).next(".question-description").addClass("question-description__active");
        $(this).children(".arrow").addClass("arrow__active");
        $(this).addClass("question-inside__active");

    }});

    $(".check-input").on("keyup", function() {
        $(this).removeClass("check-input__err")
        $(this).next(".error-input").hide();
        $(this).next(".error-input").text("")  
        });

    $('#checkboxCheck').change(function() {
        $('#submit-btn').attr('disabled', $('#checkboxCheck:checked').length == 0);
        if ($('#checkboxCheck:checked').length == 0 && !$('#submit-btn').hasClass("check-btn")) {
            $('#submit-btn').addClass("check-btn");
        } else {
            $('#submit-btn').removeClass("check-btn");
        }
     });

     if(!$('.error-input').text().length === 0) {
        $('.error-input').show();
      }

    $(document).on('click', function(e) {
    if ($('.burger-menu').is(e.target)) {
        if ( !header.hasClass('header-navigation__active') ) {
            header.addClass('header-navigation__active');
            header.css({ display: 'flex'})
        } else if ( header.hasClass('header-navigation__active') ) {
            header.removeClass('header-navigation__active');
            header.css({ display: 'none'})
        }
    } else if (header.hasClass('header-navigation__active')) {
        header.removeClass('header-navigation__active');
        header.css({ display: 'none'})
    }});

    if ($('#participate-id').css('display') == 'none') {
        $("#participate-link").attr("href", "#participate-mobile__id");
    }
})

