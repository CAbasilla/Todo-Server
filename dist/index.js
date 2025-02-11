"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
require("@dotenvx/dotenvx");
const todos_1 = __importDefault(require("./src/routes/todos"));
const hello_1 = __importDefault(require("./src/routes/hello"));
const greetings_1 = __importDefault(require("./src/routes/greetings"));
console.log(process.env.EDGE_CONFIG);
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/', hello_1.default);
app.use('/greetings', greetings_1.default);
app.use('/todos', todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000, () => console.log("Server ready on port 3000."));
exports.default = app;
