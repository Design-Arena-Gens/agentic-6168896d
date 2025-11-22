import Link from "next/link";

export default function Header() {
  return (
    <header className="header container">
      <div className="logo">
        <img src="/logo.svg" alt="logo" width="28" height="28" />
        <span>?????</span>
        <span className="badge">Next.js</span>
      </div>
      <nav className="nav">
        <Link href="/">????????</Link>
        <Link href="/about">?? ???</Link>
        <Link href="/services">???????</Link>
        <Link href="/contact">?????</Link>
      </nav>
    </header>
  );
}
