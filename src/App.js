import Layout from './layout/Layout';
import StepWizard from 'react-step-wizard';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

function App() {
  return (
    <Layout>
      <StepWizard>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </StepWizard>
    </Layout>
  );
}

export default App;
