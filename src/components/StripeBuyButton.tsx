import { useEffect, useRef } from 'react';

interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

export function StripeBuyButton({ buyButtonId, publishableKey }: StripeBuyButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the Stripe script if not already present
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Create the stripe-buy-button element
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <stripe-buy-button
          buy-button-id="${buyButtonId}"
          publishable-key="${publishableKey}">
        </stripe-buy-button>
      `;
    }
  }, [buyButtonId, publishableKey]);

  return <div ref={containerRef} />;
}
