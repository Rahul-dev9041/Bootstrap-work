$(document).ready(function(){
  $(window).scroll(function(){
var scroll = $(window).scrollTop();
if(scroll < 200){
$('.fixed-top').css('background', 'rgba(14, 161, 149, 0.56)');
} else{
$('.fixed-top').css('background', '#0ea195');
}
});
});