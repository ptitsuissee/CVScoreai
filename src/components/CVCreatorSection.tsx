import { useState } from 'react';
import { FileEdit, PlusCircle, Sparkles } from 'lucide-react';
import { CVImportModal } from './CVImportModal';
import { CVEditorWorkspace } from './CVEditorWorkspace';

interface CVCreatorSectionProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Créateur de CV Professionnel',
    subtitle: 'Crée ou modifie ton CV avec l\'assistance de notre IA',
    createMode: {
      title: 'Créer un CV',
      description: 'Crée ton CV à partir de zéro avec un éditeur simple et assisté par IA.',
      button: 'Créer mon CV',
      icon: '🆕',
    },
    editMode: {
      title: 'Modifier un CV existant',
      description: 'Colle ou importe ton CV existant pour le modifier, l\'améliorer et le mettre à jour.',
      button: 'Modifier mon CV',
      icon: '✏️',
    },
    features: [
      'Éditeur intuitif avec aperçu temps réel',
      'Suggestions IA pour améliorer ton contenu',
      'Format professionnel compatible ATS',
      'Export PDF haute qualité',
    ],
  },
  en: {
    title: 'Professional Resume Creator',
    subtitle: 'Create or edit your resume with AI assistance',
    createMode: {
      title: 'Create a Resume',
      description: 'Build your resume from scratch with a simple AI-assisted editor.',
      button: 'Create my Resume',
      icon: '🆕',
    },
    editMode: {
      title: 'Edit Existing Resume',
      description: 'Paste or import your existing resume to modify, improve and update it.',
      button: 'Edit my Resume',
      icon: '✏️',
    },
    features: [
      'Intuitive editor with real-time preview',
      'AI suggestions to improve your content',
      'Professional ATS-compatible format',
      'High-quality PDF export',
    ],
  },
};

export function CVCreatorSection({ language }: CVCreatorSectionProps) {
  const t = content[language];
  const [mode, setMode] = useState<'select' | 'create' | 'edit' | 'workspace'>('select');
  const [showImportModal, setShowImportModal] = useState(false);
  const [importedCVData, setImportedCVData] = useState<any>(null);

  const handleCreateMode = () => {
    setMode('workspace');
    setImportedCVData(null);
  };

  const handleEditMode = () => {
    setShowImportModal(true);
  };

  const handleImportComplete = (cvData: any) => {
    setImportedCVData(cvData);
    setShowImportModal(false);
    setMode('workspace');
  };

  const handleBackToSelect = () => {
    setMode('select');
    setImportedCVData(null);
  };

  // Show workspace if mode is set
  if (mode === 'workspace') {
    return (
      <CVEditorWorkspace
        language={language}
        initialData={importedCVData}
        onBack={handleBackToSelect}
      />
    );
  }

  // Show mode selection
  return (
    <>
      <section id="cv-creator" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles size={16} />
              <span>{language === 'fr' ? 'Alimenté par IA' : 'AI-Powered'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>

          {/* Mode Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Create Mode Card */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-blue-400 transition-all p-8 cursor-pointer group"
                 onClick={handleCreateMode}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <PlusCircle size={28} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-900 mb-2">{t.createMode.title}</h3>
                  <p className="text-gray-600">{t.createMode.description}</p>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                <PlusCircle size={20} />
                <span>{t.createMode.button}</span>
              </button>
            </div>

            {/* Edit Mode Card */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-purple-400 transition-all p-8 cursor-pointer group"
                 onClick={handleEditMode}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <FileEdit size={28} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-900 mb-2">{t.editMode.title}</h3>
                  <p className="text-gray-600">{t.editMode.description}</p>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20">
                <FileEdit size={20} />
                <span>{t.editMode.button}</span>
              </button>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl text-gray-900 mb-6 text-center">
              {language === 'fr' ? 'Fonctionnalités incluses' : 'Included Features'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Import Modal */}
      {showImportModal && (
        <CVImportModal
          language={language}
          onClose={() => setShowImportModal(false)}
          onImportComplete={handleImportComplete}
        />
      )}
    </>
  );
}
