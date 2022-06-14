//Este script cambia el color del botón de la sección elegida

var parametros = new URLSearchParams(window.location.search)

var categoria = parametros.get('category');

if (categoria != null){
	$('.botonPersonalizado[nombre='+categoria+']').addClass('activo');
	$('#tituloCategoria').html('<img src="/images/'+categoria+'.png" > '+categoria);

	if(categoria != 'all'){
		$('title').html('Hi Video - '+categoria);
	}
}




