function almacenaStoragePagoAux(selPagoAux){
	localStorage.setItem('selPagoAux', JSON.stringify(selPagoAux));
}
function obtieneStoragePagoAux(){
	var datObj=null;
	if(typeof(Storage) != "undefined") {
		datObj = JSON.parse(localStorage.selPagoAux);
	}
	return datObj;	
}
function validaDatosPago() {

	var arrayBoleta = new Array();
	var cont = "0";
	var formulario = document.forms.length;
		for(var i=0; i<formulario; i++){
			var formulario2 = document.forms[i].length;
	 		for(var j=0; j<formulario2; j++){
	 			if(document.forms[i].elements[j].checked){
		 			cont = "1";
		 			if(arrayBoleta == ""){
		 				arrayBoleta = document.forms[i].elements[j].value;	
		 			}else{
		 				arrayBoleta = arrayBoleta +","+ document.forms[i].elements[j].value;
		 			}
	 			}
	 }	
	}

		var arregloIIIPago = new Array();
		if(arrayBoleta == ""){
			retorno = "";
			arregloIIIPago = "";
		}else{	
		var arraynewPago2 = arrayBoleta.split(",");
			for(var i=0; i< arraynewPago2.length; i++ ){			
				var auxPago2 = arraynewPago2[i].split("#");
				
				if(arregloIIIPago == ""){
					arregloIIIPago =  auxPago2[0];
				}else{
					arregloIIIPago = arregloIIIPago + "," + auxPago2[0];
				}
			}
			
			arrayBoleta = arregloIIIPago;
					
		}	
if(document.flujoPago.SessionRG.value == ""){
			
			var Rut = document.flujoPago.rutPago.value;
			var Correo = document.flujoPago.CorreoUser.value;
			var CorreoD = document.flujoPago.CorreoDominio.value;
			
			
			
			if (Rut == "") {

			alert("Ingrese su Rut");
			document.flujoPago.rutPago.focus();
			document.flujoPago.rutPago.value = "";

			}

			if ((Rut != "") && (Correo == "")) {

			alert("Ingrese su correo electr\xF3nico");
			
			document.flujoPago.CorreoUser.focus();
			document.flujoPago.CorreoUser.value = "";
			}

			if ((Rut != "") && (Correo != "") && (CorreoD == "")) {
			alert("Correo Electronico No V\xE1lido");
			document.flujoPago.CorreoDominio.focus();
			document.flujoPago.CorreoDominio.value = "";
			}
			
			
			if (Rut != "" && Correo != "" && CorreoD != "" && cont != "0"){	
				
				
				if(validaRut(Rut)){
					 if(valida_texto_total(Correo,"mail1")){
						 
						 if(valida_texto_total(CorreoD,"mail2")){
								document.flujoPago.CheckPagoBol.value =  arrayBoleta.toString();
								almacenaFormasDatosPersonales();
								document.flujoPago.submit();
						 }else{
							 alert("Correo Electronico No V\xE1lido");
							 document.flujoPago.CorreoDominio.value = ""; 
								document.flujoPago.CorreoDominio.focus(); 
						 }

					 }else{
							alert("Ingrese su correo electr\xF3nico");
							document.flujoPago.CorreoUser.value="";
							document.flujoPago.CorreoUser.focus();
					 }					
				}else{
					alert("Ingrese un Rut V\xE1lido");
					document.flujoPago.rutPago.value="";
					document.flujoPago.rutPago.focus();
				}
				
			
				
			}else{				
				
				if (Rut != "" && Correo != "" && CorreoD != "" && cont == "0"){			
						alert("Debe seleccionar al menos una boleta.");				

					}
			}
			
			
		}else{
			
			if(cont == "0"){
				
				alert("Debe seleccionar al menos una boleta.");	
			}else{
			document.flujoPago.CheckPagoBol.value =  arrayBoleta.toString();
			almacenaFormasDatosPersonales();
			document.flujoPago.submit();
			}
			}
		
			
			
	}
