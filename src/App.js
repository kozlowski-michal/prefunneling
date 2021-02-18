import React, { useEffect } from 'react';
//import { addLocales, setLocale } from 'react-i18nify';
//import en from 'date-fns/locale/en';
//import de from 'date-fns/locale/de';
import { addLocales, getLocale, setLocale, setTranslations } from 'react-i18nify';
import en from 'date-fns/locale/en-GB';
import de from 'date-fns/locale/de';

import translations from './data/translations';
import Layout from './Layout/Layout';
import Questionaire from './Questionaire/Questionaire';

function App() {

  setTranslations(translations);

  addLocales({
    en: en,
    de: de,
  }); 

  setLocale('de');

  return (
    <div className = 'App'>
      <Layout >
        <Questionaire />
      </Layout>
    </div>
  );
}

export default App;
