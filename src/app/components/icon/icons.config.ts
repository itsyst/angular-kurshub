import { SvgIcon } from "./icon-registry.service";

export const ICONS: Record<string, SvgIcon> = {
  // General icons
  'search': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'close': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },


  // Contact-us icons
  'message': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'email': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'phone': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11 11 0 006.974 6.974l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'location': {
    content: '<path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },
  'maps': {
    content: '<path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },
  'send-message': {
    content: '<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" fill="none" stroke="currentColor" stroke-width="2"/>',
    viewBox: '0 0 24 24'
  },
  'privacy': {
    content: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: '0 0 24 24'
  },
  'spinner': {
    content: '<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>',
    viewBox: '0 0 24 24'
  },
  'check': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'help': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },

  // Faq & question icons
  'chevron-down': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
  'wifi-signal': {
    content: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" fill="none" stroke="currentColor"/>',
    viewBox: '0 0 24 24'
  },
};
