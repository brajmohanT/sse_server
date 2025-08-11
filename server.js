import express from 'express';
import apiRouter from './routes/apiRoutes.js';
import dotenv from 'dotenv'
import sseRouter from './sse/sseRoutes.js';

dotenv.config();

const app = express();

//middleware
app.use(express.json())

//routers
app.use('/api', apiRouter)
app.use('/events', sseRouter)


const PORT = process.env.PORT || 3000;

console.log("port", process.env.PORT)

app.listen(PORT, ()=>{
console.log(`Server-Sent Events🎉🎊🐇🦒  ${PORT}`);
})

export default app;