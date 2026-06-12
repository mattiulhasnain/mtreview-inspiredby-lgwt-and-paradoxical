# Troubleshooting Guide

## Common Issues & Solutions

### Display & Styling Issues

#### **Styles not applying**
- **Cause:** Tailwind CSS CDN not loading
- **Solution:**
  1. Check internet connection
  2. Verify CDN link in HTML: `https://cdn.tailwindcss.com`
  3. Clear browser cache: `Ctrl+Shift+Delete`
  4. Hard refresh: `Ctrl+Shift+R`
  5. Try in Incognito mode

#### **Theme not changing**
- **Cause:** LocalStorage disabled or corrupted
- **Solution:**
  1. Check browser allows LocalStorage
  2. Clear LocalStorage: `localStorage.clear()` in console
  3. Reload page
  4. Try different browser

#### **Icons not showing**
- **Cause:** Font Awesome CDN issue
- **Solution:**
  1. Verify CDN link: `cdnjs.cloudflare.com/ajax/libs/font-awesome`
  2. Check internet connection
  3. Try alternative CDN version

---

### Functionality Issues

#### **Search not working**
- **Cause:** Data not loading or filter logic broken
- **Solution:**
  1. Open DevTools (`F12`) → Console
  2. Check for JavaScript errors (red messages)
  3. Verify `spring2026midsdata.js` is loaded
  4. Try refreshing page
  5. Check course code format: `CS101`, `MTH201`, etc.

#### **Share buttons not working**

**WhatsApp Share:**
- Opens blank WhatsApp window
- **Solution:**
  1. Install WhatsApp on device/browser
  2. Login to WhatsApp Web if needed
  3. Verify internet connection

**Copy to Clipboard:**
- Copy fails silently
- **Solution:**
  1. Check HTTPS is enabled (required for Clipboard API)
  2. Try in different browser
  3. Allow clipboard permissions
  4. Check browser version supports Clipboard API

#### **Form not submitting**
- **Cause:** Browser blocks submission, validation error
- **Solution:**
  1. Check browser console for errors (`F12`)
  2. Verify form fields are filled
  3. Check email format if applicable
  4. Try clearing form cache: `Ctrl+Shift+Delete`

---

### Performance Issues

#### **Page loading slowly**
- **Solutions:**
  1. **Network optimizations:**
     - Check internet speed
     - Try different network
     - Close other browser tabs
  
  2. **Browser optimizations:**
     - Clear cache: `Ctrl+Shift+Delete`
     - Disable extensions: `Ctrl+Shift+M`
     - Try Incognito mode
  
  3. **Check resources:**
     - DevTools → Network tab
     - Look for failed/slow requests (red items)
     - Check response sizes

#### **High memory usage**
- **Solutions:**
  1. Close unused tabs
  2. Reload page
  3. Clear browser cache
  4. Restart browser

---

### Browser Compatibility

| Browser | Version | Status | Fix |
|---------|---------|--------|-----|
| Chrome | 90+ | ✅ Full Support | Update to latest |
| Firefox | 88+ | ✅ Full Support | Update to latest |
| Safari | 14+ | ✅ Full Support | Update to latest |
| Edge | 90+ | ✅ Full Support | Update to latest |
| IE 11 | All | ❌ Not Supported | Use modern browser |

**Fix for old browser:**
```
Download and install:
- Chrome: https://www.google.com/chrome/
- Firefox: https://www.mozilla.org/firefox/
- Edge: https://www.microsoft.com/edge/
```

---

### Mobile-Specific Issues

#### **Layout broken on phone**
- **Solution:**
  1. Check viewport meta tag exists
  2. Zoom to 100% (pinch out if zoomed in)
  3. Rotate phone to landscape
  4. Try different orientation

#### **Touch interactions not responsive**
- **Solution:**
  1. Wait 1 second after tap
  2. Tap center of button (not edges)
  3. Check for notifications/popups covering screen
  4. Restart phone

---

### Data Issues

#### **Reviews/data not saving**
- **Cause:** LocalStorage disabled or quota exceeded
- **Solution:**
  1. Check LocalStorage is enabled
  2. Clear LocalStorage: `localStorage.clear()`
  3. Check available disk space
  4. Try different browser

#### **Lost data after refresh**
- **Cause:** Data stored in memory, not saved
- **Solution:**
  - Use browser's Local Storage (persistent)
  - Or implement backend database (planned)

---

### Deployment Issues

#### **404 error when accessing site**
- **Cause:** Wrong URL or file path
- **Solution:**
  1. Verify URL is correct
  2. Check files exist on server
  3. Verify index.html is in root directory
  4. Check server serves `.html` files

#### **CORS errors in console**
- **Cause:** API calls blocked by browser
- **Solution:**
  1. Check API URL is correct
  2. Verify API has CORS enabled
  3. Use proxy server if needed
  4. Check API is running

#### **Resources 404 (CSS, JS, images)**
- **Cause:** Wrong file paths
- **Solution:**
  1. Check file structure matches HTML
  2. Verify file paths are relative: `./file.js` not `/file.js`
  3. Check file case sensitivity
  4. Ensure files uploaded to server

---

### Getting Help

If issue persists:

1. **Check Documentation:**
   - README.md
   - DEVELOPMENT.md
   - This file

2. **Search Issues:**
   - GitHub Issues: https://github.com/yourusername/muhium-zamil-vu-hub/issues

3. **Debug Steps:**
   - Open DevTools: `F12`
   - Check Console tab for errors
   - Check Network tab for failed requests
   - Right-click → Inspect Element to check HTML

4. **Report Issue:**
   - Describe steps to reproduce
   - Include error messages
   - Specify browser and OS
   - Attach screenshots if helpful

5. **Contact Support:**
   - Email: support@muhium-zamil.dev
   - Discord: [link to community]
   - GitHub Discussions: [link]

---

## Advanced Debugging

### Enable Debug Mode
```javascript
// In browser console (F12)
localStorage.setItem('debug', 'true');
location.reload();
```

### Check Configuration
```javascript
// In browser console
console.log(CONFIG);  // View app configuration
console.log(Utils);   // View utilities
```

### Monitor Storage
```javascript
// In browser console
console.log(localStorage);  // View all stored data
console.log(sessionStorage);  // View session data
```

---

Last updated: June 2026
