# Disparo WhatsApp via ZPro 📲

Este projeto permite o envio de mensagens WhatsApp de forma automatizada utilizando a API ZPro.

---

## 🔧 Funcionalidades

- Importação de contatos via CSV
- Envio de mensagens com controle de taxa (mensagens por segundo)
- Suporte a imagem (URL)
- Armazenamento local da URL da API e Bearer Token
- Interface web simples (config.html e index.html)

---

## 📁 Estrutura do Projeto

```
whatsapp-envio-zpro/
├── config.html            # Tela de configuração da API
├── index.html             # Tela principal para envio
├── Dockerfile             # Container web via Nginx
└── docker-compose.yml     # Para rodar localmente com Docker
```

---

## 📄 Formato do CSV

| numero        | mensagem                          | imagem                             |
|---------------|------------------------------------|-------------------------------------|
| 5511999999999 | "Olá, este é um teste."            | https://exemplo.com/imagem.jpg     |
| 5511888888888 | "Mensagem com vírgula, veja só!"   | (pode ser vazio)                   |

> A primeira linha deve ser o cabeçalho. Campos com vírgulas devem estar entre aspas.

---

## 🐳 Rodar com Docker

### Usando Docker Compose

```bash
docker-compose up -d
```

Acesse:
- `http://localhost:8081/config.html` para configurar a API
- `http://localhost:8081/index.html` para enviar mensagens

---

## 🚀 Publicar no GitHub (guihrst)

```bash
git init
git remote add origin https://github.com/guihrst/disparo.git
git add .
git commit -m "Versão inicial"
git push -u origin main
```

---

## 🐳 Publicar no Docker Hub (guihorst)

```bash
docker build -t guihorst/disparo .
docker push guihorst/disparo
```

---

## 🧠 Observações

- A URL da API e o Token são salvos no navegador (localStorage)
- O envio só começa após clicar em “Enviar Mensagens”
- O retorno da API aparece na coluna de status da tabela