function rut_menu(a, b) {
	Sum = 0;
	digito = 0;
	factor = 2;
	largo = a.length;
	while (largo !== 0) {
		Sum = Sum + a.substring(largo, largo - 1) * factor;
		if (factor == 7)
			factor = 2;
		else
			factor = factor + 1;
		largo = largo - 1;
	}
	d = 11 - Sum % 11;
	if (d == "10")
		digito = "K";
	else if (d == "11")
		digito = 0;
	else
		digito = d;
	return digito == b ? true : false;
}
function formatearRut_menu(b) {
	var c = b.length, a = "";
	if (c < 10) {
		for (var i = 10; i > c; i--)
			a += "0";
		a += b;
	} else
		a = b;
	return a;
}
function trim_menu(a) {
	largo = a.length;
	m = 0;
	while (m < largo) {
		caracter = a.substring(m, m + 1);
		if (caracter != " ")
			break;
		m++;
	}
	if (m == largo)
		return "";
	n = 0;
	while (n < largo) {
		caracter = a.substring(largo - n - 1, largo - n);
		if (caracter != " ")
			break;
		n++;
	}
	a = a.substring(m, largo - n);
	return a;
}
function formatear3_menu(a) {
	if (a.rutPago.value != "") {
		var valor_rut = a.rutPago.value;
		valor_rut = valor_rut.replace(".", "");
		valor_rut = valor_rut.replace(".", "");
		valor_rut = valor_rut.replace(".", "");
		valor_rut = valor_rut.replace("-", "");
		
		if (valor_rut.length > 1)
			a.rutPago.value = insertapuntos_menu(valor_rut.substring(0,
					valor_rut.length - 1))
					+ "-" + valor_rut.substring(valor_rut.length - 1, valor_rut.length);
	}	
	if((a.rutPago.value)!= ""){
	if (!validaRut(a.rutPago.value)) {
		a.rutPago.value = "";
		a.rutPago.focus();
		alert("Ingrese un Rut v\xE1lido");	
		return
	}
}
	
}
function formatear4_menu(a) {
	var valor_rut = a.rutPago.value;
	valor_rut = valor_rut.replace(".", "");
	valor_rut = valor_rut.replace("-", "");
	a.rutPago.value = valor_rut;
}
function solorut_menu(b) {
	var c = window.event ? true : false, a = c ? b.keyCode : b.which;
	return a == 8 || a == 107 || a == 75 || a <= 13 || a > 47 && a < 58;
}
function Right_menu(a, b) {
	strtemp = "";
	intlargo = a.length - 1;
	for (var i = 1; i <= b; i++) {
		strtemp = strtemp + a.charAt(intlargo);
		intlargo--;
	}
	strtmp2 = "";
	for (var intlargo = strtemp.length - 1; intlargo >= 0; intlargo--)
		strtmp2 = strtmp2 + strtemp.charAt(intlargo);
	return strtmp2;
}
function insertapuntos_menu(d) {
	var c = [], a = d;
	a = new Number(a);
	a = new String(a);
	if (a.length > 3) {
		for ( var b = 0; a.length > 3; b++) {
			c[b] = Right_menu(a, 3);
			a /= 1e3;
			a = new String(a);
			if (a.indexOf(".") != -1)
				a = a.substr(0, a.indexOf("."));
		}
		for (b--; b >= 0; b--)
			a = a + "." + c[b];
	}
	return a;
}
function DespliegaMedios(url,arrayPagos,validacion){		
		if(arrayPagos == ""){
			alert("No se acepta pagar $0");	
		}else{
		var querystring = new Array(); 
		querystring['TipoDePago'] = validacion;
		querystring['arrayPagos'] = arrayPagos;
		var bindArgs = {
			url: url,
			method: "POST",
			content: querystring,
			sync: true,
			handle: function(type, data, evt) {			
				document.getElementById("tablaGrilla").innerHTML ="";
				document.getElementById("tablePagototal").innerHTML ="";
				document.getElementById('mensajeTable2').innerHTML ="";
				
				if (type == "error") {                        
		 			window.location="https://www.servipag.com/CreacionArchivos/RedireccionError?id_error=3";
				}else{						
					if (type == "error_servicio") {
	  					window.location="https://www.servipag.com/CreacionArchivos/RedireccionError?id_error=2";
					}else{
						if (type == "error_codigo") {
							window.location="https://www.servipag.com/CreacionArchivos/RedireccionError?id_error=1";
						}else{
				var div = document.getElementById("vistaGrillaPago");
							
				div.innerHTML = "";
				div.innerHTML = type;
				
				
				document.getElementById('mensajeBloqueo').style.display = 'block';
				document.getElementById('mensajeTable2').innerHTML = document.getElementById('mensajeTable').innerHTML;
				
						}
					}
				}
			},
			mimetype: "text/html"	
		};
		dojo.xhrPost(bindArgs);
		sumaTotales();
		}
	
}


function getElementsByClass( searchClass, domNode, tagName) { 
	if (domNode == null) domNode = document;
	if (tagName == null) tagName = '*';
	var el = new Array();
	var tags = domNode.getElementsByTagName(tagName);
	var tcl = " "+searchClass+" ";
	for(i=0,j=0; i<tags.length; i++) { 
		var test = " " + tags[i].className + " ";
		if (test.indexOf(tcl) != -1) 
			el[j++] = tags[i];
	} 
	return el;
}


