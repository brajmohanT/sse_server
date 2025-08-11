const welcome = (req, res) =>{

    res.send('Kya kr rhe ho yha🫢, Jaao👟 Kuch Kro⚒️')
}

const readEntries = (req, res)=>{
    res.send("reding data from DB⚾")
}

const writeEmoji = (req, res) =>{


    res.status(200).send({
        message: "sharing emoji with others.",
        code:200
    })
}

export {welcome, readEntries,writeEmoji}