# Disparo WhatsApp - MyChatBot

Este repositório disponibiliza uma página estática para disparo de mensagens via WhatsApp utilizando a API MyChatBot, empacotada em Docker.

---

## 📁 Estrutura do Projeto

```
├── index.html           # Interface de configuração, login e disparo
├── Dockerfile           # Container Nginx que serve a página
├── docker-compose.yml   # Orquestração do container via Docker Compose
├── README.md            # Documentação (este arquivo)
└── .gitignore           # Ignora arquivos desnecessários
```

---

## 🚫 .gitignore Sugerido

```
# Node modules (caso use JavaScript extras)
node_modules/
# macOS
.DS_Store
# Build output
dist/
# Chaves e configurações locais
.env
```

---

## 🚀 Publicação no GitHub

Você pode adicionar seus arquivos tanto localmente quanto pela interface web:

### 1. Via Interface Web (sem Git local)

1. Acesse o repo: `https://github.com/guihrst/disparo-whatspp`.  
2. Clique em **Add file** → **Upload files**.  
3. Selecione os seguintes arquivos e faça upload:  
   - `index.html`  
   - `Dockerfile`  
   - `docker-compose.yml`  
   - `.gitignore`  
   - `README.md`  
4. Adicione mensagem de commit (ex.: `Adicionar arquivos iniciais`) e confirme.

### 2. Via Git Local

```bash
# Clone o repositório
git clone https://github.com/guihrst/disparo-whatspp.git
cd disparo-whatspp

# Copie seus arquivos para este diretório
# (index.html, Dockerfile, docker-compose.yml, .gitignore, README.md)

# Adicione e commite
git add .
git commit -m "Inicializa projeto Disparo WhatsApp"

# Envie para o GitHub
git push origin main
```

> **Importante:** confirme o branch padrão (`main`) na página do GitHub antes de dar push.

---

## 🚩 Deploy com Portainer via GitHub

O Portainer pode usar diretamente o repositório remoto para deploy:

1. No Portainer, vá em **Stacks** → **Add stack**.  
2. Selecione **Git repository**.  
3. Em **Repository URL**, cole:
   ```
   https://github.com/guihrst/disparo-whatspp.git
   ```
4. Em **Branch**, digite `main`.  
5. Em **Compose path**, deixe `docker-compose.yml` (se estiver na raiz).  
6. Desmarque **Pull the latest image** (usamos build local).  
7. Clique em **Deploy the stack**.

A partir desse momento, o Portainer irá clonar o repo e subir o serviço conforme o `docker-compose.yml`. 

Para atualizar após um novo push, basta entrar na stack e clicar em **Update the stack**.

---

### ⚙️ Deploy Manual (opcional)

Se preferir não usar Git, crie um Stack manualmente e cole o conteúdo de `docker-compose.yml` no editor.

---

Pronto! Sua aplicação estará acessível em `http://<IP-da-VPS>:8080`.  
Qualquer dúvida ou ajuste, abra uma issue ou entre em contato.
