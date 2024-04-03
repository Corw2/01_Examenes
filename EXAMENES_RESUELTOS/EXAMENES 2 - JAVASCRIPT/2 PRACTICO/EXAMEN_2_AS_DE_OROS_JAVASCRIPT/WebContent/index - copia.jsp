<%@page contentType="text/html; charset=ISO-8859-1"	pageEncoding="UTF-8"%>

<!DOCTYPE html>


<html>

	<head>
		<meta charset="UTF-8">
		<title>MASTER JAVA</title>
		
		<script type="text/javascript">
		
			var cartasOriginales;
			
			var dinero = 3;


			
			function f_iniciar() {
				
				//alert("FUNCION INICIAR");	
				
				document.getElementById("mensaje").innerHTML = "";
				
				
				
				if(dinero == 0) {
					
					document.getElementById("mensaje").innerHTML =
						"!!! SE ACABO EL JUEGO. RECARGA LA PAGINA !!!";
					
					document.getElementById("botonNuevaPartida").style.display = "none";
					
					return;
					
				}
				
				
				document.getElementById("dineroActual").innerHTML = dinero;
				
				
				cartasOriginales  = ["imagenes/espadas.jpg",
				              			"imagenes/bastos.jpg",
				                		"imagenes/copas.jpg"];			

				
				f_colocarCartas();
				
				f_asignarAS();
				
				
				
				var lasCartas = document.getElementsByName("cartas");				
				
				for (var indice in lasCartas) {				
					lasCartas[indice].disabled = false;
				}
				
				document.getElementById("botonMostrarCartas").style.display="none";
				
				document.getElementById("botonNuevaPartida").style.display="none";

			}

			
			
			function f_colocarCartas() {
				
				var lasCartas = document.getElementsByName("cartas");
				
				for (var posicion in lasCartas) {
					lasCartas[posicion].src = "imagenes/carta.jpg";
				}
								
			}

			
			function f_asignarAS() {
				
				var posicionAS = f_generarAleatorio();
				
				cartasOriginales[posicionAS]="imagenes/as.jpg";
				
			}
			
			
			
			function f_visualizarCarta(evento) {
				
				var fuente = evento.target;
				
				var cartaID = fuente.id;
				
				//alert("¿QUE CARTA? " + cartaID);
				
				
				var cartaPosicion = parseInt(cartaID);
				
				var lasCartas = document.getElementsByName("cartas");
				
				var queCarta = cartasOriginales[cartaPosicion];
				
				lasCartas[cartaPosicion].src = queCarta;
				
				
				if(queCarta == "imagenes/as.jpg") {
					
					document.getElementById("mensaje").innerHTML =
												"!!! PREMIO !!!";
					
					dinero += 1;
					
				} else {
					
					document.getElementById("mensaje").innerHTML =
						"!!! FALLO !!!";
					
					dinero -= 1;
	
				} 
				
				for (var indice in lasCartas) {				
					lasCartas[indice].disabled = true;
				}
				
				document.getElementById("botonMostrarCartas").style.display="block";				
				
				document.getElementById("botonNuevaPartida").style.display="block";
			
				document.getElementById("dineroActual").innerHTML = dinero;
				
			}
			
			
			function f_mostrarCartas() {
				
				var lasCartas = document.getElementsByName("cartas");
				
				for (var posicion in lasCartas) {
					lasCartas[posicion].src = cartasOriginales[posicion];
				}				
				
			}			
			
			
			
			function f_generarAleatorio(rango) {
				
				//alert("FUNCION GENERAR NUMERO ALEATORIO");
				
				// [0 .. rango-1]
				
				if(rango == undefined) {
					//alert("SE ASIGNA 3 POR DEFECTO AL RANGO");
					rango = 3; // [0,1,2]
				}
				
				var aleatorio = parseInt(Math.random() * rango)
				
				//alert("ALEATORIO = " + aleatorio);
				
				return aleatorio;
			}
						
			
			
		</script>		
		
	</head>
	
	
	
	
	
	
	
	
	
	

	
	<body onload="f_iniciar();">
	
		<div align="center">
					
			<h1> - BUSCAR EL AS DE OROS - </h1>

			
			<br/><br/>


			<a href="index.jsp"> RECARGAR JUEGO (se resetea todo) </a>
			
			
			<br/><br/>
			
			
			
			<label> DINERO: </label>
			
			&nbsp;&nbsp;&nbsp;
			
			<span id="dineroActual" style="color:red; font-size:40px"></span> 
			
			
			
			<br/><br/><br/>
			
			
			<table>
				
				<tbody>
				
					<tr>
					
						<td>
							<input type="image" src="imagenes/carta.jpg"
								id="0" name="cartas"
								onclick="f_visualizarCarta(event);"
								style="width:150px; height:150px"/>
						</td>
					
						<td>
							<input type="image" src="imagenes/carta.jpg"
								id="1" name="cartas"
								onclick="f_visualizarCarta(event);"
								style="width:150px; height:150px"/>
						</td>


						<td>
							<input type="image" src="imagenes/carta.jpg"
								id="2" name="cartas"
								onclick="f_visualizarCarta(event);"
								style="width:150px; height:150px"/>
						</td>

					</tr>
				
				</tbody>				
				
			</table>
			
			
			
			<br/><br/><br/>
			

			
			<input type="button"  id="botonMostrarCartas" value="MOSTRAR CARTAS" 
						onclick="f_mostrarCartas();"/>
			
			
			<br/><br/>
			
				
			<input type="button"  id="botonNuevaPartida" value="NUEVA PARTIDA" 
						onclick="f_iniciar();" 
							style="width:200px; height:80px;"/>
				
				
				
				
			<br/><br/><br/>
			
			
			
			<div id="mensaje" style="color:orange; font-size:60px; font-weight:bolder"></div>								
				
				
			<br/><br/>				
				
		</div>
	</body>

</html>







