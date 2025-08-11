import {Router} from 'express'
import { addClient, heartBeat, removeClient } from './sseManager.js';
import {v4 as uuidv4} from 'uuid'


const sseRouter = new Router()


sseRouter.get("/emoji-stream",(req, res)=>{

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const clientId = uuidv4();
    addClient(clientId, res)

    const heartBeatInterval = setInterval(() => {
        heartBeat(clientId, {timestamp: Date.now()})
    }, 3000);


    req.on('close', ()=>{
        removeClient(clientId)
        clearInterval(heartBeatInterval)
        res.end()
    })


})

export default sseRouter