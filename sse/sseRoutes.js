import {Router} from 'express'
import { addClient, removeClient } from './sseManager';


const sseRouter = new Router()


sseRouter.get("/getemoji",(req, res)=>{

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    addClient(12345, res)

    req.on('close', ()=>{
        removeClient(1234)

        res.end()
    })


})

export default sseRouter