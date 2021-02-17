import React, { useState } from 'react';

import Layout from './Layout/Layout';
import Questionaire from './Questionaire/Questionaire';
import { Languages } from './data/languages';

function App() {

  let [language, setLanguage] = useState(Languages.ENGLISH);

  const languageChooseHandler = (choosenLanguage) => {
    setLanguage(() => choosenLanguage);
  }

  return (
    <div className = 'App'>
      <Layout 
        chooseLanguage = {languageChooseHandler} 
        language = {language}
      >
        <Questionaire 
          language = {language} 
        />
      </Layout>
    </div>
  );
}

export default App;
