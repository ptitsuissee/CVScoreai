import { CreditCard, CheckCircle, Info } from 'lucide-react';

interface StripePaymentMessageProps {
  language: 'fr' | 'en';
  type: 'before' | 'after';
  userEmail?: string;
}

const content = {
  fr: {
    before: {
      title: 'Paiement sécurisé',
      message: 'Ton paiement sera lié à ton compte pour te donner accès aux fonctionnalités Premium.',
      email: 'Email associé',
      info: 'Les paiements sont traités de manière sécurisée par Stripe.\nCVScore.ai n\'a jamais accès à tes informations bancaires.',
    },
    after: {
      title: 'Paiement confirmé',
      message: 'L\'accès Premium est maintenant lié à ton compte.',
      success: 'Ton paiement est confirmé. Tu as maintenant accès à toutes les fonctionnalités Premium.',
      access: 'Accéder à mon espace',
    },
  },
  en: {
    before: {
      title: 'Secure Payment',
      message: 'Your payment will be linked to your account to give you access to Premium features.',
      email: 'Associated email',
      info: 'Payments are securely processed by Stripe.\nCVScore.ai never has access to your banking details.',
    },
    after: {
      title: 'Payment Confirmed',
      message: 'Premium access is now linked to your account.',
      success: 'Payment confirmed. You now have access to all Premium features.',
      access: 'Access my account',
    },
  },
};

export function StripePaymentMessage({ language, type, userEmail }: StripePaymentMessageProps) {
  const t = content[language];

  if (type === 'before') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <CreditCard size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg text-gray-900 mb-1">{t.before.title}</h3>
            <p className="text-sm text-gray-700">{t.before.message}</p>
          </div>
        </div>

        {userEmail && (
          <div className="bg-white border border-blue-200 rounded-lg px-4 py-3 mb-4">
            <p className="text-xs text-gray-600 mb-1">{t.before.email}</p>
            <p className="text-sm text-gray-900">{userEmail}</p>
          </div>
        )}

        <div className="flex items-start gap-2">
          <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">{t.before.info}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl text-gray-900 mb-1">{t.after.title}</h3>
          <p className="text-gray-700">{t.after.message}</p>
        </div>
      </div>

      <div className="bg-white border border-green-200 rounded-lg px-4 py-3 mb-4">
        <p className="text-sm text-gray-700">{t.after.success}</p>
      </div>

      {userEmail && (
        <div className="text-sm text-gray-600">
          <span className="text-gray-500">{t.before.email}:</span> {userEmail}
        </div>
      )}
    </div>
  );
}