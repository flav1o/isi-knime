import express, { Request, Response } from 'express';

const app = express();
app.use(express.json({limit: '100000mb'}));
const port: number = 3000;

app.post('/', (req: Request, res: Response) => {
  console.log("Body: ", req.body)
  res.status(200)
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});