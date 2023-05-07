package explorer.book;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/book.una")
public class BookServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}
	
	private void doHandle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		BookDAO dao = new BookDAO();
		String action = request.getParameter("action");
		System.out.println("action : " + action);
		String nextPage = "";
		//메인페이지 먼저 가야지
		if(action == null || action.equals("explorerPage")) {
//			int bookNum = Integer.parseInt(request.getParameter("value"));
			int bookNum = 1;	
			List<BookVO> bookList = dao.selectBookPages(bookNum);
			request.setAttribute("bookList", bookList);	
			nextPage = "bookInfo/ep-firstdepth.jsp";
		} 
		//책 페이지로 넘어가야지
		else if(action.equals("bookPages")) {
			int bookNum = Integer.parseInt(request.getParameter("value"));
			System.out.println("bookNum(value) : " + bookNum);
//			int bookNum = 1;	
			List<BookVO> bookList = dao.selectBookPages(bookNum);
			request.setAttribute("bookList", bookList);	
			nextPage = "bookInfo/pages.jsp";
		}
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(nextPage);
		dispatcher.forward(request, response);
	}
}
