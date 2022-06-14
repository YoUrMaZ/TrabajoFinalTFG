function getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return 0;
    if (!results[2]) return 0;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function channelDetails(item) {


        let htmlBanner  = `
                <div 
			class="banner"
			style="
				background-position:center center;
				background-image:url(`+item.cover+`);
				background-size:cover;
				height:300px;
			"
		>
                        <!-- <img class="imgbanner" src="` + item.cover + `" > -->
                </div>
        `;

    let htmlDetalle =
        `
        <div class="row">
                <div class="col1">
                        <img src="` + item.main_thumbnail + `" class="imagenCanal">
                </div>
                <div class="col2">
                        <div>
                                <h2>` + item.title + `</h2>
                                <h4 style="color: darkgrey">`+item.seguidores+` seguidores</h4>
                        </div>
                </div>
        </div>
    `;


	$('#bannerCanal').append(htmlBanner);
	$("#canalDetallado").append(htmlDetalle);
	$('title').html('Hi Video - '+item.title);


}



function insertMosaicItem(index, page, item, category, idMosaic) {

    let html =
        `
            <div class="vid-list">
            `
        + "<a href='detalles.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.index + "'>" +
        `
        <img src="` + item.main_thumbnail + `" class="thumbnail3" alt="">
        </a>
            <div class="flex-div">
            `
            + "<a href='channel.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.direccion + "'>" +
        `
                <img src="${item.thumbnail_canal}" alt="imagenCanal">
            </a>

                <div class="vid-info">
                    <h3 style="color: black"><a href='detalles.html?category=` + category + `&channel=` + item.canalPrincipalQuery + `&page=` + page + `&item=` + item.index + `' >`+ item.title +`</a></h3>
                    <h4 style="color: darkgrey">`+item.canalPrincipal+`</h4>
                    <h4 style="color: darkgrey">`+item.visualizaciones+`</h4>
                </div>
            </div>
        </div>
    `;


    $("#mosaic-"+idMosaic).append(html);


}

function insertarCanalFuera(index, page, item, category) {


    var canales = getCategoryChannels(category);
    var direccion;

        canales.forEach(function(canal){
                if (canal.canal == item.canalPrincipalQuery){
                        direccion = canal.direccion;
                }
        });




    let html =
        `
            <div class="vid-list">
            `
        + "<a href='detalles.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.index + "'>" +
        `
        <img src="` + item.main_thumbnail + `" class="thumbnail5" alt="">
        </a>
            <div class="flex-div">
            `
        + "<a href='channel.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + direccion + "'>" +
        `
                <img src="${item.thumbnail_canal}" alt="imagenCanal">
            </a>    

                <div class="vid-info">
                    <a href=""></a>
                    <h3 style="color: black"><a href='detalles.html?category=` + category + `&channel=` + item.canalPrincipalQuery + `&page=` + page + `&item=` + item.index + `'  >`+ item.title +`</a></h3>
                    <h4 style="color: darkgrey">`+item.canalPrincipal+`</h4>
                    <h4 style="color: darkgrey">`+item.visualizaciones+`</h4>
                    
                </div>
            </div>
        </div>
    `

    $("#mosaico").append(html);


}

function insertRecommended(index, page, item, category) {

    let html = `
            <div class="vid-list">
            `
        + "<a href='detalles.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.index + "'>" +
        `
       		<img src="` + item.main_thumbnail + `" class="thumbnail" alt="">
        </a>
            <div class="flex-div">
            `
        + "<a href='channel.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.direccion + "'>" +
        `
                <img src="${item.thumbnail_canal}" alt="imagenCanal">
            </a>    

                <div class="vid-info">
                    <a href=""></a>
                    <h3 style="color: black"><a href='detalles.html?category=` + category + `&channel=` + item.canalPrincipalQuery + `&page=` + page + `&item=` + item.index + `'  >`+ item.title +`</a></h3>
                    <h4 style="color: darkgrey">`+item.canalPrincipal+`</h4>
                    <h4 style="color: darkgrey">`+item.visualizaciones+`</h4>
                    
                </div>
            </div>
        </div>
       `

    $("#recommended").append(html);
}

function insertDetailItem(item, category) {

    var canales = getCategoryChannels(category);
    var direccion;

	canales.forEach(function(canal){
		if (canal.canal == item.canalPrincipalQuery){
			direccion = canal.direccion;
		}
	});

    let page = 0;
    let html =
        `
        <div class="video">
        ${item.detail}
		<br><br>
                <h2 id="tituloVideo"><a href='channel.html?category=` + category + `&channel=` + item.canalPrincipalQuery + `&page=` + page + `&item=`+direccion+`' ><img src="`+item.thumbnail_canal+`"></a> &nbsp; <b>`+item.title+`</b></h2>
           </div>

        `
    $("#detail").append(html);

	$('title').html('Hi Video - '+item.title);


    renderThumbnail();
}


