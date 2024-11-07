const express = require('express');
const app = express();

app.use(express.json());

const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/student', (req, res) => {
  const { id } = req.body;
  const studentInfo = [
    { id: 1, name: 'Vinh' },
    { id: 2, name: 'Duong' },
    { id: 3, name: 'Noa' },
  ];
  const foundIndex = studentInfo.findIndex((item) => item.id === id);
  if (foundIndex === -1) {
    res.send('Student not found');
  } else {
    res.send(studentInfo[foundIndex]);
  }
});

app.put('/student/:id', (req, res) => {
  const { id } = req.params;
  const studentUpdate = req.body;
  const studentInfo = [
    { id: 1, name: 'Vinh' },
    { id: 2, name: 'Duong' },
    { id: 3, name: 'Noa' },
  ];
  const foundIndex = studentInfo.findIndex((item) => item.id === id);
  if (foundIndex === -1) {
    res.send('Student not found');
  } else {
    studentInfo[foundIndex] = studentUpdate;
    res.send('Updated');
  }
});

app.delete('/student/:id', (req, res) => {
  const { id } = req.params;
  const studentInfo = [
    { id: 1, name: 'Vinh' },
    { id: 2, name: 'Duong' },
    { id: 3, name: 'Noa' },
  ];
  const foundIndex = studentInfo.findIndex((item) => item.id === id);
  if (foundIndex === -1) {
    res.send('Student not found');
  } else {
    studentInfo.splice(foundIndex, 1);
    res.send('Removed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
