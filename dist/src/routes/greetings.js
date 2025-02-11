"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const getGreetings = (req, res, next) => {
    // const edgeConfig = createClient('https://edge-config.vercel.com/ecfg_5x4agajeamnwqyvrtprixfisl0ih?token=07478419-8066-44f3-95d8-112d93879ec9');
    console.log(process.env.EDGE_CONFIG);
    // const greeting = edgeConfig.get('greeting');
    res.status(200).json('');
};
router.get('/', getGreetings);
exports.default = router;
