





$2(document).ready(function () {
	
var table= $2('#dat_table').DataTable({

	language: {
		processing: "Tratamiento en curso...",
		search: "Buscar&nbsp;:",
		lengthMenu: "Agrupar de _MENU_ items",
		info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
		infoEmpty: "No existen datos.",
		infoFiltered: "(filtrado de _MAX_ elementos en total)",
		infoPostFix: "",
		loadingRecords: "Cargando...",
		zeroRecords: "No se encontraron datos con tu busqueda",
		emptyTable: "No hay datos disponibles en la tabla.",
		paginate: {
			first: "Primero",
			previous: "Anterior",
			next: "Siguiente",
			last: "Ultimo"
		},
		aria: {
			sortAscending: ": active para ordenar la columna en orden ascendente",
			sortDescending: ": active para ordenar la columna en orden descendente"
  
		}
},

scrollY: 400,
	lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],

	dom: 'Bfrtip',
buttons: [
'copy', 'excel'
],

		"ajax":{
			"url" : "include/buscar_admin.php",
			"type" : "POST",
			"data": {  "idsub": $("#idsub").val() ,
			 "dataSrc":""},
			},
			 "columnDefs": [
				{ orderable: false, targets: 0 },
				 
			]		
,

"columns": [
{ "data" : "id" } ,
{ "data" : "nombre" },
{ "data" : "usuario" }
,
{ "data" : "fecha" }
,
{ "data" : "saldo" }
,
{ "data": "tipo" }
,
{ "data" : "idsub" },

{ "data" :"accion"  },

]
		

});

asignaprecio("#dat_table tbody", table);

});

var asignaprecio = function(tbody,table){
  $2(tbody).on("click","a.edita",function(){
	  var data = table.row( $2(this).parents("tr")).data();
	  var usuario =$2("#codigo").val( data.usuario);
	       var id =$2("#codigo2").val( data.id);
  

  $.ajax({
	url : 'include/cargar.php',
	type : 'POST',
	dataType : 'json',
	data : { edit: $("#codigo").val(), edit2: $("#codigo2").val() },
	})

.done(function(data){

	$('#pre_nflx1').val(data.nflx1);
	$('#pre_nflx2').val(data.nflx2);
	$('#pre_nflx3').val(data.nflx3);
	$('#pre_nflx4').val(data.nflx4);
	$('#star').val(data.star);
	$('#crunchy').val(data.crunchy);
	$('#canv').val(data.canva);
	$('#pre_disne4').val(data.disne4);
	$('#pre_amzon').val(data.amzon);
	$('#pre_amzon3').val(data.amzon3);
	$('#plex4').val(data.plex4);
	$('#hbomax').val(data.hbomax);
	$('#youtube4').val(data.youtube4);
	$('#yout_fami').val(data.yout_familiar);
	$('#yout_1m').val(data.yout_1mes);	
	$('#spotify').val(data.spotify);
	$('#xpass').val(data.xboxpass);
	$('#clavi').val(data.clarov);
	$('#nombre').val(data.nombre);
	$('#saldo').val(data.saldo2);
	$('#tipo2').val(data.tipo);
	$('#subid2').val(data.subid2);
	$('#saldocli').val(data.saldo2);
	$('#saldocli2').val(data.saldo2);
})

});
}

$("#bu_cd2").click(function(){ 

	var table =$2("#dat_table6").dataTable().fnDestroy(); 
	var table= $2('#dat_table6').DataTable({
	
		language: {
			processing: "Tratamiento en curso...",
			search: "Buscar&nbsp;:",
			lengthMenu: "Agrupar de _MENU_ items",
			info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
			infoEmpty: "No existen datos.",
			infoFiltered: "(filtrado de _MAX_ elementos en total)",
			infoPostFix: "",
			loadingRecords: "Cargando...",
			zeroRecords: "No se encontraron datos con tu busqueda",
			emptyTable: "No hay datos disponibles en la tabla.",
			paginate: {
				first: "Primero",
				previous: "Anterior",
				next: "Siguiente",
				last: "Ultimo"
			},
			aria: {
				sortAscending: ": active para ordenar la columna en orden ascendente",
				sortDescending: ": active para ordenar la columna en orden descendente"
	  
			}
	},
	
	scrollX: 200,
		lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],
	
		dom: 'Bfrtip',
	buttons: [
	'copy', 'excel'
	],
	
			"ajax":{
				"url" : "include/jerarquia.php",
				"type" : "POST",
				"data": {  "idsub2": $("#codigo2").val() ,
				 "dataSrc":""},
				},
				 "columnDefs": [
					{ orderable: false, targets: 0 },
					 
				]		
	,
	
	"columns": [
	{ "data" : "id" } ,
	{ "data" : "nombre" },
	{ "data" : "usuario" }
	,
	{ "data" : "fecha" }
	,
	{ "data" : "saldo" }
	,
	{ "data": "tipo" }
	,
	{ "data" : "idsub" }
	
	
	]
			
	
	});
	return false;

	
	});
	

