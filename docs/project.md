## Project Overview and Development Workflow

Below is the recommended step-by-step workflow to set up the environment and implement the required functionality.

### Initialize the Application

- Create a new React (or Vue) application with TypeScript support using a modern scaffolding tool.

### Configure Tailwind CSS

- Install and configure the latest version of Tailwind CSS (v3 or v4) for styling. Ensure PostCSS and Autoprefixer are correctly set up.

### Setup Project Structure and Environment

- Add Husky for Git hooks (linting, testing) to enforce quality checks before commits.

### Configure ESLint and Prettier

- Add linting and formatting rules for code consistency (React/Vue best practices, TypeScript, Prettier integration).

### Integrate GraphQL Client

- Install and configure a GraphQL client (Apollo Client, urql, or alternative). Setup the provider at the root level.

### Configure GraphQL Code Generation

- Setup GraphQL Code Generator to generate types and hooks for queries and mutations.

### Implement Login Form

- Create a simple login form that sends credentials via a GraphQL mutation. Handle API errors (e.g., invalid credentials, network errors).

### Add Error Handling

- Create a mechanism for error handling (e.g., error boundary, notification, or context-based approach).

### Implement remote controller Screen UI

- Code the remote controller screen UI strictly following the design file. Focus on structure, layout, and Tailwind CSS styling. Do not implement button logic.

### Add Pagination Component (Static)

- Implement pagination for remote controllers (UI only, static or mock data). Ensure reusable component structure.

### Write Unit Tests

- Add unit tests for critical components (e.g., login form, remote controller pagination). Use Jest, Vitest, or React Testing Library.

### Final Cleanup

- Review and polish the codebase, improve file structure, clean up unused code, and finalize documentation.

## Notes

- Use **Git Flow** with `develop` as the main branch.
- Work only on `develop` for this task.
- Each commit should represent the smallest possible task.
- Commit messages must follow the required format: _imperative, starting with a verb, including "the"_ (e.g., `Add the login form`).
- The focus is on code quality, UI fidelity, and good repository practices.
