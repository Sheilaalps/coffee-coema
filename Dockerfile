# 1. Usando a imagem leve do Node
FROM node:18-alpine

# 2. Pasta onde o código vai morar no container
WORKDIR /app

# 3. Copia os arquivos de dependências
COPY package*.json ./

# 4. Instala as dependências (isso pode demorar um pouco)
RUN npm install

# 5. Copia o resto do código
COPY . .

# 6. Porta do Vite
EXPOSE 5173

# 7. Comando para rodar
CMD ["npm", "run", "dev", "--", "--host"]