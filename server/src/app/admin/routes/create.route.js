/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
import {Worker} from 'node:worker_threads';
import {createWorkerPath} from '../../workers.paths.js';
import {models as sqlModels} from '../../../db/models.js';
import debug from 'debug';

const d = debug('router:admin:create');

/**
 * request handler for create
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export default function create(req, res) {
  d('%O', req.body);
}

