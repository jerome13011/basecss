$(document).ready(function()
{
  $.getJSON("http://jerome13011.github.io/basecss/main.json"), function()
{
}
});
$(window).scroll(function() {
if ($(this).scrollTop() > 2){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }}
  );
