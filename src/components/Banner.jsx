import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <p className="banner__eyebrow">WELCOME</p>
      <h1 className="banner__title">Hello, Claude!</h1>
      <p className="banner__subtitle">
        React + Vite로 새로 구성한 게시판 데모 페이지입니다.
      </p>
    </section>
  );
}
