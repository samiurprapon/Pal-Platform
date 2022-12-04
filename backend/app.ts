// import express
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// configure dotenv to load environment variables
dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : app.use(morgan('common'));

app.get('/', (req: Request, res: Response) => {
	return res.send('Hello World!');
});

try {
	app.listen(port, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
	});
} catch (err) {
	console.log(err);
}
