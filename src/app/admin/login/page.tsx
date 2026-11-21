import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: profile } = await supabase
    .from("admin_users").select("email, role, active").eq("user_id", user.id).maybeSingle();

  if (!profile || !profile.active || profile.role !== "owner") {
    await supabase.auth.signOut();
    redirect("/admin/login?error=not-authorized");
  }

  return (
    <main className="shell" style={{ padding: "42px 0" }}>
      <p className="gold" style={{ letterSpacing: 4 }}>LOTTUS ADMIN</p>
      <h1>Painel administrativo</h1>
      <section className="panel" style={{ padding: 24, marginTop: 24 }}>
        <p>Conta autenticada: <strong>{profile.email}</strong></p>
        <p style={{ color: "#c7c2b7" }}>Acesso validado. O painel está em modo inicial, sem funções de venda ou cobrança.</p>
        <p className="gold">Próxima etapa: cadastrar campanhas institucionais, documentos e relatórios.</p>
        <form action="/auth/signout" method="post"><button className="button">Sair com segurança</button></form>
      </section>
    </main>
  );
}
