const express = require('express');
const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const jobs = {};

app.post('/dispatch', (req, res) => {
  const { numbers, token, endpoint, externalKey, isClosed, messageType, messageText, imageUrl, intervalSeconds } = req.body;
  const jobId = uuidv4();
  jobs[jobId] = { numbers, token, endpoint, externalKey, isClosed, messageType, messageText, imageUrl, intervalSeconds, currentIndex: 0, logs: [] };
  setImmediate(() => sendNext(jobId));
  res.json({ jobId });
});

function sendNext(jobId) {
  const job = jobs[jobId];
  if (job.currentIndex >= job.numbers.length) return;
  const number = job.numbers[job.currentIndex];
  const url = job.messageType === 'text' ? job.endpoint : `${job.endpoint}/url`;
  const body = { number, externalKey: job.externalKey, isClosed: job.isClosed, body: job.messageText };
  if (job.messageType === 'image_text') body.mediaUrl = job.imageUrl;
  fetch(url, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + job.token, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(r => r.json().then(data => {
      job.logs.push({ number, success: !!data.success });
      job.currentIndex++;
      setTimeout(() => sendNext(jobId), job.intervalSeconds * 1000);
    }))
    .catch(() => {
      job.logs.push({ number, success: false });
      job.currentIndex++;
      setTimeout(() => sendNext(jobId), job.intervalSeconds * 1000);
    });
}

app.get('/jobs/:id', (req, res) => {
  const job = jobs[req.params.id];
  if (!job) return res.status(404).json({ error: 'Job not found' });
  res.json({ logs: job.logs });
});

app.listen(3000, () => console.log('Backend listening on port 3000'));