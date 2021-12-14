import { useState } from 'react';
import PropTypes from 'prop-types';
import { VscDebugStart } from 'react-icons/vsc';

import char from '../../assets/char.gif';

import styles from './Step2.module.css';
import Swal from 'sweetalert2';

const Step2 = ({ nextStep }) => {
  const [name, setName] = useState('');

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

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <img src={char} alt="personaje" className={styles.char} />
        <div className={styles.name}>
          <h3>¿CÓMO TE LLAMAS?</h3>
          <input
            type="text"
            className={styles.input}
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
  nextStep: PropTypes.func,
};

export default Step2;
