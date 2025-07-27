import express from 'express';
import cors from 'cors';  
import bodyParser from 'body-parser';
import routes from './routes/eventRoutes.js';  // Adjust the path as necessary
import db from './config/database.js';  // Adjust the path as necessary

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

db.connect((err) => {
  if (err) {
    console.log('Database connection failed');
    throw err;
  }
  console.log('Connected to the database');
});


app.use('/api', routes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
