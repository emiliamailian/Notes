const express = require('express');
const dotenv = require('dotenv');
const noteRoutes = require('./routes/noteRoutes');  
const connectDB = require('./config/db')

dotenv.config();

const app = express();

app.use(express.json());


connectDB();

app.use('/api/notes', noteRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



