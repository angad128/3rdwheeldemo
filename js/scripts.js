$(document).ready(function(){
	
	setBindings();
	/*
    $("#Login").click(function(){
        $("#myModal").modal();
    });
   
    $("#signup").click(function(){
		 $("#myModal1").modal();
		 $("#myModal").modal("hide");
	});
	 */
	
$('.bxslider').bxSlider({
    slideWidth: 540,
	minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 20
  });
  
});

function setBindings(){
		
	$("#FAQs").on('click', function(e){  
	e.preventDefault();
    $path=$(".FAQs").offset().top;
    $("body").animate({scrollTop:$path},1500);
  });
  
    $("#How").on('click', function(e){
	e.preventDefault();
    $path=$(".How").offset().top;
      $("body").animate({scrollTop:$path},1500);
  });
  
    $("#Repair").on('click', function(e){  
	e.preventDefault();
    $path=$(".Repair").offset().top;
      $("body").animate({scrollTop:$path},1500);
  });
  
    $("#Servicing").on('click', function(e){ 
	e.preventDefault();
    $path=$(".Servicing").offset().top;
      $("body").animate({scrollTop:$path},1500);
  });
}