function thumbfoto(category, index, page, item) {
    let html =
        `
        <div class="col1Detalles">
        <a href="` + item.enlace + `">
            <img class="imagenCanalDetalles" src="` + item.main_thumbnail + ` " >
            </a>
        </div>
        <div class="col2Detalles" nombre="true">
            <div>
                <h2>${item.title}</h2>
                <h4 style="color: darkgrey">${item.seguidores} seguidores</h4>
            </div>
        </div>
    `

    $("#imagenCanalDetalles").append(html);
}

function insertChannelsItem(category, index, page, item, channel) {
    let html =

    `
	<a href='channel.html?category=` + category + `&channel=` + item.canal + `&page=` + page + `&item=` + item.direccion + `' class="sidebar-item" >
	            <div class="sidebar-item-image">
        	        	<img src="`+item.main_thumbnail+`">
        	    </div>
	            <div class="sidebar-item-name">
                	`+item.title+`
        	    </div>

	</a>
	`;

    $("#canales").append(html);
}

function insertarMosaicDentro(category, index, page, item, channel) {


    var canales = getCategoryChannels(category);
    var direccion;

        canales.forEach(function(canal){
                if (canal.canal == item.canalPrincipalQuery){
                        direccion = canal.direccion;
                }
        });


    let html =
        `
            <div class="vid-list">
            `
        + "<a href='detalles.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.index + "'>" +
        `
        <img src="` + item.main_thumbnail + `" class="thumbnail2" alt="">
        </a>
            <div class="flex-div">
            `
        + "<a href='channel.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + direccion + "'>" +
        `
                <img src="${item.thumbnail_canal}" alt="imagenCanal">
            </a>

                <div class="vid-info">
                    <a href=""></a>
                    <h3 style="color: black"><a href='detalles.html?category=` + category + `&channel=` + item.canalPrincipalQuery + `&page=` + page + `&item=` + item.index + `' > `+ item.title +`</a></h3>
                    <h4 style="color: darkgrey">`+item.canalPrincipal+`</h4>
                    <h4 style="color: darkgrey">`+item.visualizaciones+`</h4>
                </div>
            </div>
        </div>
    `


    $("#insMosaicDentro").append(html);


}
function insertSliderItem(index, page, item, category) {

    let html =
        `<li>
            <div class="vid-list" style="float:left;width:100%;">
            `
        + "<a href='detalles.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.index + "'>" +
        `
        <!-- <img src="` + item.main_thumbnail + `" class="thumbnail4" alt="" > -->

	<div class="thumbnailSlider"
		style="
			background-size:cover;
			background-center:center;
			background-repeat:no-repeat;
			background-image:url(`+ item.main_thumbnail +`);
		"
	>
	</div>

        </a>
            <div class="flex-div">
            `
        + "<a href='channel.html?category=" + category + "&channel=" + item.canalPrincipalQuery + "&page=" + page + "&item=" + item.direccion + "'>" +
        `
                <img src="${item.thumbnail_canal}" alt="imagenCanal">
            </a>

                <div class="vid-info">
                    <h3 style="color: black"><a href='detalles.html?category=` + category + `&channel=` + item.canalPrincipalQuery + `&page=` + page + `&item=` + item.index + `'  >`+ item.title +`</a></h3>
                    <h4 style="color: darkgrey">`+item.canalPrincipal+`</h4>
                    <h4 style="color: darkgrey">`+item.visualizaciones+`</h4>

                </div>
            </div>
        </div>
	</li>
    `
    $("#slider").append(html);
}

function channelFuera() {
    let page = getParameterByName('page');
    let category = getParameterByName('category');
    let channel = getParameterByName('channel');
    let finalUrl = './json/' + category + "/" + channel + "/" + page + '.js';



    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);

                items.forEach(function (item, index) {
                    insertarCanalFuera(index, page, item, category)
                });
            }
        }
    );
}


function renderRecommended() {
    let page = getParameterByName('page');
    let category = getParameterByName('category');
    let channel = getParameterByName('channel');
    let finalUrl = './json/' + category + '/recomendado.js';

    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);
                items.forEach(function (item, index) {
                    insertRecommended(index, page, item, category, channel);
                });
            },
	   async:false
        }
    );
}

function renderChannels() {
    let page = getParameterByName('page');
    let category = getParameterByName('category');
    let channel = getParameterByName('channel');





    //Si no se elige ninguna categoría, las muestra todas
    if(category == 0){
        category = 'all';
    }
    //Lo mismo para los canales
    if(channel == 0){
        channel = 'all';
    }


    let finalUrl = './json/' + category + '/canales.js';
    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);
                items.forEach(function (item, index) {
                    insertChannelsItem(category, index, page, item, channel);
                });
            }
        }
    );
}



