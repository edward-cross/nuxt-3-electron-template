# Nuxt 3 Electron Template

This is a template app for running Nuxt 3 and Electron with server side rendering, whilst also loading a development instance of the app within an Electron Window (rather than just the browser on localhost).

It is an augmentation of the steps outlined by Eric in the folliowing Stack Overflow [article](https://stackoverflow.com/questions/76604701/nuxt-3-electron-no-possible-configuration-to-enable-ssr) that address the lack of server side rendering (SSR) within the standard Nuxt 3 Electron setup.

As per the steps in the above Stack Overflow article, this template sets up server side rendering (SSR) allowing access to the Nuxt server API endpoints. However, it is updated to
work with the Nuxt Electron app that loads a development instance within an Electron Window, rather than just the browser on localhost.

By opening a development instance within an Electron Window, this allows you to test functionality during developent unavailable within browser instances, but avaialble within Electron. For example, you can select a file and gets it's file path property (not available within a browser instance).

**I make no assurances as to how secure this setup is from the persepctive of Electron Security best practice, so the user is advised to reasearch how best to harden to their own requirements before running in a production environment!**

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
