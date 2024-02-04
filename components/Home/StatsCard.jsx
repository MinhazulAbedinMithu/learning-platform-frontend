import styles from '../../styles/Home.module.css';

export default function StatsCard({title, total}) {
  return (
    <div className={`${styles.transparentTealBg} card shadow-xl py-4`}>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{title}</h2>
        <h2 className="text-4xl font-bold">{total}</h2>
      </div>
    </div>
  );
}
