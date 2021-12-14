import PropTypes from 'prop-types';
import angular from '../../assets/angular.png';
import pokeball from '../../assets/pokeball.png';
import react from '../../assets/react.png';
import vue from '../../assets/vue.png';
import styles from './Step3.module.css';

const Step3 = ({ nextStep, language, setLanguage }) => {
  const handleClick = (lang) => {
    setLanguage(lang);
  };

  const handleContinue = () => {
    nextStep();
  };

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        {language !== '' && (
          <div className={styles.message}>
            <img
              src={
                language === 'VUE'
                  ? vue
                  : language === 'ANGULAR'
                  ? angular
                  : react
              }
              alt="language"
              className={styles.selected}
            />
            <div className={styles.titles}>
              <p>
                {`¡Así que buscas empleo en ${language}!`} <br />
                {language === 'VUE'
                  ? 'Vamos a ver que encontramos'
                  : language === 'ANGULAR'
                  ? 'Espero tengamos suerte'
                  : '¡Que empiece el desarrollo!'}
              </p>
            </div>
            <div className={styles.options}>
              <button className={styles.button} onClick={handleContinue}>
                SÍ
              </button>
              <button className={styles.button} onClick={() => handleClick('')}>
                NO
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <div className={styles.choice}>
          <button className={styles.pokemon} onClick={() => handleClick('VUE')}>
            <img src={vue} alt="vue" className={styles.language} />
            <img src={pokeball} alt="pokebola" className={styles.pokeball} />
          </button>
        </div>
        <div className={styles.choice}>
          <button
            className={styles.pokemon}
            onClick={() => handleClick('ANGULAR')}
          >
            <img src={angular} alt="angular" className={styles.language} />
            <img src={pokeball} alt="pokebola" className={styles.pokeball} />
          </button>
        </div>
        <div className={styles.choice}>
          <button
            className={styles.pokemon}
            onClick={() => handleClick('REACT')}
          >
            <img src={react} alt="react" className={styles.language} />
            <img src={pokeball} alt="pokebola" className={styles.pokeball} />
          </button>
        </div>
      </div>
    </div>
  );
};

Step3.propTypes = {
  nextStep: PropTypes.func,
};

export default Step3;
