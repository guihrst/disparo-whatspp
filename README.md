# Disparo WhatsApp - MyChatBot

Este repositório contém a página estática e os recursos para disparo de mensagens via WhatsApp usando a API MyChatBot, empacotados em Docker.

## Estrutura

```
├── index.html
├── Dockerfile
├── docker-compose.yml
├── README.md
└── .gitignore
```

## Criar repositório no GitHub

1. Crie um repo no GitHub (`disparo-whatsapp`).
2. Vá em **Add file → Upload files**.
3. Faça upload destes arquivos: `index.html`, `Dockerfile`, `docker-compose.yml`, `.gitignore`, `README.md`.
4. Commit com mensagem `Inicializa projeto Disparo WhatsApp`.

## Deploy via Portainer

1. No Portainer, crie um **Stack** `disparo-whatsapp`.
2. Cole o conteúdo de `docker-compose.yml`.
3. Clique em **Deploy the stack**.
4. Acesse `http://<VPS_IP>:8080`.
