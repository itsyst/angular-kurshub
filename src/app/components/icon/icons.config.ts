import { SvgIcon } from './icon-registry.service';

export const ICONS: Record<string, SvgIcon> = {
  // General icons
  search: {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  close: {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  'star-filled': {
    content: '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"/>',
    viewBox: '0 0 24 24'
  },

  // Contact-us icons
  message: {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  email: {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  phone: {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11 11 0 006.974 6.974l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  location: {
    content:
      '<path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24',
  },
  maps: {
    content:
      '<path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24',
  },
  'send-message': {
    content:
      '<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24',
  },
  privacy: {
    content:
      '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: '0 0 24 24',
  },
  spinner: {
    content:
      '<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>',
    viewBox: '0 0 24 24',
  },
  check: {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  help: {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },

  // Faq & question icons
  'chevron-down': {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  'wifi-signal': {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },

  // Terms icons
  'check-circle': {
    content:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24',
  },
  'document': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'shield-check': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'id-card': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'clock-time': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'check-answer': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  lightbulb: {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'warning-triangle': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'refresh-cw': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'user-shield': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'users-solid': {
    content: `
      <path d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z" fill="currentColor"/>
      <path d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z" fill="currentColor"/>
      <path d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z" fill="currentColor"/>
      <path d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19A4.09,4.09,0,1,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z" fill="currentColor"/>
      <circle cx="17.87" cy="13.45" r="4.47" fill="currentColor"/>
      <path d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z" fill="currentColor"/>
    `,
    viewBox: '0 0 36 36'
  },
  copyright: {
    content: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 9a3 3 0 00-6 0v6a3 3 0 006 0" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },
  'credit-card': {
    content: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },

  'shield-off': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },

  'x-circle': {
    content: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/><line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },
  scale: {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11v6h6v-6h-6zM8 21V9H2v12h6zM13 3h-2l1.5 4.5L13 3z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },

  // Course icons
  'book-open': {
    content: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },
  'certificate': {
    content: '<circle cx="12" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: '0 0 24 24'
  },
  'level': {
    content: '<path d="M12 2L2 7v5l10 5 10-5V7z" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="2 17 12 22 22 17" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },
  'play': {
    content: '<polygon points="5,3 19,12 5,21 5,3" fill="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'circle-check': {
    content: '<path d="M21.801 10A10 10 0 1 1 17 3.335" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 11 3 3L22 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: '0 0 24 24'
  },
  'play-circle': {
    content: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="10 8 16 12 10 16 10 8" stroke="currentColor" fill="white" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  }
};
