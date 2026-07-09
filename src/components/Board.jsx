import "./Board.css";

const posts = [
  { id: 5, title: "공지사항: 서비스 점검 안내", author: "관리자", date: "2026-07-08", views: 128 },
  { id: 4, title: "React + Vite 마이그레이션 후기", author: "홍길동", date: "2026-07-07", views: 64 },
  { id: 3, title: "디자인 가이드 적용 문의드립니다", author: "김철수", date: "2026-07-06", views: 41 },
  { id: 2, title: "게시판 UI 피드백 남겨요", author: "이영희", date: "2026-07-05", views: 33 },
  { id: 1, title: "첫 게시글입니다", author: "홍길동", date: "2026-07-04", views: 12 },
];

export default function Board() {
  return (
    <section className="board">
      <div className="board__header">
        <p className="board__eyebrow">BOARD</p>
        <h2 className="board__title">게시판</h2>
        <button type="button" className="board__write-btn">
          글쓰기
        </button>
      </div>

      <table className="board__table">
        <thead>
          <tr>
            <th className="board__cell board__cell--num">번호</th>
            <th className="board__cell board__cell--title">제목</th>
            <th className="board__cell">작성자</th>
            <th className="board__cell">작성일</th>
            <th className="board__cell">조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="board__row">
              <td className="board__cell board__cell--num">{post.id}</td>
              <td className="board__cell board__cell--title">{post.title}</td>
              <td className="board__cell">{post.author}</td>
              <td className="board__cell">{post.date}</td>
              <td className="board__cell">{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
