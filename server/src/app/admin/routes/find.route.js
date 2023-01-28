/* eslint-disable valid-jsdoc */
import {Worker} from 'node:worker_threads';
import {findWorkerPath} from '../../workers.paths.js';
import {models as sqlModels} from '../../../db/models.js';
import debug from 'debug';

const d = debug('router:admin:find');
const models = Object.keys(sqlModels).map((m) => m.toLowerCase());

/**
 * request handler for finding data
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export default function find(req, res) {
  d('request body %O', req.body);

  if (!req.body?.model) {
    res.status(400).json({err: 'Missing model name'});
    return;
  }
  const modelname = req.body.model;

  if (!req.body?.query) {
    res.status(400).json({err: 'Missing sequlize query'});
    return;
  }
  const query = req.body.query;

  if (!models.includes(modelname)) {
    res.status(400).json({err: 'Invalid model name'});
    return;
  }

  new Worker(findWorkerPath, {workerData: {query, modelname}})
      .on('message', (msg) => {
        res.status(200).json({err: msg.err, result: msg.result});
        d('message from worker:find %O', msg);
      })
      .on('error', (err) => {
      // throw err;
        res.json({err, result: null});
        d('Error in worker:find %O', err);
      });
  d('worker started');
}
