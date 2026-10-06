// Brand marks that icon libraries don't ship.
export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.9 1 4.1 1.6 6.4 1.6 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.7c-2 0-4-.6-5.7-1.6l-.4-.2-4.3 1.4 1.4-4.2-.3-.4a9.7 9.7 0 0 1-1.5-5.2C5.2 9 10 4.3 16 4.3s10.8 4.7 10.8 10.6S22 25.4 16 25.4z" />
      <path d="M22.6 18c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-4.6-4.1c-.3-.6.3-.5.9-1.8.1-.3 0-.5 0-.7l-1-2.2c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.2 2.2.9 3.1 1 4.2.9.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
    </svg>
  );
}

export const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.7 3H21l-7.1 8.1L22.2 21h-6.6l-5.2-6.3L4.5 21H1.2l7.6-8.7L1.8 3h6.8l4.7 5.7L17.7 3zm-1.2 16h1.8L6.9 4.9H5L16.5 19z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.4h4.6V23H.2V8.4zM8.2 8.4h4.4v2h.1c.6-1.2 2.1-2.4 4.4-2.4 4.7 0 5.6 3.1 5.6 7.1V23h-4.6v-6.9c0-1.6 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V23H8.2V8.4z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export const socialLabels = { facebook: "Facebook", x: "X (Twitter)", linkedin: "LinkedIn", instagram: "Instagram" };
