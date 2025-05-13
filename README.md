# Disparo WhatsApp - MyChatBot

## Estrutura

frontend/, backend/, docker-compose.yml, docker-stack.yml, .gitignore, README.md

## Como Executar

1. Clone o repositório e navegue até a pasta principal.
2. Em `backend/.env`, defina `ADMIN_PASSWORD=SuaSenhaSecretaAqui`.
3. Docker Compose:
   ```bash
   docker-compose up -d
   ```
4. Docker Swarm (Portainer): usar `docker-stack.yml` (define `env_file: backend/.env`).
