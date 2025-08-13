import express from 'express';
import apiRouter from './routes/apiRoutes.js';
import dotenv from 'dotenv'
import sseRouter from './sse/sseRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

const corsOptions = {
    origin: process.env.FRONT_END_URL_LOCAL, 
};

app.use(cors(corsOptions));

//middleware
app.use(express.json())


// Error Handling in case of invalid JSON
app.use((err, req, res, next)=>{
    if(err instanceof SyntaxError && err.status===400 && 'body' in err){
        return res.status(400).json({error: 'Invalid Json Formate'})
    }
    next()
})

//routers
app.use('/api', apiRouter)
app.use('/events', sseRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
console.log(`Server-Sent Events🎉🎊🐇🦒  ${PORT}`);
})

export default app;