import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import runner from '../../assets/runner.gif';
import styles from './Step5.module.css';

const Step5 = ({ isActive }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (isActive) {
      try {
        fetch(
          'https://www.getonbrd.com/api/v0/search/jobs?query=vue&per_page=100&page=1'
        )
          .then((resp) => resp.json())
          .then(({ data }) => {
            const final = data
              .filter(
                (job) => job?.attributes?.category_name === 'Programación'
              )
              .filter((job) => job?.attributes?.seniority?.data?.id === 3)
              .filter(
                (job) =>
                  !job?.attributes?.desirable
                    ?.toLowerCase()
                    .includes('ingles') &&
                  !job?.attributes?.desirable?.toLowerCase().includes('inglés')
              )
              .splice(0, 3);
            setJobs(final);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, [isActive]);

  const handleLink = () => {
    window.open(`https://www.getonbrd.com/empleos-${'react'}`, '_blank');
  };

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        {jobs.length > 0 &&
          jobs.map((job) => (
            <div key={job.attributes.title} className={styles.card}>
              <h2 className={styles.title}>{job.attributes.title}</h2>
              <a href={job.links.public_url} className={styles.link}>
                VER OFERTA
              </a>
            </div>
          ))}
      </div>
      <div className={styles.bottom}>
        <button className={styles.button} onClick={handleLink}>
          VER MÁS OFERTAS <BiSearchAlt />
        </button>
        <img src={runner} alt="personaje" className={styles.runner} />
      </div>
    </div>
  );
};

Step5.propTypes = {
  isActive: PropTypes.bool,
};

export default Step5;
