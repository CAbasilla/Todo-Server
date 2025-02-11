"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const getHello = (req, res, next) => {
    res.status(200).json({ message: 'hello world' });
};
router.get('/', getHello);
exports.default = router;