function getCategoryChannels( category ){
    var canales;
    var listadoCanales = Array();
    let finalUrl = './json/' + category + '/canales.js';


    $.ajax({
            url: finalUrl, success: function (result) {
                canales = JSON.parse(result);
            },
	    async:false
        }
    );


    return canales;

}



function renderChannelsComplete() {

    let category = getParameterByName('category');
    let detail = getParameterByName('item');

    let finalUrl = './json/' + category + '/canales.js';

    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);
                let item = items[detail];
                channelDetails(item);
            }
        }
    );
}


function renderMosaic() {

    let page = getParameterByName('page');
    let category = getParameterByName('category');
    let channel = getParameterByName('channel');

    //Si no se elige ninguna categoría, las muestra todas
    if(category == 0){
        category = 'all';
    }
    //Lo mismo para los canales
    if(channel == 0){
        channel = 'all';
    }



	if(category == 'all'){
		var listadoCategorias = Array('futbol', 'baloncesto', 'tennis', 'rugby', 'beisbol');

		crearMosaicosCategorias(listadoCategorias);

		listadoCategorias.forEach(function(categoria){
			renderMosaicCategoria(categoria, 'all', categoria);
		});



	}
	else{

		var listadoCanales = getCategoryChannels(category);

		crearMosaicosCanales(listadoCanales, category);

		listadoCanales.forEach(function(canal){
                        renderMosaicCategoria(category, canal.canal, canal.canal);
                });
	}



	iniciarSlider();



}



function crearMosaicosCategorias( listado){

	listado.forEach(function(elemento){

	        var html = `
        	        <h1><img src="images/`+elemento+`.png" class="logoCategoriaMosaic"> &nbsp;<span class="h1MosaicoCategoria" >`+elemento+`</span></h1>
			<br>
			<div class="list-container" id="mosaic-` + elemento + `"></div>
			<br><br>
	        `;

		$('#mosaicos').append(html);

	});

}


function crearMosaicosCanales( listado, category){

        listado.forEach(function(elemento){

                var html = `
                        <h1>
				<a href='channel.html?category=` + category + `&channel=` + elemento.canal + `&page=0&item=`+elemento.direccion+`' >
					<img src="`+elemento.main_thumbnail+`" class="logoCanalMosaic"> &nbsp;<span class="h1MosaicoCanal" >`+elemento.title+`</span>
				</a>
			</h1>
			<br>
                        <div class="list-container" id="mosaic-` + elemento.canal + `"></div>
			<br><br>
                `;

                $('#mosaicos').append(html);

        });

}



function renderMosaicCategoria(category, channel = 'all', idMosaic){

    let finalUrl = './json/' + category + '/'+channel+'/0.js';
    let page = 0;

    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);

                items.forEach(function (item, index) {

                    if ( (item.slider == 0) || (item.slider == undefined ) ){
                        insertMosaicItem(index, page, item, category, idMosaic);
                    }
                    else{
                        insertSliderItem(index, page, item, category);
                    }

                });

            }, async:false
        }
    );

}


function renderDetail() {
    let page = getParameterByName('page');
    let category = getParameterByName('category');
    let detail = getParameterByName('item');
    let channel = getParameterByName('channel');


    let finalUrl = './json/' + category + "/" + channel + "/" + page + '.js';

    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);
                let item = items[detail];
                insertDetailItem(item, category);
            }
        }
    );
}

function renderThumbnail() {
    let page = getParameterByName('page');
    let category = getParameterByName('category');
    let channel = getParameterByName('channel');
    let finalUrl = './json/' + category + "/" + channel + '/detalleCanal.js';
    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);
                items.forEach(function (item, index) {
                    thumbfoto(category, index, page, item, channel)
                });
            }
        }
    );
}
function iniciarSlider(){
    $('#slider').bxSlider({

        randomStart:true,
        infiniteLoop:true,
        touchEnabled:false,
        auto:true,
        pause:4000,
        autoHover:true, //El slider se pausa cuando se pone el ratón encima de él

        pager:false,
        controls:true, //Para que se vean las flechas. Para que se vean solamente en escritorio se ha creado el css correspondiente en slider.css
        adaptiveHeight:false,

        responsive:true,
	slideWidth:500,
        slideMargin:10,
        shrinkItems:true,
        minSlides:1,
        maxSlides:3
    });
}

function renderMosaicDetalles() {
    let page = getParameterByName('page');
    let category = getParameterByName('category');
    let channel = getParameterByName('channel');
    //let finalUrl = './json/' + category + "/" + channel + '/videosCanal.js'; //Este archivo es innecesario al existir el archivo 0.js con los vídeos del canal en JSON


    let finalUrl = './json/' + category + "/" + channel + "/" + page + '.js';

    $.ajax({
            url: finalUrl, success: function (result) {
                let items = JSON.parse(result);
                items.forEach(function (item, index) {
                    insertarMosaicDentro(category, index, page, item, channel)
                });
            }
        }
    );
}











