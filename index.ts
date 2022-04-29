import express, {Express, Request, Response} from "express";

const app: Express = express();

const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('FUCK yeaasdfh');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});

