import { Router, RequestHandler } from "express";

const router = Router();

const getHello: RequestHandler = (req, res, next) => {
    res.status(200).json({message: 'hello world'});
}

router.get('/', getHello);

export default router;