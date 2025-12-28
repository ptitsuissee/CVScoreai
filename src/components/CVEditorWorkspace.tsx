import { useState, useEffect } from 'react';
import { ArrowLeft, Download, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { CVEditorForm } from './CVEditorForm';
import { CVPreviewPanel } from './CVPreviewPanel';
import { CVExportModal } from './CVExportModal';
import { CVEditorMobileStepper } from './CVEditorMobileStepper';

interface CVEditorWorkspaceProps {
  language: 'fr' | 'en';
  initialData?: any;
  onBack: () => void;
}

const content = {
  fr: {
    backButton: 'Retour',
    downloadButton: 'Télécharger PDF',
    previewButton: 'Aperçu',
    hidePreview: 'Masquer',
    saveButton: 'Enregistrer',
    autoSave: 'Sauvegarde automatique',
    importSuccess: 'Ton CV est prêt à être modifié.',
  },
  en: {
    backButton: 'Back',
    downloadButton: 'Download PDF',
    previewButton: 'Preview',
    hidePreview: 'Hide',
    saveButton: 'Save',
    autoSave: 'Auto-saved',
    importSuccess: 'Your resume is ready to be edited.',
  },
};

export function CVEditorWorkspace({ language, initialData, onBack }: CVEditorWorkspaceProps) {
  const t = content[language];
  const [cvData, setCvData] = useState(initialData || {
    personalInfo: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
    },
    summary: '',
    experiences: [],
    education: [],
    skills: [],
    languages: [],
  });
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [autoSaved, setAutoSaved] = useState(false);
  const [showImportSuccess, setShowImportSuccess] = useState(!!initialData);

  // Hide success message after 5 seconds
  useEffect(() => {
    if (initialData) {
      setTimeout(() => setShowImportSuccess(false), 5000);
    }
  }, [initialData]);

  const handleUpdateData = (newData: any) => {
    setCvData(newData);
    
    // Simulate auto-save
    setAutoSaved(false);
    setTimeout(() => {
      setAutoSaved(true);
    }, 1000);
  };

  const handleExport = () => {
    setShowExportModal(true);
  };

  const handleSelectPlan = (plan: 'oneTime' | 'monthly') => {
    setShowExportModal(false);
    // In production, redirect to payment
    alert(language === 'fr' 
      ? `Redirection vers le paiement ${plan === 'oneTime' ? 'unique' : 'mensuel'}...` 
      : `Redirecting to ${plan === 'oneTime' ? 'one-time' : 'monthly'} payment...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Toolbar */}
      <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-40">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left - Back button */}
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">{t.backButton}</span>
            </button>

            {/* Center - Auto-save indicator */}
            <div className="flex items-center gap-2">
              {autoSaved && (
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="hidden sm:inline">{t.autoSave}</span>
                </div>
              )}
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-3">
              {/* Toggle Preview (mobile/tablet) */}
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                {showPreview ? <EyeOff size={20} /> : <Eye size={20} />}
                <span className="hidden sm:inline">
                  {showPreview ? t.hidePreview : t.previewButton}
                </span>
              </button>

              {/* Download Button */}
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                <Download size={20} />
                <span className="hidden sm:inline">{t.downloadButton}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Import Success Message */}
        {showImportSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 animate-fadeIn">
            <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
            <p className="text-green-800">{t.importSuccess}</p>
            <button 
              onClick={() => setShowImportSuccess(false)}
              className="ml-auto text-green-600 hover:text-green-800 transition-colors"
            >
              ✕
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Editor Form */}
          <div className={showPreview ? 'hidden lg:block' : ''}>
            <CVEditorForm
              language={language}
              data={cvData}
              onUpdate={handleUpdateData}
            />
          </div>

          {/* Right Column - Live Preview */}
          <div className={showPreview ? '' : 'hidden lg:block'}>
            <div className="sticky top-24">
              <CVPreviewPanel
                language={language}
                data={cvData}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      <CVExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        language={language}
        onSelectPlan={handleSelectPlan}
      />
    </div>
  );
}