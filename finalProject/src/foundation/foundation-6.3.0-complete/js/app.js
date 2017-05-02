$(document).foundation()

document.querySelector('myheading');
var heading = jQuery('.myheading');
var color;
$('.square').click(function(){
	$(this).css('background-color',color);
});
$(".button").click(function(){
	color = $(this).text();
  console.log(color);
});
$("#text").keyup(function(){
          $("#heading").text($(this).val());
        });