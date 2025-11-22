export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer container">
      <span className="muted">? {year} ???? ?????? ??????</span>
      <div className="badge-list">
        <span className="badge-pill">Next.js</span>
        <span className="badge-pill">React</span>
        <span className="badge-pill">Vercel</span>
      </div>
    </footer>
  );
}
