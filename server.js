const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//dotenv.config();
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();

connectDB();
app.use(cors({
    origin: ['https://job-frontend-vercel.onrender.com'],
    credentials: true
}));
app.use(express.json());

app.use('/users', require('./routes/authRoutes')); 
app.use('/auth', require('./routes/authRoutes'));
app.use('/jobs', require('./routes/jobRoutes'));

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy!');
});
app.get('/test', (req, res) => {
  res.send('✅ Backend is working!');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
