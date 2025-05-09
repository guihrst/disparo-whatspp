# Disparo WhatsApp - MyChatBot

## Estrutura do Projeto

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
.gitignore
README.md
```

## Execução Local (Docker Compose)

1. Clone o repositório.
2. Execute:
   ```bash
   docker-compose up -d
   ```
3. Acesse:
   - Frontend: http://localhost:8080
   - Backend:  http://localhost:3000

## Workflow

1. Configure em `config.html`.
2. Em `send.html`, faça login e envie o CSV.
3. O backend processa a fila de envios e persiste o log.
4. A cada segundo, o frontend consulta `/jobs/:id` para atualizar o log.

## Publicação de Imagens (opcional)

```bash
# Frontend
docker build -t <usuario>/dispatch-frontend:latest -f frontend/Dockerfile.frontend .
docker push <usuario>/dispatch-frontend:latest

# Backend
docker build -t <usuario>/dispatch-backend:latest -f backend/Dockerfile.backend .
docker push <usuario>/dispatch-backend:latest
```
