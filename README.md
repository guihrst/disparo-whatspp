# Disparo WhatsApp - MyChatBot

## Estrutura

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

## Deploy Local (Docker Compose)

```bash
docker-compose up -d
```

- Frontend: http://localhost:8080
- Backend: http://localhost:3000

## Deploy Swarm (Portainer)

- Git repo: ...
- Branch: main
- Path: docker-stack.yml
- Pull images ON

