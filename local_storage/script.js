$(function() {
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $e = $(this),
        idx = $e.parent().index();

    $e.closest('nav').find('.active').removeClass('active');
    $e.addClass('active');
    $('#tabs article').hide().eq(idx).show();
    localStorage.setItem('active_nav', idx);
  });

  $('ul').on('change', ':radio', function(e) {
    var color = $(this).val();
    $(document.body).css('background-color', color);
    localStorage.setItem('color', color);
  });

  $(window).unload(function() {
    localStorage.setItem('note', $('textarea').val());
  });

  setActiveNav(localStorage.getItem('active_nav'));
  setBgColor(localStorage.getItem('color'));
  setNode(localStorage.getItem('note'));
});

function setBgColor(color) {
  if (color === null) { return; }
  $('[value="' + color + '"]').prop('checked', true).change();
}

function setActiveNav(idx) {
  if (idx === null) { return; }
  $('nav a').eq(idx).click();
}

function setNode(note) {
  $('textarea').html(note);
}