FROM node:22-alpine

# OS packages
RUN apk add --no-cache \
    yamllint \
    bash \
    && rm -rf /var/cache/apk/*

# Node
RUN corepack enable pnpm

# App
WORKDIR /app
COPY package.json package.json
COPY lerna.json lerna.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY pnpm-workspace.yaml pnpm-workspace.yaml
COPY .npmrc .npmrc
COPY packages/lib/package.json packages/lib/package.json
COPY packages/test/package.json packages/test/package.json
RUN pnpm install --frozen-lockfile
COPY . .

# Boot
ENTRYPOINT ["pnpm"]
CMD ""
