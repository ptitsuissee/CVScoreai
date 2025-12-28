import { useState } from 'react';
import { CVBuilderEditor } from './CVBuilderEditor';
import { CVBuilderPreview } from './CVBuilderPreview';
import { CVExportModal } from './CVExportModal';
import { Download, Sparkles, Save, Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';

interface CVBuilderProps {
  language: 'fr' | 'en';
  isPremium: boolean;
  onNavigate: (page: string) => void;
  onUpgrade: () => void;
}

export interface CVData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
  };
  jobTitle: string;
  summary: string;
  experiences: Array<{
    id: string;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    school: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: string[];
  languages: Array<{
    id: string;
    language: string;
    level: string;
  }>;
}

const content = {
  fr: {
    title: 'Créateur de CV avec IA',
    subtitle: 'Créez et modifiez votre CV gratuitement. Exportez en Premium.',
    saveButton: 'Sauvegarder',
    downloadButton: 'Télécharger PDF',
    previewToggle: 'Aperçu',
    hidePreview: 'Masquer aperçu',
    showPreview: 'Voir aperçu',
    freeMode: 'Mode gratuit',
    premiumMode: 'Premium actif',
    watermarkNotice: 'L\'export PDF nécessite un compte Premium',
    autoSaved: 'Sauvegardé automatiquement',
  },
  en: {
    title: 'AI-Powered Resume Builder',
    subtitle: 'Create and edit your resume for free. Export with Premium.',
    saveButton: 'Save',
    downloadButton: 'Download PDF',
    previewToggle: 'Preview',
    hidePreview: 'Hide preview',
    showPreview: 'Show preview',
    freeMode: 'Free mode',
    premiumMode: 'Premium active',
    watermarkNotice: 'PDF export requires a Premium account',
    autoSaved: 'Auto-saved',
  },
};

const initialCVData: CVData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
  },
  jobTitle: '',
  summary: '',
  experiences: [],
  education: [],
  skills: [],
  languages: [],
};

export function CVBuilder({ language, isPremium, onNavigate, onUpgrade }: CVBuilderProps) {
  const t = content[language];
  const [cvData, setCVData] = useState<CVData>(initialCVData);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const handleDataChange = (newData: Partial<CVData>) => {
    setCVData({ ...cvData, ...newData });
    // Simulate auto-save
    setIsSaved(false);
    setTimeout(() => setIsSaved(true), 1000);
  };

  const handleDownload = () => {
    if (isPremium) {
      // Trigger actual PDF download
      alert(language === 'fr' ? 'Téléchargement du PDF...' : 'Downloading PDF...');
    } else {
      // Show paywall modal
      setIsExportModalOpen(true);
    }
  };

  const handleSave = () => {
    // Save to localStorage or backend
    localStorage.setItem('cvData', JSON.stringify(cvData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900 flex items-center gap-2">
                <Sparkles size={28} className="text-blue-600" />
                {t.title}
              </h1>
              <p className="text-sm text-gray-600 mt-1">{t.subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Status Badge */}
              <div className={`px-4 py-2 rounded-lg text-sm ${
                isPremium 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {isPremium ? t.premiumMode : t.freeMode}
              </div>

              {/* Auto-save indicator */}
              {isSaved && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-sm text-green-600"
                >
                  <Save size={16} />
                  {t.autoSaved}
                </motion.div>
              )}

              {/* Mobile: Toggle Preview */}
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="lg:hidden px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                {showPreview ? <EyeOff size={20} /> : <Eye size={20} />}
                {showPreview ? t.hidePreview : t.showPreview}
              </button>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className={`px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 ${
                  isPremium
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                    : 'bg-blue-600 text-white hover:bg-blue-700 relative'
                }`}
              >
                <Download size={20} />
                {t.downloadButton}
                {!isPremium && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                )}
              </button>
            </div>
          </div>

          {/* Free mode notice */}
          {!isPremium && (
            <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-sm text-blue-700">
              💡 {t.watermarkNotice}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Column */}
          <div className={showPreview ? 'hidden lg:block' : 'block'}>
            <CVBuilderEditor
              language={language}
              cvData={cvData}
              onChange={handleDataChange}
              isPremium={isPremium}
            />
          </div>

          {/* Preview Column */}
          <div className={showPreview ? 'block' : 'hidden lg:block'}>
            <div className="sticky top-24">
              <CVBuilderPreview
                language={language}
                cvData={cvData}
                isPremium={isPremium}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      <CVExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        language={language}
        onSelectPlan={(plan) => {
          setIsExportModalOpen(false);
          onNavigate('pricing');
        }}
      />
    </div>
  );
}
