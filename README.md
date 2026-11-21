# Lottus Premiação — projeto inicial

Projeto Next.js + Supabase, com identidade visual preta e dourada, página institucional e painel administrativo protegido.

## O que está incluído
- Página institucional inicial.
- Login administrativo por link de uso único enviado por e-mail.
- Verificação de sessão no servidor.
- Lista de administradores autorizados por perfil e função.
- SQL inicial com RLS habilitado.
- Nenhuma venda, seleção de números, cobrança ou sorteio ativo.

## Requisitos
- Node.js 20.9 ou superior.
- Conta Supabase.
- Conta Vercel (para publicação).
- Domínio registrado separadamente no Registro.br.

## Rodar localmente
1. Instale Node.js.
2. Extraia o projeto.
3. Execute `npm install`.
4. Copie `.env.example` para `.env.local`.
5. Preencha URL e chave pública/anon do Supabase.
6. Execute `npm run dev`.
7. Abra `http://localhost:3000`.

## Configurar Supabase
1. Crie um projeto no Supabase.
2. Em Authentication > URL Configuration, configure a URL local e, depois, a URL de produção.
3. Configure o provedor de e-mail e o template de autenticação.
4. Execute `supabase/schema.sql` no SQL Editor.
5. Em Authentication > Users, crie/invite o e-mail do administrador.
6. Copie o UUID do usuário criado.
7. Execute o INSERT comentado no SQL para adicioná-lo a `admin_users`, substituindo UUID e e-mail reais.
8. Configure o redirect `http://localhost:3000/auth/callback` e, em produção, `https://SEU-DOMINIO/auth/callback`.

O login usa link de uso único. O painel só libera o usuário que também constar em `admin_users` com `active=true` e `role='owner'`.

## Publicar na Vercel
1. Envie o projeto para um repositório privado no GitHub.
2. Importe o repositório na Vercel.
3. Cadastre as variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Publique e configure o domínio no painel da Vercel e no Registro.br.
5. Atualize as URLs permitidas no Supabase para o domínio definitivo.

## Segurança antes de produção
- Ative MFA no provedor e para a conta administrativa, se disponível no fluxo escolhido.
- Configure SMTP próprio e limites de envio de magic links.
- Use senha forte na conta de e-mail e MFA no e-mail.
- Mantenha o repositório privado e nunca publique `.env.local`.
- Nunca coloque `service_role` ou segredos no navegador.
- Revise políticas RLS com profissional antes de armazenar dados pessoais.
- Faça backups e teste recuperação.
- Aplique LGPD: aviso de privacidade, finalidade, retenção e canal de contato.
- Configure domínio, HTTPS e monitoramento.

## Limite jurídico e funcional
Este é um starter técnico e institucional. Não implementa venda de rifas, seleção/reserva de números, Pix, sorteio ou distribuição de prêmios. Essas funções não devem ser adicionadas/ativadas sem análise jurídica e autorização aplicável à modalidade concreta.
