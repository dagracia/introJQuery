//esconder el mensaje
//jQuery(".advertencia").hide();

//mostrar el mensaje lentamente  usamos el atajo $
//$(".advertencia").show("slow");


/*function enviarAdvertencia(){
	jQuery(".advertencia").hide().show("slow");
}

//le pasamos al handler la funcion  sin parentesis
$(document).ready(enviarAdvertencia);*/

//1 esconder el spoiler
$(".spoiler span").hide();

//2 agregar el boton 
$(".spoiler").append("<button>Mostrar Spoiler</button>");

//cuando se presiona el boton
$(".spoiler button").click(function(){
	//3.1 mostrar el spoiler
	$(".spoiler span").show();

	//deshacerse del boton
	$(this).remove();
})

function enviarAdvertencia(){
	jQuery(".spoiler").hide().show("slow");
}

//le pasamos al handler la funcion  sin parentesis
$(document).ready(enviarAdvertencia);