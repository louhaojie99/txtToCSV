import React from 'react';
import { Download, FileText } from 'lucide-react';
import { ParsedBlock } from '../types';
import { generateCSV, downloadCSV } from '../utils/parser';
import { Language } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

interface ExportSectionProps {
  blocks: ParsedBlock[];
  filename: string;
  language: Language;
}

export function ExportSection({ blocks, filename, language }: ExportSectionProps) {
  const t = translations[language];

  const handleExport = () => {
    const csvContent = generateCSV(blocks);
    const exportFilename = filename.replace('.txt', '.csv');
    downloadCSV(csvContent, exportFilename);
  };

  if (blocks.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center">
          <FileText className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t.readyToExport}
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            {t.exportDescription.replace('{count}', blocks.length.toString())}
          </p>
          
          <button
            onClick={handleExport}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Download className="h-4 w-4 mr-2" />
            {t.exportButton}
          </button>
        </div>
      </div>
    </div>
  );
}