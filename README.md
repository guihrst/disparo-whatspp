# Disparo WhatsApp - MyChatBot

Use `guihorst/disparo-whatspp:latest` conforme repositório no Docker Hub.

## Publicar imagem

```bash
docker login
docker build -t guihorst/disparo-whatspp:latest .
docker push guihorst/disparo-whatspp:latest
```

## Deploy no Portainer (Swarm)

- Git repo: https://github.com/guihrst/disparo-whatspp.git
- Branch: main
- Compose path: docker-stack.yml
- Pull the latest image: ON

```bash
# Escalonar
docker service scale <stack>_disparo_whatsapp=1
```
