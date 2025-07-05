FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Instala PM2 globalmente
RUN npm install pm2 -g

# Expone un puerto si es necesario
# EXPOSE 3000

# Usa PM2 como entrypoint
CMD ["pm2-runtime", "ecosystem.config.cjs"]