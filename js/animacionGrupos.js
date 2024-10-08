$("nav#botonesGrupo ul li").click(function () {
  $("#empresas").animate({ height: 0 }, 500, "easeInBack");
  $("#empresas").animate({ width: 0 }, 500, "easeInBack");
  $("#empresas").animate({ height: 400 }, 800, "easeOutBounce");
  $("#empresas").animate({ width: 770 }, 800, "easeOutBounce");

  var enlace = $(this).attr("enlace");

  $("#empresas img").hide(300);
  $(enlace).delay(1000).show(100);
});
