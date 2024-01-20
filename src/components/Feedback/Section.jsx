import styles from './feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
