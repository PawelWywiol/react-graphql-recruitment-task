# React GraphQL Recruitment Task

This is a recruitment task for a front-end developer position.
The goal is to create a simple application that demonstrates your understanding of:

- Building a modern front-end application (React or Vue, with TypeScript).
- Integrating with a GraphQL API.
- Implementing a login form using GraphQL authentication.
- Coding a UI screen based on a design file.
- Using Tailwind CSS for styling.
- Writing clean, testable, and maintainable code.
- Following Git best practices with clear, structured commits.

## Documentation

- [Project Overview and Development Workflow](./docs/project.md)
- [Technical Decisions](./docs/decisions.md)

## Requirements

To keep `node` and `pnpm` versions the same on development environments, use [Volta](https://volta.sh/).

Required versions are specified in the `package.json` file under the `volta` field:

```json
  "volta": {
    "node": "22.18.0",
    "pnpm": "10.14.0"
  },
```

## Getting Started

### Development Setup

Copy the `.env.example` file to `.env` and fill in the required environment variables.

```bash
cp .env.example .env
```

Install project dependencies:

```bash
pnpm install
```

Generate GraphQL types:

```bash
pnpm codegen
```

Run the development server:

```bash
pnpm dev
```
