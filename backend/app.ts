// import express
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// configure dotenv to load environment variables
dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || '3000';

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});


app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
