/**
 * Theme Configuration
 * 
 * Defines the color palettes for the application's dark and light modes.
 * The design system prioritizes high contrast and a professional, minimal aesthetic.
 */

/* eslint-disable */
import {
    bwThemeboy, bwThemegirl, eduBlack, expBlack, contactsBlack
} from './images'

/**
 * Professional Dark Theme
 * 
 * Features a pure black background (#0a0a0a) with crisp white text.
 * Used as the default theme for maximum visual impact and elegance.
 */
export const darkTheme = {
    type: 'dark',
    // Primary accents (White in dark mode for contrast)
    primary: '#ffffff',
    primary400: '#f0f0f0',
    primary600: '#e0e0e0',
    primary80: '#ffffffcc',
    primary50: '#ffffff80',
    primary30: '#ffffff4d',

    // Background colors
    secondary: '#0a0a0a', // Main background
    secondary70: '#0a0a0ab3',
    secondary50: '#0a0a0a80',

    // Text colors
    tertiary: '#f5f5f5', // Main text
    tertiary80: '#f5f5f5cc',
    tertiary70: '#f5f5f5b3',
    tertiary50: '#f5f5f580',

    // Theme assets
    aboutimg1: bwThemeboy,
    aboutimg2: bwThemegirl,
    eduimg: eduBlack,
    expimg: expBlack,
    contactsimg: contactsBlack
}

/**
 * Professional Light Theme
 * 
 * Features a clean white background (#fafafa) with rich black text.
 * Optimized for readability and professional presentation.
 */
export const lightTheme = {
    type: 'light',
    // Primary accents (Black in light mode)
    primary: '#000000',
    primary400: '#1a1a1a',
    primary600: '#0a0a0a',
    primary80: '#000000cc',
    primary50: '#00000080',
    primary30: '#0000004d',

    // Background colors
    secondary: '#fafafa', // Main background
    secondary70: '#fafafab3',
    secondary50: '#fafafa80',

    // Text colors
    tertiary: '#1a1a1a', // Main text
    tertiary80: '#1a1a1acc',
    tertiary70: '#1a1a1ab3',
    tertiary50: '#1a1a1a80',

    // Theme assets
    aboutimg1: bwThemeboy,
    aboutimg2: bwThemegirl,
    eduimg: eduBlack,
    expimg: expBlack,
    contactsimg: contactsBlack
}

// Legacy exports for backward compatibility (will be removed in future)
export const bwThemeDark = darkTheme;
export const bwThemeLight = lightTheme;