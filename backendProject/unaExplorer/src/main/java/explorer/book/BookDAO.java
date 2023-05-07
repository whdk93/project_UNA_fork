package explorer.book;

import java.io.Reader;
import java.util.Iterator;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class BookDAO {
	private static SqlSessionFactory sqlMapper = null;
	
	private static SqlSessionFactory getInstance() {
		if(sqlMapper == null) {
			try {
				String resource = "explorer/SqlMapConfig.xml";
				Reader reader = Resources.getResourceAsReader(resource);
				sqlMapper = new SqlSessionFactoryBuilder().build(reader);
				reader.close();
			} catch (Exception e) {
				System.out.println("😢BookDAO - DB연결 중 에러 발생😢");
				e.printStackTrace();
			}
		}
		return sqlMapper;
	}
	
	//책 페이지 불러오는 메서드
	public List<BookVO> selectBookPages(int bookNum) {
		sqlMapper = getInstance();			//DB연결
		SqlSession session = sqlMapper.openSession();		//사용할 객체 가져옴
		List<BookVO> bookList = session.selectList("mapper.book.selectBookPages", bookNum);
		return bookList;
	}
}
