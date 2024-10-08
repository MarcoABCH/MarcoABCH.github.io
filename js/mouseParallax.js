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
