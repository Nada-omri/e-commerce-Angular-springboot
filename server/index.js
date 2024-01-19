const express =require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose')
const app = express();
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('database connected'))
.catch((err)=>console.log('sorry',err))


app.use(express.json());

app.use('/',require('./routes/authRoutes'))

const port =8003;
app.listen(port, () => {
    console.log(`Server started ${port}`);
  });
  