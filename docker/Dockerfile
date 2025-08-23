ARG NODE_VERSION=22.18.0-alpine
ARG PNPM_VERSION=10.14.0

FROM node:${NODE_VERSION} AS base
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@${PNPM_VERSION} --activate

COPY package.json pnpm-lock.yaml ./
ENV NODE_ENV=production

# because @tailwindcss/oxide has a bug, we need to install dev dependencies
# properly we should use:
# RUN pnpm install --prod --frozen-lockfile
RUN pnpm install --frozen-lockfile

FROM base AS builder
COPY . .
RUN rm -rf .next
RUN pnpm codegen
RUN pnpm build

FROM node:${NODE_VERSION} AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLE=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

RUN mkdir -p /app && chown -R node:node /app

USER node:node

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000
CMD ["pnpm", "start"]
