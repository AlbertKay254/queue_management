import dbConnect from '../../utils/dbConnect';
import Patient from '../../models/Patient';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, age, contact, symptoms } = req.body;
      console.log('📩 Received Data:', { name, age, contact, symptoms });

      const newPatient = new Patient({ name, age, contact, symptoms });
      await newPatient.save();

      console.log('✅ Patient Saved:', newPatient);
      res.status(201).json(newPatient);
    } catch (error) {
      console.error('❌ Error Saving Patient:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
