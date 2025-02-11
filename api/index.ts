import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import '@dotenvx/dotenvx';

import todoRoutes from './src/routes/todos';
import helloRoutes from './src/routes/hello';
import greetingsRoutes from './src/routes/greetings';

const app = express();

app.use(json());

app.use('/', helloRoutes);

app.use('/greetings', greetingsRoutes);

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;