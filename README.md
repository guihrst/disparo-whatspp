# Disparo WhatsApp - MyChatBot

## Estrutura do Repositório

```
frontend/
  config.html
  send.html
  default.conf
  Dockerfile.frontend
backend/
  index.js
  package.json
  Dockerfile.backend
docker-compose.yml
docker-stack.yml
.gitignore
README.md
```

## Como Executar

### Docker Compose
```bash
docker-compose up -d
```
- Frontend em http://localhost:8080  
- Backend em http://localhost:3000  

### Docker Swarm (Portainer)
1. No Portainer, adicione uma Stack via Git repo.  
2. Branch: `main`  
3. Compose path: `docker-stack.yml`  
4. Ative Pull ON e clique em Deploy.  
