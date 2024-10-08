$(window).scroll(function () {
  var posY = window.pageYOffset;

  $("#bloque2").css({ top: -50 - posY / 3 + "px" });
  $("#empresas").css({ "margin-left": -100 + posY / 3.3 + "%" });

  if (posY > $("#bloque2").offset().top) {
    $("#empresas").css({ margin: "auto" });
  }
  $("#logros").css({ "margin-left": 200 - posY / 5.7 + "%" });

  if (posY > $("#bloque3").offset().top) {
    $("#logros").css({ margin: "auto" });
  }
});
