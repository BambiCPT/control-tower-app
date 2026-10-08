export type CtIconName =
  | 'search' | 'plus' | 'send' | 'users' | 'user' | 'shield' | 'sliders'
  | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'check' | 'file' | 'more' | 'alert' | 'close';

export const CT_ICON_PATHS: Record<CtIconName, string[]> = {
  search: ['M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z', 'M21 21l-5.2-5.2'],
  plus: ['M12 5v14', 'M5 12h14'],
  send: ['M21 3 10 14', 'M21 3l-7 18-4-7-7-4 18-7Z'],
  users: ['M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.5 20a6.5 6.5 0 0 1 13 0', 'M16 5.3a3.5 3.5 0 0 1 0 6.4', 'M18 14a6.5 6.5 0 0 1 3.5 6'],
  user: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4.5 20.5a7.5 7.5 0 0 1 15 0'],
  shield: ['M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6L12 3Z'],
  sliders: ['M4 7h9', 'M17 7h3', 'M4 17h3', 'M11 17h9', 'M15 4.5v5', 'M9 14.5v5'],
  'chevron-down': ['m6 9 6 6 6-6'],
  'chevron-up': ['m6 15 6-6 6 6'],
  'chevron-left': ['m15 6-6 6 6 6'],
  check: ['m5 12.5 4.5 4.5L19 7.5'],
  file: ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z', 'M14 3v5h5', 'M9 13h6', 'M9 17h6'],
  more: ['M5.5 12h1', 'M11.5 12h1', 'M17.5 12h1'],
  alert: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7.5v5.5', 'M12 16.5h.01'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
};
