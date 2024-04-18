import React, { useState } from 'react';
import './Form.css';

const PersonalDetails = ({ onNext }) => {
  const [formData, setFormData] = useState({ name: '', email: '', dob: '', phoneNumber: '', gender: '', image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input className="input" type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
      <input className="input" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <select className="input" name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input className="input" type="file" name="image" onChange={handleFileChange} accept="image/*" required />
      <button className="button" type="submit">Next</button>
    </form>
  );
};

export default PersonalDetails;
