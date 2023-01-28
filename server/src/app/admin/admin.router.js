import {Router} from 'express';
import checkReqIsJSON from '../middlerwares/checkReqIsJSON.js';
import find from './routes/find.route.js';
import create from './routes/create.route.js';

// eslint-disable-next-line new-cap
const amdinRouter = Router();

amdinRouter.route('/find').get(checkReqIsJSON, find);

amdinRouter.route('/create').post(create);

export default amdinRouter;
