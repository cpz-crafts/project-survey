import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Interest } from 'components/Interest';
import { Calls } from 'components/Calls';
import { Summary } from 'components/Summary';
import { Result } from 'components/Result ';
import { ProgressBar } from 'components/ProgressBar';
import { ExperienceSlider } from 'components/ExperienceSlider';
import { Company } from 'components/Company';
import AnimatedPhrase from './components/AnimatedPhrase';
import descriptions from './descriptions.json'

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [experience, setExperience] = useState('');
  const [calls, setCalls] = useState('');
  const [company, setCompany] = useState('');

  const handleStepIncrease = () => {
    if (step === 1 && name === '') {
      alert('Please enter a valid name before proceeding to the next step.');
    } else if (step === 2 && area === '') {
      alert('Please enter a valid area before proceeding to the next step.');
    } else if (step === 3 && experience === '') {
      alert('Please enter years of experience before proceeding to the next step.');
    } else if (step === 4 && calls === '') {
      alert('Please enter a number of calls  before proceeding to the next step.');
    } else if (step === 5 && company === '') {
      alert('Please enter a company  before proceeding to the next step.');
    } else {
      setStep(step + 1);
    }
  }

  const handleStepDecrease = () => {
    setStep(step - 1);
  }

  return (
    <div className="outer-wrapper">
      <section className="survey-wrapper">
        {step > 0 && (
          <ProgressBar currentStep={step} totalSteps={7} />
        )}

        {step === 0 && (
          <AnimatedPhrase />
        )}

        {step === 1 && (
          <Name name={name} setName={setName} />
        )}

        {step === 2 && (
          <Interest area={area} setArea={setArea} />
        )}
        {step === 3 && (
          <ExperienceSlider experience={experience} setExperience={setExperience} />
        )}
        {step === 4 && (
          <Calls calls={calls} setCalls={setCalls} />
        )}
        {step === 5 && (
          <Company company={company} setCompany={setCompany} />
        )}

        {step === 6 && (
          <Summary
            name={name}
            area={area}
            calls={calls}
            company={company}
            experience={experience} />
        )}

        {step === 7 && (
          <Result descriptions={descriptions[area]} />
        )}
        <div className="buttonswrapper">
          {step > 0 && step < 7 && (
            <button className="next" type="button" onClick={handleStepDecrease}> BACK </button>
          )}

          {step > -1 && step < 7 && (
            <button className="next" type="button" onClick={handleStepIncrease}> NEXT </button>
          )}
        </div>
      </section>
    </div>
  );
}

