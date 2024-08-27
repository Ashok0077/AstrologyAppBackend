const express = require('express');
const app = express();
const astrologerRoutes = require('./routes/astrologerRoutes');
const userRoutes = require('./routes/userRoutes');
const allocationRoutes = require('./routes/allocationRoutes');


app.use(express.json());

app.use('/api/astrologers', astrologerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/allocation', allocationRoutes);


app.get('/', (req, res) => {
    res.status(200).send('Backend is Working!!!!');
});

module.exports = app;