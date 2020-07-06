$(document).ready(function(){
  "use strict";
	
$("#logo").click(function(){
	$(this).toggleClass("rotate");
	$("#nav").toggleClass("collapse").toggleClass("expand");
});	
	
$(".thumb").click(function(){
	$("#shadowBox").fadeToggle("display");
	$("#fullsize").fadeToggle("display");
	var imgUrl = $(this).data('rel');
    $("#fullsize").html("<img src='" + imgUrl + "' alt='description' />");
});
	
$("#shadowBox").click(function(){
	$(this).fadeToggle("display");
	$("#fullsize").fadeToggle("display");
});
	
});