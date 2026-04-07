# 1. Imagem do Node
FROM node:18-alpine

# 2. Pasta de trabalho
WORKDIR /app

# 3. Copia os arquivos de dependências
COPY package*.json ./

# 4. Instala as dependências forçando compatibilidade
# O --legacy-peer-deps resolve o erro de "exit code 1" na maioria das vezes
RUN npm install --legacy-peer-deps

# 5. Copia o resto do código
COPY . .

# 6. Porta do Vite
EXPOSE 5173

# 7. Comando para rodar (O --host é essencial para o Docker)
CMD ["npm", "run", "dev", "--", "--host"]