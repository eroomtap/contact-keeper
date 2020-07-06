const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

connectDB();

app.use(express.json({ extended:false }));

app.get('/',(req, res)=> res.json({msg: 'welcome to the contact keeper api'}));

app.use('/api/users/', require('./routes/users.js'));
app.use('/api/auth/', require('./routes/auth.js'));
app.use('/api/contacts/', require('./routes/contacts.js'));

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=> console.log(`server started on port ${PORT}`));