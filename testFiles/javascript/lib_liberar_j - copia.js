


	$('.dropdown-button').dropdown();

	// INICIALIZA FIREBASE LOGIN GOOGLE.
	var config = {
		apiKey: "AIzaSyDB5pQK8tmSG0r_J1f7K80jMv16Ob0zyas",
		authDomain: "cpcpf-d0624.firebaseapp.com",
		databaseURL: "https://cpcpf-d0624.firebaseio.com",
		projectId: "cpcpf-d0624",
		storageBucket: "cpcpf-d0624.appspot.com",
		messagingSenderId: "332840881264"
	};
	firebase.initializeApp(config);

	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().onAuthStateChanged(function(user) { 
		if (user) {
			console.log(user.displayName);
			consultaUsuario(user.email, user.displayName, user.photoURL); 
		} else {
			console.log("NO ESTA LOGEADO");
			cierrasesion1(); 
		}
	}); //FIN CONSULTA LOGIN E INGRESA LA INFORMACIÓN.

	function consultaUsuario(correo, nombre, foto) {
		//AJAX REDIRECCIONAR AL PERFIL CORRESPONDIENTE.
		$.ajax({
				url: base_url + 'index/validaLogin',
				type: 'POST',
				dataType: 'json',
				data: {
					correo: correo
				}
			})
			.done(function(data) {
				if (data == "") {
					swal({
						title: 'No estas autorizado para entrar al sistema.',
						timer: 3000
					}).then(
						function() {
							// cierrasesion();
							console.log("nada pasa CLICK");
						},
						function(dismiss) {
							if (dismiss === 'timer') {
								// cierrasesion();
								console.log("nada pasa TIMER");
							}
						}
					) //fin then
				} else {
					switch (data[0].us_perfil) {
						case "liberador":
							// window.location.href = base_url+'liberador/lib_liberar_c/index';
							$('.perfil_imagen').attr('src', foto);
							$('.perfil_nombre').text(nombre);
							$('div.userView').append(`<a href="#!correo"><span class="black-text name perfil_correo">${correo}</span></a>`)
							$('ul.ul_sesion').append(`<a class='waves-effect btn_cerrarsesion' href='#'>Cerrar Sesion</a>`)
							$('.dropnav').append(`<i class='material-icons right'>arrow_drop_down</i>`)
							$('.btn_iniciarsesion').hide();
							$('.btn_cerrarsesion').show();
							$('.btn_cerrarsesion').show();
							$('.g_cargando').hide(2000);
							console.log("liberador");
							break;
						case "analista":
							console.log("analista");
							break;
						default:
							window.location.href = base_url;
							break;
					}
				}
				console.log("success validaLogin");
			}) //FIN DONE
			.fail(function(data) {
				console.log(data);
				console.log("error validaLogin");
			}) //FIN CLICK INICIAR SESION.
	} //FIN FUNCTION CONSULTA USUARIO.

	function cierrasesion() {
		firebase.auth().signOut().then(function() {
			window.location.href = base_url;
		}).catch(function(error) {  // An error happened.
		});
	}

	//FUNCION CIERRA SESIÓN.
	function cierrasesion1() {
		firebase.auth().signOut().then(function() {
			console.log("CERRÓ SESION cierrasesion1()");
		}).catch(function(error) {  // An error happened.
		});
	}

	//BTN CERRAR SESION
	$('body').on('click', '.btn_cerrarsesion', function() {
		cierrasesion();
	});

	$('body').on('click', '.dropdown-button', function() {
		$('ul.dropdown-button').dropdown('open');
		console.log("dropdown");
	});

	//OCULTA BTN_UPDATE MIENTRAS
	// $('.btn_sincronizacion').hide();
	$(".button-collapse").sideNav();

	//INICIALIZA MODAL
	$('.modal').modal({
		dismissible: false,
		inDuration: 350
	});




	//INICIALIZA DATEPICKER
	$('.datepicker').pickadate({
		selectMonths: true,
		selectYears: 15,
		labelMonthNext: 'Mes siguiente',
		labelMonthPrev: 'Mes anterior',
		labelMonthSelect: 'Selecciona Mes',
		labelYearSelect: 'Selecciona Año',
		monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'Mar', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
		weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
		weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
		weekdaysLetter: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		today: 'Hoy',
		clear: 'Limpiar',
		close: 'Cerrar',
		format: 'dd/mm/yyyy'
	});



	//INICIALIZA SELECT
	$('select').material_select();


	$('.tooltipped').tooltip({
		delay: 50
	});

	$("#jsGrid").jsGrid({

		height: "800px",
		width: "100%",
		align: "center",
		paging: true,

		editButton: true,
		deleteButton: true,
		clearFilterButton: true,
		modeSwitchButton: true,
		// autoload: true,
		headerRowRenderer: true,

		heading: true,
		filtering: true,
		editing: true,
		sorting: true,
		autoload: true,
		inserting: false,
		// pagerFormat: "Paginación: {pageIndex} &nbsp;&nbsp; {first} {prev} {pages} {next} {last} &nbsp;&nbsp; total de paginas: {pageCount} total Analisis: {itemCount}",
		pagerFormat: "Página: {pageIndex} &nbsp;&nbsp; {first} {prev} {pages} {next} {last} &nbsp;&nbsp; total Analisis: {itemCount}",
		pagePrevText: "<",
		pageNextText: ">",
		pageFirstText: "<<",
		pageLastText: ">>",

		pageSize: 50,
		pageButtonCount: 5,

		deleteconfirm: "borrar?",

     //   rowClass: function(item, itemIndex){
	   // if(item.Id=="3400"){
     //   console.log(item.Id);
	   // return "background: red;";
	   // }
     //   },

		controller: db,

		fields: [
			{
				name: "Id",
				title: "#",
				type: "number",
				sorting: true,
				editing: false,
				width: 50,
				css: "php csv"
			}, {
				 name: "Usuario",
				 title: "Usuario",
				 type: "text",
				 sorting: true,
				 editing: false,
				 width: 250,
				 css: "php csv check_ingresado ingresado_qad"
			 },
			 {
				name: "fechaIngreso",
				title: "Fec. Creación",
				type: "number",
				sorting: true,
				editing: false,
				width: 150,
				css: "php csv"
			},
			{
				name: "QAD",
				title: "QAD",
				type: "number",
				sorting: true,
				editing: false,
				width: 40,
				css: "qad csv esta_qad"
			},
			{
				name: "CLIENTE",
				title: "CLIENTE",
				type: "number",
				sorting: true,
				editing: false,
				width: 80,
				css: "qad csv"
			},
			{
				name: "Locacion",
				title: "Locacion",
				type: "text",
				editing: false,
				css: "qad csv"
			},
			{
				name: "Articulo",
				title: "Articulo",
				type: "text",
				sorting: true,
				css: "qad csv",
				width: 150,
				editing: false
			},
			{
				name: "Fecha",
				title: "Fecha",
				type: "text",
				editing: false,
				css: "qad csv"
			},
			{
				name: "Lote",
				title: "Lote",
				type: "text",
				css: "qad csv",
				editing: false
			},
			{
				name: "Referencia",
				title: "Referencia",
				type: "text",
				css: "qad csv",
				editing: false
			},
			{
				name: "Estado",
				title: "Estado",
				type: "text",
				css: "qad csv",
				editing: false
			},
			{
				name: "Descripcion",
				title: "Descripcion",
				type: "text",
				css: "qad csv",
				editing: false,
				width: 300
			},
			{
				name: "Cliente",
				title: "Cliente",
				type: "text",
				css: "qad csv",
				editing: false
			},
			{
				name: "Nombre",
				title: "Nombre",
				type: "text",
				editing: false,
				css: "qad csv"
			},
			{
				name: "Cantidad",
				title: "Cantidad",
				type: "text",
				editing: false,
				css: "qad csv",
				sorting: true
			},
			{
				name: "UM",
				title: "UM",
				type: "text",
				css: "qad csv",
				editing: false
			},
			{
				name: "PH",
				title: "PH",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {
					let pintar = 0;
					let largo_generado = 0

					if (pValue != null) {

						for (var i = 0; i <= 9; i++) {
							largo_generado = ".00"+i+"000";
							let despues_punto = pValue.slice(-largo_generado.length);
							if (largo_generado==despues_punto) {
								pintar = 1;
								break;
							}
						}//FIN FOR 9
						for (var i = 0; i <= 99; i++) {
							largo_generado = ".0"+i+"000";
							let despues_punto = pValue.slice(-largo_generado.length);
							if (largo_generado==despues_punto) {
								pintar = 1;
								break;
							}
						}//FIN FOR 99
						for (var i = 0; i <= 999; i++) {
							largo_generado = "."+i+"000";
							let despues_punto = pValue.slice(-largo_generado.length);
							if (largo_generado==despues_punto) {
								pintar = 1;
								break;
							}
						}//FIN FOR 999

					}//fin if != NULL

					if (pintar == 0) {
							return $("<td>").append(pValue);
					}else{
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
					}

				}//FIN CELLRENDERER
			},
			{
				name: "Brix",
				title: "Brix",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
							
						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Cons5sec",
				title: "Cons5sec",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Cons30sec",
				title: "Cons30sec",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {

						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER

			},
			{
				name: "Acasc",
				title: "Acasc",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Acidez",
				title: "Acidez",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Bar",
				title: "Bar",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Color",
				title: "Color",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Densidad",
				title: "Densidad",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Pnegros",
				title: "Pnegros",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Patulina",
				title: "Patulina",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Ramacidos",
				title: "Ramacidos",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Hongos",
				title: "Hongos",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Levadura",
				title: "Levadura",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Ecoli",
				title: "Ecoli",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Coliformes",
				title: "Coliformes",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "HongosTerm",
				title: "HongosTerm",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Salmonnela",
				title: "Salmonnela",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Alyciclo",
				title: "Alyciclo",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Howardm",
				title: "Howardm",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_1",
				title: "Generico_1",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_2",
				title: "Generico_2",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_3",
				title: "Generico_3",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_4",
				title: "Generico_4",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_5",
				title: "Generico_5",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_6",
				title: "Generico_6",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_7",
				title: "Generico_7",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_8",
				title: "Generico_8",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_9",
				title: "Generico_9",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_10",
				title: "Generico_10",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_11",
				title: "Generico_11",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_12",
				title: "Generico_12",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_13",
				title: "Generico_13",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_14",
				title: "Generico_14",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_15",
				title: "Generico_15",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_16",
				title: "Generico_16",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_17",
				title: "Generico_17",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_18",
				title: "Generico_18",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_19",
				title: "Generico_19",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_20",
				title: "Generico_20",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_21",
				title: "Generico_21",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_22",
				title: "Generico_22",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_23",
				title: "Generico_23",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_24",
				title: "Generico_24",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				name: "Generico_25",
				title: "Generico_25",
				type: "text",
				css: "php csv muestra",
				cellRenderer: function (pValue, pItem) {

					if (pValue != null) {
						// console.log(pValue);
						let valor4 = pValue.slice(-4);
						let valor5 = pValue.slice(-5);

						switch (valor4) {
							case ".000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);

						}//FIN VALOR 4

						switch (valor5) {
							case ".1000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".2000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".3000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".4000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".5000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".6000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".7000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".8000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							case ".9000":
							return $("<td>").css('background-color', 'red').append(pValue).addClass('red');
							break;
							default:
							return $("<td>").append(pValue);
						}//FIN VALOR 5
					}//fin if

				}//FIN CELLRENDERER
			},
			{
				type: "control",
				editButton: true,
				width: "300",
				headerTemplate: function() {

				},
				itemTemplate: function(value, item) {
					var $result = jsGrid.fields.control.prototype.itemTemplate.apply(this, arguments);
					var $customButton = $("<buttton class='material-icons subir' dp48>arrow_upward</buttton> &nbsp; <buttton class='material-icons bajar' dp48>arrow_downward</buttton> &nbsp; <buttton class='material-icons habilitar' dp24>done</buttton><buttton class='material-icons habilitar' dp24>block</buttton> &nbsp; <buttton class='material-icons asignar2' dp48>spellcheck</buttton> &nbsp; <buttton class='material-icons asignar' dp48>assignment_ind</button>")
						// var $customButton1 = $("<buttton class='material-icons habilitar' dp48>done_all</buttton>")
						// .text(item.id)
						.click(function(e) {
							if (e.target.className == "material-icons subir") {
								let largo = $(".jsgrid-table tbody tr");
								let largoHijos = $(this).parent().parent().children();
								var posicionActual = $(this).parent().parent("tr").index();
								for (var i = posicionActual; i > 0; i--) {
									var recorrer = false;
									var ph = largo.eq(i - 1).children("td").eq(16).text();
									for (var h = 0; h < largo.eq(i).children("td").length; h++) {
										if (ph == "") {
											if (largo.eq(i - 1).children("td").eq(h).text() == "") {
												var add = $(this).parent().parent().children("td").eq(h).text()
												largo.eq(i - 1).children("td").eq(h).text(add)


												recorrer = true;
											} else {}
										} else {
											return;
										}
									}
									if (recorrer) {
										var id = largo.eq(i - 1).children("td").eq(0).text()
										var locacion = largo.eq(i - 1).children("td").eq(5).text()
										var articulo = largo.eq(i - 1).children("td").eq(6).text()
										var fecha = largo.eq(i - 1).children("td").eq(7).text()
										var lote = largo.eq(i - 1).children("td").eq(8).text()
										var referencia = largo.eq(i - 1).children("td").eq(9).text()
										var estado = largo.eq(i - 1).children("td").eq(10).text()
										var descripcion = largo.eq(i - 1).children("td").eq(11).text()
										var cliente = largo.eq(i - 1).children("td").eq(12).text()
										var nombre = largo.eq(i - 1).children("td").eq(13).text()
										var cantidad = largo.eq(i - 1).children("td").eq(14).text()
										var um = largo.eq(i - 1).children("td").eq(15).text()
										var phs = largo.eq(i - 1).children("td").eq(16).text()
										var brix = largo.eq(i - 1).children("td").eq(17).text()
										var cons5sec = largo.eq(i - 1).children("td").eq(18).text()
										var cons30sec = largo.eq(i - 1).children("td").eq(18).text()
										var acasc = largo.eq(i - 1).children("td").eq(20).text()
										var acidez = largo.eq(i - 1).children("td").eq(21).text()
										var bar = largo.eq(i - 1).children("td").eq(22).text()
										var color = largo.eq(i - 1).children("td").eq(23).text()
										var densidad = largo.eq(i - 1).children("td").eq(24).text()
										var pnegro = largo.eq(i - 1).children("td").eq(25).text()
										var patulina = largo.eq(i - 1).children("td").eq(26).text()
										var ramacidos = largo.eq(i - 1).children("td").eq(27).text()
										var hongos = largo.eq(i - 1).children("td").eq(28).text()
										var levadura = largo.eq(i - 1).children("td").eq(29).text()
										var ecoli = largo.eq(i - 1).children("td").eq(30).text()
										var coliformes = largo.eq(i - 1).children("td").eq(31).text()
										var hongosterm = largo.eq(i - 1).children("td").eq(32).text()
										var salmonela = largo.eq(i - 1).children("td").eq(33).text()
										var alyciclo = largo.eq(i - 1).children("td").eq(34).text()
										var howard = largo.eq(i - 1).children("td").eq(35).text()
										var generico_1 = largo.eq(i - 1).children("td").eq(36).text()
										var generico_2 = largo.eq(i - 1).children("td").eq(37).text()
										var generico_3 = largo.eq(i - 1).children("td").eq(38).text()
										var generico_4 = largo.eq(i - 1).children("td").eq(39).text()
										var generico_5 = largo.eq(i - 1).children("td").eq(40).text()
										var generico_6 = largo.eq(i - 1).children("td").eq(41).text()
										var generico_7 = largo.eq(i - 1).children("td").eq(42).text()
										var generico_8 = largo.eq(i - 1).children("td").eq(43).text()
										var generico_9 = largo.eq(i - 1).children("td").eq(44).text()
										var generico_10 = largo.eq(i - 1).children("td").eq(45).text()
										var generico_11 = largo.eq(i - 1).children("td").eq(46).text()
										var generico_12 = largo.eq(i - 1).children("td").eq(47).text()
										var generico_13 = largo.eq(i - 1).children("td").eq(48).text()
										var generico_14 = largo.eq(i - 1).children("td").eq(49).text()
										var generico_15 = largo.eq(i - 1).children("td").eq(50).text()
										var generico_16 = largo.eq(i - 1).children("td").eq(51).text()
										var generico_17 = largo.eq(i - 1).children("td").eq(52).text()
										var generico_18 = largo.eq(i - 1).children("td").eq(53).text()
										var generico_19 = largo.eq(i - 1).children("td").eq(54).text()
										var generico_20 = largo.eq(i - 1).children("td").eq(55).text()
										var generico_21 = largo.eq(i - 1).children("td").eq(56).text()
										var generico_22 = largo.eq(i - 1).children("td").eq(57).text()
										var generico_23 = largo.eq(i - 1).children("td").eq(58).text()
										var generico_24 = largo.eq(i - 1).children("td").eq(59).text()
										var generico_25 = largo.eq(i - 1).children("td").eq(60).text()
										actualiza_linea(id, locacion, articulo, fecha, lote, referencia, estado, descripcion, cliente, nombre, cantidad, um, phs, brix, cons5sec, cons30sec, acasc, acidez, bar, color, densidad, pnegro, patulina, ramacidos, hongos, levadura, ecoli, coliformes, hongosterm, salmonela, alyciclo, howard, generico_1, generico_2, generico_3, generico_4, generico_5, generico_6, generico_7, generico_8, generico_9, generico_10, generico_11, generico_12, generico_13, generico_14, generico_15, generico_16, generico_17, generico_18, generico_19, generico_20, generico_21, generico_22, generico_23, generico_24, generico_25);

										for (var n = 0; n < db.analisis.length; n++) {
											if (db.analisis[n].Id == id) {
												db.analisis[n].Acasc = acasc
												db.analisis[n].Acidez = acidez
												db.analisis[n].Alyciclo = alyciclo
												db.analisis[n].Articulo = articulo
												db.analisis[n].Bar = bar
												db.analisis[n].Brix = brix
												db.analisis[n].Cantidad = cantidad
												db.analisis[n].Cliente = cliente
												db.analisis[n].Coliformes = coliformes
												db.analisis[n].Color = color
												db.analisis[n].Cons5sec = cons5sec
												db.analisis[n].Cons30sec = cons30sec
												db.analisis[n].Densidad = densidad
												db.analisis[n].Descripcion = descripcion
												db.analisis[n].Ecoli = ecoli
												db.analisis[n].Estado = estado
												db.analisis[n].Fecha = fecha
												db.analisis[n].Generico_1 = generico_1
												db.analisis[n].Generico_2 = generico_2
												db.analisis[n].Generico_3 = generico_3
												db.analisis[n].Generico_4 = generico_4
												db.analisis[n].Generico_5 = generico_5
												db.analisis[n].Generico_6 = generico_6
												db.analisis[n].Generico_7 = generico_7
												db.analisis[n].Generico_8 = generico_8
												db.analisis[n].Generico_9 = generico_9
												db.analisis[n].Generico_10 = generico_10
												db.analisis[n].Generico_11 = generico_11
												db.analisis[n].Generico_12 = generico_12
												db.analisis[n].Generico_13 = generico_13
												db.analisis[n].Generico_14 = generico_14
												db.analisis[n].Generico_15 = generico_15
												db.analisis[n].Generico_16 = generico_16
												db.analisis[n].Generico_17 = generico_17
												db.analisis[n].Generico_18 = generico_18
												db.analisis[n].Generico_19 = generico_19
												db.analisis[n].Generico_20 = generico_20
												db.analisis[n].Generico_21 = generico_21
												db.analisis[n].Generico_22 = generico_22
												db.analisis[n].Generico_23 = generico_23
												db.analisis[n].Generico_24 = generico_24
												db.analisis[n].Generico_25 = generico_25
												db.analisis[n].Hongos = hongos
												db.analisis[n].HongosTerm = hongosterm
												db.analisis[n].Howardm = howard
												db.analisis[n].Id = id
												db.analisis[n].Levadura = levadura
												db.analisis[n].Locacion = locacion
												db.analisis[n].Lote = lote
												db.analisis[n].Nombre = nombre
												db.analisis[n].PH = phs
												db.analisis[n].Patulina = patulina
												db.analisis[n].Pnegros = pnegro
												db.analisis[n].Ramacidos = ramacidos
												db.analisis[n].Referencia = referencia
												db.analisis[n].Salmonnela = salmonela
												db.analisis[n].UM = um
												console.log(db.analisis[i]);
											}

											//FOR PARA RECORRER Y PINTAR


										}
									}
								}
							}

							if (e.target.className == "material-icons bajar") {
								let largob = $(".jsgrid-table tbody tr");
								let largoHijosb = $(this).parent().parent().children();
								var posicionActual = $(this).parent().parent("tr").index();
								console.log("actual :" + posicionActual);
								console.log("largo :" + largob.length);
								for (var i = posicionActual; i < largob.length; i++) {
									console.log("recorridos del for :" + i);
									var recorrer = false;
									var ph = largob.eq(i + 1).children("td").eq(16).text();
									console.log("ph :" + ph);
									console.log(largob.eq(i + 1).children("td").eq(h).text());
									for (var h = 0; h < largob.eq(i).children("td").length; h++) {
										if (ph == "") {
											if (largob.eq(i + 1).children("td").eq(h).text() == "") {
												var add = $(this).parent().parent().children("td").eq(h).text()
												largob.eq(i + 1).children("td").eq(h).text(add)
												recorrer = true;
												console.log("true");
											}
										} else {
											return;
										}
									}
									if (recorrer) {
										console.log("recorrido");
										var id = largob.eq(i + 1).children("td").eq(0).text()
										var locacion = largob.eq(i + 1).children("td").eq(5).text()
										var articulo = largob.eq(i + 1).children("td").eq(6).text()
										var fecha = largob.eq(i + 1).children("td").eq(7).text()
										var lote = largob.eq(i + 1).children("td").eq(8).text()
										var referencia = largob.eq(i + 1).children("td").eq(9).text()
										var estado = largob.eq(i + 1).children("td").eq(10).text()
										var descripcion = largob.eq(i + 1).children("td").eq(11).text()
										var cliente = largob.eq(i + 1).children("td").eq(12).text()
										var nombre = largob.eq(i + 1).children("td").eq(13).text()
										var cantidad = largob.eq(i + 1).children("td").eq(14).text()
										var um = largob.eq(i + 1).children("td").eq(15).text()
										var phs = largob.eq(i + 1).children("td").eq(16).text()
										var brix = largob.eq(i + 1).children("td").eq(17).text()
										var cons5sec = largob.eq(i + 1).children("td").eq(18).text()
										var cons30sec = largob.eq(i + 1).children("td").eq(19).text()
										var acasc = largob.eq(i + 1).children("td").eq(20).text()
										var acidez = largob.eq(i + 1).children("td").eq(21).text()
										var bar = largob.eq(i + 1).children("td").eq(22).text()
										var color = largob.eq(i + 1).children("td").eq(23).text()
										var densidad = largob.eq(i + 1).children("td").eq(24).text()
										var pnegro = largob.eq(i + 1).children("td").eq(25).text()
										var patulina = largob.eq(i + 1).children("td").eq(26).text()
										var ramacidos = largob.eq(i + 1).children("td").eq(27).text()
										var hongos = largob.eq(i + 1).children("td").eq(28).text()
										var levadura = largob.eq(i + 1).children("td").eq(29).text()
										var ecoli = largob.eq(i + 1).children("td").eq(30).text()
										var coliformes = largob.eq(i + 1).children("td").eq(31).text()
										var hongosterm = largob.eq(i + 1).children("td").eq(32).text()
										var salmonela = largob.eq(i + 1).children("td").eq(33).text()
										var alyciclo = largob.eq(i + 1).children("td").eq(34).text()
										var howard = largob.eq(i + 1).children("td").eq(35).text()
										var generico_1 = largob.eq(i + 1).children("td").eq(36).text()
										var generico_2 = largob.eq(i + 1).children("td").eq(37).text()
										var generico_3 = largob.eq(i + 1).children("td").eq(38).text()
										var generico_4 = largob.eq(i + 1).children("td").eq(39).text()
										var generico_5 = largob.eq(i + 1).children("td").eq(40).text()
										var generico_6 = largob.eq(i + 1).children("td").eq(41).text()
										var generico_7 = largob.eq(i + 1).children("td").eq(42).text()
										var generico_8 = largob.eq(i + 1).children("td").eq(43).text()
										var generico_9 = largob.eq(i + 1).children("td").eq(44).text()
										var generico_10 = largob.eq(i + 1).children("td").eq(45).text()
										var generico_11 = largob.eq(i + 1).children("td").eq(46).text()
										var generico_12 = largob.eq(i + 1).children("td").eq(47).text()
										var generico_13 = largob.eq(i + 1).children("td").eq(48).text()
										var generico_14 = largob.eq(i + 1).children("td").eq(49).text()
										var generico_15 = largob.eq(i + 1).children("td").eq(50).text()
										var generico_16 = largob.eq(i + 1).children("td").eq(51).text()
										var generico_17 = largob.eq(i + 1).children("td").eq(52).text()
										var generico_18 = largob.eq(i + 1).children("td").eq(53).text()
										var generico_19 = largob.eq(i + 1).children("td").eq(54).text()
										var generico_20 = largob.eq(i + 1).children("td").eq(55).text()
										var generico_21 = largob.eq(i + 1).children("td").eq(56).text()
										var generico_22 = largob.eq(i + 1).children("td").eq(57).text()
										var generico_23 = largob.eq(i + 1).children("td").eq(58).text()
										var generico_24 = largob.eq(i + 1).children("td").eq(59).text()
										var generico_25 = largob.eq(i + 1).children("td").eq(60).text()
										actualiza_linea(
											id, locacion, articulo, fecha, lote, referencia, estado, descripcion, cliente, nombre, cantidad, um, phs, brix, cons5sec, cons30sec, acasc, acidez, bar, color, densidad, pnegro, patulina, ramacidos, hongos, levadura, ecoli, coliformes, hongosterm, salmonela, alyciclo, howard, generico_1, generico_2, generico_3, generico_4, generico_5, generico_6, generico_7, generico_8, generico_9, generico_10, generico_11, generico_12, generico_13, generico_14, generico_15, generico_16, generico_17, generico_18, generico_19, generico_20, generico_21, generico_22, generico_23, generico_24, generico_25);
										for (var n = 0; n < db.analisis.length; n++) {
											if (db.analisis[n].Id == id) {
												console.log(db.analisis[i]);
												db.analisis[n].Acasc = acasc
												db.analisis[n].Acidez = acidez
												db.analisis[n].Alyciclo = alyciclo
												db.analisis[n].Articulo = articulo
												db.analisis[n].Bar = bar
												db.analisis[n].Brix = brix
												db.analisis[n].Cantidad = cantidad
												db.analisis[n].Cliente = cliente
												db.analisis[n].Coliformes = coliformes
												db.analisis[n].Color = color
												db.analisis[n].Cons5sec = cons5sec
												db.analisis[n].Cons30sec = cons30sec
												db.analisis[n].Densidad = densidad
												db.analisis[n].Descripcion = descripcion
												db.analisis[n].Ecoli = ecoli
												db.analisis[n].Estado = estado
												db.analisis[n].Fecha = fecha
												db.analisis[n].Generico_1 = generico_1
												db.analisis[n].Generico_2 = generico_2
												db.analisis[n].Generico_3 = generico_3
												db.analisis[n].Generico_4 = generico_4
												db.analisis[n].Generico_5 = generico_5
												db.analisis[n].Generico_6 = generico_6
												db.analisis[n].Generico_7 = generico_7
												db.analisis[n].Generico_8 = generico_8
												db.analisis[n].Generico_9 = generico_9
												db.analisis[n].Generico_10 = generico_10
												db.analisis[n].Generico_11 = generico_11
												db.analisis[n].Generico_12 = generico_12
												db.analisis[n].Generico_13 = generico_13
												db.analisis[n].Generico_14 = generico_14
												db.analisis[n].Generico_15 = generico_15
												db.analisis[n].Generico_16 = generico_16
												db.analisis[n].Generico_17 = generico_17
												db.analisis[n].Generico_18 = generico_18
												db.analisis[n].Generico_19 = generico_19
												db.analisis[n].Generico_20 = generico_20
												db.analisis[n].Generico_21 = generico_21
												db.analisis[n].Generico_22 = generico_22
												db.analisis[n].Generico_23 = generico_23
												db.analisis[n].Generico_24 = generico_24
												db.analisis[n].Generico_25 = generico_25
												db.analisis[n].Hongos = hongos
												db.analisis[n].HongosTerm = hongosterm
												db.analisis[n].Howardm = howard
												db.analisis[n].Id = id
												db.analisis[n].Levadura = levadura
												db.analisis[n].Locacion = locacion
												db.analisis[n].Lote = lote
												db.analisis[n].Nombre = nombre
												db.analisis[n].PH = phs
												db.analisis[n].Patulina = patulina
												db.analisis[n].Pnegros = pnegro
												db.analisis[n].Ramacidos = ramacidos
												db.analisis[n].Referencia = referencia
												db.analisis[n].Salmonnela = salmonela
												db.analisis[n].UM = um
												console.log(db.analisis[n]);
											}
										}
									}
								}
							}
							if (e.target.className == "material-icons habilitar") {
								console.log("Modificando el registro ID: " + item.Id);

								var id = item.Id;
								var estado = item.Estado;
								var articulo = item.Articulo;
								var lote = item.Lote;
								var referencia = item.Referencia;
								var locacion = item.Locacion;

								var datos = [];

								if (estado == 'RETENIDO') {
									estado = 'DISPONIB'
								} else {
									estado = 'RETENIDO'
								}

								datos.push(articulo);
								datos.push(lote);
								datos.push(referencia);
								datos.push(locacion);
								datos.push(estado);


								datos2 = JSON.stringify(datos);
								console.log(datos2);


								swal({
									title: '¿Seguro que deseas cambiar estado?',
									text: `Con esto quedará ${estado} en QAD`,
									type: 'question',
									showCancelButton: true,
									confirmButtonColor: '#3085d6',
									cancelButtonColor: '#d33',
									confirmButtonText: 'Aceptar'
								}).then(function() {

									var actualizo = false;

									//ACTUALIZA ESTADO QAD
									$.ajax({
											url: base_url + 'liberador/lib_liberar_c/actualizaEstado',
											type: 'POST',
											// dataType: 'json',
											data: {
												datos: datos2
											},
										})
										.done(function(data) {
											console.log(data);
											actualizo = true;
											console.log("succes actualizaEstado");

											//ACTUALIZA ESTADO MYSQL
											$.ajax({
													url: base_url + 'Welcome/cambiaEstado',
													type: 'POST',
													dataType: 'json',
													data: {
														id: id,
														estado: estado
													},
												})
												.done(function(data) {
													console.log(data);
													console.log("success cambiaEstadoMYSQL");
													swal(
														'estado cambiado!',
														'',
														'success'
													)
													item.Estado = estado;
													$("#jsGrid").jsGrid("render");


												})
												.fail(function(data) {
													console.log(data);
													console.log("error cambiaEstadoMYSQL");
												}) //FIN AJAX MYSQL
										})
										.fail(function(data) {
											console.log(data);
											console.log("error actualizaEstado");
										}) //FIN AJAX QAD
								}) //FIN THEN
							}

							if (e.target.className == "material-icons asignar") {
								var json = {
									'null': null
								}
								var jsons = {
									'null': null
								}
								$.ajax({
										url: base_url + 'liberador/lib_liberar_c/consultaClientes',
										type: 'POST',
										dataType: 'json',
									})
									.done(function(data) {
										console.log("success consultaClientes");
										for (var i = 0; i < data.length; i++) {
											json[data[i].cm_sort + " - " + data[i].cm_addr] = null;
											$('.cargaInfo').append(`
                          <a href="#!" class="collection-item cliente" value="${data[i]['cm_addr']}" >${data[i]['cm_sort']} - ${data[i]['cm_addr']}</a><input type="hidden" class="codigo_cliente" value="${data[i]['cm_addr']}">
                        `);
										} //FIN FOR
										$('#modal2.listado_clientes').modal('open');
										$('.autocomplete_cliente').autocomplete({
											data: json,
											limit: 20,
											onAutocomplete: function(val) {
												var splitcodigo = val.split(" - ");
												var cliente = $(this).text();
												var codigo = splitcodigo[1];
												var lote = item.Lote;
												var referencia = item.Referencia;

												//FUNCION PRE-ASIGNA CLIENTE AL ITEM
												swal({
													title: `¿Pre-Asignar ${cliente}?`,
													text: "Se pre-asignará el cliente en CPC",
													type: 'question',
													showCancelButton: true,
													confirmButtonColor: '#3085d6',
													cancelButtonColor: '#d33',
													confirmButtonText: 'Pre-Asignar!'
												}).then(function() {
													var datos = [];
													datos.push(codigo);
													datos.push(lote);
													datos.push(referencia);
													datos_json = JSON.stringify(datos)
													console.log(datos_json);

													$.ajax({
															url: base_url + 'liberador/lib_liberar_c/pre_asigna',
															type: 'POST',
															dataType: 'json',
															data: {
																datos_json: datos_json
															}
														})
														.done(function(data) {
															console.log(data);
															item.Cliente = codigo;
															$("#jsGrid").jsGrid("render");
															swal({
																title: 'Asignado!',
																type: 'success'
															});
															console.log("success pre_asigna");
														})
														.fail(function(data) {
															console.log(data);
															console.log("error pre_asigna");
														}) //FIN AJAX PRE_ASIGNA

												});

											},
											minLength: 1,
										}); //FIN AUTOCOMPLETED

										$('.cliente').on('click', function() {
											// var codigo = $('input.codigo_cliente').val()
											var cliente = $(this).text();
											var codigo = $(this).attr('value');
											var lote = item.Lote;
											var referencia = item.Referencia;

											//FUNCION PRE-ASIGNA CLIENTE AL ITEM
											swal({
												title: `¿Pre-Asignar ${cliente}?`,
												text: "Se pre-asignará el cliente en CPC",
												type: 'question',
												showCancelButton: true,
												confirmButtonColor: '#3085d6',
												cancelButtonColor: '#d33',
												confirmButtonText: 'Pre-Asignar!'
											}).then(function() {
												var datos = [];
												datos.push(codigo);
												datos.push(lote);
												datos.push(referencia);
												datos_json = JSON.stringify(datos)
												$.ajax({
														url: base_url + 'liberador/lib_liberar_c/pre_asigna',
														type: 'POST',
														dataType: 'json',
														data: {
															datos_json: datos_json
														}
													})
													.done(function(data) {
														console.log(data);
														item.Cliente = codigo;
														$("#jsGrid").jsGrid("render");
														swal({
															title: 'Asignado!',
															type: 'success'
														});
														console.log("success pre_asigna");
													})
													.fail(function(data) {
														console.log(data);
														console.log("error pre_asigna");
													}) //FIN AJAX PRE_ASIGNA

												$('.listado_clientes').modal('close');
											})
										}); //FIN ON CLICK CLIENTE

									})
									.fail(function(data) {
										console.log(data);
										console.log("error consultaClientes");
									})

							} //FIN IF ASIGNAR

							//FUNCION QUE ASIGNA EL CLIENTE PRE-ASIGNADO EN QAD
							if (e.target.className == "material-icons asignar2") {
								console.log(item.Cliente, "enviando");
								var id = item.Id;
								var cliente = item.Cliente;
								var lote = item.Lote;
								var referencia = item.Referencia;
								var ubicacion = item.Locacion;
								if (cliente == "NO") {
									swal("Debes Pre-Asignar cliente antes de Asignar en QAD...");
								} else {
									console.log("cliente correcto");
									var datos = [];
									datos.push(id);
									datos.push(cliente);
									datos.push(lote);
									datos.push(referencia);
									datos.push(ubicacion);
									datos = JSON.stringify(datos);
									console.log(datos, "enviando");

									$.ajax({
											url: base_url + 'liberador/lib_liberar_c/asignaQad',
											type: 'POST',
											dataType: 'json',
											data: {
												datos: datos
											}
										})
										.done(function(data) {
											console.log(data, "recibiendo");
											console.log(cliente);
											console.log("success asignaQad");

											//AJAX consultaNombre_cliente PARA AGREGAR AL LADO DEL CODIGO EL CAMPO NOMBRE
											$.ajax({
													url: base_url + 'liberador/lib_liberar_c/consultaNombre_cliente',
													type: 'POST',
													dataType: 'json',
													data: {
														cliente: cliente
													}
												})
												.done(function(data) {
													console.log(data[0]);
													item.Nombre = data[0];
													console.log(data[0]);
													$("#jsGrid").jsGrid("render");
													console.log("success consultaNombre_cliente");
												})
												.fail(function(data) {
													console.log(data);
													console.log("error consultaNombre_cliente");
												}) //FIN AJAX consultaNombre_cliente
										})
										.fail(function(data) {
											console.log(data, "recibiendo");
											console.log("error asignaQad");
										}) //FIN AJAX asignaQad
								}
							} //FIN ASIGNA QAD
						});
					return $result.add($customButton);
				}
			} //FIN type: "control"
		]

	});

	$("input").click(function() {
		console.log("data");
		console.log("item", db.itemTemplate);
	})

	function render() {
		$("#jsGrid").jsGrid("render");
		console.log("render");
	}

	$("#jsGrid").jsGrid("render");

	//OCULTA EL "ADD" POR DEFECTO.
	$('.jsgrid-insert-mode-button').css({
		display: 'none'
	});

	$('.jsgrid-edit-button').css({
		display: 'none'
	});

	//AGREGA EL BTN PARA CREAR NUEVOS ANALISIS
	$('tr.jsgrid-filter-row td.jsgrid-control-field').append(`<a class="btn-floating btn-small waves-effect waves-light red btn_agregar"><i class="material-icons">add</i></a>`);

	//BTN QUE AGREGA UN ANALISIS.
	$('.btn_agregar').on('click', function() {
		console.log("Abriendo modal..");
		$('#modal1').modal('open');
	})

	$('body').on('click', '.btn_ingresar', function() {
		// console.log("Ingresando analisis..");
		// let analisis = {};
		let Locacion = $('.txt_locacion').val();
		let Articulo = $('.txt_articulo').val();
		let Fecha = $('.txt_fecha').val();
		let Lote = $('.txt_lote').val();
		let Referencia = $('.txt_referencia').val();
		let Estado = $('.txt_estado').val();
		// let Estado = $('#txt_estado option:selected').text();
		let Descripcion = $('.txt_descripcion').val();
		let Cliente = $('.txt_cliente').val();
		let Nombre = $('.txt_nombre').val();
		let Cantidad = $('.txt_cantidad').val();
		let UM = $('.txt_um').val();
		let PH = $('.txt_ph').val();
		let Brix = $('.txt_brix').val();
		let Cons5sec = $('.txt_cons5sec').val();
		let Cons30sec = $('.txt_cons30sec').val();
		let Acasc = $('.txt_acasc').val();
		let Acidez = $('.txt_acidez').val();
		let Bar = $('.txt_bar').val();
		let Color = $('.txt_color').val();
		let Densidad = $('.txt_densidad').val();
		let Pnegros = $('.txt_pnegros').val();
		let Patulina = $('.txt_patulina').val();
		let Ramacidos = $('.txt_ramacidos').val();
		let Hongos = $('.txt_hongos').val();
		let Levadura = $('.txt_levadura').val();
		let Ecoli = $('.txt_ecoli').val();
		let Coliformes = $('.txt_coliformes').val();
		let HongosTerm = $('.txt_hongosterm').val();
		let Salmonnela = $('.txt_salmonnela').val();
		let Alyciclo = $('.txt_alyciclo').val();
		let Howardm = $('.txt_howardm').val();
		let Generico_1 = $('.txt_generico_1').val();
		let Generico_2 = $('.txt_generico_2').val();
		let Generico_3 = $('.txt_generico_3').val();
		let Generico_4 = $('.txt_generico_4').val();
		let Generico_5 = $('.txt_generico_5').val();
		let Generico_6 = $('.txt_generico_6').val();
		let Generico_7 = $('.txt_generico_7').val();
		let Generico_8 = $('.txt_generico_8').val();
		let Generico_9 = $('.txt_generico_9').val();
		let Generico_10 = $('.txt_generico_10').val();
		let Generico_11 = $('.txt_generico_11').val();
		let Generico_12 = $('.txt_generico_12').val();
		let Generico_13 = $('.txt_generico_13').val();
		let Generico_14 = $('.txt_generico_14').val();
		let Generico_15 = $('.txt_generico_15').val();
		let Generico_16 = $('.txt_generico_16').val();
		let Generico_17 = $('.txt_generico_17').val();
		let Generico_18 = $('.txt_generico_18').val();
		let Generico_19 = $('.txt_generico_19').val();
		let Generico_20 = $('.txt_generico_20').val();
		let Generico_21 = $('.txt_generico_21').val();
		let Generico_22 = $('.txt_generico_22').val();
		let Generico_23 = $('.txt_generico_23').val();
		let Generico_24 = $('.txt_generico_24').val();
		let Generico_25 = $('.txt_generico_25').val();
		if ($.trim(Lote) == '' || $.trim(Referencia) == '') {
			swal("Debes completar al menos Lote y Referencia");
		} else {
			//INGRESA NUEVO ANALISIS
			$.ajax({
					url: base_url + 'Welcome/ingresaAnalisis',
					type: 'POST',
					dataType: 'json',
					data: {
						Locacion: Locacion,
						Articulo: Articulo,
						Fecha: Fecha,
						Lote: Lote,
						Referencia: Referencia,
						Estado: Estado,
						Descripcion: Descripcion,
						Cliente: Cliente,
						Nombre: Nombre,
						Cantidad: Cantidad,
						UM: UM,
						PH: PH,
						Brix: Brix,
						Cons5sec: Cons5sec,
						Cons30sec: Cons30sec,
						Acasc: Acasc,
						Acidez: Acidez,
						Bar: Bar,
						Color: Color,
						Densidad: Densidad,
						Pnegros: Pnegros,
						Patulina: Patulina,
						Ramacidos: Ramacidos,
						Hongos: Hongos,
						Levadura: Levadura,
						Ecoli: Ecoli,
						Coliformes: Coliformes,
						HongosTerm: HongosTerm,
						Salmonnela: Salmonnela,
						Alyciclo: Alyciclo,
						Howardm: Howardm,
						Generico_1: Generico_1,
						Generico_2: Generico_2,
						Generico_3: Generico_3,
						Generico_4: Generico_4,
						Generico_5: Generico_5,
						Generico_6: Generico_6,
						Generico_7: Generico_7,
						Generico_8: Generico_8,
						Generico_9: Generico_9,
						Generico_10: Generico_10,
						Generico_11: Generico_11,
						Generico_12: Generico_12,
						Generico_13: Generico_13,
						Generico_14: Generico_14,
						Generico_15: Generico_15,
						Generico_16: Generico_16,
						Generico_17: Generico_17,
						Generico_18: Generico_18,
						Generico_19: Generico_19,
						Generico_20: Generico_20,
						Generico_21: Generico_21,
						Generico_22: Generico_22,
						Generico_23: Generico_23,
						Generico_24: Generico_24,
						Generico_25: Generico_25
					},
				})
				.done(function(data) {
					console.log("success ingresaAnalisis:", data);
					if (data) {
						console.log("Cerrando modal..");
						// $("#jsGrid").jsGrid("reset");

						//$("#jsGrid").jsGrid("render");

					$("#jsGrid").jsGrid("insertItem",data);
					$("#jsGrid").jsGrid("refresh");
					$("#jsGrid").jsGrid("reset");



						$('.modal').modal('close');
						swal(
							'Analisis ingresado!',
							'',
							'success'
						)
					} else {
						swal(
							'Error al guardar!',
							'Intentalo nuevamente por favor',
							'error'
						)
					}
				})
				.fail(function(data) {
					console.log("error ingresaAnalisis:", data);
					swal(
						'Error al guardar!',
						'Intentalo nuevamente por favor',
						'error'
					)
				}) //FIN AJAX
		}
	});

	$('body').on('click', '.btn_ingresarn', function(){
		let datos = []
		let txt_prefijo = $('.txt_prefijo').val();
		let txt_desde = $('.txt_desde').val();
		let txt_hasta = $('.txt_hasta').val();
		let txt_lote2 = $('.txt_lote2').val();

		if (txt_prefijo.trim()=='' || txt_desde < 0 || txt_hasta < 0 || txt_lote2.trim()=='') {
			swal('Debes completar todos los campos.');
		}else{

		if (parseInt(txt_hasta)<parseInt(txt_desde)) {
			swal('Debes indicar la referencia menor primero.');
		}else{

		datos.push(txt_prefijo);
		datos.push(parseInt(txt_desde));
		datos.push(parseInt(txt_hasta));
		datos.push(txt_lote2);

		let datosjson = JSON.stringify(datos);

		$.ajax({
			url: base_url+'Welcome/ingresanAnalisis',
			type: 'POST',
			dataType: 'json',
			data: {datos:datosjson}
		}).done(function(data){
			console.log('success ingresanAnalisis');
			console.log(data);

			let variable = '';

			for (var i = 0; i < data.length; i++) {
				console.log(variable);
				variable = '<tr><td>"'+txt_lote2+'"</td><td>"'+data[i]+'"</td></tr>';
			}

			$('#modal1.ingresoReferencias').modal('close');
			swal(
			  'Listo!',
			  `Rango Ingresado`,
			  'success'
			)



		}).fail(function(data){
			console.log(data);
			console.log('success ingresanAnalisis');
		})//FIN AJAX ingresanAnalisis
		}

		}
	});//FIN BTN_INGRESARN

	//VALIDA LOS QUE "NO" ESTAN EN QAD Y LOS MARCA EN ROJO
	$('body').on('click', function() {
  		var largo = $('td.esta_qad').length;
		// console.log(largo);
		for (var i = 2; i < largo; i++) {
			var valor = $('td.esta_qad').eq(i).text();
			if (valor == "NO") {
				$('td.esta_qad').eq(i).css({
					"background-color": 'red'
				});
			}
		}
	});
	//VALIDA LOS QUE "NO" ESTAN EN QAD Y LOS MARCA EN ROJO

	$('.jsgrid-grid-body').children().addClass('test');

//FIN DOCUMENT READY

//FUNCIONES QUE EXPORTAN LO QUE EL USUARIO ESTA VIENDO A EXCEL
$('.btn_csv').on('click', function() {

	swal({
	title: '¿Descargar?',
	text: "Descargaras solo los datos que estan en pantalla!",
	type: 'question',
	showCancelButton: true,
	confirmButtonColor: '#00695C',
	cancelButtonColor: '#d33',
	confirmButtonText: 'Descargar'
}).then((result) => {
	exportTableToCSV();
})
});
function exportTableToCSV(filename) {

	var f = new Date();
	var dd = f.getDay();
	var mm = (f.getMonth() + 1);
	var yy = f.getFullYear();
	var hh = f.getHours();
	var ii = f.getMinutes();
	var ss = f.getSeconds();

	var csv = [];
	var rows = document.querySelectorAll("table.test tr");
  csv.push("#;QAD;Cliente;Locacion;Articulo;Fecha;Lote;Referencia;Estado;Descripcion;Cliente;Nombre;Cantidad;UM;PH;Brix;Cons5sec;Cons30sec;Acasc;Acidez;Bar;Color;Densidad;Pnegros;Patulina;Ramacidos;Hongos;Levadura;Ecoli;Califormes;HongosTerm;Salmonnela;Alyciclo;Howardm;Generico_1;Generico_2;Generico_3;Generico_4;Generico_5;Generico_6;Generico_7;Generico_8;Generico_9;Generico_10;Generico_11;Generico_12;Generico_13;Generico_14;Generico_15;Generico_16;Generico_17;Generico_18;Generico_19;Generico_20;Generico_21;Generico_22;Generico_23;Generico_24;Generico_25");


	for (var i = 0; i < rows.length; i++) {
		var row = [],
			cols = rows[i].querySelectorAll("td.csv, th.csv");

		for (var j = 0; j < cols.length; j++) {
			row.push(cols[j].innerText);
		}

		csv.push(row.join(";"));
	}
	// Download CSV file
	downloadCSV(csv.join("\n"), dd + "-" + mm + "-" + yy + " " + hh + ":" + ii + ":" + ss + ".csv");
}
function downloadCSV(csv, filename) {
	var csvFile;
	var downloadLink;
	// CSV file
	csvFile = new Blob([csv], {
		type: "text/csv"
	});
	// Download link
	downloadLink = document.createElement("a");
	// File name
	downloadLink.download = filename;
	// Create a link to the file
	downloadLink.href = window.URL.createObjectURL(csvFile);
	// Hide download link
	downloadLink.style.display = "none";
	// Add the link to DOM
	document.body.appendChild(downloadLink);
	// Click download link
	downloadLink.click();
}
//FUNCIONES QUE EXPORTAN LO QUE EL USUARIO ESTA VIENDO A EXCEL

//FUNCION CLICK QUE DESCARGA TODA LA DATA DE ANALISIS EN MYSQL
$('.btn_data').on('click', function(){
window.location.href = base_url+'analista/ana_analista_c/descargar_data';
});
//FUNCION CLICK QUE DESCARGA TODA LA DATA DE ANALISIS EN MYSQL

//REPLICA DEL REPORTE INVENTARIO.
$('.btn_menu').on('click', function(){
	$.ajax({
		url: base_url+'lib_liberar_c/menuReporte',
		type: 'POST',
		dataType: 'json'
	})
	.done(function() {
		console.log("success menuReporte");
	})
	.fail(function() {
		console.log("error menuReporte");
	})
});
//REPLICA DEL REPORTE INVENTARIO.

//OCULTA LOS ELEMENTOS DEL FRAMEWORK
$('body').keypress(function() {
	ocultaElem();
});
$('body').on('click', function(){
  ocultaElem();
})
function ocultaElem(){
  $('.jsgrid-insert-mode-button').css({
      display: 'none'
  });
  $('.jsgrid-cancel-edit-button').css({
      display: 'none'
  });
  $('.jsgrid-update-button').css({
      display: 'none'
  });
  $('.jsgrid-delete-button').css({
      // display: 'none' SE COMENTA PARA QUE EL USUARIO LIBERADOR PUEDA BORRAR LINEAS. VALERIE VALDES 19-03-2018
  });
  $('.jsgrid-edit-button').css({
      display: 'none'
  });
  $('.jsgrid-clear-filter-button').css({
      display: 'none'
  });
  $('.jsgrid-search-button').css({
      display: 'none'
  });
}//FIN FUNCTION OCULTAELEM
//OCULTA LOS ELEMENTOS DEL FRAMEWORK

//MODAL PARA INGRESAR N LOTES/REFERENCIAS.
$('.btn_nReferencias').on('click', function(){
	$('#modal1.ingresoReferencias').addClass('bounceOutLeft animated');
	$('#modal3.nReferencias').addClass('bounceInRig  animated').modal('open');
	// });
});
//MODAL PARA INGRESAR N LOTES/REFERENCIAS.

$('.btn_ingresarnReferencias').on('click', function(){
	$('#modal1.ingresoReferencias').removeClass('bounceOutLeft animated').modal('close');
	$('#modal3.nReferencias').addClass('bounceOutLeft animated').modal('close');
	$('#modal3.nReferencias').removeClass('bounceOutLeft animated');
});

$('.btn_cencelarnReferencias').on('click', function(){
	$('.modal').modal('close');
	$('.modal').modal('close');
	$('.modal').removeClass('bounceOutLeft animated');
	$('.modal').removeClass('bounceInRight animated');
});

function cambioBoton(){
	let claseBtn = $('.boton').hasClass('btn_ingresar');
	if(!claseBtn){
		$('.boton').removeClass('btn_ingresarn').addClass('btn_ingresar');
	}else{
		$('.boton').removeClass('btn_ingresar').addClass('btn_ingresarn');
	}
}
