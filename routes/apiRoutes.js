
import { Router } from 'express'
import {welcome,readEntries, writeEmoji} from '../controllers/apiControllers.js'

const apiRouter = Router()


apiRouter.get("/listen", (req,res)=>{
    res.send("Yes,⛷️ We are listening you gadhe")
})

apiRouter.get('/', welcome)

apiRouter.get('/read',readEntries)

apiRouter.post('/writeemoji',writeEmoji)




export default apiRouter;