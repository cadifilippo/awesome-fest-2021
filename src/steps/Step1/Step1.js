import React from 'react';
import PropTypes from 'prop-types';
import { MdNextPlan } from 'react-icons/md';

import oak from '../../assets/oak.png';

import styles from './Step1.module.css';

const Step1 = ({ nextStep }) => {
  const handleClick = () => {
    nextStep();
  };

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <img src={oak} alt="locutor" className={styles.oak} />
      </div>
      <div className={styles.right}>
        <p>¡Hola!</p>
        <p>¡Éste es el mundo del IT!</p>
        <p>¡Me llamo Miguel Angel Duran!</p>
        <p>¡Pero la gente me llama MIDUDEV!</p>
        <p>¡Éste mundo esta habitado por unas criaturas llamadas DEVS!</p>
        <p>
          ¡Para algunos son algo raros. Pero otros los usan para sus empresas y
          les pagan buenos sueldos !
        </p>
        <p>¡En cuanto a mi...!</p>
        <p>¡Ayudo a los DEVS a buscar un trabajo en su profesión!</p>
        <p>Bueno, cuéntame algo de ti.</p>
        <p>Primero dime como te llamas</p>
        <button className={styles.button} onClick={handleClick}>
          <MdNextPlan className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

Step1.propTypes = {
  nextStep: PropTypes.func,
};

export default Step1;
