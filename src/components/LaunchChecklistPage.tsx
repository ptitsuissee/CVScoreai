import { useState, useEffect } from 'react';
import { CheckCircle, Circle, Rocket, AlertTriangle, Clock, Zap, Shield } from 'lucide-react';

interface LaunchChecklistPageProps {
  language: 'fr' | 'en';
}

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

interface ChecklistSection {
  title: string;
  icon: any;
  color: string;
  items: ChecklistItem[];
}

const content = {
  fr: {
    title: 'Checklist de lancement CVScore.ai',
    subtitle: 'Structurez votre lancement public étape par étape',
    progress: 'Progression globale',
    ready: 'Prêt pour le lancement',
    phases: {
      j30: {
        title: 'PHASE 1 — J-30 (Préparation)',
        subtitle: 'Fondations produit et légal',
        icon: Clock,
        color: 'blue',
        sections: [
          {
            category: 'Produit',
            items: [
              { id: 'j30-widget', label: 'Widget IA fonctionnel' },
              { id: 'j30-results', label: 'Résultats compréhensibles et rapides' },
              { id: 'j30-bilingual', label: 'Version FR + EN complète' },
              { id: 'j30-freemium', label: 'Widget Freemium avec upsell' },
              { id: 'j30-dashboard', label: 'Dashboard utilisateur fonctionnel' },
            ],
          },
          {
            category: 'Légal',
            items: [
              { id: 'j30-mentions', label: 'Mentions légales (Suisse)' },
              { id: 'j30-privacy', label: 'Politique de confidentialité' },
              { id: 'j30-ai-notice', label: 'Texte IA discret visible' },
              { id: 'j30-cgv', label: 'CGV (Conditions Générales de Vente)' },
            ],
          },
          {
            category: 'Technique',
            items: [
              { id: 'j30-api', label: 'API stable' },
              { id: 'j30-perf', label: 'Temps de réponse < 5 secondes' },
              { id: 'j30-stripe-test', label: 'Paiement Stripe mode test OK' },
              { id: 'j30-hosting', label: 'Hébergement configuré (Vercel/Netlify)' },
              { id: 'j30-domain', label: 'Nom de domaine acheté et configuré' },
            ],
          },
        ],
      },
      j7: {
        title: 'PHASE 2 — J-7 (Pré-lancement)',
        subtitle: 'Optimisation UX et conversion',
        icon: Zap,
        color: 'purple',
        sections: [
          {
            category: 'UX',
            items: [
              { id: 'j7-journey', label: 'Parcours simple (Home → Analyse → Résultat)' },
              { id: 'j7-cta', label: 'CTA clairs "Analyser mon CV"' },
              { id: 'j7-mobile', label: 'Mobile first vérifié' },
              { id: 'j7-onboarding', label: 'Onboarding première visite' },
              { id: 'j7-loading', label: 'États de chargement clairs' },
            ],
          },
          {
            category: 'Conversion',
            items: [
              { id: 'j7-pricing', label: 'Pricing clair (Gratuit vs Premium)' },
              { id: 'j7-premium', label: 'Bloc Premium visible et attractif' },
              { id: 'j7-trust', label: 'Rassurance paiement Stripe visible' },
              { id: 'j7-activation', label: 'Page activation Premium créée' },
              { id: 'j7-examples', label: 'Page exemples avant/après' },
            ],
          },
          {
            category: 'SEO',
            items: [
              { id: 'j7-title', label: 'Title & meta description optimisés' },
              { id: 'j7-h1', label: 'H1 clair et SEO-friendly' },
              { id: 'j7-faq', label: 'FAQ SEO-ready (6+ questions)' },
              { id: 'j7-sitemap', label: 'Sitemap.xml généré' },
              { id: 'j7-robots', label: 'Robots.txt configuré' },
            ],
          },
        ],
      },
      jday: {
        title: 'PHASE 3 — J-DAY (Lancement)',
        subtitle: 'Go live et monitoring',
        icon: Rocket,
        color: 'green',
        sections: [
          {
            category: 'Production',
            items: [
              { id: 'jday-public', label: 'Site public accessible' },
              { id: 'jday-stripe-live', label: 'Paiements Stripe mode LIVE activés' },
              { id: 'jday-webhook', label: 'Webhook Stripe configuré et testé' },
              { id: 'jday-ssl', label: 'Certificat SSL actif (HTTPS)' },
            ],
          },
          {
            category: 'Support',
            items: [
              { id: 'jday-email', label: 'Email support visible' },
              { id: 'jday-response', label: 'Temps de réponse < 24h défini' },
              { id: 'jday-faq-complete', label: 'FAQ complète et testée' },
            ],
          },
          {
            category: 'Monitoring',
            items: [
              { id: 'jday-analytics', label: 'Google Analytics / Plausible installé' },
              { id: 'jday-errors', label: 'Monitoring erreurs (Sentry)' },
              { id: 'jday-uptime', label: 'Monitoring uptime (UptimeRobot)' },
              { id: 'jday-backup', label: 'Système de backup configuré' },
            ],
          },
          {
            category: 'Marketing',
            items: [
              { id: 'jday-social', label: 'Comptes sociaux créés' },
              { id: 'jday-launch-post', label: 'Post de lancement rédigé' },
              { id: 'jday-email-template', label: 'Templates emails transactionnels' },
            ],
          },
        ],
      },
    },
  },
  en: {
    title: 'CVScore.ai Launch Checklist',
    subtitle: 'Structure your public launch step by step',
    progress: 'Overall progress',
    ready: 'Ready for launch',
    phases: {
      j30: {
        title: 'PHASE 1 — D-30 (Preparation)',
        subtitle: 'Product and legal foundations',
        icon: Clock,
        color: 'blue',
        sections: [
          {
            category: 'Product',
            items: [
              { id: 'j30-widget', label: 'AI widget functional' },
              { id: 'j30-results', label: 'Results clear and fast' },
              { id: 'j30-bilingual', label: 'FR + EN version complete' },
              { id: 'j30-freemium', label: 'Freemium widget with upsell' },
              { id: 'j30-dashboard', label: 'User dashboard functional' },
            ],
          },
          {
            category: 'Legal',
            items: [
              { id: 'j30-mentions', label: 'Legal notices (Switzerland)' },
              { id: 'j30-privacy', label: 'Privacy policy' },
              { id: 'j30-ai-notice', label: 'AI disclaimer visible' },
              { id: 'j30-cgv', label: 'Terms of service' },
            ],
          },
          {
            category: 'Technical',
            items: [
              { id: 'j30-api', label: 'API stable' },
              { id: 'j30-perf', label: 'Response time < 5 seconds' },
              { id: 'j30-stripe-test', label: 'Stripe payment test mode OK' },
              { id: 'j30-hosting', label: 'Hosting configured (Vercel/Netlify)' },
              { id: 'j30-domain', label: 'Domain name purchased and configured' },
            ],
          },
        ],
      },
      j7: {
        title: 'PHASE 2 — D-7 (Pre-launch)',
        subtitle: 'UX and conversion optimization',
        icon: Zap,
        color: 'purple',
        sections: [
          {
            category: 'UX',
            items: [
              { id: 'j7-journey', label: 'Simple flow (Home → Analysis → Result)' },
              { id: 'j7-cta', label: 'Clear CTAs "Analyze my resume"' },
              { id: 'j7-mobile', label: 'Mobile first verified' },
              { id: 'j7-onboarding', label: 'First visit onboarding' },
              { id: 'j7-loading', label: 'Clear loading states' },
            ],
          },
          {
            category: 'Conversion',
            items: [
              { id: 'j7-pricing', label: 'Clear pricing (Free vs Premium)' },
              { id: 'j7-premium', label: 'Premium block visible and attractive' },
              { id: 'j7-trust', label: 'Stripe payment reassurance visible' },
              { id: 'j7-activation', label: 'Premium activation page created' },
              { id: 'j7-examples', label: 'Before/after examples page' },
            ],
          },
          {
            category: 'SEO',
            items: [
              { id: 'j7-title', label: 'Title & meta description optimized' },
              { id: 'j7-h1', label: 'Clear and SEO-friendly H1' },
              { id: 'j7-faq', label: 'SEO-ready FAQ (6+ questions)' },
              { id: 'j7-sitemap', label: 'Sitemap.xml generated' },
              { id: 'j7-robots', label: 'Robots.txt configured' },
            ],
          },
        ],
      },
      jday: {
        title: 'PHASE 3 — D-DAY (Launch)',
        subtitle: 'Go live and monitoring',
        icon: Rocket,
        color: 'green',
        sections: [
          {
            category: 'Production',
            items: [
              { id: 'jday-public', label: 'Public site accessible' },
              { id: 'jday-stripe-live', label: 'Stripe payments LIVE mode enabled' },
              { id: 'jday-webhook', label: 'Stripe webhook configured and tested' },
              { id: 'jday-ssl', label: 'SSL certificate active (HTTPS)' },
            ],
          },
          {
            category: 'Support',
            items: [
              { id: 'jday-email', label: 'Support email visible' },
              { id: 'jday-response', label: 'Response time < 24h defined' },
              { id: 'jday-faq-complete', label: 'Complete and tested FAQ' },
            ],
          },
          {
            category: 'Monitoring',
            items: [
              { id: 'jday-analytics', label: 'Google Analytics / Plausible installed' },
              { id: 'jday-errors', label: 'Error monitoring (Sentry)' },
              { id: 'jday-uptime', label: 'Uptime monitoring (UptimeRobot)' },
              { id: 'jday-backup', label: 'Backup system configured' },
            ],
          },
          {
            category: 'Marketing',
            items: [
              { id: 'jday-social', label: 'Social accounts created' },
              { id: 'jday-launch-post', label: 'Launch post drafted' },
              { id: 'jday-email-template', label: 'Transactional email templates' },
            ],
          },
        ],
      },
    },
  },
};

