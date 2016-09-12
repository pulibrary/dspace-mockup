$('.community-list ul').hide();

$('.media.well').click(function() {
    $(this).find('ul').slideToggle();
});

$('.carousel').carousel({
  interval: 4000
});
