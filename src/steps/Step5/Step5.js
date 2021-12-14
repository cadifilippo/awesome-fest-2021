import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import runner from '../../assets/runner.gif';
import styles from './Step5.module.css';

const Step5 = ({ isActive, english, seniority }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isActive) {
      try {
        setLoading(true);
        fetch(
          'https://www.getonbrd.com/api/v0/search/jobs?query=vue&per_page=100&page=1'
        )
          .then((resp) => resp.json())
          .then(({ data }) => {
            const final = data
              .filter(
                (job) => job?.attributes?.category_name === 'Programación'
              )
              .filter(
                (job) => job?.attributes?.seniority?.data?.id === seniority
              )
              .filter(
                (job) =>
                  english ||
                  (!job?.attributes?.desirable
                    ?.toLowerCase()
                    .includes('ingles') &&
                    !job?.attributes?.desirable
                      ?.toLowerCase()
                      .includes('inglés'))
              )
              .splice(0, 3);
            setJobs(final);
            setLoading(false);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, [isActive, english, seniority]);

  const handleLink = () => {
    window.open(`https://www.getonbrd.com/empleos-${'react'}`, '_blank');
  };

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        {!loading &&
          (jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.attributes.title} className={styles.card}>
                <h2 className={styles.title}>{job.attributes.title}</h2>
                <a
                  href={job.links.public_url}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER OFERTA
                </a>
              </div>
            ))
          ) : (
            <div className={styles.card}>
              <h2 className={styles.title}>
                🙏 Disculpanos, no tenemos puestos para ti.🥲
              </h2>
              <p className={styles.link}>VUELVE PRONTO</p>
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
  english: PropTypes.bool,
  seniority: PropTypes.number,
};

export default Step5;
