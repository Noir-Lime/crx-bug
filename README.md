# CRX Content Script HMR Bug

Steps to reproduce:

1. Install deps `pnpm i`
2. Launch vite with `pnpm dev`
3. Load Unpacked extension in chrome
4. Navigate to `https://www.google.com`
5. Open `src/App.module.scss`
6. Make any change to the CSS and save.
7. Observe how HMR does not work.
