import styles from './feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <ul className={styles.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive {positivePersentage}%</li>
    </ul>
  );
};

export default Statistics;
