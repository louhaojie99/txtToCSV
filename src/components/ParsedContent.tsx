import React from 'react';
import { ParsedBlock } from '../types';
import { FileText, Link, Key } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

interface ParsedContentProps {
  blocks: ParsedBlock[];
  language: Language;
}

export function ParsedContent({ blocks, language }: ParsedContentProps) {
  const t = translations[language];

  if (blocks.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {t.parsedTitle} ({blocks.length} {t.blocksFound})
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {t.previewDescription}
          </p>
        </div>
        
        <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
          {blocks.map((block, index) => (
            <div key={block.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900">
                      {t.block} {index + 1}
                    </span>
                    {block.title && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {block.title}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {block.link && (
                      <div className="flex items-center space-x-2">
                        <Link className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600 truncate">
                          {block.link}
                        </span>
                      </div>
                    )}
                    
                    {block.extractCode && (
                      <div className="flex items-center space-x-2">
                        <Key className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600">
                          {t.extractCode}: {block.extractCode}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-gray-50 rounded-md">
                <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                  {block.rawContent}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}