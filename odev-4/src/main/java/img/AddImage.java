package img;

import java.io.File;
import java.io.IOException;
import java.util.Collection;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

@MultipartConfig
public class AddImage extends HttpServlet {

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		Collection<Part> parts = req.getParts();

		String uploadDirPath = "C:/temp";
		File uploadDir = new File(uploadDirPath);

		if (!uploadDir.exists()) {
			uploadDir.mkdir();
		}

		for (Part part : parts) {
			String fileName = part.getSubmittedFileName();
			if (fileName != null && !fileName.isEmpty()) {
				part.write(uploadDir + File.separator + fileName);
			}
		}
		res.getWriter().print("Yükleme Tamamlandı");
	}
}