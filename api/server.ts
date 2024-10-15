import express, { Request, Response } from 'express';

const app = express();
app.use(express.json({limit: '100000mb'}));
const port: number = 3000;

app.post('/', (req: Request, res: Response) => {
  console.log("Hello, TypeScript + Node.js + Express!", req.body)
  res.send('Hello, TypeScript + Node.js + Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});