$(function () {
  $(document).scroll(function () {
    var $nav = $(".desktop-nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
