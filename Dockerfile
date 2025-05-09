# Usa uma imagem leve do Nginx
FROM nginx:alpine

# Limpa conteúdo HTML padrão e copia todo seu projeto
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

# Exponha a porta 80 para acessos HTTP
EXPOSE 80

# Comando para manter o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
