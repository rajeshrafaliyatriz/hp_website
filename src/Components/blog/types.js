/**
 * @typedef {Object} BlogAuthor
 * @property {string} name
 * @property {string} [avatar]
 */

/**
 * @typedef {Object} BlogPost
 * @property {string|number} id
 * @property {string} [image]
 * @property {string} title
 * @property {BlogAuthor} author
 * @property {string} date
 * @property {string} [readTime]
 * @property {string} description
 * @property {string|null} [additionalImage]
 * @property {string} [slug]
 */

// This file defines JSDoc types for the blog system.
// Usage: /** @type {import('./types').BlogPost} */
export {};
