import { useTranslation } from 'react-i18next';
import AppRoutes from './routes';
import { useState } from 'react';
import i18n from 'i18next';
import enTranslations from './locale/en.json';
import ptTranslations from './locale/pt.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
      en: {
          ...enTranslations
      },
      pt: {
          ...ptTranslations
      },
  },
  lng: 'eng',
})

function App() {
  const { t, i18n: {changeLanguage, language} } = useTranslation()

  const {currentLanguage, setCurrentLanguage} = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  return (
    <AppRoutes />
  );
}

export default App;
