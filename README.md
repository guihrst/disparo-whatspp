# Disparo WhatsApp - MyChatBot

## Estrutura do Repositório

```
frontend/
backend/
docker-compose.yml
docker-stack.yml
stack.env
.gitignore
README.md
```

## Como Subir no GitHub

1. Crie o repositório no GitHub.
2. Faça upload ou `git push` de todos estes arquivos.

## Deploy no Portainer

1. No Portainer, vá em **Stacks** → **Add stack**.
2. Em **Name**, digite `disparo-whatsapp`.
3. **Repository URL**: `https://github.com/SEU_USUARIO/disparo-whatsapp.git`
4. **Branch**: `main`
5. **Compose path**: `docker-stack.yml`
6. **Env file**: `stack.env`
7. Clique em **Deploy the stack**.

- Frontend: `http://IP_DO_SERVIDOR:8080/config.html`
- Backend: `http://IP_DO_SERVIDOR:3000`

Pronto!