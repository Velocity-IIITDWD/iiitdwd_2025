'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { useReportWebVitals } from 'next/web-vitals';

export default function Analytics() {
  useReportWebVitals((metric) => {
    window.gtag('event', metric.name, {
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true
    });
  });

  return <GoogleAnalytics gaId="G-1FVFMZZ0KL" />;
}
