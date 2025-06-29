import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { ParsedContent } from './components/ParsedContent';
import { ExportSection } from './components/ExportSection';
import { LanguageToggle } from './components/LanguageToggle';
import { parseTextContent } from './utils/parser';
import { ParsedBlock } from './types';
import { FileSpreadsheet, RefreshCw } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './i18n/translations';

function App() {
  const [parsedBlocks, setParsedBlocks] = useState<ParsedBlock[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState('');
  const [hasProcessedFile, setHasProcessedFile] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  
  const t = translations[language];

  const handleFileSelect = async (content: string, fileName: string) => {
    setIsLoading(true);
    setFilename(fileName);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      const result = parseTextContent(content);
      setParsedBlocks(result.blocks);
      setHasProcessedFile(true);
    } catch (error) {
      console.error('Error parsing content:', error);
      setParsedBlocks([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setParsedBlocks([]);
    setFilename('');
    setHasProcessedFile(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FileSpreadsheet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {t.title}
                </h1>
                <p className="text-sm text-gray-600">
                  {t.subtitle}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <LanguageToggle language={language} onToggle={toggleLanguage} />
              {hasProcessedFile && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  {t.newFile}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!hasProcessedFile ? (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.uploadTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.uploadDescription}
            </p>
          </div>
        ) : null}

        <FileUpload onFileSelect={handleFileSelect} isLoading={isLoading} language={language} />
        
        {parsedBlocks.length > 0 && (
          <>
            <ParsedContent blocks={parsedBlocks} language={language} />
            <ExportSection blocks={parsedBlocks} filename={filename} language={language} />
          </>
        )}
        
        {hasProcessedFile && parsedBlocks.length === 0 && !isLoading && (
          <div className="w-full max-w-2xl mx-auto mt-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <div className="text-yellow-800">
                <h3 className="text-lg font-medium mb-2">{t.noDataTitle}</h3>
                <p className="text-sm">
                  {t.noDataDescription}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            <p>
              {t.footerDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;