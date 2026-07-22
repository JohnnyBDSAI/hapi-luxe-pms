/**
 * Theme Configuration - Boutique Luxury/Tropical Style
 * Modern, spacious design with card-based layout
 */

/** @type {const} */
const themeColors = {
  // Primary: Luxury brown (matches mockup)
  primary: { light: '#8B6F4E', dark: '#A98B6D' },

  // Background: Warm cream/off-white
  background: { light: '#FAF7F2', dark: '#211A12' },

  // Surface: Elevated cards with subtle depth
  surface: { light: '#FFFFFF', dark: '#2B2118' },

  // Text: High contrast for readability
  foreground: { light: '#2B2118', dark: '#F5F0E8' },
  muted: { light: '#6E6355', dark: '#A79B8B' },

  // Borders: Subtle, refined
  border: { light: '#EAE3D8', dark: '#3A2D20' },
  
  // Status colors: Warm, natural palette
  success: { light: '#34A853', dark: '#4ADE80' },    // Green - Đã bán
  warning: { light: '#F0B429', dark: '#FBBF24' },    // Yellow - Đã đặt
  error: { light: '#E06666', dark: '#F87171' },      // Red - Trống

  // Additional: Luxury accents
  accent: { light: '#C9A227', dark: '#E3C9A8' },     // Warm gold
  info: { light: '#3B82F6', dark: '#60A5FA' },       // Blue
};

module.exports = { themeColors };
