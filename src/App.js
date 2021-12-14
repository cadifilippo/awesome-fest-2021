import Layout from './layout/Layout';
import StepWizard from 'react-step-wizard';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [exp, setExp] = useState(0);
  const [english, setEnglish] = useState(false);
  const [back, setBack] = useState(false);

  const [seniority, setSeniority] = useState(0);

  useEffect(() => {
    let lv = Math.ceil((exp / 5) * 3);
    if (back) {
      lv++;
    }
    setSeniority(lv);
  }, [back, exp]);

  return (
    <Layout>
      <StepWizard>
        <Step1 />
        <Step2 name={name} setName={setName} />
        <Step3 language={language} setLanguage={setLanguage} />
        <Step4
          language={language}
          exp={exp}
          setExp={setExp}
          english={english}
          setEnglish={setEnglish}
          back={back}
          setBack={setBack}
        />
        <Step5 english={english} seniority={seniority} />
      </StepWizard>
    </Layout>
  );
}

export default App;
