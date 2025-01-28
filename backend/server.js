const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Personalized Health Assistant Backend is running');
});

app.post('/api/dna/analyze', (req, res) => {
    // Placeholder for DNA analysis logic
    const dnaData = req.body.dnaData;
    console.log('DNA data received for analysis:', dnaData);
    res.json({ message: 'DNA analysis initiated', analysisResult: 'Placeholder result' });
});

app.post('/api/health/data', (req, res) => {
    // Placeholder for health data processing
    const healthData = req.body.healthData;
    console.log('Health data received:', healthData);
    // Sample health data
    const sampleHealthData = {
        heartRate: 72,
        bloodPressure: '120/80',
        steps: 5500,
        sleepHours: 7.5
    };
    res.json({ message: 'Health data processed', insights: 'Placeholder insights', data: sampleHealthData });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
