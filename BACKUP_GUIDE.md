# BACKUP_GUIDE.md - Como Proteger e Fazer Backup do Projeto

## 🛡️ PROTEÇÃO PRINCIPAL: GitHub

**O GitHub é seu backup mais importante.** Todas as mudanças automaticamente protegidas quando você faz push.

### Como Manter o GitHub Atualizado

1. **Após qualquer mudança no site**, execute:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

2. **Confirme sempre que o push foi bem-sucedido**
   - Terminal deve mostrar: `main -> main`

3. **Se não conseguir fazer push:**
   - Verifique sua conexão de internet
   - Verifique se está usando o repositório correto: `https://github.com/Nanahhhhh/aline-gordiano-art-site`
   - Contacte o desenvolvedor

---

## ✅ ANTES DE GRANDES ALTERAÇÕES

### Passo 1: Verificar Status
```bash
git status
```

**O que você vai ver:**
- `Changes not staged for commit:` - Arquivos modificados
- `Untracked files:` - Novos arquivos
- `nothing to commit, working tree clean` - Tudo já foi enviado (seguro)

### Passo 2: Se Há Mudanças Pendentes

**SEMPRE faça backup antes de alterações grandes:**
```bash
git add .
git commit -m "Backup before major changes"
git push origin main
```

### Passo 3: Agora Você Pode Fazer Alterações Seguramente

Se algo der errado, o GitHub salva sua versão anterior.

---

## 🚨 NUNCA FAÇA ISSO

### ❌ Não Apague a Pasta Sem Confirmar

**ANTES de apagar:** `aline-gordiano-art-site-main`

1. Abra o terminal nesta pasta
2. Execute: `git status`
3. Se vir `nothing to commit, working tree clean` - OK PARA APAGAR
4. Se vir mudanças - NÃO APAGUE! Faça push primeiro

### ❌ Não Edite Diretamente no Vercel

Todas as mudanças devem ser feitas:
1. No seu computador (na pasta local)
2. Depois fazer push para GitHub
3. Vercel atualiza automaticamente

### ❌ Não Use Repositórios Antigos

- ❌ `aline-gordiano-old`
- ❌ `aline-gordiano-art` (antigo)
- ✅ APENAS: `aline-gordiano-art-site`

---

## 💾 SE PERDER OS ARQUIVOS NO SEU COMPUTADOR

### Recuperar Tudo do GitHub

Se acidentalmente apagar a pasta ou perder os arquivos:

```bash
# 1. Abra o terminal
# 2. Vá para a pasta onde quer guardar o projeto
cd ~/Downloads

# 3. Clone o repositório do GitHub (baixa tudo novamente)
git clone https://github.com/Nanahhhhh/aline-gordiano-art-site.git aline-gordiano-art-site-main

# 4. Entre na pasta
cd aline-gordiano-art-site-main

# 5. Instale de novo
npm install

# 6. Rode o site
npm run dev
```

**Pronto!** Todos os arquivos serão restaurados do GitHub.

---

## 🔍 VERIFICAR A SAÚDE DO PROJETO

### Status Geral
```bash
git status
```
Deve mostrar: `nothing to commit, working tree clean`

### Histórico de Mudanças
```bash
git log --oneline
```
Mostra todos os commits salvos.

### Sincronizar com GitHub (se estiver desatualizado)
```bash
git pull origin main
```

---

## 🌐 VERIFICAR PROJETO CORRETO NO VERCEL

### Acessar Vercel Dashboard
1. Vá para: https://vercel.com/dashboard
2. Procure por: **aline-gordiano-art-site**
3. Não confunda com projetos antigos ou duplicados
4. Verifique se está linkado ao repositório correto:
   - `Nanahhhhh/aline-gordiano-art-site`

### Confirmar Que O Site Foi Atualizado
1. Após fazer `git push`
2. Aguarde 2-3 minutos
3. Acesse: www.alinegordiano.art
4. Atualize a página (Cmd + Shift + R)
5. Confira que sua mudança aparece

---

## 📋 CHECKLIST DE SEGURANÇA MENSAL

- [ ] Verificar que GitHub está atualizado (`git status`)
- [ ] Confirmar que todas as mudanças foram enviadas (`git push`)
- [ ] Acessar www.alinegordiano.art e confirmar que está funcionando
- [ ] Verificar no Vercel que está linkado ao projeto correto
- [ ] Notificar o desenvolvedor se algo parecer estranho

---

## 🆘 ESTÁ TUDO CONFUSO?

Se você:
- Vê múltiplos projetos no Vercel
- Não sabe qual pasta é a correta
- Tem dúvida sobre qual repositório usar
- Perdeu arquivos

**Contacte o desenvolvedor imediatamente.**

Não intervenha sem ajuda profissional. É melhor ter ajuda do que perder material importante.

---

*Última atualização: 4 de junho de 2026*
