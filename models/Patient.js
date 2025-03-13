import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  contact: String,
  symptoms: String,
  status: { type: String, enum: ['waiting', 'in-progress', 'completed'], default: 'waiting' },
  createdAt: { type: Date, default: Date.now }
});

// Avoid redefining the model if it already exists
const Patient = mongoose.models.Patient || mongoose.model('Patient', patientSchema);

export default Patient;
