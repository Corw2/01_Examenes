package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



public class NumeroAleatorioServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		procesarPeticion(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		procesarPeticion(request,response);
	}

	
	private void procesarPeticion(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		System.out.println("\n>>>>>>>>>>>> HE LLEGADO AL SERVLET NumeroAleatorioServlet \n");
		
		response.setContentType("text/xml");
		
		PrintWriter escritor = response.getWriter();
		
		// [100 ... 1000]
		final int dineroAleatorio = (int)(Math.random() * 901) + 100;
		
		
		final String respuestaServlet = 
				"{nombre:ALBERTO, edad:25, dinero:" + dineroAleatorio + "}";
		
		// ESCRIBIR SOBRE EL NEGOCIADO AJAX EN SU CUADERNO XML (también se 
		//	escribirá lo mismo en el cuaderno TEXT)
		
		// negociador.responseText		negociador.responseXML
		
		
		// {nombre:ALBERTO, edad:25, dinero:258}
		
		escritor.print(respuestaServlet);
		
	}
	
}
