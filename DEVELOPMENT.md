# Development Setup Guide

## Prerequisites
- Git
- A modern web browser
- Text editor (VS Code recommended)
- Optional: Python 3 or Node.js

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/muhium-zamil-vu-hub.git
cd muhium-zamil-vu-hub
```

### 2. Set Up Environment
Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` with your configuration (optional for development).

### 3. Install Dependencies (Optional)
```bash
npm install
# or
yarn install
```

### 4. Start Development Server
```bash
# Option 1: Direct file open
open index.html

# Option 2: Local HTTP Server (Python)
python -m http.server 8000

# Option 3: Local HTTP Server (Node.js)
npx http-server

# Option 4: NPM script
npm run dev
```

Visit `http://localhost:8000` in your browser.

## Project Structure
```
├── index.html              # Main application
├── restricted.html         # Restricted access page
├── anti-inspect.js         # Browser protection
├── spring2026midsdata.js   # Sample data
├── config.js               # Configuration
├── .env.example            # Environment template
├── package.json            # Dependencies
├── README.md               # Project overview
└── docs/                   # Documentation
```

## Development Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Edit files in your editor
   - Test in browser (F5 to refresh)
   - Use browser DevTools (F12) for debugging

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

4. **Push to Remote**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open Pull Request**
   - Go to GitHub and create a PR
   - Wait for review and feedback

## Testing

### Browser Testing
- Chrome/Chromium
- Firefox
- Safari (macOS)
- Edge (Windows)
- Mobile browsers (Chrome Mobile, Safari iOS)

### Manual Testing Checklist
- [ ] Theme switching works (Light, Dark, Desert)
- [ ] Search functionality filters courses
- [ ] Review form submits correctly
- [ ] Share buttons (WhatsApp, Clipboard) work
- [ ] Responsive layout on mobile
- [ ] No console errors (F12)
- [ ] Page loads within 3 seconds

### Debug Mode
Press `Ctrl+Shift+I` to open DevTools and check:
- Console for errors
- Network tab for failed requests
- Application tab for localStorage data

## Code Style

Follow these guidelines:
- Use 2 spaces for indentation
- Use single quotes in JavaScript
- Write descriptive variable names
- Add comments for complex logic
- Keep functions small and focused

Run formatter:
```bash
npx prettier --write .
```

## Troubleshooting

### Port Already in Use
```bash
# Change port
python -m http.server 9000
```

### Changes Not Reflecting
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear cache in DevTools
- Close and reopen browser

### Git Issues
```bash
# Reset local changes
git reset --hard origin/main

# Update from remote
git pull origin main
```

## Performance Tips

- Use browser DevTools Performance tab
- Check Network tab for large assets
- Optimize images before committing
- Minimize CSS/JS for production

## Getting Help

1. Check existing issues on GitHub
2. Read documentation files (README, DEPLOYMENT, etc.)
3. Search in browser DevTools console for errors
4. Ask in discussions or open an issue

---

Happy coding! 🚀
