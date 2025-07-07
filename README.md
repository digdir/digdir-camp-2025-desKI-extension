# desKI-extension
A simple UI for desKI chrome extension
Built with React, TypeScript and Vite.

## 🐳 Using Docker
To run and build the app:
```bash
docker compose up --build
```

To just build the app:

```bash
docker compose build
```
To just run the app:

```bash
docker compose up
```

This starts the frontend on http://localhost:3000

## 🧪 Local Development (optional)

If you want to run the frontend outside Docker:

```bash
npm install
npm run dev
```
The app will start at http://localhost:5173

## Biome
This project uses Biome for formatting, linting, and import sorting.

Run linter to catch common errors:
```bash 
npm run lint
```

Format code and auto-fix issues
```bash
npm run format
```

Check formatting (without changing files)
```bash
npm run format:check
```

Full check: lint + formatting + imports
```bash
npm run check
```

## ⚙️ Build for Chrome Deployment
Build it 
``` bash
npm run build
```

Output is now in the **/dist** folder and includes:
- manifest.json
- index.json
- /assets

### Load into chrome
- Go to **Extensions** in chrome
- Turn on **Developer Mode**
- Choose **Load Unpacked**
- Point to the **/dist** folder

