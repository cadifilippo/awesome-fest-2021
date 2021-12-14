import PropTypes from 'prop-types';
import { VscDebugStart } from 'react-icons/vsc';
import Switch from '../../components/Switch';
import styles from './Step4.module.css';

import medalla1 from '../../assets/medalla-01-roca.png';
import medalla2 from '../../assets/medalla-02-cascada.png';
import medalla3 from '../../assets/medalla-03-trueno.png';
import medalla4 from '../../assets/medalla-04-arcoiris.png';
import medalla5 from '../../assets/medalla-05-pantano.png';
import medalla6 from '../../assets/medalla-06-alma.png';
import medalla7 from '../../assets/medalla-07-volcan.png';
import medalla8 from '../../assets/medalla-08-tierra.png';

const Step4 = ({
  language,
  nextStep,
  exp,
  setExp,
  english,
  setEnglish,
  back,
  setBack,
}) => {
  const handleClick = () => {
    nextStep();
  };
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.medal_box}>
          <div className={styles.row}>
            <div className={styles.medal}>
              {exp > 0 && <img src={medalla1} alt="medalla" />}
            </div>
            <div className={styles.medal}>
              {exp > 1 && <img src={medalla2} alt="medalla" />}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.medal}>
              {exp > 2 && <img src={medalla3} alt="medalla" />}
            </div>
            <div className={styles.medal}>
              {english && <img src={medalla4} alt="medalla" />}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.medal}>
              {back && <img src={medalla5} alt="medalla" />}
            </div>
            <div className={styles.medal}>
              {exp > 3 && <img src={medalla6} alt="medalla" />}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.medal}>
              {exp > 4 && <img src={medalla7} alt="medalla" />}
            </div>
            <div className={styles.medal}>
              {exp > 5 && <img src={medalla8} alt="medalla" />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <p>¡Ahora veamos cuanto has entrenado!</p>
        <label className={styles.label}>
          {`¿Cuántos años de experiencia en ${language}?`}
          <div className={styles.flex}>
            {exp > 5 ? '5+' : exp}
            <input
              type="range"
              className={styles.input}
              min={0}
              max={6}
              step={1}
              list="tickmarks"
              value={exp}
              onChange={(e) => setExp(parseInt(e.target.value))}
            />
          </div>
        </label>
        <label className={styles.label}>
          {`¿Logras mantener una conversación en INGLES?`}
        </label>
        <div className={styles.flex}>
          <p className={styles.text}>{english ? 'SI' : 'NO'}</p>
          <Switch
            id="toggle-eng"
            isOn={english}
            handleToggle={() => setEnglish(!english)}
          />
        </div>
        <label className={styles.label}>
          {`¿Posees conocimientos en alguna tecnología de BACKEND?`}
        </label>
        <div className={styles.flex}>
          <p className={styles.text}>{back ? 'SI' : 'NO'}</p>
          <Switch
            id="toggle-back"
            isOn={back}
            handleToggle={() => setBack(!back)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          READY <VscDebugStart className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

Step4.propTypes = {
  nextStep: PropTypes.func,
  language: PropTypes.string,
  exp: PropTypes.number,
  setExp: PropTypes.func,
  english: PropTypes.bool,
  setEnglish: PropTypes.func,
  back: PropTypes.bool,
  setBack: PropTypes.func,
};

export default Step4;
