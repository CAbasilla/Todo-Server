import { Router, RequestHandler } from "express";
import { createClient } from '@vercel/edge-config';

const router = Router();

const getGreetings: RequestHandler = async(req, res, next) => {
    const edgeConfig = createClient(process.env.EDGE_CONFIG);

    const greeting = await edgeConfig.get('greeting');

    res.status(200).json(greeting);
}

router.get('/', getGreetings);

export default router;