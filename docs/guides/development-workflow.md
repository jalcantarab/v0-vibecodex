# 🚀 Development Workflow

> For a step-by-step onboarding, see [Getting Started](/docs/getting-started)

This guide explains how to set up your development environment and the recommended workflow for contributing to VibeCodex.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

## 🛠️ Setting Up Your Development Environment

1. **Fork the Repository**

   Go to [https://github.com/jalcantarab/v0-vibecodex](https://github.com/jalcantarab/v0-vibecodex) and click the "Fork" button to create your own copy of the repository.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/v0-vibecodex.git
   cd v0-vibecodex
   ```

3. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set Up Environment Variables**

   Copy the example environment file:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with any necessary values.

5. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## 🔄 Development Workflow

### 🌿 Branch Strategy

We follow a feature branch workflow:

1. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

   Use prefixes like:
   - `feature/` for new features
   - `fix/` for bug fixes
   - `docs/` for documentation changes
   - `refactor/` for code refactoring

2. **Make Your Changes**

   Implement your changes, following the coding standards and patterns described in the [Implementation Notes](/docs/reference/implementation-notes).

3. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

4. **Push Your Changes**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**

   Go to your fork on GitHub and click "New Pull Request" to submit your changes for review.

### ✅ Code Quality

Before submitting your pull request, ensure:

1. **Linting Passes**

   ```bash
   npm run lint
   # or
   yarn lint
   ```

2. **TypeScript Compiles**

   ```bash
   npm run tsc
   # or
   yarn tsc
   ```

3. **Tests Pass** (when implemented)

   ```bash
   npm run test
   # or
   yarn test
   ```

### 🔄 Keeping Your Fork Updated

To keep your fork in sync with the main repository:

1. **Add the Upstream Remote**

   ```bash
   git remote add upstream https://github.com/jalcantarab/v0-vibecodex.git
   ```

2. **Fetch and Merge Changes**

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
   ```

## 🚀 Deployment

The project is automatically deployed to Vercel when changes are merged to the main branch.

For preview deployments:

1. Push your branch to GitHub
2. Vercel will automatically create a preview deployment
3. The preview URL will be available in your pull request

## 🆘 Getting Help

If you need help with the development workflow:

1. Check the [documentation](/docs/README)
2. Ask in [GitHub Discussions](https://github.com/jalcantarab/v0-vibecodex/discussions)
3. Join our [Slack Community](https://join.slack.com/t/zentrikfriends/shared_invite/zt-39fkemr4h-s4uisVwiRmpAoZ1dZYCJwg) - Zentrik Friends
4. Reach out at [contact@zentrik.ai](mailto:contact@zentrik.ai)

## 📚 Additional Resources

- [CONTRIBUTING.md](../CONTRIBUTING) - Detailed contributing guidelines
- [CHANGELOG.md](../CHANGELOG) - Project changelog
- [AI Tools Integration](./ai-tools-integration) - Understanding AI tool integrations
- [Project Structure](../reference/project-structure) - Codebase organization

Happy coding! 🎉
