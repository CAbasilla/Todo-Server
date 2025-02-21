import { Router, RequestHandler } from "express";
// import { createClient } from '@vercel/edge-config';

const router = Router();

const getGreetings: RequestHandler = async(req, res, next) => {
    // const edgeConfig = createClient(process.env.EDGE_CONFIG);

    // const todo = await edgeConfig.get('todo');

    res.status(200).json([]);
}

router.get('/', getGreetings);

export default router;