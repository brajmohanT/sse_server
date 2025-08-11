
import { Router } from 'express'
import {welcome,readEntries, emojiThrow} from '../controllers/apiControllers.js'

const apiRouter = Router()

apiRouter.get('/', welcome)

apiRouter.get('/read',readEntries)

apiRouter.post('/emoji-throw',emojiThrow)

export default apiRouter;