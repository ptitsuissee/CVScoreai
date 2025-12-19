import { useState, useEffect } from 'react';
import { Rocket, Sparkles, CheckCircle, X } from 'lucide-react';

export function LaunchCelebration() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if checklist is 100%
    const checklist = localStorage.getItem('launchChecklist');
    if (checklist) {
      const items = JSON.parse(checklist);
      const totalItems = 43;
      const checkedCount = Object.values(items).filter(Boolean).length;
      const progress = Math.round((checkedCount / totalItems) * 100);
      
      if (progress === 100) {
        const hasSeenCelebration = localStorage.getItem('hasSeenLaunchCelebration');
        if (!hasSeenCelebration) {
          setShow(true);
        }
      }
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('hasSeenLaunchCelebration', 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-12 text-white text-center relative overflow-hidden">
          {/* Animated rocket */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
            <Rocket size={48} className="transform rotate-45" />
          </div>

          <h2 className="text-4xl sm:text-5xl mb-4">
            Félicitations ! 🎉
          </h2>
          <p className="text-xl text-green-100">
            Checklist de lancement complétée à 100%
          </p>

          {/* Floating sparkles */}
          <div className="absolute top-10 left-10 animate-pulse">
            <Sparkles size={32} className="text-yellow-300" />
          </div>
          <div className="absolute top-20 right-16 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Sparkles size={24} className="text-yellow-300" />
          </div>
          <div className="absolute bottom-10 left-20 animate-pulse" style={{ animationDelay: '1s' }}>
            <Sparkles size={28} className="text-yellow-300" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4">
              CVScore.ai est prêt pour le lancement !
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Vous avez complété les 43 items de la checklist. Toutes les phases sont validées.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border-2 border-blue-200">
              <div className="text-3xl text-blue-600 mb-1">43</div>
              <div className="text-sm text-blue-700">Items validés</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border-2 border-purple-200">
              <div className="text-3xl text-purple-600 mb-1">3</div>
              <div className="text-sm text-purple-700">Phases complètes</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border-2 border-green-200">
              <div className="text-3xl text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-700">Progression</div>
            </div>
          </div>

          {/* Next steps */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 mb-6">
            <h4 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Rocket size={20} className="text-green-600" />
              Prochaines étapes
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">→</span>
                <span>Activer le mode LIVE sur Stripe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">→</span>
                <span>Configurer le webhook Stripe en production</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">→</span>
                <span>Installer le monitoring (Analytics + Sentry)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">→</span>
                <span>Tester le parcours complet une dernière fois</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">→</span>
                <span>🚀 Lancer en production !</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={handleClose}
            className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-3 group shadow-lg"
          >
            <span>Parfait, je suis prêt !</span>
            <Rocket size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Confetti effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fade-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              {['🎉', '✨', '🎊', '⭐', '💫', '🚀', '👏', '🔥'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
