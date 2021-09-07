





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
	$('#pre_disne1').val(data.disne1);
	$('#pre_disne2').val(data.disne2);
	$('#pre_disne3').val(data.disne3);
	$('#pre_disne4').val(data.disne4);
	$('#pre_amzon').val(data.amzon);
	$('#plex4').val(data.plex4);
	$('#hbomax').val(data.hbomax);
	$('#youtube4').val(data.youtube4);
	$('#spotify').val(data.spotify);
	$('#nombre').val(data.nombre);
	$('#saldo').val(data.saldo2);
	$('#tipo2').val(data.tipo);
	$('#subid2').val(data.subid2);
	$('#saldocli').val(data.saldo2);
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
    { "data": 'mensaje' }
	,
    { "data": 'vigencia' }
    ,
    { "data": 'usuario' }
    ,
    { "data": 'fecha' },

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

var table = $2('#dat_table5').dataTable({



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
{ mData: 'id' } ,
{ mData: 'usuario' },
{ mData: 'correo' }
,
{ mData: 'contrasena' }
,
{ mData: 'cliente' }
,
{ mData: 'fecha_emision' }
,
{ mData: 'valor' }
,
{ mData: 'fecha_vence' },

{ mData: 'pantallas' }
,
{ mData: 'renovable' },

{ mData: 'perfiles' },

{ mData: 'pin' }
]


});

return false;

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

	});
}