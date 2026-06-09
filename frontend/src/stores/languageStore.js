import { create } from 'zustand'

const useLanguageStore = create((set) => ({
  language: localStorage.getItem('language') || 'ar',
  setLanguage: (lang) => {
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    set({ language: lang })
  },
}))

export default useLanguageStore
