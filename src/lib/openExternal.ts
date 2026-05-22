/**
 * Open an external URL in the way that's smoothest on installed PWAs.
 *
 * Why not `window.open(url, '_blank')`?
 *   On iOS standalone-mode PWAs, `window.open` triggers Apple's Safari
 *   View Controller — an in-app browser overlay that flashes a blank
 *   white loading screen before the destination page renders. It also
 *   bypasses iOS's universal-link routing, so the Google Maps / WhatsApp
 *   / native apps never get a chance to handle the URL.
 *
 * What this does instead:
 *   Dynamically creates and clicks a real <a> element. iOS treats this
 *   as a user-initiated navigation, which means:
 *     • https://www.google.com/maps/... → routes to the Google Maps app
 *       (or Apple Maps as fallback) directly, no white-screen overlay.
 *     • wa.me/* and mailto: links open WhatsApp / the mail app.
 *     • Regular web URLs open in the system browser, not a modal sheet.
 */
export function openExternal(url: string) {
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  // Element must be in the DOM for some browsers' click handling, but
  // we remove it immediately after to avoid leaks.
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
