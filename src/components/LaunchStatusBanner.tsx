import { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, XCircle, ChevronRight } from 'lucide-react';

interface LaunchStatusBannerProps {
  onNavigateChecklist: () => void;
}

export function LaunchStatusBanner({ onNavigateChecklist }: LaunchStatusBannerProps) {
  const [progress, setProgress] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('launchBannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }

    // Calculate progress from checklist
    const checklist = localStorage.getItem('launchChecklist');
    if (checklist) {
      const items = JSON.parse(checklist);
      const totalItems = 43; // Total items in checklist
      const checkedCount = Object.values(items).filter(Boolean).length;
      setProgress(Math.round((checkedCount / totalItems) * 100));
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('launchBannerDismissed', 'true');
  };

  if (isDismissed || progress === 100) {
    return null;
  }

  const getStatusConfig = () => {
    if (progress >= 80) {
      return {
        icon: AlertTriangle,
        color: 'yellow',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-900',
        iconColor: 'text-yellow-600',
        message: 'Presque prêt pour le lancement !',
      };
    } else if (progress >= 50) {
      return {
        icon: AlertTriangle,
        color: 'blue',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        iconColor: 'text-blue-600',
        message: 'Lancement en préparation',
      };
    } else {
      return {
        icon: XCircle,
        color: 'gray',
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-900',
        iconColor: 'text-gray-600',
        message: 'Début de préparation',
      };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className={`${config.bg} border-2 ${config.border} rounded-xl p-4 mb-6`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Icon className={config.iconColor} size={24} />
          <div className="flex-1">
            <div className={`${config.text} mb-1`}>{config.message}</div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full ${
                    progress >= 80 ? 'bg-yellow-500' : progress >= 50 ? 'bg-blue-500' : 'bg-gray-400'
                  } transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className={`text-sm ${config.text}`}>{progress}%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onNavigateChecklist}
            className={`px-4 py-2 ${
              progress >= 80
                ? 'bg-yellow-600 hover:bg-yellow-700'
                : progress >= 50
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-600 hover:bg-gray-700'
            } text-white rounded-lg transition-all flex items-center gap-2 text-sm`}
          >
            <span>Voir checklist</span>
            <ChevronRight size={16} />
          </button>
          
          <button
            onClick={handleDismiss}
            className="w-8 h-8 bg-white rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center text-gray-500"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
