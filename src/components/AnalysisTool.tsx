import { useState, useRef, useEffect } from 'react';
import { Upload, Zap, FileText, Image as ImageIcon, CheckCircle2, X } from 'lucide-react';
import { analyzeCVWithAI } from '../services/cvAnalysis';

interface AnalysisToolProps {
  language: 'fr' | 'en';
  onAnalyze: (analysis: any, cvData?: any) => void;
}

const content = {
  fr: {
    title: 'Analyse ton CV maintenant',
    uploadArea: 'Glisse ton CV ici ou clique pour télécharger',
    supportedFormats: 'PDF, Word (.docx), ou Image (JPG, PNG)',
    orPasteImage: 'Ou colle une image de ton CV (Ctrl+V / Cmd+V)',
    jobLabel: 'Poste visé (optionnel)',
    jobPlaceholder: 'Ex: Développeur Full-Stack',
    countryLabel: 'Pays',
    analyzeButton: 'Analyser mon CV',
    disclaimer: 'Analyse gratuite, aucune carte bancaire requise',
    fileUploaded: 'Fichier chargé',
    extractingText: 'Extraction du contenu en cours...',
    extractionComplete: 'Contenu extrait avec succès',
    readyToAnalyze: 'Prêt à analyser',
    changeFile: 'Changer de fichier',
    fileError: 'Erreur lors de la lecture du fichier',
    processingPDF: 'Traitement du PDF...',
    processingWord: 'Traitement du document Word...',
    processingImage: 'OCR de l\'image en cours...',
    pasteImageHere: 'Image collée - Extraction en cours...',
    unsupportedFormat: 'Format non supporté. Formats acceptés : PDF, Word (.docx), JPG, PNG',
  },
  en: {
    title: 'Analyze your Resume Now',
    uploadArea: 'Drop your resume here or click to upload',
    supportedFormats: 'PDF, Word (.docx), or Image (JPG, PNG)',
    orPasteImage: 'Or paste an image of your resume (Ctrl+V / Cmd+V)',
    jobLabel: 'Target position (optional)',
    jobPlaceholder: 'Ex: Full-Stack Developer',
    countryLabel: 'Country',
    analyzeButton: 'Analyze my Resume',
    disclaimer: 'Free analysis, no credit card required',
    fileUploaded: 'File loaded',
    extractingText: 'Extracting content...',
    extractionComplete: 'Content extracted successfully',
    readyToAnalyze: 'Ready to analyze',
    changeFile: 'Change file',
    fileError: 'Error reading file',
    processingPDF: 'Processing PDF...',
    processingWord: 'Processing Word document...',
    processingImage: 'OCR processing image...',
    pasteImageHere: 'Image pasted - Extracting...',
    unsupportedFormat: 'Unsupported format. Accepted formats: PDF, Word (.docx), JPG, PNG',
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
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionStatus, setExtractionStatus] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // Handle paste event for images
  useEffect(() => {
    const handlePaste = async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          e.preventDefault();
          const blob = items[i].getAsFile();
          if (blob) {
            await processFile(blob);
          }
          break;
        }
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, []);

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

  // Extract text from image using Tesseract.js
  const extractTextFromImage = async (file: File): Promise<string> => {
    try {
      const Tesseract = await import('tesseract.js');
      
      setExtractionStatus(t.processingImage);
      
      const result = await Tesseract.recognize(
        file,
        language === 'fr' ? 'fra' : 'eng',
        {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              setExtractionStatus(`${t.processingImage} ${Math.round(m.progress * 100)}%`);
            }
          }
        }
      );
      
      return result.data.text;
    } catch (error) {
      console.error('OCR error:', error);
      throw new Error('Failed to extract text from image');
    }
  };

  // Simulate PDF/Word extraction (in production, this would be backend)
  const extractTextFromDocument = async (file: File): Promise<string> => {
    const fileType = file.name.split('.').pop()?.toLowerCase();
    
    if (fileType === 'pdf') {
      setExtractionStatus(t.processingPDF);
    } else if (fileType === 'docx' || fileType === 'doc') {
      setExtractionStatus(t.processingWord);
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In production, send to backend API for extraction
    // For now, return a placeholder that indicates the file was received
    return `[CV Document analysé: ${file.name}]\n\nCe CV a été uploadé et sera analysé par notre IA.\n\n(En production, le contenu réel du document serait extrait ici via backend)`;
  };

  const processFile = async (file: File) => {
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    const fileType = file.type;

    // Check if file type is supported
    const isImage = fileType.startsWith('image/') || ['jpg', 'jpeg', 'png'].includes(fileExtension || '');
    const isPDF = fileExtension === 'pdf' || fileType === 'application/pdf';
    const isWord = ['doc', 'docx'].includes(fileExtension || '') || 
                   fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    if (!isImage && !isPDF && !isWord) {
      alert(t.unsupportedFormat);
      return;
    }

    setUploadedFile(file);
    setIsExtracting(true);
    setExtractionStatus(t.extractingText);

    try {
      let extractedText = '';

      if (isImage) {
        // Show image preview
        const reader = new FileReader();
        reader.onload = (e) => setPreviewImage(e.target?.result as string);
        reader.readAsDataURL(file);

        // Extract text using OCR
        extractedText = await extractTextFromImage(file);
      } else {
        // Extract from PDF/Word
        extractedText = await extractTextFromDocument(file);
      }

      if (extractedText && extractedText.trim()) {
        setCvText(extractedText);
        setExtractionStatus(t.extractionComplete);
      } else {
        throw new Error('No text extracted');
      }
    } catch (error) {
      console.error('Error processing file:', error);
      alert(t.fileError);
      setUploadedFile(null);
      setPreviewImage(null);
    } finally {
      setIsExtracting(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setPreviewImage(null);
    setCvText('');
    setExtractionStatus('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="analyze" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.title}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* Upload Area */}
          {!uploadedFile ? (
            <div
              ref={dropZoneRef}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`mb-6 border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
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
                  <p className="text-sm text-blue-600 mt-2">{t.orPasteImage}</p>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
              />
            </div>
          ) : (
            // File Uploaded State
            <div className="mb-6 border-2 border-green-300 bg-green-50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {previewImage ? (
                    <ImageIcon size={24} className="text-green-600" />
                  ) : (
                    <FileText size={24} className="text-green-600" />
                  )}
                  <div>
                    <p className="text-sm text-green-800">
                      {isExtracting ? extractionStatus : t.fileUploaded}
                    </p>
                    <p className="text-xs text-green-700 mt-1">{uploadedFile.name}</p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Loading indicator */}
              {isExtracting && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm text-green-700">{extractionStatus}</span>
                </div>
              )}

              {/* Image preview */}
              {previewImage && !isExtracting && (
                <div className="mb-4">
                  <img
                    src={previewImage}
                    alt="CV preview"
                    className="max-h-64 mx-auto rounded-lg border-2 border-gray-200"
                  />
                </div>
              )}

              {/* Success indicator */}
              {!isExtracting && cvText && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 size={20} />
                  <span className="text-sm">{t.extractionComplete} • {t.readyToAnalyze}</span>
                </div>
              )}

              {/* Change file button */}
              <button
                onClick={handleRemoveFile}
                className="mt-4 text-sm text-blue-600 hover:text-blue-700 underline"
              >
                {t.changeFile}
              </button>
            </div>
          )}

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
            disabled={!cvText.trim() || isAnalyzing || isExtracting}
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
