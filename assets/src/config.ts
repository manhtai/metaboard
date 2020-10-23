export const isDev = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export const isHostedProd = window.location.hostname === 'metaboard.net';

export const REACT_URL = process.env.REACT_APP_URL || 'metaboard.net';

export const BASE_URL = isDev
  ? 'http://localhost:4000'
  : `https://${REACT_URL}`;