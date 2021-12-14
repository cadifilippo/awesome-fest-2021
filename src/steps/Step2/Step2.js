import PropTypes from 'prop-types';
import { VscDebugStart } from 'react-icons/vsc';

import char from '../../assets/char.gif';

import styles from './Step2.module.css';
import Swal from 'sweetalert2';
import { useEffect, useRef } from 'react';

const Step2 = ({ isActive, nextStep, name, setName }) => {
  const text = useRef(null);

  useEffect(() => {
    if (isActive) {
      text.current.focus();
    }
  }, [isActive]);

  const handleClick = () => {
    if (name.length > 3) {
      nextStep();
    } else {
      Swal.fire(
        'Ese nombre es muy corto!',
        'Seguro de que no te llamas "ROJO"!',
        'info'
      );
    }
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handlePress = ({ code }) => {
    if (code === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <img src={char} alt="personaje" className={styles.char} />
        <div className={styles.name}>
          <h3>¿CÓMO TE LLAMAS?</h3>
          <input
            type="text"
            ref={text}
            className={styles.input}
            placeholder="Name"
            value={name}
            onChange={handleChange}
            onKeyUp={handlePress}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <button className={styles.button} onClick={handleClick}>
          START <VscDebugStart className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

Step2.propTypes = {
  isActive: PropTypes.bool,
  nextStep: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
};

export default Step2;
