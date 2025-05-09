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
*(local ou via UI Web)*

---

## 📦 Publicação de Imagem no Registry

```bash
docker build -t seu-usuario/disparo-whatspp:latest .
docker push seu-usuario/disparo-whatspp:latest
```

---

## 📑 `docker-compose.yml` (Desenvolvimento Local)

```yaml
version: '3.7'
services:
  disparo_whatsapp:
    build: .
    ports:
      - "8080:80"
```

---

## 📑 `docker-stack.yml` (Swarm / Portainer)

```yaml
version: '3.7'
services:
  disparo_whatsapp:
    image: seu-usuario/disparo-whatspp:latest
    ports:
      - target: 80
        published: 8080
        protocol: tcp
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure
```

---

## 🚩 Deploy no Portainer (Swarm)

1. **Stacks** → **Add stack**  
2. **Git repository**, URL: https://github.com/guihrst/disparo-whatspp.git  
3. Branch: `main`  
4. Compose path: `docker-stack.yml`  
5. **Pull the latest image** ligado  
6. **Deploy the stack**  

---

## ✨ Deploy Manual (não-Swarm)

```bash
docker-compose up -d
```

---

Acesse `http://<IP-da-VPS>:8080` após o deploy.
