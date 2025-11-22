import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export const metadata = { title: "????? ????" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ display: "grid", gap: 16 }}>
        <section className="card">
          <h1 style={{ margin: 0 }}>????? ????</h1>
          <p className="muted">??? ??? ??????? ??? ???? ??????????.</p>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
