import React from 'react';
import './Form.css';

const BottomProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="bottom-progress-bar">
      {steps.map((s, index) => (
        <div key={s.id} className={`step ${currentStep >= s.id ? 'active' : ''}`}>
          {index !== steps.length - 1 && <span className="divider" />}
          {s.name}
        </div>
      ))}
    </div>
  );
};

export default BottomProgressBar;
