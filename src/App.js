import React from 'react';
import { I18n, addLocales, setLocale, setTranslations } from 'react-i18nify';
import en from 'date-fns/locale/en-GB';
import de from 'date-fns/locale/de';
import { BrowserRouter } from 'react-router-dom';

import translations from './data/translations.json';
import Layout from './Layout/Layout';

function App() {
  setTranslations(translations);
  addLocales({
    en: en,
    de: de,
  });
  setLocale('en');

  return (
    <div className='App'>
      <I18n render={() =>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      } />
    </div>
  );
}

export default App;
