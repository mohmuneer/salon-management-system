import React from 'react'
import useLanguageStore from '../stores/languageStore'

const LanguageSwitcher = () => {
  const language = useLanguageStore((state) => state.language)
  const setLanguage = useLanguageStore((state) => state.setLanguage)

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 rounded-lg transition ${
          language === 'ar'
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-dark hover:bg-gray-300'
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-lg transition ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-dark hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  )
}

export default LanguageSwitcher
