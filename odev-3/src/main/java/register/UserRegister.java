package register;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UserRegister extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String ad = request.getParameter("Ad");
        String soyad = request.getParameter("Soyad");
        String eposta = request.getParameter("Eposta");
        String sifre = request.getParameter("Şifre");

        String userAgent = request.getHeader("User-Agent");


        response.setContentType("text/html");
        response.getWriter().println("<html><head><title>Registration Result</title>");
        response.getWriter().println("<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">"); 
        response.getWriter().println("</head><body>");
        response.getWriter().println("<h1>Kayıt Bilgileri:</h1>");
        response.getWriter().println("<p class=\"info\">Ad: " + ad + "</p>");
        response.getWriter().println("<p class=\"info\">Soyad: " + soyad + "</p>");
        response.getWriter().println("<p class=\"info\">Eposta: " + eposta + "</p>");
        response.getWriter().println("<p class=\"info\">Şifre: " + maskPassword(sifre) + "</p>");
        response.getWriter().println("<p class=\"user-agent\">Tarayıcı Modeli: " + userAgent + "</p>");
        response.getWriter().println("<script>window.setTimeout(function(){ alert('Tarayıcı Modeli: " + userAgent + "'); }, 2000);</script>");
        response.getWriter().println("</body></html>");
    }


    private String maskPassword(String password) {
        StringBuilder maskedPassword = new StringBuilder();
        for (int i = 0; i < password.length(); i++) {
            maskedPassword.append("*");
        }
        return maskedPassword.toString();
    }
}
