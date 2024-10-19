import express, { Request, Response } from 'express';
import { generateFakeData } from './fake-data';
import db from './mongodb';

const app = express();
const port: number = 3000;
app.use(express.json({limit: '100000mb'}));

app.post('/notify-users', (req: Request, res: Response) => {
  res.status(200)
});

app.post('/generate-addresses', async (req: Request, res: Response) => {
  const addresses = generateFakeData(1000)
  await db.collection('addresses').insertMany(addresses)
  res.status(200)
});

app.listen(port, () => {
  console.log(`Serving on: ${port}`);
});