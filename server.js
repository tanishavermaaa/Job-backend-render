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
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use('/api/users', require('./routes/authRoutes')); 
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));


const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
