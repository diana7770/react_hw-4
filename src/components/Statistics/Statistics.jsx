import style from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.statistics__title}>{title}</h2>}
      <ul className={style.statistics__list}>
        {stats.map((obj) => (
          <li key={obj.id} className={style.statistics__item}>
            <span className={style.statistics__label}>{obj.label}</span>
            <span className={style.statistics__text}>{obj.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
