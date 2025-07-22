import React from 'react';
// @ import styles
import styles from './index.module.scss';

const statusMaps = {
  open: { progress: styles.progress, closed: '' },
  inprogress: { progress: styles.completed, closed: styles.progress },
  closed: { progress: styles.completed, closed: styles.completed },
};

const Stepper = ({ status, className }) => {
  const { progress, closed } = statusMaps[status?.toLowerCase()] || {};

  return (
    <div className={`${styles.wrap} ${className}`}>
      <ul className={`${styles.timeline} timeline`}>
        <li className={progress}>
          <span>Reset Password</span>
        </li>

        <li className={closed}>
          <span>Verify OTP</span>
        </li>
      </ul>
    </div>
  );
};

export default Stepper;