function c_dat_s() {
	try {
	  var saldo1 = parseInt(document.f.misaldo.value),
		  saldo2 = parseInt(document.f.saldon.value),
		  saldo3 = parseInt(document.f.saldocli.value);
         

	  document.f.sal_mi.value = saldo1-saldo2;
	
	  document.f.sal_nv.value = saldo3+saldo2;
	} catch (e) {
	}
  }

  $2(document).ready(function () {
    var table =$2('#dat_table4').DataTable({
       

        language: {
            processing: "Tratamiento en curso...",
            search: "Buscar&nbsp;:",
            lengthMenu: "Agrupar de _MENU_ items",
            info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
      
            }
},

scrollX: 200,
        lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],

        dom: 'Bfrtip',
buttons: [
    'copy', 'excel'
],
"ajax":{
    "url" : "include/ren_admon.php",
    "type" : "POST",
    "data": {  "busca": $("#u_s2").val() ,
     "dataSrc":""},
    },
     "columnDefs": [
        { orderable: false, targets: 0 },
         
    ]		
,

"columns": [
	{ "data": 'correo' },
    { "data": 'contrasena' }
    ,
    { "data": 'tipo' }
    ,
    { "data": 'pantallas' }
    ,
    { "data": 'estado' }
    ,
    { "data": 'valor' }
    ,
    { "data": 'mensaje' },

    { "data": 'perfiles' }
	,
    { "data": 'vigencia' }
    ,
    { "data": 'usuario' }
    ,
    { "data": 'fecha' }
	,

	{ "data": 'accion' }
  
    ]

    });


	renov("#dat_table4 tbody", table);
});

var renov = function(tbody,table){
	$2(tbody).on("click","a.edita",function(){
		var data = table.row( $2(this).parents("tr")).data();
		var correo =$2("#correo").val( data.correo);
			 var contrasena =$2("#contrasena").val( data.contrasena);
			 var vigencia =$2("#v_g").val( data.vigencia);
			 var usuario =$2("#us").val( data.usuario);
			 var perfiles =$2("#per").val( data.perfiles);

	});
}
	

$2(document).ready(function () {
	$2('#dat_table5').DataTable({
	   

		language: {
			processing: "Tratamiento en curso...",
			search: "Buscar&nbsp;:",
			lengthMenu: "Agrupar de _MENU_ items",
			info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
			infoEmpty: "No existen datos.",
			infoFiltered: "(filtrado de _MAX_ elementos en total)",
			infoPostFix: "",
			loadingRecords: "Cargando...",
			zeroRecords: "No se encontraron datos con tu busqueda",
			emptyTable: "No hay datos disponibles en la tabla.",
			paginate: {
				first: "Primero",
				previous: "Anterior",
				next: "Siguiente",
				last: "Ultimo"
			},
			aria: {
				sortAscending: ": active para ordenar la columna en orden ascendente",
				sortDescending: ": active para ordenar la columna en orden descendente"
	  
			}
},

scrollY: 400,
		lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],

		dom: 'Bfrtip',
buttons: [
	'copy', 'excel'
]
	});
});



