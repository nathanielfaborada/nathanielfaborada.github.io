/**
 * Format date string into human-friendly label
 * @param {string} dateStr
 * @returns {string}
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  return dateStr;
}

/**
 * Escapes regex special characters in a query string
 * @param {string} text
 * @returns {string}
 */
export function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
