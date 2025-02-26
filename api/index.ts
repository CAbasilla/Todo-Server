import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { json } from 'body-parser';

import '@dotenvx/dotenvx';

import todoRoutes from './src/routes/todos';
import helloRoutes from './src/routes/hello';
import greetingsRoutes from './src/routes/greetings';

const app = express();

app.use(cors());
app.use(json());

app.use(cors({
    origin: 'http://localhost:8081',  // Or your React Native app's origin
    methods: 'GET,POST,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  }));

app.use('/', helloRoutes);

app.use('/greetings', greetingsRoutes);

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;