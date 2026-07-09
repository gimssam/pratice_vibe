import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__card">
        <div className="profile__avatar">홍</div>
        <p className="profile__eyebrow">PROFILE</p>
        <h3 className="profile__name">홍길동</h3>
        <dl className="profile__details">
          <div className="profile__row">
            <dt>연락처</dt>
            <dd>010-1234-5678</dd>
          </div>
          <div className="profile__row">
            <dt>이메일</dt>
            <dd>abcd@abcd.com</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
