import { CheckCircle, Circle, Clock, Sparkles, Users, Globe, Briefcase, Code, Crown, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductRoadmapProps {
  language: 'fr' | 'en';
  layout?: 'horizontal' | 'vertical';
}

type PhaseStatus = 'completed' | 'in-progress' | 'planned';

interface Feature {
  name: string;
  description: string;
  status: PhaseStatus;
}

interface Phase {
  id: number;
  name: string;
  subtitle: string;
  status: PhaseStatus;
  quarter: string;
  features: Feature[];
  icon: any;
  color: {
    bg: string;
    border: string;
    text: string;
    icon: string;
  };
}

const content = {
  fr: {
    title: 'Roadmap Produit',
    subtitle: 'Vision et priorités CVScore.ai',
    
    phases: [
      {
        id: 1,
        name: 'Phase 1 — MVP',
        subtitle: 'Fondations du produit',
        status: 'completed' as PhaseStatus,
        quarter: 'Q4 2024',
        icon: CheckCircle,
        color: {
          bg: 'bg-green-50',
          border: 'border-green-300',
          text: 'text-green-700',
          icon: 'text-green-600',
        },
        features: [
          { name: 'Analyse CV IA', description: 'Score global + sous-scores', status: 'completed' as PhaseStatus },
          { name: 'Premium par email', description: 'Activation simple sans compte', status: 'completed' as PhaseStatus },
          { name: 'Paiement Stripe', description: 'EUR/CHF, sécurisé', status: 'completed' as PhaseStatus },
          { name: 'Multi-langue FR/EN', description: 'Interface bilingue', status: 'completed' as PhaseStatus },
        ],
      },
      {
        id: 2,
        name: 'Phase 2 — Améliorations',
        subtitle: 'Fonctionnalités avancées',
        status: 'in-progress' as PhaseStatus,
        quarter: 'Q1 2025',
        icon: Sparkles,
        color: {
          bg: 'bg-blue-50',
          border: 'border-blue-300',
          text: 'text-blue-700',
          icon: 'text-blue-600',
        },
        features: [
          { name: 'Feedback ligne par ligne', description: 'Analyse détaillée de chaque section', status: 'in-progress' as PhaseStatus },
          { name: 'Optimisation ATS avancée', description: 'Recommandations ATS spécifiques', status: 'in-progress' as PhaseStatus },
          { name: 'Export PDF amélioré', description: 'Templates professionnels', status: 'planned' as PhaseStatus },
          { name: 'Growth loop virale', description: 'Partage social + SEO', status: 'in-progress' as PhaseStatus },
        ],
      },
      {
        id: 3,
        name: 'Phase 3 — Comptes utilisateurs',
        subtitle: 'Authentification & persistance',
        status: 'planned' as PhaseStatus,
        quarter: 'Q2 2025',
        icon: Users,
        color: {
          bg: 'bg-purple-50',
          border: 'border-purple-300',
          text: 'text-purple-700',
          icon: 'text-purple-600',
        },
        features: [
          { name: 'Historique des analyses', description: 'Sauvegarde automatique', status: 'planned' as PhaseStatus },
          { name: 'Tableau de bord personnel', description: 'Statistiques et progression', status: 'planned' as PhaseStatus },
          { name: 'Connexion sécurisée', description: 'OAuth + email magic link', status: 'planned' as PhaseStatus },
          { name: 'Notifications email', description: 'Rappels et conseils personnalisés', status: 'planned' as PhaseStatus },
        ],
      },
      {
        id: 4,
        name: 'Phase 4 — International',
        subtitle: 'Expansion géographique',
        status: 'planned' as PhaseStatus,
        quarter: 'Q3 2025',
        icon: Globe,
        color: {
          bg: 'bg-orange-50',
          border: 'border-orange-300',
          text: 'text-orange-700',
          icon: 'text-orange-600',
        },
        features: [
          { name: 'Langues supplémentaires', description: 'DE, IT, ES, NL', status: 'planned' as PhaseStatus },
          { name: 'Spécificités pays', description: 'Standards ATS locaux', status: 'planned' as PhaseStatus },
          { name: 'Recommandations locales', description: 'Conseils par marché', status: 'planned' as PhaseStatus },
          { name: 'Devises multiples', description: 'USD, GBP, etc.', status: 'planned' as PhaseStatus },
        ],
      },
      {
        id: 5,
        name: 'Phase 5 — B2B / Partenariats',
        subtitle: 'Croissance enterprise',
        status: 'planned' as PhaseStatus,
        quarter: 'Q4 2025',
        icon: Briefcase,
        color: {
          bg: 'bg-yellow-50',
          border: 'border-yellow-300',
          text: 'text-yellow-700',
          icon: 'text-yellow-600',
        },
        features: [
          { name: 'Offres entreprises', description: 'Licences multi-utilisateurs', status: 'planned' as PhaseStatus },
          { name: 'Coaching RH', description: 'Partenariats avec recruteurs', status: 'planned' as PhaseStatus },
          { name: 'API publique', description: 'Intégration tierce', status: 'planned' as PhaseStatus },
          { name: 'White label', description: 'Marque personnalisée', status: 'planned' as PhaseStatus },
        ],
      },
    ],
    
    statusLabels: {
      completed: 'Terminé',
      'in-progress': 'En cours',
      planned: 'Prévu',
    },
    
    legend: {
      title: 'Légende',
      completed: 'Fonctionnalité déployée',
      inProgress: 'En développement actif',
      planned: 'Planifié prochainement',
    },
  },
  en: {
    title: 'Product Roadmap',
    subtitle: 'CVScore.ai vision and priorities',
    
    phases: [
      {
        id: 1,
        name: 'Phase 1 — MVP',
        subtitle: 'Product foundations',
        status: 'completed' as PhaseStatus,
        quarter: 'Q4 2024',
        icon: CheckCircle,
        color: {
          bg: 'bg-green-50',
          border: 'border-green-300',
          text: 'text-green-700',
          icon: 'text-green-600',
        },
        features: [
          { name: 'AI CV Analysis', description: 'Overall score + sub-scores', status: 'completed' as PhaseStatus },
          { name: 'Premium by email', description: 'Simple activation without account', status: 'completed' as PhaseStatus },
          { name: 'Stripe payment', description: 'EUR/CHF, secure', status: 'completed' as PhaseStatus },
          { name: 'Multi-language FR/EN', description: 'Bilingual interface', status: 'completed' as PhaseStatus },
        ],
      },
      {
        id: 2,
        name: 'Phase 2 — Improvements',
        subtitle: 'Advanced features',
        status: 'in-progress' as PhaseStatus,
        quarter: 'Q1 2025',
        icon: Sparkles,
        color: {
          bg: 'bg-blue-50',
          border: 'border-blue-300',
          text: 'text-blue-700',
          icon: 'text-blue-600',
        },
        features: [
          { name: 'Line-by-line feedback', description: 'Detailed analysis of each section', status: 'in-progress' as PhaseStatus },
          { name: 'Advanced ATS optimization', description: 'Specific ATS recommendations', status: 'in-progress' as PhaseStatus },
          { name: 'Enhanced PDF export', description: 'Professional templates', status: 'planned' as PhaseStatus },
          { name: 'Viral growth loop', description: 'Social sharing + SEO', status: 'in-progress' as PhaseStatus },
        ],
      },
      {
        id: 3,
        name: 'Phase 3 — User accounts',
        subtitle: 'Authentication & persistence',
        status: 'planned' as PhaseStatus,
        quarter: 'Q2 2025',
        icon: Users,
        color: {
          bg: 'bg-purple-50',
          border: 'border-purple-300',
          text: 'text-purple-700',
          icon: 'text-purple-600',
        },
        features: [
          { name: 'Analysis history', description: 'Automatic save', status: 'planned' as PhaseStatus },
          { name: 'Personal dashboard', description: 'Statistics and progress', status: 'planned' as PhaseStatus },
          { name: 'Secure login', description: 'OAuth + email magic link', status: 'planned' as PhaseStatus },
          { name: 'Email notifications', description: 'Reminders and personalized tips', status: 'planned' as PhaseStatus },
        ],
      },
      {
        id: 4,
        name: 'Phase 4 — International',
        subtitle: 'Geographic expansion',
        status: 'planned' as PhaseStatus,
        quarter: 'Q3 2025',
        icon: Globe,
        color: {
          bg: 'bg-orange-50',
          border: 'border-orange-300',
          text: 'text-orange-700',
          icon: 'text-orange-600',
        },
        features: [
          { name: 'Additional languages', description: 'DE, IT, ES, NL', status: 'planned' as PhaseStatus },
          { name: 'Country specifics', description: 'Local ATS standards', status: 'planned' as PhaseStatus },
          { name: 'Local recommendations', description: 'Market-specific advice', status: 'planned' as PhaseStatus },
          { name: 'Multiple currencies', description: 'USD, GBP, etc.', status: 'planned' as PhaseStatus },
        ],
      },
      {
        id: 5,
        name: 'Phase 5 — B2B / Partnerships',
        subtitle: 'Enterprise growth',
        status: 'planned' as PhaseStatus,
        quarter: 'Q4 2025',
        icon: Briefcase,
        color: {
          bg: 'bg-yellow-50',
          border: 'border-yellow-300',
          text: 'text-yellow-700',
          icon: 'text-yellow-600',
        },
        features: [
          { name: 'Enterprise offers', description: 'Multi-user licenses', status: 'planned' as PhaseStatus },
          { name: 'HR coaching', description: 'Partnerships with recruiters', status: 'planned' as PhaseStatus },
          { name: 'Public API', description: 'Third-party integration', status: 'planned' as PhaseStatus },
          { name: 'White label', description: 'Custom branding', status: 'planned' as PhaseStatus },
        ],
      },
    ],
    
    statusLabels: {
      completed: 'Completed',
      'in-progress': 'In progress',
      planned: 'Planned',
    },
    
    legend: {
      title: 'Legend',
      completed: 'Feature deployed',
      inProgress: 'In active development',
      planned: 'Planned soon',
    },
  },
};

const getStatusIcon = (status: PhaseStatus) => {
  switch (status) {
    case 'completed':
      return <CheckCircle size={16} className="text-green-600" />;
    case 'in-progress':
      return <Clock size={16} className="text-blue-600" />;
    case 'planned':
      return <Circle size={16} className="text-gray-400" />;
  }
};

export function ProductRoadmap({ language, layout = 'vertical' }: ProductRoadmapProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="text-blue-600" size={40} />
            <h1 className="text-4xl sm:text-5xl text-gray-900">{t.title}</h1>
          </div>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-12 shadow-md"
        >
          <h3 className="text-lg text-gray-900 mb-4">{t.legend.title}</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600" />
              <span className="text-sm text-gray-700">{t.legend.completed}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-blue-600" />
              <span className="text-sm text-gray-700">{t.legend.inProgress}</span>
            </div>
            <div className="flex items-center gap-3">
              <Circle size={20} className="text-gray-400" />
              <span className="text-sm text-gray-700">{t.legend.planned}</span>
            </div>
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className={`${layout === 'horizontal' ? 'flex overflow-x-auto gap-6 pb-8' : 'space-y-8'}`}>
          {t.phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`${layout === 'horizontal' ? 'min-w-[400px]' : 'w-full'} relative`}
              >
                {/* Connection line (vertical layout only) */}
                {layout === 'vertical' && index < t.phases.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 -mb-8 z-0" />
                )}

                <div className={`relative z-10 bg-white rounded-2xl border-4 ${phase.color.border} shadow-xl p-6 sm:p-8 ${phase.color.bg}`}>
                  {/* Phase Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${phase.color.bg} rounded-xl flex items-center justify-center border-2 ${phase.color.border} flex-shrink-0 shadow-md`}>
                      <Icon className={phase.color.icon} size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className={`text-xl sm:text-2xl ${phase.color.text}`}>{phase.name}</h2>
                        {phase.status === 'completed' && (
                          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                            <CheckCircle size={14} />
                            <span>{t.statusLabels.completed}</span>
                          </div>
                        )}
                        {phase.status === 'in-progress' && (
                          <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                            <Clock size={14} />
                            <span>{t.statusLabels['in-progress']}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-1">{phase.subtitle}</p>
                      <div className="text-sm text-gray-500">{phase.quarter}</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {phase.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                        className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-gray-300 transition-all"
                      >
                        <div className="mt-0.5">
                          {getStatusIcon(feature.status)}
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 mb-1">{feature.name}</div>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress indicator (for in-progress phases) */}
                  {phase.status === 'in-progress' && (
                    <div className="mt-6 pt-6 border-t-2 border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          {language === 'fr' ? 'Progression' : 'Progress'}
                        </span>
                        <span className="text-sm text-blue-600">60%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <Crown className="text-yellow-300 mx-auto mb-4" size={40} />
            <h3 className="text-2xl sm:text-3xl mb-4">
              {language === 'fr' 
                ? '🚀 Participe à la vision CVScore.ai' 
                : '🚀 Be part of CVScore.ai vision'}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Tes retours façonnent notre roadmap. Contacte-nous pour suggérer des fonctionnalités.'
                : 'Your feedback shapes our roadmap. Contact us to suggest features.'}
            </p>
            <a
              href="mailto:CVScoreai@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all shadow-xl"
            >
              <Sparkles size={20} />
              <span>{language === 'fr' ? 'Partager mes idées' : 'Share my ideas'}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
