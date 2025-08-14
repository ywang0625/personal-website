# Personal Website
This is my personal website to showcase my projects and to play with different frameworks/tools.
Link: https://www.yuehming.com/

## How It's Made
**Tech Used :** Svelte(HTML/CSS/TypeScript)

## Lessons Learned: 
I learned about dyanmic/static SSR, which is where I realized I couldn't host on Github Pages due to having dynamic SSR with Svelte. Changing to static is not plausible either, so I used Vercel to host the webpage. Vercel has an amazing UI, but I'm still observing for future charges, etc. 

## How To Run
### sv
Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Developing
Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building
To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
