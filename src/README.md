# DigDir Service Desk Chrome Extension

Internal Chrome extension for DigDir's service desk and user support teams with AI chatbot and log search capabilities.

## Features

- **AI Chatbot**: Same functionality as the main web application
- **Log Search**: Enhanced context through log analysis
  - Include all logs or search by client ID
  - Better responses with targeted log searches
- **Image Upload**: Partially implemented (pending backend support)

## Prerequisites

- Backend server must be running
- Chrome browser with developer mode enabled

## Installation

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
6. Click "Load unpacked" and select the `build` folder

## Usage

1. Click the extension icon to open chat
2. Use log search for better context:
   - Toggle "Include all logs" for comprehensive analysis
   - Enter client ID for specific log searches
3. **Tip**: Targeted log searches provide more precise AI responses

## Development Status

- **Current**: Stable chat functionality with log search
- **Dev Branch**: `50-feature-search-in-log-functionality-AndUploadImage-Continue-development`
  - ⚠️ Log functionality not yet pushed to dev branch
  - Image upload incomplete (backend support pending)

## Requirements

- Backend server running on configured endpoint
- Valid authentication for DigDir systems