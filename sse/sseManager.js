const clients = new Map() //<id,res>

const addClient=(id,res)=>{
    clients.set(id,res)
}

const removeClient= (id)=>{
    clients.delete(id)
}

const sendToAll = (data)=>{
    const message = `data is this ${JSON.stringify(data)}\n \n`

    clients.forEach(res=> res.write(message))

}

const sendToClient = (id, data) =>{
     const res = clients.get(id);
    if (res) {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }

}

export {addClient, removeClient, sendToAll, sendToClient}