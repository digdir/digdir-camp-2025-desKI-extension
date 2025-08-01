# DigDir Service Desk Chrome Extension

Internal Chrome extension for DigDir's service desk and user support teams with AI chatbot and log search capabilities.

Built with React, TypeScript and Vite.

## Features

- **AI Chatbot**: Same functionality as the main web application
- **Log Search**: Enhanced context through log analysis
  - Include all logs or search by client ID
  - Better responses with targeted log searches
- **Image Upload**: Partially implemented (pending backend support)

## Prerequisites

- Backend server must be running
- Chrome browser with developer mode enabled

## ⚙️ Build for Chrome Extension

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Open Chrome Extensions (`chrome://extensions/`)
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `/dist` folder

Output includes:
- manifest.json
- index.html
- /assets

## Usage

1. Click the extension icon to open chat
2. Use log search for better context:
   - Toggle "Include all logs" for comprehensive analysis
   - Enter client ID for specific log searches
3. **Tip**: Targeted log searches provide more precise AI responses

## Code Quality

This project uses Biome for formatting, linting, and import sorting.

```bash
npm run lint          # Catch common errors
npm run format        # Format code and auto-fix
npm run format:check  # Check formatting without changes
npm run check         # Full check: lint + formatting + imports
```

## Development Status

- **Current**: Stable chat functionality with log search
- **Dev Branch**: `50-feature-search-in-log-functionality-AndUploadImage-Continue-development`
  - ⚠️ Log functionality not yet pushed to dev branch
  - Image upload incomplete (backend support pending)

## Requirements

- Valid authentication for DigDir systems