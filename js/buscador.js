var consulta = $("table").DataTable();

$("input[type='search']").keyup(function(){

	consulta.search($(this).val()).draw();

})