declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type TicketClickSource = 'header' | 'card' | 'menu';

export default function trackTicketClick(venue: string, source: TicketClickSource) {
  window.gtag?.('event', 'ticket_click', { venue, source });
}
