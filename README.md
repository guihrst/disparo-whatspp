# Disparo WhatsApp - MyChatBot

Split de Configuração e Envio com Nginx:

- **config.html**: define configurações.
- **send.html**: realiza envios.
- **default.conf**: configura Nginx para servir config.html como index.

**Dev**: docker-compose up -d  
**Swarm**: use docker-stack.yml via Portainer (pull ON, user guihorst/disparo-whatspp:latest)
