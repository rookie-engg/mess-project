import {workerData, parentPort} from 'node:worker_threads';
import {models} from '../../db/models.js';

import debug from 'debug';

const d = debug('worker:find');

const model = models[workerData.modelname];
const query = workerData.query;

try {
  const result = await model.findAndCountAll(query);

  d('query result %O', result);
  parentPort.postMessage({
    err: null,
    result: {
      count: result.count,
      rows: result.rows.map((m) => m.toJSON()),
    },
  });
} catch (err) {
  d('error %O', err);
  parentPort.postMessage({err, result: null});
}
