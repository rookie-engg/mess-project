import debug from 'debug';
import {config} from 'dotenv';
import app from './app/app.js';
import {dbInstance} from './db/connect.js';
import {Customer} from './db/models.js';

config();
const d = debug('server');

const PORT = process.env.SERVER_PORT;

d('Syncing Sequlize Models');
await dbInstance.sync({force: true, logging: false});

await Customer.create({
  cid: '123',
  first_name: 'vishal',
  last_name: 'suryawanshi',
  joining_date: new Date(),
});

app.listen(PORT, () => {
  d(`server start on http://localhost:${PORT}`);
});
