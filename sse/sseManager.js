const clients = new Map() //<id,res>

const addClient=(id,res)=>{
    clients.set(id,res)
}

const removeClient= (id)=>{
    clients.delete(id)
}

const sendToAll = (data)=>{
    clients.forEach(res=> res.write(data))
}

const sendToClient = (id, data) =>{
     const res = clients.get(id);
    if (res) {
        res.write(data);
    }
}

export {addClient, removeClient, sendToAll, sendToClient}