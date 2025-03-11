"use client";
import { useState } from 'react';

export default function PatientForm() {
  const [formData, setFormData] = useState({ name: '', age: '', contact: '', symptoms: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      // Handle success
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required />
      <input name="symptoms" value={formData.symptoms} onChange={handleChange} placeholder="Symptoms" required />
      <button type="submit">Add Patient</button>
    </form>
  );
}