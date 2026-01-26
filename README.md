# hp-ios-kit

A collection of HP iOS Skills and Workflows for Antigravity agents.

## Installation

You can install this toolkit in your project to enable specialized iOS development capabilities for your AI agent.

### Option 1: Run directly (if published)

```bash
npx hp-ios-kit-install
```

### Option 2: Local Development

```bash
# In this directory
npm link

# In your target project
hp-ios-kit-install
```

## What's Included?

This kit installs the `.agent` directory into your project root, containing:

- **Skills**: Specialized knowledge packs (e.g., `accessibility-auditor`, `swiftui-performance-analyzer`).
- **Workflows**: Standard operating procedures (e.g., `audit`, `analyze-crash`).

## Usage

Once installed, your Antigravity agent will automatically detect the skills in `.agent/`.