var total = 0;

function BtnVolver(){
	document.pagos.BtnVolver.value = "1";
	document.pagos.submit();
}
function activoPagosPC(valor,accion,validacion){
	switch(accion) {
    case 1:
    	validaPagos(validacion);
    	document.getElementById("CtasNediosPagos").style.display = "block";
		var selAntes=document.getElementById("cboFormaPagoh").value;
		if(selAntes!=""){
			document.getElementById(selAntes).style.display = "none";
		}
		document.getElementById("cboFormaPagoh").value =valor;
		document.getElementById(valor).style.display = "block";
        break;
    case 2:
    	document.getElementById("cboInstitucion").value =valor;
    	break;
		
	}
}

function almacenaFormas(){
	var cboFormaPago=document.getElementById("cboFormaPagoh").value;
	var cboInstitucion=document.getElementById("cboInstitucion").value;
	var rut="";
	var email1="";
	var email2="";	
	var dataActiva=obtieneStoragePagoAux();

	if (dataActiva!=null){
		if(dataActiva.rutCliente!=undefined)
		{
			rut=dataActiva.rutCliente;
		}
		if(dataActiva.email1!=undefined){
			email1=dataActiva.email1;	
		}
		if(dataActiva.email2!=undefined){
			 email2=dataActiva.email2;
		}
	}
	var selPago = {
        "formaPago": cboFormaPago,
        "medioPago": cboInstitucion,
        "rutCliente":rut,
        "email1":email1,
        "email2":email2
    };
    almacenaStoragePago(selPago);	
}
function almacenaFormasDatosPersonales(){
	
	var rut=null;
	var email1=null;
	var email2=null;
	if(document.flujoPago.rutPago){
		 rut = document.flujoPago.rutPago.value;
		 email1 = document.flujoPago.CorreoUser.value;
		 email2 = document.flujoPago.CorreoDominio.value;
	}
	
	
	var selPagoAux = {
        "rutCliente":rut,
        "email1":email1,
        "email2":email2
    };
    almacenaStoragePagoAux(selPagoAux);	
}
function activaDatosPersonales(){
	var dataActiva=obtieneStoragePago();	
	if (dataActiva!=null){		
		if(dataActiva.rutCliente != undefined){
			document.flujoPago.rutPago.value =dataActiva.rutCliente ;	
		}
	if(dataActiva.email1 !=undefined ){
		document.flujoPago.CorreoUser.value = dataActiva.email1;
	}
	if(dataActiva.email2 != undefined){
		document.flujoPago.CorreoDominio.value= dataActiva.email2;}
	}
}
function activaFormas(url){
	var dataActiva=obtieneStoragePago();
	if (dataActiva!=null){
		var formapago =dataActiva.formaPago;
		var valordeajax = ajaxStorage(url,formapago);
		var arrayBloqueos = new Array();
		arrayBloqueos  = valordeajax.split("|");
		var bloqueo = arrayBloqueos[0];
		var tipoBloqueo =arrayBloqueos[1];		
		if(bloqueo == "bloqueo"){
			
		} else {	
			var largo=document.pagos.checkForma.length;
			var formaAux="NOK";
			if(largo!= undefined){
				for (var i=0; i<largo; i++) {
				  	var valorForma=document.pagos.checkForma[i].value;
				    if(valorForma==dataActiva.formaPago){
				       document.pagos.checkForma[i].checked =true;
				       formaAux="OK";
				    }
				}
			}else{
				document.pagos.checkForma.checked  =true;
				formaAux="OK";
			}
			if(formaAux=="OK"){
				activoPagosPC(dataActiva.formaPago,1,tipoBloqueo);
				var aux = "B"+dataActiva.formaPago+dataActiva.medioPago;
				document.getElementById(aux).className = "entidadSeleccionada";	
			}
		}
	}
}

function ajaxStorage(url,forma){
	var resultado ="";	
	var querystring = new Array(); 
	querystring['formaPago'] = forma;
	var bindArgs = {
		url: url,
		method: "POST",
		content: querystring,
		sync: true,
		handle: function(type, data, evt) {			
			if (type == "error") {                        
	 			window.location="https://www.servipag.com/CreacionArchivos/RedireccionError?id_error=3";
			}else{						
				if (type == "error_servicio") {
  					window.location="https://www.servipag.com/CreacionArchivos/RedireccionError?id_error=2";
				}else{
					if (type == "error_codigo") {
						window.location="https://www.servipag.com/CreacionArchivos/RedireccionError?id_error=1";
					}else{
						resultado = type;
					}
				}
			}
		},
		mimetype: "text/html"	
	};
	dojo.xhrPost(bindArgs);
	return  resultado;	
	}
