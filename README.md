# Config Generator

A browser-based tool that generates compatible configuration files for developer projects. Select your tech stack, configure options, preview the output, and download everything as a zip — zero conflicts, no server required.

**Live:** [config-generator-silk.vercel.app](https://config-generator-silk.vercel.app)

## About

Getting one config file right is easy. Getting six configs that play nicely together (ESLint knows about Prettier, tsconfig has the right settings for Next.js vs Express, .gitignore matches the stack) is the annoying part developers repeat on every new project. This tool does it in 30 seconds.

## How It Works

1. **Select your stack** — toggle the frameworks, languages, tools, and testing libraries your project uses.
2. **Configure options** — adjust settings for each tool (indent width, strict mode, Node version, etc.). The generator enforces compatibility automatically — Prettier and EditorConfig stay in sync, ESLint picks up the right parser for TypeScript, and .gitignore adapts to your stack.
3. **Preview** — see the generated config files update in real time as you change options.
4. **Download** — click "Download Bundle" to get a single zip file containing all your configs.

### Using the Downloaded Configs

Unzip `project-config.zip` into your project's root directory. The files are at the root level of the zip (not nested in a folder), so they land exactly where they need to be:
```bash
cd your-project
unzip project-config.zip
```

Then install any packages the configs reference. For example, if you generated an ESLint config with Prettier integration:
```bash
npm install -D eslint eslint-config-prettier prettier
```

The specific packages depend on which configs you generated. Refer to each tool's documentation for installation instructions.

## Supported Configs

- **ESLint** — flat config format with optional React, TypeScript, and Prettier integration
- **Prettier** — tabs/spaces, indent width, semicolons, quotes, trailing commas, print width
- **TypeScript** — strict mode, target, module, JSX, path aliases, unused code detection
- **EditorConfig** — indent settings synced with Prettier when both are selected
- **.gitignore** — auto-generated based on selected stack
- **.env.example** — environment variable templates based on stack
- **Docker** — Dockerfile with optional multi-stage build, plus .dockerignore
- **Jest** — TypeScript support, path aliases, coverage thresholds

## Tech Stack

- **React** (Vite) — plain JavaScript, no TypeScript
- **Tailwind CSS** — utility-first styling
- **JSZip / FileSaver** — client-side zip generation and download

All logic runs in the browser. No server, no database, no API.

## Local Development
```bash
git clone https://github.com/Lakonas/config-generator.git
cd config-generator
npm install
npm run dev
```