import {Router} from 'express';

// eslint-disable-next-line new-cap
const clientRouter = Router();

clientRouter.route('/').get((_req, res) => {
  res.status(200).send('this is client api');
});

export default clientRouter;
