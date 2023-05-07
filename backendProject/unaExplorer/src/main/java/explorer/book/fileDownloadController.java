package explorer.book;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/download.do")
public class fileDownloadController extends HttpServlet {
	private static String IMG_REPO = "D:\\eclipse\\backendProject\\unaExplorer\\src\\main\\webapp\\bookInfo\\images\\book";
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}

	private void doHandle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String bookNum = request.getParameter("bookNum");
		String pageNum = request.getParameter("pageNum");
		String imageFileName = request.getParameter("imageFileName");
		//OutputStream : 클라이언트 화면에 보내주는 것
		OutputStream outs = response.getOutputStream();
		String path = IMG_REPO + "\\" + bookNum + "\\" + pageNum  + "\\" + imageFileName;
		File imageFile = new File(path);
		response.setHeader("Cache-Control", "no-cache");
		//이미지 파일을 내려받는데 필요한 response 해더 정보를 설정
		response.addHeader("Content-disposition", "attachment:fileName=" + imageFileName);
		FileInputStream fis = new FileInputStream(imageFile);
		byte[] buffer = new byte[1024*8]; //버퍼를 이용하여 한 번에 8k씩 전송
		while(true) {
			int count = fis.read(buffer);
			if(count == -1) break;
			           //얘를, 여기부터, 여기까지 돌면서 출력
			outs.write(buffer, 0, count);
		}
		fis.close();
		outs.close();
	}
}