export function LaunchChecklistPage({ language }: LaunchChecklistPageProps) {
  const t = content[language];
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('launchChecklist');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('launchChecklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateProgress = () => {
    const allItems: string[] = [];
    const phases = [t.phases.j30, t.phases.j7, t.phases.jday];
    
    phases.forEach((phase) => {
      phase.sections.forEach((section) => {
        section.items.forEach((item) => {
          allItems.push(item.id);
        });
      });
    });

    const checkedCount = allItems.filter((id) => checkedItems[id]).length;
    return Math.round((checkedCount / allItems.length) * 100);
  };

  const calculatePhaseProgress = (phase: any) => {
    const allItems: string[] = [];
    phase.sections.forEach((section: any) => {
      section.items.forEach((item: any) => {
        allItems.push(item.id);
      });
    });

    const checkedCount = allItems.filter((id: string) => checkedItems[id]).length;
    return Math.round((checkedCount / allItems.length) * 100);
  };

  const progress = calculateProgress();

  const renderPhase = (phase: any) => {
    const PhaseIcon = phase.icon;
    const phaseProgress = calculatePhaseProgress(phase);

    const colorClasses = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        icon: 'bg-blue-100 text-blue-600',
        progress: 'bg-blue-600',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        icon: 'bg-purple-100 text-purple-600',
        progress: 'bg-purple-600',
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        icon: 'bg-green-100 text-green-600',
        progress: 'bg-green-600',
      },
    };

    const colors = colorClasses[phase.color as keyof typeof colorClasses];

    return (
      <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 sm:p-8`}>
        {/* Phase Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <PhaseIcon size={28} />
            </div>
            <div>
              <h2 className={`text-2xl ${colors.text} mb-1`}>{phase.title}</h2>
              <p className="text-gray-600">{phase.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-3xl ${colors.text}`}>{phaseProgress}%</div>
            <div className="text-sm text-gray-500">{language === 'fr' ? 'complété' : 'complete'}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-white rounded-full overflow-hidden mb-8">
          <div className={`h-full ${colors.progress} transition-all duration-500`} style={{ width: `${phaseProgress}%` }} />
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {phase.sections.map((section: any, sectionIndex: number) => (
            <div key={sectionIndex} className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">{section.category}</h3>
              <div className="space-y-3">
                {section.items.map((item: any) => {
                  const isChecked = checkedItems[item.id];
                  return (
                    <label
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        isChecked ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked || false}
                        onChange={() => toggleItem(item.id)}
                        className="sr-only"
                      />
                      {isChecked ? (
                        <CheckCircle size={22} className="text-green-600 flex-shrink-0" />
                      ) : (
                        <Circle size={22} className="text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`${isChecked ? 'text-green-900 line-through' : 'text-gray-700'}`}>
                        {item.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Global Progress */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-8 shadow-2xl mb-12 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm text-blue-200 uppercase tracking-wide mb-2">{t.progress}</div>
              <div className="text-5xl">{progress}%</div>
            </div>
            {progress === 100 ? (
              <div className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full">
                <CheckCircle size={24} />
                <span className="text-lg">{t.ready}</span>
              </div>
            ) : progress >= 80 ? (
              <div className="flex items-center gap-3 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full">
                <AlertTriangle size={24} />
                <span className="text-lg">{language === 'fr' ? 'Presque prêt' : 'Almost ready'}</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Shield size={24} />
                <span className="text-lg">{language === 'fr' ? 'En préparation' : 'In preparation'}</span>
              </div>
            )}
          </div>

          {/* Global progress bar */}
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-8">
          {renderPhase(t.phases.j30)}
          {renderPhase(t.phases.j7)}
          {renderPhase(t.phases.jday)}
        </div>

        {/* Footer note */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700">
            {language === 'fr'
              ? '💡 Cette checklist est sauvegardée automatiquement dans votre navigateur'
              : '💡 This checklist is automatically saved in your browser'}
          </p>
        </div>
      </div>
    </div>
  );
}
