import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from './color';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css['stat-list']}>
        {stats.map(elem => {
          let bgColor = getRandomColor();
          return (
            <li
              key={elem.id}
              style={{ backgroundColor: bgColor }}
              className={css['stat-list__item']}
            >
              <span className={css.label}>{elem.label}</span>
              <span className={css.percentage}>{elem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
