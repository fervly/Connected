# Create image based on the official Node image from dockerhub
FROM node:lts-bookworm AS base

# Create app directory
WORKDIR /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

FROM base as dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev # Copy dependency definitions
COPY . .
CMD npm run dev
