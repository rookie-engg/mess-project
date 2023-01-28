/* eslint-disable valid-jsdoc */
import {deleteWorkerPath} from '../../workers.paths';
import {Worker} from 'node:worker_threads';
import debug from 'debug';

const d = debug('router:admin:delete');

/**
 * paranoid delete customer
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function paranoidDeleteCustomer(req, res) {
  const cid = req.get('x-cid');

  if (typeof cid !== 'string') {
    res.status(400).json({err: 'Invalid header x-cid'});
    return;
  }

  new Worker(deleteWorkerPath, {
    workerData: {modelname: 'customer', cid},
  }).on('message', (msg) => {
    switch (msg) {
      case 'success':
        d('success deleted cid:%s', cid);
        res.status(200).json({err: null, msg: 'successfully deleted'});
        return;
      case 'invalid-id':
        d('invalid-id, cid: %s', cid);
        res.status(200).json({err: 'invalid cid', msg: 'fail to deleted'});
        return;
      default:
        d('failed delete');
        res.status(500).json({err: 'unknown err', msg: 'failed'});
        return;
    }
  }).on('error', (err) => {
    d('%O', err);
    res.status(500).json({err});
  });
}
