// eslint-disable-next-line valid-jsdoc
/**
 * check if request has content-type application/json
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export default function checkReqIsJSON(req, res, next) {
  if (!req.is('application/json')) {
    res.status(400).json({err: 'Invalid Content-type Only JSON allowed'});
    return;
  }
  if (typeof next === 'function') next();
};
