import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header style={{ borderBottom: "1px solid #3c3425" }}>
        <div className="shell" style={{ padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><strong className="gold" style={{ fontSize: 28, letterSpacing: 5 }}>LOTTUS</strong><div style={{ letterSpacing: 4, fontSize: 12 }}>PREMIAÇÃO</div></div>
          <Link className="button" href="/admin/login">Lottus Admin</Link>
        </div>
      </header>
      <section className="shell" style={{ padding: "72px 0 54px" }}>
        <p className="gold" style={{ letterSpacing: 3, fontSize: 12 }}>INSTITUCIONAL</p>
        <h1 style={{ fontSize: "clamp(38px, 7vw, 68px)", lineHeight: 1.05, maxWidth: 760, margin: "14px 0" }}>Transparência, responsabilidade e impacto social.</h1>
        <p style={{ color: "#c7c2b7", fontSize: 18, lineHeight: 1.7, maxWidth: 700 }}>
          Bem-vindo ao projeto Lottus. Esta página é uma versão inicial institucional.
          Informações sobre campanhas, participação e arrecadação só serão publicadas
          depois da validação jurídica e das autorizações aplicáveis.
        </p>
        <div className="panel" style={{ padding: 24, marginTop: 34, maxWidth: 720 }}>
          <h2 className="gold" style={{ marginTop: 0 }}>Campanhas e transparência</h2>
          <p style={{ color: "#c7c2b7", lineHeight: 1.6 }}>
            Em breve, este espaço poderá apresentar informações institucionais,
            relatórios e documentos de campanhas regularmente autorizadas.
          </p>
          <span style={{ color: "#d9b45b", fontSize: 13 }}>Nenhuma venda ou pagamento está ativo nesta versão.</span>
        </div>
      </section>
      <footer style={{ borderTop: "1px solid #3c3425", color: "#aaa397", padding: 24, textAlign: "center", fontSize: 12 }}>
        Lottus Premiação · Projeto inicial
      </footer>
    </main>
  );
}
