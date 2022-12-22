const express = require('express');
const app = express();
// app.use(cors());
// const AllMyuserRouter= require()
const server = app.listen(8000, ()=> console.log("The Server is on fire"));
const io = require('socket.io')(server,{cors:true});
io.on ("connection" ,socket => {console.log(socket.id)})
// io.on("connection",socket=>{
//     socket.on("event_from_client",data=>{
//         socket.broadcast.emit("send_data_to_all_other_clients", data);
//     });
// })
io.on("connection",socket=>{
    socket.on("chat",data=>{
    io.emit("chat", data)});
})

    //on listener
//emit send data