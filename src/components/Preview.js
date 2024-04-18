import React from 'react';

const Preview = ({ data, onBack, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="preview">
      <h2>Preview</h2>
      <div>
        <img src={data.image} alt="User" />
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Date of Birth:</strong> {data.dob}</p>
        <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>High School:</strong> {data.highSchool}</p>
        <p><strong>Intermediate:</strong> {data.intermediate}</p>
        <p><strong>Diploma:</strong> {data.diploma}</p>
        <p><strong>Graduation:</strong> {data.graduation}</p>
        <p><strong>Post Graduation:</strong> {data.postGraduation}</p>
      </div>
      <button className="button" onClick={onBack}>Back</button>
      <button className="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Preview;
