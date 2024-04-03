<%@page contentType="text/html" pageEncoding="UTF-8"%>


<!DOCTYPE html>


<html>

    <head>

        <!-- CARGA DE LA HOJA DE ESTILOS EXTERNA (se debe separar el contenido de los estilos) -->
        <link rel="stylesheet" type="text/css" href="css/estilos.css"/>
    
        <!-- CODIFICACIÓN DE LA PÁGINA -->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
       
        <title>Formulario CV</title>
    
    </head>
    
    
    <body>
        
        <!-- ALINEACIÓN VERTICAL POR ETIQUETA css ... puede que no funcione para todos los elementos -->
        <h1 style="text-align:center">RELLENA TU CV</h1>

        <!-- ALINEACIÓN VERTICAL POR ETIQUETA <center> ... está deprecated pero es 100% funcional -->
        <center>

            <form action="MiServlet" method="GET">

                <!--

                FIELDSET .... La etiqueta "fieldset" se utiliza para agrupar datos (bolsa) dentro de
                los formularios y genera un recuadro en aquellos que agrupa. Ésto hace que el código
                sea más comprensible.

                LEGEND ...... La etiqueta "legend" sirve para darle un título al grupo de datos creados
                con un fieldset (conjunto de campos).

                -->


                <!-- FIELDSET PARA LOS DATOS PERSONALES -->
                <fieldset>

                    <legend>DATOS PERSONALES</legend>

                    <table>
                        <tr>
                            <td><label>Nombre</label></td>
                            <td><input type="text" name="nombre" id="nombre" value="" size="32" maxlength="30"/></td>
                        </tr>
                        <tr>
                            <td><label>Apellidos</label></td>
                            <td><input type="text" name="apellidos" id="apellidos" value="" size="32" maxlength="30"/></td>
                        </tr>
                        <tr>
                            <td><label>Contraseña</label></td>
                            <td><input type="password" name="password" id="password" value="" size="12" maxlength="10"/></td>
                        </tr>
                        <tr>
                            <td><label>DNI</label></td>
                            <td><input type="text" name="dni" id="dni" value="" size="12" maxlength="10"/></td>
                        </tr>
                        <tr>
                            <td><label>Sexo</label></td>
                            <td>
                                <label>Hombre</label><input type="radio" name="sexo" id="sexoH" value="hombre" checked/>
                                <label>Mujer</label><input type="radio" name="sexo" id="sexoM" value="mujer"/>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Incluir mi foto</label></td>
                            <td><input type="file" name="foto" id="foto"/></td>
                        </tr>
                    </table>

                </fieldset>


                <!-- FIELDSET PARA LOS DATOS DE FORMACIÓN -->
                <fieldset>

                    <legend>FORMACION</legend>

                    <table>
                        <tr>
                            <td><label>Titulo</label></td>
                            <td><input type="text" name="titulo" id="titulo" value="" size="82" maxlength="80"></td>
                        </tr>
                        <tr>
                            <td><label>Nombre del curso</label></td>
                            <td><input type="text" name="curso" id="curso" value="" size="82" maxlength="80"></td> 
                        </tr>
                        <tr>
                            <td><label>Fecha de inicio</label></td>
                            <td><input type="text" name="fechaIniCurso" id="fechaIniCurso" value="01/01/1900" size="12" maxlength="10"> </td>
                        </tr>
                        <tr>
                            <td><label>Fecha de fin</label></td>
                            <td><input type="text" name="fechaFinCurso" id="fechaFinCurso" value="01/01/1900" size="12" maxlength="10"></td>
                        </tr>
                        <tr>
                            <td><label>Actualmente</label></td>
                            <td><input type="checkbox" name="actualmenteCurso" id="actualmenteCurso" value="actualmenteCurso" checked/></td>
                        </tr>
                        <tr>
                            <td><label>Centro</label></td>
                            <td><input type="text" name="centro" id="centro" value="" size="72" maxlength="70"></td>
                        </tr>

                        <!--la siguiente etiqueta label lleva un estilo css configurado como clase cuyo nombre es "destacado"-->
                        <tr>
                            <td><label class="destacado">No quiero que la empresa <br/> vea estos estudios</label></td>
                            <td><input type="checkbox" name="noVerEstudios" id="noVerEstudios" value=""></td>
                        </tr>
                    </table>
                    
                </fieldset>


                <!--FIELDSET PARA LOS DATOS DE EXPERIENCIA LABORAL-->
                <fieldset>

                    <legend>EXPERIENCIA</legend>

                    <table>
                        <tr>
                            <td><label>Puesto</label></td>
                            <td><input type="text" name="puesto" id="puesto" size="52" maxlength="50"></td>
                        </tr>
                        <tr>
                            <td><label>Empresa</label></td>
                            <td><input type="text" name="empresa" id="empresa" size="52" maxlength="50"></td>
                        </tr>
                        <tr>
                            <td><label>Descripción del puesto</label></td>
                            <td><input type="text" name="descripPuesto" id="descripPuesto" size="102" maxlength="100"></td>
                        </tr>
                        <tr>
                            <td><label>Fecha de inicio</label></td>
                            <td><input type="text" name="fechaIniExp" id="fechaIniExp" value="01/01/1900" size="12" maxlength="10"> </td>
                        </tr>
                        <tr>
                            <td><label>Fecha de fin</label></td>
                            <td><input type="text" name="fechaFinExp" id="fechaFinExp" value="01/01/1900" size="12" maxlength="10"></td>
                        </tr>
                        <tr>
                            <td><label>Actualmente</label></td>
                            <td><input type="checkbox" name="actualmenteExp" id="actualmenteExp" value="actualmenteExp" checked/></td>
                        <tr>
                            <td><label>Salario anual percibido</label></td>
                            <td><input type="text" name="salarioExp" id="salario" value="" size="10" maxlength="8"/></td>
                        </tr>
                    </table>

                </fieldset>


                <!--FIELDSET PARA IDIOMAS-->            
                <fieldset>

                    <legend>IDIOMAS</legend>

                    <table>
                        <tr>
                            
                            <td><label>Elige el idioma</label></td>
                            
                            <td>
                                <select name="idioma" size="1">
                                    <option value="ingles" selected>INGLES</option>
                                    <option value="frances">FRANCES</option>
                                    <option value="aleman">ALEMAN</option>
                                    <option value="portugues">PORTUGUES</option>
                                    <option value="italiano">ITALIANO</option>
                                    <option value="otros">OTROS</option>
                                </select>
                            </td>

                            <td><label>Hablado</label></td>
                            
                            <td>
                                <select name="idiomaNivelHablado" id="idiomaNivelHablado" size="1">
                                    <option value="alto" selected>ALTO</option>
                                    <option value="medio">MEDIO</option>
                                    <option value="bajo">BAJO</option>
                                </select>
                            </td>

                            <td><label>Escrito</label></td>
                            
                            <td>
                                <select name="idiomaNivelEscrito" id="idiomaNivelEscrito" size="1">
                                    <option value="alto">ALTO</option>
                                    <option value="medio" selected>MEDIO</option>
                                    <option value="bajo">BAJO</option>
                                </select>
                            </td>

                            <td><label>Leido</label></td>
                            
                            <td>
                                <select name="idiomaNivelLeido" id="idiomaNivelLeido" size="1">
                                    <option value="alto">ALTO</option>
                                    <option value="medio">MEDIO</option>
                                    <option value="bajo" selected>BAJO</option>
                                </select></td>
                        </tr>


                        <tr>
                            <td><label>COMENTARIOS: </label></td>
                            <td><textarea name="comentarios" id="comentarios" cols="20" rows="3"></textarea></td>
                        </tr>

                        <tr>
                            <!--BOTÓN PARA GUARDAR EL IDIOMA SELECCIONADO-->
                            <td><input type="button" name="guardarIdioma" id="guardarIdioma" value="Guardar"/></td>
                            <!--BOTÓN PARA AGREGAR MÁS DE UN IDIOMA-->
                            <td><input type="button" name="agregarIdioma" id="agregarIdioma" value="Agregar otro idioma"/></td>
                        </tr>
                    </table>

                </fieldset>


                <!--FIELDSET PARA LOS DATOS DE OTROS CONOCIMIENTOS-->
                <fieldset>

                    <legend>OTROS CONOCIMIENTOS</legend>

                    <table>
                        <tr>
                            <td><label>Introduce conocimiento</label></td> 
                            <td><input type="text" name="nombreConocimiento" id="nombreConocimiento" value="" size="72" maxlength="70"/></td>
                            <td><label>Nivel</label></td>
                            <td>
                                <select name="nivelConocimiento" id="nivelConocimiento" size="1">
                                    <option value="alto">ALTO</option>
                                    <option value="medio">MEDIO</option>
                                    <option value="bajo" >BAJO</option>
                                </select>
                            </td>

                        <tr>
                            <td><input type="button" name="guardarConocimiento" id="guardarConocimiento" value="Guardar"/></td>
                            <td><input type="button" name="agregarConocimiento" id="agregarConocimiento" value="Agregar otro conocimiento"/></td>
                        </tr>
                    </table>
                    
                </fieldset>


                <!--FIELDSET PARA OTROS DATOS-->
                <fieldset>

                    <legend>OTROS DATOS</legend>

                    <table>
                        <tr>
                            <td><label>Permiso de conducir: </label></td>

                            <!-- GRUPO DE RADIOBUTTONS -->
                            <td><label>SI</label></td>
                            <td><input type="radio" name="permiso" id="permisoSI" value="SI" checked/></td>

                            <td><label>NO</label></td>
                            <td><input type="radio" name="permiso" id="permisoNO" value="NO"/></td>
                        </tr>

                        <tr>
                            <td><label>Vehículo propio: </label></td>

                            <td><label>SI</label></td>
                            <td><input type="radio" name="vehiculo" id="vehiculoSI" value="SI"/></td>

                            <td><label>NO</label></td>
                            <td><input type="radio" name="vehiculo" id="vehiculoNO" value="NO" checked/></td>

                        <tr>
                            <td><label>Autonomo: </label></td>

                            <td><label>SI</label></td>
                            <td><input type="radio" name="autonomo" id="autonomoSI" value="SI"/></td>

                            <td><label>NO</label></td>
                            <td> <input type="radio" name="autonomo" id="autonomoNO" value="NO"/>
                        </tr>
                    </table>

                </fieldset>


                <!--la siguiente etiqueta label lleva un estilo css configurado como la clase de nombre "destacado"-->
                <label class="destacado">Acepto las condiciones</label>
                <input type="checkbox" name="aceptarCondiciones" id="aceptarCondiciones" value="condiciones"/>

                <br/><br/>
                <!--BOTÓN PARA ENVIAR EL FORMULARIO-->
                <input  type="submit" name="enviar" id="enviar" value="Enviar" />

                <!--BOTÓN PARA RESETEAR LOS DATOS DEL FORMULARIO-->
                <input type="reset" name="limpiar" id="limpiar" value="Borrar los datos introducidos" />

            </form>

        </center>
          
        <!-- 
                NOTA: EL PRESENTE EJERCICIO SÓLO MUESTRA EL FORMULARIO CLIENTE (FRONT-END) SIN DISPONER DE 
                    CÓDIGO EN EL LADO DEL SERVIDOR (BACK-END).
        
        -->
    
    </body>
    
</html>