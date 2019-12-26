import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) =>
  res.json({
    message: 'first route',
  })
);

export default router;
