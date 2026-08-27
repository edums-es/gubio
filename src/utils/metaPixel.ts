declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

export const initMetaPixel = () => {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
  if (!pixelId || window.fbq) return;

  const fbq = function (...args: unknown[]) {
    (fbq as typeof fbq & { callMethod?: (...callArgs: unknown[]) => void; queue?: unknown[][] }).callMethod
      ? (fbq as typeof fbq & { callMethod: (...callArgs: unknown[]) => void }).callMethod(...args)
      : (fbq as typeof fbq & { queue: unknown[][] }).queue.push(args);
  } as typeof window.fbq & { callMethod?: (...args: unknown[]) => void; queue: unknown[][]; loaded?: boolean; version?: string };

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = '2.0';
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  fbq('init', pixelId);
  fbq('track', 'PageView');
};

export const trackMetaLead = (source: string) => {
  window.fbq?.('track', 'Lead', { content_name: source });
};
