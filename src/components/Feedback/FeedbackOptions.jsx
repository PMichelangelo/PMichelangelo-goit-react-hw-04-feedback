import styles from './feedback.module.css';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  const buttonElemets = options.map(name => (
    <button
      onClick={() => leaveFeedback(name)}
      key={name}
      className={styles.btn}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  ));
  return <div>{buttonElemets}</div>;
};

export default FeedbackOptions;
