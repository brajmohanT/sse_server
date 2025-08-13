import { sendToAll } from "../sse/sseManager.js"

const welcome = (req, res) =>{
    res.send('Kya kr rhe ho yha🫢, Jaao👟 Kuch Kro⚒️')
}

const readEntries = (req, res)=>{
    res.send("reding data from DB⚾")
}

const emojiThrow = (req, res) =>{

    const body = req.body

    // body formate:
    /* 
    {
          emoji,
          x,
          y,
          userId,
          username,
          timestamp: Date.now()
        }
    */

    if(!body.emoji || !body.x || !body.y || !body.userId || !body.username || !body.timestamp){
        return res.status(400).json({error: "missing params"})
    }

    sendToAll({emoji: body.emoji, x: body.x, y: body.y, userId: body.userId, username: body.username, timestamp: body.timestamp })

    res.status(201).send({
        message: "Emoji thrown successfully",
        code:200
    })
}

export {welcome, readEntries,emojiThrow}