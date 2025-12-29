import { Shield } from 'lucide-react';

interface PrivacyTooltipProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    text: 'Nous respectons ta vie privée.',
  },
  en: {
    text: 'We respect your privacy.',
  },
};

export function PrivacyTooltip({ language }: PrivacyTooltipProps) {
  const t = content[language];

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
      <Shield size={14} className="text-green-600" />
      <span className="text-xs text-green-700">{t.text}</span>
    </div>
  );
}
