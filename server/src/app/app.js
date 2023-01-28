import express from 'express';
import amdinRouter from './admin/admin.router.js';
import clientRouter from './client/client.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.route('/').get((_req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.use('/admin/api/', amdinRouter);
app.use('/client/api/', clientRouter);

app.route('*').get((_req, res) => {
  res.status(404).send(`
  <style>
    .err-code {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  <h1 class="err-code">404! Not Found</h1>`);
});

export default app;
