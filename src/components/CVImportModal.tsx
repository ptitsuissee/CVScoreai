import { useState, useRef } from 'react';
import { X, Upload, FileText, Sparkles } from 'lucide-react';

interface CVImportModalProps {
  language: 'fr' | 'en';
  onClose: () => void;
  onImportComplete: (cvData: any) => void;
}

const content = {
  fr: {
    title: 'Importer ton CV existant',
    pasteTab: 'Coller le texte',
    uploadTab: 'Uploader un fichier',
    pastePlaceholder: 'Colle ton CV ici (texte brut)...',
    uploadArea: 'Glisse ton CV ici ou clique pour importer',
    supportedFormats: 'PDF, Word (.docx), ou texte',
    loadButton: 'Charger mon CV',
    processing: 'Analyse et structuration de ton CV en cours…',
    cancel: 'Annuler',
    aiParsing: 'Le contenu sera automatiquement structuré et modifiable.',
    reassurance: 'Aucun compte requis. Ton CV reste privé.',
    orSeparator: 'OU',
  },
  en: {
    title: 'Import Your Existing Resume',
    pasteTab: 'Paste Text',
    uploadTab: 'Upload File',
    pastePlaceholder: 'Paste your resume here (plain text)...',
    uploadArea: 'Drop your resume here or click to import',
    supportedFormats: 'PDF, Word (.docx), or text',
    loadButton: 'Load my Resume',
    processing: 'Analyzing and structuring your resume...',
    cancel: 'Cancel',
    aiParsing: 'Content will be automatically structured and editable.',
    reassurance: 'No account required. Your resume stays private.',
    orSeparator: 'OR',
  },
};

export function CVImportModal({ language, onClose, onImportComplete }: CVImportModalProps) {
  const t = content[language];
  const [activeTab, setActiveTab] = useState<'paste' | 'upload'>('paste');
  const [cvText, setCvText] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseCV = async (text: string) => {
    // Simulate AI parsing (in production, this would call an AI API)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Basic parsing logic (extract sections)
    const sections = {
      personalInfo: {
        name: '',
        title: '',
        email: '',
        phone: '',
        location: '',
      },
      summary: '',
      experiences: [] as any[],
      education: [] as any[],
      skills: [] as string[],
      languages: [] as any[],
    };

    // Try to extract name (first non-empty line usually)
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length > 0) {
      sections.personalInfo.name = lines[0].trim();
    }

    // Try to extract email
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      sections.personalInfo.email = emailMatch[0];
    }

    // Try to extract phone
    const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{2,3}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}/);
    if (phoneMatch) {
      sections.personalInfo.phone = phoneMatch[0];
    }

    // Store full text for manual review
    sections.summary = text.substring(0, 500);

    return sections;
  };

  const handleLoadCV = async () => {
    if (!cvText.trim() && !uploadedFile) return;

    setIsProcessing(true);

    try {
      let textToProcess = cvText;

      // If file was uploaded, read it
      if (uploadedFile && !cvText) {
        const fileContent = await readFile(uploadedFile);
        textToProcess = fileContent;
      }

      // Parse CV with AI
      const parsedData = await parseCV(textToProcess);
      parsedData.rawText = textToProcess;

      onImportComplete(parsedData);
    } catch (error) {
      console.error('Error parsing CV:', error);
      alert(language === 'fr' ? 'Erreur lors de l\'import du CV' : 'Error importing CV');
    } finally {
      setIsProcessing(false);
    }
  };

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setCvText(''); // Clear paste area if file is uploaded
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileUpload(file);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-gray-900">{t.title}</h2>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <Sparkles size={14} className="text-blue-600" />
              {t.aiParsing}
            </p>
            <p className="text-xs text-gray-500 mt-1">{t.reassurance}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-8 pt-6">
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('paste')}
              className={`pb-3 px-4 text-sm transition-all ${
                activeTab === 'paste'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.pasteTab}
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`pb-3 px-4 text-sm transition-all ${
                activeTab === 'upload'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.uploadTab}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {activeTab === 'paste' ? (
            <div>
              <textarea
                value={cvText}
                onChange={(e) => setCvText(e.target.value)}
                placeholder={t.pastePlaceholder}
                rows={16}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                disabled={isProcessing}
              />
            </div>
          ) : (
            <div>
              {!uploadedFile ? (
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Upload size={32} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 mb-2">{t.uploadArea}</p>
                      <p className="text-sm text-gray-500">{t.supportedFormats}</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file);
                    }}
                    accept=".pdf,.doc,.docx,.txt"
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="border-2 border-green-300 bg-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <FileText size={32} className="text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm text-green-800">{language === 'fr' ? 'Fichier chargé' : 'File loaded'}</p>
                      <p className="text-xs text-green-700 mt-1">{uploadedFile.name}</p>
                    </div>
                    <button
                      onClick={() => setUploadedFile(null)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {t.cancel}
          </button>
          <button
            onClick={handleLoadCV}
            disabled={(!cvText.trim() && !uploadedFile) || isProcessing}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{t.processing}</span>
              </>
            ) : (
              <>
                <Sparkles size={20} />
                <span>{t.loadButton}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}