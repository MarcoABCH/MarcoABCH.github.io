$(window).load(function () {
  $("#preload").delay(350).fadeOut("slow");
  $("body").delay(350).css({ "overflow-y": "scroll" });
});

var cargaObj = $("img");
var numCarga = 0;
var porcionPorcentaje = 0;

for (var i = 0; i < cargaObj.length; i++) {
  $(cargaObj[i]).load(function () {
    numCarga++;

    porcionPorcentaje = 100 / cargaObj.length;

    $("#porcentajeCarga").html(parseInt(porcionPorcentaje * numCarga) + " %");
    $("#rellenoCarga").css({ width: porcionPorcentaje * numCarga + "%" });
  });
}

$(document).mousemove(function (e) {
  var posX = e.clientX / 100;

  $("#bisoft").css({ left: 30 + posX / 2 + "%" });
  $("#ley").css({ left: 10 + posX / 2 + "%" });
  $("#adsum").css({ left: 10 + posX / 2 + "%" });
  $("#chubb").css({ left: 10 + posX / 2 + "%" });
  $("#sygno").css({ right: 10 - posX / 2 + "%" });
  $("#azzule").css({ right: 10 + posX / 2 + "%" });
  $("#amauta").css({ right: 10 + posX / 2 + "%" });
  $("#coppel").css({ left: 10 - posX / 2 + "%" });
  $("#pymasa").css({ left: 10 - posX / 2 + "%" });
});

$(window).scroll(function () {
  var posY = window.pageYOffset;

  $("#bloque2").css({ top: -180 - posY / 3 + "px" });
  $("#bisoft").css({ top: -250 + posY / 5 + "px" });
  $("#empresas").css({ "margin-left": -100 + posY / 3.3 + "%" });

  if (posY > $("#bloque2").offset().top) {
    $("#empresas").css({ margin: "auto" });
  }

  $("#logros").css({ "margin-left": 200 - posY / 5.7 + "%" });

  if (posY > $("#bloque3").offset().top) {
    $("#logros").css({ margin: "auto" });
  }
});

$("nav#botonera ul li a").click(function (e) {
  e.preventDefault();

  var href = $(this).attr("href");

  $(href).animatescroll({
    easing: "easeOutBounce",
    scrollSpeed: 2000,
  });
});

$.scrollUp({
  scrollText: "",
  scrollSpeed: 2000,
  easingType: "easeOutBounce",
});

$("nav#botonesGrupo ul li").click(function () {
  $("#empresas").animate({ height: 0 }, 500, "easeInBack");
  $("#empresas").animate({ width: 0 }, 500, "easeInBack");
  $("#empresas").animate({ height: 400 }, 800, "easeOutBounce");
  $("#empresas").animate({ width: 770 }, 800, "easeOutBounce");

  var enlace = $(this).attr("enlace");

  $("#empresas img").hide(300);
  $(enlace).delay(1000).show(100);
});

$(".flexslider").flexslider({
  randomize: true,
  slideshowSpeed: 3000,
  animation: "slide",
});

$("ul#capacidades li a").fancybox({
  openEffect: "elastic",
  closeEffect: "elastic",
  openSpeed: 150,
  closeSpeed: 150,
  helpers: { title: { type: "inside" } },
});

var consulta = $("table").DataTable();

$("input[type='search']").keyup(function () {
  consulta.search($(this).val()).draw();
});

$("#bloque5 button").click(function () {
  $("#bloque5 form").slideToggle("fast");
});
