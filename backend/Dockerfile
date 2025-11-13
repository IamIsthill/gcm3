FROM node:22-alpine AS builder

WORKDIR /app

RUN npm config set engine-strict true

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

RUN npm config set engine-strict true

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts

COPY --from=builder /app/dist ./src

RUN ls

EXPOSE 3000

CMD ["node", "src/index.js"]