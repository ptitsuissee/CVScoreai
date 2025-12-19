import { useState } from 'react';
import { X, FileText, Download, CheckCircle, Crown } from 'lucide-react';

interface ExportPDFModalProps {
  language: 'fr' | 'en';
  isOpen: boolean;
  onClose: () => void;
  isPremium: boolean;
  onUpgrade: () => void;
}

const content = {
  fr: {
    title: 'Exporter votre analyse',
    languageLabel: 'Langue du rapport',
    formatLabel: 'Format',
    formatStandard: 'Standard',
    formatDetailed: 'Détaillé',
    includeLabel: 'Inclure',
    includeScore: 'Score global et sous-scores',
    includeTips: 'Conseils et recommandations',
    includeATS: 'Analyse ATS détaillée',
    previewTitle: 'Aperçu du document',
    previewHeader: 'CVScore.ai — Analyse de CV',
    previewScore: 'Score global : 72/100',
    previewSubscores: 'Clarté • Impact • Structure • ATS',
    previewSummary: 'Résumé de l\'analyse et recommandations personnalisées...',
    downloadButton: 'Télécharger le rapport PDF',
    premiumRequired: 'Fonctionnalité Premium',
    premiumMessage: 'L\'export PDF est disponible avec l\'offre Premium.',
    upgradeButton: 'Débloquer Premium',
  },
  en: {
    title: 'Export your analysis',
    languageLabel: 'Report language',
    formatLabel: 'Format',
    formatStandard: 'Standard',
    formatDetailed: 'Detailed',
    includeLabel: 'Include',
    includeScore: 'Overall and subscores',
    includeTips: 'Tips and recommendations',
    includeATS: 'Detailed ATS analysis',
    previewTitle: 'Document preview',
    previewHeader: 'CVScore.ai — Resume Analysis',
    previewScore: 'Overall score: 72/100',
    previewSubscores: 'Clarity • Impact • Structure • ATS',
    previewSummary: 'Analysis summary and personalized recommendations...',
    downloadButton: 'Download PDF report',
    premiumRequired: 'Premium Feature',
    premiumMessage: 'PDF export is available with the Premium plan.',
    upgradeButton: 'Unlock Premium',
  },
};

export function ExportPDFModal({ language, isOpen, onClose, isPremium, onUpgrade }: ExportPDFModalProps) {
  const [reportLang, setReportLang] = useState(language);
  const [format, setFormat] = useState<'standard' | 'detailed'>('standard');
  const [includeOptions, setIncludeOptions] = useState({
    score: true,
    tips: true,
    ats: true,
  });

  const t = content[language];

  if (!isOpen) return null;

  const handleDownload = () => {
    if (!isPremium) {
      onUpgrade();
      return;
    }

    // Simulate PDF download
    console.log('Downloading PDF with options:', { reportLang, format, includeOptions });
    alert(`PDF téléchargé ! (Simulation)\nLangue: ${reportLang}\nFormat: ${format}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="text-blue-600" size={20} />
            </div>
            <h2 className="text-2xl text-gray-900">{t.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {!isPremium && (
            /* Premium Required Banner */
            <div className="mb-6 p-6 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl text-white">
              <div className="flex items-center gap-2 mb-3">
                <Crown size={24} className="text-yellow-400" />
                <span className="uppercase tracking-wide text-sm text-yellow-400">Premium</span>
              </div>
              <h3 className="text-xl mb-2">{t.premiumRequired}</h3>
              <p className="text-blue-100 mb-4">{t.premiumMessage}</p>
              <button
                onClick={onUpgrade}
                className="w-full py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t.upgradeButton}
              </button>
            </div>
          )}

          <div className={`grid md:grid-cols-2 gap-6 ${!isPremium ? 'opacity-50 pointer-events-none' : ''}`}>
            {/* Left: Options */}
            <div className="space-y-6">
              {/* Language */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">{t.languageLabel}</label>
                <div className="flex gap-2">
                  {['fr', 'en'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setReportLang(lang as 'fr' | 'en')}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        reportLang === lang
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">{t.formatLabel}</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFormat('standard')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm transition-all ${
                      format === 'standard'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.formatStandard}
                  </button>
                  <button
                    onClick={() => setFormat('detailed')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm transition-all ${
                      format === 'detailed'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.formatDetailed}
                  </button>
                </div>
              </div>

              {/* Include options */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">{t.includeLabel}</label>
                <div className="space-y-2">
                  {[
                    { key: 'score', label: t.includeScore },
                    { key: 'tips', label: t.includeTips },
                    { key: 'ats', label: t.includeATS },
                  ].map((option) => (
                    <label key={option.key} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="checkbox"
                        checked={includeOptions[option.key as keyof typeof includeOptions]}
                        onChange={(e) =>
                          setIncludeOptions((prev) => ({
                            ...prev,
                            [option.key]: e.target.checked,
                          }))
                        }
                        className="w-5 h-5 text-blue-600 rounded"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Preview */}
            <div>
              <label className="block text-sm text-gray-700 mb-3">{t.previewTitle}</label>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
                {/* PDF Mockup */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="pb-3 border-b border-gray-200">
                    <div className="text-lg text-blue-600">CVScore.ai</div>
                    <div className="text-xs text-gray-500">{t.previewHeader}</div>
                  </div>

                  {/* Score */}
                  {includeOptions.score && (
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl text-blue-600 mb-1">72</div>
                        <div className="text-xs text-gray-600">{t.previewScore}</div>
                      </div>
                      <div className="mt-3 text-xs text-gray-600 text-center">
                        {t.previewSubscores}
                      </div>
                    </div>
                  )}

                  {/* Summary */}
                  {includeOptions.tips && (
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-5/6" />
                      <div className="h-2 bg-gray-200 rounded w-4/6" />
                    </div>
                  )}

                  {/* ATS */}
                  {includeOptions.ats && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle size={14} className="text-green-600" />
                        <div className="h-2 bg-gray-200 rounded w-24" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-gray-200 rounded w-full" />
                        <div className="h-1.5 bg-gray-200 rounded w-3/4" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-6">
            <button
              onClick={handleDownload}
              disabled={!isPremium}
              className={`w-full py-4 rounded-xl transition-all flex items-center justify-center gap-3 ${
                isPremium
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Download size={20} />
              <span>{t.downloadButton}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
