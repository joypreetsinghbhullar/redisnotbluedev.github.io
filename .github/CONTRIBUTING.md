# Contributing to redisnotbluedev.github.io

Welcome, and thank you for your interest in contributing! Your support and contributions make this project thrive.

## Asking Questions

Have a question? Instead of opening an issue, please ask it in our [Discord server](https://discord.gg/nxCDJM849e). This active community is ready to assist you, and your thoughtful question may help others searching for the same answers.

## Providing Feedback

Your feedback is invaluable! If you have suggestions or ideas, join the conversation in our [Discord server](https://discord.gg/nxCDJM849e). Your input helps improve the project and align it with community needs.

## Reporting Issues

Found a bug? Have an idea for an enhancement or a new feature? Please report it in our [Discord server](https://discord.gg/nxCDJM849e). To ensure an effective report:

- **Search for existing reports**: Check the Discord channels to avoid duplicates.
- **Recreate the issue**: Disable conflicting extensions or dependencies and verify the problem.

When reporting an issue:
- [ ] Include your operating system and environment details.
- [ ] Provide steps to reproduce the issue (e.g., "Step 1, Step 2, Step 3").
- [ ] Specify what you expected vs. what actually occurred.
- [ ] Attach screenshots, videos, or error logs if applicable.

## Testing Changes Locally

Before submitting updates, please test your changes locally:
1. Create a test directory: `mkdir test` and navigate into it: `cd test`.
2. Initialize a project: `pnpm init`.
3. Link your changes locally: `pnpm link <PATH_TO_REPO>/packages/<package-name>`.
4. Import and experiment with the package to ensure functionality.
5. Use the `--watch` parameter in build scripts to automatically recompile on changes (e.g., `pnpm turbo run build --filter='<package-name>' -- --watch`).

## Automated Issue Management

The project leverages GitHub Actions for streamlined issue and pull request management. These automations ensure timely responses and help maintain workflow efficiency.

## Final Checklist

Before submitting:
- [ ] Ensure your report or feature suggestion is a new addition.
- [ ] Test your updates locally.
- [ ] Provide clear, concise details in your submission.

## Thank You

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.