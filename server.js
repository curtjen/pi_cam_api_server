const express = require('express');
const { exec, spawn } = require('child_process');
const app = express();

const apiCalls = {
  iso_up: () => {},
  iso_down: () => {},

  fstop_up: () => {},
  fstop_down: () => {},
  
  aperature_up: () => {},
  aperature_down: () => {},

  video_start_stop: () => {},
  toggle_mode: () => {},

  focus: () => {},
};

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/foo', (req, res) => {
  const ls = exec("ls -la", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    return stdout;
  });
  res.send(ls);
});

app.get('/biz', (req, res) => {
  const { stdout } = spawn('ls', ['-la']);
  stdout.pipe(res);
});



app.listen(3000);

