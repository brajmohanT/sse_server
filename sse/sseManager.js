const clients = new Map() //<id,res>

const addClient=(id,res)=>{
    clients.set(id,res)
}

const removeClient= (id)=>{
    clients.delete(id)
}

const sendToAll = (data)=>{
    const eventPackage = `event: emoji-throw\ndata: ${JSON.stringify(data)}\n\n`
    clients.forEach(res=> res.write(response))
}

const sendToClient = (id, data) =>{
     const res = clients.get(id);
    if (res) {
        const eventPackage = `event: emoji-throw\ndata: ${JSON.stringify(data)}\n\n`
        res.write(data);
    }
}

const heartBeat = (id, data) =>{
    const res = clients.get(id)
    if(res){
    const eventPackage = `event: heartbeat\ndata: ${JSON.stringify(data)}\n\n`
        res.write(eventPackage)
    }
}

export {addClient, removeClient, sendToAll, sendToClient,heartBeat}