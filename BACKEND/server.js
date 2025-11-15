const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

