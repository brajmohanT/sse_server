import { sendToAll } from "../sse/sseManager.js"

const welcome = (req, res) =>{
    res.send('Kya kr rhe ho yha🫢, Jaao👟 Kuch Kro⚒️')
}

const readEntries = (req, res)=>{
    res.send("reding data from DB⚾")
}

const writeEmoji = (req, res) =>{

    const body = req.body

    // body formate: {name:string, emoji:string, time:string}

    if(!body.name || !body.emoji || !body.time){
        return res.status(400).json({error: "missing params"})
    }

    sendToAll({name : body.name,emoji: body.emoji, time:body.time })

    res.status(201).send({
        message: "sharing emoji with others.",
        code:200
    })
}

export {welcome, readEntries,writeEmoji}