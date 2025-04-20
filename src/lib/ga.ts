interface GAEventParams {
  action: string;
  category:
    | 'navigation'
    | 'user_interaction'
    | 'form'
    | 'error'
    | 'social'
    | 'ecommerce'
    | 'search';
  label: string;
  value?: number;
}

export const trackEvent = ({
  action,
  category,
  label,
  value
}: GAEventParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value ?? 1
    });
  }
};
