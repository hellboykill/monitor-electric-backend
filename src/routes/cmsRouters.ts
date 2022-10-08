import { Router } from 'express';
import { cmsController } from '../controllers/cmsControllers';
var CmsRouter = Router();

CmsRouter.post('/createSensor', (req, res) => {
  cmsController.createSensor(req, (err, rs) => {
    if (err) {
      res.status(400).send(err);
      return;
    } else res.send(rs);
  });
});

CmsRouter.post('/createGateway', (req, res) => {
  console.log('create gateway request');

  cmsController.createGateway(req, (err, rs) => {
    if (err) {
      res.status(400).send(err);
      return;
    } else res.send(rs);
  });
});

CmsRouter.post('/createSystem', (req, res) => {
  cmsController.createSystem(req, (err, rs) => {
    if (err) {
      res.status(400).send(err);
      return;
    } else res.send(rs);
  });
});

CmsRouter.post('/createConfig', (req, res) => {
  cmsController.createGatewayConfig(req, (err, rs) => {
    if (err) {
      res.status(400).send(err);
      return;
    } else res.send(rs);
  });
});

CmsRouter.post('/reloadConfig', (req, res) => {
  cmsController.reloadConfig((err, rs) => {
    if (err) {
      res.status(400).send(err);
      return;
    } else res.send(rs);
  });
});

export default CmsRouter;
