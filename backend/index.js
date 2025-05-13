require('dotenv').config();
const express = require('express'), fetch = require('node-fetch'), { v4: uuidv4 } = require('uuid'), cors = require('cors');
const app = express();
app.use(cors()); app.use(express.json());
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const jobs = {};
app.post('/auth', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) return res.json({ ok: true });
  res.status(401).json({ ok: false });
});
app.post('/dispatch', (req, res) => {
  const { numbers, token, endpoint, externalKey, isClosed, messageType, messageText, imageUrl, intervalSeconds } = req.body;
  const jobId = uuidv4();
  jobs[jobId] = { numbers, token, endpoint, externalKey, isClosed, messageType, messageText, imageUrl, intervalSeconds, currentIndex:0, logs:[] };
  setImmediate(() => sendNext(jobId));
  res.json({ jobId });
});
async function sendNext(jobId) {
  const j = jobs[jobId];
  if (j.currentIndex >= j.numbers.length) return;
  const num = j.numbers[j.currentIndex++];
  const url = j.messageType==='text'? j.endpoint: `${j.endpoint}/url`;
  const body = { number: num, externalKey: j.externalKey, isClosed: j.isClosed, body: j.messageText };
  if (j.messageType==='image_text') body.mediaUrl = j.imageUrl;
  try {
    const r = await fetch(url, {method:'POST', headers:{'Authorization':'Bearer '+j.token,'Content-Type':'application/json'}, body: JSON.stringify(body)});
    const data = await r.json().catch(()=>({}));
    if (!r.ok) throw new Error(data.error||data.message||`Status ${r.status}`);
    j.logs.push({ number: num, success: true });
  } catch(err) {
    j.logs.push({ number: num, success: false, error: err.message });
  }
  setTimeout(()=>sendNext(jobId), j.intervalSeconds*1000);
}
app.get('/jobs/:id', (req, res) => {
  const j = jobs[req.params.id]; if (!j) return res.status(404).json({ error:'Not found' });
  res.json({ logs: j.logs }); });
app.listen(3000,()=>console.log('Backend listening on port 3000'));