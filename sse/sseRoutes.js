import {Router} from 'express'
import { addClient, removeClient } from './sseManager';
import {v4 as uuidv4} from 'uuid'


const sseRouter = new Router()


sseRouter.get("/getemoji",(req, res)=>{

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const clientId = uuidv4();
    addClient(clientId, res)

    req.on('close', ()=>{
        removeClient(clientId)
        res.end()
    })


})

export default sseRouter