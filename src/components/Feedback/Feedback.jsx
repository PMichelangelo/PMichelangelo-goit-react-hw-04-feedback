import { useState, useMemo } from 'react';
//import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

import styles from './feedback.module.css';

const Feedback = () => {
  const feedbackOptions = ['good', 'neutral', 'bad'];
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = useMemo(
    () => feedback.good + feedback.neutral + feedback.bad,
    [feedback.good, feedback.neutral, feedback.bad]
  );

  const positivePercentage = useMemo(() => {
    return total ? Number(((feedback.good / total) * 100).toFixed(2)) : 0;
  }, [feedback.good, total]);

  const leaveFeedback = keyName => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [keyName]: prevFeedback[keyName] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          leaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            total={total}
            good={good}
            neutral={neutral}
            bad={bad}
            positivePersentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
