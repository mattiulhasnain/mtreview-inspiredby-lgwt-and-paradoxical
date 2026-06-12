/**
 * MUHIUM & ZAMIL VU Hub - Configuration
 * Central configuration for the application
 */

const CONFIG = {
  // Application Info
  app: {
    name: 'MUHIUM & ZAMIL VU Hub',
    version: '1.0.0',
    author: 'MUHIUM & ZAMIL',
  },

  // Theme Configuration
  theme: {
    default: localStorage.getItem('mzh_theme') || 'desert',
    options: ['light', 'dark', 'desert'],
  },

  // API Configuration
  api: {
    baseUrl: process.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 10000,
  },

  // Feature Flags
  features: {
    analytics: process.env.VITE_ENABLE_ANALYTICS === 'true',
    sharing: process.env.VITE_ENABLE_SHARING === 'true',
    maintenance: process.env.VITE_MAINTENANCE_MODE === 'true',
  },

  // Course Configuration
  courses: {
    codeFormat: /^[A-Z]{2,4}\d{2,4}$/,
    maxPapersPerCourse: 50,
  },

  // Storage Keys
  storage: {
    theme: 'mzh_theme',
    reviews: 'mzh_reviews',
    favorites: 'mzh_favorites',
  },

  // UI Customization
  ui: {
    animationDuration: 300,
    cardHoverEffect: true,
    darkModeAutoDetect: false,
  },
};

// Export for both ES6 and CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
