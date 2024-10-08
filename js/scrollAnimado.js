$("nav#botonera ul li a").click(function(e){

	e.preventDefault();

	var href = $(this).attr("href");

	$(href).animatescroll({

		easing: "easeOutBounce",
		scrollSpeed:2000

	});

})

$.scrollUp({

	scrollText:"",
	scrollSpeed: 2000,
	 easingType: "easeOutBounce"

});