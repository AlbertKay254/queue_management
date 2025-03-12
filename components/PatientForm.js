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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">Contact</label>
        <input
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="symptoms" className="block text-gray-700 font-bold mb-2">Symptoms</label>
        <input
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="Symptoms"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
        Add Patient
      </button>
    </form>
  );
}