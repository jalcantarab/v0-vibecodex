# 🤝 Contributing to VibeCodex

## 📋 Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to [contact@zentrik.ai](mailto:contact@zentrik.ai).

## 🎯 How Can I Contribute?

### 🐛 Reporting Bugs

This section guides you through submitting a bug report for VibeCodex. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**

* Check the [issues](https://github.com/jalcantarab/v0-vibecodex/issues) to see if the problem has already been reported.
* If you're unable to find an open issue addressing the problem, open a new one using the bug report template.

**How Do I Submit A Good Bug Report?**

Bugs are tracked as [GitHub issues](https://github.com/jalcantarab/v0-vibecodex/issues). Create an issue and provide the following information:

* Use a clear and descriptive title
* Describe the exact steps to reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible
* Include your environment details (OS, browser, etc.)

### 💡 Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for VibeCodex, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion:**

* Check if the enhancement has already been suggested in the [issues](https://github.com/jalcantarab/v0-vibecodex/issues).
* If it has, add a comment to the existing issue instead of opening a new one.

**How Do I Submit A Good Enhancement Suggestion?**

Enhancement suggestions are tracked as [GitHub issues](https://github.com/jalcantarab/v0-vibecodex/issues). Create an issue and provide the following information:

* Use a clear and descriptive title
* Provide a detailed description of the suggested enhancement
* Explain why this enhancement would be useful to most VibeCodex users
* Include mockups or examples if applicable

### 🚀 Your First Code Contribution

Unsure where to begin contributing to VibeCodex? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues](https://github.com/jalcantarab/v0-vibecodex/labels/beginner) - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues](https://github.com/jalcantarab/v0-vibecodex/labels/help%20wanted) - issues which should be a bit more involved than `beginner` issues.

### 🔄 Pull Requests

The process described here has several goals:

- Maintain VibeCodex's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible VibeCodex
- Enable a sustainable system for VibeCodex's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](.github/PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## 📝 Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
   * 🎨 `:art:` when improving the format/structure of the code
   * 🐎 `:racehorse:` when improving performance
   * 🚱 `:non-potable_water:` when plugging memory leaks
   * 📝 `:memo:` when writing docs
   * 🐛 `:bug:` when fixing a bug
   * 🔥 `:fire:` when removing code or files
   * 💚 `:green_heart:` when fixing the CI build
   * ✅ `:white_check_mark:` when adding tests
   * 🔒 `:lock:` when dealing with security
   * ⬆️ `:arrow_up:` when upgrading dependencies
   * ⬇️ `:arrow_down:` when downgrading dependencies
   * 👕 `:shirt:` when removing linter warnings

### JavaScript/TypeScript Styleguide

All JavaScript/TypeScript code is linted with [ESLint](https://eslint.org/) and formatted with [Prettier](https://prettier.io/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Use TypeScript for all new code
* Use async/await instead of Promise chains
* Use functional components with hooks instead of class components

### CSS/Tailwind Styleguide

* Use Tailwind CSS utility classes
* Follow the design system defined in `tailwind.config.ts`
* Use CSS variables for theming
* Avoid inline styles

### Documentation Styleguide

* Use [Markdown](https://guides.github.com/features/mastering-markdown/) for documentation
* Reference components, functions, and variables with backticks: `Component`
* Place code examples in fenced code blocks with the appropriate language:
  \`\`\`tsx
  function Example() {
    return <div>Example</div>;
  }
  \`\`\`

## 📋 Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues that are bugs
* `documentation` - Issues or PRs related to documentation
* `enhancement` - Issues that are feature requests or PRs that implement new features
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on

### 🌟 Vibe Contributions

We also welcome "vibe contributions" - non-code contributions that improve the project's experience, usability, or community feel. These can include:

* Feedback on user interface and experience
* Suggestions for new features or improvements
* Documentation improvements
* Sharing experiences using the toolkit
* Reporting bugs or issues
* Creating tutorials or guides

All vibe contributions should align with the project philosophy outlined in our [implementation-notes.md](implementation-notes.md) file and maintain consistency with the established design language.

## 📞 Need Help?

If you need help with contributing, check out our [Support Guide](SUPPORT.md) or reach out to us at [contact@zentrik.ai](mailto:contact@zentrik.ai).
