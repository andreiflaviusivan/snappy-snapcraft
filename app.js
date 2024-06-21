#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;

// Define a simple API endpoint
app.get('/api/info', (req, res) => {
  // If the process is run in snap, it'll automatically receive some Snap specific variables
  // Please check the list here if you want to know more https://snapcraft.io/docs/environment-variables
  const runningInSnap = !!process.env.SNAP;
  res.json({ 
    runningInSnap,
    message: runningInSnap ? `Hello from Snap package: ${process.env.SNAP_NAME}` : 'Hello from ordinary Node process',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
