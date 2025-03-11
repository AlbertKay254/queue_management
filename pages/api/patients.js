import dbConnect from '../../utils/dbConnect';
import Patient from '../../models/Patient';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { name, age, contact, symptoms } = req.body;
    const newPatient = new Patient({ name, age, contact, symptoms });
    await newPatient.save();
    res.status(201).json(newPatient);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}