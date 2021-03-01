import React from 'react';
import { addLocales, setLocale, setTranslations } from 'react-i18nify';
import en from 'date-fns/locale/en-GB';
import de from 'date-fns/locale/de';
import { BrowserRouter } from 'react-router-dom';

import translations from './data/translations';
import Layout from './Layout/Layout';
import Router from './router.js';

function App() {

  setTranslations(translations);
  addLocales({
    en: en,
    de: de,
  });
  setLocale('en');

  return (
    <div className='App'>
      <BrowserRouter>
        <Layout >
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
