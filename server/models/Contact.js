import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Contact', contactSchema); 