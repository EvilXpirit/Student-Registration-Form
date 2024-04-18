import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import EducationDetails from "./EducationDetails";
import CoursePreference from "./CoursePreference";
import Preview from "./Preview";
import Dashboard from "./Dashboard";
import "./Form.css";

const steps = [
  { id: 1, name: "Personal Details" },
  { id: 2, name: "Address" },
  { id: 3, name: "Education Details" },
  { id: 4, name: "Course Preference" },
];

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleReset = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    setStep(5);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails onNext={handleNext} />;
      case 2:
        return <Address onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <EducationDetails onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <CoursePreference onNext={handleNext} onBack={handleBack} />;
      case 5:
        return (
          <Preview
            data={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        );
      case 6:
        return  <Dashboard data={formData} onReset={handleReset} onBack={handleBack} />
      default:
        return null;
    }
  };

  const isFormFilled = Object.keys(formData).length === 4; // Assuming all 4 steps are filled

  let progressBarWidth = (step - 1) * (100 / (steps.length - 1)) + "%";

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
            Student Registration Form
        </div>
        <div className="navbar-right">
          <a href="#">Home</a>
          {step < 5 && (
            <button className="dashboard-button" onClick={() => setStep(6)}>
              Dashboard
            </button>
          )}
          {isFormFilled && step < 5 && (
            <button onClick={handleSubmit}>Preview</button>
          )}
        </div>
      </nav>
      <div className="progress-bar">
        {steps.map((s) => (
          <div key={s.id} className={`step ${step >= s.id ? "active" : ""}`}>
            {s.name}
          </div>
        ))}
      </div>
      <div className="registration-form">{renderStep()}</div>
      <div className="progress-bar bottom-progress-bar">
        <div className="progress" style={{ width: progressBarWidth }}></div>
      </div>
    </div>
  );
};

export default RegistrationForm;
