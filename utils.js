/**
 * MUHIUM & ZAMIL VU Hub - Utility Functions
 * Common helpers and utilities used across the application
 */

const Utils = {
  /**
   * Format a date to readable string
   * @param {Date|string} date - Date to format
   * @returns {string} Formatted date
   */
  formatDate(date) {
    if (typeof date === 'string') date = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  },

  /**
   * Validate course code format
   * @param {string} code - Course code to validate
   * @returns {boolean} True if valid
   */
  validateCourseCode(code) {
    return /^[A-Z]{2,4}\d{2,4}$/.test(code);
  },

  /**
   * Copy text to clipboard
   * @param {string} text - Text to copy
   * @returns {Promise<boolean>}
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  },

  /**
   * Get URL parameters
   * @returns {Object} Query parameters as object
   */
  getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const obj = {};
    params.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  },

  /**
   * Debounce function calls
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in ms
   * @returns {Function}
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Throttle function calls
   * @param {Function} func - Function to throttle
   * @param {number} limit - Time limit in ms
   * @returns {Function}
   */
  throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Generate random ID
   * @returns {string} Random ID
   */
  generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  },

  /**
   * Check if device is mobile
   * @returns {boolean} True if mobile
   */
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  },

  /**
   * Sanitize HTML string (basic)
   * @param {string} html - HTML to sanitize
   * @returns {string} Sanitized HTML
   */
  sanitizeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  },

  /**
   * Parse JSON safely
   * @param {string} json - JSON string
   * @param {*} fallback - Fallback if parse fails
   * @returns {*} Parsed object or fallback
   */
  parseJSON(json, fallback = null) {
    try {
      return JSON.parse(json);
    } catch (e) {
      console.error('JSON parse error:', e);
      return fallback;
    }
  },

  /**
   * Share text via WhatsApp
   * @param {string} text - Text to share
   * @returns {string} WhatsApp share URL
   */
  getWhatsAppShareUrl(text) {
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  },

  /**
   * Get storage item
   * @param {string} key - Storage key
   * @param {*} fallback - Fallback value
   * @returns {*} Stored value or fallback
   */
  getStorage(key, fallback = null) {
    const item = localStorage.getItem(key);
    return item ? Utils.parseJSON(item, fallback) : fallback;
  },

  /**
   * Set storage item
   * @param {string} key - Storage key
   * @param {*} value - Value to store
   */
  setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

// Export for both ES6 and CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Utils;
}