$("#reporte").click(function(){ 

var table =$2("#dat_table5").dataTable().fnDestroy(); 

var table = $2('#dat_table5').DataTable({



language: {
			processing: "Tratamiento en curso...",
			search: "Buscar&nbsp;:",
			lengthMenu: "Agrupar de _MENU_ items",
			info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
			infoEmpty: "No existen datos.",
			infoFiltered: "(filtrado de _MAX_ elementos en total)",
			infoPostFix: "",
			loadingRecords: "Cargando...",
			zeroRecords: "No se encontraron datos con tu busqueda",
			emptyTable: "No hay datos disponibles en la tabla.",
			paginate: {
				first: "Primero",
				previous: "Anterior",
				next: "Siguiente",
				last: "Ultimo"
			},
			aria: {
				sortAscending: ": active para ordenar la columna en orden ascendente",
				sortDescending: ": active para ordenar la columna en orden descendente"
			}
},


	   scrollX: true,
		dom: 'Bfrtip',
buttons: [
	'copy', 'excel'
],

"ajax":{
    "url" : "include/reporte_venta_admon.php",
    "type" : "POST",
    "data": {  
     "dataSrc":""},
    },
     "columnDefs": [
        { orderable: false, targets: 0 },
         
    ]	,
"columns": [
{ data: 'id' } ,
{ data: 'usuario' },
{ data: 'correo' }
,
{ data: 'contrasena' }
,
{ data: 'cliente' }
,
{ data: 'fecha_emision' }
,
{ data: 'valor' }
,
{ data: 'fecha_vence' },

{ data: 'pantallas' }
,
{ data: 'renovable' },

{ data: 'perfiles' },

{ data: 'pin' }
]
, 
"footerCallback": function ( row, data, start, end, display ) {
	var api = this.api(), data;

	// Remove the formatting to get integer data for summation
	var intVal = function ( i ) {
		return typeof i === 'string' ?
			i.replace(/[\$,]/g, '')*1 :
			typeof i === 'number' ?
				i : 0;
	};

	// Total over all pages
	total = api
		.column( 6 )
		.data()
		.reduce( function (a, b) {
			return intVal(a) + intVal(b);
		}, 0 );

	// Total over this page
	pageTotal = api
		.column( 6, { page: 'current'} )
		.data()
		.reduce( function (a, b) {
			return intVal(a) + intVal(b);
		}, 0 );

	// Update footer
	$2( api.column( 6 ).footer() ).html(
		'$'+pageTotal +' ( $'+ total +' total)'
	);
}

});


});


$2(document).ready(function () {

 
    var table =$2('#dat_table9').DataTable({
       

        language: {
            processing: "Tratamiento en curso...",
            search: "Buscar&nbsp;:",
            lengthMenu: "Agrupar de _MENU_ items",
            info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
      
            }
},

scrollY: 400,
        lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],

        dom: 'Bfrtip',
buttons: [
    'copy', 'excel'
],

"ajax":{
    "url" : "include/report_f_adm.php",
    "type" : "POST",
    "data": { 
     "dataSrc":""},
    },
     "columnDefs": [
        { orderable: false, targets: 0 },
         
    ]		
,

"columns": [
	{ "data": 'usuario' },
    { "data": 'correo' },
    { "data": 'contrasena' }
      ,
    { "data": 'estado' }
    ,
    { "data": 'tipo' }
    ,
    { "data": 'mensaje' }
    ,
    { "data": 'fecha' } ,

    { "data": 'perfiles' },

    { "data": 'accion' }

    ]

    });
	fallo("#dat_table9 tbody", table);
    return false;
});

var fallo = function(tbody,table){
	$2(tbody).on("click","a.edita",function(){
		var data = table.row( $2(this).parents("tr")).data();
         	var correo =$2("#correo").val( data.correo);
			 var contrasena =$2("#contrasena").val( data.contrasena);
			 var usuario =$2("#us").val( data.usuario);
			 var perfiles =$2("#per").val( data.perfiles);

	});
}


function c_dat_r() {
	try {
	  var saldo1 = parseInt(document.f.misaldo2.value),
		  saldo2 = parseInt(document.f.saldon2.value),
		  saldo3 = parseInt(document.f.saldocli2.value);
		 

	  document.f.sal_mi2.value = saldo1+saldo2;
	
	  document.f.sal_nv2.value = saldo3-saldo2;
	} catch (e) {
	}
  }

  $2(document).ready(function () {

 
    var table =$2('#dat_table10').DataTable({
       

        language: {
            processing: "Tratamiento en curso...",
            search: "Buscar&nbsp;:",
            lengthMenu: "Agrupar de _MENU_ items",
            info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
      
            }
},

        dom: 'Bfrtip',
buttons: [
    'copy', 'excel'
],

"ajax":{
    "url" : "include/movi.php",
    "type" : "POST",
    "data": {  "busca": $("#u_s").val() ,
     "dataSrc":""},
    },
     "columnDefs": [
        { orderable: false, targets: 0 ,  
     }]	
,

"columns": [
    { "data": 'id' },
    { "data": 'mensaje' }
    
    ]

    });

    return false;
});
