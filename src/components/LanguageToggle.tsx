import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../hooks/useLanguage';

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
      title={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
}