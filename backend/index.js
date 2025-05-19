const express = require('express');
const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const path = require('path');
const { addJob, updateJob, getJob } = require('./jobStore');

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use('/', express.static(path.join(__dirname, '../frontend')));

app.post('/dispatch', (req, res) => {
  const {
    numbers, token, endpoint, externalKey,
    isClosed, messageType, messageText,
    imageUrl, intervalSeconds
  } = req.body;

  const jobId = uuidv4();
  addJob({
    id: jobId,
    numbers, token, endpoint, externalKey,
    isClosed, messageType, messageText,
    imageUrl, intervalSeconds,
    currentIndex: 0,
    logs: [],
    createdAt: new Date().toISOString()
  });

  setImmediate(() => sendNext(jobId));
  res.json({ jobId });
});

async function sendNext(jobId) {
  const job = getJob(jobId);
  if (!job) return;

  if (job.currentIndex >= job.numbers.length) {
    updateJob(jobId, {
      status: 'completed',
      completedAt: new Date().toISOString()
    });
    return;
  }

  const number = job.numbers[job.currentIndex];
  const url = job.messageType === 'text'
    ? job.endpoint
    : `${job.endpoint}/url`;

  const body = {
    number,
    externalKey: job.externalKey,
    isClosed: job.isClosed,
    body: job.messageText
  };
  if (job.messageType === 'image_text') {
    body.mediaUrl = job.imageUrl;
  }

  let logEntry;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + job.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || data.message || `Status ${res.status}`);
    logEntry = { number, success: true, timestamp: new Date().toISOString() };
  } catch (err) {
    logEntry = { number, success: false, error: err.message, timestamp: new Date().toISOString() };
  }

  const updatedLogs = [...job.logs, logEntry];
  updateJob(jobId, {
    logs: updatedLogs,
    currentIndex: job.currentIndex + 1
  });

  setTimeout(() => sendNext(jobId), job.intervalSeconds * 1000);
}

app.get('/jobs/:id', (req, res) => {
  const job = getJob(req.params.id);
  if (!job) {
    return res.status(404).json({ error: 'Job não encontrado' });
  }
  res.json({ logs: job.logs });
});

app.listen(3000, () => console.log('Backend ouvindo na porta 3000'));
