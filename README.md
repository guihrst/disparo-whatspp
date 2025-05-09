# Disparo WhatsApp - MyChatBot

Este repositório disponibiliza uma página estática para disparo de mensagens via WhatsApp utilizando a API MyChatBot, empacotada em Docker.

---

## 📁 Estrutura do Projeto

```
├── index.html           # Interface de configuração, login e disparo
├── Dockerfile           # Container Nginx que serve a página
├── docker-compose.yml   # Orquestração local (dev)
├── docker-stack.yml     # Orquestração para Swarm/Portainer
├── README.md            # Documentação (este arquivo)
└── .gitignore           # Ignora arquivos desnecessários
```

---

## 🚫 .gitignore Sugerido

```
node_modules/
.DS_Store
dist/
.env
```

---

## 🚀 Publicação no GitHub

Você pode adicionar os arquivos pelo site ou localmente:

### Via Interface Web (sem Git local)
1. Acesse o repo: `https://github.com/guihrst/disparo-whatspp`.  
2. Clique em **Add file → Upload files**.  
3. Faça upload de:
   - `index.html`  
   - `Dockerfile`  
   - `docker-compose.yml`  
   - `docker-stack.yml`  
   - `.gitignore`  
   - `README.md`  
4. Commit com mensagem `Adicionar arquivos iniciais`.

### Via Git Local
```bash
git clone https://github.com/guihrst/disparo-whatspp.git
cd disparo-whatspp
# Copie seus arquivos para a pasta
git add .
git commit -m "Inicializa projeto Disparo WhatsApp"
git push origin main
```

---

## 📦 Publicação de Imagem no Registry

... (conteúdo completo conforme canvas README)
