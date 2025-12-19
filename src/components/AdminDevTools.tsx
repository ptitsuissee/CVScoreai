import { useState } from 'react';
import { Settings, CheckSquare, Sparkles, XCircle } from 'lucide-react';

interface AdminDevToolsProps {
  onNavigate: (page: string) => void;
  onResetOnboarding: () => void;
  onTogglePremium: () => void;
  isPremium: boolean;
}

export function AdminDevTools({ onNavigate, onResetOnboarding, onTogglePremium, isPremium }: AdminDevToolsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (bottom left) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-gray-900 text-white rounded-full shadow-2xl hover:bg-gray-800 transition-all flex items-center justify-center group"
        title="Dev Tools"
      >
        <Settings size={20} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Dev Tools Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6 w-72 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-gray-900">🛠️ Dev Tools</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center"
            >
              <XCircle size={18} className="text-gray-600" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Launch Checklist */}
            <button
              onClick={() => {
                onNavigate('launch-checklist');
                setIsOpen(false);
              }}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-3 text-sm"
            >
              <CheckSquare size={18} />
              <span>Launch Checklist</span>
            </button>

            {/* Reset Onboarding */}
            <button
              onClick={() => {
                onResetOnboarding();
                setIsOpen(false);
              }}
              className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-3 text-sm"
            >
              <Sparkles size={18} />
              <span>Reset Onboarding</span>
            </button>

            {/* Toggle Premium */}
            <button
              onClick={() => {
                onTogglePremium();
              }}
              className={`w-full py-3 px-4 rounded-lg transition-all flex items-center gap-3 text-sm ${
                isPremium
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                {isPremium && <div className="w-2.5 h-2.5 bg-current rounded-full" />}
              </div>
              <span>{isPremium ? 'Premium: ON' : 'Premium: OFF'}</span>
            </button>

            {/* Info */}
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Pour développement uniquement
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
