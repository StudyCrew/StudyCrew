FROM node:20.10.0 AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g pnpm
RUN npm install

FROM base AS development
COPY . .
EXPOSE 3000
CMD npm run dev

FROM base AS production
COPY . .
EXPOSE 3000
CMD npm run build && npm run start