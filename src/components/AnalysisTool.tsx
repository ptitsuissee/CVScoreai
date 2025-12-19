import { useState, useRef } from 'react';
import { Upload, Zap } from 'lucide-react';
import { analyzeCVWithAI } from '../services/cvAnalysis';

interface AnalysisToolProps {
  language: 'fr' | 'en';
  onAnalyze: (analysis: any, cvData?: any) => void;
}

const content = {
  fr: {
    title: 'Analyse ton CV maintenant',
    placeholder: 'Colle le contenu de ton CV ici...',
    jobLabel: 'Poste visé (optionnel)',
    jobPlaceholder: 'Ex: Développeur Full-Stack',
    countryLabel: 'Pays',
    analyzeButton: 'Analyser mon CV',
    disclaimer: 'Analyse gratuite, aucune carte bancaire requise',
    uploadButton: 'Ou télécharger un fichier',
    fileError: 'Erreur lors de la lecture du fichier',
  },
  en: {
    title: 'Analyze your Resume Now',
    placeholder: 'Paste your resume content here...',
    jobLabel: 'Target position (optional)',
    jobPlaceholder: 'Ex: Full-Stack Developer',
    countryLabel: 'Country',
    analyzeButton: 'Analyze my Resume',
    disclaimer: 'Free analysis, no credit card required',
    uploadButton: 'Or upload a file',
    fileError: 'Error reading file',
  },
};

const countries = [
  { code: 'CH', name: 'Switzerland / Suisse' },
  { code: 'FR', name: 'France' },
  { code: 'DE', name: 'Germany / Allemagne' },
  { code: 'IT', name: 'Italy / Italie' },
  { code: 'ES', name: 'Spain / Espagne' },
  { code: 'EU', name: 'European Union / UE' },
];

export function AnalysisTool({ language, onAnalyze }: AnalysisToolProps) {
  const t = content[language];
  const [cvText, setCvText] = useState('');
  const [targetJob, setTargetJob] = useState('');
  const [country, setCountry] = useState('FR');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnalyze = async () => {
    if (!cvText.trim()) return;

    setIsAnalyzing(true);
    
    try {
      const analysis = await analyzeCVWithAI({
        cvText,
        targetJob,
        country,
        language,
      });

      onAnalyze(analysis, { cvText, targetJob, country });
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Error analyzing CV:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setCvText(text);
      };
      reader.onerror = () => {
        alert(t.fileError);
      };
      
      // Support for text files only (PDF/DOC would need additional libraries)
      if (file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else {
        alert(language === 'fr' 
          ? 'Pour le moment, seuls les fichiers .txt sont supportés. Vous pouvez copier-coller le contenu de votre CV.' 
          : 'Currently, only .txt files are supported. You can copy-paste your resume content.');
        event.target.value = ''; // Reset input
      }
    }
  };

  return (
    <section id="analyze" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.title}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* CV Text Area */}
          <div className="mb-6">
            <textarea
              value={cvText}
              onChange={(e) => setCvText(e.target.value)}
              placeholder={t.placeholder}
              rows={12}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all"
            />
            <button
              className="mt-2 text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={16} />
              {t.uploadButton}
            </button>
            <p className="text-xs text-gray-500 mt-1">
              {language === 'fr' ? '(Format .txt uniquement pour le moment)' : '(.txt format only for now)'}
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".txt"
              className="hidden"
            />
          </div>

          {/* Job Title Input */}
          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">{t.jobLabel}</label>
            <input
              type="text"
              value={targetJob}
              onChange={(e) => setTargetJob(e.target.value)}
              placeholder={t.jobPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Country Select */}
          <div className="mb-8">
            <label className="block text-sm text-gray-700 mb-2">{t.countryLabel}</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={!cvText.trim() || isAnalyzing}
            className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{language === 'fr' ? 'Analyse en cours...' : 'Analyzing...'}</span>
              </>
            ) : (
              <>
                <Zap size={20} />
                <span>{t.analyzeButton}</span>
              </>
            )}
          </button>

          {/* Disclaimer */}
          <p className="text-center text-sm text-gray-500 mt-4">{t.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}