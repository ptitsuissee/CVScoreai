import { useState } from 'react';
import { Share2, Copy, CheckCircle, TrendingUp, Target, Globe, Sparkles, Crown, ExternalLink, Repeat, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GrowthLoopProps {
  language: 'fr' | 'en';
  userScore: number;
  isPremium: boolean;
  onAnalyzeAgain?: () => void;
  onCompare?: () => void;
  onShare?: () => void;
}

const content = {
  fr: {
    // Main CTA
    title: 'Améliore encore ton score 🚀',
    subtitle: 'Continue d\'optimiser ton CV',
    
    // Actions principales
    actions: {
      share: {
        title: 'Partager mon score',
        description: 'Partage tes résultats et aide d\'autres candidats',
        icon: Share2,
      },
      compare: {
        title: 'Comparer avec un autre CV',
        description: 'Analyse une variante pour voir l\'impact',
        icon: Repeat,
      },
      testJob: {
        title: 'Tester un autre poste',
        description: 'Optimise ton CV pour un métier différent',
        icon: Target,
      },
    },
    
    // Share modal
    shareModal: {
      title: 'Partager mon analyse',
      linkCopied: 'Lien copié !',
      copyLink: 'Copier le lien',
      shareLinkedIn: 'Partager sur LinkedIn',
      shareText: 'J\'ai analysé mon CV avec l\'IA et obtenu un score de {{score}}/100 sur CVScore.ai ! 🚀',
      close: 'Fermer',
    },
    
    // SEO Loop
    seoLoop: {
      title: 'Teste ton CV pour d\'autres marchés',
      subtitle: 'Optimise tes chances selon les pays',
      markets: [
        { code: 'CH', name: 'Marché suisse 🇨🇭', flag: '🇨🇭' },
        { code: 'FR', name: 'Marché français 🇫🇷', flag: '🇫🇷' },
        { code: 'DE', name: 'Marché allemand 🇩🇪', flag: '🇩🇪' },
        { code: 'EU', name: 'Union européenne 🇪🇺', flag: '🇪🇺' },
      ],
      cta: 'Analyser',
    },
    
    // Premium incentive
    premiumIncentive: {
      title: 'Débloquer plus d\'analyses',
      subtitle: 'Partage ton score pour gagner un bonus',
      bonus: '+1 analyse détaillée offerte',
      cta: 'Partager et débloquer',
    },
    
    // Premium badge
    premiumBadge: {
      text: 'Premium',
      shareText: 'Partager avec badge Premium',
    },
  },
  en: {
    // Main CTA
    title: 'Improve your score even more 🚀',
    subtitle: 'Keep optimizing your resume',
    
    // Actions principales
    actions: {
      share: {
        title: 'Share my score',
        description: 'Share your results and help other candidates',
        icon: Share2,
      },
      compare: {
        title: 'Compare with another resume',
        description: 'Analyze a variant to see the impact',
        icon: Repeat,
      },
      testJob: {
        title: 'Test another job',
        description: 'Optimize your resume for a different role',
        icon: Target,
      },
    },
    
    // Share modal
    shareModal: {
      title: 'Share my analysis',
      linkCopied: 'Link copied!',
      copyLink: 'Copy link',
      shareLinkedIn: 'Share on LinkedIn',
      shareText: 'I analyzed my resume with AI and got a score of {{score}}/100 on CVScore.ai! 🚀',
      close: 'Close',
    },
    
    // SEO Loop
    seoLoop: {
      title: 'Test your resume for other markets',
      subtitle: 'Optimize your chances by country',
      markets: [
        { code: 'CH', name: 'Swiss market 🇨🇭', flag: '🇨🇭' },
        { code: 'FR', name: 'French market 🇫🇷', flag: '🇫🇷' },
        { code: 'DE', name: 'German market 🇩🇪', flag: '🇩🇪' },
        { code: 'EU', name: 'European Union 🇪🇺', flag: '🇪🇺' },
      ],
      cta: 'Analyze',
    },
    
    // Premium incentive
    premiumIncentive: {
      title: 'Unlock more analyses',
      subtitle: 'Share your score to earn a bonus',
      bonus: '+1 detailed analysis offered',
      cta: 'Share and unlock',
    },
    
    // Premium badge
    premiumBadge: {
      text: 'Premium',
      shareText: 'Share with Premium badge',
    },
  },
};

export function GrowthLoop({ language, userScore, isPremium, onAnalyzeAgain, onCompare, onShare }: GrowthLoopProps) {
  const t = content[language];
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);

  const handleCopyLink = () => {
    const shareUrl = `https://cvscore.ai?ref=share&score=${userScore}`;
    navigator.clipboard.writeText(shareUrl);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleShareLinkedIn = () => {
    const shareText = t.shareModal.shareText.replace('{{score}}', userScore.toString());
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=https://cvscore.ai?ref=linkedin`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleMarketAnalysis = (marketCode: string) => {
    setSelectedMarket(marketCode);
    // Trigger re-analysis for this market
    if (onAnalyzeAgain) {
      setTimeout(() => {
        onAnalyzeAgain();
        setSelectedMarket(null);
      }, 500);
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </motion.div>

        {/* Main Actions */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {Object.entries(t.actions).map(([key, action], index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (key === 'share') setIsShareModalOpen(true);
                  else if (key === 'compare' && onCompare) onCompare();
                  else if (key === 'testJob' && onAnalyzeAgain) onAnalyzeAgain();
                }}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all text-left group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </motion.button>
            );
          })}
        </div>

        {/* SEO Loop - Market Testing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-blue-600" size={28} />
            <div>
              <h3 className="text-xl text-gray-900">{t.seoLoop.title}</h3>
              <p className="text-sm text-gray-600">{t.seoLoop.subtitle}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.seoLoop.markets.map((market, index) => (
              <motion.button
                key={market.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => handleMarketAnalysis(market.code)}
                disabled={selectedMarket === market.code}
                className={`bg-white rounded-lg border-2 p-4 hover:border-blue-400 transition-all text-center ${
                  selectedMarket === market.code ? 'border-blue-400 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="text-3xl mb-2">{market.flag}</div>
                <div className="text-sm text-gray-900 mb-3">{market.name}</div>
                {selectedMarket === market.code ? (
                  <div className="text-xs text-blue-600 flex items-center justify-center gap-2">
                    <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <span>{t.seoLoop.cta}...</span>
                  </div>
                ) : (
                  <div className="text-xs text-blue-600">{t.seoLoop.cta}</div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Premium Incentive (Free users only) */}
        {!isPremium && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white"
          >
            <Sparkles className="text-yellow-300 mx-auto mb-4" size={32} />
            <h3 className="text-2xl mb-2">{t.premiumIncentive.title}</h3>
            <p className="text-blue-100 mb-4">{t.premiumIncentive.subtitle}</p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Crown size={20} className="text-yellow-300" />
              <span className="text-lg">{t.premiumIncentive.bonus}</span>
            </div>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="px-8 py-3 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-xl"
            >
              <Share2 size={20} />
              <span>{t.premiumIncentive.cta}</span>
            </button>
          </motion.div>
        )}

        {/* Premium Badge (Premium users) */}
        {isPremium && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300 p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Crown className="text-yellow-600" size={24} />
              <span className="text-lg text-gray-900">{t.premiumBadge.shareText}</span>
            </div>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Share2 size={18} />
              <span>{t.actions.share.title}</span>
            </button>
          </motion.div>
        )}

        {/* Share Modal */}
        <AnimatePresence>
          {isShareModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setIsShareModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-2">{t.shareModal.title}</h3>
                </div>

                {/* Share text preview */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 border-2 border-gray-200">
                  <p className="text-sm text-gray-700">
                    {t.shareModal.shareText.replace('{{score}}', userScore.toString())}
                  </p>
                </div>

                {/* Share actions */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={handleCopyLink}
                    className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                  >
                    {linkCopied ? (
                      <>
                        <CheckCircle size={20} />
                        <span>{t.shareModal.linkCopied}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={20} />
                        <span>{t.shareModal.copyLink}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleShareLinkedIn}
                    className="w-full py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    <span>{t.shareModal.shareLinkedIn}</span>
                  </button>
                </div>

                {/* Close */}
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="w-full py-2 text-gray-600 hover:text-gray-900 transition-all"
                >
                  {t.shareModal.close}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Growth metrics (visual feedback) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            <Users size={16} />
            <span>
              {language === 'fr' 
                ? '+300 utilisateurs cette semaine grâce au partage' 
                : '+300 users this week thanks to sharing'}
            </span>
            <TrendingUp size={16} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
