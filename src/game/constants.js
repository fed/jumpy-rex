export const DEFAULT_WIDTH = 600; // Default game width.
export const FPS = 60; // Frames per second.
export const IS_HIDPI = window.devicePixelRatio > 1;
export const IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);
export const IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;
export const IS_TOUCH_ENABLED = 'ontouchstart' in window;
